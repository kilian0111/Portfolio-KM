$(document).ready(function(){
    console.log( "ready!" );

    window.addEventListener('click', function (event){
        

        var div = document.createElement('div');
        div.className = 'clickOnPage';
        div.style.top = `${event.pageY  -12}px` ;
        div.style.left = `${event.pageX -12}px`;
        document.body.appendChild(div);
        setTimeout(()=> {
            div.remove();
        },600);

    });





   var pathEls = document.querySelectorAll(".anim");
   console.log(pathEls);
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 5000,
    delay:0,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

var competences = document.getElementById('myCanvas');
console.log(competences);
var ctx = competences.getContext('3d');
ctx.fillStyle = 'green';
ctx.fillRect(0, 10,10, competences.width, 100,100);


function Sphere3D(radius) {
  this.point = new Array();
  this.color = "rgb(100,0,255)"
  this.radius = (typeof(radius) == "undefined") ? 20.0 : radius;
  this.radius = (typeof(radius) != "number") ? 20.0 : radius;
  this.numberOfVertexes = 0;
 
  // Loop from 0 to 360 degrees with a pitch of 10 degrees ... 
   for(alpha = 0; alpha <= 6.28; alpha += 0.17) {
    p = this.point[this.numberOfVertexes] = new Point3D();
 
    p.x = Math.cos(alpha) * this.radius;
    p.y = 0;
    p.z = Math.sin(alpha) * this.radius;
 
    this.numberOfVertexes++;
  }
 
  // Loop from 0 to 90 degrees with a pitch of 10 degrees ... 
  // (direction = 1)
 
  // Loop from 0 to 90 degrees with a pitch of 10 degrees ...
  // (direction = -1)
 
  for(var direction = 1; direction >= -1; direction -= 2) {
    for(var beta = 0.17; beta < 1.445; beta += 0.17) {
 
      var radius = Math.cos(beta) * this.radius;
      var fixedY = Math.sin(beta) * this.radius * direction;
 
      for(var alpha = 0; alpha < 6.28; alpha += 0.17) {
        p = this.point[this.numberOfVertexes] = new Point3D();
 
        p.x = Math.cos(alpha) * radius;
        p.y = fixedY;
        p.z = Math.sin(alpha) * radius;
 
        this.numberOfVertexes++;
      }
    }
  }
}


/*var letterEls = document.querySelectorAll('.letter');
for (var i = 0; i < letterEls.length; i++) {
  var letterEl = letterEls[i];
  var offset = anime.setDashoffset(letterEl);
  letterEl.setAttribute('stroke-dashoffset', offset);
   anime({
    targets: letterEl,
    duration: anime.random(0, 1000),
    delay: anime.random(0, 300),
    opacity: [
      { value: 0, duration: anime.random(0, 300) },
    ],
    loop: true
  });
}*/



});

/*
$(function(){
    var ink, i, j, k;
    $(".paperButton").mousedown(function(e){
    if($(this).find(".ink").length === 0){
    $(this).prepend("<span class="ink"></span>");
    }
    
    ink = $(this).find(".ink");
    ink.removeClass("animate");
    
    if(!ink.height() && !ink.width()){
    i = Math.max($(this).outerWidth(), $(this).outerHeight());
    ink.css({height: i, width: i});
    }
    
    j = e.pageX - $(this).offset().left - ink.width()/2;
    k = e.pageY - $(this).offset().top - ink.height()/2;
    
    ink.css({top: k+"px", left: j+"px"}).addClass("animate");
    
    });
    });*/