import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  categories: string[] = [
    'Beauty',
    'fragrances',
    'Skin Care',
    "Women's Jewellery",
    "Women's Bags",
  ];

  beautyImg: string = "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp";
  fragrancesImg:  string = "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp";
  skinCareImg: string = "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp";
  womenJewelleryImg: string = "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp";
  womenBagsImg: string = "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp";
}
