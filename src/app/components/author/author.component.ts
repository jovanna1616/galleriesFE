import { Component, OnInit } from '@angular/core';
import { User } from './../../shared/models/user';
import { GalleriesService } from './../../shared/services/galleries.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
	public user: User;
  constructor(private galleriesService: GalleriesService) { }

  ngOnInit() {
  }

}
