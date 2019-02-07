import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { UpcomingTrainingListComponent } from './training/upcoming-training-list/upcoming-training-list.component';


const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'training', component: TrainingComponent, children: [{ path: 'upcomingTrainingList', component: UpcomingTrainingListComponent }] },
  { path: 'newTraining', loadChildren: './training/newtraining/newtraining.module#NewtrainingModule' },
  { path: 'trainingDetails', loadChildren: './training/training-details/training-details.module#TrainingDetailsModule' },

  { path: 'meeting', loadChildren: './meeting/meeting.module#MeetingModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
