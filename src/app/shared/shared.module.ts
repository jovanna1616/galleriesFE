import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { GalleriesResolver } from './resolvers/galleries.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthService,
    AuthGuard,
    GuestGuard,
    GalleriesResolver
  ]
})
export class SharedModule { }
