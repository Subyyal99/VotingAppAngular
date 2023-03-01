import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  CountryResult: any[] = [];

  CityResult: any[] = [
    {
      cityA: {},
    },
    {
      cityB: {},
    },
    {
      cityC: {},
    },
  ];
  CountryWinner: any = {};
  close: boolean = true;
}
