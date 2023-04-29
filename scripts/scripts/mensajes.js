const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');

(async function(){
    Diagnostics.log("Hola mundo");
    Diagnostics.warn("Cuidado");
    Diagnostics.error("Error");

    const plane = await Scene.root.findFirst("plane0")

    Diagnostics.log(plane.name);
    plane.transform.x = -0.05;
    plane.transform.rotationX = 45;
    plane.transform.scaleX = 2;

    const face = await FaceTracking.face(0);
    const star = await Scene.root.findFirst("Star");
    
    star.transform.rotation = face.cameraTransform.rotation;
    const mouthOpend = face.mouth.openness.toRange(1, 5); 
    //star.transform.scale = Reactive.point(mouthOpend, mouthOpend,mouthOpend);



})();



