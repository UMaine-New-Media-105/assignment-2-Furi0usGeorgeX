function setup() {
  createCanvas(400, 400);
let z=0;
let x=80;
let v=60;
let b=100;
  //Variables for later coordinates

  //Rows
  fill(30,30,70);
  stroke("red");
  drawRow(z);
  drawRow(x);
  drawRow(x*2);
  drawRow(x*3);
  drawRow(x*4);
  //Builds base rows using variables
}

function drawRow(y){
  let x = 40;
  //Row Offset
  rect(x-40,y,80);
  rect(x*3-40,y,80);
  rect(x*5-40,y,80);
  rect(x*7-40,y,80);
  rect(x*9-40,y,80);
  //Realigns blocks with background grid using variables
}

let z=0;
let x=80;
let v=60;
let b=100;
//Restatement of variables for new scope

function draw(){
  fill(150,0,0);
  stroke("yellow");
  
    //LetterBlocks
  rect(b+v,z,x);
  rect(x,x,x);
  rect(x*3,x,x);
  rect(z,x*2,x);
  rect(x*4,x*2,x);
  rect(x*4,x*3,x);
  rect(x*4,x*4,x);
  rect(z,x*3,x);
  rect(z,x*4,x);
  rect(x,x*3,x);
  rect(x*2,x*3,x);
  rect(x*3,x*3,x);
  //Red blocks arranged to form letter 'A' written with variables
}
