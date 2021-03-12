from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list, name="list-page"),
    path('about/', views.about, name="about-page"),
    path('', views.home, name="home-page"),
]
