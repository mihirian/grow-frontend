import { Component, ViewEncapsulation } from '@angular/core';
import { PanVerificationService } from './pan-verification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDataComponent } from '../../common/dynamic-data/dynamic-data.component';

@Component({
  selector: 'app-pan-verification',
  templateUrl: './pan-verification.component.html',
  styleUrl: './pan-verification.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class PanVerificationComponent {

constructor(public dialog: MatDialog,private _panVerificationService:PanVerificationService,private _snackbar:MatSnackBar){

}
panNumber:any;
panDetailNumber:any;
panComprehensiveNumber:any;

ngOnInit(): void {
  
  
}

verifyPanNumber(){
  this._panVerificationService.verifyPanNumber({panNumber:this.panNumber}).subscribe(
    (res: any) => {
      if (res.status == true) {
        console.log(res.data);
        // this.vendarData = res.result.payload;
        this.openDataModal(res.data);
      } else {
        this._snackbar.open(res.message.toString(),'close',{ 
          duration: 1000
      }); 
    
    }
    },
    (error) => {
      this._snackbar.open(error.toString(),'close',{ 
        duration: 1000
    });    }
  );

}
pandetails_verify(){
  this._panVerificationService.pandetails_verify({id_number:this.panDetailNumber}).subscribe(
    (res: any) => {
      if (res.status == true) {
        console.log(res.data);
        this.openDataModal(res.data);

        // this.vendarData = res.result.payload;
      } else {

        this._snackbar.open(res.message.toString(),'close',{ 
          duration: 1000
      }); 
      }
    },
    (error) => {
      this._snackbar.open(error.toString(),'close',{ 
        duration: 1000
    });    }
  );

}
comprehensive(){
  this._panVerificationService.comprehensive({pan_number:this.panComprehensiveNumber}).subscribe(
    (res: any) => {
      if (res.status == true) {
        console.log(res.data);
        this.openDataModal(res.data);

        // this.vendarData = res.result.payload;
      } else {

        this._snackbar.open(res.message.toString(),'close',{ 
          duration: 1000
      }); 
      }
    },
    (error) => {
      this._snackbar.open(error.toString(),'close',{ 
        duration: 1000
    });    }
  );

}

openDataModal(ele:any){
  let dialogRef = this.dialog.open(DynamicDataComponent, {
    data: { data: ele },

    disableClose: true,
  });
  dialogRef.componentInstance.closemodal.subscribe(() => {
    dialogRef.close();
  });
}


}
