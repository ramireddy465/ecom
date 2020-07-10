import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 products = [{
    name: "camera",
    price:350,
    color:"red"
    },
    {
    name:"pen",
    price:50,
    color:"green"
    },
    {
    name:"shooes",
    price:2000,
    color:"blue"
    },
    {
    name:"shirt",
    price:700,
    color:"yellow"
    },
    {
    name:"wallet",
    price:1200,
    color:"pink"
    },
    {
      name:"sun glasses",
      price:1000,
      color:"cyan"
      }
    
    
    ]

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addtocart(product){

    product.quantity = 1

    this.productService.sendtocart(product)

  }

  pdetail(p){

console.log(p)
this.productService.sendtopdetails(p)
  }


}
