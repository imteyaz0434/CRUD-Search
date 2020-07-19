import { Injectable } from '@angular/core';
import {Log} from 'src/app/models/logs.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
data:Log;
  private listLog:Log[] =[
    // {
    //  id:1,
    //  name:"Imteyaz",
    //  dateOfBirth:new Date('02/10/1990'),
    //  place:"India",
    //  intrest:"cricket"
 
    // },
    // {
    //  id:2,
    //  name:"Purender",
    //  dateOfBirth:new Date('02/10/1985'),
    //  place:'China',
    //  intrest:"cricket"
 
    // },
    // {
    //  id:3,
    //  name:"Hasini",
    //  dateOfBirth:new Date('02/10/1998'),
    //  place:'india',
    //  intrest:"cricket"
 
    // }
  ];

  getLogs():Log[]{
    let objLog = JSON.parse(localStorage.getItem('logs'));
    this.listLog = objLog;
    console.log(this.listLog);
    return this.listLog;
  }

  createLog(log:Log){
    console.log(log);
    this.listLog.push(log);
    localStorage.setItem('logs',JSON.stringify(this.listLog));
  }

  deleteLog(log){
    console.log(log);
    this.listLog.forEach((curr,index)=>{
      if(log.id===curr.id){
        this.listLog.splice(index,1);
        localStorage.setItem('logs',JSON.stringify(this.listLog));
      }
    });

  }
  updateLog(log){
    this.listLog.forEach((curr,index)=>{
      if(log.id===curr.id){
        this.listLog.splice(index,1);
        this.listLog.unshift(log);
        localStorage.setItem('logs',JSON.stringify(this.listLog));
        // localStorage.removeItem('editLog');  
        // localStorage.setItem('editLog', JSON.stringify(data));
        // console.log(data);
        //return data;
      }
    });
  }
  getEmployeeById(id):any{
    this.listLog.forEach((curr,index)=>{
      if(id===curr.id){
        this.data = this.listLog[index];
        // localStorage.removeItem('editLog');  
        // localStorage.setItem('editLog', JSON.stringify(data));
         console.log(this.data);
        //return data;
      }
    });
  }

  
}
