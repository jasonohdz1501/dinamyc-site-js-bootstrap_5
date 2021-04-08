// Validate form newsletter
$("#button-email").on('click', function(){
    if ($("#emailOffer").val() == "") {
      $("#message_error").text("Requerido");
      $("#message_success").text("");
      $("#emailOffer").addClass("error");
    } else if (!isEmail($("#emailOffer").val())){
      $("#message_error").text("Ingrese un email valido");
      $("#message_success").text("");
    } else {
      $("#message_error").text("");
      $("#message_success").text("Suscrito con éxito");
      $(".popup-window").css("display","block");
    }
  });

  $(".close").on('click',function(){
    $(".popup-window").css("display","none");
  });

  function isEmail($email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test($email);
  }
 console.log(isEmail($("#emailOffer").val()));
