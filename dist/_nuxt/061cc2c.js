(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4,5,6,7,8,9,10,11,12,13,14,15],{283:function(t,e,r){"use strict";var n=r(6),c=r(284);n({target:"String",proto:!0,forced:r(285)("sup")},{sup:function(){return c(this,"sup","","")}})},284:function(t,e,r){var n=r(3),c=r(21),o=r(11),l=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var v=o(c(t)),f="<"+e;return""!==r&&(f+=" "+r+'="'+d(o(n),l,"&quot;")+'"'),f+">"+v+"</"+e+">"}},285:function(t,e,r){var n=r(4);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},286:function(t,e,r){"use strict";r.r(e);var n=r(290),c=r.n(n),o=(r(291),r(292),{components:{VueSlider:c.a},computed:{getPriceSliderOptions:function(){return this.$store.getters.getPriceSliderOptions},priceSlider:{get:function(){return this.$store.state.priceSlider},set:function(t){this.$store.commit("updatePriceRangeSlider",t)}},priceRangeActive:{get:function(){return this.$store.state.priceRangeActive},set:function(t){this.$store.commit("updatePriceRange",t)}}}}),l=r(20),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("vue-slider",t._b({ref:"slider",model:{value:t.priceSlider,callback:function(e){t.priceSlider=e},expression:"priceSlider"}},"vue-slider",t.getPriceSliderOptions,!1))}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){"use strict";r.r(e);r(40),r(15),r(56),r(57),r(283);var n={props:{id:{type:String},filterType:{type:String}},data:function(){return{sup:0}},computed:{filteredProducts:function(){var t=this;return"categoryId"==this.filterType?this.getProducts().filter((function(e){return e.categoryId==t.id&&(0===t.getSearchValue().length||e.title.toLowerCase().includes(t.getSearchValue().toLowerCase()))&&(0===t.getBrandsActive().length||t.getBrandsActive().includes(e.brandId))&&(t.getPriceRangeActive()==={}||e.price>=t.getPriceRangeActive().min&&e.price<=t.getPriceRangeActive().max)&&(0===t.getPriceSlider()[0]||e.price>t.getPriceSlider()[0])&&(99999===t.getPriceSlider()[1]||e.price<=t.getPriceSlider()[1])&&(t.getRatingRangeActive()==={}||e.rating>=t.getRatingRangeActive().min&&e.rating<=t.getRatingRangeActive().max)})):"brandId"==this.filterType?this.getProducts().filter((function(e){return e.brandId==t.id&&(0===t.getSearchValue().length||e.title.toLowerCase().includes(t.getSearchValue().toLowerCase()))&&(0===t.getCategoriesActive().length||t.getCategoriesActive().includes(e.categoryId))&&(t.getPriceRangeActive()==={}||e.price>=t.getPriceRangeActive().min&&e.price<=t.getPriceRangeActive().max)&&(0===t.getPriceSlider()[0]||e.price>t.getPriceSlider()[0])&&(99999===t.getPriceSlider()[1]||e.price<=t.getPriceSlider()[1])&&(t.getRatingRangeActive()==={}||e.rating>=t.getRatingRangeActive().min&&e.rating<=t.getRatingRangeActive().max)})):void 0},totalSup:function(){var t=this.filteredProducts;return this.sup=t.length}},methods:{getProducts:function(){return this.$store.getters.getProducts},getSearchValue:function(){return this.$store.getters.getSearchValue},getCategoriesActive:function(){return this.$store.getters.getCategoriesActive},getBrandsActive:function(){return this.$store.getters.getBrandsActive},getPriceRangeActive:function(){return this.$store.getters.getPriceRangeActive},getPriceSlider:function(){return this.$store.getters.getPriceSlider},getRatingRangeActive:function(){return this.$store.getters.getRatingRangeActive}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("sup",[t._v(t._s(t.totalSup))])])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,r){"use strict";r.r(e);var n={props:{product:{type:Object,required:!0}},computed:{getGrid:function(){return this.$store.getters.getGrid}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item",class:{full:!t.getGrid}},[r("div",{staticClass:"product-item__wrapper"},[r("div",{staticClass:"product-item__img"},[r("nuxt-link",{attrs:{to:"/"}},[r("img",{attrs:{src:t.product.image,alt:t.product.title}})])],1),t._v(" "),r("div",{staticClass:"product-item__info"},[r("div",{staticClass:"product-item__extra"},[r("div",{staticClass:"product-item__rating"},[r("span",[t._v(t._s(t.product.rating))])]),t._v(" "),r("div",{staticClass:"product-item__price"},[r("span",[t._v("$"+t._s(t.product.price))])])]),t._v(" "),r("nuxt-link",{staticClass:"product-item__title",attrs:{to:"/"}},[t._v(t._s(t.product.title))]),t._v(" "),r("p",{staticClass:"product-item__descr"},[t._v(t._s(t.product.desc))])],1)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item__btns"},[r("button",{staticClass:"product-btn product-btn--wishlist"},[r("span",[t._v("Wishlist")])]),t._v(" "),r("button",{staticClass:"product-btn product-btn--cart"},[r("span",[t._v("Add to cart")])])])}],!1,null,null,null);e.default=component.exports},289:function(t,e,r){t.exports=r.p+"img/filter.0b93d53.svg"},293:function(t,e,r){"use strict";r.r(e);var n=r(286),c=r(287),o={components:{priceSlider:n.default,filterItemSup:c.default},created:function(){this.$store.dispatch("setCategories"),this.$store.dispatch("setBrands")},computed:{getCategories:function(){return this.$store.getters.getCategories},categoriesActive:{get:function(){return this.$store.state.categoriesActive},set:function(t){this.$store.commit("updateCategories",t)}},getBrands:function(){return this.$store.getters.getBrands},brandsActive:{get:function(){return this.$store.state.brandsActive},set:function(t){this.$store.commit("updateBrands",t)}},getPriceRange:function(){return this.$store.getters.getPriceRange},priceRangeActive:{get:function(){return this.$store.state.priceRangeActive},set:function(t){this.$store.commit("updatePriceRange",t)}},getPriceSlider:function(){return this.$store.getters.getPriceSlider},getRatingRange:function(){return this.$store.getters.getRatingRange},ratingRangeActive:{get:function(){return this.$store.state.ratingRangeActive},set:function(t){this.$store.commit("updateRatingRange",t)}}},methods:{changeFilterStatus:function(){this.$store.dispatch("changeFilterStatus")},clearFilter:function(){this.$store.dispatch("clearFilter")}}},l=r(20),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter"},[r("p",[t._v("Filter")]),t._v(" "),r("form",{staticClass:"filter__form"},[r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Multi Range")]),t._v(" "),t._l(t.getPriceRange,(function(e){return r("div",{key:e.id,staticClass:"filter-item__radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.priceRangeActive,expression:"priceRangeActive"}],staticClass:"radio-input",attrs:{name:"multi_range",type:"radio",id:"multi_range_"+e.id},domProps:{value:{min:e.min,max:e.max},checked:t._q(t.priceRangeActive,{min:e.min,max:e.max})},on:{change:function(r){t.priceRangeActive={min:e.min,max:e.max}}}}),t._v(" "),r("label",{attrs:{for:"multi_range_"+e.id}},[t._v(t._s(e.text))])])}))],2),t._v(" "),r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Slider")]),t._v(" "),r("div",{staticClass:"range-values"},[r("p",[t._v(t._s(t.getPriceSlider[0])+" - "+t._s(t.getPriceSlider[1]))])]),t._v(" "),r("priceSlider")],1),t._v(" "),r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Category")]),t._v(" "),t._l(t.getCategories,(function(e){return r("div",{key:e.id,staticClass:"filter-item__checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.categoriesActive,expression:"categoriesActive"}],staticClass:"checkbox-input",attrs:{type:"checkbox",name:"category",id:"category_"+e.id},domProps:{value:e.id,checked:Array.isArray(t.categoriesActive)?t._i(t.categoriesActive,e.id)>-1:t.categoriesActive},on:{change:function(r){var n=t.categoriesActive,c=r.target,o=!!c.checked;if(Array.isArray(n)){var l=e.id,d=t._i(n,l);c.checked?d<0&&(t.categoriesActive=n.concat([l])):d>-1&&(t.categoriesActive=n.slice(0,d).concat(n.slice(d+1)))}else t.categoriesActive=o}}}),t._v(" "),r("label",{attrs:{for:"category_"+e.id}},[t._v(t._s(e.name)+" "),r("filterItemSup",{attrs:{id:e.id,filterType:"categoryId"}})],1)])}))],2),t._v(" "),r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Brand")]),t._v(" "),t._l(t.getBrands,(function(e){return r("div",{key:e.id,staticClass:"filter-item__checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.brandsActive,expression:"brandsActive"}],staticClass:"checkbox-input",attrs:{type:"checkbox",name:"brand",id:"brand_"+e.id},domProps:{value:e.id,checked:Array.isArray(t.brandsActive)?t._i(t.brandsActive,e.id)>-1:t.brandsActive},on:{change:function(r){var n=t.brandsActive,c=r.target,o=!!c.checked;if(Array.isArray(n)){var l=e.id,d=t._i(n,l);c.checked?d<0&&(t.brandsActive=n.concat([l])):d>-1&&(t.brandsActive=n.slice(0,d).concat(n.slice(d+1)))}else t.brandsActive=o}}}),t._v(" "),r("label",{attrs:{for:"brand_"+e.id}},[t._v(t._s(e.title)+" "),r("filterItemSup",{attrs:{id:e.id,filterType:"brandId"}})],1)])}))],2),t._v(" "),r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Rating")]),t._v(" "),r("div",{staticClass:"rating-area"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.ratingRangeActive,expression:"ratingRangeActive"}],attrs:{type:"radio",id:"star-5",name:"rating"},domProps:{value:{min:5,max:5},checked:t._q(t.ratingRangeActive,{min:5,max:5})},on:{change:function(e){t.ratingRangeActive={min:5,max:5}}}}),t._v(" "),r("label",{attrs:{for:"star-5",title:"Оценка «5»"}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ratingRangeActive,expression:"ratingRangeActive"}],attrs:{type:"radio",id:"star-4",name:"rating"},domProps:{value:{min:4,max:4.9},checked:t._q(t.ratingRangeActive,{min:4,max:4.9})},on:{change:function(e){t.ratingRangeActive={min:4,max:4.9}}}}),t._v(" "),r("label",{attrs:{for:"star-4",title:"Оценка «4»"}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ratingRangeActive,expression:"ratingRangeActive"}],attrs:{type:"radio",id:"star-3",name:"rating"},domProps:{value:{min:3,max:3.9},checked:t._q(t.ratingRangeActive,{min:3,max:3.9})},on:{change:function(e){t.ratingRangeActive={min:3,max:3.9}}}}),t._v(" "),r("label",{attrs:{for:"star-3",title:"Оценка «3»"}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ratingRangeActive,expression:"ratingRangeActive"}],attrs:{type:"radio",id:"star-2",name:"rating"},domProps:{value:{min:2,max:2.9},checked:t._q(t.ratingRangeActive,{min:2,max:2.9})},on:{change:function(e){t.ratingRangeActive={min:2,max:2.9}}}}),t._v(" "),r("label",{attrs:{for:"star-2",title:"Оценка «2»"}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ratingRangeActive,expression:"ratingRangeActive"}],attrs:{type:"radio",id:"star-1",name:"rating"},domProps:{value:{min:0,max:1.9},checked:t._q(t.ratingRangeActive,{min:0,max:1.9})},on:{change:function(e){t.ratingRangeActive={min:0,max:1.9}}}}),t._v(" "),r("label",{attrs:{for:"star-1",title:"Оценка «1»"}})])])]),t._v(" "),r("div",{staticClass:"filter__btn-wrapper"},[r("AppButton",{attrs:{btnClass:"btn-apply"},on:{click:t.changeFilterStatus}},[t._v("Apply")]),t._v(" "),r("AppButton",{on:{click:t.clearFilter}},[t._v("Clear all filters")])],1)])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filter-btn__icon"},[e("img",{attrs:{src:r(289)}})])}],c={methods:{changeFilterStatus:function(){this.$store.dispatch("changeFilterStatus")}}},o=r(20),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"filter-btn",on:{click:t.changeFilterStatus}},[t._m(0)])}),n,!1,null,null,null);e.default=component.exports},295:function(t,e,r){"use strict";r.r(e);var n={computed:{sortBy:{get:function(){return this.$store.state.sortBy},set:function(t){this.$store.commit("updateSortBy",t)}}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sort-by"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy,expression:"sortBy"}],staticClass:"sort-by__select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sortBy=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"id"}},[t._v("Default")]),t._v(" "),r("option",{attrs:{value:"price"}},[t._v("Price")]),t._v(" "),r("option",{attrs:{value:"rating"}},[t._v("Rating")])])])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,r){"use strict";r.r(e);var n={computed:{getGrid:function(){return this.$store.getters.getGrid}},methods:{changeGrid:function(t){this.$store.dispatch("changeGrid",t)}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid-options"},[r("div",{staticClass:"grid-options__item",class:{active:t.getGrid},on:{click:function(e){return t.changeGrid(!0)}}},[r("svg",{attrs:{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{x:"1.47046",y:"1",width:"6.28857",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("rect",{attrs:{x:"11.9513",y:"1",width:"6.28845",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("rect",{attrs:{x:"11.9513",y:"11",width:"6.28845",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("rect",{attrs:{x:"1.47046",y:"11",width:"6.28857",height:"6",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),r("div",{staticClass:"grid-options__item",class:{active:!t.getGrid},on:{click:function(e){return t.changeGrid(!1)}}},[r("svg",{attrs:{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1.11511 1H14.7401",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("path",{attrs:{d:"M1.11511 7H14.7401",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("path",{attrs:{d:"M1.11511 13H14.7401",stroke:"#606060","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,r){"use strict";r.r(e);var n={computed:{searchValue:{get:function(){return this.$store.state.searchValue},set:function(t){this.$store.commit("updateSearchValue",t)}}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"form-search__input",attrs:{type:"text",name:"search",id:"search",placeholder:"Search hear"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);r(192);var n={props:{result:{type:Number,required:!0}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"search-results"},[t._v(t._s(t.result)+" results found")])}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,r){"use strict";r.r(e);var n={components:{productPreview:r(288).default},props:{items:{type:Array}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list"},t._l(t.items,(function(t){return r("productPreview",{key:t.id,attrs:{product:t}})})),1)}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-message"},[r("p",[t._v(t._s(t.title))])])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,r){"use strict";var n=r(6),c=r(3),o=r(58),l=r(24),d=r(41),v=r(11),f=r(4),h=r(193),m=r(132),_=r(302),A=r(303),R=r(78),S=r(304),C=[],x=c(C.sort),y=c(C.push),$=f((function(){C.sort(void 0)})),k=f((function(){C.sort(null)})),P=m("sort"),w=!f((function(){if(R)return R<70;if(!(_&&_>3)){if(A)return!0;if(S)return S<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)C.push({k:t+r,v:e})}for(C.sort((function(a,b){return b.v-a.v})),r=0;r<C.length;r++)t=C[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:$||!k||!P||!w},{sort:function(t){void 0!==t&&o(t);var e=l(this);if(w)return void 0===t?x(e):x(e,t);var r,n,c=[],f=d(e);for(n=0;n<f;n++)n in e&&y(c,e[n]);for(h(c,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=c.length,n=0;n<r;)e[n]=c[n++];for(;n<f;)delete e[n++];return e}})},302:function(t,e,r){var n=r(55).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},303:function(t,e,r){var n=r(55);t.exports=/MSIE|Trident/.test(n)},304:function(t,e,r){var n=r(55).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},305:function(t,e,r){"use strict";r.r(e);r(301),r(40),r(15),r(56),r(57),r(105);var n=r(294),c=r(295),o=r(296),l=r(297),d=r(298),v=r(299),f=r(300),h=(r(104),r(133)),m=r.n(h),_={mixins:[{data:function(){return{page:+this.$nuxt.$route.query.page||1,pageSize:9,pageCount:0,allItems:[],items:[]}},mounted:function(){window.addEventListener("load",this.onResize),window.addEventListener("resize",this.onResize)},methods:{onResize:function(){window.innerWidth>780?this.pageSize=9:this.pageSize=8},pageChangeHandler:function(t){window.scrollTo({top:0,behavior:"smooth"}),this.$router.push("".concat(this.$nuxt.$route.path,"?page=").concat(t)),this.items=this.allItems[t-1]||this.allItems[0]},setupPagination:function(t){this.allItems=m.a.chunk(t,this.pageSize),this.pageCount=m.a.size(this.allItems),this.items=this.allItems[this.page-1]||this.allItems[0]}}}],components:{filterBtn:n.default,selectSort:c.default,gridOptions:o.default,search:l.default,searchResults:d.default,productList:v.default,errorMessage:f.default},computed:{filteredProducts:function(){var t=this;return this.getProducts().filter((function(e){return(0===t.getSearchValue().length||e.title.toLowerCase().includes(t.getSearchValue().toLowerCase()))&&(0===t.getCategoriesActive().length||t.getCategoriesActive().includes(e.categoryId))&&(0===t.getBrandsActive().length||t.getBrandsActive().includes(e.brandId))&&(t.getPriceRangeActive()==={}||e.price>=t.getPriceRangeActive().min&&e.price<=t.getPriceRangeActive().max)&&e.price>t.getPriceSlider()[0]&&e.price<=t.getPriceSlider()[1]&&(t.getRatingRangeActive()==={}||e.rating>=t.getRatingRangeActive().min&&e.rating<=t.getRatingRangeActive().max)})).sort((function(a,b){return"price"==t.getSortBy()?a[t.getSortBy()]-b[t.getSortBy()]:"rating"==t.getSortBy()?b[t.getSortBy()]-a[t.getSortBy()]:"id"==t.getSortBy()?a[t.getSortBy()].toString().localeCompare(b[t.getSortBy()].toString()):void 0}))},productsLength:function(){var t=this.filteredProducts;return this.setupPagination(t),t.length}},methods:{getProducts:function(){return this.$store.getters.getProducts},getSearchValue:function(){return this.$store.getters.getSearchValue},getSortBy:function(){return this.$store.getters.getSortBy},getCategoriesActive:function(){return this.$store.getters.getCategoriesActive},getBrandsActive:function(){return this.$store.getters.getBrandsActive},getPriceRangeActive:function(){return this.$store.getters.getPriceRangeActive},getPriceSlider:function(){return this.$store.getters.getPriceSlider},getRatingRangeActive:function(){return this.$store.getters.getRatingRangeActive}}},A=r(20),component=Object(A.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content"},[r("div",{staticClass:"catalog-toolbar"},[r("searchResults",{attrs:{result:t.productsLength}}),t._v(" "),r("filterBtn"),t._v(" "),r("selectSort"),t._v(" "),r("gridOptions"),t._v(" "),r("search")],1),t._v(" "),t.items?r("productList",{attrs:{items:t.items}}):r("errorMessage",{attrs:{title:"Товары не найдены"}}),t._v(" "),t.items?r("div",{staticClass:"pagination"},[r("Paginate",{attrs:{"page-count":t.pageCount,"click-handler":t.pageChangeHandler,"prev-text":"","next-text":"","container-class":"pagination__list","page-class":"pagination__item"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,r){"use strict";r.r(e);var n={components:{catalogFilter:r(293).default},computed:{getFilterStatus:function(){return this.$store.getters.getFilterStatus}},methods:{changeFilterStatus:function(){this.$store.dispatch("changeFilterStatus")}}},c=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"sidebar",class:{show:t.getFilterStatus}},[r("div",{staticClass:"close-btn",on:{click:t.changeFilterStatus}}),t._v(" "),r("catalogFilter")],1)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";r.r(e);var n=r(306),c=r(305),o={components:{sidebar:n.default,catalogContent:c.default},computed:{getFilterStatus:function(){return this.$store.getters.getFilterStatus}},head:function(){var title="Alente e-commerce",t="Тестовое задание от компании Alente";return{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"site"}]}}},l=r(20),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content",class:{"no-scroll":t.getFilterStatus}},[r("div",{staticClass:"container"},[r("div",{staticClass:"catalog-wrapper"},[r("sidebar"),t._v(" "),r("catalogContent")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);