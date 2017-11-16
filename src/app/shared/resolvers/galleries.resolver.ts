import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GalleriesService } from './../services/galleries.service';
 
@Injectable()
export class GalleriesResolver implements Resolve<any> {
  constructor(private contactService: GalleriesService) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = parseInt(route.paramMap.get('id'));
 
    return this.contactService.getGalleryById(id);
  }
}
