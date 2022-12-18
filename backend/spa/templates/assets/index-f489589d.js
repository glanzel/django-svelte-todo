(function(){"use strict";var K=document.createElement("style");K.textContent=`:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.todo-item.svelte-9jlfy0{padding:15px;margin:5px 0;border-radius:0;background:#f7f7f7}div.checker.svelte-9jlfy0{display:inline-block;vertical-align:middle;width:19px;height:19px}.remove-todo-item.svelte-9jlfy0{background-color:red;display:block;width:10px;height:10px;float:right}.todo-list.svelte-dtqldy{margin:10px 0;min-width:500px;text-align:left}.form-control.svelte-qgi5fc{width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;color:#495057;border:1px solid #ced4da;border-radius:.25rem}.nav.svelte-qgi5fc{list-style:none;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0}.nav-link.svelte-qgi5fc{display:block;padding:.5rem 1rem;text-decoration:none}
`,document.head.appendChild(K);const Tt="";function k(){}function V(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(V)}function Q(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function q(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function it(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function y(){return R(" ")}function x(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function st(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function U(t,e){t.value=e??""}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}let O;function j(t){O=t}function W(){if(!O)throw new Error("Function called outside component initialization");return O}function ct(t){W().$$.on_mount.push(t)}function at(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const o=t.$$.callbacks[e];if(o){const c=lt(e,n,{cancelable:i});return o.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ft(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],X=[],C=[],Y=[],dt=Promise.resolve();let B=!1;function ut(){B||(B=!0,dt.then(Z))}function F(t){C.push(t)}const I=new Set;let S=0;function Z(){const t=O;do{for(;S<T.length;){const e=T[S];S++,j(e),pt(e.$$)}for(j(null),T.length=0,S=0;X.length;)X.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];I.has(n)||(I.add(n),n())}C.length=0}while(T.length);for(;Y.length;)Y.pop()();B=!1,I.clear(),j(t)}function pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const A=new Set;let $;function ht(){$={r:0,c:[],p:$}}function mt(){$.r||v($.c),$=$.p}function b(t,e){t&&t.i&&(A.delete(t),t.i(e))}function L(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),$.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function D(t){t&&t.c()}function P(t,e,n,i){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(V).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),c.forEach(F)}function z(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(T.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,n,i,o,c,r,a=[-1]){const s=O;j(t);const l=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:o,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:G(),dirty:a,skip_bound:!1,root:e.target||s.$$.root};r&&r(l.root);let m=!1;if(l.ctx=n?n(t,e.props||{},(u,f,...g)=>{const _=g.length?g[0]:f;return l.ctx&&o(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),m&&gt(t,u)),f}):[],l.update(),m=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const u=rt(e.target);l.fragment&&l.fragment.l(u),u.forEach(E)}else l.fragment&&l.fragment.c();e.intro&&b(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),Z()}j(s)}class H{$destroy(){z(this,1),this.$destroy=k}$on(e,n){if(!Q(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Lt="";function _t(t){let e,n,i,o,c,r,a,s,l,m=t[0].name+"",u,f,g,_,nt;return{c(){e=h("div"),n=h("div"),i=h("span"),o=h("form"),c=h("input"),r=y(),a=h("input"),s=y(),l=h("span"),u=R(m),f=y(),g=h("a"),g.innerHTML='<i class="icon-close"></i>',p(c,"type","checkbox"),p(a,"type","hidden"),p(a,"name","id"),a.value="",p(i,"class",""),p(n,"class","checker svelte-9jlfy0"),p(g,"href","javascript:void(0);"),p(g,"class","float-right remove-todo-item svelte-9jlfy0"),p(e,"class","todo-item svelte-9jlfy0")},m(w,J){q(w,e,J),d(e,n),d(n,i),d(i,o),d(o,c),c.checked=t[0].status,d(o,r),d(o,a),d(e,s),d(e,l),d(l,u),d(e,f),d(e,g),_||(nt=[x(c,"change",t[3]),x(c,"click",submit()),x(o,"submit",t[4]),x(g,"click",t[5])],_=!0)},p(w,[J]){J&1&&(c.checked=w[0].status),J&1&&m!==(m=w[0].name+"")&&st(u,m)},i:k,o:k,d(w){w&&E(e),_=!1,v(nt)}}}function vt(t,e,n){const i=at();let{todo:o}=e,c=o.status,r=async u=>{await fetch(location.origin+"/api/todos/"+u,{method:"DELETE"}).then(f=>f.text()).then(f=>console.log(f)),i("reload",{todos:"reload"})},a=async u=>{await fetch(location.origin+"/api/todos/"+u,{method:"POST",body:JSON.stringify({status:c}),headers:{"Content-Type":"application/json"}}).then(f=>f.text()).then(f=>console.log(f)),i("reload",{todos:"reload"}),console.log(JSON.stringify({status:c}))};function s(){o.status=this.checked,n(0,o)}const l=()=>a(o.id),m=()=>r(o.id);return t.$$set=u=>{"todo"in u&&n(0,o=u.todo)},[o,r,a,s,l,m]}class yt extends H{constructor(e){super(),M(this,e,vt,_t,N,{todo:0})}}const Nt="";function tt(t,e,n){const i=t.slice();return i[2]=e[n],i}function et(t){let e,n;return e=new yt({props:{todo:t[2]}}),e.$on("reload",t[1]),{c(){D(e.$$.fragment)},m(i,o){P(e,i,o),n=!0},p(i,o){const c={};o&1&&(c.todo=i[2]),e.$set(c)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){L(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function $t(t){let e,n,i=t[0],o=[];for(let r=0;r<i.length;r+=1)o[r]=et(tt(t,i,r));const c=r=>L(o[r],1,1,()=>{o[r]=null});return{c(){e=h("div");for(let r=0;r<o.length;r+=1)o[r].c();p(e,"class","todo-list svelte-dtqldy"),p(e,"id","todo-list")},m(r,a){q(r,e,a);for(let s=0;s<o.length;s+=1)o[s].m(e,null);n=!0},p(r,[a]){if(a&1){i=r[0];let s;for(s=0;s<i.length;s+=1){const l=tt(r,i,s);o[s]?(o[s].p(l,a),b(o[s],1)):(o[s]=et(l),o[s].c(),b(o[s],1),o[s].m(e,null))}for(ht(),s=i.length;s<o.length;s+=1)c(s);mt()}},i(r){if(!n){for(let a=0;a<i.length;a+=1)b(o[a]);n=!0}},o(r){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)L(o[a]);n=!1},d(r){r&&E(e),it(o,r)}}}function bt(t,e,n){let{todos:i=[]}=e;function o(c){ft.call(this,t,c)}return t.$$set=c=>{"todos"in c&&n(0,i=c.todos)},[i,o]}class kt extends H{constructor(e){super(),M(this,e,bt,$t,N,{todos:0})}}const qt="";function xt(t){let e,n,i,o,c,r,a,s,l,m,u;return s=new kt({props:{todos:t[1]}}),s.$on("reload",t[3]),{c(){e=h("div"),n=h("div"),i=h("form"),o=h("input"),c=y(),r=h("ul"),r.innerHTML=`<li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link svelte-qgi5fc">All</a></li> 
            <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link svelte-qgi5fc">Active</a></li> 
            <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link svelte-qgi5fc">Completed</a></li>`,a=y(),D(s.$$.fragment),p(o,"name","name"),p(o,"class","form-control add-task svelte-qgi5fc"),p(o,"placeholder","New Task..."),p(i,"action","javascript:void(0);"),p(r,"class","nav nav-pills todo-nav svelte-qgi5fc"),p(n,"class","card-body"),p(e,"class","container")},m(f,g){q(f,e,g),d(e,n),d(n,i),d(i,o),U(o,t[0]),d(n,c),d(n,r),d(n,a),P(s,n,null),l=!0,m||(u=[x(o,"input",t[4]),x(i,"submit",t[2])],m=!0)},p(f,[g]){g&1&&o.value!==f[0]&&U(o,f[0]);const _={};g&2&&(_.todos=f[1]),s.$set(_)},i(f){l||(b(s.$$.fragment,f),l=!0)},o(f){L(s.$$.fragment,f),l=!1},d(f){f&&E(e),z(s),m=!1,v(u)}}}function wt(t,e,n){let i=location.origin,o,c=[];async function r(){const m=await(await fetch(i+"/api/todos/?format=json",{method:"POST",body:JSON.stringify({name:o}),headers:{"Content-Type":"application/json"}})).json();JSON.stringify(m),a()}let a=async()=>{await fetch(i+"/api/todos/?format=json").then(l=>l.json()).then(l=>{n(1,c=l)})};ct(a);function s(){o=this.value,n(0,o)}return[o,c,r,a,s]}class Et extends H{constructor(e){super(),M(this,e,wt,xt,N,{})}}function Ot(t){let e,n,i,o,c,r,a,s;return a=new Et({}),{c(){e=h("main"),n=h("h4"),n.textContent="Vite und Svelte",i=y(),o=h("div"),o.innerHTML='<img src="/assets/vite.svg"/>',c=y(),r=h("div"),D(a.$$.fragment),p(o,"class","card"),p(r,"class","card")},m(l,m){q(l,e,m),d(e,n),d(e,i),d(e,o),d(e,c),d(e,r),P(a,r,null),s=!0},p:k,i(l){s||(b(a.$$.fragment,l),s=!0)},o(l){L(a.$$.fragment,l),s=!1},d(l){l&&E(e),z(a)}}}class jt extends H{constructor(e){super(),M(this,e,null,Ot,N,{})}}new jt({target:document.getElementById("app")})})();
//# sourceMappingURL=index-f489589d.js.map
