import { dataInfoTerapiaAdminModel } from './../../../Models/AdminModels.interface';
import { DataInfoAdminModel } from 'src/app/Models/AdminModels.interface';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../../../services/api.service';
import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terapias-admin',
  templateUrl: './terapias-admin.component.html',
  styleUrls: ['./terapias-admin.component.scss']
})
export class TerapiasAdminComponent {
  pacientes: any[] = [1, 2, 3];
  terapeutas!: dataInfoTerapiaAdminModel[];
  create: boolean = false;
  data: string = '';
  idE: any
  filterSearch: any

  constructor( private apiService: ApiService, public dialog: MatDialog ) {}

  ngOnInit(): void {
    this.getTerapeutas();
  }

  //actions CRUD
  getTerapeutas() {
    this.apiService.getAdminTerapias().subscribe({
      next: (res) => {
        console.log(res)
        if (res.response === 'Success') {
          this.terapeutas = res.datainfo;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  openDialogConfirm(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialog = this.dialog.open(ConfirmAlertComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    dialog.afterClosed().subscribe((res)=> console.log(res))
  }


  //delete Register

  DeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: any): void {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    dialog.afterClosed().subscribe((res)=> {
      if(res === true)this.DeleteTerapeutas(id)
    })
  }

  DeleteTerapeutas(id: any) {
    this.apiService.deleteAdminTerapia(id).subscribe({
      next: (res) => {
        this.getTerapeutas();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //update status
  updateStatus(id: any){
    this.apiService.updateStatus(id).subscribe({
      next: (res)=> {
       this.getTerapeutas()
      }, error: (err)=> {
        console.log(err)
      }
    })
  }

  newOrEdit(data: string, id: string) {
    this.data = data;
    this.idE = id
    this.create = true;
  }

  reciveBack($event: any) {
    this.create = $event
    this.getTerapeutas()
  }

}
