# Generated by Django 4.1.7 on 2023-03-15 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Soda_product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', models.CharField(max_length=255)),
                ('price', models.IntegerField()),
                ('size', models.CharField(max_length=255)),
                ('flavor', models.CharField(max_length=255)),
            ],
        ),
    ]
