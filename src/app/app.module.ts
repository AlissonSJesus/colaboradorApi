import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradorAddComponent } from './colaborador-add/colaborador-add.component';
import { ColaboradorEditComponent } from './colaborador-edit/colaborador-edit.component';
import { ColaboradorGetComponent } from './colaborador-get/colaborador-get.component';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradorAddComponent,
    ColaboradorEditComponent,
    ColaboradorGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
