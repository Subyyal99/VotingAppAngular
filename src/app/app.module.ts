import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { dataService } from 'src/libs/data.service';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CityAVote } from './country/city-a/city-a-vote/city-a-vote.component';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [AppComponent, CandidateComponent, PositionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'candidate',
        component: CandidateComponent,
      },
      {
        path: 'position',
        component: PositionComponent,
      },
      {
        path: 'country',
        loadChildren: () =>
          import('./country/country.module').then((mod) => mod.CountryModule),
      },
      // {
      //   path: 'country',
      //   children: [{ path: 'cityA', component: CityAVote }],
      // },
    ]),
  ],
  providers: [dataService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
