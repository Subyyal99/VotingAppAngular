import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryCComponent } from './country-c/country-c.component';
import { AppComponent } from '../app.component';
import { CountryService } from 'src/libs/country.service';
import { Result } from './result/result.component';

@NgModule({
  declarations: [CountryCComponent, Result],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountryCComponent,
      },
      {
        path: 'cityA',
        loadChildren: () =>
          import('./city-a/city-a.module').then((mod) => mod.CityAModule),
      },
      {
        path: 'cityB',
        loadChildren: () =>
          import('./city-b/city-b.module').then((mod) => mod.CityBModule),
      },
      {
        path: 'cityC',
        loadChildren: () =>
          import('./city-c/city-c.module').then((mod) => mod.CityCModule),
      },
      {
        path: 'result',
        component: Result,
      },
    ]),
  ],
  bootstrap: [AppComponent],
  providers: [CountryService],
})
export class CountryModule {}
