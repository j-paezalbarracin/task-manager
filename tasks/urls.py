# 1. Importa las herramientas necesarias
from django.urls import path, include
from rest_framework import routers
from tasks import views

# 2. Crea un enrutador (genera URLs automáticamente)
router  = routers.DefaultRouter() #  esto me crea el get, post, put, delete 

# 3. Registra un "conjunto de vistas" (ViewSet)
router.register(r'tasks', views.TaskView, 'tasks')

# 4. Incluye las URLs generadas en el proyecto
urlpatterns = [
    path("api/v1/", include(router.urls)),
]

