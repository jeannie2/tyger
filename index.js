var keyCount = 0;
console.log("Stanza 1 of The Tyger by William Blake. Press spacebar to begin");

var gump = document.querySelector(".gump").innerText;
var cheese = gump.trim().length;
//console.log(gump);
//console.log(cheese);

$("body").keypress(function(event){ 
    keyCount++
    if(event.which === 32) { 
            if(keyCount === 1) {
                window.location = "tyger.html"
            }
    }
    console.log(keyCount)
    
});

/*dots */
$(document).ready(function(){
    function freshDot(){
      this.obj = document.createElement("div");
      this.obj.classList.add("box");
      this.obj.classList.add("twinkle");
      this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
      this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
      this.size = Math.floor(Math.random())+ 1.9; /*change to 1*/
      this.obj.style.height =  this.size + 'px';
      this.obj.style.width = this.size + 'px';
      /*ideally random sizes too (of certain max)*/
      document.body.appendChild(this.obj);
    }
    var dot = [];
    for(var i = 0 ; i < 50 ; i++ ){
      dot.push(new freshDot());
    }
    diamond();//guess what all dots loaded?
    //console.log(dot)
    //console.log(typeof(dot)) //object
    //console.log($('.twinkle').css("animation-duration"));
});
   

function diamond() {
    var twinkles =  document.querySelectorAll(".twinkle");
       twinkles.forEach(function(el) {
        //console.log(lengthstar) //prints 50
        //console.log('printed'); //prints 50 times 
        var randomNumbers = randomNumber();
        el.style.animationDuration = randomNumbers.x;
        //el.style.animationDelay = randomNumbers.y;//doesnt work if set to x, which define as random
       
       });
    }

    function randomNumber() {
        var x = (Math.floor(Math.random()* 13) + 4) + "s";//duration
        //var y = (Math.floor(Math.random()* 3)) + "s";//delay. removed, or else appears all on screen to start and then blinks in and out
       //console.log(x)
        return  {
            x: x,
           // y: y //no comma
        };
    }

    /*var twinkles = document.getElementsByClassName("twinkle")
    console.log("this is the" + twinkles.length) //last value is 49
    }*/
