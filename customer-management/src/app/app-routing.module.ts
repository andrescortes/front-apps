import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {BoardComponent} from "./components/board/board.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {CustomerEditComponent} from "./components/customer-edit/customer-edit.component";
import {NoFoundComponent} from "./components/no-found/no-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {ConfigurationGuard} from "./guards/configuration.guard";

const routes: Routes = [
  {path: '', component: BoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate:[ConfigurationGuard]},
  {path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard]},
  {path: 'customer/edit/:id', component: CustomerEditComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
