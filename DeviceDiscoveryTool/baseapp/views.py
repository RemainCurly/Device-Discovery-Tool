from django.shortcuts import render
from django.http import JsonResponse
from .osinfo import osinfo

ip_addr = '127.0.0.1'
ip_baseline = '10.0.0.0'


def getOS(request):
    return JsonResponse(osinfo,safe=False)
