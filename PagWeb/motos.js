$(document).ready(function () {
  document.getElementById("path").innerHTML =
    "Ets a: " + window.location.pathname;
  $("#caferacer").click(function () {
    $("#divCR").toggle("slow");
  });
  $("#scrambler").click(function () {
    $("#divSC").toggle("slow");
  });
  $("#bobber").click(function () {
    $("#divBB").toggle("slow");
  });
  $("#bratstyle").click(function () {
    $("#divBS").toggle("slow");
  });
  $("#tracker").click(function () {
    $("#divTK").toggle("slow");
  });
});