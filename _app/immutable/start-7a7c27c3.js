import{S as He,i as We,s as Me,a as Xe,e as D,c as Ye,b as B,g as Z,t as N,d as x,f as V,h as q,j as Qe,o as ve,k as Ze,l as xe,m as et,n as we,p as H,q as tt,r as nt,u as rt,v as z,w as ae,x as J,y as K,z as Ne}from"./chunks/index-db185f5b.js";import{g as Ve,f as Ce,s as Q,a as Ee,i as at}from"./chunks/singletons-7413af87.js";import{R as qe,H as ye}from"./chunks/control-38b853d4.js";import{s as ot}from"./chunks/paths-88cc51a0.js";const st=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),it=function(r,e){return new URL(r,e).href},Be={},C=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=it(a,s),a in Be)return;Be[a]=!0;const u=a.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":st,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((d,h)=>{i.addEventListener("load",d),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const n=new URL(r);for(const s of ft){let a=n[s];Object.defineProperty(n,s,{get(){return e(),a},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(s,a,u)=>u(r,a),dt(n),n}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function pt(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ce.delete(s)}return Re(r,e)};const ce=new Map;function ht(r,e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;n&&typeof n.body=="string"&&(a+=`[data-hash="${pt(n.body)}"]`);const u=document.querySelector(a);if(u!=null&&u.textContent){const{body:t,...i}=JSON.parse(u.textContent),d=u.getAttribute("data-ttl");return d&&ce.set(e,{body:t,init:i,ttl:1e3*Number(d)}),Promise.resolve(new Response(t,i))}return Re(r,n)}function mt(r,e){const n=ce.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);ce.delete(r)}return Re(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((u,t,i)=>{const d=decodeURIComponent(u),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(h)return e.push(h[1]),n.push(h[2]),"(?:/(.*))?";const y=t===i.length-1;return d&&"/"+d.split(/\[(.+?)\]/).map((L,T)=>{if(T%2){const $=_t.exec(L);if(!$)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,F,W]=$;return e.push(F),n.push(W),I?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(s=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r,e,n,s){const a={};for(let u=0;u<e.length;u+=1){const t=e[u],i=n[u],d=r[u+1]||"";if(i){const h=s[i];if(!h)throw new Error(`Missing "${i}" param matcher`);if(!h(d))return}a[t]=d}return a}function bt(r,e,n,s){const a=new Set(e);return Object.entries(n).map(([i,[d,h,y]])=>{const{pattern:L,names:T,types:$}=gt(i),I={id:i,exec:F=>{const W=L.exec(F);if(W)return yt(W,T,$,s)},errors:[1,...y||[]].map(F=>r[F]),layouts:[0,...h||[]].map(t),leaf:u(d)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function u(i){const d=i<0;return d&&(i=~i),[d,r[i]]}function t(i){return i===void 0?i:[a.has(i),r[i]]}}function vt(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&ae(e.$$.fragment,t),n=D()},m(t,i){e&&J(e,t,i),B(t,n,i),s=!0},p(t,i){const d={};if(i&4&&(d.data=t[2]),i&2&&(d.form=t[1]),a!==(a=t[0][0])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&q(n),e&&K(e,t)}}}function Et(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Lt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&ae(e.$$.fragment,t),n=D()},m(t,i){e&&J(e,t,i),B(t,n,i),s=!0},p(t,i){const d={};if(i&4&&(d.data=t[2]),i&1051&&(d.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&q(n),e&&K(e,t)}}}function kt(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&ae(e.$$.fragment,t),n=D()},m(t,i){e&&J(e,t,i),B(t,n,i),s=!0},p(t,i){const d={};if(i&8&&(d.data=t[3]),i&2&&(d.form=t[1]),a!==(a=t[0][1])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&q(n),e&&K(e,t)}}}function $t(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[3],$$slots:{default:[Rt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&ae(e.$$.fragment,t),n=D()},m(t,i){e&&J(e,t,i),B(t,n,i),s=!0},p(t,i){const d={};if(i&8&&(d.data=t[3]),i&1043&&(d.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&q(n),e&&K(e,t)}}}function Rt(r){let e,n,s;var a=r[0][2];function u(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=D()},l(t){e&&ae(e.$$.fragment,t),n=D()},m(t,i){e&&J(e,t,i),B(t,n,i),s=!0},p(t,i){const d={};if(i&16&&(d.data=t[4]),i&2&&(d.form=t[1]),a!==(a=t[0][2])){if(e){Z();const h=e;N(h.$$.fragment,1,0,()=>{K(h,1)}),x()}a?(e=new a(u(t)),z(e.$$.fragment),V(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){s||(e&&V(e.$$.fragment,t),s=!0)},o(t){e&&N(e.$$.fragment,t),s=!1},d(t){t&&q(n),e&&K(e,t)}}}function Lt(r){let e,n,s,a;const u=[$t,kt],t=[];function i(d,h){return d[0][2]?0:1}return e=i(r),n=t[e]=u[e](r),{c(){n.c(),s=D()},l(d){n.l(d),s=D()},m(d,h){t[e].m(d,h),B(d,s,h),a=!0},p(d,h){let y=e;e=i(d),e===y?t[e].p(d,h):(Z(),N(t[y],1,1,()=>{t[y]=null}),x(),n=t[e],n?n.p(d,h):(n=t[e]=u[e](d),n.c()),V(n,1),n.m(s.parentNode,s))},i(d){a||(V(n),a=!0)},o(d){N(n),a=!1},d(d){t[e].d(d),d&&q(s)}}}function ze(r){let e,n=r[6]&&Je(r);return{c(){e=Ze("div"),n&&n.c(),this.h()},l(s){e=xe(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=et(e);n&&n.l(a),a.forEach(q),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(s,a){B(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=Je(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&q(e),n&&n.d()}}}function Je(r){let e;return{c(){e=tt(r[7])},l(n){e=nt(n,r[7])},m(n,s){B(n,e,s)},p(n,s){s&128&&rt(e,n[7])},d(n){n&&q(e)}}}function St(r){let e,n,s,a,u;const t=[Et,vt],i=[];function d(y,L){return y[0][1]?0:1}e=d(r),n=i[e]=t[e](r);let h=r[5]&&ze(r);return{c(){n.c(),s=Xe(),h&&h.c(),a=D()},l(y){n.l(y),s=Ye(y),h&&h.l(y),a=D()},m(y,L){i[e].m(y,L),B(y,s,L),h&&h.m(y,L),B(y,a,L),u=!0},p(y,[L]){let T=e;e=d(y),e===T?i[e].p(y,L):(Z(),N(i[T],1,1,()=>{i[T]=null}),x(),n=i[e],n?n.p(y,L):(n=i[e]=t[e](y),n.c()),V(n,1),n.m(s.parentNode,s)),y[5]?h?h.p(y,L):(h=ze(y),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i(y){u||(V(n),u=!0)},o(y){N(n),u=!1},d(y){i[e].d(y),y&&q(s),h&&h.d(y),y&&q(a)}}}function Pt(r,e,n){let{stores:s}=e,{page:a}=e,{components:u}=e,{form:t}=e,{data_0:i=null}=e,{data_1:d=null}=e,{data_2:h=null}=e;Qe(s.page.notify);let y=!1,L=!1,T=null;return ve(()=>{const $=s.page.subscribe(()=>{y&&(n(6,L=!0),n(7,T=document.title||"untitled page"))});return n(5,y=!0),$}),r.$$set=$=>{"stores"in $&&n(8,s=$.stores),"page"in $&&n(9,a=$.page),"components"in $&&n(0,u=$.components),"form"in $&&n(1,t=$.form),"data_0"in $&&n(2,i=$.data_0),"data_1"in $&&n(3,d=$.data_1),"data_2"in $&&n(4,h=$.data_2)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[u,t,i,d,h,y,L,T,s,a]}class Ot extends He{constructor(e){super(),We(this,e,Pt,St,Me,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const It={},fe=[()=>C(()=>import("./chunks/0-2c27f826.js"),["chunks/0-2c27f826.js","chunks/_layout-4e6b50b5.js","chunks/index-1458f7f0.js","chunks/control-38b853d4.js","chunks/data-854333e4.js","chunks/index-73e68155.js","chunks/index-db185f5b.js","chunks/paths-88cc51a0.js","components/pages/_layout.svelte-5ec2e46e.js","assets/_layout-546f011d.css","chunks/compatability-4f501869.js","chunks/singletons-7413af87.js"],import.meta.url),()=>C(()=>import("./chunks/1-4483aa4b.js"),["chunks/1-4483aa4b.js","components/error.svelte-79fab2d0.js","chunks/index-db185f5b.js","chunks/singletons-7413af87.js","chunks/index-73e68155.js","chunks/paths-88cc51a0.js"],import.meta.url),()=>C(()=>import("./chunks/2-0fbb6949.js"),["chunks/2-0fbb6949.js","components/pages/article/_layout.svelte-0b94e8ae.js","assets/_layout-6d1fb0d3.css","chunks/index-db185f5b.js","chunks/compatability-4f501869.js","chunks/index-73e68155.js"],import.meta.url),()=>C(()=>import("./chunks/3-59edd73f.js"),["chunks/3-59edd73f.js","components/pages/topics/_layout.svelte-d61deb26.js","assets/_layout-6d1fb0d3.css","chunks/index-db185f5b.js","chunks/compatability-4f501869.js","chunks/index-73e68155.js"],import.meta.url),()=>C(()=>import("./chunks/4-d417641e.js"),["chunks/4-d417641e.js","chunks/_page-2d218a6f.js","components/pages/_page.svelte-670f1420.js","chunks/index-db185f5b.js"],import.meta.url),()=>C(()=>import("./chunks/5-024f251c.js"),["chunks/5-024f251c.js","chunks/_page-39d91d21.js","chunks/paths-88cc51a0.js","chunks/index-1458f7f0.js","chunks/control-38b853d4.js"],import.meta.url),()=>C(()=>import("./chunks/6-7bce4371.js"),["chunks/6-7bce4371.js","chunks/_page-f2ab96f6.js","components/pages/article/dynamic-typing/_page.svelte-97f8cca6.js","chunks/index-db185f5b.js","chunks/v4-7b84e476.js","chunks/Collapse-b4b1b797.js"],import.meta.url),()=>C(()=>import("./chunks/7-caa66cb4.js"),["chunks/7-caa66cb4.js","chunks/_page-4bb90914.js","components/pages/article/hidden/_page.svelte-aa2f4d32.js","assets/_page-73e8887f.css","chunks/index-db185f5b.js"],import.meta.url),()=>C(()=>import("./chunks/8-b7c6aa0e.js"),["chunks/8-b7c6aa0e.js","chunks/_page-1c0e785b.js","components/pages/article/wasm-rust/_page.svelte-ef23bcd6.js","chunks/index-db185f5b.js","chunks/v4-7b84e476.js"],import.meta.url),()=>C(()=>import("./chunks/9-0c71a1bb.js"),["chunks/9-0c71a1bb.js","chunks/_page-0735bfdf.js","components/pages/article-list/_page.svelte-69d2d3a3.js","chunks/index-db185f5b.js","chunks/paths-88cc51a0.js","chunks/data-854333e4.js","chunks/index-73e68155.js"],import.meta.url),()=>C(()=>import("./chunks/10-04493248.js"),["chunks/10-04493248.js","chunks/_page-2b8e8cae.js","components/pages/topics/_page.svelte-507bcd9c.js","chunks/index-db185f5b.js","chunks/v4-7b84e476.js","chunks/Collapse-b4b1b797.js","chunks/data-854333e4.js","chunks/index-73e68155.js","chunks/paths-88cc51a0.js"],import.meta.url)],At=[],jt={"":[4],article:[5,[2]],"article-list":[9],topics:[10,[3]],"article/dynamic-typing":[6,[2]],"article/hidden":[7,[2]],"article/wasm-rust":[8,[2]]},Ut={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},Tt="/__data.js",Ge="sveltekit:scroll",Y="sveltekit:index",se=bt(fe,At,jt,It),ke=fe[0],$e=fe[1];ke();$e();let re={};try{re=JSON.parse(sessionStorage[Ge])}catch{}function be(r){re[r]=Ee()}function Dt({target:r,base:e,trailing_slash:n}){var Te;const s=[],a={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},i=!1,d=!0,h=!1,y=1,L=null,T=!1,$,I=(Te=history.state)==null?void 0:Te[Y];I||(I=Date.now(),history.replaceState({...history.state,[Y]:I},"",location.href));const F=re[I];F&&(history.scrollRestoration="manual",scrollTo(F.x,F.y));let W=!1,M,Le;function Se(){if(!L){const o=new URL(location.href);L=Promise.resolve().then(async()=>{const c=he(o,!0);await Oe(c,o,[]),L=null,T=!1})}return L}async function ue(o,{noscroll:c=!1,replaceState:m=!1,keepfocus:l=!1,state:f={}},_){return typeof o=="string"&&(o=new URL(o,Ve(document))),me({url:o,scroll:c?Ee():null,keepfocus:l,redirect_chain:_,details:{state:f,replaceState:m},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(o){const c=he(o,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a.promise=je(c),a.id=c.id,a.promise}async function Oe(o,c,m,l,f){var v,E;const _=Le={};let g=o&&await je(o);if(!g&&c.origin===location.origin&&c.pathname===location.pathname&&(g=await oe({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!g)return await te(c),!1;if(c=(o==null?void 0:o.url)||c,Le!==_)return!1;if(s.length=0,g.type==="redirect")if(m.length>10||m.includes(c.pathname))g=await oe({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return ue(new URL(g.location,c).href,{},[...m,c.pathname]),!1;else((E=(v=g.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await Q.updated.check()&&await te(c);if(h=!0,l&&l.details){const{details:b}=l,w=b.replaceState?0:1;b.state[Y]=I+=w,history[b.replaceState?"replaceState":"pushState"](b.state,"",c)}if(i){t=g.state,g.props.page&&(g.props.page.url=c);const b=le();$.$set(g.props),b()}else Ie(g);if(l){const{scroll:b,keepfocus:w}=l;if(!w){const k=document.body,A=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),A!==null?k.setAttribute("tabindex",A):k.removeAttribute("tabindex")}if(await Ne(),d){const k=c.hash&&document.getElementById(c.hash.slice(1));b?scrollTo(b.x,b.y):k?k.scrollIntoView():scrollTo(0,0)}}else await Ne();a.promise=null,a.id=null,d=!0,g.props.page&&(M=g.props.page),f&&f(),h=!1}function Ie(o){var f,_;t=o.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),M=o.props.page;const m=le();$=new Ot({target:r,props:{...o.props,stores:Q},hydrate:!0}),m();const l={from:null,to:ie("to",{params:t.params,routeId:(_=(f=t.route)==null?void 0:f.id)!=null?_:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(g=>g(l)),i=!0}async function ee({url:o,params:c,branch:m,status:l,error:f,route:_,form:g}){var A;const v=m.filter(Boolean),E={type:"loaded",state:{url:o,params:c,branch:m,error:f,route:_,session_id:y},props:{components:v.map(S=>S.node.component)}};g!==void 0&&(E.props.form=g);let b={},w=!M;for(let S=0;S<v.length;S+=1){const j=v[S];b={...b,...j.data},(w||!t.branch.some(U=>U===j))&&(E.props[`data_${S}`]=b,w=w||Object.keys((A=j.data)!=null?A:{}).length>0)}if(w||(w=Object.keys(M.data).length!==Object.keys(b).length),!t.url||o.href!==t.url.href||t.error!==f||w){E.props.page={error:f,params:c,routeId:_&&_.id,status:l,url:o,data:w?b:M.data};const S=(j,U)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${U}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function de({loader:o,parent:c,url:m,params:l,routeId:f,server_data_node:_}){var b,w,k,A,S;let g=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await o();if((b=E.shared)!=null&&b.load){let j=function(...p){for(const R of p){const{href:O}=new URL(R,m);v.dependencies.add(O)}};const U={};for(const p in l)Object.defineProperty(U,p,{get(){return v.params.add(p),l[p]},enumerable:!0});const X={routeId:f,params:U,data:(w=_==null?void 0:_.data)!=null?w:null,url:ut(m,()=>{v.url=!0}),async fetch(p,R){let O;typeof p=="string"?O=p:(O=p.url,R={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...R});const P=new URL(O,m).href;return j(P),i?mt(P,R):ht(O,P,R)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,c()}};Object.defineProperties(X,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(k=await E.shared.load.call(null,X))!=null?k:null}return{node:E,loader:o,server:_,shared:(A=E.shared)!=null&&A.load?{type:"data",data:g,uses:v}:null,data:(S=g!=null?g:_==null?void 0:_.data)!=null?S:null}}function Ae(o,c,m){if(T)return!0;if(!m)return!1;if(m.parent&&c||o.url&&m.url)return!0;for(const l of o.params)if(m.params.has(l))return!0;for(const l of m.dependencies)if(s.some(f=>f(new URL(l))))return!0;return!1}function pe(o,c){var m,l;return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set((m=o.uses.dependencies)!=null?m:[]),params:new Set((l=o.uses.params)!=null?l:[]),parent:!!o.uses.parent,url:!!o.uses.url}}:(o==null?void 0:o.type)==="skip"&&c!=null?c:null}async function je({id:o,invalidating:c,url:m,params:l,route:f}){var X;if(a.id===o&&a.promise)return a.promise;const{errors:_,layouts:g,leaf:v}=f,E=t.url&&{url:o!==t.url.pathname+t.url.search,params:Object.keys(l).filter(p=>t.params[p]!==l[p])},b=[...g,v];_.forEach(p=>p==null?void 0:p().catch(()=>{})),b.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let w=null;const k=b.reduce((p,R,O)=>{var G;const P=t.branch[O],ne=!!(R!=null&&R[0])&&((P==null?void 0:P.loader)!==R[1]||Ae(E,p.some(Boolean),(G=P.server)==null?void 0:G.uses));return p.push(ne),p},[]);if(k.some(Boolean)){try{w=await Ke(m,k)}catch(p){return oe({status:500,error:p,url:m,routeId:f.id})}if(w.type==="redirect")return w}const A=w==null?void 0:w.nodes;let S=!1;const j=b.map(async(p,R)=>{var G;if(!p)return;const O=t.branch[R],P=A==null?void 0:A[R];if((!P||P.type==="skip")&&p[1]===(O==null?void 0:O.loader)&&!Ae(E,S,(G=O.shared)==null?void 0:G.uses))return O;if(S=!0,(P==null?void 0:P.type)==="error")throw P;return de({loader:p[1],url:m,params:l,routeId:f.id,parent:async()=>{var De;const _e={};for(let ge=0;ge<R;ge+=1)Object.assign(_e,(De=await j[ge])==null?void 0:De.data);return _e},server_data_node:pe(P===void 0&&p[0]?{type:"skip"}:P!=null?P:null,O==null?void 0:O.server)})});for(const p of j)p.catch(()=>{});const U=[];for(let p=0;p<b.length;p+=1)if(b[p])try{U.push(await j[p])}catch(R){if(R instanceof qe)return{type:"redirect",location:R.location};let O=500,P;for(A!=null&&A.includes(R)?(O=(X=R.status)!=null?X:O,P=R.error):R instanceof ye?(O=R.status,P=R.body):P=Fe(R,{params:l,url:m,routeId:f.id});p--;)if(_[p]){let ne,G=p;for(;!U[G];)G-=1;try{return ne={node:await _[p](),loader:_[p],data:{},server:null,shared:null},await ee({url:m,params:l,branch:U.slice(0,G+1).concat(ne),status:O,error:P,route:f})}catch{continue}}await te(m);return}else U.push(void 0);return await ee({url:m,params:l,branch:U,status:200,error:null,route:f,form:c?void 0:null})}async function oe({status:o,error:c,url:m,routeId:l}){var b;const f={},_=await ke();let g=null;if(_.server)try{const w=await Ke(m,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;g=(b=w.nodes[0])!=null?b:null}catch{await te(m);return}const v=await de({loader:ke,url:m,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data_node:pe(g)}),E={node:await $e(),loader:$e,shared:null,server:null,data:null};return await ee({url:m,params:f,branch:[v,E],status:o,error:c instanceof ye?c.body:Fe(c,{url:m,params:f,routeId:null}),route:null})}function he(o,c){if(Ue(o))return;const m=decodeURI(o.pathname.slice(e.length)||"/");for(const l of se){const f=l.exec(m);if(f){const _=new URL(o.origin+lt(o.pathname,n)+o.search+o.hash);return{id:_.pathname+_.search,invalidating:c,route:l,params:ct(f),url:_}}}}function Ue(o){return o.origin!==location.origin||!o.pathname.startsWith(e)}async function me({url:o,scroll:c,keepfocus:m,redirect_chain:l,details:f,type:_,delta:g,accepted:v,blocked:E}){var S,j,U,X;let b=!1;const w=he(o,!1),k={from:ie("from",{params:t.params,routeId:(j=(S=t.route)==null?void 0:S.id)!=null?j:null,url:t.url}),to:ie("to",{params:(U=w==null?void 0:w.params)!=null?U:null,routeId:(X=w==null?void 0:w.route.id)!=null?X:null,url:o}),type:_};g!==void 0&&(k.delta=g);const A={...k,cancel:()=>{b=!0}};if(u.before_navigate.forEach(p=>p(A)),b){E();return}be(I),v(),i&&Q.navigating.set(k),await Oe(w,o,l,{scroll:c,keepfocus:m,details:f},()=>{u.after_navigate.forEach(p=>p(k)),Q.navigating.set(null)})}function te(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{ve(()=>(u.after_navigate.push(o),()=>{const c=u.after_navigate.indexOf(o);u.after_navigate.splice(c,1)}))},before_navigate:o=>{ve(()=>(u.before_navigate.push(o),()=>{const c=u.before_navigate.indexOf(o);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!i)&&(d=!1)},goto:(o,c={})=>ue(o,c,[]),invalidate:o=>{if(o===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof o=="function")s.push(o);else{const{href:c}=new URL(o,location.href);s.push(m=>m.href===c)}return Se()},invalidateAll:()=>(T=!0,Se()),prefetch:async o=>{const c=new URL(o,Ve(document));await Pe(c)},prefetch_routes:async o=>{const m=(o?se.filter(l=>o.some(f=>l.exec(f))):se).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(m)},apply_action:async o=>{if(o.type==="error"){const c=new URL(location.href),{branch:m,route:l}=t;if(!l)return;let f=t.branch.length;for(;f--;)if(l.errors[f]){let _,g=f;for(;!m[g];)g-=1;try{_={node:await l.errors[f](),loader:l.errors[f],data:{},server:null,shared:null};const v=await ee({url:c,params:t.params,branch:m.slice(0,g+1).concat(_),status:500,error:o.error,route:l});t=v.state;const E=le();$.$set(v.props),E();return}catch{continue}}}else if(o.type==="redirect")ue(o.location,{},[]);else{const c={form:o.data};o.status!==M.status&&(c.page={...M,status:o.status});const m=le();$.$set(c),m()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var g,v;let f=!1;const _={from:ie("from",{params:t.params,routeId:(v=(g=t.route)==null?void 0:g.id)!=null?v:null,url:t.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(E=>E(_)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(I);try{sessionStorage[Ge]=JSON.stringify(re)}catch{}}});const o=l=>{const{url:f,options:_}=Ce(l);if(f&&_.prefetch){if(Ue(f))return;Pe(f)}};let c;const m=l=>{clearTimeout(c),c=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",m),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:f,url:_,options:g}=Ce(l);if(!f||!_)return;const v=f instanceof SVGAElement;if(!v&&!(_.protocol==="https:"||_.protocol==="http:"))return;const E=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||E.includes("external")||g.reload||(v?f.target.baseVal:f.target))return;const[b,w]=_.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){W=!0,be(I),t.url=_,Q.page.set({...M,url:_}),Q.page.notify();return}me({url:_,scroll:g.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[Y]===I)return;const f=l.state[Y]-I;me({url:new URL(location.href),scroll:re[l.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=l.state[Y]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[Y]:++I},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Q.navigating.set(null)})},_hydrate:async({status:o,error:c,node_ids:m,params:l,routeId:f,data:_,form:g})=>{var b;const v=new URL(location.href);let E;try{const w=m.map(async(k,A)=>{const S=_[A];return de({loader:fe[k],url:v,params:l,routeId:f,parent:async()=>{const j={};for(let U=0;U<A;U+=1)Object.assign(j,(await w[U]).data);return j},server_data_node:pe(S)})});E=await ee({url:v,params:l,branch:await Promise.all(w),status:o,error:c,form:g,route:(b=se.find(k=>k.id===f))!=null?b:null})}catch(w){const k=w;if(k instanceof qe){await te(new URL(w.location,location.href));return}E=await oe({status:k instanceof ye?k.status:500,error:k,url:v,routeId:f})}Ie(E)}}}let Nt=1;async function Ke(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Tt,n.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),n.searchParams.set("__id",String(Nt++)),await C(()=>import(n.href),[],import.meta.url);const s=window.__sveltekit_data;return delete window.__sveltekit_data,s}function Fe(r,e){var n;return(n=Ut.handleError({error:r,event:e}))!=null?n:{message:"Internal Error"}}const Vt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ie(r,e){for(const n of Vt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)}});return e}function le(){return()=>{}}async function Jt({env:r,hydrate:e,paths:n,target:s,trailing_slash:a}){ot(n);const u=Dt({target:s,base:n.base,trailing_slash:a});at({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Jt as start};