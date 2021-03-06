# Generated by Django 4.0.3 on 2022-04-15 21:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('favorite', models.BooleanField(default=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
                ('notes', models.CharField(blank=True, max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('favorite', models.BooleanField(default=False)),
                ('name', models.CharField(max_length=100)),
                ('ip_address', models.CharField(max_length=100)),
                ('mac_address', models.CharField(max_length=100)),
                ('description', models.CharField(blank=True, max_length=200)),
                ('status', models.BooleanField(default=False)),
                ('location', models.CharField(max_length=100)),
                ('device_type', models.CharField(max_length=100)),
            ],
        ),
    ]
