import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContainerComponent } from './components/container/container.component';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './views/home/home.component';
import { CharacterProfileComponent } from './views/character-profile/character-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    CharacterComponent,
    HomeComponent,
    CharacterProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
