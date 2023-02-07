import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.scss']
})
export class ConfirmAlertComponent {
  constructor ( public dialogRef: MatDialogRef<ConfirmAlertComponent>, @Inject(MAT_DIALOG_DATA) public data: {message: string} ){}
  ngOnInit(): void {

  }

  No(){
    this.dialogRef.close()
  }
}
