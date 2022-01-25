class Bullets {
  constructor(ctx, playerPosX, playerPosY, playerSizeW, playerSizeH) {
    this.ctx = ctx;
    this.bullPosX = playerPosX + playerSizeW;
    this.bullPosY = playerPosY + playerSizeH / 2;
    this.bullW = this.bullPosX + 50
    this.bullH = this.lineWidth

    this.bullVelX = 30;

  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.bullPosX, this.bullPosY);
    this.ctx.lineTo(this.bullPosX + 50, this.bullPosY);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = "red";
    this.move();
  }

  move() {
    this.bullPosX += this.bullVelX;

  }
}
