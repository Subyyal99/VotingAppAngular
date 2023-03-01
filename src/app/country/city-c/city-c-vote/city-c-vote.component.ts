import { Component, OnInit } from '@angular/core';
import { CityCService } from 'src/libs/cityC.service';
import { CountryService } from 'src/libs/country.service';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'city-c-vote',
  templateUrl: 'city-c-vote.html',
  styleUrls: ['city-c-vote.css'],
})
export class CityCVote implements OnInit {
  show: boolean = true;
  winner: any = '';
  constructor(
    public cityC: CityCService,
    public data: dataService,
    public country: CountryService
  ) {}
  ngOnInit(): void {
    this.cityC.CityReuslt = [];

    this.data.Candidate.filter((a) => {
      if (a.city_position != null && a.city != null && a.city == 'C') {
        var obj = {
          id: a.id,
          firstname: a.firstname,
          lastname: a.lastname,
          city: a.city,
          city_position: a.city_position,
          vote: 0,
        };
        this.cityC.CityReuslt.push(obj);
      }
    });
  }
  AddVote(id: number) {
    console.log(id);
    this.cityC.CityReuslt.forEach((e) => {
      if (e.id == id) {
        e.vote = e.vote + 1;
        return;
      }
    });
  }
  closePolling() {
    this.cityC.close = !this.cityC.close;
    // this.show = !this.show;
    const max = this.cityC.CityReuslt?.reduce(function (prev, current) {
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
    this.cityC.CityWinner = max;
    this.country.CityResult[2].cityC = max;
  }
}
