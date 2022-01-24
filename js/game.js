const Game = {
    appName: "The IronRat Journey app",
    author: "Ernesto Espinoza & Hiba Berber",
    version: "1.0.0",
    license: undefined,
    gameSizeW: undefined,
    gameSizeH: undefined,
    ctx: undefined,
    canvas: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    enemies: [], // crear un array por cada tipo de enemigo o un único array?
    goals: [], // idem
    prizes: [], // idem
    keys: {
    TOP: ArrowUp,
    SPACE: 32
    },

init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start();
    this.all();
    },

setDimensions() {
    this.gameSizeW = window.innerWidth;
    this.gameSizeH = window.innerHeight;
    this.canvas.setAttribute("width", this.gameSizeW);
    this.canvas.setAttribute("height", this.gameSizeH);
    },

start() {
    this.reset();

    this.interval = setInterval(() => {
    this.framecounter > 5000 ? (this.framesCounter = 0) : this.framesCounter++;

      // this.createEnemies()

      // this.createPrizes()

      // this.createGoals()

      // this.clearEnemies()

      // this.isColission() ? this.gameOver() : null

        this.clearAll();

        this.drawAll();
    }, 1000 / this.FPS);
    },

reset() {
    this.enemies = [],
    this.prizes = [],
    this.goals = [];
    },

all() {
    this.background = new Background(this.ctx, this.gameSizeW, this.gameSizeH, "img/bg.png");
    this.player = new Player(this.ctx, this.gameSizeW, this.gameSizeH, this.keys);
    this.bullets = new Bullets(ctx, playerPosX, playerPosY, playerBasePos, playerSizeW, playerSizeH)
    },

drawAll() {
    //this.background.draw();
    this.player.draw()
    // this.framesCounter)
    // this.enemies.forEach(element => element.draw())
    // this.prizes.forEach(element => element.draw())
    // this.goals.forEach(element => element.draw())

},

clearAll() {
    this.ctx.clearRect(0, 0, this.gameSizeW, this.gameSizeH);
    },

createEnemies() {
    // if (this.framesCounter % 90 === 0){
    //     this.enemies.push(new Enemies(this.ctx, this.gameSize.w, this...))
    // }
    },

  // clearEnemies

  // isColission (tenemos dos colisiones)

  // gameOver
};


// por qué sacar las instancias del background y de player del reset y meterlos en all y después dentro de init
// por qué no se nos salta el triángulo? tenemos que llamar a jump en algun sitio?