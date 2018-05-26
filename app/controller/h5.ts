import {Controller} from 'egg';
import db  =require("../model");

export default class  extends Controller{
    sayHello(){

    }
    sendAuthcode(){
        console.log(db);
        let {ctx}=this;
            console.log(ctx.service.calc.add('a','b'));

    }
}