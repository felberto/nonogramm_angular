import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Highscore} from "../models/highscore";
import {SERVER_API_URL} from "../../app.constants";

@Injectable()

export class HighscoreService {
  constructor(private http: HttpClient) {
  }

  getAllByType(type: string): Observable<HttpResponse<Highscore[]>> {
    return this.http.get<Highscore[]>(SERVER_API_URL + `/highscore/type/${type}`, {observe: 'response'});
  }

  save(highscore: Highscore): Observable<HttpResponse<Highscore>> {
    return this.http.post<Highscore>(SERVER_API_URL + '/highscore', highscore, {observe: 'response'});
  }
}
