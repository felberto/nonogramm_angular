import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_API_URL} from "../../app.constants";
import {Game} from "../models/game";

@Injectable()

export class GameService {

  constructor(private http: HttpClient) {
  }

  getAllByType(type: string): Observable<HttpResponse<Game[]>> {
    return this.http.get<Game[]>(SERVER_API_URL + `/game/type/${type}`, {observe: 'response'});
  }
}
