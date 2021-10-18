import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { TypeAusersComponent } from './type-ausers/type-ausers.component';
import { TypeBusersComponent } from './type-busers/type-busers.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'loginsuccess', component:LoginsuccessComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'registrationsuccess', component:RegistrationsuccessComponent},
  {path:'typeAusers', component:TypeAusersComponent},
  {path:'typeBusers', component:TypeBusersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
