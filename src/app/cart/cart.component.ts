import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsx = []
  total = 0
  constructor(private productService:ProductService) { }

  ngOnInit() {

    
    this.gethh()

  }


  gethh(){
    //console.log("uuuuuuuuuuuuj")

    this.productService.data.subscribe(data => {
      //do what ever needs doing when data changes
      this.productsx = data
      console.log(this.productsx)

    })

    this.productsx.forEach(element => {

      this.total += (element.price * element.quantity )

      console.log(this.total)
      
    });

    // this.productService.send2.subscribe(data =>{
    //   console.log("uuuuuuuuuuuuj")
    //   this.productsx.push(data);
    //   console.log(this.productsx[0].price)
    //   console.log(this.productsx)

  
    //   })
  }
  remove(product){
    console.log(product)
  
    let kk = this.productsx.indexOf(product)
  
    this.productsx.splice(kk,1)
  
  }
  
  minose(product){
  
    let pro = product.quantity--
    let a = product.price * product.quantity
    console.log(pro)
    this.total -= product.price
  
   // this.total -= a
  
    console.log(this.total)
  
  }
  
  plus(product){
    let pro = product.quantity++
      let a = product.price * product.quantity
    this.total += product.price
    console.log(pro)

    console.log(this.total)
  
    
    //this.total + pro
  
  }
  

}
