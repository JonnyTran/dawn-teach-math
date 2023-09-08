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


def load_llm_model() -> ChatOpenAI:
    chat_model = ChatOpenAI(openai_api_key=os.environ['OPENAI_API_KEY'], 
                            model="gpt-3.5-turbo")
    return chat_model