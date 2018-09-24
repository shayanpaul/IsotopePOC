import { Routes, RouterModule }   from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component'; 

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/admin/users',
    pathMatch: 'full'
  },{
    path: 'dashboard',
    redirectTo: '/dashboard/admin/users',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
      path : 'admin',
      component: AdminComponent,
      children:[
          {
           path : 'users',
           component: UsersComponent
          },
          {
           path : 'profile',
           component: ProfileComponent
          }
       ]
      }
    ]
  }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/