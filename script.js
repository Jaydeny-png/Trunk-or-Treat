$(document).ready(function(){
    // Attach the click event handler using .on() method
    $('.more-info-btn').on('click', function(){
        // Find the corresponding event description and toggle it
        $(this).closest('.event').find('.event-description').toggle();
    });
});
