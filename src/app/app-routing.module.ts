import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeshManipulationComponent } from './pages/blender/mesh-manipulation/mesh-manipulation.component';
import { ModifiersComponent } from './pages/blender/modifiers/modifiers.component';
import { HomeComponent } from './blender/home/home.component';
import { BlenderComponent } from './blender/blender/blender.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'blender',
        children: [
          {
            path: '',
            component: BlenderComponent,
          },
          {
            path: 'mesh-manipulation',
            component: MeshManipulationComponent,
          },
          {
            path: 'modifiers',
            component: ModifiersComponent,
          },
        ],
      },
    ],
  },

  // { path: '', pathMatch: 'full', redirectTo: 'blender/mesh-manipulation' },
  // { path: 'blender/mesh-manipulation/', component: MeshManipulationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
