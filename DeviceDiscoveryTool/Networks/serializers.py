from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=100)
    notes = serializers.CharField(max_length=200)

    class Meta:
        model = Contact
        fields = ('__all__')