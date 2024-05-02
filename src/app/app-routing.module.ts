import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { AadharVerificationComponent } from './components/aadhar-verification/aadhar-verification.component';
import { DrivingLicenseComponent } from './components/driving-license/driving-license.component';
import { VoterIdVerificationComponent } from './components/voter-id-verification/voter-id-verification.component';
import { PassportVerificationComponent } from './components/passport-verification/passport-verification.component';
import { FssaiVerificationComponent } from './components/fssai-verification/fssai-verification.component';
import { IecVerificationComponent } from './components/iec-verification/iec-verification.component';
import { McaVerificationComponent } from './components/mca-verification/mca-verification.component';
import { GstVerificationComponent } from './components/gst-verification/gst-verification.component';
import { TanVerificationComponent } from './components/tan-verification/tan-verification.component';
import { LeiVerificationComponent } from './components/lei-verification/lei-verification.component';
import { ShopEstablishmentVerificationComponent } from './components/shop-establishment-verification/shop-establishment-verification.component';
import { RcVerificationComponent } from './components/rc-verification/rc-verification.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent 
   
  },
  {
    path:'panVerification',component:PanVerificationComponent
  },
  {
    path:'aadhaarVerification',component:AadharVerificationComponent
  },
  {
    path:'drivingLicenseVerification',component:DrivingLicenseComponent
  },
  {
    path:'voterIDVerification',component:VoterIdVerificationComponent
  },
  {
    path:'passportVerification',component:PassportVerificationComponent
  },
  {
    path:'fssaiVerification',component:FssaiVerificationComponent
  },
  {
    path:'iecVerification',component:IecVerificationComponent
  },
  {
    path:'mcaVerification',component:McaVerificationComponent
  },
  {
    path:'gstVerification',component:GstVerificationComponent
  },
  {
    path:'tanVerification',component:TanVerificationComponent
  },
  {
    path:'leiVerification',component:LeiVerificationComponent
  },
  {
    path:'shopEstablishmentVerification',component:ShopEstablishmentVerificationComponent
  },
  {
    path:'rcVerification',component:RcVerificationComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
