import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
         

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    ProfileComponent,
    UsersComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/