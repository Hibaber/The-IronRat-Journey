class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;
    this.gameSizeW = gameW;
    this.gameSizeH = gameH;

    this.playerSizeW = 100;
    this.playerSizeH = 100;
    //this.playerImage.frames = 3
    //this.playerImage.framesIndex = 0
    // this.imageInstance = new Image();
    // this.imageInstance.src = "./img/player.png";

    this.playerPosX = 50;
    this.playerPosY = this.gameSizeH / 2;

    this.playerBasePos = this.gameSizeH / 2;

    this.playerVelY = 1;
    this.playerVelX = 1;
    // this.playerGravity = 0;

    this.keys = keys;

    this.bullets = [];
    this.movements = [];

    this.setEventListeners();

  }

  draw(framesCounter) {
    this.ctx.fillRect(this.playerPosX, this.playerPosY, 100, 100)
    //framesCounter
    // this.ctx.drawImage(
    //   this.imageInstance,
    //   this.playerPosX,
    //   this.playerPosY,
    //   this.playerSizeW,
    //   this.playerSizeH
    // );
    // animate(framesCounter)
    if (this.movements.includes('UP') && this.playerPosY > 0) { this.moveUp() }
    if (this.movements.includes('DOWN') && this.playerPosY < this.gameSizeH - 100) { this.moveDown() }
    if (this.movements.includes('RIGHT') && this.playerPosX < this.gameSizeW - 150) { this.moveRight() }
    if (this.movements.includes('LEFT') && this.playerPosX > 10) { this.moveLeft() }
    this.bullets.forEach((bullet) => bullet.draw());
    this.clearBullets();
  }


  // KEYDOWN
  setEventListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.UP:
          !this.movements.includes("UP") ? this.movements.push("UP") : null
          break;
        case this.keys.DOWN:
          !this.movements.includes("DOWN") ? this.movements.push("DOWN") : null

          break;
        case this.keys.RIGHT:
          !this.movements.includes("RIGHT") ? this.movements.push("RIGHT") : null

          break;
        case this.keys.LEFT:
          !this.movements.includes("LEFT") ? this.movements.push("LEFT") : null

          break;
        case this.keys.SPACE:
          this.shoot()
          break;
      }
    });

    // KEYUP
    document.addEventListener("keyup", (e) => {
      switch (e.keyCode) {
        case this.keys.RIGHT:
          this.movements = [];
          break;
        case this.keys.LEFT:
          this.movements = [];
          break;
        case this.keys.UP:
          this.movements = [];
          break;
        case this.keys.DOWN:
          this.movements = [];
          break;
      }
    });
  }

  moveUp() {
    this.playerPosY -= 10;
  }

  moveDown() {
    this.playerPosY += 10;
  }

  moveRight() {
    this.playerPosX += 10;
  }
  moveLeft() {
    this.playerPosX -= 10;
  }

  shoot() {
    this.bullets.push(
      new Bullets(
        this.ctx,
        this.playerPosX,
        this.playerPosY,
        this.playerSizeW,
        this.playerSizeH
      )
    );
  }

  clearBullets() {
    this.bullets = this.bullets.filter(
      (bull) => bull.bullPosX <= this.gameSizeW
    );
  }
}
