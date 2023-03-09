import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {  ContactForm } from "../../models/contactform";
import { environment  } from "../../constants/constant-endpoints";
@Injectable({ 
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }

  /**
   * contactme
   */
  public contactMe(contactform: ContactForm) {
    this.http.post(environment.END_POINT,
      {form : contactform }
    ,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
        
      }
    ).subscribe((resp)=>{
      console.log(resp)
    })
  }
}
