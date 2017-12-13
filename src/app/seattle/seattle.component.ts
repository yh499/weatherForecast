import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  city = 'Seattle';
  humidity;
  tempAvg;
  tempHigh;
  tempLow;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
      this._dataService.getWeatherInfo(this.city, (data) => {
      console.log(data);
      this.humidity = data.main.humidity;
      this.tempAvg = data.main.temp;
      this.tempHigh = data.main.temp_max;
      this.tempLow = data.main.temp_min;
    });
  }

}