import os, requests
from dotenv import load_dotenv, find_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from requests_oauthlib import OAuth1Session

load_dotenv(find_dotenv())

app = FastAPI()

try:
    base_url = os.environ.get('API_BASE_URL', default="https://api.schoology.com/v1/")
    if base_url is None or base_url == '':
        print('No base URL provided. Please set API_BASE_URL in environment variables.')

    oauth = OAuth1Session(
        client_key=os.environ['CONSUMERKEY'],
        client_secret=os.environ['CONSUMERSECRET'],
    )
except KeyError as ke:
    print("Please set API_BASE_URL, CONSUMERKEY and CONSUMERSECRET in environment variables.")
    raise ke


@app.on_event("shutdown")
def shutdown_event():
    """
    Closes the OAuth1Session when the server shuts down.
    """
    print("shutting down...")
    oauth.close()


@app.get("/api/{path:path}")
async def proxy_api(path: str):
    """
    Proxies GET requests to the API_BASE_URL with OAuth1 authentication.
    """
    url = os.path.join(base_url, path.replace('/api', ''))

    try:
        response: requests.Response = oauth.get(url, timeout=5)
        response.raise_for_status()
    
    except requests.exceptions.Timeout:
        return JSONResponse({'error': 'Request timed out.'})
    
    except requests.exceptions.HTTPError as he:
        return JSONResponse({'error': str(he), 'url': url})
    
    except requests.exceptions.RequestException as re:
        return JSONResponse({'error': str(re), 'url': url})
    
    except Exception as e:
        return JSONResponse({'error': str(e)})
    
    return JSONResponse(content=response.json(), status_code=response.status_code)

    