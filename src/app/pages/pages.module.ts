import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PagesRoutingModule } from './pages.routing.module';
import { ComponentsModule } from '../components/components.module';

//Pages
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
