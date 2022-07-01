var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00e46d60-0468-4c14-80ff-ef7cec4baec2","41fb2270-4145-4ce8-bba4-76626683adec","d9adb0af-672d-4cb1-91d4-c2a258a4b4a5","ca758cbe-d5ac-49eb-922f-e965a725b9db","548785ac-f8db-46ba-b891-1bf162fa3109","abd59bbd-c70f-4dec-abf3-37bf0edfaf36","9d793fdb-a1fd-4d96-b56a-8e761b4ccb51","858248b2-adc9-4f6d-84f5-dc07eb2974ca"],"propsByKey":{"00e46d60-0468-4c14-80ff-ef7cec4baec2":{"name":"carrot","sourceUrl":null,"frameSize":{"x":17,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"yMaNam4MUhSXgiTyXsyVIEfnqFigRwho","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":43},"rootRelativePath":"assets/00e46d60-0468-4c14-80ff-ef7cec4baec2.png"},"41fb2270-4145-4ce8-bba4-76626683adec":{"name":"brinjal","sourceUrl":null,"frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"SmygZ2uZcZ.OedmN571y4OFnZBLITRet","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/41fb2270-4145-4ce8-bba4-76626683adec.png"},"d9adb0af-672d-4cb1-91d4-c2a258a4b4a5":{"name":"capcisum","sourceUrl":null,"frameSize":{"x":27,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"Pv_0te.pluG0FFJ3mSoiRl2FZsC15CWh","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":43},"rootRelativePath":"assets/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png"},"ca758cbe-d5ac-49eb-922f-e965a725b9db":{"name":"orange","sourceUrl":null,"frameSize":{"x":35,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"wzxzJaDRUyk0hItq9cn0_kzVQx5awjVv","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":43},"rootRelativePath":"assets/ca758cbe-d5ac-49eb-922f-e965a725b9db.png"},"548785ac-f8db-46ba-b891-1bf162fa3109":{"name":"tomato","sourceUrl":null,"frameSize":{"x":39,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"hra8mAG8sjI3N7qaLo2.pvU3rmaP0YoH","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":43},"rootRelativePath":"assets/548785ac-f8db-46ba-b891-1bf162fa3109.png"},"abd59bbd-c70f-4dec-abf3-37bf0edfaf36":{"name":"onion","sourceUrl":null,"frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"AbA6OmQC.eFvJaNdfJ5oXrx4xag1oOzp","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png"},"9d793fdb-a1fd-4d96-b56a-8e761b4ccb51":{"name":"amethysto_right","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"O5tr8gIarYUkl4mTBtJD6CAt090Rmvmk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9d793fdb-a1fd-4d96-b56a-8e761b4ccb51.png"},"858248b2-adc9-4f6d-84f5-dc07eb2974ca":{"name":"amethysto_left","sourceUrl":null,"frameSize":{"x":44,"y":58},"frameCount":1,"looping":true,"frameDelay":12,"version":"SsgBjrqDfSQCQjFEoeqAhWHamw1XbLA0","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":58},"rootRelativePath":"assets/858248b2-adc9-4f6d-84f5-dc07eb2974ca.png"}}};
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

  
  var Amethysto = createSprite(200, 375, 20, 20)
  Amethysto.setAnimation("amethysto_right")
  
for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin = createSprite(i, 50, 20, 20);
  pumpkin.setAnimation("capcisum")
  pumpkin.shapeColor = "orange"
}

for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin1 = createSprite(i, 100, 20, 20);
  pumpkin1.setAnimation("carrot")
  pumpkin1.shapeColor = "orange"
}

for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin2 = createSprite(i, 150, 20, 20);
  pumpkin2.setAnimation("orange")
  pumpkin2.shapeColor = "orange"
}

for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin3 = createSprite(i, 200, 20, 20);
  pumpkin3.setAnimation("tomato")
  pumpkin3.shapeColor = "orange"
}

for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin4 = createSprite(i, 250, 20, 20);
  pumpkin4.setAnimation("onion")
  pumpkin4.shapeColor = "orange"
}

for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin5 = createSprite(i, 300, 20, 20);
  pumpkin5.setAnimation("brinjal")
  pumpkin5.shapeColor = "orange"
}

playSound("assets/WhatsApp-Audio-2022-06-08-at-17.43.16.mp3", true);

  createEdgeSprites();

function draw() {
background("#4B371C");
  drawSprites();
  Amethysto.collide(edges);
  
    if (keyDown("up")) {
    Amethysto.y=Amethysto.y-3.5;
  }
  
  if (keyDown("down")) {
    Amethysto.y=Amethysto.y+3.5;
  }
  
    if (keyDown("left")) {
    Amethysto.x=Amethysto.x-3.5;
    Amethysto.setAnimation("amethysto_left")
  }
  
  if (keyDown("right")) {
    Amethysto.x=Amethysto.x+3.5;
    Amethysto.setAnimation("amethysto_right")
  }
  
      if (keyDown("w")) {
    Amethysto.y=Amethysto.y-3.5;
  }
  
  if (keyDown("s")) {
    Amethysto.y=Amethysto.y+3.5;
  }
  
    if (keyDown("a")) {
    Amethysto.x=Amethysto.x-3.5;
    Amethysto.setAnimation("amethysto_left")
  }
  
  if (keyDown("d")) {
    Amethysto.x=Amethysto.x+3.5;
    Amethysto.setAnimation("amethysto_right")
  }
  
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
