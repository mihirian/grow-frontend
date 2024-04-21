import { BehaviorSubject, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDrawer, MatDrawerContainer, MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { DraweritemsService } from './draweritems.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  // @ViewChild('drawer')
  @ViewChild('drawer', { static: false }) public drawer!: MatDrawer;

  public sidenav!: MatSidenav;
  drawerButtonControl = new UntypedFormControl('');
  drawerlist:any=[];
  opened:any;
  allowedServicesList:any;
  permissionsList:any;
  scroll$: any;
  scrollPosition:any = localStorage.getItem("scrollPosition");

  constructor(private draweritemsService:DraweritemsService,private _router:Router,private breakpointObserver: BreakpointObserver) { 
    _router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/login'||event['url'] == '/admin.login'||event['url'] == '/privacypolicy') {
          this.opened = false;
        } else {
          // console.log("NU")
          this.opened = true;
        }
      };
    
    });
  
  }
  

  ngAfterViewChecked(): void{
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait]).subscribe(result => {
      if(!result.matches){
        this._router.events.forEach((event) => {
          if (event instanceof NavigationEnd) {
            if (event['url'] == '/login'||event['url'] == '/admin.login'||event['url'] == '/privacypolicy') {
              this.opened = false;
            } else {
              // console.log("NU")
              this.opened = true;
            }
          };
        
        })
    //  this.opened=true;

      }else{
        this._router.events.forEach((event) => {
          if (event instanceof NavigationEnd) {
            if (event['url'] == '/login'||event['url'] == '/admin.login'||event['url'] == '/privacypolicy') {
              this.opened = false;
            } else {
              // console.log("NU")
              this.opened = false;
            }
          };
        
        })
        // this.opened=false;
      }
    });  
  }
  ngOnInit() { 

      if (this.scrollPosition) {
        window.scrollTo(0, Number(this.scrollPosition));
        }
  
  
    this._router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event['url']);
              //comment for stoping drawer rearrange

        // for(let i=0;i<this.allowedServicesList.length;i++){
        //   if(this.allowedServicesList[i].link==event['url']){
        //     this.allowedServicesList.unshift(this.allowedServicesList.splice(i, 1)[0]);
        //     console.log(i);
        //     break;}
        // }
        this.drawerButtonControl= new UntypedFormControl(event['url']);
      }
    });
  

    console.log( this.drawerButtonControl.value);
      
    
    this.allowedServicesList= this.draweritemsService.allowedServicesList;
   

    } 
    sidebuttonindex(){
      console.log(this.drawerButtonControl.value);
    }
  
    sidebuttonindex2(item:any,index:any){
      localStorage.setItem("scrollPosition",window.scrollY.toString())
    
      console.log(window.scrollY);

      console.log(this.drawerButtonControl.value);
    }
    
    

}


function allowedServices(allowedServices: any): any {
  throw new Error('Function not implemented.');
}

