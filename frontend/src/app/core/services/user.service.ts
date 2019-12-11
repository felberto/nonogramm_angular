import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {SERVER_API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  save(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(SERVER_API_URL + '/user', user, {observe: 'response'});
  }
}
