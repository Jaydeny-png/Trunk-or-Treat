$('#openModal').click(function() {
    $('#ex1').modal();
});


$(document).ready(function(){
    $('.trunk-image').mouseenter(function() {
      $(this).next('.trunk-description').fadeIn();
    }).mouseleave(function() {
      $(this).next('.trunk-description').fadeOut();
    });
  });
 

  $(document).ready(function() {
    $('.event-heading').on('click', function() {
      $(this).next('.event-details').slideToggle(); // Toggle the details
    });
  });
