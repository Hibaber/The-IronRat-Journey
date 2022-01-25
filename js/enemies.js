class Enemy {
  constructor(ctx, gameSizeW, gameSizeH) {
    this.ctx = ctx;
    this.enemyWidth = 50;
    this.enemyHeight = 50;
    this.enemyPosX = gameSizeW;
    this.gameSizeH = gameSizeH;
    this.enemyPosY = this.randomEnemy(); // randomPosY
    this.enemyVelX = 10;
    this.enemyVelY = 2;
  }

  draw() {
    this.ctx.fillRect(
      this.enemyPosX,
      this.enemyPosY,
      this.enemyWidth,
      this.enemyHeight
    );
    this.move();
  }

  move() {
    this.enemyPosX -= this.enemyVelX;
  }

  randomEnemy() {
    let random = Math.floor(Math.random() * (this.gameSizeH - this.enemyHeight)); // no se pone el min porque es 0
    return random
  }

}
// generate random para enemigos (min 0, max alto de pantalla - alt del enemigo)
// cuando se crea el enemigo, la pos Y = función random

