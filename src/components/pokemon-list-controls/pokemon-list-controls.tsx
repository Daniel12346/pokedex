import { Component, Prop } from "@stencil/core";

@Component({
  tag: "dv-pokemon-list-controls",
  styleUrl: "pokemon-list-controls.scss",
  shadow: true
})
export class PokemonListControls {
  @Prop() handleButtonClick;
  @Prop() isListCollapsed: boolean;
  @Prop() handleInputChange;
  @Prop() searchTerm: string;

  render() {
    return (
      <div class="list-controls">
        <button onClick={this.handleButtonClick}>
          {this.isListCollapsed ? "^" : "v"}
        </button>
        <input
          value={this.searchTerm}
          type="search"
          placeholder="search Pokemon..."
          onChange={e =>
            this.handleInputChange((e.target as HTMLInputElement).value)
          }
        />
      </div>
    );
  }
}
