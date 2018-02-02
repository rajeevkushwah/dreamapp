import { Component, OnInit,ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit {
  itemID = null;
  item: any = {};
  isEditable: boolean = false;
  busy: Promise<any>;
  
  image: any = ''
  moduleTypes: any = [];
  language: any;
  previewImage: any;
  constructor(
  
    public router: Router
  ) { }

  ngOnInit() {
   
   
  }

 

}
