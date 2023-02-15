function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0,70,0);
  
  //sword
  fill(200,210,220);
  beginShape();
  vertex(40,60);//tipbottomleft
  vertex(260,280);//bladebottomleft
  vertex(320,220);//rightcrossguardtop
  vertex(320,240);//rightcrossguardbottom
  vertex(295,280);//hiltright
  vertex(370,350);//hiltbottom
  vertex(360,360);//hiltleft
  vertex(285,290);//hilttopleft
  vertex(240,320);//leftcrossguardbottom
  vertex(220,320);//leftcrossguardtop
  vertex(280,260);//bladebottomrigh
  vertex(60,40);//tipbottomright
  vertex(10,10);//tip
  endShape(CLOSE);
  }
