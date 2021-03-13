from django.shortcuts import render
from .forms import MyForm
def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

def list(request):

    context={
        "items":[
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },
        ]

    }
    return render(request, "list.html",context)

def detail(request):

    context={
        "item":
            {
                "title":"New",
                "description":"this is description",
                "usluga":"prodajba/naem/podaryk"
            },

    }
    return render(request, "detail.html",context)

def create(request):
    form=MyForm
    print(form)
    context={
        "form":form,
    }
    return render(request, "create.html",context)
