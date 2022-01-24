class Background {
  constructor(ctx, bckgSizeW, bckgSizeH, bckgImgSource) {
    this.ctx = ctx;
    this.gameSizeW = bckgSizeW;
    this.gameSizeH = bckgSizeH;

    this.imageInstance = new Image();
    this.imageInstance.src = `img/${bckgImgSource}`;

    this.bckgPosX = 0;
    this.bckgPosY = 0;

    this.bckgVelX = 1;
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.bckgPosX,
      this.bckgPosY,
      this.gameSizeW,
      this.gameSizeH
    );
    //this.ctx.drawImage(this.imageInstance, this.bckgPosX +this.gameSizeW, this.backgPosY,this.gameSizeW, this.gameSizeH)
    //this.move()
  }

  move() {
    if (this.bckgPosX <= -this.gameSizeW) {
      this.bckgPosX = 0;
    }
    this.bckgPosX -= this.bckgVelX;
  }
}
