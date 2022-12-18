(function(){"use strict";var V=document.createElement("style");V.textContent=`:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.todo-item.svelte-9jlfy0{padding:15px;margin:5px 0;border-radius:0;background:#f7f7f7}div.checker.svelte-9jlfy0{display:inline-block;vertical-align:middle;width:19px;height:19px}.remove-todo-item.svelte-9jlfy0{background-color:red;display:block;width:10px;height:10px;float:right}.todo-list.svelte-dtqldy{margin:10px 0;min-width:500px;text-align:left}.form-control.svelte-qgi5fc{width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;color:#495057;border:1px solid #ced4da;border-radius:.25rem}.nav.svelte-qgi5fc{list-style:none;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0}.nav-link.svelte-qgi5fc{display:block;padding:.5rem 1rem;text-decoration:none}
`,document.head.appendChild(V);const Lt="";function x(){}function G(t){return t()}function Q(){return Object.create(null)}function v(t){t.forEach(G)}function R(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function it(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function q(t,e,o){t.insertBefore(e,o||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function rt(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}function p(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function y(){return U(" ")}function w(t,e,o,i){return t.addEventListener(e,o,i),()=>t.removeEventListener(e,o,i)}function u(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function lt(t){return Array.from(t.childNodes)}function st(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function W(t,e){t.value=e??""}function ct(t,e,{bubbles:o=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,o,i,e),n}let j;function O(t){j=t}function X(){if(!j)throw new Error("Function called outside component initialization");return j}function at(t){X().$$.on_mount.push(t)}function ft(){const t=X();return(e,o,{cancelable:i=!1}={})=>{const n=t.$$.callbacks[e];if(n){const a=ct(e,o,{cancelable:i});return n.slice().forEach(r=>{r.call(t,a)}),!a.defaultPrevented}return!0}}function dt(t,e){const o=t.$$.callbacks[e.type];o&&o.slice().forEach(i=>i.call(this,e))}const T=[],Y=[],A=[],Z=[],ut=Promise.resolve();let B=!1;function pt(){B||(B=!0,ut.then(tt))}function F(t){A.push(t)}const I=new Set;let S=0;function tt(){const t=j;do{for(;S<T.length;){const e=T[S];S++,O(e),ht(e.$$)}for(O(null),T.length=0,S=0;Y.length;)Y.pop()();for(let e=0;e<A.length;e+=1){const o=A[e];I.has(o)||(I.add(o),o())}A.length=0}while(T.length);for(;Z.length;)Z.pop()();B=!1,I.clear(),O(t)}function ht(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const P=new Set;let $;function mt(){$={r:0,c:[],p:$}}function gt(){$.r||v($.c),$=$.p}function b(t,e){t&&t.i&&(P.delete(t),t.i(e))}function L(t,e,o,i){if(t&&t.o){if(P.has(t))return;P.add(t),$.c.push(()=>{P.delete(t),i&&(o&&t.d(1),i())}),t.o(e)}else i&&i()}function D(t){t&&t.c()}function z(t,e,o,i){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,o),i||F(()=>{const r=t.$$.on_mount.map(G).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),a.forEach(F)}function M(t,e){const o=t.$$;o.fragment!==null&&(v(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(T.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,o,i,n,a,r,c=[-1]){const l=j;O(t);const s=t.$$={fragment:null,ctx:[],props:a,update:x,not_equal:n,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Q(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(s.root);let g=!1;if(s.ctx=o?o(t,e.props||{},(h,f,...m)=>{const _=m.length?m[0]:f;return s.ctx&&n(s.ctx[h],s.ctx[h]=_)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](_),g&&_t(t,h)),f}):[],s.update(),g=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const h=lt(e.target);s.fragment&&s.fragment.l(h),h.forEach(E)}else s.fragment&&s.fragment.c();e.intro&&b(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),tt()}O(l)}class J{$destroy(){M(this,1),this.$destroy=x}$on(e,o){if(!R(o))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ct="";function vt(t){let e,o,i,n,a,r,c,l,s,g,h=t[0].name+"",f,m,_,K,ot;return{c(){e=p("div"),o=p("div"),i=p("span"),n=p("form"),a=p("input"),r=y(),c=p("input"),s=y(),g=p("span"),f=U(h),m=y(),_=p("a"),_.innerHTML='<i class="icon-close"></i>',u(a,"type","checkbox"),u(c,"type","hidden"),u(c,"name","id"),c.value=l=t[0].id,u(i,"class",""),u(o,"class","checker svelte-9jlfy0"),u(_,"href","javascript:void(0);"),u(_,"class","float-right remove-todo-item svelte-9jlfy0"),u(e,"class","todo-item svelte-9jlfy0")},m(k,C){q(k,e,C),d(e,o),d(o,i),d(i,n),d(n,a),a.checked=t[0].status,d(n,r),d(n,c),d(e,s),d(e,g),d(g,f),d(e,m),d(e,_),K||(ot=[w(a,"change",t[3]),w(a,"click",t[4]),w(n,"submit",t[5]),w(_,"click",t[6])],K=!0)},p(k,[C]){C&1&&(a.checked=k[0].status),C&1&&l!==(l=k[0].id)&&(c.value=l),C&1&&h!==(h=k[0].name+"")&&st(f,h)},i:x,o:x,d(k){k&&E(e),K=!1,v(ot)}}}function yt(t,e,o){const i=ft();let{todo:n}=e,a=n.status,r=async f=>{await fetch(location.origin+"/api/todos/"+f,{method:"DELETE"}).then(m=>m.text()).then(m=>console.log(m)),i("reload",{todos:"reload"})},c=async f=>{await fetch(location.origin+"/api/todos/"+f+"/",{method:"PATCH",body:JSON.stringify({status:a,id:f}),headers:{"Content-Type":"application/json"}}).then(m=>m.text()).then(m=>console.log(m)),i("reload",{todos:"reload"}),console.log(JSON.stringify(n.status))};function l(){n.status=this.checked,o(0,n)}const s=()=>c(n.id),g=()=>c(n.id),h=()=>r(n.id);return t.$$set=f=>{"todo"in f&&o(0,n=f.todo)},[n,r,c,l,s,g,h]}class $t extends J{constructor(e){super(),H(this,e,yt,vt,N,{todo:0})}}const Nt="";function et(t,e,o){const i=t.slice();return i[2]=e[o],i}function nt(t){let e,o;return e=new $t({props:{todo:t[2]}}),e.$on("reload",t[1]),{c(){D(e.$$.fragment)},m(i,n){z(e,i,n),o=!0},p(i,n){const a={};n&1&&(a.todo=i[2]),e.$set(a)},i(i){o||(b(e.$$.fragment,i),o=!0)},o(i){L(e.$$.fragment,i),o=!1},d(i){M(e,i)}}}function bt(t){let e,o,i=t[0],n=[];for(let r=0;r<i.length;r+=1)n[r]=nt(et(t,i,r));const a=r=>L(n[r],1,1,()=>{n[r]=null});return{c(){e=p("div");for(let r=0;r<n.length;r+=1)n[r].c();u(e,"class","todo-list svelte-dtqldy"),u(e,"id","todo-list")},m(r,c){q(r,e,c);for(let l=0;l<n.length;l+=1)n[l].m(e,null);o=!0},p(r,[c]){if(c&1){i=r[0];let l;for(l=0;l<i.length;l+=1){const s=et(r,i,l);n[l]?(n[l].p(s,c),b(n[l],1)):(n[l]=nt(s),n[l].c(),b(n[l],1),n[l].m(e,null))}for(mt(),l=i.length;l<n.length;l+=1)a(l);gt()}},i(r){if(!o){for(let c=0;c<i.length;c+=1)b(n[c]);o=!0}},o(r){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)L(n[c]);o=!1},d(r){r&&E(e),rt(n,r)}}}function kt(t,e,o){let{todos:i=[]}=e;function n(a){dt.call(this,t,a)}return t.$$set=a=>{"todos"in a&&o(0,i=a.todos)},[i,n]}class xt extends J{constructor(e){super(),H(this,e,kt,bt,N,{todos:0})}}const qt="";function wt(t){let e,o,i,n,a,r,c,l,s,g,h;return l=new xt({props:{todos:t[1]}}),l.$on("reload",t[3]),{c(){e=p("div"),o=p("div"),i=p("form"),n=p("input"),a=y(),r=p("ul"),r.innerHTML=`<li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link svelte-qgi5fc">All</a></li> 
            <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link svelte-qgi5fc">Active</a></li> 
            <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link svelte-qgi5fc">Completed</a></li>`,c=y(),D(l.$$.fragment),u(n,"name","name"),u(n,"class","form-control add-task svelte-qgi5fc"),u(n,"placeholder","New Task..."),u(i,"action","javascript:void(0);"),u(r,"class","nav nav-pills todo-nav svelte-qgi5fc"),u(o,"class","card-body"),u(e,"class","container")},m(f,m){q(f,e,m),d(e,o),d(o,i),d(i,n),W(n,t[0]),d(o,a),d(o,r),d(o,c),z(l,o,null),s=!0,g||(h=[w(n,"input",t[4]),w(i,"submit",t[2])],g=!0)},p(f,[m]){m&1&&n.value!==f[0]&&W(n,f[0]);const _={};m&2&&(_.todos=f[1]),l.$set(_)},i(f){s||(b(l.$$.fragment,f),s=!0)},o(f){L(l.$$.fragment,f),s=!1},d(f){f&&E(e),M(l),g=!1,v(h)}}}function Et(t,e,o){let i=location.origin,n,a=[];async function r(){const g=await(await fetch(i+"/api/todos/?format=json",{method:"POST",body:JSON.stringify({name:n}),headers:{"Content-Type":"application/json"}})).json();JSON.stringify(g),c()}let c=async()=>{await fetch(i+"/api/todos/?format=json").then(s=>s.json()).then(s=>{o(1,a=s)})};at(c);function l(){n=this.value,o(0,n)}return[n,a,r,c,l]}class jt extends J{constructor(e){super(),H(this,e,Et,wt,N,{})}}function Ot(t){let e,o,i,n,a,r,c,l;return c=new jt({}),{c(){e=p("main"),o=p("h4"),o.textContent="Vite und Svelte",i=y(),n=p("div"),n.innerHTML='<img src="/assets/vite.svg"/>',a=y(),r=p("div"),D(c.$$.fragment),u(n,"class","card"),u(r,"class","card")},m(s,g){q(s,e,g),d(e,o),d(e,i),d(e,n),d(e,a),d(e,r),z(c,r,null),l=!0},p:x,i(s){l||(b(c.$$.fragment,s),l=!0)},o(s){L(c.$$.fragment,s),l=!1},d(s){s&&E(e),M(c)}}}class Tt extends J{constructor(e){super(),H(this,e,null,Ot,N,{})}}new Tt({target:document.getElementById("app")})})();
//# sourceMappingURL=index-4a8f62ec.js.map
