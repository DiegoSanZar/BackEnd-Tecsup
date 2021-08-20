from rest_framework import serializers, viewsets, status
from rest_framework.response import Response
from core.models import Post
from core.serializers import PostSerializer, PostModelSerializer

class PostViewSet(viewsets.ViewSet):
    
    def list(self, request):
        posts = Post.object.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def create(self, request):
        # Obtener el payload json del request
        data = request.data
        #Instanciar el serializador de Posts
        #Asignarle como data el valor del payload json obtenido
        #en el paso anterior
        serializer = PostSerializer(data=data)
        #validar la estructura del payload 
        if serializer.is_valid():
            new_post=Post(**data)
            new_post.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({
                "errors": serializer.errors
            })
            

    def retrive(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def update(self, request, pk=None):
        post = Post.objects.filter(pk=pk)
        data = request.data
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            post = post.update(**data)
            return Response(serializer.data, status = status.HTTP_200_OK)
        else:
            #Retorna el detalle del error
            return Response({
                "errors": serializer.errors
            })


    def destroy(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        post.delete()
       # return Response(post.delete, status = status.HTTP_200_OK)

class PostModelViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostModelSerializer
