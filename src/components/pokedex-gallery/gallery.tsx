import { Component, Prop } from "@stencil/core";

@Component({
  tag: "dv-gallery",
  styleUrl: "gallery.scss",
  shadow: true
})
export class Gallery {
  @Prop() imgSources = null;
  handleClick = (e: Event) => {
    if (!e.target) {
      return;
    }
    let target: HTMLElement = e.target as HTMLElement;
    target.nextElementSibling
      ? target.nextElementSibling.scrollIntoView({ block: "center" })
      : target.parentElement.firstElementChild.scrollIntoView({
          block: "center"
        });
  };

  render() {
    return (
      <div class="gallery" onClick={this.handleClick}>
        {this.imgSources && this.imgSources.map(src => <img src={src} />)}
      </div>
    );
  }
}
