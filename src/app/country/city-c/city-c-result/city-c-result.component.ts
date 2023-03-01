import { Component, OnInit } from '@angular/core';
import { CityCService } from 'src/libs/cityC.service';
import { CountryService } from 'src/libs/country.service';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'app-city-c-result',
  templateUrl: './city-c-result.component.html',
  styleUrls: ['./city-c-result.component.css']
})
export class CityCResultComponent implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityC: CityCService,
    public data: dataService,
    public country: CountryService
  ) {}
  ngOnInit(): void {}

}
