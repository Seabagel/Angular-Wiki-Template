import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GeneralMeshManipulationComponent } from './pages/general-mesh-manipulation/general-mesh-manipulation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GeneralMeshManipulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
