import { Component, OnInit } from '@angular/core';
import { CityAService } from 'src/libs/cityA.service';
import { CountryService } from 'src/libs/country.service';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'app-city-a-result',
  templateUrl: './city-a-result.component.html',
  styleUrls: ['./city-a-result.component.css'],
})
export class CityAResultComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityA: CityAService,
    public data: dataService,
    public country: CountryService
  ) {}
  ngOnInit(): void {}
}
