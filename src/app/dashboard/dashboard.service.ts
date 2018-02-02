import { NgModule, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';



@Injectable()
export class DashboardService  {

  constructor(
    private _router: Router,
    public http: Http
   ) {
     
  }
}
