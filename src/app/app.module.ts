//material angular
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//PrimeNg
import {SidebarModule} from 'primeng/sidebar';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';


//COmponents
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderHomeComponent } from './shared/header-home/header-home.component';
import { FooterHomeComponent } from './shared/footer-home/footer-home.component';
import { MainTerapeutaComponent } from './modules/dashboardTerapeutas/main-terapeuta/main-terapeuta.component';
import { MainClienteComponent } from './modules/dashboardCliente/main-cliente/main-cliente.component';
import { HeaderTComponent } from './shared/header-t/header-t.component';
import { FooterTComponent } from './shared/footer-t/footer-t.component';
import { BarTComponent } from './shared/bar-t/bar-t.component';
import { InicioComponent } from './modules/dashboardTerapeutas/inicio/inicio.component';
import { PacientesComponent } from './modules/dashboardTerapeutas/pacientes/pacientes.component';
import { DocumentosComponent } from './modules/dashboardTerapeutas/documentos/documentos.component';
import { TareasComponent } from './modules/dashboardTerapeutas/tareas/tareas.component';
import { SesionesComponent } from './modules/dashboardTerapeutas/sesiones/sesiones.component';
import { MainAdminComponent } from './modules/dashboardAdmin/main-admin/main-admin.component';
import { TerapeutasAdminComponent } from './modules/dashboardAdmin/terapeutas-admin/terapeutas-admin.component';
import { PacientesAdminComponent } from './modules/dashboardAdmin/pacientes-admin/pacientes-admin.component';
import { TerapiasAdminComponent } from './modules/dashboardAdmin/terapias-admin/terapias-admin.component';
import { HeaderAComponent } from './shared/header-a/header-a.component';
import { BarAComponent } from './shared/bar-a/bar-a.component';
import { CreateTerapeutaComponent } from './modules/dashboardAdmin/create-terapeuta/create-terapeuta.component';
import { BarCComponent } from './shared/bar-c/bar-c.component';
import { HeaderCComponent } from './shared/header-c/header-c.component';
import { InicioClienteComponent } from './modules/dashboardCliente/inicio-cliente/inicio-cliente.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { ConfirmAlertComponent } from './shared/confirm-alert/confirm-alert.component';
import { ErrorAlertComponent } from './shared/error-alert/error-alert.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { CeratePacienteComponent } from './modules/dashboardAdmin/cerate-paciente/cerate-paciente.component';
import { CerateTerapiaComponent } from './modules/dashboardAdmin/cerate-terapia/cerate-terapia.component';
import { TerapeutasClienteComponent } from './modules/dashboardCliente/terapeutas-cliente/terapeutas-cliente.component';
import { TerapiasClienteComponent } from './modules/dashboardCliente/terapias-cliente/terapias-cliente.component';
import { SesionesClienteComponent } from './modules/dashboardCliente/sesiones-cliente/sesiones-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderHomeComponent,
    FooterHomeComponent,
    MainTerapeutaComponent,
    MainClienteComponent,
    HeaderTComponent,
    FooterTComponent,
    BarTComponent,
    InicioComponent,
    PacientesComponent,
    DocumentosComponent,
    TareasComponent,
    SesionesComponent,
    MainAdminComponent,
    TerapeutasAdminComponent,
    PacientesAdminComponent,
    TerapiasAdminComponent,
    HeaderAComponent,
    BarAComponent,
    CreateTerapeutaComponent,
    BarCComponent,
    HeaderCComponent,
    InicioClienteComponent,
    ConfirmDialogComponent,
    ConfirmAlertComponent,
    ErrorAlertComponent,
    FilterPipe,
    CeratePacienteComponent,
    CerateTerapiaComponent,
    TerapeutasClienteComponent,
    TerapiasClienteComponent,
    SesionesClienteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule,
    CalendarModule,
    FormsModule,
    TableModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
