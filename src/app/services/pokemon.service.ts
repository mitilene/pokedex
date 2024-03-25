import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string;
  private apiKey: string;
  private apiSpecies: string;
  private range: string;

  constructor(private http: HttpClient) {
    this.url = "https://pokeapi.co/api/v2/";
    this.apiKey = "pokemon/";
    this.apiSpecies = "pokemon-species/";
    this.range = "?offset=0&limit=50";
  }

  get getAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url + this.apiKey + this.range)
      .pipe(
        tap(allPokemon => allPokemon),
        tap(allPokemon => {
          allPokemon.results.map((pokemon: any) => {
            this.getPokemon(pokemon.url).subscribe(allPokemon => pokemon.data = allPokemon)
          });
          console.log(allPokemon)
        })
      );
  }

  public getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(data => data)
    )
  };
}
