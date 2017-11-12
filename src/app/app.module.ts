import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AllGalleriesComponent } from './components/all-galleries/all-galleries.component';
import { MyGalleriesComponent } from './components/my-galleries/my-galleries.component';
import { CreateNewGalleryComponent } from './components/create-new-gallery/create-new-gallery.component';
import { CustomFormsModule } from 'ng2-validation';
import { GalleriesService } from './shared/services/galleries.service';
import { EditGalleryComponent } from './components/edit-gallery/edit-gallery.component';
import { AuthorComponent } from './components/author/author.component';
import { SingleGalleryComponent } from './components/single-gallery/single-gallery.component';
import { GalleryRowComponent } from './components/gallery-row/gallery-row.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AllGalleriesComponent,
    MyGalleriesComponent,
    CreateNewGalleryComponent,
    EditGalleryComponent,
    AuthorComponent,
    SingleGalleryComponent,
    GalleryRowComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    NgxPaginationModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [GalleriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
