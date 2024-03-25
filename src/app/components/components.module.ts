import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    PokemonListComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
