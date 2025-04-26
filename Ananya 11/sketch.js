// Author: Ananya Francois
// Find all the bubbles and click them, dont go over the clicked bubbles then they hide

class Bubble {
  constructor(x, y) {
    this.x = x; // x position of the bubble
    this.y = y; // y position of the bubble
    this.clicked = false; // not clicked initially
  }
  show() {
    
    let bubbleColor = color(0); 

    // clicked, make it light blue
    if (this.clicked) {
      bubbleColor = color(178, 255, 255); //clicked
    } 
    // hovered, change color to dark blue
    else if (dist(mouseX, mouseY, this.x, this.y) < 25) {
      bubbleColor = color(15, 255, 255); //hover color 
    }

    fill(bubbleColor); // set the bubble color
    circle(this.x, this.y, 50); // draw the bubble
  }

checkClick() {
    // If mouse is over the bubble, toggle clicked state
    if (dist(mouseX, mouseY, this.x, this.y) < 25) {
      this.clicked = !this.clicked; // toggle clicked state
    }
}

}

let bubbles = []; // array to store bubbles

function setup() {
  createCanvas(550, 500); 

  // Create multiple bubbles with different positions
  bubbles.push(new Bubble(100, 100)); // first bubble
  bubbles.push(new Bubble(250, 200)); // second bubble
  bubbles.push(new Bubble(300, 300)); // third bubble
  bubbles.push(new Bubble(350, 400)); // 4 bubble
  bubbles.push(new Bubble(400, 500)); // 5 bubble
  bubbles.push(new Bubble(450, 350)); // 6 bubble
  bubbles.push(new Bubble(500, 100)); // 7 bubble
  bubbles.push(new Bubble(550, 200)); // 8 bubble
  bubbles.push(new Bubble(111, 300)); // 9 bubble
  bubbles.push(new Bubble(222, 400)); // 10 bubble
  bubbles.push(new Bubble(444, 500)); // 11 bubble
  bubbles.push(new Bubble(333, 350)); // 12 bubble
}

function draw() {
  background(0); 

  // Show & check every bubble
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show(); // display the bubble
    bubbles[i].checkClick(); // check if bubble was clicked
  }
}

function mousePressed() { 
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].checkClick(); 
  }
}