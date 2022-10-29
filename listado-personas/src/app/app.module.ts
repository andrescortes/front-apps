import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PersonaComponent} from './people/persona/persona.component';
import {FormularioComponent} from './people/formulario/formulario.component';
import {LoggingService} from './LoggingService.service';
import {PersonasService} from './persona.service';
import {AppRoutingModule} from './app-routing.module';
import {PeopleComponent} from './people/people.component';
import {ErrorComponent} from './error/error.component';
import {DataServices} from './data.services';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {LoginGuardService} from './login/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PeopleComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    PersonasService,
    DataServices,
    LoginService,
    LoginGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
