function azzera(){
document.getElementById("mex").value = "";
}
function cancella(){
document.getElementById("lente").value = "";
$(".icone" ).show();
}
$(document).ready(function(){


  var chat = $('.messaggini');
  var inputMsg = $('#mex');
  var buttonSend = $('.invia');

  //gestisco evento su bottone di invio
  buttonSend.click(
    function () {
      var msg = inputMsg.val();
      chat.append('<div class="verde">' + msg + '</div>');
      inputMsg.val("");

      //dopo un secondo
      // deve apparire un nuovo msg con un testo sempre uguale (statico)
      setTimeout(function(){
        chat.append('<div class="bianco">' + "ok" + '</div>');
      }, 1000);


    });



    //funzione Cerca
    //ciclo .each() .identity >.nero
    //per ogni valore : prendono cerca e verfico che sia contenuto in strong -
    //se no display none

    $("#lente").keyup(function(){ //mentr scriviamo

      var inputSearch = $("#lente").val(); //prendo il valore

      $(".icone" ).each(function() { //ciclo tutti i nomi
        var nome = $(this).find(".identity >.nero").text();

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
