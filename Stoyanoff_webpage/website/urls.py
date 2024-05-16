# website/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('products/', views.products, name='products'),
    path('services/', views.services, name='services'),
    path('service-request/', views.service_request, name='service_request'),
    path('success/', views.success, name='success'),
    path('gallery/', views.gallery, name='gallery'),
    path('contact/', views.contact, name='contact'),
]
