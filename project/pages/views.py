from django.shortcuts import render, redirect
from .forms import ItemCreateForm
from .models import ItemImage, Item
from django.views.generic import DetailView, ListView

def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")


class ItemDetailView(DetailView):
    model = Item
    template_name = "pages/item_detail.html"
    context_object_name = 'item'


class ItemListView(ListView):
    model = Item
    template_name="pages/item_list.html"
    context_object_name = 'items'


def item_create(request):
    
    if request.method == 'POST':
        form = ItemCreateForm(request.POST)
        
        if form.is_valid():
            form.instance.seller = request.user
            instance = form.save()
            files = request.FILES.getlist('images')
            for f in files:
                image = ItemImage(item=instance, image=f)
                image.save()
            return redirect(instance.get_absolute_url())
    else:
        form = ItemCreateForm()

    context = {
        'form': form
    }

    return render(request, 'pages/item_create.html', context)    