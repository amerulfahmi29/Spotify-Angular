import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';;


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  getHeading(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQA_eeet_Mh5FdBWxmP7DjurVhHFfSotK6GbroXhDvrWbGt12Y8FmDq8ifE-2HZeS2WPCG9Mn4LoR2WnGz25SltFbpBPJiNzgEgtFJG76UG6hZjBB1DYzaI08b0hgq9izFQg4V378_Be8PnaPpRxgM9-seuvSWSFcA');

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) { }

  searchMusical(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = str + param;
    return this.getHeading(query);
  }
  getArtiste(id: string) {
    const query = 'artists/${id}';
    return this.getArtiste(query);
  }
}

