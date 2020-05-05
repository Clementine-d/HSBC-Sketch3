
var sentence = {
  x: 300,
  xspeed: 4,
};


var words = ["Together", "We", "Thrive"];

var index = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  move();
  bounce();
  display();
  
}

function bounce() {
  if (sentence.x > width || sentence.x <0) {
    sentence.xspeed = sentence.xspeed * -1;
    
    index = index + 1;
    
    if (index == words.length) {
      index = 0;
    }
  }

}
  
function display() {
  
  fill(255, 0, 0);
  textSize(70);
  text(words[index], sentence.x, 170, 600, 400);
  
}
  
  function move() {
    sentence.x = sentence.x + sentence.xspeed;
  }



  
  