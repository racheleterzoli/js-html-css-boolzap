function azzera(){
  document.getElementById("mex").value = "";
  $(".sotto").find($(".fas")).removeClass('fa-microphone').addClass('fa-sms');
}
function cancella(){
  document.getElementById("lente").value = "";
  $(".icone" ).show();
}
$(document).ready(function(){


  var inputMsg = $('#mex');
  var buttonSend = $('.invia');

  //gestisco evento su bottone di invio
  buttonSend.click(
    function () {
      var data=new Date();
      var ora =data.getHours() ;
      var minuti = data.getMinutes() ;
      var chat = $('.messaggini.active');
      var onclick_verde = 'erase(this , "verde" )';
      var onclick_bianco = 'erase(this , "bianco" )';
      var dropdown_menu = "<div class='tendina'><i class='fas fa-chevron-down'></i><div class='menu'><div onclick ='"+onclick_verde+"'>Cancella il messaggio </div></div></div>";
      var msg = inputMsg.val();
      if(minuti<9){
        minuti= "0"+minuti;
      }
      chat.append('<div class="verde">' + msg +  dropdown_menu +'<div class ="ora">' + ora +"."+minuti+'</div>'+ '</div>');

      $(this).append(dropdown_menu);
      inputMsg.val("");

      //dopo un secondo
      // deve apparire un nuovo msg con un testo sempre uguale (statico)
    



      setTimeout(function(){
        var dropdown_menu = "<div class='tendina'><i class='fas fa-chevron-down'></i><div class='menu'><div onclick ='"+onclick_bianco+"'>Cancella il messaggio </div></div></div>";
        chat.append('<div class="bianco">' + "ok" +'<div class ="ora">' +ora +"."+minuti+ dropdown_menu +'</div>' + '</div>');
      }, 1500);


    });

    $(".identity").click(function(){

      $(".messaggini").removeClass("active");
      //far sparire tutto
      $(".messaggini").hide();
      //far vedre solo id giusto
      var amico = $(this).data("nome");
      $("#"+ amico).show();
      $("#" + amico).addClass("active");

      $(".infocontatto").removeClass("active");
      //far sparire tutto
      $(".infocontatto").hide();
      //far vedre solo id giusto
      var friend = $(this).data("numero");
      $("#"+ friend).show();
      $("#" + friend).addClass("active");



    });

    //funzione Cerca
    //ciclo .each() .identity >.nero
    //per ogni valore : prendono cerca e verfico che sia contenuto in strong -
    //se no display none

    $("#lente").keyup(function(){ //mentr scriviamo

      var inputSearch = $("#lente").val().toLowerCase(); //prendo il valore

      $(".icone" ).each(function() { //ciclo tutti i nomi
        var nome = $(this).find(".identity >.nero").text().toLowerCase();

        if(nome.includes(inputSearch) === false){
          console.log(nome+" false");
          $(this).hide();
        }else{
          console.log(nome);
          $(this).show();
        }
      });

    });



  });

  function erase(ele, classe){
    console.log(ele);
    ele.closest( "."+classe ).remove();
  }
