$(".tasks.one").click(function() {
    $(".tasks.one").css("color", "#00FF00");
    $("#tickone").html("✔");
    $("#tickone").css("color", "#00FF00");
  });

  $(".tasks.two").click(function() {
    $(".tasks.two").css("color", "#00FF00");
    $("#ticktwo").html("✔");
    $("#ticktwo").css("color", "#00FF00");
  });

  $(".tasks.three").click(function() {
    $(".tasks.three").css("color", "#00FF00");
    $("#tickthree").html("✔");
    $("#tickthree").css("color", "#00FF00");
  });

  $(".tasks.four").click(function() {
    $(".tasks.four").css("color", "#00FF00");
    $("#tickfour").html("✔");
    $("#tickfour").css("color", "#00FF00");
  });

  $(".tasks.five").click(function() {
    $(".tasks.five").css("color", "#00FF00");
    $("#tickfive").html("✔");
    $("#tickfive").css("color", "#00FF00");
  });

  $(".tasks.six").click(function() {
    $(".tasks.six").css("color", "#00FF00");
    $("#ticksix").html("✔");
    $("#ticksix").css("color", "#00FF00");
  });

 

  $(".wakeUp").click(function(){
    $(".tasks.one").css("display", "block");
    $(".hidden.text").css("display", "none")
  })

  $(".excercise").click(function(){
    $(".tasks.two").css("display", "block");
    $(".hidden.text").css("display", "none")
  })

  $(".coldShower").click(function(){
    $(".tasks.three").css("display", "block");
    $(".hidden.text").css("display", "none")
  })

  $(".meditating").click(function(){
    $(".tasks.four").css("display", "block");
    $(".hidden.text").css("display", "none")
  })

  $(".eatingHealthy").click(function(){
    $(".tasks.five").css("display", "block");
    $(".hidden.text").css("display", "none")
  })

  $(".reading").click(function(){
    $(".tasks.six").css("display", "block");
    $(".hidden.text").css("display", "none")
  })

