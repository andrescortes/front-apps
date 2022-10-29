import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {PersonComponent} from './person/person.component';
import {FormPersonComponent} from './form-person/form-person.component';
import {FormsumComponent} from './formsum/formsum.component';
import {ResultComponent} from './result/result.component';
import {LoggingService} from "./LoggingService.service";
import {PeopleService} from "./people.service";

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormPersonComponent,
    FormsumComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggingService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
