var __spreadArray=this&&this.__spreadArray||function(t,e){for(var n=0,a=e.length,r=t.length;n<a;n++,r++)t[r]=e[n];return t};System.register(["./p-07f85171.system.js","./p-1e736fd3.system.js","./p-8cc0c8df.system.js","./p-946a0616.system.js"],(function(t){"use strict";var e,n,a,r,o,i;return{setters:[function(t){e=t.r;n=t.g},function(t){a=t.u},function(t){r=t.i;o=t.d},function(t){i=t.u}],execute:function(){t("u",s);function s(t){var e=this,n=e.ext,a=e.params,s=e.noParams,u=e.prevent,l=e.reload;var h=this.path;var d=new URLSearchParams(window.top.location.search);if(t&&!l){t.preventDefault()}if(r(a)){var v=new URLSearchParams(a);v.forEach((function(t,e){d.set(e,t)}))}if(r(s)){s.split("&").forEach((function(t){d.delete(t)}))}var m=window.top.location;var w=m.search.includes("?")?m.search:"?"+m.search;var y=n?i(this,"a","href"):"";if(y.includes("mailto")){window.open(y);y=""}if(r(h)&&h.includes("mailto")){window.open(h);h=""}if(!o(y)){var g=y.split("?")[1];if(g){var S=new URLSearchParams(g);S.forEach((function(t,e){d.set(e,t)}))}}if(p(h,m)||c(y,m)||w!=="?"+d.toString()){var E=""+(__spreadArray([],d.keys()).length>0?"?":"")+d.toString();window.top.history.pushState({},"",f(h,y,m,u)+E);window.top.dispatchEvent(new PopStateEvent("popstate",{state:{path:h,href:y,params:a,noParams:s}}))}if(l){window.location.reload()}}function c(t,e){return!o(t)?t!==e.href:false}function f(t,e,n,a){return p(t,n)?n.protocol+"//"+n.host+t:!a&&c(e,n)?e.split("?")[0]:n.protocol+"//"+n.host+n.pathname}function p(t,e){return r(t)?t!==e.pathname:false}var u=t("U",function(){function t(t){e(this,t);this.activate=false;this.ext=false;this.prevent=false;this.reload=false}t.prototype.connectedCallback=function(){this.el.addEventListener("click",s)};t.prototype.componentDidRender=function(){var t=this;if(this.activate){setTimeout((function(){s.apply(t.el);t.activate=false}))}};t.prototype.componentDidLoad=function(){a("udk")};t.prototype.disconnectedCallback=function(){this.el.removeEventListener("click",s)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}())}}}));