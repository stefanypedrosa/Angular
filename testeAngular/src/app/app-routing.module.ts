import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CorpoComponent } from './corpo/corpo.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},  
   { path: 'home', component: HomeComponent },
   { path: 'sobre', component: SobreComponent},
   { path: 'tarefas', component: TarefasComponent},
   { path: 'corpo', component: CorpoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
