function getRestaurants(categoryId,filterId){
    var endpoint = "/reviewapp/api/restaurants/list/";

    $.ajax({
        method: "GET",
        url: endpoint,
        data: {
            category_id: categoryId,
            filter_id: filterId
            
        },
        
        success: function(data) {
            if (data.restaurants){
                changeCategoryBackground(categoryId);
                displayRestaurantsaccordingtoselectedfilter(data.restaurants);
            }
        }
    });
}






// function changeCategoryBackground(categoryId){
//     var endpoint = "/reviewapp/api/category_image/";
    
//     $.ajax({
//         method: "GET",
//         url: endpoint,
//         data: {
//             category_id: categoryId,
//         },
//         success: function(data) {
//             console.log(data.categories[categoryId]);
//             if (data.categories[categoryId].image){
//                 var imageURL = "url('" + data.categories[categoryId].image + "')";
//                 $('#category-banner').css("background-image", imageURL); 
//             } else {
//                 console.error("No image URL found for category ID:", categoryId);
//             }
//         },
//         error: function(xhr, status, error) {
//             console.error("Error fetching category image URL:", error);
//         }
//     });
// }



function changeCategoryBackground(categoryId){
    var endpoint = "/reviewapp/api/category_image/";
    
    $.ajax({
        method: "GET",
        url: endpoint,
        data: {
            category_id: categoryId,
        },
        success: function(data) {
            console.log(data);
            // console.log(categoryId);
            // console.log(data.categories[categoryId]);
            // console.log(data.categories[categoryId].image);
            
            // Get the number of categories
            var size = Object.keys(data.categories).length;
            console.log(data.categories[2])
            // Iterate through the categories object
            for (var i = 0; i < size; i++) {
                // Check if the current category's ID matches the specified categoryId
                if (data.categories[i].id == categoryId) {
                    console.log(data.categories[i].image);
                    var imageURL = "url('" + data.categories[i].image + "')";
                    $('#category-banner').css("background-image", imageURL); 
                    console.log(imageURL);
                    break; // Exit the loop once the category is found
                }
            }
        },
        error: function(xhr, status, error) {
            console.error("Error fetching category image URL:", error);
        }
    });
}






function displayRestaurantsaccordingtoselectedfilter(restaurants){
    console.log(restaurants);
    var restaurantsDiv = $("#restaurants-list");
    restaurantsDiv.empty();

    if (!restaurants.length){
        $("#none-found").fadeIn('slow');
        return;
    }

    $("#none-found").hide();
    restaurants.forEach(restaurant => {
        var newRestaurant = $("#newRestaurant").clone().removeAttr("id");
        newRestaurant.find("span.restaurant-id").text(restaurant.id);
        newRestaurant.find("span.restaurant-text").text(restaurant.restaurant_text);
        newRestaurant.find("span.address").text(restaurant.restaurant_address);
        newRestaurant.find("span.reviews").text(restaurant.review_amount);
        newRestaurant.find("span.category").text(restaurant.category);
        createStarRatings(newRestaurant.find("span.rating"), restaurant.rating);
        createPriceRatings(newRestaurant.find("span.pricing"), restaurant.pricing);
        
        newRestaurant.find("img").attr("src", restaurant.image);
       
        var ahref = "/reviewapp/resto/" + restaurant.id + "/";
        newRestaurant.find("a").attr("href", ahref);
        newRestaurant.show();
        restaurantsDiv.prepend(newRestaurant[0]).hide().fadeIn('slow');
    });
}
function createStarRatings(ratingSpan , number){
    for (var i = 0; i < parseInt(number); i++) {
        ratingSpan.append('<i class="fas fa-star"/></i>');
    }
}
function createPriceRatings(priceSpan , number){
    for (var i = 0; i < parseInt(number); i++) {
        priceSpan.append('<i class="fas fa-rupee-sign"></i>');
    }
}

