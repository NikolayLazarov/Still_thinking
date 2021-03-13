from django.db import models
from django.conf import settings
from django.shortcuts import reverse

class Category(models.Model):
    category = models.CharField(verbose_name='Категория', max_length=20)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['category', ]

    def __str__(self):
        return self.category

class Item(models.Model):
    seller = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Продавач',
                               on_delete=models.CASCADE)
    category = models.ForeignKey(
        Category, verbose_name='Категория', on_delete=models.SET_NULL, null=True)
    item_name = models.CharField(
        verbose_name='Име на продукт', max_length=200, null=True)
    price = models.IntegerField(verbose_name='Цена', null=True, blank=True)
    discount_price = models.IntegerField(
        verbose_name='Намалена цена', null=True, blank=True)    
    description = models.TextField(
        verbose_name='Описание', null=True, blank=True, max_length=300) 
    creation_date = models.DateTimeField(
        verbose_name='Дата на създаване', auto_now_add=True)

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукти'

    def __str__(self):
        return f'{self.brand} {self.item_name}'