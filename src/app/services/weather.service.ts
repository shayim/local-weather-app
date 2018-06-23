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
  private appId = 'bc3a6b1fa0d1298825bca3693c80c236'
  constructor(private http: HttpClient, private ips: IpAddressService) {}

  searchByCityNameOrZipcode(query: string): Observable<ICurrentWeather> {
    if (isNaN(parseInt(query, 10))) {
      return this.getForecastByCity(query)
    }

    return this.getForecastByZip(query)
  }

  getForecastByCity(name: string, countryCode?: string) {
    const q = countryCode ? `${name},${countryCode}` : `${name}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${
      this.appId
    }&units=metric`
    return this.getForcast(url)
  }

  getForecastByZip(code: string) {
    return this.ips.getCity().pipe(
      switchMap((data: any) => {
        const zip = data.countryCode ? `${code},${data.countryCode}` : `${code},us`
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}}&appid=${
          this.appId
        }&units=metric`
        return this.getForcast(url)
      })
    )
  }

  getForcastByCoords(lat: string, lon: string) {
    const q = `lat=${lat}&lon=${lon}`
    const url = `https://api.openweathermap.org/data/2.5/weather?${q}&appid=${
      this.appId
    }&units=metric`
    return this.getForcast(url)
  }

  getCurrent(): Observable<ICurrentWeather> {
    return this.ips.getCity().pipe(
      switchMap((data: any) => {
        return this.getForecastByCity(data.city, data.countryCode)
      })
    )
  }

  private getForcast(url: string) {
    return this.http.get(url).pipe(
      map((data: OpenWeatherMapJson) => {
        const {
          name: city,
          sys: { country },
          dt,
          weather: [{ description, icon }],
          main: { temp: temperature },
        } = data

        return {
          city,
          country,
          date: dt * 1000,
          image: `https://openweathermap.org/img/w/${icon}.png`,
          temperature,
          description,
        } as ICurrentWeather
      })
    )
  }
}
