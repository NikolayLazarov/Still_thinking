from django.shortcuts import render

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
        ]

    }
    return render(request, "list.html",context)
