import{S as se,i as ae,s as ie,D as Oe,k as y,q as P,a as U,l as A,m as k,r as q,h as c,c as B,n as p,b as R,E as _,G as le,T as Ee,u as Z,H as Re,I as Ue,J as Be,f as V,t as C,L as De,v as x,w as ee,x as te,y as ne,K as Ne,p as Ce,A as ye,U as ce,V as Pe,e as Ie,d as Je,o as Ye,g as ze}from"../../../../chunks/index-db185f5b.js";import{v as Ge,a as Ke,H as Qe}from"../../../../chunks/v4-7b84e476.js";function Xe(t){let e,n,r,o,a,s,i,d,$,w,E,W,m,b,L,I,g,S,j,v,M,J,K;const F=t[10].default,h=Oe(F,t,t[9],null);return{c(){e=y("div"),n=y("label"),r=P(t[0]),o=U(),a=y("input"),s=U(),i=y("div"),d=y("div"),$=y("h3"),w=P(t[3]),E=U(),h&&h.c(),W=U(),m=y("div"),b=y("label"),L=P(t[1]),g=U(),S=y("label"),j=P(t[2]),this.h()},l(l){e=A(l,"DIV",{});var f=k(e);n=A(f,"LABEL",{for:!0,class:!0});var N=k(n);r=q(N,t[0]),N.forEach(c),o=B(f),a=A(f,"INPUT",{type:!0,id:!0,class:!0}),s=B(f),i=A(f,"DIV",{class:!0});var Q=k(i);d=A(Q,"DIV",{class:!0});var H=k(d);$=A(H,"H3",{class:!0});var X=k($);w=q(X,t[3]),X.forEach(c),E=B(H),h&&h.l(H),W=B(H),m=A(H,"DIV",{class:!0});var O=k(m);b=A(O,"LABEL",{for:!0,class:!0});var Y=k(b);L=q(Y,t[1]),Y.forEach(c),g=B(O),S=A(O,"LABEL",{for:!0,class:!0});var ve=k(S);j=q(ve,t[2]),ve.forEach(c),O.forEach(c),H.forEach(c),Q.forEach(c),f.forEach(c),this.h()},h(){p(n,"for",`modal-${t[8]}`),p(n,"class","btn modal-button"),p(a,"type","checkbox"),p(a,"id",`modal-${t[8]}`),p(a,"class","modal-toggle"),p($,"class","font-bold text-lg"),p(b,"for",`modal-${t[8]}`),p(b,"class",I=`btn btn-${t[6]}`),p(S,"for",`modal-${t[8]}`),p(S,"class",v=`btn btn-${t[7]}`),p(m,"class","modal-action"),p(d,"class","modal-box"),p(i,"class","modal")},m(l,f){R(l,e,f),_(e,n),_(n,r),_(e,o),_(e,a),_(e,s),_(e,i),_(i,d),_(d,$),_($,w),_(d,E),h&&h.m(d,null),_(d,W),_(d,m),_(m,b),_(b,L),_(m,g),_(m,S),_(S,j),M=!0,J||(K=[le(b,"click",function(){Ee(t[4])&&t[4].apply(this,arguments)}),le(S,"click",function(){Ee(t[5])&&t[5].apply(this,arguments)})],J=!0)},p(l,[f]){t=l,(!M||f&1)&&Z(r,t[0]),(!M||f&8)&&Z(w,t[3]),h&&h.p&&(!M||f&512)&&Re(h,F,t,t[9],M?Be(F,t[9],f,null):Ue(t[9]),null),(!M||f&2)&&Z(L,t[1]),(!M||f&64&&I!==(I=`btn btn-${t[6]}`))&&p(b,"class",I),(!M||f&4)&&Z(j,t[2]),(!M||f&128&&v!==(v=`btn btn-${t[7]}`))&&p(S,"class",v)},i(l){M||(V(h,l),M=!0)},o(l){C(h,l),M=!1},d(l){l&&c(e),h&&h.d(l),J=!1,De(K)}}}function Ze(t,e,n){let{$$slots:r={},$$scope:o}=e,{modal_open_text:a}=e,{modal_cancel_text:s}=e,{modal_confirm_text:i}=e,{modal_title:d}=e,{modal_cancel_handler:$}=e,{modal_confirm_handler:w}=e,{modal_cancel_color:E="neutral"}=e,{modal_confirm_color:W="secondary"}=e;const m=Ge();return t.$$set=b=>{"modal_open_text"in b&&n(0,a=b.modal_open_text),"modal_cancel_text"in b&&n(1,s=b.modal_cancel_text),"modal_confirm_text"in b&&n(2,i=b.modal_confirm_text),"modal_title"in b&&n(3,d=b.modal_title),"modal_cancel_handler"in b&&n(4,$=b.modal_cancel_handler),"modal_confirm_handler"in b&&n(5,w=b.modal_confirm_handler),"modal_cancel_color"in b&&n(6,E=b.modal_cancel_color),"modal_confirm_color"in b&&n(7,W=b.modal_confirm_color),"$$scope"in b&&n(9,o=b.$$scope)},[a,s,i,d,$,w,E,W,m,o,r]}class xe extends se{constructor(e){super(),ae(this,e,Ze,Xe,ie,{modal_open_text:0,modal_cancel_text:1,modal_confirm_text:2,modal_title:3,modal_cancel_handler:4,modal_confirm_handler:5,modal_cancel_color:6,modal_confirm_color:7})}}function et(t){let e;const n=t[3].default,r=Oe(n,t,t[4],null);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,a){r&&r.m(o,a),e=!0},p(o,a){r&&r.p&&(!e||a&16)&&Re(r,n,o,o[4],e?Be(n,o[4],a,null):Ue(o[4]),null)},i(o){e||(V(r,o),e=!0)},o(o){C(r,o),e=!1},d(o){r&&r.d(o)}}}function tt(t){let e,n;return e=new xe({props:{modal_confirm_handler:t[1],modal_cancel_handler:t[0],modal_cancel_text:"Cancel",modal_confirm_text:"Confirm",modal_open_text:"Create Person",modal_title:"Create Person",$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(r){ee(e.$$.fragment,r)},m(r,o){te(e,r,o),n=!0},p(r,[o]){const a={};o&2&&(a.modal_confirm_handler=r[1]),o&1&&(a.modal_cancel_handler=r[0]),o&16&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function nt(t,e,n){let r,o,{$$slots:a={},$$scope:s}=e,{handlers:i=[()=>null,()=>null]}=e;return t.$$set=d=>{"handlers"in d&&n(2,i=d.handlers),"$$scope"in d&&n(4,s=d.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&n(1,[r,o]=i,r,(n(0,o),n(2,i)))},[o,r,i,a,s]}class rt extends se{constructor(e){super(),ae(this,e,nt,tt,ie,{handlers:2})}}function ke(t,e,n){const r=t.slice();return r[2]=e[n],r}function ot(t){let e;return{c(){e=P(t[1])},l(n){e=q(n,t[1])},m(n,r){R(n,e,r)},p(n,r){r&2&&Z(e,n[1])},d(n){n&&c(e)}}}function $e(t){let e,n,r=t[2].name+"",o,a,s,i=t[2].age+"",d,$;return{c(){e=y("tr"),n=y("td"),o=P(r),a=U(),s=y("td"),d=P(i),$=U()},l(w){e=A(w,"TR",{});var E=k(e);n=A(E,"TD",{});var W=k(n);o=q(W,r),W.forEach(c),a=B(E),s=A(E,"TD",{});var m=k(s);d=q(m,i),m.forEach(c),$=B(E),E.forEach(c)},m(w,E){R(w,e,E),_(e,n),_(n,o),_(e,a),_(e,s),_(s,d),_(e,$)},p(w,E){E&1&&r!==(r=w[2].name+"")&&Z(o,r),E&1&&i!==(i=w[2].age+"")&&Z(d,i)},d(w){w&&c(e)}}}function lt(t){let e,n,r,o,a,s,i,d,$,w,E,W,m,b;n=new Ke({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}});let L=t[0],I=[];for(let g=0;g<L.length;g+=1)I[g]=$e(ke(t,L,g));return{c(){e=y("div"),x(n.$$.fragment),r=U(),o=y("table"),a=y("thead"),s=y("tr"),i=y("th"),d=P("Name"),$=U(),w=y("th"),E=P("Age"),W=U(),m=y("tbody");for(let g=0;g<I.length;g+=1)I[g].c();this.h()},l(g){e=A(g,"DIV",{class:!0});var S=k(e);ee(n.$$.fragment,S),r=B(S),o=A(S,"TABLE",{class:!0});var j=k(o);a=A(j,"THEAD",{});var v=k(a);s=A(v,"TR",{});var M=k(s);i=A(M,"TH",{});var J=k(i);d=q(J,"Name"),J.forEach(c),$=B(M),w=A(M,"TH",{});var K=k(w);E=q(K,"Age"),K.forEach(c),M.forEach(c),v.forEach(c),W=B(j),m=A(j,"TBODY",{});var F=k(m);for(let h=0;h<I.length;h+=1)I[h].l(F);F.forEach(c),j.forEach(c),S.forEach(c),this.h()},h(){p(o,"class","table w-full"),p(e,"class","overflow-x-auto")},m(g,S){R(g,e,S),te(n,e,null),_(e,r),_(e,o),_(o,a),_(a,s),_(s,i),_(i,d),_(s,$),_(s,w),_(w,E),_(o,W),_(o,m);for(let j=0;j<I.length;j+=1)I[j].m(m,null);b=!0},p(g,[S]){const j={};if(S&34&&(j.$$scope={dirty:S,ctx:g}),n.$set(j),S&1){L=g[0];let v;for(v=0;v<L.length;v+=1){const M=ke(g,L,v);I[v]?I[v].p(M,S):(I[v]=$e(M),I[v].c(),I[v].m(m,null))}for(;v<I.length;v+=1)I[v].d(1);I.length=L.length}},i(g){b||(V(n.$$.fragment,g),b=!0)},o(g){C(n.$$.fragment,g),b=!1},d(g){g&&c(e),ne(n),Ne(I,g)}}}function st(t,e,n){let{people:r=[]}=e,{title:o=""}=e;return t.$$set=a=>{"people"in a&&n(0,r=a.people),"title"in a&&n(1,o=a.title)},[r,o]}class Se extends se{constructor(e){super(),ae(this,e,st,lt,ie,{people:0,title:1})}}function Me(t,e,n){const r=t.slice();return r[14]=e[n].link,r[15]=e[n].name,r[17]=n,r}function at(t){let e;return{c(){e=P(je)},l(n){e=q(n,je)},m(n,r){R(n,e,r)},p:ye,d(n){n&&c(e)}}}function it(t){let e,n,r,o,a;return{c(){e=y("input"),n=U(),r=y("input"),this.h()},l(s){e=A(s,"INPUT",{type:!0,placeholder:!0,class:!0}),n=B(s),r=A(s,"INPUT",{min:!0,max:!0,type:!0,placeholder:!0,class:!0}),this.h()},h(){p(e,"type","text"),p(e,"placeholder","Type here"),p(e,"class","input input-bordered input-secondary w-full max-w-xs"),p(r,"min","1"),p(r,"max","1997"),p(r,"type","number"),p(r,"placeholder","Type here"),p(r,"class","input input-bordered input-secondary w-full max-w-xs")},m(s,i){R(s,e,i),ce(e,t[2].name),R(s,n,i),R(s,r,i),ce(r,t[2].age),o||(a=[le(e,"input",t[7]),le(r,"input",t[8])],o=!0)},p(s,i){i&4&&e.value!==s[2].name&&ce(e,s[2].name),i&4&&Pe(r.value)!==s[2].age&&ce(r,s[2].age)},d(s){s&&c(e),s&&c(n),s&&c(r),o=!1,De(a)}}}function Te(t){let e,n,r=t[15]+"",o;return{c(){e=y("li"),n=y("a"),o=P(r),this.h()},l(a){e=A(a,"LI",{});var s=k(e);n=A(s,"A",{target:!0,class:!0,href:!0});var i=k(n);o=q(i,r),i.forEach(c),s.forEach(c),this.h()},h(){p(n,"target","_blank"),p(n,"class","link link-secondary link-hover"),p(n,"href",t[14])},m(a,s){R(a,e,s),_(e,n),_(n,o)},p:ye,d(a){a&&c(e)}}}function ct(t){let e,n,r,o,a,s,i,d,$,w,E,W,m,b,L,I,g,S,j,v,M,J,K;e=new Qe({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),i=new rt({props:{handlers:[t[5],t[6]],$$slots:{default:[it]},$$scope:{ctx:t}}}),m=new Se({props:{title:"All The People",people:t[1]}}),L=new Se({props:{title:"Unique People",people:t[3]}});let F=t[4],h=[];for(let l=0;l<F.length;l+=1)h[l]=Te(Me(t,F,l));return{c(){x(e.$$.fragment),n=U(),r=y("p"),o=P("I wanted to mess around with WASM a bit so read up on some things to get started and created some sample functions for people to play with. You can see all the functions available by looking at window.rust. The wasm file, js file, and the rust source code are also available."),a=U(),s=y("div"),x(i.$$.fragment),d=U(),$=y("div"),w=y("button"),E=P("Add MonologueMind to people"),W=U(),x(m.$$.fragment),b=U(),x(L.$$.fragment),I=U(),g=y("p"),S=P("Resources"),j=U(),v=y("ol");for(let l=0;l<h.length;l+=1)h[l].c();this.h()},l(l){ee(e.$$.fragment,l),n=B(l),r=A(l,"P",{});var f=k(r);o=q(f,"I wanted to mess around with WASM a bit so read up on some things to get started and created some sample functions for people to play with. You can see all the functions available by looking at window.rust. The wasm file, js file, and the rust source code are also available."),f.forEach(c),a=B(l),s=A(l,"DIV",{});var N=k(s);ee(i.$$.fragment,N),d=B(N),$=A(N,"DIV",{});var Q=k($);w=A(Q,"BUTTON",{class:!0});var H=k(w);E=q(H,"Add MonologueMind to people"),H.forEach(c),Q.forEach(c),N.forEach(c),W=B(l),ee(m.$$.fragment,l),b=B(l),ee(L.$$.fragment,l),I=B(l),g=A(l,"P",{});var X=k(g);S=q(X,"Resources"),X.forEach(c),j=B(l),v=A(l,"OL",{});var O=k(v);for(let Y=0;Y<h.length;Y+=1)h[Y].l(O);O.forEach(c),this.h()},h(){p(w,"class","btn btn-sm btn-outline btn-primary"),Ce(s,"display","flex",!1)},m(l,f){te(e,l,f),R(l,n,f),R(l,r,f),_(r,o),R(l,a,f),R(l,s,f),te(i,s,null),_(s,d),_(s,$),_($,w),_(w,E),R(l,W,f),te(m,l,f),R(l,b,f),te(L,l,f),R(l,I,f),R(l,g,f),_(g,S),R(l,j,f),R(l,v,f);for(let N=0;N<h.length;N+=1)h[N].m(v,null);M=!0,J||(K=le(w,"click",t[9]),J=!0)},p(l,[f]){const N={};f&262144&&(N.$$scope={dirty:f,ctx:l}),e.$set(N);const Q={};f&262148&&(Q.$$scope={dirty:f,ctx:l}),i.$set(Q);const H={};f&2&&(H.people=l[1]),m.$set(H);const X={};if(f&8&&(X.people=l[3]),L.$set(X),f&16){F=l[4];let O;for(O=0;O<F.length;O+=1){const Y=Me(l,F,O);h[O]?h[O].p(Y,f):(h[O]=Te(Y),h[O].c(),h[O].m(v,null))}for(;O<h.length;O+=1)h[O].d(1);h.length=F.length}},i(l){M||(V(e.$$.fragment,l),V(i.$$.fragment,l),V(m.$$.fragment,l),V(L.$$.fragment,l),M=!0)},o(l){C(e.$$.fragment,l),C(i.$$.fragment,l),C(m.$$.fragment,l),C(L.$$.fragment,l),M=!1},d(l){ne(e,l),l&&c(n),l&&c(r),l&&c(a),l&&c(s),ne(i),l&&c(W),ne(m,l),l&&c(b),ne(L,l),l&&c(I),l&&c(g),l&&c(j),l&&c(v),Ne(h,l),J=!1,K()}}}const ft={title:"WASM with Rust",description:"Writing Rust code and using it with JavaScript",topics:"rust,javascript"},{title:je,description:St,topics:Mt}=ft;function ut(t,e,n){let r,{methods:o}=e;const a=[{link:"https://docs.rs/wasm-bindgen/latest/wasm_bindgen",name:"WASM Library"},{link:"https://serde.rs/",name:"Serde Library (Using JSON in Rust)"},{link:"https://docs.rs/serde-wasm-bindgen/0.4.3/serde_wasm_bindgen/",name:"Serde WASM Helpers"},{link:"https://monologuemind.github.io/blog/rust.js",name:"WASM Js file"},{link:"https://monologuemind.github.io/blog/rust_bg.wasm",name:"WASM file"},{link:"https://monologuemind.github.io/blog/lib.rs",name:"Rust source"}];let s=[],i={};const d=()=>{n(1,s=[...s,{...i}]),n(2,i={})},$=()=>{n(2,i={})};function w(){i.name=this.value,n(2,i)}function E(){i.age=Pe(this.value),n(2,i)}const W=()=>{n(1,s=[...s,o.get_instance_of_person()])};return t.$$set=m=>{"methods"in m&&n(0,o=m.methods)},t.$$.update=()=>{t.$$.dirty&3&&n(3,r=o!=null&&o.unique_by?o.unique_by({key:"name",objects:[...s]}).map(m=>Object.fromEntries(m)):[])},[o,s,i,r,a,d,$,w,E,W]}class _t extends se{constructor(e){super(),ae(this,e,ut,ct,ie,{methods:0})}}let D;const z=new Array(32).fill(void 0);z.push(void 0,null,!0,!1);function u(t){return z[t]}let oe=z.length;function dt(t){t<36||(z[t]=oe,oe=t)}function G(t){const e=u(t);return dt(t),e}const qe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});qe.decode();let _e=new Uint8Array;function de(){return _e.byteLength===0&&(_e=new Uint8Array(D.memory.buffer)),_e}function fe(t,e){return qe.decode(de().subarray(t,t+e))}function T(t){oe===z.length&&z.push(z.length+1);const e=oe;return oe=z[e],z[e]=t,e}function we(t){return t==null}let be=new Float64Array;function bt(){return be.byteLength===0&&(be=new Float64Array(D.memory.buffer)),be}let me=new Int32Array;function re(){return me.byteLength===0&&(me=new Int32Array(D.memory.buffer)),me}let he=0;const ge=new TextEncoder("utf-8"),mt=typeof ge.encodeInto=="function"?function(t,e){return ge.encodeInto(t,e)}:function(t,e){const n=ge.encode(t);return e.set(n),{read:t.length,written:n.length}};function We(t,e,n){if(n===void 0){const i=ge.encode(t),d=e(i.length);return de().subarray(d,d+i.length).set(i),he=i.length,d}let r=t.length,o=e(r);const a=de();let s=0;for(;s<r;s++){const i=t.charCodeAt(s);if(i>127)break;a[o+s]=i}if(s!==r){s!==0&&(t=t.slice(s)),o=n(o,r,r=s+t.length*3);const i=de().subarray(o+s,o+r);s+=mt(t,i).written}return he=s,o}function pe(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const o=t.description;return o==null?"Symbol":`Symbol(${o})`}if(e=="function"){const o=t.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(t)){const o=t.length;let a="[";o>0&&(a+=pe(t[0]));for(let s=1;s<o;s++)a+=", "+pe(t[s]);return a+="]",a}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function gt(t){D.js_log(T(t))}function ht(){const t=D.hello_world();return G(t)}function wt(t){const e=D.unique_by(T(t));return G(e)}function pt(){const t=D.get_instance_of_person();return G(t)}function yt(t){const e=D.create_person(T(t));return G(e)}function ue(t,e){try{return t.apply(this,e)}catch(n){D.__wbindgen_exn_store(T(n))}}async function At(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function Fe(){const t={};return t.wbg={},t.wbg.__wbindgen_object_drop_ref=function(e){G(e)},t.wbg.__wbg_log_3b36ce27c924545c=function(e){console.log(G(e))},t.wbg.__wbindgen_string_new=function(e,n){const r=fe(e,n);return T(r)},t.wbg.__wbg_log_6e114ce888388e3b=function(e,n){console.log(fe(e,n))},t.wbg.__wbg_new_1d9a920c6bfc44a8=function(){const e=new Array;return T(e)},t.wbg.__wbg_new_268f7b7dd3430798=function(){return T(new Map)},t.wbg.__wbg_new_0b9bfdd97583284e=function(){const e=new Object;return T(e)},t.wbg.__wbg_set_a68214f35c417fa9=function(e,n,r){u(e)[n>>>0]=G(r)},t.wbg.__wbg_get_57245cc7d7c7619d=function(e,n){const r=u(e)[n>>>0];return T(r)},t.wbg.__wbg_next_aaef7c8aa5e212ac=function(){return ue(function(e){const n=u(e).next();return T(n)},arguments)},t.wbg.__wbg_done_1b73b0672e15f234=function(e){return u(e).done},t.wbg.__wbg_value_1ccc36bc03462d71=function(e){const n=u(e).value;return T(n)},t.wbg.__wbg_iterator_6f9d4f28845f426c=function(){return T(Symbol.iterator)},t.wbg.__wbg_get_765201544a2b6869=function(){return ue(function(e,n){const r=Reflect.get(u(e),u(n));return T(r)},arguments)},t.wbg.__wbindgen_is_function=function(e){return typeof u(e)=="function"},t.wbg.__wbg_call_97ae9d8645dc388b=function(){return ue(function(e,n){const r=u(e).call(u(n));return T(r)},arguments)},t.wbg.__wbindgen_is_object=function(e){const n=u(e);return typeof n=="object"&&n!==null},t.wbg.__wbg_next_579e583d33566a86=function(e){const n=u(e).next;return T(n)},t.wbg.__wbg_length_9e1ae1900cb0fbd5=function(e){return u(e).length},t.wbg.__wbindgen_memory=function(){const e=D.memory;return T(e)},t.wbg.__wbg_buffer_3f3d764d4747d564=function(e){const n=u(e).buffer;return T(n)},t.wbg.__wbg_new_8c3f0052272a457a=function(e){const n=new Uint8Array(u(e));return T(n)},t.wbg.__wbg_set_83db9690f9353e79=function(e,n,r){u(e).set(u(n),r>>>0)},t.wbg.__wbg_has_8359f114ce042f5a=function(){return ue(function(e,n){return Reflect.has(u(e),u(n))},arguments)},t.wbg.__wbindgen_boolean_get=function(e){const n=u(e);return typeof n=="boolean"?n?1:0:2},t.wbg.__wbindgen_is_bigint=function(e){return typeof u(e)=="bigint"},t.wbg.__wbg_BigInt_06819bca5a5bedef=function(e){return BigInt(u(e))},t.wbg.__wbg_BigInt_d0c7d465bfa30d3b=function(e){const n=BigInt(e);return T(n)},t.wbg.__wbg_is_40a66842732708e7=function(e,n){return Object.is(u(e),u(n))},t.wbg.__wbindgen_number_get=function(e,n){const r=u(n),o=typeof r=="number"?r:void 0;bt()[e/8+1]=we(o)?0:o,re()[e/4+0]=!we(o)},t.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a=function(e){return Number.isSafeInteger(u(e))},t.wbg.__wbindgen_string_get=function(e,n){const r=u(n),o=typeof r=="string"?r:void 0;var a=we(o)?0:We(o,D.__wbindgen_malloc,D.__wbindgen_realloc),s=he;re()[e/4+1]=s,re()[e/4+0]=a},t.wbg.__wbg_isArray_27c46c67f498e15d=function(e){return Array.isArray(u(e))},t.wbg.__wbg_BigInt_67359e71cae1c6c9=function(e){return BigInt(u(e))},t.wbg.__wbg_BigInt_1fab4952b6c4a499=function(e){const n=BigInt(BigInt.asUintN(64,e));return T(n)},t.wbg.__wbg_length_6e3bbe7c8bd4dbd8=function(e){return u(e).length},t.wbg.__wbg_entries_65a76a413fc91037=function(e){const n=Object.entries(u(e));return T(n)},t.wbg.__wbindgen_number_new=function(e){return T(e)},t.wbg.__wbg_set_c943d600fa71e4dd=function(e,n,r){u(e)[G(n)]=G(r)},t.wbg.__wbg_set_933729cf5b66ac11=function(e,n,r){const o=u(e).set(u(n),u(r));return T(o)},t.wbg.__wbindgen_is_string=function(e){return typeof u(e)=="string"},t.wbg.__wbindgen_is_null=function(e){return u(e)===null},t.wbg.__wbindgen_is_undefined=function(e){return u(e)===void 0},t.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003=function(e){let n;try{n=u(e)instanceof Uint8Array}catch{n=!1}return n},t.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b=function(e){let n;try{n=u(e)instanceof ArrayBuffer}catch{n=!1}return n},t.wbg.__wbg_new_8d2af00bc1e329ee=function(e,n){const r=new Error(fe(e,n));return T(r)},t.wbg.__wbindgen_object_clone_ref=function(e){const n=u(e);return T(n)},t.wbg.__wbindgen_debug_string=function(e,n){const r=pe(u(n)),o=We(r,D.__wbindgen_malloc,D.__wbindgen_realloc),a=he;re()[e/4+1]=a,re()[e/4+0]=o},t.wbg.__wbindgen_throw=function(e,n){throw new Error(fe(e,n))},t}function He(t,e){return D=t.exports,Ae.__wbindgen_wasm_module=e,be=new Float64Array,me=new Int32Array,_e=new Uint8Array,D}function vt(t){const e=Fe();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return He(n,t)}async function Ae(t){typeof t>"u"&&(t=new URL(""+new URL("../../../../assets/rust_bg-dd0ebff1.wasm",import.meta.url).href,self.location));const e=Fe();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await At(await t,e);return He(n,r)}const Ve=Object.freeze(Object.defineProperty({__proto__:null,js_log:gt,hello_world:ht,unique_by:wt,get_instance_of_person:pt,create_person:yt,initSync:vt,default:Ae},Symbol.toStringTag,{value:"Module"}));function Le(t){let e,n;return e=new _t({props:{methods:{...Ve}}}),{c(){x(e.$$.fragment)},l(r){ee(e.$$.fragment,r)},m(r,o){te(e,r,o),n=!0},p:ye,i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Et(t){let e,n,r=t[0]&&Le();return{c(){r&&r.c(),e=Ie()},l(o){r&&r.l(o),e=Ie()},m(o,a){r&&r.m(o,a),R(o,e,a),n=!0},p(o,[a]){o[0]?r?(r.p(o,a),a&1&&V(r,1)):(r=Le(),r.c(),V(r,1),r.m(e.parentNode,e)):r&&(ze(),C(r,1,1,()=>{r=null}),Je())},i(o){n||(V(r),n=!0)},o(o){C(r),n=!1},d(o){r&&r.d(o),o&&c(e)}}}function It(t,e,n){let r=!1;return Ye(async()=>{await Ae(),window.rust=Ve,n(0,r=!0)}),[r]}class Tt extends se{constructor(e){super(),ae(this,e,It,Et,ie,{})}}export{Tt as default};
