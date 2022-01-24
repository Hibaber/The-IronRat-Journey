class Bullets {

  constructor(ctx, playerPosX, playerPosY, playerBasePos, playerSizeW, playerSizeH) {
    this.ctx = ctx;
    this.playerPosX = playerPosX + playerSizeW;
    this.playerPosY = playerPosY + playerSizeH / 2;

    this.playerBasePos = playerBasePos;
    this.playerSizeH = playerSizeH;

    this.bullVelX = 10;
    this.bullVelY = 1;

    this.gravity = 1;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.moveTo(this.playerPosX, this.playerPosY);
    this.ctx.lineTo(this.playerPosY, playerPosY + 100)
    this.ctx.stroke()
    this.ctx.closePath();
    this.move();
  }

  move() {
    this.playerPosX += this.bullVelX;
    this.playerPosY += this.bullVelY;

    this.bullVelY += this.gravity;

    if (this.playerPosY >= this.playerBasePos + this.playerSizeH) {
      this.bullVelY *= -1;
    }
  }
}