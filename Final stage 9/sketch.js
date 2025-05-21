//Ananya Francois. Final. edition .9. Follow your eyes and the scenes as you drive through a small state. Enjoy habitats and change them to find the next level.
let state = "menu";
let button5;
 let scene = 1;
 //scene 3 a & b buttons
 let button, northButton, southButton;
 //the two colors
 let startColor, endColor;
 //lerp is the feature that helps the background fade between two colors rather than randomly
 let lerpAmount = 0;
 let increasing = true;
let currentScene = "north"; // Track the current scene
 
 function setup() {
   createCanvas(800, 600);
   
   button5 = createButton('Back to Menu');
  button5.position(10, height - 40); // Position the button in the bottom left corner
  button5.style('background-color', 'rgb(191,8,8)');
  button5.style('color', 'white');
  button5.style('border', 'none');
  button5.style('padding', '10px');
  button5.style('border-radius', '5px');
  button5.mousePressed(() => {
   // Switch back to the menu screen when clicked
    state = "menu"; 
   
    // hide the button in the beginning//didn't work
    button.hide();
     
  });
   // Set a base font
   textFont('Century Schoolbook'); 
 
   // Define colors for background fade
   startColor = color(102, 0, 102);
   endColor = color(0, 255, 255);
 
   // Create the button for scene transition in game screen
   button = createButton('Continue');
   button.position(725, 450);
   button.mousePressed(() => {
     // Change to second scene when clicked
     scene = 2; 
      // Hiding the button when in Scene 2
     button.hide();
   });
   button.hide();
 
   // Create North and South buttons for Scene 2
   northButton = createButton('North');
    // Position it on the screen
   northButton.position(675, 130);
   northButton.mousePressed(() => {
     // Change to north scene when clicked
     state = "northScene"; 
     // Hide North button after choice is clicked
     northButton.hide(); 
     // Hide South button after click
     southButton.hide(); 
   });
   northButton.hide();
 
   southButton = createButton('South');
   // Position of south screen
   southButton.position(675, 425); 
   southButton.mousePressed(() => {
     // Change to south scene when clicked
     state = "southScene"; 
     // Hide North button after one is clicked
     northButton.hide(); 
     // same South button 
     southButton.hide(); 
   });
   southButton.hide();
 }
 
 //set each page as a state 
 function draw() {
   if (state === "menu") {
     menuScreen();
   } else if (state === "game") {
     gameScreen();
   } else if (state === "characters") {
     charactersScreen();
   } else if (state === "settings") {
     settingsScreen();
   } else if (state === "help") {
     helpScreen();
   } else if (state === "exit") {
     exitScreen();
   } else if (state === "northScene") {
     northScene();
   } else if (state === "southScene") {
     southScene();
   }
   else if (state === "north") {
    northScene();
  } else if (state === "beach") {
    beachScene();
  }
 }
 //menu screen features
 function menuScreen() {
   background(70, 39, 60);
  
   fill(210,88,55);
   rect(25, 325, 550, 50, 20); // Start button
   fill(120,115,45)
   rect(25, 400, 250, 50, 20); // Characters button
   fill(40,120,180)
   rect(320, 400, 250, 50, 20); // Settings button
   fill(240,170,70)
   rect(25, 480, 250, 50, 20); // Help button
   fill(250,195,170)
   rect(320, 480, 250, 50, 20); // Exit button
  
   fill(0);
   textSize(20);
   textAlign(CENTER, CENTER);
   text("Start", 300, 350);
   text("Characters", 150, 425);
   text("Settings", 445, 425);
   text("Help", 150, 505);
   text("Exit", 445, 505);
  
   //title
   fill(14,204,237);
   textSize(60);
   textAlign(CENTER, TOP);
   text('Whats Going On?', 300, 65);
  
   //description
   textSize(18);
   text('a short game', 300, 155);
  
   //creators name, aka me
   textSize(13);
   text('By : Ananya Francois', 300, 195);
  
   //mouse location, for some reason it wont stay tho...
   textSize(16);
   text(`x: ${mouseX} y: ${mouseY}`, 30, 25);
 }
 
 function gameScreen() {
   if (scene === 1) {
     sceneOne();
     button.show();
   } else if (scene === 2) {
     sceneTwo();
     // Show North and South buttons in scene 2
     northButton.show(); 
     southButton.show();
   }
 }
 
 function sceneOne() {
   // Background fade logic for Scene 1
   let bgColor = lerpColor(startColor, endColor, lerpAmount);
   background(bgColor);
  
    // Title: "Find Button to Continue" 
  fill(255, 255, 0);
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLDITALIC);
  text("Find Button to Continue!", width / 2 - 20, 20);
   
   // The scene 1 elements
   fill(64, 64, 64);
   rect(0, 500, 800, 800);
 
   fill(255, 204, 0);
   rect(15, 535, 105, 40);
   rect(145, 535, 130, 40);
   rect(300, 535, 150, 40);
   rect(480, 535, 175, 40);
   rect(680, 535, 190, 40);
 
   let moonColor = mouseIsPressed ? color(255, 210, 24) : color(178, 178, 176);
   fill(moonColor);
   circle(65, 65, 100);
 
   fill(245, 29, 29);
   rect(450, 405, 165, 108);
 
   fill(90, 231, 253);
   rect(470, 415, 55, 55);
   rect(545, 415, 55, 55);
 
   fill(128, 128, 128);
   circle(480, 505, 55);
   circle(585, 505, 55);
 }
 //scene two 
 function sceneTwo() {
   background(51, 40, 102);
   strokeWeight(0);
   //street ground
   fill(112, 128, 144);
   rect(350, 75, 450, 150, 10);
   rect(350, 350, 450, 150, 10);
   rect(200, 200, 300, 200, 10);
   rect(0, 250, 300, 100);
  
   //street paint
   fill(255, 204, 0);
   rect(15, 290, 60, 20);
   rect(100, 290, 60, 20);
   rect(200, 290, 60, 20);
   rect(300, 290, 60, 20);
   rect(420, 200, 20, 60);
   rect(420, 340, 20, 60);
   rect(550, 140, 60, 20);
   rect(550, 415, 60, 20);
   rect(420, 290, 20, 20);
   rect(450, 415, 60, 20);
   rect(450, 140, 60, 20);
 }
 //North scene functions
 function northScene() {
   // background for the north scene
   background(0, 102, 102);
   strokeWeight (0)
   fill (29, 21, 37)
   //now the buildings have to look real, skinner?
     rect(0, 250, 125, 600);
   rect(110, 200, 85, 600);
   rect(190, 160, 85, 600);
   rect(275, 85, 85, 600);
   rect(360, 130, 85, 600);
   rect(445, 290, 85, 600);
   rect(515, 160, 125, 600);
   
   //design on tops, looking for triangles & Trapzoids, maybe a line that leads to a red dot that goes on and off
   
   //the text
   textFont('Courier New');
   textSize(38);
   fill(255, 255, 0)
   text('YOUVE MADE IT TO THE CITY!', 315, 325);
   
   // Draw the Shopping rectangle 
  fill(243, 228, 22); 
  strokeWeight(0);
  rect(50, 420, 150, 40, 20);  

  fill(0);  
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Shopping", 50, 420, 150, 40, 20);  
  
  // Draw the Beach rectangle 
  fill(243, 228, 22);
  rect(300, 420, 150, 40, 20);

//make into button…
  
  fill(0);  
  text("Beach", 300, 420, 150, 40);  
  
   
 }
 
 function southScene() {
   // Obvi new background for the south scene
     background(153, 0, 0);
  
  // Title
  fill(255); 
  textSize(64);  
  textAlign(CENTER, TOP);  
  text("Where in the South", width / 2.5, 50); 

  // Draw the Swamp rectangle 
  fill(243, 228, 22); 
  strokeWeight(0);
  rect(30, 300, 150, 40, 20);  

  fill(0);  
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Swamp", 30, 300, 150, 40, 20);  
  
  // Draw the Lake rectangle 
  fill(243, 228, 22);
  rect(250, 300, 150, 40, 20);
  
  fill(0);  
  text("Lake", 30, 300, 150, 80);  
  
  // Draw the openfield rectangle 
  fill(243, 228, 22);
  rect(450, 300, 150, 40, 20);  
  
  fill(0);  
  text("Open-Field", 450, 300, 150, 40);  
   
 }
 
 function charactersScreen() {
    {
   background(102, 0, 51);
  
   // Title: "Choose Your Character" 
  fill(255, 0, 255);
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLDITALIC);
  text("Choose Your Character", width / 2 - 200, 20);  

  // "Your Closet" Title (Smaller, top right)
  fill(255, 0, 127);
  textSize(18);  
  textStyle(BOLD);
  textAlign(RIGHT, TOP);
  text("Your Closet", width - 275, 20);  

  // "BUY!!" Title
  fill(153, 0, 153)
  textSize(20);
  textAlign(CENTER, BOTTOM);
  text("BUY!!", width / 2.5, 280);  
  
   //you, car color
   fill (255,0,0)
   strokeWeight(1.5)
   circle(180, 150, 175)
  
   //create difference in the piece so its not all flat
   strokeWeight(0)
   fill(204, 0, 102)
   rect(0, 280, 800, 300)
  
  // Closet rectangle
  strokeWeight(1.5);
  fill(142, 52, 6);
  rect(430, 55, 100, 190);
  
  // Wardrobe Colors (Circles)
  fill(0, 0, 255);
  circle(480, 200, 75);  // Blue
  fill(0, 255, 0);
  circle(480, 100, 75);  // Green

  // Color Options Below (Circles)
  fill(255, 128, 0);
  circle(100, 315, 25);  // Orange
  fill(102, 204, 0);
  circle(100, 360, 25);  // Light Green
  fill(0, 204, 204);
  circle(100, 405, 25);  // Cyan
  
  fill(255, 153, 51);
  circle(200, 315, 25);  // Orange-ish
  fill(128, 255, 0);
  circle(200, 360, 25);  // Light Green
  fill(0, 255, 255);
  circle(200, 405, 25);  // Aqua
  
  fill(255, 178, 102);
  circle(300, 315, 25);  // Peach
  fill(153, 255, 51);
  circle(300, 360, 25);  // Light Yellow-Green
  fill(255, 204, 153);
  circle(400, 405, 25);  // Light Peach
  
  fill(178, 255, 102);
  circle(400, 315, 25);  // Pale Green
  fill(102, 255, 255);
  circle(400, 405, 25);  // Light Cyan
  
  fill(51, 255, 255);
  circle(300, 405, 25);  // Light Blue
  fill(153, 255, 255);
  circle(200, 405, 25);  // Soft Cyan
  
  // Extra orange, green circles
  fill(255, 299, 204);
  circle(400, 315, 25);  // Extra Orange
  
  fill(204, 255, 153);
  circle(400, 360, 25);  // Extra Light Green
  
  // Extra code line on part 500
  fill(204, 255, 153);
  circle(500, 315, 25);  // Extra Green
  fill(204, 255, 153);
  circle(500, 360, 25);  // Extra Green
  fill(255, 255, 155);
  circle(500, 405, 25);  // Extra Yellow
  
}
 }
 
 function settingsScreen() {
    background(255,105,180); //i tried adding image but i need to claim it first. 
  //hierarchy 
  fill(255, 204, 229)
  strokeWeight(1.5)
  rect(385, 280, 130, 35, 20)
  
     fill(255, 204, 229)
  strokeWeight(1.5)
  rect(390, 145, 130, 35, 20)
  
   fill(139,69,19);
   textSize(32);
   textAlign(CENTER, CENTER);
   text("Music ON/OFF", width / 2, height / 2);
  
   //theme feature
fill(139,69,19);
   textSize(32);
   textAlign(TOP, TOP);
   text("Theme ON/OFF", width / 2, height / 4);

}
 
 function helpScreen() {
   background(9, 84, 84);
  
  fill('deeppink');
  textSize(16);
  textAlign(CENTER, TOP);
  textStyle(BOLDITALIC);

  // Define the text content for each section
  let textContent = "I love life simulation games, they are like a escape where you have control of your paths and where you go and HOW you experience the game. I had my midterm and polished up the concept with better color schemes and added a second part";
  let textContent1 = "I kept attempting to copy the scenes i wanted to add before in proper hierarchy but it became tiring as some codes stopped working. I decided the best bet was to make a second part and flashbacks to the scenes i wanted to add. A lot of adding and over coming.";
  let textContent2 = "The idea is to travel through an unknown nation that leads you to various places that have challenges. Inspiration from Bandersnatch and choose your own adventures Each scene in theory will be art and puzzles to the next scene. Emphasizing the minimal choice yet personalization aspect";

  // Using textWrap to ensure the text fits within the canvas width
  textWrap(WORD);

  // Set the margins
  let margin = 45;
  let margin1 = 155;
  let margin2 = 285;

  let textWidthConstraint = width - 2 * margin;
  let textHeightConstraint = height - 2 * margin;

  // Display the section titles and their respective content
  // "Why?" section
  text("Why?", width / 2, margin);
  text(textContent, margin, margin + 30, textWidthConstraint, textHeightConstraint / 3);

  // "How?" section
  text("How?", width / 2, margin1);
  text(textContent1, margin, margin1 + 30, textWidthConstraint, textHeightConstraint / 3);

  // "Goal?" section
  text("Goal?", width / 2, margin2);
  text(textContent2, margin, margin2 + 30, textWidthConstraint, textHeightConstraint / 3);
 }

function beachScene() {
  background(155, 255, 255);

  fill(0, 204, 102);
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLDITALIC);
  text("The Water!!", width / 2 - 1, 25);

  // Sand and water
  fill(0, 0, 255);
  rect(0, 380, 800, 225);
  fill(255, 204, 153);
  rect(0, 450, 800, 65);
  
  fill(64, 64, 64);
  rect(0, 500, 800, 800);

  fill(255, 204, 0);
  rect(15, 535, 105, 40);
  rect(145, 535, 130, 40);
  rect(300, 535, 150, 40);
  rect(480, 535, 175, 40);
  rect(680, 535, 190, 40);

  // Car
  fill(255, 255, 102);
  circle(65, 65, 100);

  fill(245, 29, 29);
  rect(450, 405, 165, 108);

  fill(90, 231, 253);
  rect(470, 415, 55, 55);
  rect(545, 415, 55, 55);

  fill(128, 128, 128);
  circle(480, 505, 55);
  circle(585, 505, 55);
}
 
 function exitScreen() {
   background(0);
   fill(255, 0, 0);
   textSize(80);
   textAlign(CENTER, CENTER);
   text("THE END", width / 2, height / 2);
 }
 
 // Mouse drag to control the background fade transition
 function mouseDragged() {
   if (increasing) {
     lerpAmount += 0.02;
     if (lerpAmount >= 1) {
       lerpAmount = 1;
       increasing = false;
     }
   } else {
     lerpAmount -= 0.02;
     if (lerpAmount <= 0) {
       lerpAmount = 0;
       increasing = true;
     }
   }
 }
 
 function mousePressed() {
   if (state === "menu") {
     if (mouseX > 25 && mouseX < 575 && mouseY > 325 && mouseY < 375) {
       state = "game";
     } else if (mouseX > 25 && mouseX < 275 && mouseY > 400 && mouseY < 450) {
       state = "characters";
     } else if (mouseX > 320 && mouseX < 570 && mouseY > 400 && mouseY < 450) {
       state = "settings";
     } else if (mouseX > 25 && mouseX < 275 && mouseY > 480 && mouseY < 530) {
       state = "help";
     } else if (mouseX > 320 && mouseX < 570 && mouseY > 480 && mouseY < 530) {
       state = "exit";
     } else if (currentScene === "north") {
    if (mouseX > 300 && mouseX < 450 && mouseY > 420 && mouseY < 460) {
      currentScene = "beach";
}
}
     }
   }
 }
 
 //Notes: This was a very big pain in my ass. I hope it was enough for you guys expections.
