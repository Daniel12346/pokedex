import { Component, Prop } from "@stencil/core";

@Component({
  tag: "dv-load-more",
  styleUrl: "load-more.scss",
  shadow: true
})
export class LoadMore {
  @Prop() handleFetchMore;

  componentDidLoad() {
    this.observer.observe(this.base);
  }
  componentDidUnload() {
    this.observer.disconnect();
  }

  base: HTMLElement;

  options: IntersectionObserverInit = {
    //only using one threshold because the callback only needs to run once to fetch the data
    threshold: 1.0,
    //the margin around the root element (the viewport in this case)
    rootMargin: "200px"
  };

  callback: IntersectionObserverCallback = entries => {
    //no need to iterate through the entries because there's only one (#base)
    if (entries[0].isIntersecting) {
      this.handleFetchMore();
    }
  };

  private observer = new IntersectionObserver(this.callback, this.options);

  render() {
    return <div id="base" ref={ref => (this.base = ref)} />;
  }
}
