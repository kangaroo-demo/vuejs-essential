(function(t){function e(e){for(var i,a,l=e[0],r=e[1],c=e[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,l=1;l<n.length;l++){var r=n[l];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vuejs-essential/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c6c":function(t,e,n){"use strict";n("b2da")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("TheHeader"),n("the-footer")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})]),n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])]),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,(function(e,i){return n("li",{class:{active:i===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){return t.changeNavIndex(i)}}},[t._v(t._s(e))])])})),0)])])])},l=[],r={name:"TheHeader",data:function(){return{logo:{src:"".concat(this.uploadsUrl),title:"Learnku Vue.js"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://cdn.learnku.com//uploads/communities/hIZjRRdF8oVYZy69XJnT.png"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},c=r,u=(n("a9f4"),n("2877")),p=Object(u["a"])(c,a,l,!1,null,"3bd820fa",null),d=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),n("div",{staticClass:"text-md"},t._l(t.contacts,(function(e,i){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],key:i,style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])})),0),n("br"),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,(function(t,e){return n("li",{key:e},[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])})),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,(function(e,i){return n("li",{key:i},[t._v(t._s(e.title)+": "+t._s(e.description))])})),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,(function(e,i){return n("li",{key:i},[n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+" ")])])})),0)])])])])])])},f=[];function h(t,e){var n=m(),i=n.style;if(void 0===e)i.display="none";else{var s=t.getBoundingClientRect(),o=window.getComputedStyle(t,null),a=parseInt(o.getPropertyValue("padding-right"))||0,l=parseInt(o.getPropertyValue("padding-top"))||0;i.visibility="hidden",i.display="block",n.querySelector(".popover-content").textContent=e,i.left=s.left-n.offsetWidth/2+(t.offsetWidth-a)/2+"px",i.top=s.top-n.offsetHeight+l+"px",i.display="block",i.visibility="visible"}}function m(){var t=document.querySelector(".title-popover");if(!t){var e='\n        <div class="popover title-popover top fade in" style="position:fixed;">\n          <div class="arrow"></div>\n          <div class="popover-content"></div>\n        </div>\n      ',n=document.createRange().createContextualFragment(e);document.body.appendChild(n),t=document.querySelector(".title-popover")}return t}var b={bind:function(t,e,n){var i=["mouseenter","mouseleave","click"],s=function(n){"mouseenter"===n.type?h(t,e.value):h()};i.forEach((function(e){t.addEventListener(e,s,!1)})),t.destroy=function(){i.forEach((function(e){t.removeEventListener(e,s,!1)})),t.destroy=null}},unbind:function(t){t.destroy()}},g={name:"TheFooter",directives:{title:b},data:function(){return{description:"Learnku Vue.js 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://learnku.com/vuejs/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://cdn.learnku.com/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://cdn.learnku.com/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://cdn.learnku.com/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://cdn.learnku.com/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://learnku.com/vuejs/contact"},{icon:"globe",title:"推荐网站",link:"https://learnku.com/vuejs/sites"}]}}}},y=g,_=(n("0c6c"),Object(u["a"])(y,v,f,!1,null,"0ffad662",null)),w=_.exports,C={name:"App",components:{TheHeader:d,TheFooter:w}},k=C,x=(n("5c0b"),Object(u["a"])(k,s,o,!1,null,null,null)),j=x.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},a9f4:function(t,e,n){"use strict";n("c466")},b2da:function(t,e,n){},c466:function(t,e,n){}});
//# sourceMappingURL=app.8c377b70.js.map