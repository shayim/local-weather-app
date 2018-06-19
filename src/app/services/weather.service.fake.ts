import { Observable, of } from 'rxjs'
import { ICurrentWeather } from './../models/current-weather.interface'
import { IWeatherService } from './weather.service'

export class FakeWeatherService implements IWeatherService {
  getCurrent(): Observable<ICurrentWeather> {
    const current = {
      city: 'Shanghai',
      country: 'Cn',
      image: 'https://openweathermap.org/img/w/02d.png',
      date: Math.floor(new Date().valueOf()),
      temperature: 31.2,
      description: 'cloudy',
    } as ICurrentWeather

    return of(current)
  }
}
