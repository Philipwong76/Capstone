from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .Serializers import ProductSerializer
from .models import Soda_product

# Create your views here.
@api_view(['GET','POST'])
def soda_product_list(request):

    if request.method == 'GET':
        sodas = Soda_product.objects.all()
        serializer = ProductSerializer(sodas, many=True)
        return Response(serializer.data)
    

    elif request.method == 'POST':
            serializer = ProductSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT','DELETE'])
def soda_detail(request,pk):
    soda = get_object_or_404(Soda_product, pk=pk)
    if request.method == 'GET':
         serializer = ProductSerializer(soda)
         return Response(serializer.data)
    elif request.method == 'PUT':
         soda = get_object_or_404(Soda_product, pk=pk)
         serializer = ProductSerializer(soda, data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response(serializer.data)
    elif request.method == 'DELETE':
         soda.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)
