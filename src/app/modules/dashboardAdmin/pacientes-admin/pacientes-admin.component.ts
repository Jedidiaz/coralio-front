import { Component } from '@angular/core';

@Component({
  selector: 'app-pacientes-admin',
  templateUrl: './pacientes-admin.component.html',
  styleUrls: ['./pacientes-admin.component.scss']
})
export class PacientesAdminComponent {
  pacientes: any [] = [1,2,3]
}
