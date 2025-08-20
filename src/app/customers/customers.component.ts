import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  feedbacks: Feedback[] = [];
  constructor(private _productsService: ProductsService) {}
  ngOnInit(): void {
    this.getCustomersFeedback();
  }

  getCustomersFeedback() {
    this._productsService.getCustomersFeedback().subscribe({
      next: (data) => this.feedbacks = data.quotes,
      error: (error) => console.log(error),
    });
  }
}
