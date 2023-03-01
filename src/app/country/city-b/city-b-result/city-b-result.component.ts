import { Component, OnInit } from '@angular/core';
import { CityBService } from 'src/libs/cityB.service';
import { CountryService } from 'src/libs/country.service';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'app-city-b-result',
  templateUrl: './city-b-result.component.html',
  styleUrls: ['./city-b-result.component.css'],
})
export class CityBResultComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityB: CityBService,
    public data: dataService,
    public country: CountryService
  ) {}
  ngOnInit(): void {}
}
