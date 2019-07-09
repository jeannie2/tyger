var running = false;
var keyCount = 1;
var soundLoad = document.getElementById("soundLoad"); 
var soundBomb = document.getElementById("soundBomb"); 
var svg = document.getElementById("#svgcontainer")

console.log("Press spacebar to proceed")
//console.log("starting value of running is " + running); //comment out

$("body").keydown(function(event){ //need specify? QQ
    if(event.which === 32) { //spacebar
        if(keyCount === 1) { //press once 
            if(!running) {
                running = true;
                //console.log("keycount is 1"); //comment out
            
                function dial() {
                function ring() {
                    soundLoad.play();
                }
                ring();
                setTimeout(ring, 1005) //call twice
                }
                dial(); //play from start 
                initialise();

                function initialise() {
                $("body").removeClass("moth");
                $("container").show()
                $(".left-half").show();
                $(".right-half").show();
                $("#container").addClass("batman");//black white animation sequence
                $("#tigerone").show();
                //play from start 
                setTimeout(function() { 
                $("#tigerone").animate({opacity: 0}); //no need queue
                //ideally should be modifying background opacity simultaenously, rather than matching timer in animatoin
                }, 700);
                $("#tigertwo").show();
                }
            
               setTimeout(function() { 
                    $("#tigertwo").animate({opacity: 0}, {queue:false});
                    $("#container").animate({opacity: 0}, {queue:false});
                    running = false;
                    countkey(); //place here
                    console.log("press space bar to proceed")
               }, 2000);
            } //running
        } /* keycount 1*/ 

        else if(keyCount === 2) {
            if(!running) {
                running = true;
                //console.log("you are running keycount 2. value of running is" + running)//comment out
                $("#container").removeClass("batman");
                $("#container").css("opacity", 1) //not ideal but tied to timeout of tigertwo
                //console.log("keycount is 2")
                $("#burning").show();
                $(".left-half").hide();
                $(".right-half").hide();
                //better way to select
                var burning = document.getElementsByClassName("bu"); 
                var length = burning.length;
                //console.log("the length of burning.length is" + burning.length);
                playRecording();
    
                function playRecording() {
                    var y = 1;
                    for(var i = 0; i<length; i++) {
                        burning[i].classList.add("lightness");
                        burning[i].style.animationDuration = "0." + y + "s"; 
                        //"4." + y + "s"; ///QQQ animatoinduration set before lightness applied. starts runnig before set. can remove settimeout from playnote?
                        //console.log("the animation variable is " + y)
                        pacing(i);
                       y++; //so duration is 0.9, 0,8
                    }
                
                function pacing(i) {
                    if(i===6) { //highest value
                         setTimeout(function() {
                            //console.log("pacing function evaluated. running value is " + running)
                            bright()
                            },1300); //1.3 seconds
                         } 
                         /*else {
                        console.log("nothing to report" + i)
                    }*/
                } 
                 
                } //playrecording function

                function bright() {
                soundBomb.currentTime=0;
                soundBomb.play();
                $("#burning").hide();
                $("#light").show()
                $("#light").css("opacity", 1);
                $("body").addClass("blinkdiv");
                
                setTimeout(function() {
                    running = false;
                    countkey();
                    console.log("press space bar to proceed");
                    $("body").addClass("evening") 
                }, 3300); 
                }

            } //running
        } //keycount 2

         else if(keyCount === 3) {
              if(!running) {
                running = true;
                //console.log("you are running keycount 3. value of running is" + running)
                $("#light").css("opacity", 0);  /* QQQQ*/
                $("body").removeClass("blinkdiv");
                $("svg").show();
                $("div#elephant.gump").show();
                var g = document.querySelectorAll(".trees");
                //console.log(g) //comment out
                //console.log(g.length) //comment out
                sway()
            
                function sway() {
                for(var i = 0; i < g.length; i++) {
                g[i].classList.add("sway") //runs 37 times
                var randomNumbers = randomNumber();
                g[i].style.animationDuration = randomNumbers.x; 
                //console.log(randomNumbers.x)//comment out
                }
             
                function randomNumber() {
                var x = (Math.floor(Math.random()* 4) + 5) + "s"; //btw 9 and 5
                return  {
                x: x,
                };
                } 

                }//sway

            $("#forest").show();
            $(".gump").each(function(index){ /* adds more classes than necesary if use div id forest */
             var x = 0;
             var characters = $(this).text().split(""); 
            //console.log("quick " + characters)//comment out
             $this=$(this);  
             $this.empty();
             $.each(characters, function(i, el){
                x++;
                var gump = "gump" + x;
                $this.append("<span id='" + gump + "' class='waterfall'>"+el+"</span>"); 
            })
            });
             setTimeout(function() {
                running = false;
                countkey();
                console.log("press space bar to proceed");
            }, 1500); 
          
            } //running
        } //keycount 3

        else if (keyCount === 4) {
            if(!running) {
                running = true;
                //console.log("you are running keycount 4. value of running is" + running) //comment out
               
                //what immortal hand or eye
                var i = 0;
                var y = 0;
                var txt = "What immortal hand or eye";
                var yoy = "Could frame thy " + "\xa0\xa0\xa0" + " fearful symmetry?";
                var speed = 130; /*milliseconds to wait before execute*/
                var speedtwo = 113;

                $("svg").hide();
                $("#forest").hide();
                $("div#elephant.gump").hide();
                $("body").css("background", "black"); 
        
                function typeWriter() {
                    if(i<txt.length) {
                        document.getElementById("typewriter").innerHTML += txt.charAt(i)
                        i++;
                        setTimeout(typeWriter, speed) //delay btw each letter so speed?
                    }
                }

                typeWriter();

                setTimeout(function() {
                typeWriterTwo();
                }, 3800);

                function typeWriterTwo() {
                    if(y<yoy.length) {
                    document.getElementById("classic").innerHTML += yoy.charAt(y)
                    y++;
                    setTimeout(typeWriterTwo, speedtwo)
                    }
                }

                setTimeout(function() {
                    running = false;
                    countkey();
                }, 5000); 
            
            } //running
         } //keycount 4

        else if (keyCount === 5) {
        window.location = "index.html"
         } //keycount 5
    
    } //spacebar 
    else {
        console.log("Press spacebar, not other key")
    }

}) //body keydown

//check if function is running. if finish running, increment counter. call fuction when change running value;
function countkey() {
    if(!running) {
        keyCount++
       // console.log("running " + running) comment out //
       // console.log("keyCount is " + keyCount); //doesnt return the first time // comment out
       
    } else {
        throw "running, wait until done";
        //console.log("running, wait until done");//prints when start and when // comment out
        //console.log("running " + running) comment out
        //console.log("keycount is " + keyCount) comment out
    } 
    return keyCount
}


document.addEventListener("keydown", function(e) {
    if(!e.repeat) {
        console.log("not holding down key") //when load page/refresh, prints twice then disapears console
    }
    else {
        console.log("repeating key")
    }
});

//if time between keys too short
var last;
$("body").keydown(function(event){
if(event.which === 32) {
var n = new Date()
var elapsedTime = Math.abs(last - n); //negative to positive #
last = n;

//console.log(n) comment out
//console.log(elapsedTime) comment out

if (elapsedTime < 3000) { //3 seconds
   throw "running, wait until done";
}
}
});


