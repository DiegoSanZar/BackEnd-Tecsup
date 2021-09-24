from http.client import _DataType
from django.http import request
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from core.models import Mesa
from core.serializers.mesa_serializer import MesaSerializer

class MesaAPI(APIView):

    def get(self, request):
        mesas = Mesa.objects.all()

        serializer = MesaSerializer(mesas, many=True)

        return Response(
            {
                "ok": True,
                "content": serializer.data
            }
        )

    def post(self, request):
        data = request.data
        serializer = MesaSerializer(data=data)
        if serializer.is_valid():
            instance=serializer.save()
            return Response({
                "ok":True
            })
        else:
             return Response({
                "errors": serializer.errors
            })
        

    def put(self, request):
        data = request.data
        mesa = Mesa.objects.filter(pk=pk)
        serializer = MesaSerializer(data=data)
        if serializer.is_valid():
            mesa.update
        
