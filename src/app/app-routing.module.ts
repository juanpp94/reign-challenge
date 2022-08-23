import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavesComponent } from './components/faves/faves.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'faves',
    component: FavesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
