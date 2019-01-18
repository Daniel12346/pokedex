import { Component, State, Prop } from "@stencil/core";

@Component({
  tag: "dv-pokemon-moves",
  styleUrl: "pokemon-moves.scss",
  shadow: true
})
export class PokemonMoves {
  @Prop() pokemon = null;
  @State() pokemonMoves = null;

  fetchPokemonMoves = async () => {
    let res = await Promise.all(
      [...this.pokemon.moves].slice(0, 4).map(obj => fetch(obj.move.url))
    );
    this.pokemonMoves = await Promise.all(
      res.map((moveRes: Response) => moveRes.json())
    );
  };
  //TODO: replace state with props
  render() {
    console.log(this.pokemonMoves);

    return (
      <div class="container">E{this.pokemonMoves && this.pokemonMoves[0]}</div>
    );
  }
}
