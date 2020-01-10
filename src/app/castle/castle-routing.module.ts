import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastlePage } from './castle.page';

const routes: Routes = [
  {
    path: 'castle',
    component: CastlePage,
    children: [
      {
        path: 'hall',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hall/hall.module').then(m => m.HallPageModule)
          }
        ]
      },
      {
        path: 'court',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../court/court.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'dungeon',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dungeon/dungeon.module').then(m => m.DungeonPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/castle/hall',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/castle/hall',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
