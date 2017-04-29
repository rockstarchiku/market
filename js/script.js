
$(document).ready(function() {

  $(".user form").submit(function(event) {

    var fullName = $("input#fullname").val();
    var address = $("input#address").val();
    var email = $("input#email").val();



    var item = $('input[name=user_options]:checked').val();

    $(".fullname").text(fullName);
    $(".address").text(address);
    $(".email").text(email);
    $(".radio").text(item);



  event.preventDefault();
  });
});
