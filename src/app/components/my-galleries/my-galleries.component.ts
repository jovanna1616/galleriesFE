import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from './../../shared/models/gallery';
import { GalleriesService } from './../../shared/services/galleries.service';
@Component({
  selector: 'app-my-galleries',
  templateUrl: './my-galleries.component.html',
  styleUrls: ['./my-galleries.component.css']
})
export class MyGalleriesComponent implements OnInit {
	private gallery: Gallery;
  constructor(private route: ActivatedRoute, private galleriesService: GalleriesService) { }

  ngOnInit() {
  	// this.route.data
   //    .subscribe((data: {gallery: Gallery}) => {
   //      this.gallery = data.gallery;
   //    });
  }

}
