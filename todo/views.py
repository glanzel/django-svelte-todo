from rest_framework.response import Response
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny
from todo.serializers import TodoSerializer
from todo.models import Todo
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser


# REST Views.

class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows todos to be viewed or edited.
    """
    queryset = Todo.objects.all().order_by('-created_at')
    serializer_class = TodoSerializer
    permission_classes = []


@api_view(['POST'])
@parser_classes([JSONParser])
def example_view(request, format=None):
    """
    A view that can accept POST requests with JSON content.
    """
    return Response({'received data': request.data})