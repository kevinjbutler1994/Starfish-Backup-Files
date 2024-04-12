from rest_framework import generics, status, permissions
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import PermissionDenied 
from .models import Finch, Toy, Feeding
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserSerializer, FinchSerializer, ToySerializer, FeedingSerializer


class Home(APIView):
  def get(self, request):
    content = {'message': 'Welcome to the finch-collector api home route!'}
    return Response(content)

# User Registration
class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

  def create(self, request, *args, **kwargs):
    response = super().create(request, *args, **kwargs)
    user = User.objects.get(username=response.data['username'])
    refresh = RefreshToken.for_user(user)
    return Response({
      'refresh': str(refresh),
      'access': str(refresh.access_token),
      'user': response.data
    })

# User Login
class LoginView(APIView):
  permission_classes = [permissions.AllowAny]

  def post(self, request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
      refresh = RefreshToken.for_user(user)
      return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'user': UserSerializer(user).data
      })
    return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# User Verification
class VerifyUserView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    user = User.objects.get(username=request.user)  # Fetch user profile
    refresh = RefreshToken.for_user(request.user)  # Generate new refresh token
    return Response({
      'refresh': str(refresh),
      'access': str(refresh.access_token),
      'user': UserSerializer(user).data
    })

class FinchList(generics.ListCreateAPIView):
  serializer_class = FinchSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
      # This ensures we only return finch belonging to the logged-in user
      user = self.request.user
      return Finch.objects.filter(user=user)

  def perform_create(self, serializer):
      # This associates the newly created finch with the logged-in user
      serializer.save(user=self.request.user)

class FinchDetail(generics.RetrieveUpdateDestroyAPIView):
  serializer_class = FinchSerializer
  lookup_field = 'id'

  def get_queryset(self):
    user = self.request.user
    return Finch.objects.filter(user=user)

  def retrieve(self, request, *args, **kwargs):
    instance = self.get_object()
    serializer = self.get_serializer(instance)

    toys_not_associated = Toy.objects.exclude(id__in=instance.toys.all())
    toys_serializer = ToySerializer(toys_not_associated, many=True)

    return Response({
        'finch': serializer.data,
        'toys_not_associated': toys_serializer.data
    })

  def perform_update(self, serializer):
    finch = self.get_object()
    if finch.user != self.request.user:
        raise PermissionDenied({"message": "You do not have permission to edit this finch."})
    serializer.save()

  def perform_destroy(self, instance):
    if instance.user != self.request.user:
        raise PermissionDenied({"message": "You do not have permission to delete this finch."})
    instance.delete()

class FeedingListCreate(generics.ListCreateAPIView):
  serializer_class = FeedingSerializer

  def get_queryset(self):
    finch_id = self.kwargs['finch_id']
    return Feeding.objects.filter(finch_id=finch_id)

  def perform_create(self, serializer):
    finch_id = self.kwargs['finch_id']
    finch = Finch.objects.get(id=finch_id)
    serializer.save(finch=finch)

class FeedingDetail(generics.RetrieveUpdateDestroyAPIView):
  serializer_class = FeedingSerializer
  lookup_field = 'id'

  def get_queryset(self):
    finch_id = self.kwargs['finch_id']
    return Feeding.objects.filter(finch_id=finch_id)

class ToyList(generics.ListCreateAPIView):
  queryset = Toy.objects.all()
  serializer_class = ToySerializer

class ToyDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Toy.objects.all()
  serializer_class = ToySerializer
  lookup_field = 'id'

class AddToyToFinch(APIView):
  def post(self, request, finch_id, toy_id):
    finch = Finch.objects.get(id=finch_id)
    toy = Toy.objects.get(id=toy_id)
    finch.toys.add(toy)
    return Response({'message': f'Toy {toy.name} added to Finch {finch.name}'})

class RemoveToyFromFinch(APIView):
  def post(self, request, finch_id, toy_id):
    finch = Finch.objects.get(id=finch_id)
    toy = Toy.objects.get(id=toy_id)
    finch.toys.remove(toy)
    return Response({'message': f'Toy {toy.name} removed from Finch {Finch.name}'})