import Bullet from "./Bullet";
//
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
    //
    bulletTimer: -1,
    bulletTimerTreshold: 5,
    bullets: [],
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
        console.log(this.bullets);
        this.edgeCollision();
        this.draw();
    },
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
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
            //
            if (e.key === ' ') {
                this.bulletTimer++;
                if (!(this.bulletTimer % this.bulletTimerTreshold))
                    this.bullets.push(new Bullet());
            } else {
                this.bulletTimer = -1;
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
    },
    removeBullet(bullet){
        const i = this.bullets.indexOf(bullet);
        this.bullets.splice(i, 1)
    }
}
export default paddle;