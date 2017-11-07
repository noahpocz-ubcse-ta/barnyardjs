import Critter from './critter';
import { GROUND_LOCATION_RATIO } from './critter';

class Pig extends Critter {

    constructor(props) {
        super(props);

        this.rows = 3;
        this.columns = 8;
        this.imageWidth = 704;
        this.imageHeight = 186;

        this.direction = 1;
        this.speed = 1.6;
        this.x = 200;
        this.y = this.canvas.height * GROUND_LOCATION_RATIO - this.imageHeight / this.rows;

        this.sx = 0;
        this.sy = 0;

        this.image = document.getElementById("pig-image");
    }
}

export default Pig;