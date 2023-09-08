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


