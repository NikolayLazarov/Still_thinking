from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.ItemListAPIView.as_view(), name='api-item-list')
]
