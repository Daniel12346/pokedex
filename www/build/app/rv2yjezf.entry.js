const e=window.App.h;class t{constructor(){this.options={threshold:1,rootMargin:"200px"},this.callback=(e=>{e[0].isIntersecting&&this.handleFetchMore()}),this.observer=new IntersectionObserver(this.callback,this.options)}componentDidLoad(){this.observer.observe(this.base)}componentDidUnload(){this.observer.disconnect()}render(){return e("div",{id:"base",ref:e=>this.base=e})}static get is(){return"dv-load-more"}static get encapsulation(){return"shadow"}static get properties(){return{handleFetchMore:{type:"Any",attr:"handle-fetch-more"}}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column wrap;flex-flow:column wrap;height:25vh;width:95vw;max-width:600px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.base{height:0;opacity:0}"}}export{t as DvLoadMore};