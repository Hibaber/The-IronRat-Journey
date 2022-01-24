class Enemies {

constructor(ctx, gameWidth, playerPosY0, playerHeight) {

    this.ctx = ctx;
    // this.enemyWidth = ;
    // this.enemyHeight = this.enemyWidth * ;

    // this.enemyPosX = ;
    // this.enemyPosY = ;

    // this.enemyVelX = ;
}

draw() {
    this.ctx.fillRect(this.enemyPosX, this.enemyPosY, this.enemyWidth, this.enemyHeight);

    this.move()
}

move() {
    this.enemyPosX -= this.enemyVelX;
}

}