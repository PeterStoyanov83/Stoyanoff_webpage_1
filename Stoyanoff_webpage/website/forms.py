# website/forms.py
from django import forms

class ServiceRequestForm(forms.Form):
    SERVICE_CHOICES = [
        ('repair', 'Поправки'),
        ('custom', 'Направа'),
    ]
    REPAIR_CHOICES = [
        ('setup', 'Сетъп'),
        ('position_change', 'Смяна на позиции'),
        ('hardware_change', 'Смяна на хардуеър'),
        ('nut_bridge', 'Изработване на нът/бридж'),
        ('inspection', 'Инспектиране на инструмент'),
    ]

    name = forms.CharField(label='Име', max_length=100)
    email = forms.EmailField(label='Имейл')
    phone = forms.CharField(label='Телефон', max_length=20)
    service_type = forms.ChoiceField(label='Услуга', choices=SERVICE_CHOICES, widget=forms.RadioSelect)
    repair_type = forms.MultipleChoiceField(label='Поправки', choices=REPAIR_CHOICES, required=False, widget=forms.CheckboxSelectMultiple)
    message = forms.CharField(label='Съобщение', widget=forms.Textarea, required=False)
