class Bullets {

  constructor(ctx, playerPosX, playerPosY, playerBasePos, playerSizeW, playerSizeH) {
    this.ctx = ctx;
    this.playerPosX = playerPosX + playerSizeW;
    this.playerPosY = playerPosY + playerSizeH / 2;

    this.playerBasePos = playerBasePos;
    this.playerSizeH = playerSizeH;

    this.bullVelX = 30; // añadir más velocidad 
    this.bullVelY = 1;

    this.gravity = 1;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.playerPosX, this.playerPosY);
    this.ctx.lineTo(this.playerPosX+50, this.playerPosY)
    this.ctx.stroke()
    this.ctx.closePath();
    this.ctx.lineWidth= 7;
    this.ctx.strokeStyle = "red";
    //this.ctx.fill()
    this.move();
  }


  move() {
    this.playerPosX += this.bullVelX;
    // this.playerPosY += this.bullVelY;

    // this.bullVelY += this.gravity;

    // if (this.playerPosY >= this.playerBasePos + this.playerSizeH) {
    //   this.bullVelY *= -1;
    //}
  }
}