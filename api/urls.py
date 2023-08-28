# example/urls.py
from django.urls import path
from api.proxy import proxy_api

urlpatterns = [
    path('api/<path:path>', proxy_api),
]