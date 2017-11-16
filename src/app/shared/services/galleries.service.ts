import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Gallery } from './../models/gallery';
import { User } from './../models/user';
import { Image } from './../models/image';
import { Comment } from './../models/comment'; 
import 'rxjs/Rx';

@Injectable()
export class GalleriesService {
	private galleries: Array<Gallery> = [];
  private gallery: Array<Gallery> = [];
  private users: Array<User> = [];
  private images: Array<Image> = [];
  private comments: Array<Comment> = [];
  private data: Array<any> = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

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
      });
    });
  }

  public getGalleryById(id: number): Observable<Gallery> {
    return this.allData()
      .map(galleries => galleries.find(gallery => gallery.id == id));
  }
  public addComment(comment) {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/comments', {
        'text' : comment.text,
      },
      {
        headers: this.authService.getRequestHeaders(),
      }
      )
      .subscribe(
       (c: any) => {
            let newC = new Comment(c.id, c.text, c.authorId);
            this.comments.push(newC);
            o.next(newC);
            return o.complete();
          }
      );
    });
  }
  
  public removeGallery(gallery: Gallery)
  {
    return new Observable((o: Observer<any>) => {
      this.http.delete('http://localhost:8000/api/galleries/' + gallery.id,
        {
          headers: this.authService.getRequestHeaders(),
        })
        .subscribe(
          () => {
            const index = this.galleries.indexOf(gallery);
            this.galleries.splice(index, 1);
            o.next(index);
            return o.complete();
          }
        );
    });
  }
}
