import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
})
export class PositionComponent implements OnInit {
  display: boolean = false;
  display2: boolean = false;
  position: string = '';

  position2: string = '';
  Object = Object;
  constructor(public data: dataService) {}
  ngOnInit(): void {
    console.log(this.data.Positions);
  }
  AddCountryPosition() {
    this.display = !this.display;
  }
  AddCountryPosition2() {
    this.display2 = !this.display2;
  }
  Save(s: string) {
    if (s == 'country') {
      var obj = {
        id: Math.floor(Math.random() * 100),
        position_name: this.position,
        status: 'open',
        edit: false,
      };
      this.data.Positions.country.push(obj);
      console.log(obj);
    }
    else{
      var obj = {
        id: Math.floor(Math.random() * 100),
        position_name: this.position2,
        status: 'open',
        edit: false,
      };
      this.data.Positions.city.push(obj);
      console.log(obj);
    
    }
    console.log(this.data.Positions);
  }

  DeleteId(id: number) {
    console.log('here', id)
    this.data.Positions.country = this.data.Positions.country.filter((p) => {
      return p.id != id;
    });
    console.log(this.data.Positions.country)
  }
  Deletecity(id: number) {
    console.log('here', id)
    this.data.Positions.city = this.data.Positions.city.filter((p) => {
      return p.id != id;
    });
    console.log(this.data.Positions.city)
  }
}
