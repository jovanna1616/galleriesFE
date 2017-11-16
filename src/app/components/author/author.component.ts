import { Component, OnInit } from '@angular/core';
import { Gallery } from './../../shared/models/gallery';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from './../../shared/services/galleries.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
	public gallery: Gallery;
	private id: number;
  constructor(private route: ActivatedRoute, private galleriesService: GalleriesService) {
  	// this.id = route.snapshot.params['id'];
  	// this.galleriesService.getGalleryById(this.id).subscribe(gallery => {this.gallery = gallery});
   //  console.log(this.gallery);
 }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      params => {this.galleriesService.getGalleryById(this.id).subscribe(gallery => this.gallery = gallery)});
  }
}
