import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './services/auth-guard.service';


export const appRoutes: Routes = [
  
  {
    path: '',
    loadChildren: 'app/theme/theme.module#ThemeModule'
    
  }
  // {
  //   path: '**',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true}),HttpModule ],
  exports: [ RouterModule,HttpModule ]
})
export class AppRoutingModule { }
