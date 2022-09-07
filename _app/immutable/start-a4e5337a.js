import{S as Ge,i as He,s as We,a as Me,e as z,c as Xe,b as W,g as oe,t as J,d as ie,f as K,h as x,j as Ye,o as ye,k as Qe,l as Ze,m as et,n as _e,p as C,q as tt,r as nt,u as rt,v as M,w as Ee,x as X,y as Y,z as Ce}from"./chunks/index-03803991.js";import{g as Ve,f as qe,s as G,a as be,b as at,i as st}from"./chunks/singletons-1fa07f01.js";import{H as ge,R as Be,e as ot}from"./chunks/index-e4a1e02d.js";const it=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),lt=function(a,e){return new URL(a,e).href},ze={},H=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=lt(o,l),o in ze)return;ze[o]=!0;const u=o.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":it,u||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),u)return new Promise((w,m)=>{c.addEventListener("load",w),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function ct(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ft(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ut=["href","pathname","search","searchParams","toString","toJSON"];function dt(a,e){const t=new URL(a);for(const l of ut){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,u)=>u(a,o),pt(t),t}function pt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const l=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;se.delete(l)}return Re(a,e)};const se=new Map;function mt(a,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${ht(t.body)}"]`);const u=document.querySelector(o);if(u!=null&&u.textContent){const{body:n,...c}=JSON.parse(u.textContent),w=u.getAttribute("data-ttl");return w&&se.set(e,{body:n,init:c,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,c))}return Re(a,t)}function _t(a,e){const t=se.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);se.delete(a)}return Re(a,e)}const gt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function wt(a){const e=[],t=[];let l=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(yt).map((u,n,c)=>{const w=decodeURIComponent(u),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const v=n===c.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((L,S)=>{if(S%2){const T=gt.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,D,V]=T;return e.push(D),t.push(V),j?"(.*?)":"([^/]+?)"}return v&&L.includes(".")&&(l=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function yt(a){return!/^\([^)]+\)$/.test(a)}function bt(a,e,t,l){const o={};for(let u=0;u<e.length;u+=1){const n=e[u],c=t[u],w=a[u+1]||"";if(c){const m=l[c];if(!m)throw new Error(`Missing "${c}" param matcher`);if(!m(w))return}o[n]=w}return o}function vt(a,e,t,l){const o=new Set(e);return Object.entries(t).map(([c,[w,m,v]])=>{const{pattern:L,names:S,types:T}=wt(c),j={id:c,exec:D=>{const V=L.exec(D);if(V)return bt(V,S,T,l)},errors:[1,...v||[]].map(D=>a[D]),layouts:[0,...m||[]].map(n),leaf:u(w)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(c){const w=c<0;return w&&(c=~c),[w,a[c]]}function n(c){return c===void 0?c:[o.has(c),a[c]]}}function kt(a){let e,t,l;var o=a[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(u(a))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Ee(e.$$.fragment,n),t=z()},m(n,c){e&&X(e,n,c),W(n,t,c),l=!0},p(n,c){const w={};if(c&4&&(w.data=n[2]),c&2&&(w.form=n[1]),o!==(o=n[0][0])){if(e){oe();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),ie()}o?(e=new o(u(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){l||(e&&K(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Et(a){let e,t,l;var o=a[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[Rt]},$$scope:{ctx:n}}}}return o&&(e=new o(u(a))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Ee(e.$$.fragment,n),t=z()},m(n,c){e&&X(e,n,c),W(n,t,c),l=!0},p(n,c){const w={};if(c&4&&(w.data=n[2]),c&523&&(w.$$scope={dirty:c,ctx:n}),o!==(o=n[0][0])){if(e){oe();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),ie()}o?(e=new o(u(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){l||(e&&K(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Rt(a){let e,t,l;var o=a[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(u(a))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Ee(e.$$.fragment,n),t=z()},m(n,c){e&&X(e,n,c),W(n,t,c),l=!0},p(n,c){const w={};if(c&8&&(w.data=n[3]),c&2&&(w.form=n[1]),o!==(o=n[0][1])){if(e){oe();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),ie()}o?(e=new o(u(n)),M(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){l||(e&&K(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&x(t),e&&Y(e,n)}}}function Je(a){let e,t=a[5]&&Ke(a);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(l){e=Ze(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=et(e);t&&t.l(o),o.forEach(x),this.h()},h(){_e(e,"id","svelte-announcer"),_e(e,"aria-live","assertive"),_e(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(l,o){W(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=Ke(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&x(e),t&&t.d()}}}function Ke(a){let e;return{c(){e=tt(a[6])},l(t){e=nt(t,a[6])},m(t,l){W(t,e,l)},p(t,l){l&64&&rt(e,t[6])},d(t){t&&x(e)}}}function St(a){let e,t,l,o,u;const n=[Et,kt],c=[];function w(v,L){return v[0][1]?0:1}e=w(a),t=c[e]=n[e](a);let m=a[4]&&Je(a);return{c(){t.c(),l=Me(),m&&m.c(),o=z()},l(v){t.l(v),l=Xe(v),m&&m.l(v),o=z()},m(v,L){c[e].m(v,L),W(v,l,L),m&&m.m(v,L),W(v,o,L),u=!0},p(v,[L]){let S=e;e=w(v),e===S?c[e].p(v,L):(oe(),J(c[S],1,1,()=>{c[S]=null}),ie(),t=c[e],t?t.p(v,L):(t=c[e]=n[e](v),t.c()),K(t,1),t.m(l.parentNode,l)),v[4]?m?m.p(v,L):(m=Je(v),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(v){u||(K(t),u=!0)},o(v){J(t),u=!1},d(v){c[e].d(v),v&&x(l),m&&m.d(v),v&&x(o)}}}function Lt(a,e,t){let{stores:l}=e,{page:o}=e,{components:u}=e,{form:n}=e,{data_0:c=null}=e,{data_1:w=null}=e;Ye(l.page.notify);let m=!1,v=!1,L=null;return ye(()=>{const S=l.page.subscribe(()=>{m&&(t(5,v=!0),t(6,L=document.title||"untitled page"))});return t(4,m=!0),S}),a.$$set=S=>{"stores"in S&&t(7,l=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,u=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,c=S.data_0),"data_1"in S&&t(3,w=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&l.page.set(o)},[u,n,c,w,m,v,L,l,o]}class $t extends Ge{constructor(e){super(),He(this,e,Lt,St,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Pt={},le=[()=>H(()=>import("./chunks/0-3c6e72d4.js"),["chunks/0-3c6e72d4.js","chunks/_layout-2199824a.js","chunks/index-e4a1e02d.js","chunks/data-e6a5ed49.js","chunks/index-ebfcc288.js","chunks/index-03803991.js","components/pages/_layout.svelte-7c5a9738.js","assets/_layout-11445945.css","chunks/navigation-96c0d65e.js","chunks/singletons-1fa07f01.js"],import.meta.url),()=>H(()=>import("./chunks/1-eac55412.js"),["chunks/1-eac55412.js","components/error.svelte-7ebbd6c4.js","chunks/index-03803991.js","chunks/stores-3c3e4269.js","chunks/singletons-1fa07f01.js","chunks/index-ebfcc288.js"],import.meta.url),()=>H(()=>import("./chunks/2-01c7a09f.js"),["chunks/2-01c7a09f.js","chunks/_page-2d218a6f.js","components/pages/_page.svelte-062763c0.js","chunks/index-03803991.js"],import.meta.url),()=>H(()=>import("./chunks/3-c2932d79.js"),["chunks/3-c2932d79.js","chunks/_page-94298a02.js","chunks/index-e4a1e02d.js","components/pages/article/_page.svelte-ba06efe2.js","chunks/index-03803991.js","chunks/Markdown-118efe6c.js"],import.meta.url),()=>H(()=>import("./chunks/4-1f67ef67.js"),["chunks/4-1f67ef67.js","chunks/_page-0735bfdf.js","components/pages/article-list/_page.svelte-4c657c13.js","chunks/index-03803991.js","chunks/data-e6a5ed49.js","chunks/index-ebfcc288.js"],import.meta.url),()=>H(()=>import("./chunks/5-a1457470.js"),["chunks/5-a1457470.js","chunks/_page-79b44e34.js","chunks/index-e4a1e02d.js","components/pages/edit/_page.svelte-cc5cffac.js","assets/_page-eaeaa541.css","chunks/index-03803991.js","chunks/Markdown-118efe6c.js","chunks/navigation-96c0d65e.js","chunks/singletons-1fa07f01.js","chunks/index-ebfcc288.js","chunks/stores-3c3e4269.js","chunks/data-e6a5ed49.js"],import.meta.url)],Ot=[],jt={"":[2],article:[3],"article-list":[4],edit:[5]},Ut="/__data.js",Fe="sveltekit:scroll",B="sveltekit:index",ne=vt(le,Ot,jt,Pt),ve=le[0],ke=le[1];ve();ke();let ee={};try{ee=JSON.parse(sessionStorage[Fe])}catch{}function we(a){ee[a]=be()}function At({target:a,base:e,trailing_slash:t}){var Ie;const l=[],o={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},c=!1,w=!0,m=!1,v=1,L=null,S=!1,T,j=(Ie=history.state)==null?void 0:Ie[B];j||(j=Date.now(),history.replaceState({...history.state,[B]:j},"",location.href));const D=ee[j];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let V=!1,q,Se;function Le(){if(!L){const r=new URL(location.href);L=Promise.resolve().then(async()=>{const i=de(r,!0);await Pe(i,r,[]),L=null,S=!1})}return L}async function ce(r,{noscroll:i=!1,replaceState:d=!1,keepfocus:s=!1,state:f={}},p){return typeof r=="string"&&(r=new URL(r,Ve(document))),pe({url:r,scroll:i?be():null,keepfocus:s,redirect_chain:p,details:{state:f,replaceState:d},accepted:()=>{},blocked:()=>{},type:"goto"})}async function $e(r){const i=de(r,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=Ue(i),o.id=i.id,o.promise}async function Pe(r,i,d,s,f){var k,E;const p=Se={};let h=r&&await Ue(r);if(!h&&i.origin===location.origin&&i.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!h)return await Z(i),!1;if(i=(r==null?void 0:r.url)||i,Se!==p)return!1;if(l.length=0,h.type==="redirect")if(d.length>10||d.includes(i.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return ce(new URL(h.location,i).href,{},[...d,i.pathname]),!1;else((E=(k=h.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await G.updated.check()&&await Z(i);if(m=!0,s&&s.details){const{details:b}=s,_=b.replaceState?0:1;b.state[B]=j+=_,history[b.replaceState?"replaceState":"pushState"](b.state,"",i)}if(c){n=h.state,h.props.page&&(h.props.page.url=i);const b=ae();T.$set(h.props),b()}else Oe(h);if(s){const{scroll:b,keepfocus:_}=s;if(!_){const R=document.body,I=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),I!==null?R.setAttribute("tabindex",I):R.removeAttribute("tabindex")}if(await Ce(),w){const R=i.hash&&document.getElementById(i.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();o.promise=null,o.id=null,w=!0,h.props.page&&(q=h.props.page),f&&f(),m=!1}function Oe(r){var f,p;n=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=r.props.page;const d=ae();T=new $t({target:a,props:{...r.props,stores:G},hydrate:!0}),d();const s={from:null,to:re("to",{params:n.params,routeId:(p=(f=n.route)==null?void 0:f.id)!=null?p:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(h=>h(s)),c=!0}async function Q({url:r,params:i,branch:d,status:s,error:f,route:p,form:h}){var I;const k=d.filter(Boolean),E={type:"loaded",state:{url:r,params:i,branch:d,error:f,route:p,session_id:v},props:{components:k.map($=>$.node.component)}};h!==void 0&&(E.props.form=h);let b={},_=!q;for(let $=0;$<k.length;$+=1){const U=k[$];b={...b,...U.data},(_||!n.branch.some(A=>A===U))&&(E.props[`data_${$}`]=b,_=_||Object.keys((I=U.data)!=null?I:{}).length>0)}if(_||(_=Object.keys(q.data).length!==Object.keys(b).length),!n.url||r.href!==n.url.href||n.error!==f||_){E.props.page={error:f,params:i,routeId:p&&p.id,status:s,url:r,data:_?b:q.data};const $=(U,A)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${A}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function fe({loader:r,parent:i,url:d,params:s,routeId:f,server_data_node:p}){var b,_,R,I,$;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await r();if((b=E.shared)!=null&&b.load){let U=function(...g){for(const O of g){const{href:P}=new URL(O,d);k.dependencies.add(P)}};const A={};for(const g in s)Object.defineProperty(A,g,{get(){return k.params.add(g),s[g]},enumerable:!0});const y={routeId:f,params:A,data:(_=p==null?void 0:p.data)!=null?_:null,url:dt(d,()=>{k.url=!0}),async fetch(g,O){let P;typeof g=="string"?P=g:(P=g.url,O={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...O});const N=new URL(P,d).href;return U(N),c?_t(N,O):mt(P,N,O)},setHeaders:()=>{},depends:U,parent(){return k.parent=!0,i()}};Object.defineProperties(y,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(R=await E.shared.load.call(null,y))!=null?R:null}return{node:E,loader:r,server:p,shared:(I=E.shared)!=null&&I.load?{type:"data",data:h,uses:k}:null,data:($=h!=null?h:p==null?void 0:p.data)!=null?$:null}}function je(r,i,d){if(S)return!0;if(!d)return!1;if(d.parent&&i||r.url&&d.url)return!0;for(const s of r.params)if(d.params.has(s))return!0;for(const s of d.dependencies)if(l.some(f=>f(new URL(s))))return!0;return!1}function ue(r,i){var d,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((d=r.uses.dependencies)!=null?d:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&i!=null?i:null}async function Ue({id:r,invalidating:i,url:d,params:s,route:f}){if(o.id===r&&o.promise)return o.promise;const{errors:p,layouts:h,leaf:k}=f,E=n.url&&{url:r!==n.url.pathname+n.url.search,params:Object.keys(s).filter(y=>n.params[y]!==s[y])},b=[...h,k];p.forEach(y=>y==null?void 0:y().catch(()=>{})),b.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let _=null;const R=b.reduce((y,g,O)=>{var F;const P=n.branch[O],N=!!(g!=null&&g[0])&&((P==null?void 0:P.loader)!==g[1]||je(E,y.some(Boolean),(F=P.server)==null?void 0:F.uses));return y.push(N),y},[]);if(R.some(Boolean)){try{_=await xe(d,R)}catch(y){return te({status:500,error:y,url:d,routeId:f.id})}if(_.type==="redirect")return _}const I=_==null?void 0:_.nodes;let $=!1;const U=b.map(async(y,g)=>{var he,Te;if(!y)return;const O=n.branch[g],P=(he=I==null?void 0:I[g])!=null?he:null;if((!P||P.type==="skip")&&y[1]===(O==null?void 0:O.loader)&&!je(E,$,(Te=O.shared)==null?void 0:Te.uses))return O;if($=!0,(P==null?void 0:P.type)==="error")throw P.httperror?ot(P.httperror.status,P.httperror.message):P.error;return fe({loader:y[1],url:d,params:s,routeId:f.id,parent:async()=>{var Ne;const De={};for(let me=0;me<g;me+=1)Object.assign(De,(Ne=await U[me])==null?void 0:Ne.data);return De},server_data_node:ue(P,O==null?void 0:O.server)})});for(const y of U)y.catch(()=>{});const A=[];for(let y=0;y<b.length;y+=1)if(b[y])try{A.push(await U[y])}catch(g){const O=g;if(O instanceof Be)return{type:"redirect",location:O.location};const P=g instanceof ge?g.status:500;for(;y--;)if(p[y]){let N,F=y;for(;!A[F];)F-=1;try{return N={node:await p[y](),loader:p[y],data:{},server:null,shared:null},await Q({url:d,params:s,branch:A.slice(0,F+1).concat(N),status:P,error:O,route:f})}catch{continue}}await Z(d);return}else A.push(void 0);return await Q({url:d,params:s,branch:A,status:200,error:null,route:f,form:i?void 0:null})}async function te({status:r,error:i,url:d,routeId:s}){var b;const f={},p=await ve();let h=null;if(p.server)try{const _=await xe(d,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;h=(b=_.nodes[0])!=null?b:null}catch{await Z(d);return}const k=await fe({loader:ve,url:d,params:f,routeId:s,parent:()=>Promise.resolve({}),server_data_node:ue(h)}),E={node:await ke(),loader:ke,shared:null,server:null,data:null};return await Q({url:d,params:f,branch:[k,E],status:r,error:i,route:null})}function de(r,i){if(Ae(r))return;const d=decodeURI(r.pathname.slice(e.length)||"/");for(const s of ne){const f=s.exec(d);if(f){const p=new URL(r.origin+ct(r.pathname,t)+r.search+r.hash);return{id:p.pathname+p.search,invalidating:i,route:s,params:ft(f),url:p}}}}function Ae(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function pe({url:r,scroll:i,keepfocus:d,redirect_chain:s,details:f,type:p,delta:h,accepted:k,blocked:E}){var $,U,A,y;let b=!1;const _=de(r,!1),R={from:re("from",{params:n.params,routeId:(U=($=n.route)==null?void 0:$.id)!=null?U:null,url:n.url}),to:re("to",{params:(A=_==null?void 0:_.params)!=null?A:null,routeId:(y=_==null?void 0:_.route.id)!=null?y:null,url:r}),type:p};h!==void 0&&(R.delta=h);const I={...R,cancel:()=>{b=!0}};if(u.before_navigate.forEach(g=>g(I)),b){E();return}we(j),k(),c&&G.navigating.set(R),await Pe(_,r,s,{scroll:i,keepfocus:d,details:f},()=>{u.after_navigate.forEach(g=>g(R)),G.navigating.set(null)})}function Z(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{ye(()=>(u.after_navigate.push(r),()=>{const i=u.after_navigate.indexOf(r);u.after_navigate.splice(i,1)}))},before_navigate:r=>{ye(()=>(u.before_navigate.push(r),()=>{const i=u.before_navigate.indexOf(r);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(m||!c)&&(w=!1)},goto:(r,i={})=>ce(r,i,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")l.push(r);else{const{href:i}=new URL(r,location.href);l.push(d=>d.href===i)}return Le()},invalidateAll:()=>(S=!0,Le()),prefetch:async r=>{const i=new URL(r,Ve(document));await $e(i)},prefetch_routes:async r=>{const d=(r?ne.filter(s=>r.some(f=>s.exec(f))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(d)},apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:d,route:s}=n;if(!s)return;let f=n.branch.length;for(;f--;)if(s.errors[f]){let p,h=f;for(;!d[h];)h-=1;try{p={node:await s.errors[f](),loader:s.errors[f],data:{},server:null,shared:null};const k=await Q({url:i,params:n.params,branch:d.slice(0,h+1).concat(p),status:500,error:r.error,route:s});n=k.state;const E=ae();T.$set(k.props),E();return}catch{continue}}}else if(r.type==="redirect")ce(r.location,{},[]);else{const i={form:r.data};r.status!==q.status&&(i.page={...q,status:r.status});const d=ae();T.$set(i),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,k;let f=!1;const p={from:re("from",{params:n.params,routeId:(k=(h=n.route)==null?void 0:h.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(E=>E(p)),f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){we(j);try{sessionStorage[Fe]=JSON.stringify(ee)}catch{}}});const r=s=>{const{url:f,options:p}=qe(s);if(f&&p.prefetch){if(Ae(f))return;$e(f)}};let i;const d=s=>{clearTimeout(i),i=setTimeout(()=>{var f;(f=s.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:f,url:p,options:h}=qe(s);if(!f||!p)return;const k=f instanceof SVGAElement;if(!k&&!(p.protocol==="https:"||p.protocol==="http:"))return;const E=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||E.includes("external")||h.reload||(k?f.target.baseVal:f.target))return;const[b,_]=p.href.split("#");if(_!==void 0&&b===location.href.split("#")[0]){V=!0,we(j),G.page.set({...q,url:p}),G.page.notify();return}pe({url:p,scroll:h.noscroll?be():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===j)return;const f=s.state[B]-j;pe({url:new URL(location.href),scroll:ee[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=s.state[B]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[B]:++j},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&G.navigating.set(null)})},_hydrate:async({status:r,error:i,node_ids:d,params:s,routeId:f,data:p,form:h})=>{var b;const k=new URL(location.href);let E;try{const _=d.map(async(R,I)=>{const $=p[I];return fe({loader:le[R],url:k,params:s,routeId:f,parent:async()=>{const U={};for(let A=0;A<I;A+=1)Object.assign(U,(await _[A]).data);return U},server_data_node:ue($)})});E=await Q({url:k,params:s,branch:await Promise.all(_),status:r,error:i!=null&&i.__is_http_error?new ge(i.status,i.message):i,form:h,route:(b=ne.find(R=>R.id===f))!=null?b:null})}catch(_){const R=_;if(R instanceof Be){await Z(new URL(_.location,location.href));return}E=await te({status:R instanceof ge?R.status:500,error:R,url:k,routeId:f})}Oe(E)}}}let It=1;async function xe(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+Ut,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(It++)),await H(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}const Tt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(a,e){for(const t of Tt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)}});return e}function ae(){return()=>{}}async function Vt({env:a,hydrate:e,paths:t,target:l,trailing_slash:o}){at(t);const u=At({target:l,base:t.base,trailing_slash:o});st({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Vt as start};
