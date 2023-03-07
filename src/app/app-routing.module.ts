import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'career', component: CareersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
