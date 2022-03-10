import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:54277/api';

 
  register(email : string, name : string , pcode : string) {
    
    var body = {
     // UserName: this.formModel.value.UserName,
      Email : email,
      FullName : name,
      Password : pcode
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }
}
