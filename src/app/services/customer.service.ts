import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Products } from '../classes/produtos';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  #http = inject(HttpClient);
  // #url = environment.url;
  #url = environment.urlProducts;

  constructor() {}

  public getCustomers(): Observable<Array<Products>> {
    let url: string = `${this.#url}/api/v1/helloworld`;
    // let url: string = `${this.#url}/items`;
    // let url: string = `${this.#url}/people`;
    return this.#http.get<Array<Products>>(url);
  }
}
