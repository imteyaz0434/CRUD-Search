import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LogService } from '../../app/services/log.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {Log} from 'src/app/models/logs.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  @ViewChild('logForm') public createLogForm:NgForm;

  log:Log = {
    id:null,
    name:null,
    dateOfBirth:null,
    place:null,
    intrest:null
  }
  constructor(private _logService:LogService,private formBuilder: FormBuilder, private _router:Router) {}
  
   addForm: FormGroup;  
   btnvisibility: boolean = true;
   empformlabel: string = 'Add User';
   empformbtn: string = 'Save'; 

  ngOnInit() {

    this.addForm = this.formBuilder.group({  
      id: [this.uuid()],  
      name: ['', Validators.required],  
      dateOfBirth: ['', [Validators.required]],  
      place: ['', [Validators.required]],
      intrest: ['', [Validators.required]]
    });

    let empid = localStorage.getItem('editLogId');  
    if (+empid > 0) {  
      this._logService.getEmployeeById(+empid); 
      this.log =  this._logService.data;
      this.addForm.patchValue(this.log); 
      localStorage.removeItem('editLogId'); 

      this.btnvisibility = false;  
      this.empformlabel = 'Edit User';  
      this.empformbtn = 'Update';  
    }  
  }

  uuid(){
    let date = new Date();
    let time = date.getTime();
    return time;
  }
    onSubmit() {  
      //console.log(this.addForm.value);  
      this._logService.createLog(this.addForm.value);
      this._router.navigate(['list-log']);  
      } 
      
      onUpdate() {    
        this._logService.updateLog(this.addForm.value);
          this._router.navigate(['list-log']);  
        }
  } 
  
