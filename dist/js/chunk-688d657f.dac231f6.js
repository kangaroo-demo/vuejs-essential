(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-688d657f"],{"3e0d":function(t,e,i){},d6d1:function(t,e,i){"use strict";i("3e0d")},e369:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog-container"},[i("div",{staticClass:"blog-pages"},[i("div",{staticClass:"col-md-12 panel"},[i("div",{staticClass:"panel-body"},[i("h2",{staticClass:"text-center"},[t._v(t._s(t.articleId?"编辑文章":"创作文章"))]),i("hr"),i("div",{attrs:{"data-validator-form":""}},[i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"},{name:"validator",rawName:"v-validator.required",value:{title:"标题"},expression:"{ title: '标题' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写标题"},domProps:{value:t.title},on:{input:[function(e){e.target.composing||(t.title=e.target.value)},t.saveTitle]}})]),t._m(0),i("br"),i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.post}},[t._v("发 布")])])])])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("textarea",{attrs:{id:"editor"}})])}],n=(i("498a"),i("ebfb")),r=i.n(n),l=i("e8ec"),o=i("1487"),c=i.n(o);window.hljs=c.a;var d={name:"Create",data:function(){return{title:"",content:"",articleId:void 0}},beforeRouteEnter:function(t,e,i){i((function(t){t.$nextTick().then((function(){t.setArticleId(t.$route.params.articleId)}))}))},beforeRouteLeave:function(t,e,i){this.clearData(),i()},watch:{$route:function(t){this.clearData(),this.setArticleId(t.params.articleId)}},mounted:function(){var t=this,e=new r.a({element:document.querySelector("#editor"),placeholder:"请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。",spellChecker:!1,autoDownloadFontAwesome:!1,autosave:{enabled:!0,uniqueId:"vuejs-essential"},renderingConfig:{codeSyntaxHighlighting:!0}});e.codemirror.on("change",(function(){t.content=e.value()})),this.simplemde=e},methods:{saveTitle:function(){l["a"].setItem("smde_title",this.title)},fillContent:function(t){var e=this.simplemde,i=l["a"].getItem("smde_title");if(void 0!==t){var a=this.$store.getters.getArticleById(t);if(a){var s=a.title,n=a.content;this.title=i||s,this.content=e.value()||n,e.value(this.content)}}else this.title=i,this.content=e.value();this.content=e.value()},post:function(){var t=this.title,e=this.content;if(""!==t&&""!==e.trim()){var i={title:t,content:e};this.$store.dispatch("post",{article:i,articleId:this.articleId}),this.clearData()}},clearData:function(){this.title="",l["a"].removeItem("smde_title"),this.simplemde.value(""),this.simplemde.clearAutosavedValue()},setArticleId:function(t){var e=l["a"].getItem("articleId");void 0!==t&&t!==e&&this.clearData(),this.articleId=t,this.fillContent(t),l["a"].setItem("articleId",t)}}},u=d,m=(i("d6d1"),i("2877")),v=Object(m["a"])(u,a,s,!1,null,"57bd6733",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-688d657f.dac231f6.js.map