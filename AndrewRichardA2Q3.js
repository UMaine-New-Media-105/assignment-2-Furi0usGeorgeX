function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,70,0);
  
  drawSword(0,0,1.11);
  
}

function drawSword(x,y,size){
  push();
  translate(x,y);
  scale(size);
  
    //sword
  fill(200,210,220);
  beginShape();
  vertex(30,50);//tipbottomleft
  vertex(250,270);//bladebottomleft
  vertex(310,210);//rightcrossguardtop
  vertex(310,230);//rightcrossguardbottom
  vertex(285,270);//hiltright
  vertex(360,340);//hiltbottom
  vertex(350,350);//hiltleft
  vertex(275,280);//hilttopleft
  vertex(230,310);//leftcrossguardbottom
  vertex(210,310);//leftcrossguardtop
  vertex(270,250);//bladebottomrigh
  vertex(50,30);//tipbottomright
  vertex(0,0);//tip
  endShape(CLOSE);
  pop();
}
