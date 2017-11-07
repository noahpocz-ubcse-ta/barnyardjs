import Critter from './critter';

class Pig extends Critter {

    constructor(props) {
        super(props);

        this.x = 200;
        this.y = 200;

        this.rows = 3;
        this.columns = 8;
        this.imageWidth = 704;
        this.imageHeight = 186;

        this.sx = 0;
        this.sy = 0;

        this.image = document.getElementById("pig-image");
    }
}

export default Pig;