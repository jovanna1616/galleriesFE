import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { GalleriesService } from './../../shared/services/galleries.service';
import { Gallery } from './../../shared/models/gallery';

@Component({
  selector: 'app-all-galleries',
  templateUrl: './all-galleries.component.html',
  styleUrls: ['./all-galleries.component.css']
})
export class AllGalleriesComponent implements OnInit {
	public galleries;

  constructor(private auth: AuthService, private galleriesService: GalleriesService) { }

  ngOnInit() {
  	this.galleriesService.allData().subscribe(data => {this.galleries = data});
    }

}
