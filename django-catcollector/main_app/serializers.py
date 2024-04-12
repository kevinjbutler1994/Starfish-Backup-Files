from rest_framework import serializers
from .models import Cat, Toy, Feeding
from django.contrib.auth.models import User # add this line to list of imports

class ToySerializer(serializers.ModelSerializer):
    class Meta:
        model= Toy
        field = '__all__'

class FeedingSerializer(serializers.ModelSerializer):
 class Meta:
    model = Feeding
    fields = '__all__'
    read_only_fields = ('cat',)

# include User serializer
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Add a password field, make it write-only

    class Meta:
        model = User
        fields = ('id', 'username', 'email' 'password')
    
    def create(self, validated_data):
      user = User.objects.create_user(
          username=validated_data['username'],
          email=validated_data['email'],
          password=validated_data['password']  # Ensures the password is hashed correctly
      )
      
      return user

class CatSerializer(serializers.ModelSerializer):
  fed_for_today = serializers.SerializerMethodField()
  toys = ToySerializer(many=True, read_only=True)
  # add user field to Cat serializer
  user = serializers.PrimaryKeyRelatedField(read_only=True)  # Make the user field read-only
  
  # rest of code


  class Meta:
    model = Cat
    fields = '__all__'

  def get_fed_for_today(self, obj):
    return obj.fed_for_today()



