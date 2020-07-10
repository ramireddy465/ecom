import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { element } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  totalAmount = 0
  totalAmount2:any
  products :any[] = []
  constructor(private productService:ProductService) { }

 

  ngOnInit(): void {


    this.rea()

    
  }

  ngOnChanges(){
    
  }

rea(){

  this.productService.send.subscribe(data =>{

    this.products.push(data);
    console.log(this.products)

    this.products.forEach(element =>{

      this.totalAmount +=  element.price

      console.log(this.totalAmount)
      console.log(element)
  })
    // for(let i of this.products){
    //   console.log(this.products)

    //   this.totalAmount +=  i["price"]

    // }
   

    })
    console.log("sssssssssssssss",this.products)
   
   

}


remove(product){
  console.log(product)

  let kk = this.products.indexOf(product)

  this.products.splice(kk,1)

}

minose(product){

  let pro = product.quantity--

  console.log(pro)





}

plus(product){
  let pro = product.quantity++

  console.log(pro)

}


cart(){
  this.productService.sendtocart2(this.products)
}

}
