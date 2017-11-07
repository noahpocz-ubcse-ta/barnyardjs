import Critter from './critter';
import { GROUND_LOCATION_RATIO } from './critter';

class Chicken extends Critter {

    constructor(props) {
        super(props);

        this.rows = 4;
        this.columns = 6;
        this.imageWidth = 336;
        this.imageHeight = 288;

        this.direction = 1;
        this.speed = 1;
        this.x = 250;
        this.y = this.canvas.height * GROUND_LOCATION_RATIO - this.imageHeight / this.rows;

        this.sx = 0;
        this.sy = 0;

        this.image = document.getElementById("chicken-image");
    }
}

export default Chicken;