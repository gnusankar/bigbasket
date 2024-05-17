import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // productDetails: Array<any> | null = [];
  constructor() { }

  getProductItem() {
    let obj = {};
    try{
      obj = JSON.parse(localStorage.getItem("productDetails")||'{}');
    } catch(e) {
      
    }
    return obj;
  }
  setProductItem(value: any) {
    localStorage.setItem("productDetails", JSON.stringify(value))
  }
  resetValue() {
    localStorage.clear()
  }
}
