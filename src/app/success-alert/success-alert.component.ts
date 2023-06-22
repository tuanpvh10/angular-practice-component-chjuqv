import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
  isButton:boolean = true;
  name:string = "sunil";
  arr: Array<any> = ["one", "two", "three"];
  constructor() { 
    setTimeout(() => {
      this.isButton = false;
    }, 2000);
  }
}