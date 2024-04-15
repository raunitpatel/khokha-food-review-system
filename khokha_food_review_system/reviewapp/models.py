from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User

import statistics


class Category(models.Model):
    category_text = models.CharField(max_length=50)
    category_img = models.ImageField(upload_to='category_images/', default='category_images/default.jpg')
    

    def get_restaurants(self):
        return self.restaurant_set


    def __str__(self):
        return self.category_text


class Restaurant(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    restaurant_text= models.CharField(max_length=100)
    restaurant_address= models.CharField(max_length=100)
    restaurant_img= models.ImageField(upload_to='restaurant_images/', default='restaurant_images/default.jpg')


    def __str__(self):
        return self.restaurant_text


    def review_amount(self):
        return self.review_set.count()
    
    
    def rating(self):
        if self.review_amount() is 0:
            return 0
        ratings = [r.review_rate for r in self.review_set.all()]
        avg_rate = round(statistics.mean(ratings))
        avg_rate = 1 if avg_rate is 0 else avg_rate
        return avg_rate
    
    
    def pricing(self):
        if self.review_amount() is 0:
            return 0
        prices = [r.review_price for r in self.review_set.all()]
        avg_price = round(statistics.mean(prices))
        avg_price = 1 if avg_price is 0 else avg_price
        return avg_price

class Review(models.Model):
    restaurant = models.ForeignKey(Restaurant,on_delete=models.CASCADE)
    review_user = models.ForeignKey(User, on_delete=models.CASCADE)
    review_title = models.CharField(max_length=100)
    review_description = models.CharField(max_length=500)
    review_rate = models.IntegerField(default = 0)
    review_price = models.IntegerField(default = 0)
    review_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.review_description

    #function for getting all details of review by user 
    def get_review_by_user(self, user):
        # Filter reviews by the specified user
        user_reviews = Review.objects.filter(review_user=user)
        
        # Extract required details from the filtered reviews
        reviews_details = []
        for review in user_reviews:
            review_details = {
                'restaurant_name': review.restaurant.restaurant_text,
                'review_title': review.review_title,
                'review_description': review.review_description,
                'review_rate': review.review_rate,
                'review_price': review.review_price,
            }
            reviews_details.append(review_details)
        
        return reviews_details






class Comment(models.Model):
    review = models.ForeignKey(Review,on_delete=models.CASCADE)
    comment_user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_description = models.CharField(max_length=500)


    def __str__(self):
        return self.comment_description



class Reply(models.Model):
    comment = models.ForeignKey(Comment,on_delete=models.CASCADE)
    reply_user = models.ForeignKey(User, on_delete=models.CASCADE)
    reply_description = models.CharField(max_length=500)


    def __str__(self):
        return self.reply_description



class Like(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        string = 'review: '+ str(self.review.pk) + 'user: ' + self.user.username
        return string
