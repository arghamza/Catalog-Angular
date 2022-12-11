import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../../model/product.model";

import {ValidationErrors} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products!:Observable<Array<Product>>
  prod!:Array<Product>

  constructor( private http:HttpClient) {
  }


  public  getAllProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(environment.backendProduct+"/products")
  }

  public deleteProduct(p:Product):Observable<any>{
    return this.http.delete(environment.backendProduct+"/products/"+p.id);
  };


  public searchProduct(keyword:string,products:Array<Product>):Observable<Array<Product>>{
    let result=products.filter(p=>p.name.includes(keyword));
    return of(result)
  }

  public addNewProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(environment.backendProduct+"/products",product);
  }

  public getProduct(id:string):Observable<Product>{
  return this.http.get<Product>(environment.backendProduct+"/products/"+id)
  }
  getErrorMessage(name: string, error: ValidationErrors):string {
    if(error['required']){
      return name+" is Required"
    }else if(error['minlength']){
      return name+" should have at least "+error['minlength']['requiredLength']+" Characters";
    }else if(error['min']) {
      return name + " should have min value of " + error['min']['min'];
    }
    else return "";
  }

  public updateProduct(product:Product,id:string):Observable<any>{
    return this.http.put(environment.backendProduct+"/products/"+id,product);
  }
}
