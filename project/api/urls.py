from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.ItemListAPIView.as_view(), name='api-item-list'),
    path('item/<int:pk>/', views.ItemRetrieveAPIView.as_view(), name='api-item-detail'),
    path('item/delete/<int:pk>/', views.ItemDestroyAPIView.as_view(), name='api-item-delete')
]
