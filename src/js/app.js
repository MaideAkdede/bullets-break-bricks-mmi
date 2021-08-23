import paddle from "./paddle";
import Brick from "./Brick";

const main = {
    ctx: null,
    canvasElt: null,
    bricks: [],
    bricksCount: 20,
    init() {
        this.canvasElt = document.createElement('canvas');
        this.ctx = this.canvasElt.getContext('2d');
        document.body.insertAdjacentElement('afterbegin', this.canvasElt);
        //
        this.canvasElt.width = 600;
        this.canvasElt.height = 400;
        //
        this.ctx.strokeStyle = '#000';
        this.ctx.fillStyle = '#000';
        //
        paddle.init(this.ctx, this.canvasElt);
        //
       for (let i = 0; i < this.bricksCount; i++) {
            this.bricks.push(new Brick(main));
        }
        //
        this.animate();
    },
    animate() {
        window.requestAnimationFrame(() => {
            this.animate()
        });
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        // TODO: add update here
        paddle.update();
        paddle.bullets.forEach((bullet)=>{
            bullet.update();
        })
        //
        this.bricks.forEach(brick=>{
            brick.update()
        })
    }
}
main.init();