import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemeComponent } from './theme.component';
import { FormComponent } from './../contact/form/form.component';
import { ListingComponent } from './../contact/listing/listing.component';
const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'form',
        component: FormComponent
        
      },
      {
        path: 'listing',
        component: ListingComponent
        
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThemeRoutingModule { }
