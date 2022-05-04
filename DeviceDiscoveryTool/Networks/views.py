from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ContactSerializer, DeviceSerializer
from .models import Contact
from .models import Device


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class DeviceViewSet(viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer

# # TODO: Look at views.py in DjangoLearning to change all of the below code.
# @api_view(['GET', 'POST'])
# def contact(request):
#     #assert isinstance(request, HttpRequest)

#     if request.method == 'GET':
#         contact_list = Contact.objects.order_by('name').values()
#         return Response({"Contacts": list(contact_list)})

#     elif request.method == 'POST':
#         newFav = False
#         #c = Contact(favorite=False, name='Jimmy Post', email='postfromview@mail.com', phone='12377777', notes='none yet')
#         print("POST WAS INVOKED")
#         # data = request.data
#         text = request.data["data"]["favorite"]
#         strippedFav= str(text).replace('[','').replace(']','').replace('\'','').replace('\"','')
#         print(strippedFav)
#         text = request.data["data"]["cname"]
#         strippedName= str(text).replace('[','').replace(']','').replace('\'','').replace('\"','')
#         print(strippedName)
#         text = request.data["data"]["email"]
#         strippedEmail= str(text).replace('[','').replace(']','').replace('\'','').replace('\"','')
#         print(strippedEmail)
#         text = request.data["data"]["phone"]
#         strippedPhone= str(text).replace('[','').replace(']','').replace('\'','').replace('\"','')
#         print(strippedPhone)
#         text = request.data["data"]["notes"]
#         strippedNotes= str(text).replace('[','').replace(']','').replace('\'','').replace('\"','')
#         print(strippedNotes)

#         if strippedFav == "1":
#             newFav = True
#             #print("New Fav: " + str(newFav))

#         c = Contact(favorite=newFav, name=strippedName, email = strippedEmail, phone = strippedPhone, notes = strippedNotes)
#         c.save()
#         return Response({"status": "success", "data": request.data})


# @api_view(['GET', 'POST'])
# def device(request):
#     #assert isinstance(request, HttpRequest)

#     if request.method == 'GET':
#         device_list = Device.objects.order_by('name').values()


#     elif request.method == 'POST':
#         x = 2


#     return Response({"Devices": list(device_list)})