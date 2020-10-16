
import {Myclass,add,pi} from './demo1';
import {MyPkage} from './mypackage/mypkg';
import {Outside} from '../Outsidepkg/outside';

var myobj=new Myclass("Java","By Kiran",2);
 myobj.display();

 console.log("Call Add Function "+add(2,3));

 console.log("Pi value is "+pi);

 var mypkg=new MyPkage('Developer');
 mypkg.display();

 var oustsideobj=new Outside(50000);
 oustsideobj.display();