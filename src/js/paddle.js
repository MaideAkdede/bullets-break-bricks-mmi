const paddle = {
    speed: 4,
    pos: {
        x: 0,
        y: 0,
    },
    size: {
        h: 25,
        w: 25,
    },
    init(ctx, canvasElt) {
        this.ctx = ctx;
        this.canvasElt = canvasElt;
        //
        this.pos.x = (this.canvasElt.width / 2) - (this.size.w / 2);
        this.pos.y = this.canvasElt.height - this.size.h - (this.size.h / 2);
        //
        this.move();
    },
    update() {
        this.edgeCollision();
        this.draw();
    },
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        //this.ctx.translate();
        this.ctx.rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        this.ctx.fill();
        this.ctx.restore();
    },
    move() {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            //
            if (e.key === 'ArrowLeft') {
                this.pos.x -= this.speed;
            }
            if (e.key === 'ArrowRight') {
                this.pos.x += this.speed;
            }
        })
    },
    edgeCollision() {
        if (this.pos.x < 0) {
            this.pos.x = this.size.w;
        }
        if (this.pos.x > this.canvasElt.width - this.size.w) {
            this.pos.x = this.canvasElt.width - this.size.w;
        }
    }
}
export default paddle;