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
  arr:any={address:[{name:"item"}],
          phone:[{name:"item"}],
          email:[{name:"item"}]};
  constructor(
  
    public router: Router
  ) { }

  ngOnInit() {
   
   
  }



addNewRow(array:string) {
    
    this.arr[array].push({name:"item"});
}

deleteRow(array:string,index: number) {    
    //this.arr.removeAt(index);
    this.arr[array].splice(index,1)
}
 

}
