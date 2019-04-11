from django.contrib import admin
from .models import Artist, Song, Test

# Register your models here.
admin.site.register([Artist, Song, Test])
