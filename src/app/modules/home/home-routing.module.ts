import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from '@modules/favorites/pages/favorite-page/favorite-page.component';
import { HistoryPageComponent } from '@modules/history/pages/history-page/history-page.component';
import { TracksPageComponent } from '@modules/tracks/pages/tracks-page/tracks-page.component';

const routes: Routes = [
  {
    path:'history',
    component:HistoryPageComponent
  }, 
  {
    path:'favoritos',
    component:FavoritePageComponent
  }, 
  {
    path:'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
