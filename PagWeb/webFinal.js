$(document).ready(function () {
  $("#prova").click(function () {
    $("#info").hide("slow", function () {
      alert("La informació està oculta");
    });
  });
});

function myFunction() {
  alert("Benvingut a Pure Racer, fet per Marc Grossi");
  document.getElementById("path").innerHTML =
    "Ets a: " + window.location.pathname;
}
  function WhichButton(event) {
    alert("M'has pitjat: " + event.button)
  }

  $(document).ready(function() {
    setTimeout(function() {
      $('.wrapper').addClass('loaded');
      
    }, 2000);
  });
  
