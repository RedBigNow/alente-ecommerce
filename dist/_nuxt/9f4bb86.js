(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4,5,6,7,8,9,10,11,12],{283:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0},alias:{type:String,required:!0},items:{type:Array,required:!0}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Multi Range")]),t._v(" "),t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"filter-item__radio"},[r("input",{staticClass:"radio-input",attrs:{name:t.alias,id:t.alias+"_"+e.id,type:"radio"},domProps:{value:e.text,checked:e.checked}}),t._v(" "),r("label",{attrs:{for:t.alias+"_"+e.id}},[t._v(t._s(e.text))])])}))],2)}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0},alias:{type:String,required:!0},items:{type:Array,required:!0}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"filter-item__checkbox"},[r("input",{staticClass:"checkbox-input",attrs:{type:"checkbox",name:t.alias,id:t.alias+"_"+e.id},domProps:{value:e.id}}),t._v(" "),r("label",{attrs:{for:t.alias+"_"+e.id}},[t._v(t._s(e.name||e.title)+" "),r("sup",[t._v("1920")])])])}))],2)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,r){"use strict";r.r(e);var n={props:{product:{type:Object,required:!0}},computed:{getGrid:function(){return this.$store.getters.getGrid}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item",class:{full:!t.getGrid}},[r("div",{staticClass:"product-item__wrapper"},[r("div",{staticClass:"product-item__img"},[r("nuxt-link",{attrs:{to:"/"}},[r("img",{attrs:{src:t.product.image,alt:t.product.title}})])],1),t._v(" "),r("div",{staticClass:"product-item__info"},[r("div",{staticClass:"product-item__extra"},[r("div",{staticClass:"product-item__rating"},[r("span",[t._v(t._s(t.product.rating))])]),t._v(" "),r("div",{staticClass:"product-item__price"},[r("span",[t._v("$"+t._s(t.product.price))])])]),t._v(" "),r("nuxt-link",{staticClass:"product-item__title",attrs:{to:"/"}},[t._v(t._s(t.product.title))]),t._v(" "),r("p",{staticClass:"product-item__descr"},[t._v(t._s(t.product.desc))])],1)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item__btns"},[r("button",{staticClass:"product-btn product-btn--wishlist"},[r("span",[t._v("Wishlist")])]),t._v(" "),r("button",{staticClass:"product-btn product-btn--cart"},[r("span",[t._v("Add to cart")])])])}],!1,null,null,null);e.default=component.exports},286:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("40fbcc06",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r.r(e);var n=r(283),l=r(284),o={components:{radioFieldset:n.default,checkboxFieldset:l.default},created:function(){this.$store.dispatch("setCategories"),this.$store.dispatch("setBrands")},computed:{getCategories:function(){return this.$store.getters.getCategories},getBrands:function(){return this.$store.getters.getBrands},getPriceRange:function(){return this.$store.getters.getPriceRange}},methods:{showFilter:function(){this.$store.dispatch("showFilter")}}},c=r(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter"},[r("p",[t._v("Фильтр")]),t._v(" "),r("form",{staticClass:"filter__form"},[r("radioFieldset",{attrs:{title:"Multi Range",alias:"multi_range",items:t.getPriceRange}}),t._v(" "),t._m(0),t._v(" "),r("checkboxFieldset",{attrs:{title:"Category",alias:"category",items:t.getCategories}}),t._v(" "),r("checkboxFieldset",{attrs:{title:"Brand",alias:"brand",items:t.getBrands}}),t._v(" "),t._m(1)],1),t._v(" "),r("div",{staticClass:"filter__btn-wrapper"},[r("AppButton",{attrs:{btnClass:"btn-apply"},on:{click:t.showFilter}},[t._v("Apply")]),t._v(" "),r("AppButton",[t._v("Clear all filters")])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Slider")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Rating")]),t._v(" "),r("div",{staticClass:"rating-area"},[r("input",{attrs:{type:"radio",id:"star-5",name:"rating",value:"5"}}),t._v(" "),r("label",{attrs:{for:"star-5",title:"Оценка «5»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-4",name:"rating",value:"4"}}),t._v(" "),r("label",{attrs:{for:"star-4",title:"Оценка «4»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-3",name:"rating",value:"3"}}),t._v(" "),r("label",{attrs:{for:"star-3",title:"Оценка «3»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-2",name:"rating",value:"2"}}),t._v(" "),r("label",{attrs:{for:"star-2",title:"Оценка «2»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-1",name:"rating",value:"1"}}),t._v(" "),r("label",{attrs:{for:"star-1",title:"Оценка «1»"}}),t._v(" "),r("sup",[t._v("1820")])])])}],!1,null,null,null);e.default=component.exports},288:function(t,e,r){"use strict";r.r(e);var n={computed:{getGrid:function(){return this.$store.getters.getGrid}},methods:{changeGrid:function(t){this.$store.dispatch("changeGrid",t)}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid-options"},[r("div",{staticClass:"grid-options__item",class:{active:t.getGrid},on:{click:function(e){return t.changeGrid(!0)}}},[r("svg",{attrs:{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{x:"1.47046",y:"1",width:"6.28857",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("rect",{attrs:{x:"11.9513",y:"1",width:"6.28845",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("rect",{attrs:{x:"11.9513",y:"11",width:"6.28845",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("rect",{attrs:{x:"1.47046",y:"11",width:"6.28857",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),r("div",{staticClass:"grid-options__item",class:{active:!t.getGrid},on:{click:function(e){return t.changeGrid(!1)}}},[r("svg",{attrs:{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1.11511 1H14.7401",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("path",{attrs:{d:"M1.11511 7H14.7401",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("path",{attrs:{d:"M1.11511 13H14.7401",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,r){"use strict";r.r(e);var n={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(t){this.$emit("search",t)}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-search__input",attrs:{type:"text",name:"search",id:"search",value:"",placeholder:t.placeholder},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var n={components:{productPreview:r(285).default},props:{items:{type:Array}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list"},t._l(t.items,(function(t){return r("productPreview",{key:t.id,attrs:{product:t}})})),1)}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var n=r(12),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sort-by"},[r("select",{staticClass:"sort-by__select"},[r("option",{staticClass:"sort",attrs:{"data-sort":"default",value:"asc"}},[t._v("Default")]),t._v(" "),r("option",{staticClass:"sort",attrs:{"data-sort":"price",value:"asc"}},[t._v("Price")]),t._v(" "),r("option",{staticClass:"sort",attrs:{"data-sort":"raiting",value:"asc"}},[t._v("Raiting")])])])}],!1,null,null,null);e.default=component.exports},292:function(t,e,r){t.exports=r.p+"img/filter.0b93d53.svg"},293:function(t,e,r){"use strict";r(286)},294:function(t,e,r){var n=r(55)(!1);n.push([t.i,".filter-btn{display:none;align-items:center;justify-content:center;width:40px;height:40px;margin-right:20px;padding:10px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.13);border-radius:8px;cursor:pointer}.filter-btn .filter-btn__icon{width:100%;height:100%}.filter-btn .filter-btn__icon img{width:100%}@media screen and (max-width:992px){.filter-btn{display:flex}}@media screen and (max-width:360px){.filter-btn{width:30px;height:30px;margin-right:12px;padding:7px}}",""]),t.exports=n},297:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filter-btn__icon"},[e("img",{attrs:{src:r(292)}})])}],l=(r(30),r(132),r(295),r(40),r(16),r(104),r(296)),o=r.n(l),c={data:function(){return{page:+this.$nuxt.$route.query.page||1,pageSize:9,pageCount:0,allItems:[],items:[]}},mounted:function(){window.addEventListener("load",this.onResize),window.addEventListener("resize",this.onResize)},methods:{onResize:function(){window.innerWidth>780?(console.log(9),this.pageSize=9):(console.log(8),this.pageSize=8)},pageChangeHandler:function(t){window.scrollTo({top:0,behavior:"smooth"}),this.$router.push("".concat(this.$nuxt.$route.path,"?page=").concat(t)),this.items=this.allItems[t-1]||this.allItems[0]},setupPagination:function(t){this.allItems=o.a.chunk(t,this.pageSize),this.pageCount=o.a.size(this.allItems),this.items=this.allItems[this.page-1]||this.allItems[0]}}},d=r(291),h=r(288),_=r(289),v=r(290),f={mixins:[c],components:{selectSort:d.default,gridOptions:h.default,Search:_.default,productList:v.default},data:function(){return{search:"",grid:!0}},computed:{AllFilters:function(){var t=this.getProducts(),e=this.search;e?(e=e.trim().toLowerCase(),t=t.filter((function(t){if(-1!==t.title.toLowerCase().indexOf(e))return t})),this.setupPagination(t)):this.setupPagination(t)}},methods:{getProducts:function(){return this.$store.getters.getProducts},showFilter:function(){this.$store.dispatch("showFilter")}}},m=(r(293),r(12)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("section",{staticClass:"catalog-toolbar"},[r("span",{staticClass:"search-results"},[t._v("7,618 results found in 5ms")]),t._v(" "),r("div",{staticClass:"filter-btn",on:{click:t.showFilter}},[t._m(0)]),t._v(" "),r("selectSort"),t._v(" "),r("gridOptions")],1),t._v(" "),r("Search",{attrs:{value:t.search,placeholder:"Search hear"},on:{search:function(e){t.search=e}}}),t._v("\n  "+t._s(t.AllFilters)+"\n\n  "),t.items?r("productList",{attrs:{items:t.items}}):r("div",{staticClass:"error-message"},[r("p",[t._v("Товары не найдены")])]),t._v(" "),t.items?r("div",{staticClass:"pagination"},[r("Paginate",{attrs:{"page-count":t.pageCount,"click-handler":t.pageChangeHandler,"prev-text":"","next-text":"","container-class":"pagination__list","page-class":"pagination__item"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)}),n,!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);var n={components:{catalogFilter:r(287).default},computed:{getFilter:function(){return this.$store.getters.getFilter}},methods:{showFilter:function(){this.$store.dispatch("showFilter")}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar",class:{show:t.getFilter}},[r("div",{staticClass:"close-btn",on:{click:t.showFilter}}),t._v(" "),r("catalogFilter")],1)}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,r){"use strict";r.r(e);var n=r(298),l=r(297),o={components:{sidebar:n.default,catalogContent:l.default},computed:{getFilter:function(){return this.$store.getters.getFilter}},head:function(){var title="Alente e-commerce",t="Тестовое задание от компании Alente";return{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"site"}]}}},c=r(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content",class:{"no-scroll":t.getFilter}},[r("div",{staticClass:"container"},[r("div",{staticClass:"catalog-wrapper"},[r("sidebar"),t._v(" "),r("catalogContent")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);