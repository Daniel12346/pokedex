import { Component, State } from "@stencil/core";

@Component({
  tag: "dv-pokedex-page",
  styleUrl: "pokedex-page.scss",
  shadow: true
})
export class PokedexPage {
  @State() pokeData = null;
  @State() currentPokemon = null;
  //using another variable because there are two urls to fetch
  @State() currentSpecies = null;
  @State() isLoading = false;
  @State() isPokemonLoading = false;
  @State() pokemonMoves = null;
  baseUrl = "http://pokeapi.salestock.net/api/v2/";

  async componentWillLoad() {
    let data = await this.fetchUrl(this.baseUrl + "pokemon/");
    this.pokeData = data;
    this.isLoading = false;
  }

  fetchUrl = async (url: string) => {
    const res = await fetch(url);
    return await res.json();
  };

  handlePokemonClick = async (url: string) => {
    window.scrollTo(0, 0);
    this.isLoading = true;
    this.isPokemonLoading = true;
    this.currentPokemon = await this.fetchUrl(url);
    if (this.currentPokemon) {
      this.currentSpecies = await this.fetchUrl(
        this.baseUrl + "pokemon-species/" + this.currentPokemon.name
      );
    }

    this.isLoading = false;
    this.isPokemonLoading = false;
  };

  /*used as a response to the custom event that is fired when 
  the user scrolls to the bottom of the list component, 
  effectively enabling infinite scrolling*/
  handleFetchMore = async (limit: number = 20) => {
    // .next is the url we're fetching
    if (!(this.pokeData && this.pokeData.next)) {
      return;
    }
    //changing the number of results fetched (the default limit is 20)
    const url: string = `${this.pokeData.next}&limit=${limit}`;
    const res = await fetch(url);
    const fetched = await res.json();
    const updated = {
      ...fetched,
      results: [...this.pokeData.results, ...fetched.results]
    };
    this.pokeData = updated;
  };

  render() {
    return (
      <div>
        <dv-pokedex-display
          pokemon={this.currentPokemon}
          species={this.currentSpecies}
          isPokemonLoading={this.isPokemonLoading}
        />
        <dv-pokemon-list
          handlePokemonClick={this.handlePokemonClick}
          handleFetchMore={this.handleFetchMore.bind(this, 1000)}
          pokeData={this.pokeData}
        />
      </div>
    );
  }
}
