from django.urls import path
from  .views import (
        RegisterView,
        UserDetailView,
        UserUpdateView,
        UserDeleteView
      
        
)


urlpatterns = [
    
    path("register/", RegisterView.as_view(), name="register-view"),
    
   
    path("user/", UserDetailView.as_view(), name="user-details-view"),
    path("user/update/", UserUpdateView.as_view(), name="user-update-view"),
    path("user/delete/",UserDeleteView.as_view(),name="user-delete-view")
   
]