class Enemy {
  constructor(ctx, gameSizeW, gameSizeH) {
    this.ctx = ctx;
    this.enemyWidth = 10;
    this.enemyHeight = this.enemyWidth * 5;
    this.enemyPosX = gameSizeW;
    this.gameSizeH = gameSizeH;
    this.enemyPosY = 630; // randomEnemy()
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
  //para crear enemigos que salgan de manera random
  //   randomEnemy() {
  //     this.enemies.Math.floor(
  //       Math.random() * 50,
  //       this.gameSizeH - this.enemyHeight
  //     );
  //   }
}
// generate random para enemigos (min 0 max alto de pantalla - alt del enemigo)
// cuando se crea el enemigo, la pos Y = función random
