from django.urls import path, include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'contacts', views.ContactViewSet)
router.register(r'devices', views.DeviceViewSet)

urlpatterns = [
	path('', include(router.urls))
]


# urlpatterns = [
# 	path('contacts/', views.contact, name='contact'),
# 	path('devices/', views.device, name='device'),
# ]
