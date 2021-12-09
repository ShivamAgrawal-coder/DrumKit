// document.getElementById("Drum").addEventListener("click", handleClick);

// function handleClick(){
    
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// }

var buttonNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i<buttonNumber; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var inHTML = this.innerHTML 
        makeSound(inHTML);
        buttonAnimation(inHTML);
        }
)
}

document.addEventListener("keydown",function(event){
    
    makeSound(event.key)
    buttonAnimation(event.key);
})

function makeSound(key){ 
        switch (key) {
            case "s":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "h":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case "i":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "v":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "m":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            default:
                break;
        }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}