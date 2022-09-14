import{S as ze,i as Fe,s as Be,v as ie,a as r,k as i,q as f,w as ce,c as l,l as c,m as u,r as h,h as t,n as le,x as ue,b as s,E as k,f as fe,t as he,y as ke,A as et}from"../../../../chunks/index-dc0a15ca.js";import{H as tt,a as Oe}from"../../../../chunks/H2-c3d7b268.js";function at(m){let n;return{c(){n=f("Typescript Extractors")},l(o){n=h(o,"Typescript Extractors")},m(o,p){s(o,n,p)},d(o){o&&t(n)}}}function st(m){let n;return{c(){n=f("Find")},l(o){n=h(o,"Find")},m(o,p){s(o,n,p)},d(o){o&&t(n)}}}function nt(m){let n;return{c(){n=f("Create")},l(o){n=h(o,"Create")},m(o,p){s(o,n,p)},d(o){o&&t(n)}}}function ot(m){let n,o,p,q,J,$,me,O,d,z,_,de,F,x,ye,B,w,Ge=`<code class="language-ts"><span class="token punctuation">[</span><span class="token punctuation">&#123;</span>name<span class="token operator">:</span> <span class="token string">"Mary Jane"</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>name<span class="token operator">:</span> <span class="token string">"Peter Parker"</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span>

<span class="token comment">// vs</span>

<span class="token punctuation">&#123;</span>data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span>name<span class="token operator">:</span> <span class="token string">"Mary Jane"</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> page<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> limit<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span></code>`,G,P,we,L,Pe,K,g,be,Q,E,Te,U,b,Ke=`<code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">Parameters</span> <span class="token punctuation">&#123;</span>
  limit<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  paginated<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,V,M,ve,X,C,$e,Y,T,Qe=`<code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ExtractPaginated<span class="token operator">&lt;</span>PartialParameters<span class="token punctuation">,</span> Model<span class="token operator">></span></span> <span class="token operator">=</span> 
  PartialParameters <span class="token keyword">extends</span> <span class="token punctuation">&#123;</span> paginated<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span> <span class="token operator">?</span> 
    Paginated<span class="token operator">&lt;</span>Model<span class="token operator">></span> <span class="token operator">:</span> 
      Model<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">People</span> <span class="token punctuation">&#123;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">async</span> <span class="token generic-function"><span class="token function">find</span><span class="token generic class-name"><span class="token operator">&lt;</span>PartialParameters <span class="token keyword">extends</span> Parameters<span class="token operator">></span></span></span>
  <span class="token punctuation">(</span>parameters<span class="token operator">:</span> PartialParameters<span class="token punctuation">)</span><span class="token operator">:</span> 
    <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ExtractPaginated<span class="token operator">&lt;</span>PartialParameters<span class="token punctuation">,</span> People<span class="token operator">>></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// Run the same code that exists for the find function with the same returns;</span>
  <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Z,j,_e,ee,A,xe,te,D,ge,ae,H,Ee,se,y,ne,I,Me,oe,v,Ue=`<code class="language-ts"><span class="token comment">// The any[] could also be Partial&lt;Model>[] if the data is supposed to </span>
<span class="token comment">// Partially match the model itself however any array type will do</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ExtractArray<span class="token operator">&lt;</span>DataToCreate<span class="token punctuation">,</span> Model<span class="token operator">></span></span> <span class="token operator">=</span> 
  DataToCreate <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">any</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> 
    Model<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> 
      Model<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">create</span><span class="token generic class-name"><span class="token operator">&lt;</span>DataToCreate<span class="token operator">></span></span></span><span class="token punctuation">(</span>data<span class="token operator">:</span> DataToCreate<span class="token punctuation">)</span><span class="token operator">:</span> 
    ExtractArray<span class="token operator">&lt;</span>DataToCreate<span class="token punctuation">,</span> People<span class="token operator">></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// This is just an example of how this could work.</span>
  <span class="token comment">// However most libraries already have this separated out...</span>
  <span class="token comment">// Because they already support creating singular and multiple objects.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> ret<span class="token operator">:</span> People<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">'Jon Snow'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> ret <span class="token keyword">as</span> ExtractArray<span class="token operator">&lt;</span>DataToCreate<span class="token punctuation">,</span> People<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">const</span> ret<span class="token operator">:</span> People <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'Arya Stark'</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> ret <span class="token keyword">as</span> ExtractArray<span class="token operator">&lt;</span>DataToCreate<span class="token punctuation">,</span> People<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,pe,R,Ce,re;return n=new tt({props:{$$slots:{default:[at]},$$scope:{ctx:m}}}),d=new Oe({props:{$$slots:{default:[st]},$$scope:{ctx:m}}}),y=new Oe({props:{$$slots:{default:[nt]},$$scope:{ctx:m}}}),{c(){ie(n.$$.fragment),o=r(),p=i("p"),q=f("This whole article is intended to cover an issue that I have run into many times with the implementation of typescript for different libraries and frameworks. That issue being that some return types on functions can be multiple types without the function knowing which one it will return exactly."),J=r(),$=i("p"),me=f("This most common example I have is when using different ORM libraries (knex, sequelize, etc.). The two functions we can take a look at are the ones that return an array of data (find), and the ones that create data (post)."),O=r(),ie(d.$$.fragment),z=r(),_=i("p"),de=f("When using find functions you often run into the issue of pagination. Most libraries will have a default option whether that\u2019s to return all data or a paginated set of that data. The paginated set typically has a slightly different structure than the full list of data."),F=r(),x=i("p"),ye=f("Take the two object structures below:"),B=r(),w=i("pre"),G=r(),P=i("p"),we=f(`These two structures would be totally different types if you called the find function like so:
const response = await find(\u2026); // People[] | Paginated`),L=i("code"),Pe=f("<People>"),K=r(),g=i("p"),be=f("This causes headaches for anyone useing the libraries like this when the maintainers could implement more advanced type inferences on the return types of functions."),Q=r(),E=i("p"),Te=f("They can do this because the way you would get the different return types will depend on the parameters given to the function itself.Tthe parameter interface passed to the find function can look like this:"),U=r(),b=i("pre"),V=r(),M=i("p"),ve=f("The paginated property is what will determine the structure of the object you get back even though the return type is still an or."),X=r(),C=i("p"),$e=f("To fix the return type can be changed to check the parameters that are passed in to decide the return type."),Y=r(),T=i("pre"),Z=r(),j=i("p"),_e=f(`To break down what is occuring here, we can start with the generic that the find function is using. We are saying the parameters will be of the generic type PartialParameters which extends the default Parameters interface (Not shown).
This means that you will retain type inference when using the find function (It will know that paginated and limit are possible properties).`),ee=r(),A=i("p"),xe=f("Next we take on the ExtractPaginated beast, this is where the majority of the fun begins. To start off this type accepts two types, the PartialParameters which will be the same as the parameters passed to the find function and the \u201CModel\u201D which just represents the raw data you are trying to access."),te=r(),D=i("p"),ge=f("Then we create the actual properties contained within this type dynamically, based on the two types that are passed to it. This is where we get to see the generics work together because the PartialParameters that we pass to this will know definitively whether paginated is true or false based on the actual parameter values passed to the find function."),ae=r(),H=i("p"),Ee=f("The ExtractPaginated then is able to return the correct type specifically instead using an or. This removes any type coercion that a developer would have to do to ensure type safety when using a library like this."),se=r(),ie(y.$$.fragment),ne=r(),I=i("p"),Me=f("The same concepts can apply to the create function as well. In this case we have the following as our Extract type."),oe=r(),v=i("pre"),pe=r(),R=i("p"),Ce=f("That\u2019s all it takes, an extra type for to extract the return type based on the parameters sent to it. There are many other applications that this can apply to so if you find yourself either using them or if you seem the in use leave a comment so we can so people can check it out."),this.h()},l(e){ce(n.$$.fragment,e),o=l(e),p=c(e,"P",{});var a=u(p);q=h(a,"This whole article is intended to cover an issue that I have run into many times with the implementation of typescript for different libraries and frameworks. That issue being that some return types on functions can be multiple types without the function knowing which one it will return exactly."),a.forEach(t),J=l(e),$=c(e,"P",{});var N=u($);me=h(N,"This most common example I have is when using different ORM libraries (knex, sequelize, etc.). The two functions we can take a look at are the ones that return an array of data (find), and the ones that create data (post)."),N.forEach(t),O=l(e),ce(d.$$.fragment,e),z=l(e),_=c(e,"P",{});var S=u(_);de=h(S,"When using find functions you often run into the issue of pagination. Most libraries will have a default option whether that\u2019s to return all data or a paginated set of that data. The paginated set typically has a slightly different structure than the full list of data."),S.forEach(t),F=l(e),x=c(e,"P",{});var W=u(x);ye=h(W,"Take the two object structures below:"),W.forEach(t),B=l(e),w=c(e,"PRE",{class:!0});var Ve=u(w);Ve.forEach(t),G=l(e),P=c(e,"P",{});var je=u(P);we=h(je,`These two structures would be totally different types if you called the find function like so:
const response = await find(\u2026); // People[] | Paginated`),L=c(je,"CODE",{});var Ae=u(L);Pe=h(Ae,"<People>"),Ae.forEach(t),je.forEach(t),K=l(e),g=c(e,"P",{});var De=u(g);be=h(De,"This causes headaches for anyone useing the libraries like this when the maintainers could implement more advanced type inferences on the return types of functions."),De.forEach(t),Q=l(e),E=c(e,"P",{});var He=u(E);Te=h(He,"They can do this because the way you would get the different return types will depend on the parameters given to the function itself.Tthe parameter interface passed to the find function can look like this:"),He.forEach(t),U=l(e),b=c(e,"PRE",{class:!0});var Xe=u(b);Xe.forEach(t),V=l(e),M=c(e,"P",{});var Ie=u(M);ve=h(Ie,"The paginated property is what will determine the structure of the object you get back even though the return type is still an or."),Ie.forEach(t),X=l(e),C=c(e,"P",{});var Re=u(C);$e=h(Re,"To fix the return type can be changed to check the parameters that are passed in to decide the return type."),Re.forEach(t),Y=l(e),T=c(e,"PRE",{class:!0});var Ye=u(T);Ye.forEach(t),Z=l(e),j=c(e,"P",{});var qe=u(j);_e=h(qe,`To break down what is occuring here, we can start with the generic that the find function is using. We are saying the parameters will be of the generic type PartialParameters which extends the default Parameters interface (Not shown).
This means that you will retain type inference when using the find function (It will know that paginated and limit are possible properties).`),qe.forEach(t),ee=l(e),A=c(e,"P",{});var Le=u(A);xe=h(Le,"Next we take on the ExtractPaginated beast, this is where the majority of the fun begins. To start off this type accepts two types, the PartialParameters which will be the same as the parameters passed to the find function and the \u201CModel\u201D which just represents the raw data you are trying to access."),Le.forEach(t),te=l(e),D=c(e,"P",{});var Ne=u(D);ge=h(Ne,"Then we create the actual properties contained within this type dynamically, based on the two types that are passed to it. This is where we get to see the generics work together because the PartialParameters that we pass to this will know definitively whether paginated is true or false based on the actual parameter values passed to the find function."),Ne.forEach(t),ae=l(e),H=c(e,"P",{});var Se=u(H);Ee=h(Se,"The ExtractPaginated then is able to return the correct type specifically instead using an or. This removes any type coercion that a developer would have to do to ensure type safety when using a library like this."),Se.forEach(t),se=l(e),ce(y.$$.fragment,e),ne=l(e),I=c(e,"P",{});var We=u(I);Me=h(We,"The same concepts can apply to the create function as well. In this case we have the following as our Extract type."),We.forEach(t),oe=l(e),v=c(e,"PRE",{class:!0});var Ze=u(v);Ze.forEach(t),pe=l(e),R=c(e,"P",{});var Je=u(R);Ce=h(Je,"That\u2019s all it takes, an extra type for to extract the return type based on the parameters sent to it. There are many other applications that this can apply to so if you find yourself either using them or if you seem the in use leave a comment so we can so people can check it out."),Je.forEach(t),this.h()},h(){le(w,"class","language-ts"),le(b,"class","language-ts"),le(T,"class","language-ts"),le(v,"class","language-ts")},m(e,a){ue(n,e,a),s(e,o,a),s(e,p,a),k(p,q),s(e,J,a),s(e,$,a),k($,me),s(e,O,a),ue(d,e,a),s(e,z,a),s(e,_,a),k(_,de),s(e,F,a),s(e,x,a),k(x,ye),s(e,B,a),s(e,w,a),w.innerHTML=Ge,s(e,G,a),s(e,P,a),k(P,we),k(P,L),k(L,Pe),s(e,K,a),s(e,g,a),k(g,be),s(e,Q,a),s(e,E,a),k(E,Te),s(e,U,a),s(e,b,a),b.innerHTML=Ke,s(e,V,a),s(e,M,a),k(M,ve),s(e,X,a),s(e,C,a),k(C,$e),s(e,Y,a),s(e,T,a),T.innerHTML=Qe,s(e,Z,a),s(e,j,a),k(j,_e),s(e,ee,a),s(e,A,a),k(A,xe),s(e,te,a),s(e,D,a),k(D,ge),s(e,ae,a),s(e,H,a),k(H,Ee),s(e,se,a),ue(y,e,a),s(e,ne,a),s(e,I,a),k(I,Me),s(e,oe,a),s(e,v,a),v.innerHTML=Ue,s(e,pe,a),s(e,R,a),k(R,Ce),re=!0},p(e,[a]){const N={};a&1&&(N.$$scope={dirty:a,ctx:e}),n.$set(N);const S={};a&1&&(S.$$scope={dirty:a,ctx:e}),d.$set(S);const W={};a&1&&(W.$$scope={dirty:a,ctx:e}),y.$set(W)},i(e){re||(fe(n.$$.fragment,e),fe(d.$$.fragment,e),fe(y.$$.fragment,e),re=!0)},o(e){he(n.$$.fragment,e),he(d.$$.fragment,e),he(y.$$.fragment,e),re=!1},d(e){ke(n,e),e&&t(o),e&&t(p),e&&t(J),e&&t($),e&&t(O),ke(d,e),e&&t(z),e&&t(_),e&&t(F),e&&t(x),e&&t(B),e&&t(w),e&&t(G),e&&t(P),e&&t(K),e&&t(g),e&&t(Q),e&&t(E),e&&t(U),e&&t(b),e&&t(V),e&&t(M),e&&t(X),e&&t(C),e&&t(Y),e&&t(T),e&&t(Z),e&&t(j),e&&t(ee),e&&t(A),e&&t(te),e&&t(D),e&&t(ae),e&&t(H),e&&t(se),ke(y,e),e&&t(ne),e&&t(I),e&&t(oe),e&&t(v),e&&t(pe),e&&t(R)}}}class pt extends ze{constructor(n){super(),Fe(this,n,null,ot,Be,{})}}function rt(m){let n,o;return n=new pt({}),{c(){ie(n.$$.fragment)},l(p){ce(n.$$.fragment,p)},m(p,q){ue(n,p,q),o=!0},p:et,i(p){o||(fe(n.$$.fragment,p),o=!0)},o(p){he(n.$$.fragment,p),o=!1},d(p){ke(n,p)}}}class ct extends ze{constructor(n){super(),Fe(this,n,null,rt,Be,{})}}export{ct as default};
