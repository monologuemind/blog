import{S as G,i as J,s as K,k as y,q as k,a as E,e as U,l as $,m as b,r as x,h as p,c as C,b as I,D as n,f as P,d as L,t as B,P as Q,v as W,w as X,n as S,p as D,x as Y,A as Z,y as ee,g as te}from"../../../chunks/index-35b12e3c.js";import{b as ae}from"../../../chunks/paths-dc1081f2.js";import{c as q,M as le}from"../../../chunks/Markdown-d95da4a3.js";function z(i,s,l){const o=i.slice();return o[1]=s[l],o}function F(i){var N,O;let s,l,o,m,h=i[1]+"",f,t,u,e,r=((N=q[i[1].replace("%","")])==null?void 0:N.sample_text)+"",a,v,d,A,g,H,T,M;return d=new le({props:{source:(O=q[i[1].replace("%","")])==null?void 0:O.sample_text}}),{c(){s=y("div"),l=y("div"),o=y("h2"),m=k("Selector: "),f=k(h),t=E(),u=y("p"),e=k("Sample Markdown: "),a=k(r),v=E(),W(d.$$.fragment),A=E(),g=y("a"),H=k("Try in playground"),T=E(),this.h()},l(c){s=$(c,"DIV",{class:!0});var w=b(s);l=$(w,"DIV",{class:!0});var _=b(l);o=$(_,"H2",{class:!0});var V=b(o);m=x(V,"Selector: "),f=x(V,h),V.forEach(p),t=C(_),u=$(_,"P",{});var j=b(u);e=x(j,"Sample Markdown: "),a=x(j,r),j.forEach(p),v=C(_),X(d.$$.fragment,_),A=C(_),g=$(_,"A",{class:!0,href:!0});var R=b(g);H=x(R,"Try in playground"),R.forEach(p),_.forEach(p),T=C(w),w.forEach(p),this.h()},h(){var c;S(o,"class","card-title"),D(o,"margin-bottom","1rem",!1),S(g,"class","link link-hover link-secondary"),S(g,"href",`${ae}/playground?sample_text=${encodeURIComponent((c=q[i[1].replace("%","")])==null?void 0:c.sample_text)}`),S(l,"class","card-body"),D(l,"text-align","center",!1),D(l,"display","inherit",!1),S(s,"class","card w-96 bg-base-100 shadow-xl"),D(s,"display","inline-block",!1)},m(c,w){I(c,s,w),n(s,l),n(l,o),n(o,m),n(o,f),n(l,t),n(l,u),n(u,e),n(u,a),n(l,v),Y(d,l,null),n(l,A),n(l,g),n(g,H),n(s,T),M=!0},p:Z,i(c){M||(P(d.$$.fragment,c),M=!0)},o(c){B(d.$$.fragment,c),M=!1},d(c){c&&p(s),ee(d)}}}function se(i){let s,l,o,m,h,f=i[0],t=[];for(let e=0;e<f.length;e+=1)t[e]=F(z(i,f,e));const u=e=>B(t[e],1,1,()=>{t[e]=null});return{c(){s=y("h1"),l=k("Custom Selectors"),o=E();for(let e=0;e<t.length;e+=1)t[e].c();m=U()},l(e){s=$(e,"H1",{});var r=b(s);l=x(r,"Custom Selectors"),r.forEach(p),o=C(e);for(let a=0;a<t.length;a+=1)t[a].l(e);m=U()},m(e,r){I(e,s,r),n(s,l),I(e,o,r);for(let a=0;a<t.length;a+=1)t[a].m(e,r);I(e,m,r),h=!0},p(e,[r]){if(r&1){f=e[0];let a;for(a=0;a<f.length;a+=1){const v=z(e,f,a);t[a]?(t[a].p(v,r),P(t[a],1)):(t[a]=F(v),t[a].c(),P(t[a],1),t[a].m(m.parentNode,m))}for(te(),a=f.length;a<t.length;a+=1)u(a);L()}},i(e){if(!h){for(let r=0;r<f.length;r+=1)P(t[r]);h=!0}},o(e){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)B(t[r]);h=!1},d(e){e&&p(s),e&&p(o),Q(t,e),e&&p(m)}}}function re(i){return[Object.keys(q).map(l=>`%${l}`)]}class ie extends G{constructor(s){super(),J(this,s,re,se,K,{})}}export{ie as default};
