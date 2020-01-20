from rest_framework import viewsets
from .serializers import TodoSeriliazer
from todos.models import Todo

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSeriliazer

