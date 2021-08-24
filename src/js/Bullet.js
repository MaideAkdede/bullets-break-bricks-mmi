import paddle from "./paddle";

export default class Bullet {
    constructor() {
        this.ctx = paddle.ctx;
        this.location = {
            x: paddle.pos.x + (paddle.size.w / 2),
            y: paddle.pos.y
        };
        this.size = 4;
        this.speed = paddle.speed;
    }

    update() {
            this.location.y -= this.speed;
        if (this.location.y < 0) {
           paddle.removeBullet(this);
        }
        this.draw();
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.location.x, this.location.y);
        this.ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        this.ctx.restore();
    }
}
