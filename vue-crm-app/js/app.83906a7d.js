(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-03ddbb00":"5ac08475","chunk-10b86dd9":"1ffc73d1","chunk-2d217a99":"96030938","chunk-2d21a3d2":"19e4d8b3","chunk-3adf0cb4":"96880549","chunk-53c8ec65":"10d67d41","chunk-72449522":"93991aa2","chunk-8f8e2cc8":"b13746b2","chunk-cfa57870":"84ea2126"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-03ddbb00":1,"chunk-3adf0cb4":1,"chunk-8f8e2cc8":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-03ddbb00":"a44684d1","chunk-10b86dd9":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-3adf0cb4":"a2427d49","chunk-53c8ec65":"31d6cfe0","chunk-72449522":"31d6cfe0","chunk-8f8e2cc8":"daf08dc4","chunk-cfa57870":"31d6cfe0"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-crm-app/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4360:function(e,t,r){"use strict";r("d3b7"),r("96cf");var n=r("1da1"),a=r("2b0e"),o=r("2f62"),i=(r("b0c0"),r("59ca")),c=r.n(i),s={actions:{login:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,o=t.password,r.prev=2,r.next=5,c.a.auth().signInWithEmailAndPassword(a,o);case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},register:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=t.email,i=t.password,s=t.name,r.prev=2,r.next=5,c.a.auth().createUserWithEmailAndPassword(o,i);case 5:return r.next=7,n("getUid");case 7:return u=r.sent,r.next=10,c.a.database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:s});case 10:r.next=16;break;case 12:throw r.prev=12,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},getUid:function(){var e=c.a.auth().currentUser;return e?e.uid:null},logout:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,c.a.auth().signOut();case 3:r("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},u=r("5530"),l={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{updateInfo:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=e.getters,r.prev=1,r.next=4,n("getUid");case 4:return i=r.sent,s=Object(u["a"])(Object(u["a"])({},o.info),t),r.next=8,c.a.database().ref("/users/".concat(i,"/info")).update(s);case 8:a("setInfo",s),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},fetchInfo:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,c.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),n("setInfo",o),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},d=(r("d81d"),r("b64b"),{actions:{fetchCategories:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,c.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(u["a"])(Object(u["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchCategoryById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,c.a.database().ref("/users/".concat(o,"/categories")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return i=r.t0,r.abrupt("return",Object(u["a"])(Object(u["a"])({},i),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},updateCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.id,i=t.title,s=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return u=r.sent,r.next=8,c.a.database().ref("/users/".concat(u,"/categories")).child(o).update({title:i,limit:s});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},createCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,i=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return s=r.sent,r.next=8,c.a.database().ref("/users/".concat(s,"/categories")).push({title:o,limit:i});case 8:return u=r.sent,r.abrupt("return",{title:o,limit:i,id:u.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()}}}),f={actions:{createRecord:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,c.a.database().ref("/users/".concat(o,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,c.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(u["a"])(Object(u["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,c.a.database().ref("/users/".concat(o,"/records")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return i=r.t0,r.abrupt("return",Object(u["a"])(Object(u["a"])({},i),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}};a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},actions:{fetchCurrency:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="12a815d9cb419f00b9052890e4ff4a0f",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},modules:{auth:s,info:l,category:d,record:f}})},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("1dce"),o=r.n(a),i=r("8832"),c=r.n(i),s=r("58ca"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},l=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},f=[],p=r("b444"),m=r("e977"),g={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(Object(m["a"])(p["a"][e.code])||Object(m["a"])("Message_Something_Wrong"))}}},h=g,_=r("2877"),b=Object(_["a"])(h,d,f,!1,null,null,null),v=b.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.localizeStr("MainLayout_Create_Record"),expression:"localizeStr('MainLayout_Create_Record')"}],staticClass:"btn-floating btn-large blue",attrs:{"data-btn":"add",to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},w=[],C=(r("b64b"),r("96cf"),r("1da1")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(" "+e._s(e._f("localize")("Profile_Title"))+" ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(" "+e._s(e._f("localize")("Logout"))+" ")])])])])])])])},x=[],O=(r("b0c0"),{data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=window.M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}}),R=O,E=Object(_["a"])(R,k,x,!1,null,null,null),j=E.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},L=[],H={props:["value"],data:function(){return{links:[{title:Object(m["a"])("Menu_Account"),url:"/",exact:!0},{title:Object(m["a"])("Menu_History"),url:"/history"},{title:Object(m["a"])("Menu_Planning"),url:"/planning"},{title:Object(m["a"])("Menu_Record"),url:"/record"},{title:Object(m["a"])("Menu_Categories"),url:"/categories"}]}}},U=H,S=Object(_["a"])(U,N,L,!1,null,null,null),A=S.exports,P=r("d437"),I={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(Object(m["a"])(p["a"][e.code])||Object(m["a"])("Message_Something_Wrong"))}},mounted:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:r="ru-RU"===e.$store.getters.info.locale,localStorage.setItem("locale",JSON.stringify(r)),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},methods:{localizeStr:function(e){return Object(m["a"])(e)}},components:{Navbar:j,Sidebar:A,Loader:P["a"]}},T=I,D=Object(_["a"])(T,y,w,!1,null,null,null),$=D.exports,B={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:v,MainLayout:$}},F=B,W=(r("5c0b"),Object(_["a"])(F,u,l,!1,null,null,null)),z=W.exports,J=(r("45fc"),r("d3b7"),r("8c4f")),K=r("59ca"),q=r.n(K);n["a"].use(J["a"]);var G=[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-3adf0cb4").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-03ddbb00").then(r.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-10b86dd9").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-cfa57870").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-72449522").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-8f8e2cc8").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-53c8ec65").then(r.bind(null,"43ef"))}}],X=new J["a"]({mode:"history",base:"/vue-crm-app/",routes:G});X.beforeEach((function(e,t,r){var n=q.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var Y=X,Z=r("4360");r("caad"),r("2532");function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=Z["a"].getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}var V=r("5bb3"),ee={bind:function(e,t){var r=t.value,n={html:r,position:"bottom"};"add"===e.dataset.btn||"refresh"===e.dataset.btn?n.position="left":"open"===e.dataset.btn&&(n.position="top"),window.M.Tooltip.init(e,n)},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},te={install:function(e,t){e.prototype.$message=function(e){window.M.toast({html:e})},e.prototype.$error=function(e){window.M.toast({html:"[Ошибка]: ".concat(e)})}}},re=(r("99af"),{install:function(e){e.prototype.$title=function(e){var t="Mikhail CRM";return"".concat(Object(m["a"])(e)," | ").concat(t)}}}),ne=r("9483");Object(ne["a"])("".concat("/vue-crm-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("6885"),r("ea7b"),r("66ce");n["a"].config.productionTip=!1,n["a"].use(te),n["a"].use(re),n["a"].use(o.a),n["a"].use(s["a"]),n["a"].filter("date",Q),n["a"].filter("currency",V["a"]),n["a"].filter("localize",m["a"]),n["a"].directive("tooltip",ee),n["a"].component("Loader",P["a"]),n["a"].component("Paginate",c.a);var ae,oe={apiKey:"AIzaSyDxKGDj44PknepHXl1vEMzNXK8GgoL6GXs",authDomain:"vue-crm-db.firebaseapp.com",databaseURL:"https://vue-crm-db.firebaseio.com",projectId:"vue-crm-db",storageBucket:"vue-crm-db.appspot.com",messagingSenderId:"859678497698",appId:"1:859678497698:web:46c2de937f2375401530fb",measurementId:"G-P30QZ5ZLKP"};q.a.initializeApp(oe),q.a.auth().onAuthStateChanged((function(){ae||(ae=new n["a"]({router:Y,store:Z["a"],render:function(e){return e(z)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},7704:function(e){e.exports=JSON.parse('{"Login":"Войти","Logout":"Выйти","Login_App_Name":"Домашняя бухгалтерия","Register":"Зарегистрироваться","Register_Agree":"С правилами согласен","No_Account":"Нет аккаунта?","Have_Account":"Уже есть аккаунт?","Name":"Имя","Enter_Name":"Введите ваше имя","Enter_Password":"Введите пароль","Enter_Description":"Введите описание","Email_Not_Empty":"Поле Email не должно быть пустым","Email_Correct":"Введите корректный Email","Password":"Пароль","Password_Should_Be":"Пароль должен быть","Password_Length":"символов. Сейчас он","Create":"Создать","Update":"Обновить","Income":"Доход","Outcome":"Расход","Amount":"Сумма","Date":"Дата","Profile_Title":"Профиль","Detail_Title":"Запись","Login_Title":"Вход","Register_Title":"Регистрация","Menu_Account":"Счет","Menu_History":"История","Menu_Planning":"Планирование","Menu_Record":"Новая запись","Menu_Categories":"Категории","Category_Not_Found":"Категорий пока нет","Category_Add":"Добавить новую категорию","Category_Create":"Создать","Category_Name":"Название","Category_Enter_Name":"Введите название категории","Category_Limit":"Лимит","Category_Limit_Not_Empty":"Поле Лимит не должно быть пустым","Category_Minimal":"Минимальное значение","Category_Edit":"Редактировать","Category_Choose":"Выберите категорию","Detail_Description":"Описание","Detail_Category":"Категория","Detail_History":"История","Detail_Warning":"Запись не найдена","History_Title":"История записей","History_Not_Found":"Записей пока нет","History_Add_First":"Добавьте первую","History_Back":"Назад","History_Forward":"Вперед","HistoryTable_Category":"Категория","HistoryTable_Type":"Тип","HistoryTable_Open":"Открыть","HistoryTable_Label":"Расходы по категориям","HistoryTable_Show_Record":"Показать запись","MainLayout_Create_Record":"Создать новую запись","Home_Refresh":"Обновить данные","HomeBill_Account_In_Currencies":"Счет в валюте","HomeBill_Exchange_Rates":"Курсы валют","HomeCurrency_Currency":"Валюта","HomeCurrency_Rate":"Курс","Planning_Out_Of":"из","Message_Logout":"Вы вышли из системы","Message_Login":"Для начала войдите в систему","Message_User_Not_Found":"Пользователя с таким email не существует","Message_Wrong_Password":"Неверный пароль","Message_Email_In_Use":"Email уже занят","Message_Something_Wrong":"Что-то пошло не так","Message_Category_Created":"Категория была создана","Message_Category_Updated":"Категория успешно обновлена","Message_Record_Updated":"Запись успешно обновлена","Message_Record_Insufficient":"Недостаточно средств на счёте"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Message_Logout",login:"Message_Login","auth/user-not-found":"Message_User_Not_Found","auth/wrong-password":"Message_Wrong_Password","auth/email-already-in-use":"Message_Email_In_Use"}},d437:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],o={name:"loader",computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},i=o,c=r("2877"),s=Object(c["a"])(i,n,a,!1,null,null,null);t["a"]=s.exports},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("4360"),a=r("7704"),o=r("edd4"),i={"ru-RU":a,"en-US":o};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t||(t=n["a"].getters.info.locale?n["a"].getters.info.locale:"boolean"===typeof JSON.parse(localStorage.getItem("locale"))?JSON.parse(localStorage.getItem("locale"))?"ru-RU":"en-US":"ru-RU"),i[t][e]||"[Localize error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"Login":"Login","Logout":"Logout","Login_App_Name":"Home bookkeeping","Register":"Register","Register_Agree":"I agree with the rules","No_Account":"No account?","Have_Account":"Already have an account?","Name":"Name","Enter_Name":"Enter your name","Enter_Password":"Enter the password","Enter_Description":"Enter description","Email_Not_Empty":"The Email field should not be empty","Email_Correct":"Enter a valid Email","Password":"Password","Password_Should_Be":"Password should be","Password_Length":"characters. Now it is equal to","Create":"Create","Update":"Update","Income":"Income","Outcome":"Outcome","Amount":"Amount","Date":"Date","Profile_Title":"Profile","Detail_Title":"Details","Login_Title":"Login","Register_Title":"Register","Menu_Account":"Account","Menu_History":"History","Menu_Planning":"Planning","Menu_Record":"New Record","Menu_Categories":"Categories","Category_Not_Found":"No categories yet","Category_Add":"Add the new category","Category_Create":"Create","Category_Name":"Category name","Category_Enter_Name":"Enter the category name","Category_Limit":"Limit","Category_Limit_Not_Empty":"Limit field should not be empty","Category_Minimal":"Minimal value","Category_Edit":"Edit","Category_Choose":"Choose the category","Detail_Description":"Description","Detail_Category":"Category","Detail_History":"History","Detail_Warning":"The record is not found","History_Title":"Records history","History_Not_Found":"No records yet","History_Add_First":"Add first record","History_Back":"Back","History_Forward":"Forward","HistoryTable_Category":"Category","HistoryTable_Type":"Type","HistoryTable_Open":"Open","HistoryTable_Label":"Expenses by category","HistoryTable_Show_Record":"Show this record","MainLayout_Create_Record":"Create new record","Home_Refresh":"Refresh data","HomeBill_Account_In_Currencies":"Account in currencies","HomeBill_Exchange_Rates":"Exchange Rates","HomeCurrency_Currency":"Currency","HomeCurrency_Rate":"Rate","Planning_Out_Of":"out of","Message_Logout":"You are logged out","Message_Login":"You need to log in","Message_User_Not_Found":"User with this email does not exist","Message_Wrong_Password":"Wrong password","Message_Email_In_Use":"Email is already in use","Message_Something_Wrong":"Something went wrong","Message_Category_Created":"Category has been created","Message_Category_Updated":"Category has been successfully updated","Message_Record_Updated":"Record has been successfully updated","Message_Record_Insufficient":"Insufficient funds on the account"}')}});
//# sourceMappingURL=app.83906a7d.js.map