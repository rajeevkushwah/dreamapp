import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ThemeRoutingModule } from './theme.routing';



import { ThemeService } from "./theme.service";
import { ThemeComponent } from './theme.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { FormComponent } from './../contact/form/form.component';
import { ListingComponent } from './../contact/listing/listing.component';

import { AppSharedModule } from '../shared/app-shared.module';

@NgModule({
  imports: [    
    ThemeRoutingModule,    
    CommonModule,
    AppSharedModule
  ],
  providers: [ThemeService],
  declarations: [ThemeComponent, HeaderComponent, SidebarComponent,FormComponent,ListingComponent]
})
export class ThemeModule { }
