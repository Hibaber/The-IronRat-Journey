const game = {
appName: 'The IronRat Journey app',
    author: 'Ernesto Espinoza & Hiba Berber',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    canvas: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    enemies: [], // crear un array por cada tipo de enemigo o un único array?
    goals: [], // idem
    prizes:[], // idem
    keys: {
        // TOP: , // añadir número
        // SPACE: , // añadir número
    },


    init() {
        this.canvas = document.getElementById('canvas')
        this.ctx =  this.canvas.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
 
    setDimensions(){
        this.gameSize.w = window.innerWidth,
        this.gameSize.h = window.innerHeight
        this.canvas.setAttribute('width', this.gameSize.w)
        this.canvas.setAttribute('width', this.gameSize.h)
    },

    setEventListeners() {
        document.addEventListener('keydown', e => {
            // switch (e.key) {
            //     case this.keys.TOP:
            //         ...
            // }
        })
    },

    start() {

        this.reset()
        // this.interval = setInterval(()=>{

        //     this.framecounter > 5000 ? this.framesCounter = 0: this.framesCounter++

        //     // this.createEnemies()

        //     // this.createPrizes()

        //     // this.createGoals()

        //     // this.clearEnemies()

        //     // this.isColission() ? this.gameOver() : null

        //     this.clearAll()
        //     this.drawAll()
        // }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, this.gameSize.w, this.gameSize.h, '#') // aqui va el enlace de una imagen
        this.player = new Player (this.ctx, this.gameSize.w, this.gameSize.h, this.keys) 
        this.enemies = [], 
        this.prizes = [], 
        this.goals = []
        
    },

    drawAll() {
        this.background.draw()
        this.player.draw(this.framesCounter)
        this.enemies.forEach(element => element.draw())
        this.prizes.forEach(element => element.draw())
        this.goals.forEach(element => element.draw())
        
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    createEnemies() {
        // if (this.framesCounter % 90 === 0){
        //     this.enemies.push(new Enemies(this.ctx, this.gameSize.w, this...))
        // }
    }

// clearEnemies

// isColission (tenemos dos colisiones)

// gameOver

    




    

 





}