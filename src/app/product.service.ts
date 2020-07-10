import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private subject = new Subject<any>();
 // private subject2 = new Subject<any>();
   send = this.subject.asObservable()
  // send2 = this.subject2.asObservable()
  public myData = new BehaviorSubject([]);
  private myDataproduct  = new BehaviorSubject([]);
  data = this.myData.asObservable();
  proOne = this.myDataproduct.asObservable();

  constructor() { }

  sendtocart(product){

    this.subject.next(product)

  }

  sendtocart2(product){
    this.myData.next(product)
    console.log(product)
  }
  sendtopdetails(p){
    this.myDataproduct.next(p)
  }

}
