$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
  //   createPlatform(1000, 300, 210, 20);
  //   createPlatform(1200, 420, 200, 10, "red");
  
    
   
  
  //   createPlatform(1000, 0, 20, 300);
  //   createPlatform(820,480, 70, 10 );
  //   createPlatform(1000, 0, 500, 10);
  //   createPlatform(1150, 175, 10, 10);
  //   createPlatform(1330, 135, 10, 90);
  //   createPlatform(1300, 220, 100, 10);
    
  //   createPlatform(400, 400, 100, 10);
  //   createPlatform(500, 200, 10, 70);
  //   createPlatform(400,200,10,100,);
  //  createPlatform(400,300,10,100);
  // createPlatform(400,400,120, 10);
  //  createPlatform(400,100,10,100);
  //   createPlatform(500, 100, 10,170);
  //   createPlatform(500,0,10,170);
  //   createPlatform(300,100,100,10);
  //   createPlatform(400,300,30,5);
  //   createPlatform(480, 200, 30,5);
  //   createPlatform(300,100,10, 310);
  //   createPlatform(200, 400, 100,10);
  //   createPlatform(200, 0, 10, 400);
  //   createPlatform(200, 0, 300,10);
  //   createPlatform(280, 200, 20, 5);
  //   createPlatform(200,300, 30, 5);
//12/1/25 New platformer classwork
createPlatform(200, 640, 20, 100, "transparent");
createPlatform(300, 680, 100, 20, "orange");
createPlatform(200, 450, 20, 100, "transparent");
createPlatform(415, 610, 100, 20, "orange");
createPlatform(600, 400, 10, 120, 'transparent');
createPlatform(590, 480, 10, 5, "transparent");
createPlatform(1000, 300, 210, 20);
createPlatform(1200, 420, 200, 10, "orange");
createPlatform(1000, 0, 20, 300,);
createPlatform(820,480, 70, 10 );
createPlatform(1000, 0, 500, 10,);
createPlatform(1150, 175, 10, 10, );
createPlatform(1330, 135, 10, 90);
createPlatform(1300, 220, 100, 10);
createPlatform(400, 400, 100, 10);
createPlatform(500, 200, 10, 70);
createPlatform(400,200,10,100,);
createPlatform(400,300,10,100);
createPlatform(400,400,120, 10);
createPlatform(400,100,10,100);
createPlatform(500, 100, 10,170);
createPlatform(500,0,10,170);
createPlatform(300,100,100,10);
createPlatform(400,300,30,5);
createPlatform(480, 200, 30,5);
createPlatform(300,100,10, 310);
createPlatform(200, 400, 100,10);
createPlatform(200, 0, 10, 400);
createPlatform(200, 0, 300,10);
createPlatform(280, 200, 20, 5);
createPlatform(200,300, 30, 5);
createPlatform(1000, 500, 200, 14, 'orange')



    // TODO 3 - Create Collectables
   createCollectable("grace", 570, 470, 1.5, 1.0);
   createCollectable("diamond", 1340, 100, 1.5, 1.0);
   createCollectable("max", 330, 50, 1.5, 1.0);
   createCollectable("steve", 230, 300, 1.5, 1.0);


    // TODO 4 - Create Cannons
      createCannon("bottom", 1300, 1490);
      createCannon("bottom", 530, 1600);
      createCannon("bottom", 390, 3600);
      createCannon("bottom", 200, 2900, );    



    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
