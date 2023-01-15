import spriteSource from "/tileset.png";

export function drawCanvas(canvas) {
  // canvas setup

  const tileSize = 64;
  const tilesCount = 9;
  const uiWidth = 4;

  const ctx = canvas.getContext("2d");
  ctx.fillRect(0, 0, tileSize, tileSize);

  canvas.width = tileSize * (tilesCount + uiWidth);
  canvas.height = tileSize * tilesCount;
  canvas.style.width = `${canvas.width}px`;
  canvas.style.height = `${canvas.height}px`;

  ctx.imageSmoothingEnabled = false;
  console.log(ctx);

  // sprite setup

  let position = {
    x: 0,
    y: 0,
  };

  const spritesheet = new Image();
  spritesheet.src = spriteSource;

  document.querySelector("html").onkeyup = (event) => {
    switch (event.key) {
      case "z":
        position.y--;
        break;
      case "s":
        position.y++;
        break;
      case "q":
        position.x--;
        break;
      case "d":
        position.x++;
        break;
    }
  };

  const drawSprite = (sprite, x, y) => {
    ctx.drawImage(
      spritesheet,
      sprite * 16 + 1 * sprite,
      17,
      16,
      16,
      position.x * tileSize,
      position.y * tileSize,
      tileSize,
      tileSize
    );
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "gold";
    drawSprite(31, position.x, position.y);
  };

  setInterval(draw, 15);
}
