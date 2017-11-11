import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Gallery } from './../models/gallery';
import 'rxjs/Rx';

import { User } from './../models/user';

@Injectable()
export class GalleriesService {
	private galleries: Array<Gallery> = [];
  private user: Array<User> = [];

  constructor(private http: HttpClient) { }

    public getGalleries() {
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/galleries')
        .subscribe(
        (galleries) => {
          galleries['data'].forEach(g => {
            this.galleries.push(new Gallery(
              g.id,
              g.name,
              g.description,
              g.userId,
              g.createdAt,
              g.updatedAt,
            ));
          });
        });
          o.next(this.galleries);
          return o.complete();
        });
    }
}
