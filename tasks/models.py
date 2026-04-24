from django.db import models

# Create your models here.
# creo la tabla Task (TAREAS)
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title