$(document).ready(function(){
  $("#enviar").click(function(){
    var nome = $("#nome").val(); 
    var email = $("#email").val();
    var mensagem = $("#msg").val();

    if (nome != "" && email != "" && mensagem != "") {
     alert("Seu email foi enviado com sucesso!");
     $("#nome").val(""); 
     $("#email").val("");
     $("#msg").val("");
    } else {
      alert("Por favor, preencha todos os campos para efetuar o envio do email!");
    }
  });

  $("#instagram").mouseenter(function(){
    $("#instagram").animate({
      opacity: 0.5
    });
  });

  $("#instagram").mouseleave(function(){
    $("#instagram").animate({
      opacity: 1
    });
  });

  $(".selected").animate({
    letterSpacing: "+=10px"
  });
});