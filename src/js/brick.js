import paddle from "./paddle";
import Bullet from "./Bullet";

const brick = {
    row: 3,
    column: 5,
    width: 75,
    height: 20,
    offSetLeft: 35,
    offSetTop: 20,
    marginTop: 40,
    init(main) {
        this.bulletSize = 4;
        this.bricks = main.bricks;
        this.ctx = main.ctx;
        this.createBricks();
    },
    createBricks() {
        for (let r = 0; r < this.row; r++) {
            this.bricks[r] = [];
            for (let c = 0; c < this.column; c++) {
                this.bricks[r][c] = {
                    x: c * (this.offSetLeft + this.width) + this.offSetLeft,
                    y: r * (this.offSetTop + this.height) + this.offSetTop + this.marginTop,
                    status: true
                }
            }
        }
    },
    update() {
        this.ballBrickCollision();
        this.draw();
    },
    draw() {
        this.ctx.save();
        this.ctx.beginPath();
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                let b = this.bricks[r][c];
                if (b.status) {
                    this.ctx.rect(b.x, b.y, this.width, this.height);
                }
            }
        }
        this.ctx.fill();
        this.ctx.restore();
    },
    ballBrickCollision() {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                let b = this.bricks[r][c];
                if (b.status) {
                    for (let i = 0; i < paddle.bullets.length; i++) {
                        if (paddle.bullets[i].location.x + this.bulletSize > b.x &&
                            paddle.bullets[i].location.x - this.bulletSize < b.x + this.width &&
                            paddle.bullets[i].location.y + this.bulletSize > b.y &&
                            paddle.bullets[i].location.y - this.bulletSize < b.y + this.height
                        ) {
                           // ball.dy = -ball.dy;
                            console.log(paddle.bullets[i], 'touché', b);
                            b.status = false;
                            paddle.removeBullet(this);
                        }
                    }
                }
            }
        }
    }
}
export default brick;