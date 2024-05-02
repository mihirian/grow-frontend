import { Component, EventEmitter, Inject, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicDataComponent implements OnInit {
  @Output() public closemodal = new EventEmitter<void>();
  
  modalData: any;  // Array of key-value pairs for display

  constructor(@Inject(MAT_DIALOG_DATA) public data: { data: any }) { }

  ngOnInit(): void {
    this.modalData = this.transformData(this.data.data);
    console.log(this.modalData);
  }

  // Transforms the input data by filtering, removing unwanted values, and stringifying nested objects
  private transformData(inputData: any): any[] {
    const keysToBypass: string[] = ['client_id', 'key2'];

    const stringifyNestedObjects = (obj: any): string => {
      if (typeof obj !== 'object' || obj === null) {
        return obj ? obj.toString() : '';  // Return empty string for null values
      }
      return Object.entries(obj)
        .map(([innerKey, innerValue]) => `${innerKey}: ${stringifyNestedObjects(innerValue)}`)
        .join(', ');
    };

    return Object.entries(inputData)
      .filter(([key, value]) => !keysToBypass.includes(key) && value !== null && value !== '')
      .map(([key, value]) => ({
        key, 
        value: stringifyNestedObjects(value)
      }));
  }

  // Closes the modal and emits an event
  close(): void {
    this.closemodal.emit();
  }
}
