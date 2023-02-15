import { ErrorAlertComponent } from './../../../shared/error-alert/error-alert.component';
import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from './../../../services/api.service';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {
  @Output() atras = new EventEmitter<boolean>();
  @Input() data!: string;
  @Input() idE!: string;

  formUser: FormGroup;
  img: any;
  messageError: any

  constructor(
    private apiService: ApiService,
    private formbuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.formUser = formbuilder.group({
      titulo: ['', Validators.required],
      cuerpo: ['', Validators.required],
      autor: ['', Validators.required],
      img: ['', Validators.required],
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

   //img
   onFileSelected($event: any): any {
    if ($event.target.files.length > 0) {
      const [file] = $event.target.files;
      this.img = {
        fileRaw: file,
        fileName: file.name,
      };
      console.log(this.img);
    }
  }

  //Actions
  CreateTerapeutas() {
    const form = new FormData();
    form.append('titulo', this.formUser.value.titulo);
    form.append('cuerpo', this.formUser.value.cuerpo);
    form.append('autor', this.formUser.value.autor);
    form.append('img', this.img.fileRaw, this.img.fileName);
    this.apiService.createAdmin(form, 'createblog').subscribe({
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
    form.append('titulo', this.formUser.value.titulo);
    form.append('cuerpo', this.formUser.value.cuerpo);
    this.apiService.updateAdmin(form, 'editpub', this.idE).subscribe({
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
    this.apiService.getBlogsByID(this.idE).subscribe({
      next: (res) => {
        console.log(res);
        if (res.response === 'Success') {
          this.formUser.setValue({
            titulo: res.datainfo.titulo,
            cuerpo: res.datainfo.cuerpo,
            autor: res.datainfo.autor,
            img: ''
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

  //actualizar video
  updateVideo() {
    const form = new FormData();
    form.append('img', this.img.fileRaw, this.img.fileName);
    this.apiService.updateAdminVideo(form, 'editpubi', this.idE).subscribe({
      next: (res) => {
        if (res.response === 'Success') {
          this.messageError = res.message
          this.openDialogConfirm()
        }
        else {
          this.messageError = res.message
          this.openDialogError()
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //atras
  backToTera() {
    this.atras.emit(false);
  }
}
