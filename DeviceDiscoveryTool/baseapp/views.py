from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


import nmap
import json

 
scanner = nmap.PortScanner()
nm = nmap.PortScanner()
 
ip_baseline = '10.0.0.0'
pingScan = []
osinfo = []
flag = []



ip_addr = '127.0.0.1'
ip_baseline = '10.0.0.0'
ipPassed = ""





@api_view(['GET'])
def getOS(request, pk):


    #osinfo.append(scanner.scan(pk, arguments="-O")['scan'][pk]['osmatch'][0])

    info = scanner.scan(pk, arguments="-O")['scan'][pk]['osmatch'][0]
    info["IP_Address"] = pk


    if not pingScan:
        nm.scan(hosts=ip_baseline+'/24', arguments='-n -sP -PE -PA21,23,80,3389')
        hosts_list = [(x, nm[x]['status']['state']) for x in nm.all_hosts()]
        for host, status in hosts_list:
            print('{0}:{1}'.format(host, status))
            pingScan.append(('{0} : {1}'.format(host, status)).upper())
            info = scanner.scan(host, arguments="-O")['scan'][host]['osmatch'][0]
            info["IP_Address"] = host
            if not flag:
                osinfo.append(info)


    if not flag:
        info["pinged"] = pingScan
        osinfo.append(info)

    flag.append("True")

    return Response(osinfo)


