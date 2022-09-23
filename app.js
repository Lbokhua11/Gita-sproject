var typed = new Typed('.element', {
    strings: ['Productive', 'Succesful'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    loop: true,
    loopCount: Infinity,
    startDelay:1000
  });

$(".lis").hover(
    function(){
      $(this).filter(':not(:animated)').animate({
         marginLeft:'9px'
      },'slow');
  
    },
    function() {
      $(this).animate({
         marginLeft:'0px'
      },'slow');
    });

    $( ".boxofquote.active" )
    .mouseover(function() {
      $("#changeQuote").css("display", "block");
      $(".imags").css("filter", "blur(8px)");
      $(".imags").css("-webkit-filter", "blur(8px)");
    })
    .mouseout(function() {
      $("#changeQuote").css("display", "none");
      $(".imags").css("filter", "blur(0px)");
      $(".imags").css("-webkit-filter", "blur(0px)");
    });
$( "#changeQuote" ).click(function() {
      $("#quoteText").html("“It's so strange that the more successful you become, the more people want to give you things. And the more you can afford, the more people want to give you things for nothing. It doesn't seem right.”<br><strong>Ronnie O'Sullivan<strong");
      $(".imags").attr("src", "images/ronnie.jpg");
    });
$(".colorChanger").mouseover(function() {
 $(".colorChanger").css("background-color", "red");
})
.mouseout(function() {
$(".colorChanger").css("background-color", "rgb(243, 100, 40)");
});


$(".colorChanger").click(function() {
  $("body").css("background", "linear-gradient(rgb(243, 100, 40),rgb(223, 186, 170))");
  $(".boxofquote.active").css("background-color", "rgb(260, 110, 40)");
  $(".colorChanger").css("display", "none");
  $(".colorChangerBack").css("display", "block");
  $("#changeQuote").css("background-color", "rgb(260, 110, 40")
});

$(".colorChangerBack").mouseover(function() {
  $(".colorChangerBack").css("background-color", "#00008B");
 })
 .mouseout(function() {
 $(".colorChangerBack").css("background-color", "rgb(40, 135, 243)");
 });

 $(".colorChangerBack").click(function() {
  $("body").css("background", "linear-gradient(#4169E1,aquamarine)");
  $(".boxofquote.active").css("background-color", "rgb(78, 176, 176)");
  $(".colorChangerBack").css("display", "none");
  $(".colorChanger").css("display", "block");
  $("#changeQuote").css("background-color", "rgb(78, 176, 176)")
});
