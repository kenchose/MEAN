import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {
    this.getPokemon();
    this.getAbility();
    this.newPokemon();
    this.sameAbility();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("Got our Pokemon, Bulbasaur!", data));
  }
  getAbility(){
    let pokemonAbility = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    pokemonAbility.subscribe((data:any) => console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}`))
  }
  newPokemon(){
    let newPokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/7/');
    newPokemon.subscribe((data:any) => console.log(`${data.pokemon} Pokemon have the ${data.name} ability!`));
  }
  sameAbility(){
    let samePokemonAbility = this._http.get('https://pokeapi.co/api/v2/ability/7/')
    samePokemonAbility.subscribe((data:any) => {
      console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
    })
  }
}
