import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralMeshManipulationComponent } from './pages/general-mesh-manipulation/general-mesh-manipulation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'general-mesh-manipulation' },
  { path: 'general-mesh-manipulation', component: GeneralMeshManipulationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
