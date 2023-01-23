//modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {path: '404', component: ErrorPageComponent },
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
