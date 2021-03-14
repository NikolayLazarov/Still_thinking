from rest_framework import generics
from .searilzers import ItemImageSerializer, ItemSerializer
from pages.models import Item

class ItemListAPIView(generics.ListAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    

class ItemRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


class ItemDestroyAPIView(generics.DestroyAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()