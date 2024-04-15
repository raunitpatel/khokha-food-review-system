function deletereview(reviewId, userId) {
    $.ajax({
        url: '/reviewapp/review/delete/',
        type: 'POST',
        data: {
            'reviewId': reviewId,
            'userId': userId,
        },
        success: function(response) {
            console.log(reviewId, userId);
            if (response['success'] === true) {
                console.log('Review deleted successfully');
                $('#review-' + reviewId).remove();
                
            } else {
                console.error('Failed to delete review');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
}
function createStarRatings(ratingSpan , number){
    ratingSpan.empty();
    for (var i = 0; i < parseInt(number); i++) {
        ratingSpan.append('<i class="fas fa-star"/></i>');
    }
}
function createPriceRatings(priceSpan , number){
    priceSpan.empty();
    for (var i = 0; i < parseInt(number); i++) {
        priceSpan.append('<i class="fas fa-dollar-sign"></i>');
    }
}
