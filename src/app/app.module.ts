import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentFirstComponent } from './component-first/component-first.component';
import { DevelopComponent } from './develop/develop.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeSearchComponent } from './home-search/home-search.component';
=======
import { RegistrationComponent } from './registration/registration.component';
>>>>>>> 8150eb5e854184881085c2abdda3affe64077516

@NgModule({
  declarations: [
    AppComponent,
    ComponentFirstComponent,
    DevelopComponent,
<<<<<<< HEAD
    LoginComponent,
ForgotPasswordComponent,
HomeSearchComponent
=======
    RegistrationComponent
>>>>>>> 8150eb5e854184881085c2abdda3affe64077516
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
