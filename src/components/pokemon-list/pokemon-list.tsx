import { Component, State, Prop } from "@stencil/core";

@Component({
  tag: "dv-pokemon-list",
  styleUrl: "pokemon-list.scss",
  shadow: true
})
export class PokemonList {
  @Prop() pokeData = null;
  @Prop() handlePokemonClick = null;
  @Prop() handleFetchMore = null;

  @State() isLoading = false;
  @State() isListCollapsed = false;
  @State() searchTerm = "";

  componentDidLoad() {
    this.handleFetchMore();
  }

  //extracting the number of each pokemon from the url
  handleButtonClick = () => (this.isListCollapsed = !this.isListCollapsed);
  handleInputChange = (value: string) => {
    if (this.isListCollapsed) {
      this.isListCollapsed = false;
    }
    this.searchTerm = value.trim().toLowerCase();
  };
  getNumberFromUrl = (url: string) => /pokemon\/(\d{1,4})/gi.exec(url)[1];
  matchSearchTerm = pokemon => {
    /* const re = RegExp(this.searchTerm, "gi");
    return re.test(pokemon.name);*/

    return pokemon.name.includes(this.searchTerm.trim());
  };

  render() {
    let list =
      this.pokeData &&
      this.pokeData.results.filter(this.matchSearchTerm).map(pokemon => (
        <li
          key={this.getNumberFromUrl(pokemon.url)}
          onClick={this.handlePokemonClick.bind(this, pokemon.url)}
        >
          <span class="pokemon-name">{pokemon.name}</span>
          <span class="pokemon-number">
            {this.getNumberFromUrl(pokemon.url)}
          </span>
        </li>
      ));

    return (
      <section>
        <dv-pokemon-list-controls
          handleButtonClick={this.handleButtonClick}
          handleInputChange={this.handleInputChange}
          isListCollapsed={this.isListCollapsed}
          searchTerm={this.searchTerm}
        />
        <div class={`container ${this.isListCollapsed ? "collapsed" : ""}`}>
          {this.isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul class="list">
              {list}

              {
                //  <dv-load-more handleFetchMore={this.handleFetchMore} />
              }
            </ul>
          )}
        </div>
      </section>
    );
  }
}
