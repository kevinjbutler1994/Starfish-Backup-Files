from django.urls import path
from .views import Home, FinchList, FinchDetail, ToyList, ToyDetail, AddToyToFinch, RemoveToyFromFinch, FeedingListCreate, FeedingDetail, CreateUserView, LoginView, VerifyUserView
urlpatterns = [
  path('', Home.as_view(), name='home'),
  path('users/register/', CreateUserView.as_view(), name='register'),
  path('users/login/', LoginView.as_view(), name='login'),
  path('users/token/refresh/', VerifyUserView.as_view(), name='token_refresh'),
  path('finch/', FinchList.as_view(), name='finch-list'),
  path('finch/<int:id>/', FinchDetail.as_view(), name='finch-detail'),
  path('finch/<int:finch_id>/feedings/', FeedingListCreate.as_view(), name='feeding-list-create'),
  path('finch/<int:finch_id>/feedings/<int:id>/', FeedingDetail.as_view(), name='feeding-detail'),
  path('toys/', ToyList.as_view(), name='toy-list'),
  path('toys/<int:id>/', ToyDetail.as_view(), name='toy-detail'),
  path('finch/<int:finch_id>/add_toy/<int:toy_id>/', AddToyToFinch.as_view(), name='add-toy-to-finch'),
  path('finch/<int:finch_id>/remove_toy/<int:toy_id>/', RemoveToyFromFinch.as_view(), name='remove-toy-from-finch'),
]

