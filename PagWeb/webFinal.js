$(document).ready(function(){
    $("#prova").click(function(){
      $("#info").hide("slow", function(){
        alert("La informació està oculta");
      });
    });
  });
  function myFunction() {
    alert("Benvingut a Pure Racer, fet per Marc Grossi");
  }
  function WhichButton(event) {
    alert("M'has pitjat: " + event.button)
  }
  