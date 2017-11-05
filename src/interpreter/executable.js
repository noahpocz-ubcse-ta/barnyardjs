class Executable {

    constructor(){
        this.BarnYard = [];
        this.Chickens = {};
        this.Pigs = {};
        this.Butterflys = {};
    }

    start(){

    }

    newBarnYard(barnyard){
        B = barnyard;
    }

    newChicken(chicken){
        c = chicken;
    }

    newPig(pig){
        p = pig;
    }

    newButterfly(butterfly){
        b = butterfly;
    }

    addChicken(c){
        this.BarnYard.push(c);
    }

    addPig(){
        this.BarnYard.push(p);
    }

    addButterfly(){
        this.BarnYard.push(b);
    }

    removeChicken(){
        this.BarnYard.pop(c);
    }

    removePig(){
        this.BarnYard.pop(p);
    }

    removeButterfly(){

    }
}