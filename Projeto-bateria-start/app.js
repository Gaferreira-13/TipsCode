let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
   
    let buttonInnerHTML = this.innerHTML;

 makeSounds(buttonInnerHTML)

 buttonAnimation(buttonInnerHTML)
    
  })
}
  document.addEventListener('keydown', function(event){
    makeSounds(event.key)

    buttonAnimation(event.key)
})

function makeSounds(key){
  switch (key) {
    case "w":
      let Tom1 = new Audio("./sounds/tom-1.mp3");
      Tom1.play();
      break;

    case "a":
      let Tom2 = new Audio("./sounds/tom-2.mp3");
      Tom2.play();
      break;

    case "s":
      let Tom3 = new Audio("./sounds/tom-3.mp3");
      Tom3.play();
      break;

    case "d":
      let Tom4 = new Audio("./sounds/tom-4.mp3");
      Tom4.play();
      break;

    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "j":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    default:console.log(buttonInnerHTML)
      break;
  }

}

function buttonAnimation(currentkey){
  let activeButton = document.querySelector('.' +currentkey)

  activeButton.classList.add('pressed')

  setTimeout (function(){
    activeButton.classList.remove('pressed')
  },300)
}