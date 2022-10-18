import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**', //en angular es con ** en vez de en blanco
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule //no se necesita en nuestro caso
    //ha hablado algo de ng for que no vamos a hacer
    RouterModule.forRoot (routes) //si da error es posible que necesite importacion
  ],
  exports: [
    RouterModule //necesario para importarlo en app.module.ts
  ]
})
export class AppRoutingModule { }
