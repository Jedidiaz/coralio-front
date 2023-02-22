import { ConfirmDialogComponent } from './../../../shared/confirm-dialog/confirm-dialog.component';
import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import {
  dataInfoTerapiaAdminModel,
  datainfoAdminBlogModel,
} from './../../../Models/AdminModels.interface';
import { ApiService } from './../../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs-admin',
  templateUrl: './blogs-admin.component.html',
  styleUrls: ['./blogs-admin.component.scss'],
})
export class BlogsAdminComponent {
  pacientes: any[] = [1, 2, 3];
  terapeutas!: datainfoAdminBlogModel[];
  create: boolean = false;
  data: string = '';
  idE: any;
  filterSearch: any;
  contenedor = {
    image: '../../../../assets/img/grupales.png',
    titulo: 'Este es un titulo de prueba',
    autor: 'Autor prueba',
    descripcionC: 'Esta es una descripcion corta de prueba para probar',
    descripcionL:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
  };

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTerapeutas();
  }

  //actions CRUD
  getTerapeutas() {
    this.apiService.getBlogs().subscribe({
      next: (res) => {
        console.log(res);
        if (res.response === 'Success') {
          this.terapeutas = res.datainfo;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openDialogConfirm(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialog = this.dialog.open(ConfirmAlertComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialog.afterClosed().subscribe((res) => console.log(res));
  }

  //delete Register

  DeleteDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: any
  ): void {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialog.afterClosed().subscribe((res) => {
      if (res === true) this.DeleteTerapeutas(id);
    });
  }

  DeleteTerapeutas(id: any) {
    this.apiService.deleteAdminblogs(id).subscribe({
      next: (res) => {
        this.getTerapeutas();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //update status
  updateStatus(id: any) {
    this.apiService.updateStatus(id).subscribe({
      next: (res) => {
        this.getTerapeutas();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  newOrEdit(data: string, id: string) {
    this.data = data;
    this.idE = id;
    this.create = true;
  }

  reciveBack($event: any) {
    this.create = $event;
    this.getTerapeutas();
  }
}
