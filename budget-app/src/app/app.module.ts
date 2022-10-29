import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {IncomeComponent} from './income/income.component';
import {ExpenditureComponent} from './expenditure/expenditure.component';
import {FormComponent} from './form/form.component';
import {IncomeService} from "./income/income.service";
import {ExpenditureService} from "./expenditure/expenditure.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncomeComponent,
    ExpenditureComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    IncomeService,
    ExpenditureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
