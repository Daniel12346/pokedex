import { Component } from "@stencil/core";

@Component({
  tag: "dv-header",
  styleUrl: "header.scss",
  shadow: true
})
export class Header {
  render() {
    return (
      <header class="header">
        {
          //TODO: nav
        }
        <nav class="nav" />
      </header>
    );
  }
}
