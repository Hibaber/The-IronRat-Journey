class Goal {
    constructor(ctx, gameSizeW, gameSizeH, i) {
        this.ctx = ctx;
        this.goalWidth = 80;
        this.goalHeight = 80;
        this.goalPosX = gameSizeW;
        this.gameSizeH = gameSizeH;
        this.goalPosY = this.randomGoal();
        this.goalVelX = 15;
        // this.goalVelY = 2;
        this.imageInstance = new Image();
        this.imagesGoalsArr = ["./img/goal1.png", "./img/goal2.png", "./img/goal3.png", "./img/goal4.png", "./img/goal5.png", "./img/goal6.png", "./img/goal7.png", "./img/goal8.png" ]
        this.imageInstance.src = this.imagesGoalsArr[i]
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.goalPosX,
            this.goalPosY,
            this.goalWidth,
            this.goalHeight,
        )
        this.move()
    }

    move() {
        this.goalPosX -= this.goalVelX;
    }

    randomGoal() {
        let random = Math.floor(Math.random() * (this.gameSizeH - this.goalHeight));
        return random
    }

}

//Hacer efecto collision para que desaparezcan una vez el player los ha tocado y sumar
