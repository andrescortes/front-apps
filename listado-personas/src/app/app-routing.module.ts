import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {FormularioComponent} from './people/formulario/formulario.component';
import {ErrorComponent} from './error/error.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './login/login-guard.service';

const routes: Routes = [
  {path: '', component: PeopleComponent, canActivate: [LoginGuardService]},
  {
    path: 'people', component: PeopleComponent, canActivate: [LoginGuardService], children: [
      {path: 'add', component: FormularioComponent},
      {path: 'edit/:id', component: FormularioComponent}
    ]
  },
  // path login
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
