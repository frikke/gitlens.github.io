!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){n(2),t.exports=n(1)},function(t,e,n){},function(t,e,n){"use strict";var s,i;n.r(e),function(t){t.on=function(t,e,n,s,i){let o=!1;if("string"==typeof t){const a=(null!=i?i:document).querySelectorAll(t);for(const t of a)t.addEventListener(e,n,null!=s&&s);return{dispose:()=>{if(!o){o=!0;for(const t of a)t.removeEventListener(e,n,null!=s&&s)}}}}return t.addEventListener(e,n,null!=s&&s),{dispose:()=>{o||(o=!0,t.removeEventListener(e,n,null!=s&&s))}}},t.$=function(t){return document.querySelectorAll(t)}}(s||(s={})),function(t){t.clear=function(){localStorage.clear()},t.get=function(t){const e=localStorage.getItem(t);if(null!=e)return JSON.parse(e)},t.remove=function(t){localStorage.removeItem(t)},t.set=function(t,e){localStorage.setItem(t,JSON.stringify(e))}}(i||(i={}));class o{constructor(t){this.name=t,s.on(`[data-action="${this.name}"]`,"click",this.onButtonClicked.bind(this));const e=s.$(`.section[data-view="${this.name}"]`)[0];this.classes=["is-section",`is-section--${this.name}`];const n=e.dataset.classes;null!=n&&this.classes.push(...n.split(" "))}get hash(){return`#${this.name}`}activate(t,e=!1){document.body.classList.add(...this.classes)}deactivate(){document.body.classList.remove(...this.classes)}getHash(t){return`${this.hash}${t?`${t.startsWith("/")?t:`/${t}`}`:""}`.toLowerCase()}matchesPath(t){var e;return(null===(e=document.location.hash)||void 0===e?void 0:e.toLowerCase())===this.getHash(t)}setPath(t){document.location.hash=this.getHash(t)}onButtonClicked(t){var e;(null===(e=document.location.hash)||void 0===e?void 0:e.startsWith(this.hash))?document.location.hash="":this.setPath()}}new class{constructor(){this.activeView="",this._sectionCompleteHandle=0,this.views=[];for(const t of s.$(".section[data-view]")){const e=t.dataset.view;null!=e&&this.views.push(new o(e))}s.on('[data-action="back"]',"click",this.onBackButtonClicked.bind(this)),window.addEventListener("hashchange",this.onHashChanged.bind(this),!1);const[t,e]=this.getHashAndPaths();this.switchView(t,e,!0)}switchView(t,e,n=!1){window.clearTimeout(this._sectionCompleteHandle),this._sectionCompleteHandle=0;const s=this.activeView;switch(t){case"":if(this.activeView="",s!==this.activeView){const t=this.views.find(t=>t.name===s);null!=t&&t.deactivate()}document.body.classList.toggle("complete",n),n||(document.location.hash="");break;default:{const i=this.views.find(e=>e.name===t);if(null==i)return void this.switchView("",[],!1);if(this.activeView=t,s!==this.activeView){const t=this.views.find(t=>t.name===s);null!=t&&t.deactivate()}i.activate(e,n),document.body.classList.toggle("complete",n),n||(this._sectionCompleteHandle=window.setTimeout(()=>document.body.classList.add("complete"),1e3));break}}n&&setTimeout(()=>document.body.classList.remove("preload"),1)}onBackButtonClicked(t){document.location.hash=""}onHashChanged(t){const[e,n]=this.getHashAndPaths();this.redirect(e,n)||this.switchView(e,n)}getHashAndPaths(){var t;let e=null===(t=document.location.hash)||void 0===t?void 0:t.substring(1),n=[];return e&&([e,...n]=e.split("/")),[e,n]}redirect(t,e){return"support-gitlens"===t&&(document.location.hash="#sponsor",!0)}}}]);