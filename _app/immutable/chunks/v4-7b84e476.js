import{S as p,i as m,s as h,D as _,k as f,l as y,m as g,h as r,n as U,b as $,H,I as v,J as D,f as I,t as b,p as c}from"./index-db185f5b.js";function S(e){let t,l;const i=e[1].default,n=_(i,e,e[0],null);return{c(){t=f("h1"),n&&n.c(),this.h()},l(s){t=y(s,"H1",{class:!0});var a=g(t);n&&n.l(a),a.forEach(r),this.h()},h(){U(t,"class","text-5xl font-bold")},m(s,a){$(s,t,a),n&&n.m(t,null),l=!0},p(s,[a]){n&&n.p&&(!l||a&1)&&H(n,i,s,s[0],l?D(i,s[0],a,null):v(s[0]),null)},i(s){l||(I(n,s),l=!0)},o(s){b(n,s),l=!1},d(s){s&&r(t),n&&n.d(s)}}}function w(e,t,l){let{$$slots:i={},$$scope:n}=t;return e.$$set=s=>{"$$scope"in s&&l(0,n=s.$$scope)},[n,i]}class x extends p{constructor(t){super(),m(this,t,w,S,h,{})}}function R(e){let t,l;const i=e[2].default,n=_(i,e,e[1],null);return{c(){t=f("h2"),n&&n.c(),this.h()},l(s){t=y(s,"H2",{class:!0});var a=g(t);n&&n.l(a),a.forEach(r),this.h()},h(){U(t,"class","text-4xl font-bold"),c(t,"display",e[0],!1)},m(s,a){$(s,t,a),n&&n.m(t,null),l=!0},p(s,[a]){n&&n.p&&(!l||a&2)&&H(n,i,s,s[1],l?D(i,s[1],a,null):v(s[1]),null),a&1&&c(t,"display",s[0],!1)},i(s){l||(I(n,s),l=!0)},o(s){b(n,s),l=!1},d(s){s&&r(t),n&&n.d(s)}}}function V(e,t,l){let{$$slots:i={},$$scope:n}=t,{display:s=""}=t;return e.$$set=a=>{"display"in a&&l(0,s=a.display),"$$scope"in a&&l(1,n=a.$$scope)},[s,n,i]}class A extends p{constructor(t){super(),m(this,t,V,R,h,{display:0})}}let u;const E=new Uint8Array(16);function C(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(E)}const o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));function j(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}const k=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),d={randomUUID:k};function J(e,t,l){if(d.randomUUID&&!t&&!e)return d.randomUUID();e=e||{};const i=e.random||(e.rng||C)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){l=l||0;for(let n=0;n<16;++n)t[l+n]=i[n];return t}return j(i)}export{x as H,A as a,J as v};
