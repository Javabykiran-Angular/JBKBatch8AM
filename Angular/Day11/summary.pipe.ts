import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})
export class MyPipe implements PipeTransform {
    //transform(value: any,startIndex:number=0,endIndex:number=20){ 
    transform(value: any,startIndex?:number,endIndex?:number) {
        if(!value){
            return value;
        }

         let temp=(<string>value);
        let minindex=(startIndex)?startIndex:0;
        let maxindex=(endIndex)?endIndex:20;
        //  return (temp.substring(0,20)+" ...");
        //return (temp.substring(startIndex,endIndex)+" ...");
        return (temp.substring(minindex,maxindex)+" ...");

    }

}