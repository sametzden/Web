from django.shortcuts import render
from django.http import HttpResponse,Http404,HttpResponseRedirect
from django.urls import reverse 
course_dictionary = {
    "python":"python course page",
    "java": "java course page",
    "kotlin": "kotlin course page",
    "swift": "swift course page"
}

def index(request):
    return HttpResponse("django project first index")

def course(request,item):
    try:
        course = course_dictionary[item]
        return HttpResponse(course)
    except:
        raise Http404("Not Found! Please look for another course!")
    
def course_number_view(request,num1): # ..com/10 --> ..com/kotlin redirect
    course_list = list(course_dictionary.keys())
    course = course_list[num1]

    page_to_go = reverse("course",args=[course])
    return HttpResponseRedirect(page_to_go)
  