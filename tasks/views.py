from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
# Create your views here.

#Hereda de ModelViewSet (que ya tiene toda la lógica CRUD pre-escrita)
# con esta clase, ya sabe todos los datos que seran tomados d ela tabla en la base de datos y transofrmados a JSON para asi crear el crud, con el serializer le especificos los datos que seran transofrmados a JSON y con el queryset, todo TODOS los datos de la tabla 
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()