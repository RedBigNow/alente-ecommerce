(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,8],{282:function(t,e,r){"use strict";r.r(e);var l={props:{title:{type:String,required:!0},alias:{type:String,required:!0},items:{type:Array,required:!0}}},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Multi Range")]),t._v(" "),t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"filter-item__radio"},[r("input",{staticClass:"radio-input",attrs:{name:t.alias,id:t.alias+"_"+e.id,type:"radio"},domProps:{value:e.text,checked:e.checked}}),t._v(" "),r("label",{attrs:{for:t.alias+"_"+e.id}},[t._v(t._s(e.text))])])}))],2)}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,r){"use strict";r.r(e);var l={props:{title:{type:String,required:!0},alias:{type:String,required:!0},items:{type:Array,required:!0}}},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"filter-item__checkbox"},[r("input",{staticClass:"checkbox-input",attrs:{type:"checkbox",name:t.alias,id:t.alias+"_"+e.id},domProps:{value:e.id}}),t._v(" "),r("label",{attrs:{for:t.alias+"_"+e.id}},[t._v(t._s(e.name||e.title)+" "),r("sup",[t._v("1920")])])])}))],2)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,r){"use strict";r.r(e);var l=r(282),n=r(283),c={components:{radioFieldset:l.default,checkboxFieldset:n.default},created:function(){this.$store.dispatch("setCategories"),this.$store.dispatch("setBrands")},computed:{getCategories:function(){return this.$store.getters.getCategories},getBrands:function(){return this.$store.getters.getBrands},getPriceRange:function(){return this.$store.getters.getPriceRange}}},_=r(12),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter"},[r("p",[t._v("Фильтр")]),t._v(" "),r("form",{staticClass:"filter__form"},[r("radioFieldset",{attrs:{title:"Multi Range",alias:"multi_range",items:t.getPriceRange}}),t._v(" "),t._m(0),t._v(" "),r("checkboxFieldset",{attrs:{title:"Category",alias:"category",items:t.getCategories}}),t._v(" "),r("checkboxFieldset",{attrs:{title:"Brand",alias:"brand",items:t.getBrands}}),t._v(" "),t._m(1)],1),t._v(" "),r("div",{staticClass:"filter__btn-wrapper"},[r("AppButton",[t._v("Clear all filters")])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Slider")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",{staticClass:"filter-item"},[r("span",{staticClass:"filter-item__title"},[t._v("Rating")]),t._v(" "),r("div",{staticClass:"rating-area"},[r("input",{attrs:{type:"radio",id:"star-5",name:"rating",value:"5"}}),t._v(" "),r("label",{attrs:{for:"star-5",title:"Оценка «5»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-4",name:"rating",value:"4"}}),t._v(" "),r("label",{attrs:{for:"star-4",title:"Оценка «4»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-3",name:"rating",value:"3"}}),t._v(" "),r("label",{attrs:{for:"star-3",title:"Оценка «3»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-2",name:"rating",value:"2"}}),t._v(" "),r("label",{attrs:{for:"star-2",title:"Оценка «2»"}}),t._v(" "),r("input",{attrs:{type:"radio",id:"star-1",name:"rating",value:"1"}}),t._v(" "),r("label",{attrs:{for:"star-1",title:"Оценка «1»"}}),t._v(" "),r("sup",[t._v("1820")])])])}],!1,null,null,null);e.default=component.exports}}]);