import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }


  verifydrivingLicense(data:any){
    return this._http.post(`${environment.apiUrl}`+"common/drivinglicenseVerif",data);
  }
  verifyvoterID(data:any){
    return this._http.post(`${environment.apiUrl}`+"common/voterIdVerif",data);
  }
}
