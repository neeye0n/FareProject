import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint = '';
  constructor(private _http: HttpClient) { }

  public chargeFare(cardId: string): Observable<any> {
    this.endpoint = environment.api.chargeFare;
    let body = {
      cardId: cardId,
      lineId: environment.lineId,
      stationId: environment.stationId
    }
    return this._http.post(this.endpoint, body);
  }
}