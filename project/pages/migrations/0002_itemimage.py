# Generated by Django 2.2.19 on 2021-03-14 00:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ItemImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='product_pics', verbose_name='Снимка')),
                ('creation_date', models.DateTimeField(auto_now_add=True, verbose_name='Дата на създаване')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='pages.Item', verbose_name='Продукт')),
            ],
            options={
                'verbose_name': 'Снимка',
                'verbose_name_plural': 'Снимки',
                'ordering': ['creation_date'],
            },
        ),
    ]
