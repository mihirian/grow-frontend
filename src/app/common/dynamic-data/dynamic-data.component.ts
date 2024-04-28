import { Component, EventEmitter, Inject, Output, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrl: './dynamic-data.component.css',
  encapsulation:ViewEncapsulation.None

})
export class DynamicDataComponent {
  @Output() public closemodal = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: { data: any },) { }
  modalData:any;
  ngOnInit(): void {
    this.modalData=this.data.data;
    console.log(this.modalData);
    this.modalData = this.data.data;

    // Define keys to bypass
    const keysToBypass = ['client_id', 'key2']; // Add keys you want to bypass here
    
    // Convert object to array of objects, bypassing certain keys and concatenating values
    const dataArray = Object.entries(this.modalData)
      .filter(([key, value]) => !keysToBypass.includes(key)) // Filter out keys to bypass
      .map(([key, value]) => {
        // If value is an object, concatenate its key-value pairs into a string
        if (typeof value === 'object' && value !== null) {
          value = Object.entries(value)
            .map(([innerKey, innerValue]) => `${innerKey}: ${innerValue}`)
            .join(', ');
        }
        return { key, value };
      });
    
    this.modalData = dataArray;
    console.log(this.modalData);


  }
  close(){
    this.closemodal.emit();

  }

}
