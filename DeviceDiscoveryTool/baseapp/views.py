from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import nmap
import json

 
scanner = nmap.PortScanner()
nm = nmap.PortScanner()
nmScan = nmap.PortScanner()
 

ip_addr = '127.0.0.1'
ip_baseline = '10.0.0.0'


@api_view(['GET'])
def getOS(request, pk):

    pingScan = []
    osinfo = []
    flag = []
    st = ""

    if pk == 'undefined':
         pk = ip_addr

    info = scanner.scan(pk, arguments="-O")['scan'][pk]['osmatch'][0]
    info["IP_Address"] = pk

    

    nmScan.scan(pk, '21-443')
    for host in nmScan.all_hosts():
     print('Host : %s (%s)' % (host, nmScan[host].hostname()))
     print('State : %s' % nmScan[host].state())
     for proto in nmScan[host].all_protocols():
        #  print('----------')
        #  print('Protocol : %s' % proto)

         lport = nmScan[host][proto].keys()
         sorted(lport)
         for port in lport:
            # print ('port : %sstate : %s' % (port, nmScan[host][proto][port]['state']))
            st = st + ('%s : %s, ' % (port, nmScan[host][proto][port]['state']))

    info["Ports"] = st           
    

    if not pingScan:
        nm.scan(hosts=ip_baseline+'/24', arguments='-n -sP -PE -PA21,23,80,3389')
        hosts_list = [(x, nm[x]['status']['state']) for x in nm.all_hosts()]
        for host, status in hosts_list:
            print('{0}:{1}'.format(host, status))
            pingScan.append(('{0}:{1},  '.format(host, status)).upper())
            # info = scanner.scan(host, arguments="-O")['scan'][host]['osmatch'][0]
            # info["IP_Address"] = host
            # if not flag:
            #     osinfo.append(info)

    if not flag:
        info["pinged"] = pingScan
        osinfo.append(info)

    flag.append("True")

    return Response(osinfo)


