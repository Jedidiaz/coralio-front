import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmAlertComponent } from './../confirm-alert/confirm-alert.component';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent {
  constructor ( public dialogRef: MatDialogRef<ConfirmAlertComponent>, @Inject(MAT_DIALOG_DATA) public data: {message: string} ){}
  ngOnInit(): void {
  }

  No(){
    this.dialogRef.close()
  }
}
