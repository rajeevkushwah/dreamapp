import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomFormsModule } from 'ng2-validation'

import { AppRoutingModule } from './app-routing';

import { AppSharedModule } from './shared/app-shared.module';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { CommonService } from './services/common.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent  
   
  ],
  imports: [
     AppRoutingModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    AppSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
