
var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length ;i++){
   
    document.querySelectorAll(".drum")[i].addEventListener("click" , function  (){
        var allValues = this.innerHTML;
        makeSound(allValues);
        buttonAnimation(allValues);

    });
}
    document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

    // var allValues = this.innerHTML;
    //     makeSound(allValues);
    });




function makeSound(key){
    switch (key) {
        case "w":
            var audio  = new Audio("sounds/tom-1.mp3");
         audio.play();
            break;
            case "a":
                var audio  = new Audio("sounds/tom-2.mp3");
             audio.play();
                break;
                case "s":
            var audio  = new Audio("sounds/tom-3.mp3");
         audio.play();
            break;
            case "d":
            var audio  = new Audio("sounds/tom-4.mp3");
         audio.play();
            break;
        default:
            var audio  = new Audio("sounds/crash.mp3");
         audio.play();
            break;
    }

}

function buttonAnimation (currKey){
 var activeButton = document.querySelector("."+ currKey);
 activeButton.classList.add("pressed");

 setTimeout(function(){
    activeButton.classList.remove("pressed");
 }, 100);
}
