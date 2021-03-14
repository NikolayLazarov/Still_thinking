from rest_framework import generics
from .searilzers import ItemSerializer
from pages.models import Item

class ItemListAPIView(generics.ListAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()