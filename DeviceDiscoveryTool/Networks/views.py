from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.http import HttpRequest
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from .models import Device

# Create your views here.
def index(request):
	return HttpResponse("Hello World!")

@api_view(['GET'])
def contact(request):
	#assert isinstance(request, HttpRequest)

	contact_list = Contact.objects.order_by('name').values()



	return Response({"Contacts": list(contact_list)})

@api_view(['GET'])
def device(request):
	#assert isinstance(request, HttpRequest)

	device_list = Device.objects.order_by('name').values()



	return Response({"Devices": list(device_list)})