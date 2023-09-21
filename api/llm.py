import asyncio
import json
import os
from dotenv import load_dotenv, find_dotenv
from fastapi import APIRouter, Depends, Request, Response, Header
from fastapi.responses import JSONResponse, StreamingResponse
from typing import Annotated, AsyncIterable, Dict, List, Optional
from langchain.chat_models import ChatOpenAI
from langchain import LLMChain, PromptTemplate
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate
from langchain.memory import ChatMessageHistory
from langchain.callbacks import AsyncIteratorCallbackHandler

from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)
from pydantic import BaseModel
load_dotenv(find_dotenv())

router = APIRouter()

model = ChatOpenAI(openai_api_key=os.environ['OPENAI_API_KEY'], 
                  model="gpt-3.5-turbo") # type: ignore

# def get_session(request: Request) -> dict:
#     return request.session

def get_prompt() -> PromptTemplate:
    prompt = PromptTemplate.from_template(
        "You are a helpful math tutor that answer problems from {course} students in {school} high school. "
        + "You should help the user understand the problem and how to solve it. " 
        + "Give chain-of-thought explanations and show your work, but be concise and use 9th grade level language."
        + "\n\n{text}"
    )

    return prompt

class Message(BaseModel):
    """Request body for streaming."""
    content: str

async def send_message(query: str) -> AsyncIterable[str]:
    callback = AsyncIteratorCallbackHandler()
    model = ChatOpenAI(
        streaming=True,
        verbose=True,
        callbacks=[callback],
        model="gpt-3.5-turbo",
        temperature=0.0,
    )

    task = asyncio.create_task(
        model.agenerate(messages=[[HumanMessage(content=query)]])
    )

    try:
        async for token in callback.aiter():
            yield token
    except Exception as e:
        print(f"Caught exception: {e}")
    finally:
        callback.done.set()

    await task

# @router.get("/api/chat/", tags=["chat"])
async def chat_api(
    request: Request,
    text: Optional[str] = None,
    author: Optional[str] = None,
    school: Optional[str] = None,
    course: Optional[str]=None,
    sectionId: Optional[str]=None,
    lessonId: Optional[str]=None,
    prompt: Annotated[Optional[PromptTemplate], Depends(get_prompt)]=None
    ) -> StreamingResponse: # type: ignore
    history = request.headers["X-History"]
    if history:
        message_history = json.loads(history)
        print("message_history", message_history)

    # prompt = prompt + "{text}"
    prompt.format_prompt(school=school, course=course, text=text)
    print("PROMPT:", prompt, '\n', school, course, lessonId)
    
    chain = LLMChain(llm=model, prompt=prompt)
    message = chain.run(dict(school=school, course=course, text=text))
    print("RESPONSE:", message)
    # prompt = prompt

    return message

@router.post("/api/chat/", tags=["chat"])
async def stream_chat(
    request: Request,
    text: str,
    author: Optional[str]=None,
    school: Optional[str]=None,
    course: Optional[str]=None,
    sectionId: Optional[str]=None,
    lessonId: Optional[str]=None,
    prompt: Annotated[Optional[PromptTemplate], Depends(get_prompt)]=None) -> StreamingResponse:

    generator = send_message(text)
    return StreamingResponse(generator, media_type="text/event-stream")