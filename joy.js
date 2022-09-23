let dataObject = {
     "first":{
          "name": "Lost in da loop",
          "bpm": 140,
          "views": 52,
          "date": "Aug 12, 2022",
          "url": "https://www.youtube.com/watch?v=h2vcDkN-aRQ"
      },
      "second":{
          "name": "La Rosa",
          "bpm": 90,
          "views": 310,
          "date": "Sep 8, 2022",
          "url": "https://www.youtube.com/watch?v=Gx9OqrrmsAY"
      },
      "third":{
          "name": "Crystals",
          "bpm": 118,
          "views": 283,
          "date": "Sep 3, 2022",
          "url": "https://www.youtube.com/watch?v=v6y_RopcJGA"
      },
      "fourth":{
          "name": "Mansa Musa",
          "bpm": 138,
          "views": 57,
          "date": "Aug 16, 2022",
          "url": "https://www.youtube.com/watch?v=uolJS0oupn0"
      },
      "fifth":{
          "name": "Bach",
          "bpm": 140,
          "views": 105,
          "date": "Aug 26, 2022",
          "url": "https://www.youtube.com/watch?v=F0Bjwcebq4Y"
      },
      "sixth":{
          "name": "Space War",
          "bpm": 93,
          "views": 133,
          "date": "Sep 7, 2022",
          "url": "https://www.youtube.com/watch?v=LxM4_aLszCM"
      }
}
  
 
let obj = {
     name: "jey",
     age: "five"
};
$("body").ready(function() {

     $.each( dataObject, function(key, value) {
          $(".firstUl").append('<a target="_blank" href='+ value.url +'><img style="width:50px;height:50px;" src="images/youtube.png">'
          +'</a>' + 
           'Name :' + value.name + " BPM : " + value.bpm 
          +  value.date + " views:"+ value.views)
     })
   });
   var typed = new Typed('.element', {
     strings: ['Productive', 'Succesful'],
     typeSpeed: 100,
     backSpeed: 100,
     fadeOut: true,
     loop: true,
     loopCount: Infinity,
     startDelay:1000
   });
   /*
   $("body").ready(function() {
     $.getJSON( "json_songlist.json", function(obj){
          $.each( obj, function(key, value) {
          $(".firstUl").append('<a target="_blank" href='+ value.url +'><img style="width:50px;height:50px;" src="images/youtube.png">'
          +'</a>' + 
           'Name :' + value.name + " BPM : " + value.bpm 
          +  value.date + " views:"+ value.views)
     })
   });
     })
     
   */