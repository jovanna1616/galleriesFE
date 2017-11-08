import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './../../../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public user = new User();
  constructor(private authService: AuthService, private router: Router) { }

  registerUser()
  {
  	this.authService.register(this.user)
  		.subscribe(
  			() => {
  				this.router.navigateByUrl('/');
  			},
		    (err: HttpErrorResponse) => {
		    	alert(`${err.error.error}`);
		    }
  		);
  }
  ngOnInit() {
  }

}
