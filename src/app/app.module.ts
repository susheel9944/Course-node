import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { Server2Component } from './server2/server2.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    Server2Component,
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot([{
      path: 'student',
      component: StudentComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
