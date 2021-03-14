from rest_framework import serializers
from pages.models import Item, ItemImage


class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = ['id', 'image', 'creation_date']

class ItemSerializer(serializers.ModelSerializer):
    images = ItemImageSerializer(source='itemimage_set', many=True)
    class Meta:
        model = Item
        fields = '__all__'