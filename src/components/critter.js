import React, {Component} from 'react';

class Critter {

    constructor(animalType) {

        this.timer = null;
        this.counter = 0;
        this.tick = this.tick.bind(this);
        this.draw = this.draw.bind(this);

        this.x = 140;
        this.y = 140;

        if (animalType == 'pig') {
            this.sx=3;
            this.sy=6;
            this.sw=83;
            this.sh=54;
            this.dx=3;}
        if(animalType=='butterfly'){
        this.sx=15;
        this.sy=18;
        this.sw=70;
        this.sh=50;
        this.dx=15;}
        if(animalType=='chicken'){
            this.sx=0;
            this.sy=7;
            this.sw=36;
            this.sh=63;
            this.dx=0;}
    }

    startTimer() {
        this.timer = setInterval(this.tick, 62.5);
    }

    tick() {
        this.counter += 1
        this.sx+=this.sw;
        this.dx+=this.sw;
        if(this.sx==925){
        this.sx=15;
        this.dx=15;}
        if(this.sx==618)
        {this.sx=3;
        this.dx=3}
        if(this.sx==373)
        {this.sx==0;
        this.dx==0;}
        this.draw();
    }

    draw() {
        var canvas = document.getElementById('barnyard');
        var ctx = canvas.getContext('2d');
        var critterImage = document.getElementById('source');
        ctx.clearRect(0,0,1000,1000);
        ctx.drawImage(critterImage,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.sw,this.sh);
    }
}

export default Critter;