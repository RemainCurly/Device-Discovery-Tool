from django.urls import path, include
from rest_framework import routers
from . import views


urlpatterns = [
	path('contacts/', views.contact, name='contact'),
	path('devices/', views.device, name='device'),
]
