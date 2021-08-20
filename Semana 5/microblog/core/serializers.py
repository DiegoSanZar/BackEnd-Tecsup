from typing_extensions import Required
from rest_framework import serializers
from core.models import Post

class PostSerializer(serializers.Serializer):
    content = serializers.CharField()
    create_at = serializers.DateTimeField(required=False)
    update_at = serializers.DateTimeField(Required=False)

class PostModelSerializer(serializers.Serializer):
    class Meta:
        model = Post
        fields = ['content', 'created_at', 'update_at']