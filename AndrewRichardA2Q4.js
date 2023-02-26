//Flag of Folksland
function setup() {
  createCanvas(600, 400);
}

function draw() {
  colorMode(RGB);
  background(220);

  back(0, 0, 1, 255, 255, 255);
  block(0, 0, 1, 0, 0, 0);
  block(350, 0, 1, 150, 0, 0);
  block(0, 250, 1, 0, 0, 0);
  block(-350, 0, 1, 150, 0, 0);
  cog(0, -295, 1, 255, 200, 0);
  axe(-20, 40, 1, 255, 200, 0);

  //Transparent Illusion Lines
  stroke(0);
  strokeWeight(3);
  line(385, 319, 375, 310);
  stroke(255);
  strokeWeight(3);
  line(297, 270, 355, 335);
  line(339, 270, 373, 309);

  star(-15, 30, 1, 255, 200, 0);
}

//Corner Blocks
function block(x, y, size, r, g, b) {
  noStroke();
  translate(x, y);
  scale(size);
  fill(r, g, b);
  rect(0, 0, 250, 150);
}

//Backround, Cross Fill
function back(x, y, size, r, g, b) {
  noStroke();
  translate(x, y);
  scale(size);
  fill(r, g, b);
  rect(0, 0, 600, 400);
}

//Half Cog-Wheel Shape
function cog(x, y, size, r, g, b) {
  noStroke(0);
  translate(x, y);
  scale(size);
  fill(r, g, b);

  //Cog Curve
  beginShape();
  curveVertex(300, 100);
  vertex(300, 100);
  vertex(305, 80);
  vertex(335, 90);
  vertex(365, 110);
  vertex(385, 140);
  vertex(400, 180);
  vertex(405, 230);
  vertex(400, 260);
  vertex(390, 290);
  vertex(370, 320);
  vertex(340, 340);
  vertex(310, 350);
  vertex(280, 355);
  vertex(230, 350);
  vertex(190, 340);
  vertex(170, 330);
  vertex(155, 320);
  vertex(140, 300);
  vertex(150, 280);
  vertex(170, 300);
  vertex(190, 310);
  vertex(220, 320);
  vertex(260, 325);
  vertex(310, 315);
  vertex(345, 295);
  vertex(360, 270);
  vertex(365, 250);
  vertex(370, 220);
  vertex(365, 190);
  vertex(360, 160);
  vertex(345, 135);
  vertex(335, 120);
  vertex(320, 110);
  endShape(CLOSE);

  //Bump 1
  beginShape();
  vertex(345, 85);
  vertex(370, 100);
  vertex(360, 120);
  vertex(330, 100);
  endShape();

  //Bump 2
  beginShape();
  vertex(390, 125);
  vertex(400, 145);
  vertex(370, 170);
  vertex(365, 125);
  endShape();

  //Bump 3
  beginShape();
  vertex(410, 170);
  vertex(415, 200);
  vertex(385, 205);
  vertex(385, 165);
  endShape();

  //Bump 4
  beginShape();
  vertex(415, 230);
  vertex(410, 260);
  vertex(390, 260);
  vertex(390, 220);
  endShape();

  //Bump 5
  beginShape();
  vertex(405, 285);
  vertex(390, 315);
  vertex(365, 305);
  vertex(375, 270);
  endShape();

  //Bump 6
  beginShape();
  vertex(375, 335);
  vertex(345, 355);
  vertex(325, 330);
  vertex(360, 310);
  endShape();

  //Bump 7
  beginShape();
  vertex(315, 365);
  vertex(275, 370);
  vertex(270, 345);
  vertex(315, 345);
  endShape();

  //Bump 8
  beginShape();
  vertex(240, 365);
  vertex(205, 360);
  vertex(205, 335);
  vertex(255, 335);
  endShape();

  //Bump 9
  beginShape();
  vertex(180, 350);
  vertex(150, 335);
  vertex(160, 315);
  vertex(200, 330);
  endShape();

  //Bottom Edge
  beginShape();
  vertex(135, 295);
  vertex(150, 275);
  vertex(164, 295);
  vertex(145, 310);
  endShape();

  //Top Edge
  beginShape();
  vertex(302, 75);
  vertex(298, 100);
  vertex(310, 105);
  vertex(320, 83);
  endShape();
}

function axe(x, y, size, r, g, b) {
  noStroke();
  translate(x, y);
  scale(size);
  fill(r, g, b);

  //Handle
  beginShape();
  vertex(415, 355);
  vertex(390, 380);
  vertex(385, 380);
  vertex(385, 365);
  vertex(205, 167);
  vertex(225, 149);
  endShape();

  //Head
  beginShape();
  vertex(230, 140);
  vertex(220, 130);
  vertex(160, 179);
  vertex(170, 195);
  endShape();

  //Blade
  beginShape();
  curveVertex(160, 180);
  vertex(159, 180);
  vertex(170, 225);
  vertex(245, 245);
  vertex(195, 205);
  vertex(195, 155);
  vertex(160, 180);
  endShape();

  //Bolts
  fill(0);
  ellipse(227, 170, 10);
  ellipse(241, 185, 10);
}

//Star
function star(x, y, size, r, g, b) {
  noStroke(1);
  translate(x, y);
  scale(size);
  fill(r, g, b);
  beginShape();
  vertex(320, 40);
  vertex(335, 80);
  vertex(380, 80);
  vertex(340, 110);
  vertex(360, 150);
  vertex(320, 130);
  vertex(280, 150);
  vertex(300, 110);
  vertex(260, 80);
  vertex(305, 80);
  vertex(320, 40);
  endShape();
}
