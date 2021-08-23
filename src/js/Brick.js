export default class Brick {
    constructor(main) {
        this.ctx = main.ctx;
        this.canvas = main.canvasElt;
        this.count = main.bricksCount;
        this.brickHeight = 15;
        this.brickWidth = 100;
        this.gap = 18;
        this.row = this.count / 5;
        this.col = this.count / 5;
        //

    }
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(12, 12);
        for (let i = 0; i < 25; i++) {
            this.xB = ((this.gap + this.brickWidth) * i);
            this.yB = 25;
            if (this.xB > ((this.gap + this.brickWidth) * this.col) ||
            this.xB+this.brickWidth > this.canvas.width) {
                for (let c = 0; c < this.count - this.col; c++) {
                    this.xB = ((this.gap + this.brickWidth) * c);
                    for (let r = 0; r < this.row; r++) {
                        this.yB = r * (this.brickHeight + this.gap);
                        //
                        this.ctx.rect(this.xB, this.yB, this.brickWidth, this.brickHeight);
                    }
                }
            }
        }
        this.ctx.fill();
        this.ctx.restore();
    }
    update() {

        this.draw();
    }
}