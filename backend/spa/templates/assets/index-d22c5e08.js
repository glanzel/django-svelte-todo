(function(){"use strict";var V=document.createElement("style");V.textContent=`:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.todo-item.svelte-9jlfy0{padding:15px;margin:5px 0;border-radius:0;background:#f7f7f7}div.checker.svelte-9jlfy0{display:inline-block;vertical-align:middle;width:19px;height:19px}.remove-todo-item.svelte-9jlfy0{background-color:red;display:block;width:10px;height:10px;float:right}.todo-list.svelte-dtqldy{margin:10px 0;min-width:500px;text-align:left}.form-control.svelte-qgi5fc{width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;color:#495057;border:1px solid #ced4da;border-radius:.25rem}.nav.svelte-qgi5fc{list-style:none;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0}.nav-link.svelte-qgi5fc{display:block;padding:.5rem 1rem;text-decoration:none}
`,document.head.appendChild(V);const Lt="";function x(){}function G(t){return t()}function Q(){return Object.create(null)}function v(t){t.forEach(G)}function R(t){return typeof t=="function"}function C(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function it(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function q(t,e,o){t.insertBefore(e,o||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function rt(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}function h(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function y(){return U(" ")}function w(t,e,o,i){return t.addEventListener(e,o,i),()=>t.removeEventListener(e,o,i)}function p(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function st(t){return Array.from(t.childNodes)}function lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function W(t,e){t.value=e??""}function ct(t,e,{bubbles:o=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,o,i,e),n}let O;function j(t){O=t}function X(){if(!O)throw new Error("Function called outside component initialization");return O}function at(t){X().$$.on_mount.push(t)}function ft(){const t=X();return(e,o,{cancelable:i=!1}={})=>{const n=t.$$.callbacks[e];if(n){const c=ct(e,o,{cancelable:i});return n.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function dt(t,e){const o=t.$$.callbacks[e.type];o&&o.slice().forEach(i=>i.call(this,e))}const T=[],Y=[],A=[],Z=[],ut=Promise.resolve();let B=!1;function pt(){B||(B=!0,ut.then(tt))}function F(t){A.push(t)}const I=new Set;let S=0;function tt(){const t=O;do{for(;S<T.length;){const e=T[S];S++,j(e),ht(e.$$)}for(j(null),T.length=0,S=0;Y.length;)Y.pop()();for(let e=0;e<A.length;e+=1){const o=A[e];I.has(o)||(I.add(o),o())}A.length=0}while(T.length);for(;Z.length;)Z.pop()();B=!1,I.clear(),j(t)}function ht(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const P=new Set;let $;function mt(){$={r:0,c:[],p:$}}function gt(){$.r||v($.c),$=$.p}function b(t,e){t&&t.i&&(P.delete(t),t.i(e))}function L(t,e,o,i){if(t&&t.o){if(P.has(t))return;P.add(t),$.c.push(()=>{P.delete(t),i&&(o&&t.d(1),i())}),t.o(e)}else i&&i()}function D(t){t&&t.c()}function z(t,e,o,i){const{fragment:n,after_update:c}=t.$$;n&&n.m(e,o),i||F(()=>{const r=t.$$.on_mount.map(G).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),c.forEach(F)}function M(t,e){const o=t.$$;o.fragment!==null&&(v(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(T.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,o,i,n,c,r,a=[-1]){const s=O;j(t);const l=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:n,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Q(),dirty:a,skip_bound:!1,root:e.target||s.$$.root};r&&r(l.root);let m=!1;if(l.ctx=o?o(t,e.props||{},(d,f,..._)=>{const g=_.length?_[0]:f;return l.ctx&&n(l.ctx[d],l.ctx[d]=g)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](g),m&&_t(t,d)),f}):[],l.update(),m=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const d=st(e.target);l.fragment&&l.fragment.l(d),d.forEach(E)}else l.fragment&&l.fragment.c();e.intro&&b(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),tt()}j(s)}class J{$destroy(){M(this,1),this.$destroy=x}$on(e,o){if(!R(o))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Nt="";function vt(t){let e,o,i,n,c,r,a,s,l,m,d=t[0].name+"",f,_,g,K,ot;return{c(){e=h("div"),o=h("div"),i=h("span"),n=h("form"),c=h("input"),r=y(),a=h("input"),l=y(),m=h("span"),f=U(d),_=y(),g=h("a"),g.innerHTML='<i class="icon-close"></i>',p(c,"type","checkbox"),p(a,"type","hidden"),p(a,"name","id"),a.value=s=t[0].id,p(i,"class",""),p(o,"class","checker svelte-9jlfy0"),p(g,"href","javascript:void(0);"),p(g,"class","float-right remove-todo-item svelte-9jlfy0"),p(e,"class","todo-item svelte-9jlfy0")},m(k,N){q(k,e,N),u(e,o),u(o,i),u(i,n),u(n,c),c.checked=t[0].status,u(n,r),u(n,a),u(e,l),u(e,m),u(m,f),u(e,_),u(e,g),K||(ot=[w(c,"change",t[3]),w(c,"change",t[4]),w(n,"submit",t[5]),w(g,"click",t[6])],K=!0)},p(k,[N]){N&1&&(c.checked=k[0].status),N&1&&s!==(s=k[0].id)&&(a.value=s),N&1&&d!==(d=k[0].name+"")&&lt(f,d)},i:x,o:x,d(k){k&&E(e),K=!1,v(ot)}}}function yt(t,e,o){const i=ft();let{todo:n}=e;n.status;let c=async d=>{await fetch(location.origin+"/api/todos/"+d,{method:"DELETE"}).then(f=>f.text()).then(f=>console.log(f)),i("reload",{todos:"reload"})},r=async d=>{console.log(JSON.stringify(n.status)),await fetch(location.origin+"/api/todos/"+d+"/",{method:"PATCH",body:JSON.stringify({status:n.status,id:d}),headers:{"Content-Type":"application/json"}}).then(f=>f.text()).then(f=>console.log(f)),i("reload",{todos:"reload"}),console.log(JSON.stringify(n.status))};function a(){n.status=this.checked,o(0,n)}const s=()=>r(n.id),l=()=>r(n.id),m=()=>c(n.id);return t.$$set=d=>{"todo"in d&&o(0,n=d.todo)},[n,c,r,a,s,l,m]}class $t extends J{constructor(e){super(),H(this,e,yt,vt,C,{todo:0})}}const Ct="";function et(t,e,o){const i=t.slice();return i[2]=e[o],i}function nt(t){let e,o;return e=new $t({props:{todo:t[2]}}),e.$on("reload",t[1]),{c(){D(e.$$.fragment)},m(i,n){z(e,i,n),o=!0},p(i,n){const c={};n&1&&(c.todo=i[2]),e.$set(c)},i(i){o||(b(e.$$.fragment,i),o=!0)},o(i){L(e.$$.fragment,i),o=!1},d(i){M(e,i)}}}function bt(t){let e,o,i=t[0],n=[];for(let r=0;r<i.length;r+=1)n[r]=nt(et(t,i,r));const c=r=>L(n[r],1,1,()=>{n[r]=null});return{c(){e=h("div");for(let r=0;r<n.length;r+=1)n[r].c();p(e,"class","todo-list svelte-dtqldy"),p(e,"id","todo-list")},m(r,a){q(r,e,a);for(let s=0;s<n.length;s+=1)n[s].m(e,null);o=!0},p(r,[a]){if(a&1){i=r[0];let s;for(s=0;s<i.length;s+=1){const l=et(r,i,s);n[s]?(n[s].p(l,a),b(n[s],1)):(n[s]=nt(l),n[s].c(),b(n[s],1),n[s].m(e,null))}for(mt(),s=i.length;s<n.length;s+=1)c(s);gt()}},i(r){if(!o){for(let a=0;a<i.length;a+=1)b(n[a]);o=!0}},o(r){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)L(n[a]);o=!1},d(r){r&&E(e),rt(n,r)}}}function kt(t,e,o){let{todos:i=[]}=e;function n(c){dt.call(this,t,c)}return t.$$set=c=>{"todos"in c&&o(0,i=c.todos)},[i,n]}class xt extends J{constructor(e){super(),H(this,e,kt,bt,C,{todos:0})}}const qt="";function wt(t){let e,o,i,n,c,r,a,s,l,m,d;return s=new xt({props:{todos:t[1]}}),s.$on("reload",t[3]),{c(){e=h("div"),o=h("div"),i=h("form"),n=h("input"),c=y(),r=h("ul"),r.innerHTML=`<li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link svelte-qgi5fc">All</a></li> 
            <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link svelte-qgi5fc">Active</a></li> 
            <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link svelte-qgi5fc">Completed</a></li>`,a=y(),D(s.$$.fragment),p(n,"name","name"),p(n,"class","form-control add-task svelte-qgi5fc"),p(n,"placeholder","New Task..."),p(i,"action","javascript:void(0);"),p(r,"class","nav nav-pills todo-nav svelte-qgi5fc"),p(o,"class","card-body"),p(e,"class","container")},m(f,_){q(f,e,_),u(e,o),u(o,i),u(i,n),W(n,t[0]),u(o,c),u(o,r),u(o,a),z(s,o,null),l=!0,m||(d=[w(n,"input",t[4]),w(i,"submit",t[2])],m=!0)},p(f,[_]){_&1&&n.value!==f[0]&&W(n,f[0]);const g={};_&2&&(g.todos=f[1]),s.$set(g)},i(f){l||(b(s.$$.fragment,f),l=!0)},o(f){L(s.$$.fragment,f),l=!1},d(f){f&&E(e),M(s),m=!1,v(d)}}}function Et(t,e,o){let i=location.origin,n,c=[];async function r(){const m=await(await fetch(i+"/api/todos/?format=json",{method:"POST",body:JSON.stringify({name:n}),headers:{"Content-Type":"application/json"}})).json();JSON.stringify(m),a()}let a=async()=>{await fetch(i+"/api/todos/?format=json").then(l=>l.json()).then(l=>{o(1,c=l)})};at(a);function s(){n=this.value,o(0,n)}return[n,c,r,a,s]}class Ot extends J{constructor(e){super(),H(this,e,Et,wt,C,{})}}function jt(t){let e,o,i,n,c,r,a,s;return a=new Ot({}),{c(){e=h("main"),o=h("h4"),o.textContent="Vite und Svelte",i=y(),n=h("div"),n.innerHTML='<img src="/assets/vite.svg"/>',c=y(),r=h("div"),D(a.$$.fragment),p(n,"class","card"),p(r,"class","card")},m(l,m){q(l,e,m),u(e,o),u(e,i),u(e,n),u(e,c),u(e,r),z(a,r,null),s=!0},p:x,i(l){s||(b(a.$$.fragment,l),s=!0)},o(l){L(a.$$.fragment,l),s=!1},d(l){l&&E(e),M(a)}}}class Tt extends J{constructor(e){super(),H(this,e,null,jt,C,{})}}new Tt({target:document.getElementById("app")})})();
//# sourceMappingURL=index-d22c5e08.js.map
