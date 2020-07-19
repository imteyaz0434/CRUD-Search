import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Log} from 'src/app/models/logs.model';
import { LogService } from '../../app/services/log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  logs: Log[];
  filterData;
  originalLog;
  constructor(public LogService:LogService, private router:Router) { }

  ngOnInit() {
    this.logs = this.LogService.getLogs();
    //console.log(this.logs);
    this.originalLog = this.logs;

  }
  deleteLog(log: Log[]): void { 
    let con = confirm("Are you sure to delete");
    if(con){
      this.LogService.deleteLog(log);
    } 
  }  

  editLog(log: Log){  
    localStorage.removeItem('editLogId');  
    localStorage.setItem('editLogId', log.id.toString());  
    this.router.navigate(['create-log']);  
  } 
  search(term: string) {
    //console.log(term);
    if(!term) {
      this.filterData = this.logs;
    } else {
      this.filterData = this.logs.filter(x => 
         x.name.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
    }
    this.originalLog = this.filterData;
  }
}
