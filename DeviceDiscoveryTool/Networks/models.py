from django.db import models

##### DISCLAIMER #####
# These are dummy models. The real models will come from the SQL database.
# They are only here to allow for admin.py to compile properly.

class Device(models.Model):
    favorite = models.BooleanField(default=False)
    name = models.CharField(max_length=100)
    ip_address = models.CharField(max_length=100, blank=False)
    mac_address = models.CharField(max_length=100)
    description = models.CharField(max_length=200, blank=True)
    status = models.BooleanField(default=False)
    location = models.CharField(max_length=100)
    device_type = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name

class Contact(models.Model):
    favorite = models.BooleanField(default=False)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    notes = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name