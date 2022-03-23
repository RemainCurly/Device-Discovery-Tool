from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


import nmap
import json

 
scanner = nmap.PortScanner()
 
ip_addr = '127.0.0.1'
ip_baseline = '10.0.0.0'



ip_addr = '127.0.0.1'
ip_baseline = '10.0.0.0'

@api_view(['GET'])
def getOS(request, pk):
    osinfo = [
        {
            'IP_Address': pk
        },
    ]
    osinfo.append(scanner.scan(pk, arguments="-O")['scan'][pk]['osmatch'][0])
    return Response(osinfo)
