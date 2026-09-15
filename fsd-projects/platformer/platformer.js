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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - toggleGrid()


    
    // TODO 2 - Create Platforms
createPlatform(200, 700, 450, 50, "cyan")
createPlatform(325, 600, 125, 50, "cyan")
createPlatform(500, 500, 210, 75, "cyan")
createPlatform(800, 100, 50, 400, "cyan")
createPlatform(1000, 400, 200, 50, "cyan")
createPlatform(1200, 650, 450, 50, "cyan")
createPlatform(900, 575, 200, 50, "cyan")
createPlatform(850, 450, 50, 50, "cyan")
    // TODO 3 - Create Collectables
createCollectable("database", 1200, 300, 0, 0)
createCollectable("steve", 600, 400, 0, 0)
createCollectable("steve", 300, 505, 0, 0)
createCollectable("steve", 900, 300, 0, 0)
    
    // TODO 4 - Create Cannons
createCannon("left", 350, 1250)
createCannon("bottom", 750, 1500)
createCannon("top", 1100, 1000)
createCannon("top", 500, 1500)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
