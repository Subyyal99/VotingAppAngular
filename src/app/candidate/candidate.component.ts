import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { dataService } from 'src/libs/data.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  candidate = this.data.Candidate;
  display: boolean = false;
  CandidateForm!: FormGroup;
  Object = Object;

  constructor(public data: dataService) {}
  ngOnInit(): void {
    this.CandidateForm = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      country_position: new FormControl(),
      city_name: new FormControl(),
      city_position: new FormControl(),
    });
    console.log(this.CandidateForm);
  }
  SaveCandidate() {
    let flag: boolean = false;
    console.log('here', this.CandidateForm.controls);
    var obj = {
      id: Math.floor(Math.random() * 100),
      firstname: this.CandidateForm.controls['first_name'].value,
      lastname: this.CandidateForm.controls['last_name'].value,
      country_position: this.CandidateForm.controls['country_position'].value,
      city_position: this.CandidateForm.controls['city_position'].value,
      city: this.CandidateForm.controls['city_name'].value,
    };
    this.data.Candidate.push(obj);
    alert('Candidate Added Successfully');
    this.display = false;
    console.log(this.data);
  }
  CandidateAdd() {
    this.display = !this.display;
    console.log(this.display);
  }
  DeleteId(id: number) {
    console.log('here', id)
    this.data.Candidate = this.data.Candidate.filter((p) => {
      return p.id != id;
    });
    console.log(this.data.Candidate)
  }
}
