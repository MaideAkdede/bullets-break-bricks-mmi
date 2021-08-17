const main = {
    ctx: null,
    canvasHeight: window.innerHeight,
    canvasWidth: window.innerWidth,

    init() {
        this.canvasElt = document.createElement('canvas');
        this.ctx = this.canvasElt.getContext('2d');
        document.body.insertAdjacentElement('afterbegin', this.canvasElt);
        //
        this.canvasElt.width = this.canvasWidth;
        this.canvasElt.height = this.canvasHeight;
        // resize
        window.addEventListener('resize', () => {
            this.canvasElt.width = window.innerWidth;
            this.canvasElt.height = window.innerHeight;
        });
        // Events
        //Init Drawings
        this.animate();
    },
    animate() {
        window.requestAnimationFrame(() => {
            this.animate()
        });
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        // TODO: add update here
    }
}
main.init();