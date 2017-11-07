export const GROUND_LOCATION_RATIO = 0.7;

class Critter {

    constructor() {
        this.image = null
        this.canvas = document.getElementById('barnyard');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        
        // get the dimensions of an individual frame
        const sw = this.imageWidth / this.columns;
        const sh = this.imageHeight / this.rows;

        // grab the next frame from the sprite sheet
        this.sx += sw;
        if (this.sx === this.imageWidth) {
            this.sx = 0;
            this.sy += sh;
            if (this.sy === this.imageHeight) {
                this.sy = 0;
            }
        }

        // translate
        this.x += this.speed * this.direction
        if (this.x >= this.canvas.width - sh / 2 || this.x <= -sh / 2) {
            this.direction *= -1;
        }

        // render image to context
        this.ctx.save();
        this.ctx.translate(this.direction < 0 ? this.x + sw : this.x, this.y)
        this.ctx.scale(this.direction, 1)
        this.ctx.drawImage(this.image, this.sx, this.sy, sw, sh, 0, 0, sw, sh);
        this.ctx.restore();
    }
}

export default Critter;