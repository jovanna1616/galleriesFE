import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from './../../shared/models/gallery';
import { User } from './../../shared/models/user';
import { GalleriesService } from './../../shared/services/galleries.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gallery-row',
  templateUrl: './gallery-row.component.html',
  styleUrls: ['./gallery-row.component.css']
})
export class GalleryRowComponent implements OnInit {
	@Input() gallery;
  constructor(private galleriesService: GalleriesService) { }

  ngOnInit() {
  }
}
