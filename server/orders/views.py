from django.shortcuts import get_object_or_404
import logging
from django.db import DatabaseError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import OrderItem ,Order

from .serializers import OrderItemSerializer,OrderSerializer


logger = logging.getLogger(__name__)



#---------------------------------------------------------#
#-------------------- System Order------------------------#
#---------------------------------------------------------#

cl