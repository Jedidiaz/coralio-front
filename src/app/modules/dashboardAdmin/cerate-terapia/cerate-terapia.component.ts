import { ApiService } from './../../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import { ErrorAlertComponent } from './../../../shared/error-alert/error-alert.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cerate-terapia',
  templateUrl: './cerate-terapia.component.html',
  styleUrls: ['./cerate-terapia.component.scss']
})
export class CerateTerapiaComponent {
  @Output() atras = new EventEmitter<boolean>();
  @Input() data!: string;
  @Input() idE!: string;

  formUser: FormGroup;
  video: any;
  messageError: any

  constructor(
    private apiService: ApiService,
    private formbuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.formUser = formbuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data === 'edit') this.getTerapeutasEdit();
  }

  createOrNew() {
    if (this.data === 'new') this.CreateTerapeutas();
    else if (this.data === 'edit') {
      console.log('edit')
      this.UpdateTerapeutas();}
  }

  //Actions
  CreateTerapeutas() {
    const form = new FormData();
    form.append('nombre', this.formUser.value.nombre);
    form.append('precio', this.formUser.value.precio);
    form.append('tipo', this.formUser.value.tipo);
    form.append('cantidad', this.formUser.value.cantidad);
    this.apiService.createAdmin(form, 'createte').subscribe({
      next: (res) => {
        console.log(res)
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
          this.formUser.reset()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
          console.log(res)
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //actualizar

  UpdateTerapeutas() {
    const form = new FormData();
    form.append('nombre', this.formUser.value.nombre);
    form.append('precio', this.formUser.value.precio);
    form.append('tipo', this.formUser.value.tipo);
    form.append('cantidad', this.formUser.value.cantidad);
    this.apiService.updateAdmin(form, 'edittei', this.idE).subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
          console.log(res)
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //datos edit
  getTerapeutasEdit() {
    this.apiService.getAdminTerapiasById(this.idE).subscribe({
      next: (res) => {
        console.log(res);
        if (res.response === 'Success') {
          this.formUser.setValue({
            nombre: res.datainfo.nombre,
            precio: res.datainfo.precio,
            tipo: res.datainfo.tipo,
            cantidad: res.datainfo.cantidad,
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //confirm dialog|
  openDialogConfirm(): void {
    const dialog = this.dialog.open(ConfirmAlertComponent, {
      data: {message: this.messageError}
    });
    dialog.afterClosed().subscribe((res) => console.log(res));
  }

  //error dialog
  openDialogError(): void {
    const dialog = this.dialog.open(ErrorAlertComponent, {
      data: {message: this.messageError}
    }
    );
    dialog.afterClosed().subscribe();
  }

  //atras
  backToTera() {
    this.atras.emit(false);
  }

}
