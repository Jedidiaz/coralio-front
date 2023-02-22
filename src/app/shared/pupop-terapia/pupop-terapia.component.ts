import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-pupop-terapia',
  templateUrl: './pupop-terapia.component.html',
  styleUrls: ['./pupop-terapia.component.scss']
})
export class PupopTerapiaComponent implements OnInit {
  formCreate: FormGroup
  constructor ( public dialogRef: MatDialogRef<PupopTerapiaComponent>, @Inject(MAT_DIALOG_DATA) public data: {message: string}, private formbuilder: FormBuilder ){
    this.formCreate = formbuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  No(){
    this.dialogRef.close()
  }

  // UpdateTerapeutas() {
  //   const form = new FormData();
  //   form.append('nombre', this.formCreate.value.nombre);
  //   form.append('tipo', this.formCreate.value.tipo);
  //   form.append('cantidad', this.formCreate.value.cantidad);
  //   form.append('precio', this.formCreate.value.precio);
  //   form.append('descripcion', this.formCreate.value.descripcion);
  //   this.apiService.updateUserInfo(form, 'terapeuta/editi',).subscribe({
  //     next: (res) => {
  //       if (res.response === 'Success') {
  //         this.messageError = res.message
  //         this.openDialogConfirm()
  //       }
  //       else {
  //         this.messageError = res.message
  //         this.openDialogError()
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
