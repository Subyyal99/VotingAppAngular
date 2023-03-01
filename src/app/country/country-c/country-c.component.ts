import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/libs/country.service';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'app-country-c',
  templateUrl: './country-c.component.html',
  styleUrls: ['./country-c.component.css'],
})
export class CountryCComponent implements OnInit {
  vote: number = 0;
  show: boolean = true;
  winner: any = '';
  constructor(public data: dataService, public countryS: CountryService) {}
  ngOnInit(): void {
    console.log('here', this.data.Candidate);
    this.countryS.CountryResult = [];
    this.data.Candidate.filter((a) => {
      if (a.country_position != null && a.country_position != 'N/A') {
        var obj = {
          id: a.id,
          firstname: a.firstname,
          lastname: a.lastname,
          country_position: a.country_position,
          vote: 0,
        };
        this.countryS.CountryResult.push(obj);
      }
    });
    // console.log(dataSource)
    console.log('hello', this.countryS.CountryResult);
  }
  AddVote(id: number) {
    console.log(id);
    this.countryS.CountryResult.forEach((e) => {
      if (e.id == id) {
        e.vote = e.vote + 1;
        return;
      }
    });
  }
  closePolling() {
    this.countryS.close = !this.countryS.close;
    console.log(this.countryS.close);
    const max = this.countryS.CountryResult.reduce(function (prev, current) {
      return prev.vote > current.vote ? prev : current;
    });
    // this.winner =
    //   max.firstname +
    //   ' ' +
    //   max.lastname +
    //   ' ' +
    //   max.country_position +
    //   ' ' +
    //   max.vote;
    this.countryS.CountryWinner = max;
    // console.log(this.countryS.CountryWinner);
    // console.log(this.countryS.CityResult);
  }
}
