import { Component } from '@angular/core';
import { AppConfigService } from '../../shared/app-config.service';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  isActive=false;
  color:string="blue";
  state: string = 'default';
  walletBalanceResponse:any;
  integrityAmountResponse:any;
  biometricriversResponse:any;
  amount:any;
  leftAmount:any;
  showLeftAmount=false;
  walletText="Wallet Ballance";
  showAmount:any;
  currency:any;
  username:any;
  userType:any;
  whatismyuser:any;
  cnfType:any;
  ekycUrl: any;
  toggleBtn: any;
  notificationList:any;
  dynamicLogoUrl:any

  constructor(private appConfigService: AppConfigService,private router:Router,private _headerService:HeaderService,public dialog :MatDialog,    private sheet: MatBottomSheet
  ) { 
this.dynamicLogoUrl= this.appConfigService.getLogoUrl();
console.log(this.dynamicLogoUrl);
}
 
}
