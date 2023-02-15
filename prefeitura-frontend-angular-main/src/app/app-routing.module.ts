import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SessionComponent } from './pages/session/session.component';
import { BuildingsComponent } from './pages/buildings/buildings.component';
import { BilletComponent } from './pages/billet/billet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'session', component: SessionComponent},
  {path: 'session/buildings',component: BuildingsComponent},
  {path: 'session/buildings/billet', component: BilletComponent},
  {path: '**', pathMatch: 'full',component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

