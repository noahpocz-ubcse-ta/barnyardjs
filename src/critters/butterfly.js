import Critter from './critter';

class Butterfly extends Critter {

    constructor(props) {
        super(props);

        this.rows = 6;
        this.columns = 14;
        this.imageWidth = 980;
        this.imageHeight = 390;

        this.direction = 1;
        this.speed = 2.3;
        this.x = 10;
        this.y = 100;

        this.sx = 0;
        this.sy = 0;

        this.image = document.getElementById("butterfly-image");
    }
}

export default Butterfly;