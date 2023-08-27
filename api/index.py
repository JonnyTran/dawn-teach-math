import requests
import os
from dotenv import load_dotenv, find_dotenv
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from requests_oauthlib import OAuth1Session

load_dotenv(find_dotenv())

@csrf_protect
def proxy_api(request: requests.Request):
    """
    Proxies GET requests to the specified URL using OAuth1 authentication.
    """
    if request.method == 'GET':
        base_url = os.environ.get('API_BASE_URL')
        if base_url is None or base_url == '':
            return JsonResponse({'error': 'No base URL provided.'})

        url = base_url + request.path.replace('/api', '')

        oauth = OAuth1Session(
            client_key=os.environ['CONSUMERKEY'],
            client_secret=os.environ['CONSUMERSECRET'],
        )
        response = oauth.get(url)
        return JsonResponse(response.json(), safe=False)
    
    return JsonResponse({'error': 'Invalid request method.'})

