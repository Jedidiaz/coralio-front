import { MatDialog } from '@angular/material/dialog';
import { PupopTerapiaComponent } from './../../../shared/pupop-terapia/pupop-terapia.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  constructor(public dialog: MatDialog ){}
  ngOnInit(): void {

  }

  //confirm dialog|
  openDialogConfirm(): void {
    const dialog = this.dialog.open(PupopTerapiaComponent);
    dialog.afterClosed().subscribe();
  }
}
