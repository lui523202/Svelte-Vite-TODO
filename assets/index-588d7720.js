(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function v(){}function he(e){return e()}function oe(){return Object.create(null)}function G(e){e.forEach(he)}function _e(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function we(e,...t){if(e==null)return v;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function xe(e,t,n){e.$$.on_destroy.push(we(t,n))}function d(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function I(){return H(" ")}function $e(){return H("")}function U(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function ve(e){return function(t){return t.preventDefault(),e.call(this,t)}}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return Array.from(e.childNodes)}function ne(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function F(e,t){e.value=t??""}function De(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}let R;function P(e){R=e}function Ie(){if(!R)throw new Error("Function called outside component initialization");return R}function be(){const e=Ie();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const l=De(t,n,{cancelable:r});return i.slice().forEach(s=>{s.call(e,l)}),!l.defaultPrevented}return!0}}function se(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const M=[],ue=[],K=[],ce=[],Ee=Promise.resolve();let ie=!1;function Oe(){ie||(ie=!0,Ee.then(ge))}function re(e){K.push(e)}const te=new Set;let B=0;function ge(){if(B!==0)return;const e=R;do{try{for(;B<M.length;){const t=M[B];B++,P(t),Ce(t.$$)}}catch(t){throw M.length=0,B=0,t}for(P(null),M.length=0,B=0;ue.length;)ue.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];te.has(n)||(te.add(n),n())}K.length=0}while(M.length);for(;ce.length;)ce.pop()();ie=!1,te.clear(),P(e)}function Ce(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const J=new Set;let j;function Se(){j={r:0,c:[],p:j}}function Te(){j.r||G(j.c),j=j.p}function N(e,t){e&&e.i&&(J.delete(e),e.i(t))}function V(e,t,n,r){if(e&&e.o){if(J.has(e))return;J.add(e),j.c.push(()=>{J.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Ue(e,t){V(e,1,1,()=>{t.delete(e.key)})}function je(e,t,n,r,i,l,s,o,c,u,f,g){let _=e.length,a=l.length,y=_;const k={};for(;y--;)k[e[y].key]=y;const D=[],E=new Map,b=new Map;for(y=a;y--;){const x=g(i,l,y),O=n(x);let C=s.get(O);C?r&&C.p(x,t):(C=u(O,x),C.c()),E.set(O,D[y]=C),O in k&&b.set(O,Math.abs(y-k[O]))}const m=new Set,w=new Set;function S(x){N(x,1),x.m(o,f),s.set(x.key,x),f=x.first,a--}for(;_&&a;){const x=D[a-1],O=e[_-1],C=x.key,z=O.key;x===O?(f=x.first,_--,a--):E.has(z)?!s.has(C)||m.has(C)?S(x):w.has(z)?_--:b.get(C)>b.get(z)?(w.add(C),S(x)):(m.add(z),_--):(c(O,s),_--)}for(;_--;){const x=e[_];E.has(x.key)||c(x,s)}for(;a;)S(D[a-1]);return D}function le(e){e&&e.c()}function W(e,t,n,r){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),r||re(()=>{const s=e.$$.on_mount.map(he).filter(_e);e.$$.on_destroy?e.$$.on_destroy.push(...s):G(s),e.$$.on_mount=[]}),l.forEach(re)}function Y(e,t){const n=e.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(M.push(e),Oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,r,i,l,s,o=[-1]){const c=R;P(e);const u=e.$$={fragment:null,ctx:[],props:l,update:v,not_equal:i,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:oe(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(e,t.props||{},(g,_,...a)=>{const y=a.length?a[0]:_;return u.ctx&&i(u.ctx[g],u.ctx[g]=y)&&(!u.skip_bound&&u.bound[g]&&u.bound[g](y),f&&Ae(e,g)),_}):[],u.update(),f=!0,G(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const g=ke(t.target);u.fragment&&u.fragment.l(g),g.forEach(T)}else u.fragment&&u.fragment.c();t.intro&&N(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),ge()}P(c)}class ee{$destroy(){Y(this,1),this.$destroy=v}$on(t,n){if(!_e(n))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const L=[];function Be(e,t=v){let n;const r=new Set;function i(o){if(q(e,o)&&(e=o,n)){const c=!L.length;for(const u of r)u[1](),L.push(u,e);if(c){for(let u=0;u<L.length;u+=2)L[u][0](L[u+1]);L.length=0}}}function l(o){i(o(e))}function s(o,c=v){const u=[o,c];return r.add(u),r.size===1&&(n=t(i)||v),o(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:l,subscribe:s}}const Q=Be([{id:"1",title:"TODO 1",body:"This is a test",isDone:!1},{id:"2",title:"TODO 2",body:"This is a test",isDone:!0}]);function fe(e){let t,n,r;return{c(){t=h("button"),t.textContent="✓"},m(i,l){A(i,t,l),n||(r=U(t,"click",e[4]),n=!0)},p:v,d(i){i&&T(t),n=!1,r()}}}function Le(e){let t,n,r,i=e[0].title+"",l,s,o,c,u,f,g,_,a,y=e[0].body+"",k,D,E,b=!e[0].isDone&&fe(e);return{c(){t=h("div"),n=h("div"),r=h("span"),l=H(i),s=I(),o=h("div"),b&&b.c(),c=I(),u=h("button"),u.textContent="X",g=I(),_=h("div"),a=h("span"),k=H(y),p(r,"class","text-xl ml-4 font-semibold"),p(o,"class","flex flex-row justify-around w-[70px] text-xl"),p(n,"class",f="flex flex-row items-baseline justify-between w-full border-2 rounded p-2 text-white"+e[1]),p(a,"class","text-xl"),p(_,"class","mt-4"),p(t,"class","w-[300px] border-black border-4 p-2 rounded-lg flex flex-col items-start mb-3")},m(m,w){A(m,t,w),d(t,n),d(n,r),d(r,l),d(n,s),d(n,o),b&&b.m(o,null),d(o,c),d(o,u),d(t,g),d(t,_),d(_,a),d(a,k),D||(E=U(u,"click",e[5]),D=!0)},p(m,[w]){w&1&&i!==(i=m[0].title+"")&&ne(l,i),m[0].isDone?b&&(b.d(1),b=null):b?b.p(m,w):(b=fe(m),b.c(),b.m(o,c)),w&2&&f!==(f="flex flex-row items-baseline justify-between w-full border-2 rounded p-2 text-white"+m[1])&&p(n,"class",f),w&1&&y!==(y=m[0].body+"")&&ne(k,y)},i:v,o:v,d(m){m&&T(t),b&&b.d(),D=!1,E()}}}function Me(e,t,n){let{item:r}=t,{itemBG:i}=t;const l=be();function s(f){l("mark-as-done",f)}function o(f){l("delete-item",f)}const c=()=>s(r.id),u=()=>o(r.id);return e.$$set=f=>{"item"in f&&n(0,r=f.item),"itemBG"in f&&n(1,i=f.itemBG)},[r,i,s,o,c,u]}class Ne extends ee{constructor(t){super(),Z(this,t,Me,Le,q,{item:0,itemBG:1})}}function de(e,t,n){const r=e.slice();return r[3]=t[n],r}function ae(e,t){let n,r,i;return r=new Ne({props:{item:t[3],itemBG:t[3].isDone?" bg-green-500":" bg-red-500"}}),r.$on("mark-as-done",t[1]),r.$on("delete-item",t[2]),{key:e,first:null,c(){n=$e(),le(r.$$.fragment),this.first=n},m(l,s){A(l,n,s),W(r,l,s),i=!0},p(l,s){t=l;const o={};s&1&&(o.item=t[3]),s&1&&(o.itemBG=t[3].isDone?" bg-green-500":" bg-red-500"),r.$set(o)},i(l){i||(N(r.$$.fragment,l),i=!0)},o(l){V(r.$$.fragment,l),i=!1},d(l){l&&T(n),Y(r,l)}}}function Ge(e){let t,n=[],r=new Map,i,l=e[0];const s=o=>o[3].id;for(let o=0;o<l.length;o+=1){let c=de(e,l,o),u=s(c);r.set(u,n[o]=ae(u,c))}return{c(){t=h("div");for(let o=0;o<n.length;o+=1)n[o].c();p(t,"class","mt-5")},m(o,c){A(o,t,c);for(let u=0;u<n.length;u+=1)n[u].m(t,null);i=!0},p(o,[c]){c&1&&(l=o[0],Se(),n=je(n,c,s,1,o,l,r,t,Ue,ae,null,de),Te())},i(o){if(!i){for(let c=0;c<l.length;c+=1)N(n[c]);i=!0}},o(o){for(let c=0;c<n.length;c+=1)V(n[c]);i=!1},d(o){o&&T(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Pe(e,t,n){let r;xe(e,Q,s=>n(0,r=s));function i(s){se.call(this,e,s)}function l(s){se.call(this,e,s)}return[r,i,l]}class He extends ee{constructor(t){super(),Z(this,t,Pe,Ge,q,{})}}let X;const Re=new Uint8Array(16);function Ve(){if(!X&&(X=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!X))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return X(Re)}const $=[];for(let e=0;e<256;++e)$.push((e+256).toString(16).slice(1));function qe(e,t=0){return($[e[t+0]]+$[e[t+1]]+$[e[t+2]]+$[e[t+3]]+"-"+$[e[t+4]]+$[e[t+5]]+"-"+$[e[t+6]]+$[e[t+7]]+"-"+$[e[t+8]]+$[e[t+9]]+"-"+$[e[t+10]]+$[e[t+11]]+$[e[t+12]]+$[e[t+13]]+$[e[t+14]]+$[e[t+15]]).toLowerCase()}const ze=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),me={randomUUID:ze};function Fe(e,t,n){if(me.randomUUID&&!t&&!e)return me.randomUUID();e=e||{};const r=e.random||(e.rng||Ve)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return qe(r)}function pe(e){let t,n;return{c(){t=h("span"),n=H(e[2])},m(r,i){A(r,t,i),d(t,n)},p(r,i){i&4&&ne(n,r[2])},d(r){r&&T(t)}}}function Xe(e){let t,n,r,i,l,s,o,c,u,f,g,_,a,y,k,D,E,b,m=e[2]&&pe(e);return{c(){t=h("div"),n=h("span"),n.textContent="Add new TODO",r=I(),i=h("form"),l=h("div"),s=h("label"),s.textContent="Input title:",o=I(),c=h("input"),u=I(),f=h("div"),g=h("label"),g.textContent="Input details:",_=I(),a=h("textarea"),y=I(),k=h("button"),k.textContent="Submit",D=I(),m&&m.c(),p(n,"class","text-3xl font-semibold mb-4"),p(s,"for","title"),p(c,"type","text"),p(c,"id","title"),p(c,"class","border-2 border-black rounded w-[280px]"),p(l,"class","mb-3 flex flex-row justify-between w-[400px]"),p(g,"for","body"),p(a,"id","body"),p(a,"class","border-2 border-black rounded w-[280px]"),p(f,"class","flex flex-row items-center justify-between w-[400px]"),p(k,"class","w-[150px] mt-3 bg-green-500 p-2 rounded text-white"),p(i,"class","text-xl flex flex-col items-center"),p(t,"class","flex flex-col items-center w-[800px] border-4 border-black rounded-lg p-5 mt-5")},m(w,S){A(w,t,S),d(t,n),d(t,r),d(t,i),d(i,l),d(l,s),d(l,o),d(l,c),F(c,e[0]),d(i,u),d(i,f),d(f,g),d(f,_),d(f,a),F(a,e[1]),d(i,y),d(i,k),d(i,D),m&&m.m(i,null),E||(b=[U(c,"input",e[5]),U(c,"input",e[6]),U(a,"input",e[7]),U(a,"input",e[8]),U(i,"submit",ve(e[3]))],E=!0)},p(w,[S]){S&1&&c.value!==w[0]&&F(c,w[0]),S&2&&F(a,w[1]),w[2]?m?m.p(w,S):(m=pe(w),m.c(),m.m(i,null)):m&&(m.d(1),m=null)},i:v,o:v,d(w){w&&T(t),m&&m.d(),E=!1,G(b)}}}function Ke(e,t,n){let r,i,l;const s=be();function o(){if(!r||!i){n(2,l="Please fill all fields");return}const a={id:Fe(),title:r,body:i,isDone:!1};s("add-todo",a),n(0,r=""),n(1,i="")}function c(a){if(!(a==1?r:i)){n(2,l="Please fill this field");return}n(2,l="")}function u(){r=this.value,n(0,r)}const f=()=>c(1);function g(){i=this.value,n(1,i)}return[r,i,l,o,c,u,f,g,()=>c(2)]}class Je extends ee{constructor(t){super(),Z(this,t,Ke,Xe,q,{})}}function Qe(e){let t,n,r,i,l,s,o,c;return l=new He({}),l.$on("mark-as-done",e[0]),l.$on("delete-item",e[1]),o=new Je({}),o.$on("add-todo",e[2]),{c(){t=h("main"),n=h("div"),r=h("div"),r.innerHTML='<span class="text-4xl">Svelte TODO App</span>',i=I(),le(l.$$.fragment),s=I(),le(o.$$.fragment),p(n,"class","flex flex-col items-center border-4 border-black w-[800px] p-5 rounded-lg mt-10"),p(t,"class","flex flex-col items-center")},m(u,f){A(u,t,f),d(t,n),d(n,r),d(n,i),W(l,n,null),d(t,s),W(o,t,null),c=!0},p:v,i(u){c||(N(l.$$.fragment,u),N(o.$$.fragment,u),c=!0)},o(u){V(l.$$.fragment,u),V(o.$$.fragment,u),c=!1},d(u){u&&T(t),Y(l),Y(o)}}}function We(e){function t(i){const l=i.detail;Q.update(s=>s=s.map(o=>o.id==l?{...o,isDone:!o.isDone}:o))}function n(i){const l=i.detail;Q.update(s=>s=s.filter(o=>o.id!=l))}function r(i){const l=i.detail;Q.update(s=>s=[...s,l])}return[t,n,r]}class Ye extends ee{constructor(t){super(),Z(this,t,We,Qe,q,{})}}new Ye({target:document.getElementById("app")});