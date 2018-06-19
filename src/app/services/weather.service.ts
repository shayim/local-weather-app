export interface OpenWeatherMapJson {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  base: string
  main: {
    temp: number
    pressure: number
    humidity: number
    temp_min: number
    temp_max: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
  }
  id: number
  name: string
  cod: 200
}

export interface IWeatherService {
  getCurrent: () => Observable<ICurrentWeather>
}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { ICurrentWeather } from '../models/current-weather.interface'
import { IpAddressService } from './ip-address.service'

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements IWeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather?'
  appId = 'bc3a6b1fa0d1298825bca3693c80c236'
  constructor(private http: HttpClient, private ips: IpAddressService) {}

  getCurrent(): Observable<ICurrentWeather> {
    return this.ips.getCity().pipe(
      switchMap(city => {
        const query = [`q=${city}`, `appid=${this.appId}`, 'units=metric']
        return this.http.get(this.url + query.join('&'))
      }),
      map((data: OpenWeatherMapJson) => {
        const {
          name: city,
          sys: { country },
          dt,
          weather: [{ description, icon: image }],
          main: { temp: temperature },
        } = data

        return {
          city,
          country,
          date: dt,
          image: `https://openweathermap.org/img/w/${image}.png`,
          temperature,
          description,
        } as ICurrentWeather
      })
    )
  }
}