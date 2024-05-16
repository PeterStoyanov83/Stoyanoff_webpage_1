# website/forms.py

from django import forms


class ServiceRequestForm(forms.Form):
    SERVICE_CHOICES = [
        ('setup', 'Сетъп'),
        ('position_change', 'Смяна на позиции'),
        ('hardware_change', 'Смяна на хардуер'),
        ('nut_bridge', 'Изработване на нът/бридж'),
        ('inspection', 'Инспектиране на инструмент'),
    ]

    name = forms.CharField(label='Вашето име', max_length=100)
    email = forms.EmailField(label='Вашият email')
    service = forms.ChoiceField(label='Услуга', choices=SERVICE_CHOICES)
    message = forms.CharField(label='Допълнителна информация', widget=forms.Textarea)
