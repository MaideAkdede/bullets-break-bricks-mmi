import paddle from "./paddle";
import brick from "./brick";

const main = {
    ctx: null,
    canvasElt: null,
    bricks: [],
    init() {
        this.canvasElt = document.createElement('canvas');
        this.ctx = this.canvasElt.getContext('2d');
        document.body.insertAdjacentElement('beforeend', this.canvasElt);
        //
        this.canvasElt.width = 600;
        this.canvasElt.height = 400;
        //
        this.ctx.strokeStyle = '#000';
        this.ctx.fillStyle = '#000';
        //
        paddle.init(this.ctx, this.canvasElt);
        brick.init(main);
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
        brick.update();
    }
}
main.init();