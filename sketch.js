//Create variables here
var dog, dodImg, happyDogImg, database, foodS, foodstocks;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/happyDogImg.png");

}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  foodStock = database.ref("Food")
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250, 350,10,60)
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  
  background("pink")
  if(foodS!== undefined){
  textSize(20)
  fill(255)
  text("Note:press UP ARROW KEY to feed your dog :D",50, 50)
  text("food remaining:"+foodS, 150,150)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg)
  
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg)
  }
  if(foodS === 0){
    foodS = 20
  }
  

  drawSprites();
  //add styles here

}
}


