const e=window.App.h;class t{constructor(){this.imgSources=null,this.handleClick=(e=>{if(!e.target)return;let t=e.target;t.nextElementSibling?t.nextElementSibling.scrollIntoView({block:"center"}):t.parentElement.firstElementChild.scrollIntoView({block:"center"})})}render(){return e("div",{class:"gallery",onClick:this.handleClick},this.imgSources&&this.imgSources.map(t=>e("img",{src:t})))}static get is(){return"dv-gallery"}static get encapsulation(){return"shadow"}static get properties(){return{imgSources:{type:"Any",attr:"img-sources"}}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column wrap;flex-flow:column wrap;height:25vh;width:95vw;max-width:600px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.gallery{width:80%;max-width:300px;background-color:var(--color-accent-8);-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-flow:row nowrap;flex-flow:row nowrap;border-radius:5px;overflow-y:hidden;overflow-x:scroll;scroll-behavior:smooth;overflow:-moz-scrollbars-none}.gallery,.gallery img{display:-ms-flexbox;display:flex}.gallery img{-ms-flex:1 0 100%;flex:1 0 100%}"}}class s{constructor(){this.pokemon=null,this.species=null,this.isPokemonLoading=!1}render(){let t;if(this.pokemon&&!this.isPokemonLoading){let{front_default:s,back_default:i,front_shiny:n,back_shiny:o}=this.pokemon.sprites;t=e("dv-gallery",{imgSources:[s,i,n,o],onClick:function(e){if(!e.target)return;let t=e.target;t.nextElementSibling?t.nextElementSibling.scrollIntoView(!1):t.parentElement.firstElementChild.scrollIntoView(!1)}})}else t=this.isPokemonLoading?e("div",{class:"bg loading"},e("p",{class:"loading-text"},"Loading...")):e("div",{class:"bg"});return e("div",null,e("div",{class:"container"},e("div",{class:"screen"},t)),e("dv-pokemon-info",{pokemon:this.pokemon,species:this.species,isPokemonLoading:this.isPokemonLoading}))}static get is(){return"dv-pokedex-display"}static get encapsulation(){return"shadow"}static get properties(){return{isPokemonLoading:{type:Boolean,attr:"is-pokemon-loading"},pokemon:{type:"Any",attr:"pokemon"},species:{type:"Any",attr:"species"}}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-flow:column wrap;flex-flow:column wrap}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.container,.screen{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.screen{height:auto;width:450px;width:90%;max-width:300px;background-color:var(--color-grey-w4);padding:1.8rem 1.5rem 2.4rem 1.5rem;-webkit-clip-path:polygon(80% 0,100% 0,100% 80%,100% 100%,16% 100%,0 82%,0 0);clip-path:polygon(80% 0,100% 0,100% 80%,100% 100%,16% 100%,0 82%,0 0);border-radius:5px;position:relative}.screen:after{display:block;position:absolute;top:1px;left:-3px;content:\"\";width:100%;height:98%;background-color:var(--color-grey-w2);z-index:-2;border-radius:5px}.gallery{height:auto;background-color:var(--color-accent-8);-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;-ms-flex-flow:row nowrap;flex-flow:row nowrap;border-radius:5px;overflow-y:hidden;overflow-x:scroll;scroll-behavior:smooth;-ms-overflow-style:none;overflow:-moz-scrollbars-none}.gallery,.gallery img{display:-ms-flexbox;display:flex;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.gallery img{-ms-flex:1 0 100%;flex:1 0 100%}dv-gallery{height:50vmin;max-height:350px;width:80vw}.bg{width:90%;height:25vh;background-color:var(--color-accent-8);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.bg.loading{-webkit-animation:loadingBgChange .7s infinite alternate;animation:loadingBgChange .7s infinite alternate}.loading-text{color:#fff;font-size:1.2rem}\@-webkit-keyframes loadingBgChange{0%{background:var(--color-accent-9)}to{background:var(--color-accent-8)}}\@keyframes loadingBgChange{0%{background:var(--color-accent-9)}to{background:var(--color-accent-8)}}"}}class i{constructor(){this.pokeData=null,this.currentPokemon=null,this.currentSpecies=null,this.isLoading=!1,this.isPokemonLoading=!1,this.pokemonMoves=null,this.baseUrl="http://pokeapi.salestock.net/api/v2/",this.fetchUrl=(async e=>{const t=await fetch(e);return await t.json()}),this.handlePokemonClick=(async e=>{window.scrollTo(0,0),this.isLoading=!0,this.isPokemonLoading=!0,this.currentPokemon=await this.fetchUrl(e),this.currentPokemon&&(this.currentSpecies=await this.fetchUrl(this.baseUrl+"pokemon-species/"+this.currentPokemon.name)),this.isLoading=!1,this.isPokemonLoading=!1}),this.handleFetchMore=(async(e=20)=>{if(!this.pokeData||!this.pokeData.next)return;const t=`${this.pokeData.next}&limit=${e}`,s=await fetch(t),i=await s.json(),n=Object.assign({},i,{results:[...this.pokeData.results,...i.results]});this.pokeData=n})}async componentWillLoad(){let e=await this.fetchUrl(this.baseUrl+"pokemon/");this.pokeData=e,this.isLoading=!1}render(){return e("div",null,e("dv-pokedex-display",{pokemon:this.currentPokemon,species:this.currentSpecies,isPokemonLoading:this.isPokemonLoading}),e("dv-pokemon-list",{handlePokemonClick:this.handlePokemonClick,handleFetchMore:this.handleFetchMore.bind(this,1e3),pokeData:this.pokeData}))}static get is(){return"dv-pokedex-page"}static get encapsulation(){return"shadow"}static get properties(){return{currentPokemon:{state:!0},currentSpecies:{state:!0},isLoading:{state:!0},isPokemonLoading:{state:!0},pokeData:{state:!0},pokemonMoves:{state:!0}}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}"}}class n{constructor(){this.pokemon=null,this.species=null,this.isPokemonLoading=null}render(){let t,s;if(this.pokemon&&!this.isPokemonLoading){const{weight:i,height:n,types:o,stats:a}=this.pokemon;this.species&&this.species.flavor_text_entries&&(s=this.species.flavor_text_entries[1].flavor_text),t=e("div",{class:"content"},e("h3",{class:"name"},this.pokemon.name),e("div",{class:"types"},o.map(t=>e("div",{class:"type",style:{order:t.slot,"background-color":`var(--color-${t.type.name})`}},t.type.name))),s&&e("p",{class:"flavor-text"},s),e("div",{class:"physical"},e("span",{class:"weight"},"weight: ",i),e("span",{class:"height"},"height: ",n)),e("ul",{class:"stats"},a.map((t,s)=>e("li",{key:s,style:{"background-color":`var(--color-stat-${t.stat.name})`}},e("span",{class:"stat-name"},t.stat.name)," ",e("span",{class:"stat-base"},t.base_stat)))))}return e("section",null,e("h3",null,t),e("div",null))}static get is(){return"dv-pokemon-info"}static get encapsulation(){return"shadow"}static get properties(){return{isPokemonLoading:{type:"Any",attr:"is-pokemon-loading"},pokemon:{type:"Any",attr:"pokemon"},species:{type:"Any",attr:"species"}}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;-ms-flex-align:center;align-items:center;min-height:20px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column wrap;flex-flow:column wrap}.name{text-transform:capitalize;color:var(--color-grey-w1);font-size:1.8rem}.types{width:80%;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center}.types>*{-ms-flex-preferred-size:25%;flex-basis:25%;background-color:var(--color-accent-4);margin:.2rem;text-align:center;padding:.4rem;border-radius:5px}.physical{-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;padding:1rem;width:80%;margin-top:1.5rem}.physical,.physical>*{display:-ms-flexbox;display:flex;justify-content:center}.physical>*{-ms-flex-preferred-size:200px;flex-basis:200px;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center}.physical>:first-child{margin-bottom:1.2rem}.physical>:last-child{margin-bottom:-1.2rem}.stats{list-style:none;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;position:relative;left:-20px}.stats,.stats>*{display:-ms-flexbox;display:flex}.stats>*{margin:.2rem;min-height:2rem;background:var(--color-accent-4);-ms-flex-pack:justify;justify-content:space-between;-ms-flex-preferred-size:80%;flex-basis:80%;border-radius:10px;padding:.4rem;-ms-flex-align:center;align-items:center}\@media screen and (min-width:720px){.stats>*{-ms-flex-preferred-size:25%;flex-basis:25%;min-height:3rem}}.flavor-text,.physical,.stats,.types{font-weight:500}.flavor-text{color:var(--color-grey-w2);padding:1.5rem;margin-bottom:-1rem}\@media screen and (min-width:720px){.flavor-text{padding:3rem}}"}}export{t as DvGallery,s as DvPokedexDisplay,i as DvPokedexPage,n as DvPokemonInfo};