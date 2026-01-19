import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AnotherComponent } from './components/another-component/another-component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'another', component: AnotherComponent}
];
