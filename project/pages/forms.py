from django import forms
from .models import Item, Category

class ItemCreateForm(forms.ModelForm):
    category = forms.ModelChoiceField(
            Category.objects.all(), empty_label="Избери")
    description = forms.CharField(max_length=300, required=False, widget=forms.Textarea())
    images = forms.ImageField(widget=forms.ClearableFileInput(attrs={'multiple': True}), required=False)


    class Meta:
        model = Item
        fields = ['category', 'item_name', 'price', 'description']