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
  score: undefined,
  enemies: [], // crear un array por cada tipo de enemigo o un único array?
  goals: [], // idem
  prizes: [], // idem
  keys: {
    UP: 38,
    DOWN: 40,
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
      this.isCollisionPlayer() ? this.gameOver() : null;
      this.isCollisionEnemies() ? this.killEnemy() : null;
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
      this.playerSizeW,
      this.playerSizeH
    );
    // this.enemies = [];
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
  },

  clearEnemies() {
    this.enemies = this.enemies.filter((enem) => enem.enemyPosX >= 0);
  },

  isCollisionPlayer() {

    return this.enemies.some(enem => {
      return (this.player.playerPosX < enem.enemyPosX + enem.enemyWidth &&
        this.player.playerPosX + this.player.playerSizeW > enem.enemyPosX &&
        this.player.playerPosY < enem.enemyPosY + enem.enemyHeight &&
        this.player.playerPosY + this.player.playerSizeH > enem.enemyPosY)
    })
  },

  isCollisionEnemies() {

    return this.enemies.some(enem => {
      return (this.bullets.bullPosX < enem.enemyPosX + enem.enemyWidth &&
        this.bullets.bullPosX + this.bullets.bullW > enem.enemyPosX &&
        this.bullets.bullPosY < enem.enemyPosY + enem.enemyHeight &&
        this.bullets.bullPosY + this.bullets.bullH > enem.enemyPosY)
      // console.log(this.bullets.bullPosX)
    })
  },


  killEnemy() {
    this.enemies.forEach(elm => {
      if (isCollisionEnemies) {
        return enemies.splice(elm, 1)
      }


    })
  },
  gameOver() {
    clearInterval(this.interval)
    this.ctx.fillStyle = 'rgba(255, 0, 0, 0.4)'
    this.ctx.fillRect(0, 0, this.gameSizeW, this.gameSizeH)
    this.ctx.font = 'bold 60px comic sans'
    this.ctx.fillStyle = 'black'
    this.ctx.fillText('GAME OVER! : (TRY AGAIN!', 300, 440)
    this.ctx.font = 'bold 40px comic sans'
    this.ctx.fillStyle = 'black'
    this.ctx.fillText(`YOUR FINAL SCORE IS: ${this.score}`, 350, 550)
  },
};

