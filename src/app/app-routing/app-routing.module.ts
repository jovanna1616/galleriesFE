import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './../components/auth/login/login.component';
import { RegisterComponent } from './../components/auth/register/register.component';
import { AllGalleriesComponent } from './../components/all-galleries/all-galleries.component';
import { MyGalleriesComponent } from './../components/my-galleries/my-galleries.component';
import { CreateNewGalleryComponent } from './../components/create-new-gallery/create-new-gallery.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllGalleriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
  	CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class AppRoutingModule { }
