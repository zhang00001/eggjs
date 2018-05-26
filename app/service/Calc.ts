import {Service}from 'egg';


export default class extends Service{
    add(a,b){
        return a+b;
    }
}