from django.contrib import admin
from models import User, Mesa

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Mesa)
class UserAdmin(admin.ModelAdmin):
    pass