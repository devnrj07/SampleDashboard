import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [

  {
    path: 'profile', component : AdmindashboardComponent
  },

  {
    path : 'resume', component : ResumeComponent
  },
  {
    path : 'admin', component : AdmindashboardComponent
  },

  {
    path : 'jobs', component: JobComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
