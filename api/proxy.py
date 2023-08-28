import requests
import os
from dotenv import load_dotenv, find_dotenv
from django.http import JsonResponse
from django.core.handlers.wsgi import WSGIRequest
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from requests_oauthlib import OAuth1Session

load_dotenv(find_dotenv())

@csrf_protect
def proxy_api(request: WSGIRequest, path: str):
    """
    Proxies GET requests to the specified URL using OAuth1 authentication.
    """
    if request.method == 'GET':
        base_url = os.environ.get('API_BASE_URL')
        if base_url is None or base_url == '':
            return JsonResponse({'error': 'No base URL provided. Please set API_BASE_URL in environment variables.'})

        url = os.path.join(base_url, path.replace('/api', ''))

        oauth = OAuth1Session(
            client_key=os.environ['CONSUMERKEY'],
            client_secret=os.environ['CONSUMERSECRET'],
        )
        try:
            response = oauth.get(url, timeout=5)
            response.raise_for_status()
            return JsonResponse(response.json(), safe=False)
        
        except requests.exceptions.Timeout:
            return JsonResponse({'error': 'Request timed out.'})
        except requests.exceptions.RequestException as e:
            return JsonResponse({'error': str(e)})
    
    return JsonResponse({'error': 'Invalid request method.'})

