from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'bestrecipe.views.index'),
                       # url(r'^blog/', include('blog.urls')),
    (r'^static/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.STATIC_PATH}),
    url(r'^recipe$', 'bestrecipe.views.recipe'),
    url(r'^results$', 'bestrecipe.views.results'),
    
)
