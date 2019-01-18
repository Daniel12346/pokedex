import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: true
})
export class AppRoot {
  // @State() pokeData = null;
  // @State() currentPokemon = null;
  //@State() isLoading = false;

  render() {
    return (
      <div class="container">
        <dv-header />
        <dv-pokedex-page />
      </div>
    );
  }
}
