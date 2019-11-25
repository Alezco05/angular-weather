import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URL: string;
  apiKey: string;
  constructor(private httpClient: HttpClient) {
    this.URL = 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey = '7a14aabf0ecbe0c414dd10231690cdef';
   }
  getWeather(city: string, country: string ){
    return this.httpClient.get(this.URL + `?q=${city},${country}&units=metric&appid=${this.apiKey}`);
  }
}
