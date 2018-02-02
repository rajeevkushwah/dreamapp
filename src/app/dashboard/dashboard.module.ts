import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';


import { DashboardService } from "./dashboard.service";

import {CurrencyPipe} from '@angular/common'
declare var require: any;

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [DashboardService, CurrencyPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {
}
