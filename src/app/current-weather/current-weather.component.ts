import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../models/current-weather.interface'
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(public ws: WeatherService) {}

  ngOnInit() {
    this.ws.getCurrent().subscribe(data => {
      this.current = data
    })
  }
}
