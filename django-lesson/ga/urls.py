from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from students.views import CohortViewSet, StudentViewSet

router = routers.DefaultRouter()
router.register(r'cohort', CohortViewSet)
router.register(r'student', StudentViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls)
]
