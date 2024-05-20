from django.urls import path
from .import views

urlpatterns = [
    path('', views.index,name="index"), # app içindeki views.py ile urls.py birbirine baglandı ...........com/first_app
    path("<int:num1>/",views.course_number_view,name="coursenumberview"),
    path("<str:item>/",views.course,name="course"), #....com/first_app/python
    
]