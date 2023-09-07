import asyncio
from typing import Annotated, Union
import os
from typing import Optional
import httpx
from dotenv import load_dotenv, find_dotenv
from fastapi import FastAPI, Depends, Request, Response
from fastapi.responses import JSONResponse
from authlib.integrations.httpx_client import OAuth1Auth
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from api.llm import load_llm_model

load_dotenv(find_dotenv())
app = FastAPI()
limits = httpx.Limits(max_keepalive_connections=5, max_connections=10)
timeout = httpx.Timeout(timeout=5.0, read=15.0)

try:
    base_url = os.environ.get('API_BASE_URL', default="https://api.schoology.com/v1/")
    if base_url is None or base_url == '':
        print('No base URL provided. Please set API_BASE_URL in environment variables.')

    oauth = OAuth1Auth(
        client_id=os.environ['CONSUMERKEY'],
        client_secret=os.environ['CONSUMERSECRET'],
    )
except KeyError as ke:
    print("Please set API_BASE_URL, CONSUMERKEY and CONSUMERSECRET in environment variables.")
    raise ke


@app.get("/api/schoology/{path:path}")
async def proxy_schoology_api(path: str):
    """
    Proxies GET requests to the API_BASE_URL with OAuth1 authentication.
    """
    async with httpx.AsyncClient(limits=limits, timeout=timeout, auth=oauth) as client:
        url = os.path.join(base_url, path.replace('/api/schoology', ''))

        try:
            response = await client.get(url)
            response.raise_for_status()
        
        except httpx.ConnectTimeout:
            return JSONResponse(content={"error": "Connection timeout"}, status_code=408)
        except httpx.ReadTimeout:
            return JSONResponse(content={"error": "Read timeout"}, status_code=408)
        except httpx.HTTPError:
            return JSONResponse(content={"error": "HTTP error"}, status_code=500)
        except Exception as e:
            print(e)
            return JSONResponse(content={"error": "Unknown error"}, status_code=500)
        
        return JSONResponse(content=response.json(), status_code=response.status_code)


@app.get("/api/chat/{message:path}")
async def chat_api(message: str, model: Annotated[ChatOpenAI, Depends(load_llm_model)]):
    print("MESSAGE:", message)
    response = model.predict(text=message)
    return JSONResponse(content=response)