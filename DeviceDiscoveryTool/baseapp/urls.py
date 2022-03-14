from django.urls import path
from . import views

urlpatterns = [
    path('', views.getOS, name="getOS"),
]
