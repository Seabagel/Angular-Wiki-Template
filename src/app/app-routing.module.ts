import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeshManipulationComponent } from "./pages/blender/mesh-manipulation/mesh-manipulation.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'general-mesh-manipulation' },
  { path: 'general-mesh-manipulation', component: MeshManipulationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
