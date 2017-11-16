import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from './../../shared/models/gallery';
import { Comment } from './../../shared/models/comment';
import { GalleriesService } from './../../shared/services/galleries.service';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit {
  public gallery: Gallery;
  id: number;

  constructor(
    private route: ActivatedRoute, 
    private galleriesService: GalleriesService, 
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      params => {
        this.galleriesService.getGalleryById(this.id)
        .subscribe(gallery => this.gallery = gallery)
    });
  }
  submitComment(comment: Comment) {
    this.galleriesService.addComment(comment)
    .subscribe();
  }
}
