from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from .models import Orders
from .serializer import OrdersSerializer
from rest_framework.response import Response
# Create your views here.
class OrdersView(APIView):
    def get(self, request):
        output = [
             {
                "title": output.title,
                "description": output.description,
                "price": output.price,
             } for output in Orders.objects.all()
        ]
        return Response(output)
    def post(self, request):
        serializer = OrdersSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)