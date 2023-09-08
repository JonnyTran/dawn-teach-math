import os
from dotenv import load_dotenv, find_dotenv
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from typing import Annotated
from langchain.chat_models import ChatOpenAI
from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)
load_dotenv(find_dotenv())

router = APIRouter()

chat = ChatOpenAI(openai_api_key=os.environ['OPENAI_API_KEY'], 
                  model="gpt-3.5-turbo") # type: ignore

@router.get("/api/chat/", tags=["chat"])
async def chat_api(text: str, author: str = None): # type: ignore
    print("MESSAGE:", text)
    response = chat.predict(text=text)
    print("RESPONSE:", response)
    return JSONResponse(content=response)