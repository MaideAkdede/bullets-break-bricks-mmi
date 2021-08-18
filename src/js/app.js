import paddle from "./paddle";

const main = {
    ctx: null,
    canvasElt: null,

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
        // TODO: add event listener her if necessary
        // TODO: init draw function of elements
        paddle.init(this.ctx, this.canvasElt);
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
    }
}
main.init();