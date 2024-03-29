import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {path:"Eltistore" , component: StoreComponent }
];


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class StoreModule { }
