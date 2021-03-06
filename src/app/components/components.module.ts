import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {  MatSidenavModule} from '@angular/material/sidenav'
import {   MatListModule } from '@angular/material/list'

import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';

@NgModule({
  declarations: [
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],
  exports: [
    UserComponent,
    RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class ComponentsModule { }
