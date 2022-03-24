import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumberArr: number[] = [];
  evenNumberArr: number[] = [];

  onIntervalFired(num: number) {
    if (num % 2 === 0) {
      this.evenNumberArr.push(num);
    } else {
      this.oddNumberArr.push(num);
    }
  }
}
