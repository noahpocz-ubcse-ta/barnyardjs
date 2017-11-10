class Executable {

    constructor(){
        this.BarnYard = [];
        this.Chickens = [];
        this.Pigs = [];
        this.Butterflys = [];
    }

    start(){

    }

    newBarnYard(barnyard){
        if(this.BarnYard.length <= 1 && this.BarnYard.length >= 0){
           this.BarnYard.push(barnyard); 
        }else{
            document.write('Sorry, one only please');
        }
        
    }

    newChicken(chicken){
        this.Chickens.push(chicken);
    }

    newPig(pig){
        this.Pigs.push(pig);
    }

    newButterfly(butterfly){
        this.Butterflys.push(butterfly);
    }

    addChicken(c){
        this.BarnYard.push(this.Chickens);
    }

    addPig(){
        this.BarnYard.push(this.Pigs);
    }

    addButterfly(){
        this.BarnYard.push(this.Butterflys);
    }

    removeChicken(){
        this.BarnYard.pop(this.Chickens);
    }

    removePig(){
        this.BarnYard.pop(this.Pigs);
    }

    removeButterfly(){
        this.BarnYard.pop(this.Butterflys);
    }
}