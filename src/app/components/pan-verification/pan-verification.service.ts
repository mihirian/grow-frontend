import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanVerificationService {

  constructor(private _http: HttpClient) { }

  verifyPanNumber(data:any){
    return this._http.post(`${environment.apiUrl}`+"pan/verifyPanNumber",data);
  }
  pandetails_verify(data:any){
    return this._http.post(`${environment.apiUrl}`+"pan/pandetails_verify",data);
  }
  comprehensive(data:any){
    return this._http.post(`${environment.apiUrl}`+"pan/comprehensive",data);
  }
  verifyAadharNumber(data:any){
    return this._http.post(`${environment.apiUrl}`+"aadhar/validatewithnumber",data);
  }
}
