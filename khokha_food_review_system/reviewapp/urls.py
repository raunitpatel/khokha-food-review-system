from django.urls import path

from . import views

app_name = 'reviewapp'
urlpatterns = [

    # ex: /reviewapp/
    path('', views.home, name='home'),

    # ex: /reviewapp/user_review
    path('user_review/', views.user_review, name='user_review'),

    # ex: /reviewapp/resto/5
    path('resto/<int:restaurant_id>/', views.details, name='details'),

    # ex: /reviewapp/resto/5/add
    path('resto/<int:restaurant_id>/add/', views.add, name='add'),

    # ex: /reviewapp/resto/5/reviewed
    path('resto/<int:restaurant_id>/reviewed/', views.reviewed, name='reviewed'),

    # ex: /reviewapp/api/comment/add/
    path('api/comment/add/', views.CommentAdd.as_view(), name="comment"),
    
    # ex: /reviewapp/api/reply/add/
    path('api/reply/add/', views.ReplyAdd.as_view(), name="reply"),

    # ex: /reviewapp/api/comment/add/
    path('api/like/add/', views.LikeAdd.as_view(), name="like"),

    # ex: /reviewapp/api/restaurants/list/
    path('api/restaurants/list/', views.GetRestaurantsByCategory.as_view(), name="restaurants_by_category"),

    # ex: /reviewapp/api/category_image
    path('api/category_image/', views.GetCategoryImage.as_view(), name="category_image"),

    # ex: /reviewapp/review/delete/
    path('review/delete/', views.ReviewDeleteView.as_view(), name='review_delete'),

    # ex/review/api/restaurant_image/
    path('api/restaurant_image/', views.GetRestaurantImage.as_view(), name='restaurant_image'),


    
]