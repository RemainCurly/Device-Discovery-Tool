from django.contrib import admin
from Networks.models import Device, Contact

@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = ('name', 'ip_address', 'mac_address', 'description', 'status', 'location', 'device_type')
    list_filter = ('favorite', 'status', 'device_type')
    search_fields = ('name', 'ip_address', 'mac_address', 'description', 'location', 'device_type')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'notes')
    list_filter = ('favorite',)
    search_fields = ('name', 'email', 'phone', 'notes')