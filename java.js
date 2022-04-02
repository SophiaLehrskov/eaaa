// JS der bestemmer hvordan og hvor hurtigt "Erhvervsakademi Aarhus" easer out og in
anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1200,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 800,
    easing: "easeOutExpo",
    delay: 1000
  });


  function playSound(animal) {
    document.getElementById(animal).play();
  };
  
  // Wrapper bogstaverne
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})  // fortsætter med at komme
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
// Script til afspilning af lyd ved Clara

document.getElementById("startOrStopImg").onclick = function() {
  var audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();
};

// Script til afspilning af lyd ved Tobias

document.getElementById("startOrStopImg1").onclick = function() {
  var audio = document.getElementById("audio1");
  if (audio.paused) audio.play();
  else audio.pause();
};