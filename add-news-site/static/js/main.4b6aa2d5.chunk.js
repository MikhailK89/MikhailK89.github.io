(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),i=(a(15),a(6)),o=a(1),l=a(2),u=a(4),m=a(3),d=a(5),h=(a(16),a(9)),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={author:"Butters",bigText:""},a.onBtnClickHandler=function(e){e.preventDefault();var t=a.state,n=t.author,r=t.bigText;a.props.onAddPosts({id:+new Date,author:n,bigText:r}),a.setState({bigText:""})},a.handleChange=function(e){var t=e.currentTarget,n=t.id,r=t.value;a.setState(Object(h.a)({},n,r))},a.validate=function(){var e=a.state,t=e.author,n=e.bigText;return!(!t.trim()||!n.trim())},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.bigText;return r.a.createElement("div",{className:"add"},r.a.createElement("form",{className:"add__form"},r.a.createElement("div",{className:"add__input"},r.a.createElement("textarea",{id:"bigText",onChange:this.handleChange,className:"add__text",placeholder:"Type your message",value:e})),r.a.createElement("div",{className:"add__send"},r.a.createElement("button",{className:"add__btn",onClick:this.onBtnClickHandler,disabled:!this.validate()},"Send"))))}}]),t}(r.a.Component),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.setClassAuthor=function(){return a.props.counter%2===0?"message__author-left":"message__author-right"},a.setClassPost=function(){return a.props.counter%2===0?"message__post-left":"message__post-right"},a.handleReadMoreClick=function(e){e.preventDefault(),a.setState((function(e){return{visible:!e.visible}}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"cropAuthor",value:function(e){return e.split(" ")[0].trim()}},{key:"render",value:function(){var e=this.props.data,t=e.author,a=e.bigText,n=this.state.visible,s=a.slice(0,300);return a=a.slice(300),r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:this.setClassAuthor()},this.cropAuthor(t)),r.a.createElement("div",{className:this.setClassPost()},r.a.createElement("span",{className:"message__text"},s),n&&r.a.createElement("span",{className:"message__big-text"},a),!n&&a&&r.a.createElement("div",{className:"message__readmore"},r.a.createElement("a",{onClick:this.handleReadMoreClick,href:"#"},"show more")),n&&r.a.createElement("div",{className:"message__hide"},r.a.createElement("a",{onClick:this.handleReadMoreClick,href:"#"},"hide"))))}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderPosts=function(){var e=a.props.data,t=null,n=0;return e.length?e.map((function(e){return null===t&&(t=e.author),t!==e.author&&(n++,t=e.author),r.a.createElement(p,{key:e.id,data:e,counter:n})})):r.a.createElement("div",{className:"message__no-messages"},r.a.createElement("div",null,"no messages yet"))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"chat"},e.length?r.a.createElement("div",{className:"chat__counter"},"total posts: ",e.length):null,this.renderPosts())}}]),t}(r.a.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={list:null,listCopy:null,isLoaded:!1,searchText:""},a.renderContacts=function(){return a.state.list.map((function(e){return r.a.createElement("div",{className:"contacts__item",key:e.id},r.a.createElement("div",{className:"contacts__photo"},r.a.createElement("img",{src:e.src,alt:""})),r.a.createElement("div",{className:"person"},r.a.createElement("div",{className:"person__name"},e.author),r.a.createElement("div",{className:"status"},r.a.createElement("div",{className:"status__icon"}),r.a.createElement("div",{className:"status__title"},"online"))))}))},a.handleSearch=function(e){var t=e.currentTarget.value,n=a.state.listCopy.filter((function(e){for(var a=e.author.split(" "),n=0;n<a.length;n++){if(new RegExp("^".concat(t),"i").test(a[n].trim()))return!0}return!1}));a.setState({searchText:t,list:n})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.getChatData,n=t.checkStatus;fetch("./data/contactsData.json").then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.setState({list:t,listCopy:t,isLoaded:!0}),n("loaded"),a(t[0].author)}),3e3)})).catch((function(e){return n("error")}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.searchText,n=this.props.loadChat;return r.a.createElement("div",{className:"contacts",onClick:n},r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search__input",onChange:this.handleSearch,type:"text",placeholder:"search",value:a,autoComplete:"off"}),r.a.createElement("div",{className:"search__icon"},r.a.createElement("img",{src:"./data/images/search.svg",alt:"search"}))),r.a.createElement("div",{className:"contacts__list"},t&&this.renderContacts()))}}]),t}(r.a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",(function(e){var t=e.target.closest(".user"),a=e.target.closest(".header__burger"),n=document.querySelector(".user.show");if(!t&&!a&&n){var r=new Event("click",{bubbles:!0});document.querySelector(".header__burger").dispatchEvent(r)}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"user__photo"},r.a.createElement("img",{src:"./data/images/avatars/butters.png",alt:""})),r.a.createElement("div",{className:"user__title"},r.a.createElement("div",{className:"user__name"},"Butters"),r.a.createElement("div",{className:"user__city"},r.a.createElement("img",{src:"./data/images/user-icons/home.svg"}),"South Park, USA"),r.a.createElement("div",{className:"user__tel"},r.a.createElement("img",{src:"./data/images/user-icons/telephone.svg"}),"+1 (XXX) XXX-XXXX")),r.a.createElement("div",{className:"user__options"},r.a.createElement("a",{className:"user__contacts",href:"#"},r.a.createElement("img",{src:"./data/images/user-icons/contacts.svg"}),"Contacts"),r.a.createElement("a",{className:"user__favorite",href:"#"},r.a.createElement("img",{src:"./data/images/user-icons/favorite.svg"}),"Favorite"),r.a.createElement("a",{className:"user__settings",href:"#"},r.a.createElement("img",{src:"./data/images/user-icons/settings.svg"}),"Settings"),r.a.createElement("a",{className:"user__invite",href:"#"},r.a.createElement("img",{src:"./data/images/user-icons/invite.svg"}),"Invite friends"),r.a.createElement("a",{className:"user__help",href:"#"},r.a.createElement("img",{src:"./data/images/user-icons/help.svg"}),"Help")))}}]),t}(r.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleBurger",value:function(e){var t=document.querySelector(".user");t.classList.toggle("show"),t.classList.contains("show")?e.currentTarget.style.transform="rotate(180deg)":e.currentTarget.style.transform=""}},{key:"render",value:function(){var e=this.props,t=e.chatWith,a=e.contactsStatus;return r.a.createElement("div",{className:"header"},"loaded"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header__left"},r.a.createElement("img",{className:"header__burger",src:"data/images/burger.svg",alt:"burger",onClick:this.handleBurger}),r.a.createElement("div",{className:"header__title"},"Header")),t&&r.a.createElement("div",{className:"header__right"},"Chat with:\xa0",r.a.createElement("span",{className:"header__chat-with"},t)),r.a.createElement(_,null)))}}]),t}(r.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.text;return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"loading__spinner"},r.a.createElement("div",{className:"loading__icon"}),r.a.createElement("div",{className:"loading__title"},e)))}}]),t}(r.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.text;return r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"error__title"},e))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={posts:null,contactsStatus:"",chatStatus:""},a.chatWith="",a.spinSettings={timerId:null,pos:0,switcher:!0,borderColor:"#434753"},a.getChatData=function(e){fetch("./data/chatData.json").then((function(e){return e.json()})).then((function(t){var n=t.filter((function(t){if(t.chatWith===e)return!0}));setTimeout((function(){a.chatWith=e,a.setState({posts:n,chatStatus:"loaded"})}),3e3)})).catch((function(e){return a.setState({chatStatus:"error"})}))},a.handleAddPosts=function(e){var t=[].concat(Object(i.a)(a.state.posts),[e]);a.setState({posts:t}),setTimeout((function(){var e=document.getElementsByClassName("chat")[0];e.scrollTop=e.scrollHeight}),0)},a.loadChat=function(e){var t=e.target.closest(".contacts__item");if(t){var n=t.querySelector(".person__name").innerHTML;a.setState({chatStatus:""}),a.getChatData(n)}},a.contactsLoading=function(e){a.setState({contactsStatus:e})},a.runSpinner=function(){var e=a.spinSettings;if(!e.timerId){var t=["borderTop","borderRight","borderBottom","borderLeft"],n=e.pos,r=e.switcher,s=document.querySelector(".loading__icon");s&&(s.style.borderColor=e.borderColor);var c=setInterval((function(){e.timerId||(e.timerId=c);var a=document.querySelector(".loading__icon");if(!a)return e.timerId=null,void clearInterval(c);4===n&&(n=0,r=!r),a.style[t[n]]=r?"5px solid transparent":"5px solid #434753",n++,e.pos=n,e.switcher=r,e.borderColor=a.style.borderColor}),1e3)}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.runSpinner()}},{key:"componentDidUpdate",value:function(){clearInterval(this.spinSettings.timerId),this.spinSettings.timerId=null,this.runSpinner()}},{key:"createStatusText",value:function(e,t){var a="";return"error"===e?(a="Contacts loading error...",r.a.createElement(y,{text:a})):"error"===t?(a="Chat loading error...",r.a.createElement(y,{text:a})):""===e?(a="Contacts loading...",r.a.createElement(E,{text:a})):"loaded"===e&&""===t?(a="Chat loading...",r.a.createElement(E,{text:a})):void 0}},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.contactsStatus,n=e.chatStatus;return r.a.createElement("div",{className:"container"},r.a.createElement(b,{chatWith:this.chatWith,contactsStatus:a}),r.a.createElement("div",{className:"info"},r.a.createElement(f,{loadChat:this.loadChat,checkStatus:this.contactsLoading,getChatData:this.getChatData}),r.a.createElement("div",{className:"content"},this.createStatusText(a,n),"loaded"===n&&r.a.createElement(g,{data:t}),"loaded"===n&&r.a.createElement(v,{onAddPosts:this.handleAddPosts}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a;return Array.isArray(t.posts)?((a=Object(i.a)(t.posts)).forEach((function(e){e.bigText=e.bigText.replace(/\bwow\b/gi,"<spam>")})),{posts:a}):null}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4b6aa2d5.chunk.js.map