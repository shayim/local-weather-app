export interface IpFindJson {
  ip_address: string
  country: string
  country_code: string
  continent: string
  continent_code: string
  city: string
  county: string
  region: string
  region_code: string
  timezone: string
  owner: string
  longitude: number
  latitude: number
  currency: string
  languages: string[]
}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class IpAddressService {
  appid = 'dbfdbf27-f10b-4530-b0f0-8e2c1a360bb3'
  url = `https://ipfind.co/me?auth=${this.appid}`

  constructor(private http: HttpClient) {}

  getCity(): Observable<Object> {
    return this.http.get(this.url).pipe(
      map((data: IpFindJson) => ({
        city: data.city,
        country: data.country,
        countryCode: data.country_code,
      })),
      catchError(err => {
        console.log(err)
        return `fetch ${this.url} failed.`
      })
    )
  }

  handleError(error) {}
}
