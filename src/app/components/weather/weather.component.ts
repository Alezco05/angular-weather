import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  weather;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  getWeather(cityName: string, countryName: string) {
    this.weatherService.getWeather(cityName, countryName).subscribe(
      resp => {this.weather = resp; console.log(this.weather)},
      err => console.log(err)
    );
  }

  submitLocation(cityName: HTMLInputElement, countryName: HTMLInputElement) {
    this.getWeather(cityName.value, countryName.value);
    cityName.value = "";
    countryName.value = "";
    cityName.focus();
    return false;
  }
}
