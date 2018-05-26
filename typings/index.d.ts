import {Connection}  from 'mysql';
declare module 'egg' {
    interface EggApplication{
        mysql:{get:(database:string)=>Connection;
    }
}
}
