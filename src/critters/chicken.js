import Critter from './critter';

class Chicken extends Critter {

    constructor(props) {
        super(props);

        this.x = 100;
        this.y = 100;

        this.rows = 4;
        this.columns = 6;
        this.imageWidth = 336;
        this.imageHeight = 288;

        this.sx = 0;
        this.sy = 0;

        this.image = document.getElementById("chicken-image");
    }
}

export default Chicken;