from rest_framework import serializers
from app1.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields='__all__'  #name,age,place,id


from django.contrib.auth.models import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','password','email','first_name','last_name']

    def create(self, validated_data):
        u=User.objects.create_user(username=validated_data['username'],
                                   password=validated_data['password'],
                                   email=validated_data['email'],
                                   first_name=validated_data['first_name'],
                                   last_name=validated_data['last_name'])
        return u

