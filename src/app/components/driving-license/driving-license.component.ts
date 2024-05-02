import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../../common/common.service';
import { DynamicDataComponent } from '../../common/dynamic-data/dynamic-data.component';

@Component({
  selector: 'app-driving-license',
  templateUrl: './driving-license.component.html',
  styleUrls: ['./driving-license.component.css']
})
export class DrivingLicenseComponent {
  drivingLicence: any;
  dob: any; // This will hold the date object
  formattedDOB: any; // This will hold the formatted string
  maxDate: Date = new Date();
  startDate: Date = new Date(1990, 0, 1);

  constructor(public dialog: MatDialog, private _commonService: CommonService, private _snackBar: MatSnackBar) {
    this.setInitialDOB();
  }

  setInitialDOB() {
    const defaultDOB = new Date();
    defaultDOB.setFullYear(defaultDOB.getFullYear() - 20);
    this.dob = defaultDOB;
    this.formattedDOB = this.formatDate(this.dob);
  }

  formatDate(date: Date): string {
    const y = date.getFullYear();
    const m = date.getMonth() + 1; // Months are zero indexed
    const d = date.getDate();
    return `${y}/${m.toString().padStart(2, '0')}/${d.toString().padStart(2, '0')}`;
  }

  drivingLicenceVerify() {
    console.log(`DOB: ${this.formattedDOB}`); // Use the formatted date
    this._commonService.verifydrivingLicense({driving_licence: this.drivingLicence, dob: this.formattedDOB}).subscribe(
      (res: any) => {
        if (res.status === true) {
          console.log(res.data);
          this.openDataModal(res.data);
        } else {
          this._snackBar.open(res.message.toString(), 'close', { duration: 3000 });
        }
      },
      (error) => {
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
