import os
from dotenv import load_dotenv, find_dotenv
from fastapi import APIRouter, Depends, Request, Response
from fastapi.responses import JSONResponse
from typing import Annotated, Dict, List, Optional
from langchain.chat_models import ChatOpenAI
from langchain import LLMChain, PromptTemplate
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate

from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)
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
        + "\n\n{text}")

    return prompt


@router.get("/api/chat/", tags=["chat"])
async def chat_api(
    request: Request,
    text: str,
    author: Optional[str] = None,
    school: Optional[str] = None,
    course: Optional[str]=None,
    sectionId: Optional[str]=None,
    lessonId: Optional[str]=None,
    prompt: Annotated[Optional[PromptTemplate], Depends(get_prompt)]=None
    ): # type: ignore
    # prompt = prompt + "{text}"
    prompt.format_prompt(school=school, course=course, text=text)
    print("PROMPT:", prompt, '\n', school, course, lessonId)

    chain = LLMChain(llm=model, prompt=prompt)
    message = chain.run(dict(school=school, course=course, text=text))
    print("RESPONSE:", message)
    # prompt = prompt

    return JSONResponse(content=message)