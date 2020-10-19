
import {Shape} from './shape';

export class Circle extends Shape
{
    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
        this.area=0;
    }

    Myarea(){
        this.area=this.radius*this.radius*3.4;
    }

    dispaly(){
        console.log(`
        --------Area of Circle is -------------------
            Radius :: ${this.radius}
            Area is :: ${this.area}
        `);
    }

}