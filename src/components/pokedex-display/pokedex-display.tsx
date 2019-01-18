import { Component, Prop } from "@stencil/core";

@Component({
  tag: "dv-pokedex-display",
  styleUrl: "pokedex-display.scss",
  shadow: true
})
export class PokedexDisplay {
  @Prop() pokemon = null;
  @Prop() species = null;
  @Prop() isPokemonLoading = false;

  render() {
    let content;

    if (this.pokemon && !this.isPokemonLoading) {
      let {
        front_default,
        back_default,
        front_shiny,
        back_shiny
      } = this.pokemon.sprites;
      content = (
        <dv-gallery
          imgSources={[front_default, back_default, front_shiny, back_shiny]}
          onClick={function(e: Event) {
            if (!e.target) {
              return;
            }
            let target: HTMLElement = e.target as HTMLElement;
            target.nextElementSibling
              ? target.nextElementSibling.scrollIntoView(false)
              : target.parentElement.firstElementChild.scrollIntoView(false);
          }}
        />
      );
    } else {
      content = this.isPokemonLoading ? (
        <div class="bg loading">
          <p class="loading-text">Loading...</p>
        </div>
      ) : (
        <div class="bg" />
      );
    }
    return (
      <div>
        <div class="container">
          <div class="screen">{content}</div>
        </div>
        <dv-pokemon-info
          pokemon={this.pokemon}
          species={this.species}
          isPokemonLoading={this.isPokemonLoading}
        />
      </div>
    );
  }
}
