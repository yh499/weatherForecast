import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }



  getWeatherInfo(city, callback) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f5359e269d8149ca62d5314af9699b6f`).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => { console.log(err); }
    );
  }
}



