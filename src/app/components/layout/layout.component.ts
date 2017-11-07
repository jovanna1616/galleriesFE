import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private auth: AuthService ) { }

  public logout() {
  	this.auth.logout();
  	console.log('jjjjjjjj');
  		
  }
  ngOnInit() {
  }

}
