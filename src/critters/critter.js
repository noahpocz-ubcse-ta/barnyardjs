class Critter {

    constructor() {
        this.image = null
        this.canvas = document.getElementById('barnyard');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        
        const sw = this.imageWidth / this.columns;
        const sh = this.imageHeight / this.rows;

        this.sx += sw;
        if (this.sx == this.imageWidth) {
            this.sx = 0;
            this.sy += sh;
            if (this.sy == this.imageHeight) {
                this.sy = 0;
            }
        }

        this.ctx.drawImage(this.image, this.sx, this.sy, sw, sh, this.x, this.y, sw, sh);
    }
}

export default Critter;