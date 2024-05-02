import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../../common/common.service';
import { DynamicDataComponent } from '../../common/dynamic-data/dynamic-data.component';

@Component({
  selector: 'app-passport-verification',
  templateUrl: './passport-verification.component.html',
  styleUrl: './passport-verification.component.css'
})
export class PassportVerificationComponent {
  passportId: any; // Holds the license number as a string
  dob: any; // This will hold the date object
  formattedDOB: any; // This will hold the formatted string
  maxDate: Date = new Date(); // Maximum date for DOB picker
  startDate: Date = new Date(1990, 0, 1); // Start date for DOB picker

  constructor(
    public dialog: MatDialog, 
    private _commonService: CommonService, 
    private _snackBar: MatSnackBar
  ) {
    this.setInitialDOB();
  }

  setInitialDOB() {
    const defaultDOB = new Date();
    defaultDOB.setFullYear(defaultDOB.getFullYear() - 20); // Set default DOB to 20 years ago
    this.dob = defaultDOB;
    this.formattedDOB = this.formatDate(this.dob);
  }

  formatDate(date: Date): string {
    const y = date.getFullYear();
    const m = date.getMonth() + 1; // Months are zero indexed
    const d = date.getDate();
    return `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
  }

  onDOBChange(newDOB: Date): void {
    this.dob = newDOB;
    this.formattedDOB = this.formatDate(newDOB);
  }

  passportIdVerify() {
    console.log(`DOB: ${this.formattedDOB}`); // Use the formatted date
    this._commonService.verifypassportId({id_number: this.passportId, dob: this.formattedDOB}).subscribe(
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
