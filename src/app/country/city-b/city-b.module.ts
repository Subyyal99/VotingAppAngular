import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityBVote } from './city-b-vote/city-b-vote.component';
import { CityBService } from 'src/libs/cityB.service';
import { RouterModule } from '@angular/router';
import { CityBResultComponent } from './city-b-result/city-b-result.component';

@NgModule({
  declarations: [CityBVote, CityBResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CityBVote },
      {
        path: 'result_b',
        component: CityBResultComponent,
      },
    ]),
  ],
  providers: [CityBService],
})
export class CityBModule {}
