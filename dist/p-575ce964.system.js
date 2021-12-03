var __spreadArray=this&&this.__spreadArray||function(r,e){for(var t=0,n=e.length,a=r.length;t<n;t++,a++)r[a]=e[t];return r};System.register([],(function(r){"use strict";return{execute:function(){var e=function(r){var e=[];var t=0;var n;r=r.replace(/(\[[^\]]*\])/g,(function(r,n){var a="__ph-"+t+"__";e.push(n);t++;return a}));n=r.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(r,n,a){var s="__ph-"+t+"__";e.push(a);t++;return n+s}));var a={content:n,placeholders:e};return a};var t=function(r,e){return e.replace(/__ph-(\d+)__/g,(function(e,t){return r[+t]}))};var n="-shadowcsshost";var a="-shadowcssslotted";var s="-shadowcsscontext";var o=")(?:\\(("+"(?:\\([^)(]*\\)|[^)(]*)+?"+")\\))?([^,{]*)";var c=new RegExp("("+n+o,"gim");var i=new RegExp("("+s+o,"gim");var v=new RegExp("("+a+o,"gim");var u=n+"-no-combinator";var l=/-shadowcsshost-no-combinator([^\s]*)/;var f=[/::shadow/g,/::content/g];var p="([>\\s~+[.,{:][\\s\\S]*)?$";var h=/-shadowcsshost/gim;var g=/:host/gim;var d=/::slotted/gim;var m=/:host-context/gim;var _=/\/\*\s*[\s\S]*?\*\//g;var x=function(r){return r.replace(_,"")};var w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;var S=function(r){return r.match(w)||[]};var b=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;var W=/([{}])/g;var O=/(^.*?[^\\])??((:+)(.*)|$)/;var j="{";var E="}";var R="%BLOCK%";var k=function(r,e){var t=y(r);var n=0;return t.escapedString.replace(b,(function(){var r=[];for(var a=0;a<arguments.length;a++){r[a]=arguments[a]}var s=r[2];var o="";var c=r[4];var i="";if(c&&c.startsWith("{"+R)){o=t.blocks[n++];c=c.substring(R.length+1);i="{"}var v={selector:s,content:o};var u=e(v);return""+r[1]+u.selector+r[3]+i+u.content+c}))};var y=function(r){var e=r.split(W);var t=[];var n=[];var a=0;var s=[];for(var o=0;o<e.length;o++){var c=e[o];if(c===E){a--}if(a>0){s.push(c)}else{if(s.length>0){n.push(s.join(""));t.push(R);s=[]}t.push(c)}if(c===j){a++}}if(s.length>0){n.push(s.join(""));t.push(R)}var i={escapedString:t.join(""),blocks:n};return i};var T=function(r){r=r.replace(m,s).replace(g,n).replace(d,a);return r};var A=function(r,e,t){return r.replace(e,(function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}if(r[2]){var n=r[2].split(",");var a=[];for(var s=0;s<n.length;s++){var o=n[s].trim();if(!o)break;a.push(t(u,o,r[3]))}return a.join(",")}else{return u+r[3]}}))};var C=function(r,e,t){return r+e.replace(n,"")+t};var L=function(r){return A(r,c,C)};var $=function(r,e,t){if(e.indexOf(n)>-1){return C(r,e,t)}else{return r+e+t+", "+e+" "+r+t}};var B=function(r,e){var t="."+e+" > ";var n=[];r=r.replace(v,(function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}if(r[2]){var a=r[2].trim();var s=r[3];var o=t+a+s;var c="";for(var i=r[4]-1;i>=0;i--){var v=r[5][i];if(v==="}"||v===","){break}c=v+c}var l=c+o;var f=""+c.trimRight()+o.trim();if(l.trim()!==f.trim()){var p=f+", "+l;n.push({orgSelector:l,updatedSelector:p})}return o}else{return u+r[3]}}));return{selectors:n,cssText:r}};var I=function(r){return A(r,i,$)};var K=function(r){return f.reduce((function(r,e){return r.replace(e," ")}),r)};var M=function(r){var e=/\[/g;var t=/\]/g;r=r.replace(e,"\\[").replace(t,"\\]");return new RegExp("^("+r+")"+p,"m")};var U=function(r,e){var t=M(e);return!t.test(r)};var q=function(r,e){return r.replace(O,(function(r,t,n,a,s){if(t===void 0){t=""}if(a===void 0){a=""}if(s===void 0){s=""}return t+e+a+s}))};var z=function(r,e,t){h.lastIndex=0;if(h.test(r)){var n="."+t;return r.replace(l,(function(r,e){return q(e,n)})).replace(h,n+" ")}return e+" "+r};var D=function(r,n,a){var s=/\[is=([^\]]*)\]/g;n=n.replace(s,(function(r){var e=[];for(var t=1;t<arguments.length;t++){e[t-1]=arguments[t]}return e[0]}));var o="."+n;var c=function(r){var e=r.trim();if(!e){return""}if(r.indexOf(u)>-1){e=z(r,n,a)}else{var t=r.replace(h,"");if(t.length>0){e=q(t,o)}}return e};var i=e(r);r=i.content;var v="";var l=0;var f;var p=/( |>|\+|~(?!=))\s*/g;var g=r.indexOf(u)>-1;var d=!g;while((f=p.exec(r))!==null){var m=f[1];var _=r.slice(l,f.index).trim();d=d||_.indexOf(u)>-1;var x=d?c(_):_;v+=x+" "+m+" ";l=p.lastIndex}var w=r.substring(l);d=d||w.indexOf(u)>-1;v+=d?c(w):w;return t(i.placeholders,v)};var F=function(r,e,t,n){return r.split(",").map((function(r){if(n&&r.indexOf("."+n)>-1){return r.trim()}if(U(r,e)){return D(r,e,t).trim()}else{return r.trim()}})).join(", ")};var G=function(r,e,t,n,a){return k(r,(function(r){var a=r.selector;var s=r.content;if(r.selector[0]!=="@"){a=F(r.selector,e,t,n)}else if(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document")){s=G(r.content,e,t,n)}var o={selector:a.replace(/\s{2,}/g," ").trim(),content:s};return o}))};var H=function(r,e,t,n,a){r=T(r);r=L(r);r=I(r);var s=B(r,n);r=s.cssText;r=K(r);if(e){r=G(r,e,t,n)}r=r.replace(/-shadowcsshost-no-combinator/g,"."+t);r=r.replace(/>\s*\*\s+([^{, ]+)/gm," $1 ");return{cssText:r.trim(),slottedSelectors:s.selectors}};var J=r("scopeCss",(function(r,e,t){var n=e+"-h";var a=e+"-s";var s=S(r);r=x(r);var o=[];if(t){var c=function(r){var e="/*!@___"+o.length+"___*/";var t="/*!@"+r.selector+"*/";o.push({placeholder:e,comment:t});r.selector=e+r.selector;return r};r=k(r,(function(r){if(r.selector[0]!=="@"){return c(r)}else if(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document")){r.content=k(r.content,c);return r}return r}))}var i=H(r,e,n,a);r=__spreadArray([i.cssText],s).join("\n");if(t){o.forEach((function(e){var t=e.placeholder,n=e.comment;r=r.replace(t,n)}))}i.slottedSelectors.forEach((function(e){r=r.replace(e.orgSelector,e.updatedSelector)}));return r}))}}}));