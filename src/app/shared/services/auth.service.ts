import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';

@Injectable()
export class AuthService {
	user: User;
  constructor(private httpClient: HttpClient ) { }

}
