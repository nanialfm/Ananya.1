 // First and starting state
 let state = "menu";
 let scene = 1;
 //scene 3 a & b buttons
 let button, northButton, southButton;
 //the two colors
 let startColor, endColor;
 //lerp is the feture that helps the background fade between two colors rather than randomly
 let lerpAmount = 0;
 let increasing = true;
 
 function setup() {
   createCanvas(800, 600);
   // Set a base font
   textFont('Century Schoolbook'); 
 
   // Define colors for background fade
   startColor = color(102, 0, 102);
   endColor = color(0, 255, 255);
 
   // Create the button for scene transition in game screen
   button = createButton('Next Scene');
   button.position(750, 450);
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
 }
 //menu screen features
 function menuScreen() {
   background(153, 0, 76);
  
   fill(255);
   rect(25, 325, 550, 50, 20); // Start button
   rect(25, 400, 250, 50, 20); // Characters button
   rect(320, 400, 250, 50, 20); // Settings button
   rect(25, 480, 250, 50, 20); // Help button
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
   fill('#7FFFD4');
   textSize(60);
   textAlign(CENTER, TOP);
   text('Long Way From', 300, 65);
  
   //destription
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
   
 }
 
 function southScene() {
   // Obvi new background for the south scene
    background(153, 0, 0);
   
   rect(250, 300, 150, 40, 20)
   rect(30, 300, 150, 40, 20)
   rect(450, 300, 150, 40, 20)
   
 }
 
 function charactersScreen() {
    {
   background(102, 0, 51);
   
  //Text Title "Choose Character Color"
 
   //you, car color
   fill (255,0,0)
   strokeWeight(1.5)
   circle(225, 150, 175)
   
    //create differnce in the piece so its not all flat
   strokeWeight(0)
   fill(204, 0, 102)
   rect(0, 280, 800, 300)
   
   //Waredrobe Colors
   fill(0,0,255)
   circle(480, 200, 75)
   fill(0,255, 0)
   circle(480, 100, 75)
   
   //Buy New Colors
   fill (255,128,0)
   circle(100, 315, 25)
   
   fill (102,204,0)
   circle(100, 360, 25)
   
   fill (0,204,204)
   circle(100, 405, 25)
   
   fill (255,153,51)
   circle(200, 315, 25)
   
   fill (128,255,0)
   circle(200, 360, 25)
   
   fill (0,255,255)
   circle(200, 405, 25)
   
    fill (255,178,102)
   circle(300, 315, 25)
   
   fill (153,255,51)
   circle(300, 360, 25)
   
   fill (255,204,153)
   circle(400, 405, 25)
   
    fill (178,255,102)
   circle(400, 315, 25)
   
   fill (102,255,255)
   circle(400, 360, 25)
   
   fill (51,255,255)
   circle(300, 405, 25)
   
   fill (153,255,255)
   circle(200, 405, 25)
   
    fill (255,299, 204)
   circle(200, 315, 25)
   
   fill (204, 255, 153)
   circle(200, 360, 25)
   //Closet, features*
  
   }
 }
 
 function settingsScreen() {
   background(255,105,180);
   fill(139,69,19);
   textSize(32);
   textAlign(CENTER, CENTER);
   text("Music ON/OFF", width / 2, height / 2);
   
   //theme feature*
 }
 
 function helpScreen() {
   background(0, 150, 150);
   fill('deeppink');
   textSize(16);
   // Align the text in the center horizontally*
   textAlign(CENTER, BASELINE); 
   //Why...
   let textContent = "Why? Because I was told for a midterm grade. But also because I knew I could put what was in my head into a code and game. I tried my best and put myself and body through it.";
   // Using textWrap to ensure the text fits within the canvas width
   textWrap(WORD);
   // the wrapped text with width and height constraints, that aint working...*
   text(textContent, width / 2, height / 4, width - 40, 30);
   
   //How
   //Goal
   //Inspos
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
     }
   }
 }
 
 //Notes: Im having a problem with when the button leads to the next scene it always starts too far off to the right, im reading the code and it seems easy fix but whatever i correct doesnt solve the issue...*