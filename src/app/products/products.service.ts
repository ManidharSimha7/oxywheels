import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RSA_NO_PADDING } from 'constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FacetInitialState, FacetState, ProductState, ResponseState } from './models/productResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  facets =  new BehaviorSubject<FacetState>(FacetInitialState);

  constructor(private http : HttpClient) { }


  getProducts(): Observable<ProductState[]>{

      return this.http.get<ResponseState>("https://api.oxywheels.com/getapi/Products?cat1=used-cars&cat2=honda&cat3=&cat4=&pno=1&ps=15&pps=0&by=popular&ctkn=&dir=&f=&cty=&cnty=India&cid=1")
      .pipe(tap((res => {
         this.facets.next(res.Data.Facets) 
      })),map((res) => {
            return res.Data.ProductDetails;
      }))

              
      
      

    
  }

}
