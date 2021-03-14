from django.urls import path
from . import views

urlpatterns = [
    path('item/<int:pk>/', views.ItemDetailView.as_view(), name="item-detail"),
    path('items/', views.ItemListView.as_view(), name="item-list"),
    path('about/', views.about, name="about-page"),
    path('item/create/', views.item_create, name="item-create"),
    path('', views.home, name="home-page"),
]
