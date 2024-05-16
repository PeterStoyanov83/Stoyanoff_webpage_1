# website/views.py

from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import ServiceRequestForm


def home(request):
    return render(request, 'website/home.html')


def about(request):
    return render(request, 'website/about.html')


def products(request):
    return render(request, 'website/products.html')


def services(request):
    return render(request, 'website/services.html')


def gallery(request):
    return render(request, 'website/gallery.html')


def contact(request):
    return render(request, 'website/contact.html')


def service_request(request):
    if request.method == 'POST':
        form = ServiceRequestForm(request.POST)
        if form.is_valid():
            # Обработване на формата, например изпращане на email
            return redirect('success')
    else:
        form = ServiceRequestForm()
    return render(request, 'website/service_request.html', {'form': form})


def success(request):
    return render(request, 'website/success.html')
