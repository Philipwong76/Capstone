from django.urls import path
from . import views

urlpatterns = [
    path('', views.soda_product_list),
    path('<int:pk>/',views.soda_detail),
]