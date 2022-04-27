import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ModifiersComponent } from './pages/blender/modifiers/modifiers.component';
import { MeshManipulationComponent } from './pages/blender/mesh-manipulation/mesh-manipulation.component';
import { HomeComponent } from './blender/home/home.component';
import { BlenderComponent } from './blender/blender/blender.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ModifiersComponent,
    MeshManipulationComponent,
    HomeComponent,
    BlenderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
