import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DraweritemsService } from '../../common/drawer/draweritems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent {
searchText: any;
bbpsDataList: any;



constructor(
  private drawerService:DraweritemsService,
  private _snackbar: MatSnackBar,
  public dialog: MatDialog,
  fb: FormBuilder,
  private sheet: MatBottomSheet,
  private cdr: ChangeDetectorRef,
  private router:Router) { }

  ngOnInit(): void {
    this.bbpsDataList=this.drawerService.allowedServicesList;
  }
  AfterViewChecked() {
    this.cdr.detectChanges();
  }

  randomColor(brightness:any){
    
    return '#' + this.randomChannel(brightness) + this.randomChannel(brightness) + this.randomChannel(brightness);
  }
randomChannel(brightness:any){
      var r = 255-brightness;
      var n = 0|((Math.random() * r) + brightness);
      var s = n.toString(16);
      return (s.length==1) ? '0'+s : s;
    }
selectService(service:any){
  console.log(service);
  
  this.router.navigate([service.link]);

}
  

}
