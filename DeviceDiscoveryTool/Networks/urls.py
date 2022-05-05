from django.urls import path
from . import views

urlpatterns = [
	path('contacts/', views.contact, name='contact'),
	path('devices/', views.device, name='device'),
]