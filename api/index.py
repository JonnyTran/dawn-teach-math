import os, requests, uvicorn
from dotenv import load_dotenv, find_dotenv
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from requests_oauthlib import OAuth1Session

load_dotenv(find_dotenv())

app = FastAPI()

try:
    oauth = OAuth1Session(
        client_key=os.environ['CONSUMERKEY'],
        client_secret=os.environ['CONSUMERSECRET'],
    )
except KeyError as ke:
    print("Please set CONSUMERKEY and CONSUMERSECRET in environment variables.")
    raise ke

@app.get("/api/{path}")
async def proxy_api(path: str):
    """
    Proxies GET requests to the specified URL using OAuth1 authentication.
    """
    base_url = os.environ.get('API_BASE_URL', default="https://api.schoology.com/v1/")
    if base_url is None or base_url == '':
        return JSONResponse({'error': 'No base URL provided. Please set API_BASE_URL in environment variables.'})

    url = os.path.join(base_url, path.replace('/api', ''))

    try:
        response = oauth.get(url, timeout=5)
        response.raise_for_status()
        return JSONResponse(content=response.json(), status_code=response.status_code)
    
    except requests.exceptions.Timeout:
        return JSONResponse({'error': 'Request timed out.'})
    except requests.exceptions.RequestException as e:
        return JSONResponse({'error': str(e)})
    
    return JSONResponse({'error': 'Invalid request method.'})


if __name__ == "__main__":
    uvicorn.run("index:app", host="0.0.0.0", port=8000, reload=True)
