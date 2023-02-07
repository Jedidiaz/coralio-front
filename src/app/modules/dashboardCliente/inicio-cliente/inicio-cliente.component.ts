import { ConfirmAlertComponent } from './../../../shared/confirm-alert/confirm-alert.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.scss'],
  providers : [MatDialog]
})
export class InicioClienteComponent implements OnInit{
  value!: Date;
  constructor( public dialog: MatDialog ) {}

  ngOnInit(): void {
    var fecha = new Date(); //Fecha actual
    var mes: any = fecha.getMonth() + 1; //obteniendo mes
    var dia: any = fecha.getDate(); //obteniendo dia
    var año = fecha.getFullYear(); //obteniendo año
    if (dia < 10) dia = '0' + dia; //agrega cero si el menor de 10
    if (mes < 10) mes = '0' + mes; //agrega cero si el menor de 10
    let today = new Date();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    dialog.afterClosed().subscribe((res)=> console.log(res))
  }

  click($event: any){
    console.log($event)
  }
}

