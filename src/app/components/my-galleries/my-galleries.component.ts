import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-my-galleries',
  templateUrl: './my-galleries.component.html',
  styleUrls: ['./my-galleries.component.css']
})
export class MyGalleriesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
