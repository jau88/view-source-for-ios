javascript:/*view-source-for-ios-v0.1*/
(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';function d(a){var b=document.createElement('div');return b.appendChild(document.createTextNode(a)),b.innerHTML}function e(a,b){return function(c){return c.length>a?c.slice(0,a)+b:c}}function f(a){var b=e(j.TITLE_MAX_LENGTH,k.clipping_indicator),c=location.href;return l(n,{title:b(k.title_prefix+c),heading:k.heading_prefix+c,source:d(a),css:m,url_hljs_script:j.URL_HLJS_SCRIPT,url_hljs_stylesheet:j.URL_HLJS_STYLESHEET})}function g(a){return j.SPECIAL_PAGES.some(function(b){return b.test(a)})}Object.defineProperty(b,'__esModule',{value:!0});var h='9.12.0',i=[/^about:/],j={TITLE_MAX_LENGTH:50,URL_HLJS_STYLESHEET:'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/'+h+'/styles/'+'hybrid'+'.min.css',URL_HLJS_SCRIPT:'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/'+h+'/highlight.min.js',SPECIAL_PAGES:i},k={clipping_indicator:'\u2026',title_prefix:'view-source:',heading_prefix:'Source of ',cannot_view_source:'Cannot view source of this page.'},l=c(1),m=c(2),n=c(3);(function(){var a=document.doctype?new XMLSerializer().serializeToString(document.doctype)+'\n':'',b=a+document.documentElement.outerHTML,c='data:text/html,'+encodeURIComponent(f(b));g(location.href)?location.href=c:window.open(c)})()},function(a){(function(){var b,c,d,e,f,g,h,i={}.hasOwnProperty,j=function(a,b){function c(){this.constructor=a}for(var d in b)i.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},k=[].slice;b=function(a){function b(a){this.message=a}return j(b,a),b.prototype.name='ValueError',b}(Error),f='cannot switch from implicit to explicit numbering',d='cannot switch from explicit to implicit numbering',c=function(a){return null==a&&(a={}),function(){var c,e,h,i,j,l;return l=arguments[0],c=2<=arguments.length?k.call(arguments,1):[],h=0,e=i=!1,j='cannot switch from {} to {} numbering',l.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g,function(j,k,l,m){var n,o,p;if(k)return k;if(l.length){if(i)throw new b(f);e=!0,n=null==(o=g(c,l))?'':o}else{if(e)throw new b(d);i=!0,n=null==(p=c[h++])?'':p}return Object.prototype.hasOwnProperty.call(a,m)?a[m](n):n})}},g=function(a,b){var c;for(/^(\d+)([.]|$)/.test(b)||(b='0.'+b);c=/(.+?)[.](.+)/.exec(b);)a=h(a,c[1]),b=c[2];return h(a,b)},h=function(a,b){var c;return c=a[b],'function'==typeof c?c.call(a):c},e=c({}),e.create=c,e.extend=function(a,b){var d;d=c(b),a.format=function(){return d.apply(null,[this].concat(k.call(arguments)))}},a.exports=e}).call(this)},function(a){a.exports='*{margin:0;padding:0}body,html,pre{min-height:100%}body,html{background-color:#1d1f21}@supports (-webkit-overflow-scrolling:touch){html{min-height:120%}}header{align-items:center;-webkit-backdrop-filter:blur(20px);background-color:rgba(249,249,249,.783);border-bottom:1px solid #b0b0b0;box-sizing:border-box;display:flex;font-family:sans-serif;font-size:14px;height:32px;justify-content:center;position:fixed;top:0;width:100%;z-index:10}header h1{font-size:1em;max-width:60%;overflow:hidden;padding:.1em;text-overflow:ellipsis;white-space:nowrap}@media (-webkit-min-device-pixel-ratio:2){header{border-width:.5px}}pre{color:#fff;-webkit-overflow-scrolling:touch;padding-top:32px;tab-size:4;z-index:1}pre code{display:block;height:100%;padding:4px 4px 50%!important}'},function(a){a.exports='<!DOCTYPE html><html><head><title>{title}</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1" name="viewport"><link rel="stylesheet" href="{url_hljs_stylesheet}"><style>{css}</style></head><body><header><h1>{heading}</h1></header><pre><code class="html">{source}</code></pre><script src="{url_hljs_script}"></script><script>hljs.initHighlightingOnLoad();</script></body></html>'}]);