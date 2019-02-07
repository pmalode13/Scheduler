import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewtrainingRoutingModule } from './newtraining-routing.module';
import { AddNewTrainingFormComponent } from './add-new-training-form/add-new-training-form.component';

@NgModule({
  declarations: [AddNewTrainingFormComponent],
  imports: [
    CommonModule,
    NewtrainingRoutingModule
  ]
})
export class NewtrainingModule { }
