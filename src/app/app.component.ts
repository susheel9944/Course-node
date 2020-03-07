import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gradeup';
  todaydate = new Date();
  jsonval = {name: 'Rox', age: '24', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];   

            isavailable = false;

      myClickFunction(event){
         this.isavailable = false;
     } 
      changemonths(event){
         alert("Changes onth from the dropdown");
         console.log(event);
      }     
}
