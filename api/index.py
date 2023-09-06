import asyncio
import os
from typing import Optional
import httpx
from dotenv import load_dotenv, find_dotenv
from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse
from authlib.integrations.httpx_client import OAuth1Auth

load_dotenv(find_dotenv())

app = FastAPI()

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

limits = httpx.Limits(max_keepalive_connections=5, max_connections=10)
timeout = httpx.Timeout(timeout=5.0, read=15.0)
asyncio.set_event_loop_policy(asyncio.get_event_loop_policy())
client = httpx.AsyncClient(limits=limits, timeout=timeout, auth=oauth)

@app.on_event("shutdown")
async def shutdown_event():
    print("shutting down...")
    await client.aclose()


@app.get("/api/{path:path}")
async def proxy_schoology_api(path: str):
    """
    Proxies GET requests to the API_BASE_URL with OAuth1 authentication.
    """
    url = os.path.join(base_url, path.replace('/api', ''))

    try:
        response = await client.get(url, timeout=5)

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

    