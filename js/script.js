
$(document).ready(function() {

  $(".user form").submit(function(event) {

    var fullName = $("#fullname").val();
    var address = $("#address").val();
    var email = $("#email").val();



    $(".fullname").text(fullName);
    $(".address").text(address);
    $(".email").text(email);



  event.preventDefault();
  });
});
