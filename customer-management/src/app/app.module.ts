import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule, SETTINGS} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {FlashMessagesModule} from "angular2-flash-messages";
import {FormsModule} from "@angular/forms";


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BoardComponent} from './components/board/board.component';
import {CustomersComponent} from './components/customers/customers.component';
import {CustomerEditComponent} from './components/customer-edit/customer-edit.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ConfigurationComponent} from './components/configuration/configuration.component';
import {NoFoundComponent} from './components/no-found/no-found.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {CustomerService} from "./service/customer.service";
import {LoginService} from "./service/login.service";
import {AuthGuard} from "./guards/auth.guard";
import {ConfigurationService} from "./service/configuration.service";
import {ConfigurationGuard} from "./guards/configuration.guard";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    CustomersComponent,
    CustomerEditComponent,
    LoginComponent,
    RegisterComponent,
    ConfigurationComponent,
    NoFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'customer-management-185ec'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()

  ],
  providers: [
    CustomerService,
    LoginService,
    AuthGuard,
    ConfigurationService,
    ConfigurationGuard,
    {
      provide: SETTINGS,
      useValue: {},
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
