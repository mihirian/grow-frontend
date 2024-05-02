import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgOtpInputModule } from  'ng-otp-input';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {CdkMenuModule} from '@angular/cdk/menu';
import { NgMarqueeModule } from 'ng-marquee';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SwiperModule } from 'swiper/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './common/header/header.component';
import { DrawerComponent } from './common/drawer/drawer.component';
import { HomeComponent } from './components/home/home.component';
import { PanVerificationComponent } from './components/pan-verification/pan-verification.component';
import { DynamicDataComponent } from './common/dynamic-data/dynamic-data.component';
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
import { BankAccountVerificationComponent } from './components/bank-account-verification/bank-account-verification.component';
import { EmailCheckerVerificationComponent } from './components/email-checker-verification/email-checker-verification.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    HomeComponent,
    PanVerificationComponent,
    DynamicDataComponent,
    AadharVerificationComponent,
    DrivingLicenseComponent,
    VoterIdVerificationComponent,
    PassportVerificationComponent,
    FssaiVerificationComponent,
    IecVerificationComponent,
    McaVerificationComponent,
    GstVerificationComponent,
    TanVerificationComponent,
    LeiVerificationComponent,
    ShopEstablishmentVerificationComponent,
    RcVerificationComponent,
    BankAccountVerificationComponent,
    EmailCheckerVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgOtpInputModule,
    NgHttpLoaderModule.forRoot(),
    CdkMenuModule,
    NgMarqueeModule,
    IvyCarouselModule,
    SwiperModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
  
    MatNativeDateModule ,
    ScrollingModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
