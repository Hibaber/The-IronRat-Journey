class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;
    this.gameSizeW = gameW;
    this.gameSizeH = gameH;

    this.playerSizeW = 100;
    this.playerSizeH = 100;
    //this.playerImage.frames = 3
    //this.playerImage.framesIndex = 0
    this.imageInstance = new Image();
    this.imageInstance.src = "./img/player.png";

    this.playerPosX = 50;
    this.playerPosY = this.gameSizeH -this.playerSizeH - 20;

    this.playerBasePos = this.playerPosY;

    this.playerVelY = 1;
    this.playerGravity = 0.5;

    this.keys = keys;

    this.bullets = [];

    this.setEventListeners();

  }

  draw() {
    //framesCounter
    this.ctx.drawImage(
      this.imageInstance,
      this.playerPosX,
      this.playerPosY,
      this.playerSizeW,
      this.playerSizeH
    )
    this.move()

  }

  // SALTAR
  move() {
    if (this.playerPosY < this.playerBasePos) {
        this.playerPosY += this.playerVelY;
        this.playerVelY += this.playerGravity;
    } else {
      this.playerPosY = this.playerBasePos;
      this.playerVelY = 1;
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.ArrowUp:
          if (this.playerPosY >= this.playerBasePos) {
            this.jump();
          }
          break;
        case this.keys.SPACE:
          this.shoot();
          break;
      }
    });
    console.log(this.keys.TOP);
  }

  jump() {
    this.playerPosY -= 40;
    this.playerVelY -= 8;
  }

    shoot() {
    this.bullets.push(new Bullets(this.ctx, this.playerPosX, this.playerPosY, this.playerBasePos, this.playerSizeW, this.playerSizeH));
  }

  clearBullets() {
    this.bullets = this.bullets.filter(bull => bull.playerPosX <= this.gameSizeW)
  }
}