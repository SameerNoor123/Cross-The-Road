var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0eda9e8a-ff6f-46ae-b703-18ab8cedc7d1","51532bad-4662-4fdb-8cc3-f65b3b34fac5","b5a70613-358f-4d7a-b987-6a9e17216e74","43a2e65a-0b3e-4419-8c0d-4e635b11120b","30e0f58c-5392-4e00-a9ea-4ed5ef1a6982","9b911175-50de-4fc2-99d6-88733fa499b5","7c3260b6-3866-4e02-818c-d3809a987b05","a525a102-1871-44a1-bfef-a284679f996c"],"propsByKey":{"0eda9e8a-ff6f-46ae-b703-18ab8cedc7d1":{"name":"cars_1","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"m2bokdN86bIAm1XKeyGAIbnYyYBdD5CK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/0eda9e8a-ff6f-46ae-b703-18ab8cedc7d1.png"},"51532bad-4662-4fdb-8cc3-f65b3b34fac5":{"name":"cars_2","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"9EUm7aiZc1DjxIABhI.sgxOEHT1JNkcj","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/51532bad-4662-4fdb-8cc3-f65b3b34fac5.png"},"b5a70613-358f-4d7a-b987-6a9e17216e74":{"name":"cars_3","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"uExwY440Uk.OAV7ALmwTJOQV5TGzCOJc","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/b5a70613-358f-4d7a-b987-6a9e17216e74.png"},"43a2e65a-0b3e-4419-8c0d-4e635b11120b":{"name":"cars_4","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"E8uTQaI4bBz8M.QCDpowekCOmZKJtxWV","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/43a2e65a-0b3e-4419-8c0d-4e635b11120b.png"},"30e0f58c-5392-4e00-a9ea-4ed5ef1a6982":{"name":"kid_2_right_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uSJdQfp8x0OY5M_pxoEikjk4ieh87rZf/category_people/kid_2_right.png","frameSize":{"x":248,"y":403},"frameCount":1,"looping":true,"frameDelay":2,"version":"uSJdQfp8x0OY5M_pxoEikjk4ieh87rZf","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":403},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uSJdQfp8x0OY5M_pxoEikjk4ieh87rZf/category_people/kid_2_right.png"},"9b911175-50de-4fc2-99d6-88733fa499b5":{"name":"kid_2_walking_1","sourceUrl":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png","frameSize":{"x":252,"y":422},"frameCount":1,"looping":true,"frameDelay":2,"version":"siSqHEMKUKFQKPPHR8lGKlEhG26prtCC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":422},"rootRelativePath":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png"},"7c3260b6-3866-4e02-818c-d3809a987b05":{"name":"beachhouse_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bMk.8YsI7Ef00LG8_bFS9qlec8cMUErC/category_buildings/beachhouse_01.png","frameSize":{"x":336,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bMk.8YsI7Ef00LG8_bFS9qlec8cMUErC","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bMk.8YsI7Ef00LG8_bFS9qlec8cMUErC/category_buildings/beachhouse_01.png"},"a525a102-1871-44a1-bfef-a284679f996c":{"name":"building_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4kklScNWVeyRw.VwQ0AR1O8r77lNPuQ3/category_buildings/building_04.png","frameSize":{"x":400,"y":263},"frameCount":1,"looping":true,"frameDelay":2,"version":"4kklScNWVeyRw.VwQ0AR1O8r77lNPuQ3","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":263},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4kklScNWVeyRw.VwQ0AR1O8r77lNPuQ3/category_buildings/building_04.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Deaths = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var gameState ="serve";
var house = createSprite(30,190,52,140);
house.setAnimation("beachhouse_01_1");
house.scale=0.3;

var mall = createSprite(345,190,52,140);
mall.setAnimation("building_04_1");
mall.scale=0.3;





  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
playSound("assets/childhood.mp3",true);


//add the velocity to make the car move.

function draw() {
   background("white");
 
  text("Deaths : "+Deaths,200,105);
 
  if (gameState == "serve") {
   text("Press Space To Start",100,200);
   
 if (keyDown("space")) {
   

   
      car1.velocityY= 4;
 
 car2.velocityY= 4; 
 
  car3.velocityY= -4;
 
  car4.velocityY= -4;
   
   

    gameState = "play"; 
   }
     
  }
  
  if (gameState == "play") {
   
  
   
  if (sam.isTouching(car1)) {
   playSound("assets/category_explosion/vibrant_smack_game_object_2.mp3");
   }

      
  if (sam.isTouching(car2)) {
   playSound("assets/category_explosion/vibrant_smack_game_object_2.mp3");
   }
   
    
  if (sam.isTouching(car3)) {
   playSound("assets/category_explosion/vibrant_smack_game_object_2.mp3");
   }
   
    
  if (sam.isTouching(car4)) {
   playSound("assets/category_explosion/vibrant_smack_game_object_2.mp3");
   }




   
   
   // create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
if (keyDown(RIGHT_ARROW)) {
  
 sam.x=sam.x +3;


}

if (keyDown(LEFT_ARROW)) {
 sam.x=sam.x -3;
 sam.setAnimation("kid_2_walking_1");
}
//Add the condition to reduce the life of sam if it touches the car.
if (sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)) {
sam.x=20;
sam.y=190; 

Deaths=Deaths +1;
   
 if (Deaths===5||sam.isTouching(mall)) {
gameState = "end";
}  
    
  }
  
if (gameState == "end") {
 text("GAME OVER!!!",100,200);
 textSize(30);
}



}





  


textSize(30);
car1.setAnimation("cars_1");              
car1.scale=0.25;

car2.setAnimation("cars_2");
car2.scale=0.25;

car3.setAnimation("cars_3");
car3.scale=0.25;

car4.setAnimation("cars_4");
car4.scale=0.25;

sam.setAnimation("kid_2_right_1");
sam.scale=0.05; 
    
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
