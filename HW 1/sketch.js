function setup() {
  createCanvas(800, 600);

  //change background color, with RED, Green, Blue value 0-256)
  background (127, 0, 25)

  //style line
  stroke('magenta')
  strokeWeight(5)

  //draw line as this is the computers hierarchy
  line(0, 0, 800, 400)

  //adding circle with pink color
  fill (200, 58, 96)
  strokeWeight (3)
  circle (333, 380, 333)
 
  //adding triangle with transparent color)
  fill (100, 0, 255, 100)
  strokeWeight (8)
  triangle (150, 200, 380, 600, 500, 550)

//adding ellipses (x, y, width, height)
fill(19, 3, 97, 100)
ellipse (100, 400, 300, 600)


}
