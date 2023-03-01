import { Component, OnInit } from '@angular/core';
import { CityBService } from 'src/libs/cityB.service';
import { CountryService } from 'src/libs/country.service';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'city-b-vote',
  templateUrl: 'city-b-vote.html',
  styleUrls: ['city-b-vote.css'],
})
export class CityBVote implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityB: CityBService,
    public data: dataService,
    public country: CountryService
  ) {}
  ngOnInit(): void {
    this.cityB.CityReuslt = [];

    this.data.Candidate.filter((a) => {
      if (a.city_position != null && a.city != null && a.city == 'B') {
        var obj = {
          id: a.id,
          firstname: a.firstname,
          lastname: a.lastname,
          city: a.city,
          city_position: a.city_position,
          vote: 0,
        };
        this.cityB.CityReuslt.push(obj);
      }
    });
  }
  AddVote(id: number) {
    console.log(id);
    this.cityB.CityReuslt.forEach((e) => {
      if (e.id == id) {
        e.vote = e.vote + 1;
        return;
      }
    });
  }
  closePolling() {
    this.cityB.close = !this.cityB.close;
    const max = this.cityB.CityReuslt.reduce(function (prev, current) {
      return prev.vote > current.vote ? prev : current;
    });
    console.log(max);
    this.winner =
      max.firstname +
      ' ' +
      max.lastname +
      ' ' +
      max.city_position +
      ' ' +
      max.vote;
    this.cityB.CityWinner = max;
    this.country.CityResult[1].cityB = max;
  }
}
