import { Component, OnInit } from '@angular/core';
import { CityAService } from 'src/libs/cityA.service';
import { CountryService } from 'src/libs/country.service';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'city-a-vote',
  templateUrl: 'city-a-vote.html',
  styleUrls: ['city-a-vote.css'],
})
export class CityAVote implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityA: CityAService,
    public data: dataService,
    public country: CountryService
  ) {}
  ngOnInit(): void {
    this.cityA.CityReuslt = [];

    this.data.Candidate.filter((a) => {
      if (a.city_position != null && a.city != null && a.city == 'A') {
        var obj = {
          id: a.id,
          firstname: a.firstname,
          lastname: a.lastname,
          city: a.city,
          city_position: a.city_position,
          vote: 0,
        };
        this.cityA.CityReuslt.push(obj);
      }
    });
  }
  AddVote(id: number) {
    console.log(id);
    this.cityA.CityReuslt.forEach((e) => {
      if (e.id == id) {
        e.vote = e.vote + 1;
        return;
      }
    });
  }
  closePolling() {
    this.cityA.close = !this.cityA.close;
    const max = this.cityA.CityReuslt.reduce(function (prev, current) {
      return prev.vote > current.vote ? prev : current;
    });
    // console.log(max);
    // this.winner =
    //   max.firstname +
    //   ' ' +
    //   max.lastname +
    //   ' ' +
    //   max.city_position +
    //   ' ' +
    //   max.vote;
    this.cityA.CityWinner = max;
    this.country.CityResult[0].cityA = max;
  }
}
