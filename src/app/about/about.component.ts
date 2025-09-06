import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    function outer() {
      let counter = 0;
      function inner() {
        counter++;
        console.log(counter);
      }
      return inner;
    }
    let fn = outer();
    fn();
    fn()
  }
}
