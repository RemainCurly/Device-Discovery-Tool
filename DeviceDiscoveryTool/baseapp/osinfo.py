import nmap
import json

 
scanner = nmap.PortScanner()
 
ip_addr = '127.0.0.1'
ip_baseline = '10.0.0.0'


osinfo = [
    {
        'IP_Address': ip_addr
    },
]

osinfo.append(scanner.scan(ip_addr, arguments="-O")['scan'][ip_addr]['osmatch'][0])
