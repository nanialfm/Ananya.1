//by Ananya Francois
let y = 0;  // y position for moving circles
let diameter = 50;  // Diameter of circles
let radius = 25;  // Radius of hover detection
let circles = [];  // stores multiple values in a circle

function setup() {
  createCanvas(750, 500); 
  
// Initialize the circles array for each circle
  for (let x = 0; x <= width; x += diameter) {
    for (let i = 0; i <= height; i += diameter) {
      circles.push({
        x: x,
        y: i,
        clicked: false // no circle is clicked 
      });
    }
  }
}

function draw() {
  background(0);  
  
// Loop through the circles to draw them
  for (let i = 0; i < circles.length; i++) {
    let x = circles[i].x;
// Apply the down movement to each circle
    let yPosition = circles[i].y + y;  
    
// If mouse is hovering over the circle
    if (dist(mouseX, mouseY, x, yPosition) < radius) {
// Change color to red, unless clicked
      if (!circles[i].clicked) {
        fill(255, 51, 51);
      }
    } 
// If the circle is clicked, turn it black
    else if (circles[i].clicked) {
      fill(0);
    } 
// Otherwise, default to pink
    else {
      fill(255, 0, 127);
    }

//circle position
    ellipse(x, yPosition, diameter, diameter);  
  }

// Increment y position for down movement of circles
  y += 1;  

// When circle moves to the bottom of the canvas it moves back to the top
  if (y >= diameter) {
    for (let i = 0; i < circles.length; i++) {
      let yPosition = circles[i].y + y;
      if (yPosition > height) {
// Reset clicked state for all circles that have passed the bottom...Not working, killing my brain
        circles[i].clicked = false;  // Reset it to pink
      }
    }
// Reset y position to keep the flow continuous
    y = 0;  
  }
}

// Function to handle mouse clicks
function mousePressed() {
  for (let i = 0; i < circles.length; i++) {
    let x = circles[i].x;
    let yPosition = circles[i].y + y;
    
// Check if mouse is over circle
    if (dist(mouseX, mouseY, x, yPosition) < radius) {
      
// Toggle clicked state between black or pink
      circles[i].clicked = !circles[i].clicked;
    }
  }
}

//this code is killing me and making my head hurt