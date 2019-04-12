import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  angTitle = 'my-angular-course';
  titleCounter = 0;
  numbers: number[];
  ngOnInit(): void {
    const interval = setInterval(() => {
      this.titleCounter++;
    }, 2000);
    this.numbers = [1, 2, 3];
    this.numbers.push(4);
    this.numbers = [...this.numbers];
    setTimeout(() => clearInterval(interval), 6000);
  }
}
