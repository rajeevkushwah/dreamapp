import { Component, OnInit } from '@angular/core';

import { DashboardService } from "./dashboard.service";

import {CurrencyPipe} from '@angular/common'


import * as moment from 'moment';
import * as $ from 'jquery';
import {Observable} from "rxjs"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

  async ngOnInit() {

   }



  

}
