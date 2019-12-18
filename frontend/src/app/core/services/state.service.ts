import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {SaveGame} from "../models/save-game";
import {Observable} from "rxjs";
import {SERVER_API_URL} from "../../app.constants";

@Injectable()
export class StateService {

  constructor(private http: HttpClient) {
  }

  save(saveGame: SaveGame): Observable<HttpResponse<SaveGame>> {
    return this.http.post<SaveGame>(SERVER_API_URL + '/save', saveGame, {observe: 'response'});
  }

  getByUser(username: string): Observable<HttpResponse<SaveGame>> {
    return this.http.get<SaveGame>(SERVER_API_URL + `/save/${username}`, {observe: 'response'});
  }

  delete(userId: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(SERVER_API_URL + `/save/${userId}`, {observe: 'response'});
  }
}
