import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityAVote } from './city-a-vote/city-a-vote.component';
import { RouterModule } from '@angular/router';
import { CityAService } from 'src/libs/cityA.service';
import { CityAResultComponent } from './city-a-result/city-a-result.component';

@NgModule({
  declarations: [CityAVote, CityAResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CityAVote },
      { path: 'result_a', component: CityAResultComponent },
    ]),
  ],
  bootstrap: [CityAVote],
  providers: [CityAService],
})
export class CityAModule {}
