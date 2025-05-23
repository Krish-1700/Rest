"""
URL configuration for libraryapi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from app1 import views
from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt import views as jwt_views


router=SimpleRouter()
router.register('books',views.BookView)
router.register('user',views.UserReg)

from rest_framework.authtoken import views as view1



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('search',views.SearchBooks.as_view()),
    path('fauthor',views.Filterbyauthor.as_view()),
    path('ftitle',views.Filterbytitle.as_view()),
    # path('login/', view1.obtain_auth_token),
    # path('Logout',views.LogoutView.as_view()),
    path('api/token/',
         jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/',
         jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
]



from django.conf.urls.static import static       #for display media
from django.conf import settings

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)