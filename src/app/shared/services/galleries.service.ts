import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Gallery } from './../models/gallery';
import { User } from './../models/user';
import { Image } from './../models/image';
import 'rxjs/Rx';

@Injectable()
export class GalleriesService {
	private galleries: Array<Gallery> = [];
  private users: Array<User> = [];
  private images: Array<Image> = [];
  private data: Array<any> = [];

  constructor(private http: HttpClient) { }

  // public allData() {
  //   return new Observable((o: Observer<any>) => {
  //     this.http.get('http://localhost:8000/api/galleries')
  //     .subscribe(
  //        (galleries) => {
  //         galleries['data'].forEach(g => {
  //           this.galleries.push(new Gallery(
  //             g.id,
  //             g.name,
  //             g.description,
  //             g.user_id,
  //             g.created_at,
  //             g.updated_at
  //           )),
  //           this.users.push(new User(
  //             g['user'].id,
  //             g['user'].first_name,
  //             g['user'].last_name
  //           )),
  //           this.images.push(new Image(
  //             g['images'].id,
  //             g['images'].list,
  //             g['images'].gallery_id
  //           ));
  //         });
  //         o.next(this.galleries);
  //         o.next(this.users);
  //         o.next(this.images);
  //         return o.complete();
  //       }
  //    );
  //   });
  // }
  // public getGalleries() {
  //   return new Observable((o: Observer<any>) => {
  //     this.http.get('http://localhost:8000/api/galleries')
  //       .subscribe(
  //       (galleries) => {
  //         galleries['data'].forEach(g => {
  //           this.galleries.push(new Gallery(
  //             g.id,
  //             g.name,
  //             g.description,
  //             g.user_id,
  //             g.created_at,
  //             g.updated_at
  //           ));
  //         });
  //       });
  //     o.next(this.galleries);
  //     return o.complete();
  //   });
  // }

  // public getUsers() {
  //   return new Observable((o: Observer<any>) => {
  //     this.http.get('http://localhost:8000/api/authors')
  //       .subscribe(
  //       (users) => {
  //         users[0].forEach(u => {
  //           this.users.push(new User(
  //             u.id,
  //             u.first_name,
  //             u.last_name
  //           ));
  //         });
  //       });
  //     o.next(this.users);
  //     return o.complete();
  //   });
  // }  
  public allData() {
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/galleries')
      .subscribe(
         (galleries) => {
          galleries['data'].forEach(g => {
            this.galleries.push(new Gallery(
              g.id,
              g.name,
              g.description,
              g.user_id,
              g.created_at,
              g.updated_at,
              g.user.first_name,
              g.user.last_name,
              g.images
            ));
            // console.log(g.images);
          });
          o.next(this.galleries);
          return o.complete();
        }
     );
    });
  }
}
