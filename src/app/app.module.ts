import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule,Routes} from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
const routes: Routes = [
  { path: '', component: MissionlistComponent }
  ,
  {path:'details/:id',component: MissiondetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
