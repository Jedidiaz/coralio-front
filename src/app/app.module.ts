import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
