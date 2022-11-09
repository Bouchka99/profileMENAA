import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { CentreComponent } from './centre/centre.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo: 'profile',pathMatch:"full"},
  {path:'profile', component: ProfileComponent},
  {path:'about', component: AboutComponent},
  {path:'projet', component: ProjectComponent},
  {path:'centre', component: CentreComponent},
  {path:'formation', component: FormationComponent},
  {path:'experience', component: ExperienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
