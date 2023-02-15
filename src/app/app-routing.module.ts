import { BlogsComponent } from './modules/blogs/blogs.component';
import { MainAdminComponent } from './modules/dashboardAdmin/main-admin/main-admin.component';
import { BarTComponent } from './shared/bar-t/bar-t.component';
import { MainClienteComponent } from './modules/dashboardCliente/main-cliente/main-cliente.component';
import { MainTerapeutaComponent } from './modules/dashboardTerapeutas/main-terapeuta/main-terapeuta.component';
//modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {path: '404', component: ErrorPageComponent },
  {path: '', component: HomeComponent },
  {path: 'blog', component: BlogsComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'cliente', component: MainClienteComponent },
  {path: 'terapeuta', component: MainTerapeutaComponent },
  {path: 'bar', component: BarTComponent },
  {path: 'admin', component: MainAdminComponent },

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule {

 }
