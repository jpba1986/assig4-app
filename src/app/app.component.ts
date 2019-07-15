import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onInternvalFired(firedNumber:number){
    if (firedNumber %2 === 0 ){
      this.evenNumbers.push(firedNumber);
    } else{
      this.oddNumbers.push(firedNumber);
    } 
  }*/
  oddNumbers  = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
  value = 5;
}
