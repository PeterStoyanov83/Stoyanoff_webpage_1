# website/views.py

from django.shortcuts import render, redirect
import requests
from .forms import ServiceRequestForm


def get_instagram_media():
    access_token = 'YOUR_LONG_LIVED_ACCESS_TOKEN'
    user_id = 'YOUR_INSTAGRAM_USER_ID'
    url = f'https://graph.instagram.com/{user_id}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token={access_token}'

    response = requests.get(url)
    if response.status_code == 200:
        return response.json().get('data', [])
    return []


def gallery(request):
    media = get_instagram_media()
    return render(request, 'website/gallery.html', {'media': media})


def home(request):
    return render(request, 'website/home.html')


def about(request):
    return render(request, 'website/about.html')


def products(request):
    return render(request, 'website/products.html')


def services(request):
    return render(request, 'website/services.html')


def contact(request):
    return render(request, 'website/contact.html')


def service_request(request):
    if request.method == 'POST':
        form = ServiceRequestForm(request.POST)
        if form.is_valid():
            return redirect('success')
    else:
        form = ServiceRequestForm()
    return render(request, 'website/service_request.html', {'form': form})


def success(request):
    return render(request, 'website/success.html')
