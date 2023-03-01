import { Injectable } from '@angular/core';

@Injectable()
export class dataService {
  Candidate = [
    {
      id: 1,
      firstname: 'Subyyal',
      lastname: 'Siddiqui',
      country_position: 'President',
      city: 'A',
      city_position: 'Mayour',
    },
    {
      id: 2,
      firstname: 'Shahid',
      lastname: 'Khan',
      country_position: 'Vice-President',
      city: null,
      city_position: null,
    },
    {
      id: 3,
      firstname: 'Jabir',
      lastname: 'Nawaz',
      country_position: null,
      city: 'B',
      city_position: 'Magistrate',
    },
    {
      id: 4,
      firstname: 'Ahmed',
      lastname: 'Shakeel',
      country_position: null,
      city: 'B',
      city_position: 'Mayour',
    },
    {
      id: 5,
      firstname: 'Saad',
      lastname: 'Waheed',
      country_position: null,
      city: 'C',
      city_position: 'Mayour',
    },
    {
      id: 6,
      firstname: 'Hassan',
      lastname: 'Nadeel',
      country_position: null,
      city: 'A',
      city_position: 'Mayour',
    },
  ];

  Positions = {
    city: [
      { id: 1, position_name: 'Mayor', status: 'open', edit: false },
      { id: 2, position_name: 'Magistrate', status: 'open', edit: false },
    ],

    country: [
      { id: 1, position_name: 'President', status: 'open', edit: false },
      { id: 2, position_name: 'Vice President', status: 'open', edit: false },
    ],
  };

  Cities = [
    {
      id: 1,
      city_name: 'A',
    },
    {
      id: 2,
      city_name: 'B',
    },
    {
      id: 3,
      city_name: 'C',
    },
  ];
}
