# Generated by Django 4.1.7 on 2023-04-07 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('soda_product', '0002_soda_product_stock'),
    ]

    operations = [
        migrations.AddField(
            model_name='soda_product',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='soda_product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
