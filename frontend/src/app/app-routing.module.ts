import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialComponent} from "./tutorial/tutorial.component";
import {HomeComponent} from "./home/home.component";
import {GameComponent} from "./game/game.component";
import {HighscoreComponent} from "./highscore/highscore.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'highscore',
    component: HighscoreComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
