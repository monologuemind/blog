function k(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function H(){return Object.create(null)}function g(t){t.forEach(D)}function K(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ht(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function Q(t){return Object.keys(t).length===0}function P(t,...n){if(t==null)return k;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t){let n;return P(t,e=>n=e)(),n}function pt(t,n,e){t.$$.on_destroy.push(P(n,e))}function gt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function xt(t,n,e,i,r,l){if(r){const c=O(n,e,i,l);t.p(c,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function $t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function vt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let E=!1;function U(){E=!0}function V(){E=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&s.push(f)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const u=n[s].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:X(1,r,y=>n[e[y]].claim_order,u))-1;i[s]=e[f]+1;const a=f+1;e[a]=s,r=Math.max(a,r)}const l=[],c=[];let o=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(l.push(n[s-1]);o>=s;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(c[s],f)}}function Z(t,n){if(E){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){E&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function Nt(){return C("")}function Tt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){I(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function St(t,n,e){return rt(t,n,e,G)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function kt(t){return ct(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Ct(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e);if(e===i)return new q(void 0,n);I(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const l=r.slice(1,r.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(l,n)}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Mt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ht(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Lt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function st(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class ot{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class q extends ot{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let p;function m(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function qt(t){d().$$.on_mount.push(t)}function Bt(t){d().$$.after_update.push(t)}function Dt(t){d().$$.on_destroy.push(t)}function Pt(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=st(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Ot(t,n){return d().$$.context.set(t,n),n}function Gt(t){return d().$$.context.get(t)}const h=[],B=[],$=[],T=[],F=Promise.resolve();let A=!1;function R(){A||(A=!0,F.then(W))}function It(){return R(),F}function S(t){$.push(t)}function zt(t){T.push(t)}const N=new Set;let b=0;function W(){const t=p;do{for(;b<h.length;){const n=h[b];b++,m(n),lt(n.$$)}for(m(null),h.length=0,b=0;B.length;)B.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];N.has(e)||(N.add(e),e())}$.length=0}while(h.length);for(;T.length;)T.pop()();A=!1,N.clear(),m(t)}function lt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const v=new Set;let _;function Ft(){_={r:0,c:[],p:_}}function Rt(){_.r||g(_.c),_=_.p}function ut(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Wt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Jt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=n[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(e[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Kt(t){return typeof t=="object"&&t!==null?t:{}}function Qt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Ut(t){t&&t.c()}function Vt(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:c,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const s=l.map(D).filter(K);c?c.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(S)}function ft(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Xt(t,n,e,i,r,l,c,o=[-1]){const s=p;m(t);const u=t.$$={fragment:null,ctx:null,props:l,update:k,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:n.target||s.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...j)=>{const M=j.length?j[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&_t(t,a)),y}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){U();const a=it(n.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),V(),W()}m(s)}class Yt{$destroy(){ft(this,1),this.$destroy=k}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{zt as $,k as A,gt as B,Z as C,Tt as D,xt as E,bt as F,yt as G,pt as H,mt as I,vt as J,J as K,$t as L,wt as M,Jt as N,Kt as O,Gt as P,ht as Q,q as R,Yt as S,Ct as T,Pt as U,Ot as V,Dt as W,B as X,Qt as Y,S as Z,Ht as _,Et as a,g as a0,Lt as a1,nt as b,kt as c,Rt as d,Nt as e,ut as f,Ft as g,w as h,Xt as i,Bt as j,G as k,St as l,it as m,At as n,qt as o,Mt as p,C as q,ct as r,dt as s,Wt as t,jt as u,Ut as v,Vt as w,at as x,ft as y,It as z};