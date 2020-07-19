import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogListComponent } from '../app/log-list/log-list.component';  
import { CreateComponent } from '../app/create/create.component';

const routes: Routes = [
  { path: '', component: LogListComponent, pathMatch: 'full' },  
  { path: 'list-log', component: LogListComponent },  
  { path: 'create-log', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
