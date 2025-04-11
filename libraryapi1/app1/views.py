

from rest_framework import viewsets
from app1.models import Book
from app1.serializer import BookSerializer,UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.viewsets import ViewSet




class BookView(viewsets.ModelViewSet):
    permission_classes =[IsAuthenticated]
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class SearchBooks(APIView):
    def get(self,request):
            query=self.request.query_params.get('search')
            if query:
                b=Book.objects.filter(Q(title__icontains=query)|Q(author__icontains=query))

                if not b.exists():
                    return Response({'msg':'no results found'}, status=status.HTTP_200_OK)

                books=BookSerializer(b,many=True)
                return Response(books.data,status=status.HTTP_200_OK)

            else:
                return Response({'msg':'no results found'},status=status.HTTP_200_OK)

class Filterbyauthor(APIView):
    def get(self,request):
        query=self.request.query_params.get('search')
        if query:
            b=Book.objects.filter(author__icontains=query)
            if not b.exists():
                    return Response({'msg':'no results found'}, status=status.HTTP_200_OK)

            books=BookSerializer(b,many=True)
            return Response(books.data,status=status.HTTP_200_OK)

        else:
                return Response({'msg':'no results found'},status=status.HTTP_200_OK)

class Filterbytitle(APIView):
    def get(self,request):
        query=self.request.query_params.get('search')
        if query:
            b=Book.objects.filter(title__icontains=query)
            if not b.exists():
                    return Response({'msg':'no results found'}, status=status.HTTP_200_OK)

            books=BookSerializer(b,many=True)
            return Response(books.data,status=status.HTTP_200_OK)

        else:
                return Response({'msg':'no results found'},status=status.HTTP_200_OK)

from django.contrib.auth.models import User
class UserReg(viewsets.ModelViewSet):
    queryset =User.objects.all()
    serializer_class =UserSerializer

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        self.request.user.auth_token.delete()
        return Response({'msg':"Logout successfully"},status=status.HTTP_200_OK)