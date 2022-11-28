

            var numberOfDrumButtons = document.querySelectorAll(".drum").length;

            for (var i = 0; i < numberOfDrumButtons; i++) {
            
              document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            
                var buttonInnerHTML = this.innerHTML; 
                makeSound(buttonInnerHTML);
                buttonAnimation(buttonInnerHTML);
              });
            }

                document.addEventListener("keypress",function(event){
                  makeSound(event.key);
                  buttonAnimation(event.key);
                } );

                function makeSound(keyss) {
            
                switch (keyss) {
                  case "v":
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    
                    break;

                    case "a":
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;
                    
                    case "s":
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;
                    
                    case "n":
                    var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;
                    
                    case "t":
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;
                    
                    case "h":
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
                    
                    case "r":
                    var audio = new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
                
                  default: console.log(key);
                    
                }
              };
            

              function buttonAnimation(currentsKey) {

                var activeButton = document.querySelector("." + currentsKey);
              
                activeButton.classList.add("pressed");
              
                setTimeout(function() {
                  activeButton.classList.remove("pressed");
                }, 200);
              
              }
              
            
            


            