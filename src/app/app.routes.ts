import { Routes } from '@angular/router';
import { CatsComponent } from './features/cats/cats.component';
import { DogsComponent } from './features/dogs/dogs.component';

export const routes: Routes = [
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent }
];
