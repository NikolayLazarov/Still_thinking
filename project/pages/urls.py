from django.urls import path
from . import views

urlpatterns = [
    path('item/<int:pk>/', views.ItemDetailView.as_view(), name="item-detail"),
    path('list/', views.list, name="list-page"),
    path('about/', views.about, name="about-page"),
    path('item/create/', views.item_create, name="item-create"),
    path('', views.home, name="home-page"),
]
