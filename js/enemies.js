class Enemy {
  constructor(ctx, gameSizeW, gameSizeH) {
    this.ctx = ctx;
    this.enemyWidth = 100;
    this.enemyHeight = 100;
    this.enemyPosX = gameSizeW;
    this.gameSizeH = gameSizeH;
    this.enemyPosY = this.randomEnemy();
    this.enemyVelX = 10;
    // this.enemyVelY = 2;
    this.imageInstance = new Image();
    this.imageInstance.src = "./img/enemy1.png"
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.enemyPosX,
      this.enemyPosY,
      this.enemyWidth,
      this.enemyHeight
    )
    this.move()
  }

  move() {
    this.enemyPosX -= this.enemyVelX;
  }

  randomEnemy() {
    let random = Math.floor(Math.random() * (this.gameSizeH - this.enemyHeight));
    return random
  }



}
// generate random para enemigos (min 0, max alto de pantalla - alt del enemigo)
// cuando se crea el enemigo, la pos Y = función random

