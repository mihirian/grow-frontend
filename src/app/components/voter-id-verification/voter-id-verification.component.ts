import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../common/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DynamicDataComponent } from '../../common/dynamic-data/dynamic-data.component';

@Component({
  selector: 'app-voter-id-verification',
  templateUrl: './voter-id-verification.component.html',
  styleUrl: './voter-id-verification.component.css'
})
export class VoterIdVerificationComponent {

voterId: any;


constructor(
  public dialog: MatDialog, 
  private _commonService: CommonService, 
  private _snackBar: MatSnackBar
) {
}
voterIdVerify() {
  this._commonService.verifyvoterID({id_number: this.voterId}).subscribe(
    (res: any) => {
      if (res.status === true) {
        console.log(res.data);
        this.openDataModal(res.data);
      } else {
        this._snackBar.open(res.message.toString(), 'close', { duration: 3000 });
      }
    },
    (error:any) => {
      this._snackBar.open(error.toString(), 'close', { duration: 3000 });
    }
  );
}



openDataModal(data: any) {
  let dialogRef = this.dialog.open(DynamicDataComponent, {
    data: { data: data },
    disableClose: true,
  });

  dialogRef.componentInstance.closemodal.subscribe(() => {
    dialogRef.close();
  });
}
}
