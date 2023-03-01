import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/libs/country.service';

@Component({
  selector: 'result',
  templateUrl: 'result.html',
  styleUrls: ['result.css'],
})
export class Result implements OnInit {
  Object = Object
  constructor(public result: CountryService) {}
  ngOnInit(): void {
    // var obj =  (this.result.CityResult[0].cityA);
  // console.log(Object.keys(obj).length)
  var obj =  (this.result.CountryWinner);
  console.log(Object.keys(obj).length>0)
  console.log(obj);

    if (this.result.CityResult[0].cityA)
      console.log('here',this.result.CityResult[0].cityA);
    // console.log(this.result.CityResult[0].cityA!={});
    console.log(this.result.CountryResult);
  }
}
