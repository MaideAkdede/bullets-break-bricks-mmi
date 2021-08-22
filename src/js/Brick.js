export default class Brick {
    constructor(main) {
        this.ctx = main.ctx;
        this.canvas = main.canvasElt;
        this.count = main.bricksCount;
        this.brickHeight = 15;
        this.brickWidth = 95;
        this.gap = 25;

    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        for (let i = 0; i < this.count; i++) {
            this.xB = ((this.gap + this.brickWidth) * i)
            this.ctx.rect( this.xB, 15, this.brickWidth, this.brickHeight);
        }
        //this.ctx.rect(this.gap, 15, this.brickWidth, this.brickHeight);
        this.ctx.fill();
        this.ctx.restore();
    }

    update() {
        this.draw();
    }
}