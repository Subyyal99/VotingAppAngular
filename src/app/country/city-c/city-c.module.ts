import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCVote } from './city-c-vote/city-c-vote.component';
import { RouterModule } from '@angular/router';
import { CityCService } from 'src/libs/cityC.service';
import { CityCResultComponent } from './city-c-result/city-c-result.component';

@NgModule({
  declarations: [CityCVote, CityCResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CityCVote,
      },
      {
        path: 'result_c',
        component: CityCResultComponent,
      },
    ]),
  ],
  providers: [CityCService],
})
export class CityCModule {}
