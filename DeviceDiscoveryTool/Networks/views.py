from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ContactSerializer, DeviceSerializer
from .models import Contact
from .models import Device
from rest_framework.decorators import api_view
from rest_framework.response import Response


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ContactSerializer(instance)
        return Response(serializer.data)

    
class DeviceViewSet(viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = DeviceSerializer(instance)
        return Response(serializer.data)
