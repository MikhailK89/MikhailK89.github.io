(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72449522"],{"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,o=r("a640"),a=r("ae40"),c=o("reduce"),s=a("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!s},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},6859:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localize")("Menu_Planning")))]),r("h4",[e._v(e._s(e._f("currency")(e.info.bill,"RUB")))])]),e.loading?r("Loader"):e.categories.length?r("section",e._l(e.categories,(function(t){return r("div",{key:t.id},[r("p",[r("strong",[e._v(e._s(t.title)+":")]),e._v(" "+e._s(e._f("currency")(t.spend,"RUB"))+" "+e._s(e._f("localize")("Planning_Out_Of"))+" "+e._s(e._f("currency")(t.limit,"RUB"))+" ")]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"c.tooltip"}],staticClass:"progress"},[r("div",{staticClass:"determinate",class:[t.progressColor],style:{width:t.progressPercent+"%"}})])])})),0):r("p",{staticClass:"center"},[e._v(" "+e._s(e._f("localize")("Category_Not_Found"))+". "),r("router-link",{attrs:{to:"/categories"}},[e._v(" "+e._s(e._f("localize")("Category_Add"))+". ")])],1)],1)},i=[],o=(r("99af"),r("4de4"),r("d81d"),r("13d5"),r("96cf"),r("1da1")),a=r("5530"),c=r("2f62"),s=r("5bb3"),l={name:"planning",metaInfo:function(){return{title:this.$title("Menu_Planning")}},data:function(){return{loading:!0,categories:[]}},computed:Object(a["a"])({},Object(c["c"])(["info"])),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchRecords");case 2:return r=t.sent,t.next=5,e.$store.dispatch("fetchCategories");case 5:n=t.sent,e.categories=n.map((function(e){var t=r.filter((function(t){return t.categoryId===e.id})).filter((function(e){return"outcome"===e.type})).reduce((function(e,t){return e+ +t.amount}),0),n=t/e.limit*100,i=n>100?100:n,o=n<60?"green":n<100?"yellow":"red",c=e.limit-t,l="".concat(c<0?"Превышение на":"Осталось"," ").concat(Object(s["a"])(Math.abs(c)));return Object(a["a"])(Object(a["a"])({},e),{},{progressPercent:i,progressColor:o,spend:t,tooltip:l})})),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},u=l,d=r("2877"),f=Object(d["a"])(u,n,i,!1,null,null,null);t["default"]=f.exports},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),o=r("44ad"),a=r("50c4"),c=function(e){return function(t,r,c,s){n(r);var l=i(t),u=o(l),d=a(l.length),f=e?d-1:0,p=e?-1:1;if(c<2)while(1){if(f in u){s=u[f],f+=p;break}if(f+=p,e?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:d>f;f+=p)f in u&&(s=r(s,u[f],f,l));return s}};e.exports={left:c(!1),right:c(!0)}}}]);
//# sourceMappingURL=chunk-72449522.93991aa2.js.map