var spaceCraft,bg,scImg,iss,issImg;
var hasDocked=false
function preload(){
  bg=loadImage("spacebg.jpg")
  scImg=loadImage("spacecraft1.png")
  scImg2=loadImage("spacecraft2.png")
  
  scImg3=loadImage("spacecraft3.png")
  scImg4=loadImage("spacecraft4.png")

  issImg=loadImage("iss.png")
}
function setup() {
  createCanvas(1000,500);
  spaceCraft=createSprite(400, 400, 50, 50);
  spaceCraft.addImage(scImg)
  spaceCraft.scale=0.2

  iss=createSprite(460,250,50,50)
  iss.addImage(issImg)
}

function draw() {
  background(bg);  
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1)
  
  if(keyDown(UP_ARROW)){
    spaceCraft.y=spaceCraft.y-2
    spaceCraft.addImage(scImg2)
  }
  if(keyDown(DOWN_ARROW)){
    spaceCraft.y=spaceCraft.y+2
    spaceCraft.addImage(scImg)
  }
  if(keyDown(LEFT_ARROW)){
    spaceCraft.x=spaceCraft.x-2
    spaceCraft.addImage(scImg3)
  }
  if(keyDown(RIGHT_ARROW)){
    spaceCraft.x=spaceCraft.x+2
    spaceCraft.addImage(scImg4)
  }
}
  if(spaceCraft.y<=(iss.y+100) && spaceCraft.x<=(iss.x-10)){
    hasDocked=true
    textSize(20)
    fill(random(0,255))
    text("DOCKING SCOTT KELLY SUCCESSFUL!" ,200,450)
  }
  drawSprites();
  
}