import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product:any
  constructor(private _router:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {

    console.log(this._router.snapshot.params.name)

    this.productService.proOne.subscribe(data => {
      //do what ever needs doing when data changes
      this.product = data
      console.log(this.product)

    })
    
  }

}
