import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { LogListComponent } from './log-list/log-list.component';
import { AgeCalPipe } from './pipes/age-cal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LogListComponent,
    AgeCalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
