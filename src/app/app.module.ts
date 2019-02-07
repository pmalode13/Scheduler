import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrainingComponent } from './training/training.component';
import { UpcomingTrainingListComponent } from './training/upcoming-training-list/upcoming-training-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrainingComponent,
    UpcomingTrainingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
