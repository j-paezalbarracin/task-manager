from rest_framework import serializers
from .models import Task

# CON ESTE SERIALIZER ESTOY CONVIERTIENDO LOS TIPOS DE DATOS DE PYTHON A JSON PARA SER ENVIAODS POR LA API Y CONSUMIDOS POR REACT PARA MOSTRAR EN EL FRONTEND

#El Serializer de Django REST Framework (DRF) convierte objetos complejos de Python (como modelos de Django, consultas, etc.) en JSON que puede ser consumido por React u otros frontends.
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id','title','desciption','done')
        fields = ('__all__') # con esto especifico que sean todos por si tengo muchos campos 