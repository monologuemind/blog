import{S as V,i as Y,s as z,k as d,a as O,l as p,m,h,c as P,n as E,b,E as k,A,K as j,M as F,q as T,r as $,e as H,u as q}from"../../../chunks/index-372a785c.js";import{b as R}from"../../../chunks/paths-88cc51a0.js";import{g as G}from"../../../chunks/data-d058cef2.js";function S(o,l,n){const t=o.slice();return t[2]=l[n],t}function C(o,l,n){const t=o.slice();return t[5]=l[n],t}function I(o,l,n){const t=o.slice();return t[5]=l[n],t}function K(o){let l,n=o[5].title+"",t;return{c(){l=d("th"),t=T(n)},l(a){l=p(a,"TH",{});var e=m(l);t=$(e,n),e.forEach(h)},m(a,e){b(a,l,e),k(l,t)},p:A,d(a){a&&h(l)}}}function L(o){var a;let l,n=(a=o[0])==null?void 0:a.articles,t=[];for(let e=0;e<n.length;e+=1)t[e]=N(S(o,n,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();l=H()},l(e){for(let r=0;r<t.length;r+=1)t[r].l(e);l=H()},m(e,r){for(let c=0;c<t.length;c+=1)t[c].m(e,r);b(e,l,r)},p(e,r){var c;if(r&3){n=(c=e[0])==null?void 0:c.articles;let i;for(i=0;i<n.length;i+=1){const f=S(e,n,i);t[i]?t[i].p(f,r):(t[i]=N(f),t[i].c(),t[i].m(l.parentNode,l))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},d(e){j(t,e),e&&h(l)}}}function J(o){let l=o[2][o[5].key]+"",n;return{c(){n=T(l)},l(t){n=$(t,l)},m(t,a){b(t,n,a)},p(t,a){a&1&&l!==(l=t[2][t[5].key]+"")&&q(n,l)},d(t){t&&h(n)}}}function Q(o){let l=o[2][o[5].key].join(", ")+"",n;return{c(){n=T(l)},l(t){n=$(t,l)},m(t,a){b(t,n,a)},p(t,a){a&1&&l!==(l=t[2][t[5].key].join(", ")+"")&&q(n,l)},d(t){t&&h(n)}}}function U(o){let l,n=o[2][o[5].key]+"",t,a;return{c(){l=d("a"),t=T(n),this.h()},l(e){l=p(e,"A",{class:!0,href:!0});var r=m(l);t=$(r,n),r.forEach(h),this.h()},h(){E(l,"class","link link-secondary link-hover"),E(l,"href",a=`${R}/article/${o[2].pathname}`)},m(e,r){b(e,l,r),k(l,t)},p(e,r){r&1&&n!==(n=e[2][e[5].key]+"")&&q(t,n),r&1&&a!==(a=`${R}/article/${e[2].pathname}`)&&E(l,"href",a)},d(e){e&&h(l)}}}function M(o){let l;function n(e,r){return e[5].key==="title"?U:e[5].key==="topics"?Q:J}let a=n(o)(o);return{c(){l=d("td"),a.c()},l(e){l=p(e,"TD",{});var r=m(l);a.l(r),r.forEach(h)},m(e,r){b(e,l,r),a.m(l,null)},p(e,r){a.p(e,r)},d(e){e&&h(l),a.d()}}}function N(o){let l,n,t=o[1],a=[];for(let e=0;e<t.length;e+=1)a[e]=M(C(o,t,e));return{c(){l=d("tr");for(let e=0;e<a.length;e+=1)a[e].c();n=O()},l(e){l=p(e,"TR",{});var r=m(l);for(let c=0;c<a.length;c+=1)a[c].l(r);n=P(r),r.forEach(h)},m(e,r){b(e,l,r);for(let c=0;c<a.length;c+=1)a[c].m(l,null);k(l,n)},p(e,r){if(r&3){t=e[1];let c;for(c=0;c<t.length;c+=1){const i=C(e,t,c);a[c]?a[c].p(i,r):(a[c]=M(i),a[c].c(),a[c].m(l,n))}for(;c<a.length;c+=1)a[c].d(1);a.length=t.length}},d(e){e&&h(l),j(a,e)}}}function W(o){var w,B;let l,n,t,a,e,r,c=o[1],i=[];for(let s=0;s<c.length;s+=1)i[s]=K(I(o,c,s));let f=((B=(w=o[0])==null?void 0:w.articles)==null?void 0:B.length)&&L(o);return{c(){l=d("div"),n=d("table"),t=d("thead"),a=d("tr");for(let s=0;s<i.length;s+=1)i[s].c();e=O(),r=d("tbody"),f&&f.c(),this.h()},l(s){l=p(s,"DIV",{class:!0});var g=m(l);n=p(g,"TABLE",{class:!0});var u=m(n);t=p(u,"THEAD",{});var v=m(t);a=p(v,"TR",{});var _=m(a);for(let D=0;D<i.length;D+=1)i[D].l(_);_.forEach(h),v.forEach(h),e=P(u),r=p(u,"TBODY",{});var y=m(r);f&&f.l(y),y.forEach(h),u.forEach(h),g.forEach(h),this.h()},h(){E(n,"class","table w-full"),E(l,"class","overflow-x-auto")},m(s,g){b(s,l,g),k(l,n),k(n,t),k(t,a);for(let u=0;u<i.length;u+=1)i[u].m(a,null);k(n,e),k(n,r),f&&f.m(r,null)},p(s,[g]){var u,v;if(g&2){c=s[1];let _;for(_=0;_<c.length;_+=1){const y=I(s,c,_);i[_]?i[_].p(y,g):(i[_]=K(y),i[_].c(),i[_].m(a,null))}for(;_<i.length;_+=1)i[_].d(1);i.length=c.length}(v=(u=s[0])==null?void 0:u.articles)!=null&&v.length?f?f.p(s,g):(f=L(s),f.c(),f.m(r,null)):f&&(f.d(1),f=null)},i:A,o:A,d(s){s&&h(l),j(i,s),f&&f.d()}}}function X(o,l,n){let t;return F(o,G,e=>n(0,t=e)),[t,[{title:"Title",key:"title"},{title:"Description",key:"description"},{title:"Topics",key:"topics"}]]}class te extends V{constructor(l){super(),Y(this,l,X,W,z,{})}}export{te as default};
