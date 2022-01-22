const game = {
appName: 'The IronRat Journey app',
    author: 'Ernesto Espinoza & Hiba Berber',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    init() {
        this.setContext()
        this.setSize()
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)
    },
    setSize() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
    },





}