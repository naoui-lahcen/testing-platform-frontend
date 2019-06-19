import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: ProfilePageComponent,
      data: {
        title: 'Mon profil'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
