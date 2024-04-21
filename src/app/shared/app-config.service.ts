import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private favicon: HTMLLinkElement;
  private address!: string ;
  private supportNumber!: string;
  private supportEmail!: string;
  private logourl!:string;
  private showContactStatus:boolean=false;
  private backgroundTheme!: string;

  constructor(private titleService: Title) {
    const existingFavicon = document.querySelector('link[rel="icon"]');

    if (existingFavicon) {
      this.favicon = existingFavicon as HTMLLinkElement;
    } else {
      this.favicon = document.createElement('link');
      this.favicon.rel = 'icon';
      document.head.appendChild(this.favicon);
    }
  }

  setConfigByURL(url: string): void {
    if (url.includes('suvidhavala.in')) {
      this.favicon.href = 'assets/images/suvidhavalafav.jpg';
      this.logourl='assets/images/suvidhavalafav.jpg';
      this.titleService.setTitle('B2B Portal');
      this.address = 'Suvidhavala Address';
      this.supportNumber = '123-456-7890';
    } 
  else {
    this.favicon.href = "assets/images/grow.jpg";
    this.logourl = "assets/images/grow.jpg";
    this.titleService.setTitle("GrowInfinity");
    this.supportNumber = '999-999-999';
    this.supportEmail='support@grow.com';
    this.showContactStatus=true;
    this.backgroundTheme = "Grow";
     } 
  }

  getTitle(): string {
    return this.titleService.getTitle();
  }

  getFavicon(): string {
    return this.favicon.href;
  }

  getAddress(): string {
    return this.address;
  }

  getSupportNumber(): string {
    return this.supportNumber;
  }
  getSupportEmail(): string {
    return this.supportEmail;
  }
  getLogoUrl(): string {
    return this.logourl;
  }
  getContactStatus():boolean{
    return this.showContactStatus;
  }
  getBackgroundColor(): string{
    return this.backgroundTheme;
  }
}
