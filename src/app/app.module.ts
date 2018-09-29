import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent,
    UsersListComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
