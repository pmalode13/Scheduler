import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailComponent } from './training-detail/training-detail.component';



@NgModule({
  declarations: [TrainingDetailComponent],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule
  ]
})
export class TrainingDetailsModule { }
