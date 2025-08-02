import { Routes } from '@angular/router';
import { Unfiltered } from './components/unfiltered/unfiltered';

export const routes: Routes = [
  {
    path: '',
    component: Unfiltered,
    title: 'No Pagination',
  },
  {
    path: 'cursor',
    loadComponent: () =>
      import('./components/cursor/cursor').then((m) => m.Cursor),

    title: 'Cursor Pagination',
  },
  {
    path: 'limit-offset',
    loadComponent: () =>
      import('./components/limit-offset/limit-offset').then(
        (m) => m.LimitOffset,
      ),
    title: 'Limit Offset',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
