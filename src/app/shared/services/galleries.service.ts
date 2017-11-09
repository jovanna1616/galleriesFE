import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Gallery } from './../models/gallery';

@Injectable()
export class GalleriesService {
	private galleries: Array<Gallery> = [];

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
              g.description
            ));
          });
        });
          o.next(this.galleries);
          return o.complete();
        });
    }

}
