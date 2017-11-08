import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';

@Injectable()
export class AuthService {
	user: User;
	public isAuthenticated: boolean;

  constructor(private http: HttpClient ) {
  	this.isAuthenticated = !!window.localStorage.getItem('loginToken');
 }
  public getRequestHeaders()
    {
      return new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
    }

  register(user) {
  	return new Observable((o: Observer<any>) => {
    	this.http.post('http://localhost:8000/api/register', {
  			first_name: user.firstName,
			  last_name: user.lastName,
			  email: user.email,
			  password: user.password,
        password_confirmation: user.passwordConfirm,
			  accepted_terms: user.acceptedTerms
  	  	})
        .subscribe(
          (data: {token: string}) => {
          	window.localStorage.setItem('loginToken', data.token);
          	this.isAuthenticated = true;

            o.next(data.token);
            return o.complete();
          },
          (err) => {
          	// samo proslediti
          	return o.error(err);
          }
        );
    });
  }

  public login(email: string, password: string)
  {
  	return new Observable((o: Observer<any>) => {
    	this.http.post('http://localhost:8000/api/login', {
  			'email': email,
  			'password': password
  	  	})
	        .subscribe(
	          (data: {token: string}) => {
	          	window.localStorage.setItem('loginToken', data.token);
	          	this.isAuthenticated = true;

	            o.next(data.token);
	            return o.complete();
	          },
	          (err) => {
	          	return o.error(err);
	          }
	        );
    });
  }

  public logout()
  {
  	window.localStorage.removeItem('loginToken');
  	this.isAuthenticated = false;	
  }
}
