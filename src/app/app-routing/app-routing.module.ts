import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './../components/auth/login/login.component';
import { RegisterComponent } from './../components/auth/register/register.component';
import { AllGalleriesComponent } from './../components/all-galleries/all-galleries.component';
import { MyGalleriesComponent } from './../components/my-galleries/my-galleries.component';
import { CreateNewGalleryComponent } from './../components/create-new-gallery/create-new-gallery.component';
import { GuestGuard } from '../shared/guards/guest.guard';
import { AuthGuard } from '../shared/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'all-galleries',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [GuestGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [GuestGuard],
    component: RegisterComponent
  },
  {
    path: 'all-galleries',
    canActivate: [AuthGuard],
    component: AllGalleriesComponent
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
