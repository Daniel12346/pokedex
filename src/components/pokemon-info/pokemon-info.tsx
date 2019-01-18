import { Component, Prop } from "@stencil/core";

@Component({
  tag: "dv-pokemon-info",
  styleUrl: "pokemon-info.scss",
  shadow: true
})
export class PokemonInfo {
  @Prop() pokemon = null;
  @Prop() species = null;
  @Prop() isPokemonLoading = null;

  render() {
    let content;
    let flavor_text;

    if (this.pokemon && !this.isPokemonLoading) {
      const { weight, height, types, stats } = this.pokemon;
      if (this.species && this.species.flavor_text_entries) {
        flavor_text = this.species.flavor_text_entries[1].flavor_text;
      }
      content = (
        <div class="content">
          <h3 class="name">{this.pokemon.name}</h3>
          <div class="types">
            {types.map(obj => (
              <div
                class="type"
                style={{
                  order: obj.slot,
                  "background-color": `var(--color-${obj.type.name})`
                }}
              >
                {obj.type.name}
              </div>
            ))}
          </div>
          {flavor_text && <p class="flavor-text">{flavor_text}</p>}
          <div class="physical">
            <span class="weight">weight: {weight}</span>
            <span class="height">height: {height}</span>
          </div>
          <ul class="stats">
            {stats.map((obj, i) => (
              <li
                key={i}
                style={{
                  "background-color": `var(--color-stat-${obj.stat.name})`
                }}
              >
                <span class="stat-name">{obj.stat.name}</span>{" "}
                <span class="stat-base">{obj.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <section>
        <h3>{content}</h3>
        <div />
      </section>
    );
  }
}
