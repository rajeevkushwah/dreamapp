import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


import { CommonService} from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-sidebar',
  providers: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
private subscription: Subscription;

  constructor(
  ) { }

  ngOnInit() {
    
  }

  



}
