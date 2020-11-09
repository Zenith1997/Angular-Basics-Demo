import { Component,OnInit } from '@angular/core';
import {UpdateService} from './services/update.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 


 constructor(private updateService:UpdateService) {
   
 }

 ngOnInit(){
   this.getUpdate();
 }

 public getUpdate(){

  this.updateService.getUPdate().subscribe(response=>{
    console.log(response);
  });
 }
    

   
}
