import Critter from './critter';

class Butterfly extends Critter {

    constructor(props) {
        super(props);

        this.x = 20;
        this.y = 20;

        this.rows = 6;
        this.columns = 14;
        this.imageWidth = 980;
        this.imageHeight = 390;

        this.sx = 0;
        this.sy = 0;

        this.image = document.getElementById("butterfly-image");
    }
}

export default Butterfly;