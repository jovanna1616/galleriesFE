import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-create-new-gallery',
  templateUrl: './create-new-gallery.component.html',
  styleUrls: ['./create-new-gallery.component.css']
})
export class CreateNewGalleryComponent implements OnInit {
	

  constructor(private auth: AuthService) { }

  
  ngOnInit() {
  }

}
