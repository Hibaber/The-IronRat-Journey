const game = {
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
    TOP: 38,
    RIGHT: 39,
    LEFT: 37,
    SPACE: 32,
  },

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start();
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
      this.framecounter > 5000
        ? (this.framesCounter = 0)
        : this.framesCounter++;

      this.createEnemies();
      // this.createPrizes()
      // this.createGoals()
      this.clearAll();
      this.drawAll();
      this.clearEnemies();
      this.isCollision() ? this.gameOver() : null;
    }, 1000 / this.FPS);
  },

  reset() {
    this.background = new Background(
      this.ctx,
      this.gameSizeW,
      this.gameSizeH,
      "bg.png"
    );
    this.player = new Player(
      this.ctx,
      this.gameSizeW,
      this.gameSizeH,
      this.keys
    );
    this.bullets = new Bullets(
      this.ctx,
      this.playerPosX,
      this.playerPosY,
      this.bullBasePos,
      this.playerSizeW,
      this.playerSizeH
    );
    this.enemies = [];
    // this.prizes = [];
    // this.goals = [];
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.framesCounter;
    this.enemies.forEach((element) => element.draw());
    // this.prizes.forEach(element => element.draw())
    // this.goals.forEach(element => element.draw())
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSizeW, this.gameSizeH);
  },

  createEnemies() {
    if (this.framesCounter % 90 === 0) {
      this.enemies.push(new Enemy(this.ctx, this.gameSizeW, this.gameSizeH));
    }
    // (this.ctx, this.width, this.player.posY0, this.player.height)
  },

  clearEnemies() {
    this.enemies = this.enemies.filter((enem) => enem.enemyPosX >= 0);
  },

  isCollision() {
    return this.enemies.some(enem => {
      return (
        this.player.playerPosX + this.player.playerSizeW >= enem.enemyPosX &&
        this.player.playerPosY + this.player.playerSizeH >= enem.enemyPosY &&
        this.player.playerPosX <= enem.enemyPosX + enem.enemyWidth
      )
    })
  },

  gameOver() {
    clearInterval(this.interval);
  },
};
