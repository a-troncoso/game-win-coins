document.addEventListener("keydown", function(ev) {
  switch (ev.keyCode) {
    case 37:
      // left arrow <-
      if (visualElements.mario.position.x > MIN_X_POS) {
        visualElements.mario.position.x -= 29; 
      }
      break;
    case 38:
      // Up arrow ^
      if (visualElements.mario.position.y > MIN_Y_POS) {
        visualElements.mario.position.y -= 14.5; 
      }
      break;
    case 39:
      // right arrow ->
      if (visualElements.mario.position.x < MAX_X_POS) {
        visualElements.mario.position.x += 29; 
      }
      break;
    case 40:
      // Down arrow
      if (visualElements.mario.position.y < MAX_Y_POS) {
        visualElements.mario.position.y += 14.5; 
      }
      break;
    default:
      break;
  }
});