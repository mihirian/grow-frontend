import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PanVerificationService } from '../pan-verification/pan-verification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DynamicDataComponent } from '../../common/dynamic-data/dynamic-data.component';

@Component({
  selector: 'app-aadhar-verification',
  templateUrl: './aadhar-verification.component.html',
  styleUrl: './aadhar-verification.component.css',  
  encapsulation: ViewEncapsulation.None 

})
export class AadharVerificationComponent {
  aadharNumber: any;


  constructor(public dialog: MatDialog,private _panVerificationService:PanVerificationService,private _snackbar:MatSnackBar){

  }
  ngOnInit(): void {
  
  
  }
aadharVerifyNumber() {
  this._panVerificationService.verifyAadharNumber({id_number:this.aadharNumber}).subscribe(
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
  );}

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
