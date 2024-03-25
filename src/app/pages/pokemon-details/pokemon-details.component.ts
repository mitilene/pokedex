import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon";
  private urlPokemonData: string = "https://pokeapi.co/api/v2/pokemon-species";

  public pokemon: any
  public isLoading: boolean = false;
  public error: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params["id"];
    const pokemon = this.pokemonService.getPokemon(`${this.urlPokemon}/${id}`)
    const pokemonData = this.pokemonService.getPokemon(`${this.urlPokemonData}/${id}`)

    return forkJoin([pokemon, pokemonData]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
        // this.error = true;

        console.log(this.pokemon);
      },
      error =>  {
        this.error = true;
      }
    )
  }
}
