// $("li").hide()

// $(document).ready(function(){
//     $("li").hide();
// });

$(() => {
  // $("#gomita").hide();
  $(".hide-btn").click(() => {
    // $("#gomita").hide();
    $("#gomita").fadeOut();
  });
  $(".show-btn").click(() => {
    // $("#gomita").show();
    $("#gomita").fadeIn();
  });
  $("h1").dblclick(() => {
    $("h1").css("color", "red");
  });
  $("h1").click(() => {
    $("h1").css("color", "black");
  });
  $(".new-element").click(() => {
    $("ul").append("<li>Elemento 4</li>");
  });
  $(".arriba").click(() => {
    $("ul").prepend("<li>Elemento 0</li>");
  });
  $("li").mouseover((elem) => {
    elem.target.style.color = "red";
  });
  $("li").mouseout((elem) => {
    elem.target.style.color = "black";
  });
});
