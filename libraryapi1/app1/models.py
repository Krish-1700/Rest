from django.db import models

class Book(models.Model):
    title=models.CharField(max_length=20)
    author=models.CharField(max_length=20)
    price=models.IntegerField()
    pages=models.IntegerField()
    languages=models.CharField(max_length=10)
    image=models.ImageField(upload_to='images')

    def __str__(self):
        return self.title