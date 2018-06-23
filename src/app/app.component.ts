import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from './models/current-weather.interface'
import { WeatherService } from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  current: ICurrentWeather
  constructor(private ws: WeatherService) {}
  ngOnInit() {
    this.ws.getCurrent().subscribe(data => {
      this.current = data
    })
  }
  onSearch(query: string) {
    this.ws.searchByCityNameOrZipcode(query).subscribe(data => (this.current = data))
  }
}
