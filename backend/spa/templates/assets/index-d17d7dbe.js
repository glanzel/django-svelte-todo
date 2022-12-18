(function(){"use strict";var D=document.createElement("style");D.textContent=`:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.todo-item.svelte-9jlfy0{padding:15px;margin:5px 0;border-radius:0;background:#f7f7f7}div.checker.svelte-9jlfy0{display:inline-block;vertical-align:middle;width:19px;height:19px}.remove-todo-item.svelte-9jlfy0{background-color:red;display:block;width:10px;height:10px;float:right}.todo-list.svelte-dtqldy{margin:10px 0;min-width:500px;text-align:left}.form-control.svelte-qgi5fc{width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;color:#495057;border:1px solid #ced4da;border-radius:.25rem}.nav.svelte-qgi5fc{list-style:none;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0}.nav-link.svelte-qgi5fc{display:block;padding:.5rem 1rem;text-decoration:none}
`,document.head.appendChild(D);const Et="";function y(){}function J(t){return t()}function K(){return Object.create(null)}function $(t){t.forEach(J)}function V(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function b(){return G(" ")}function M(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function ot(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Q(t,e){t.value=e??""}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}let k;function w(t){k=t}function R(){if(!k)throw new Error("Function called outside component initialization");return k}function rt(t){R().$$.on_mount.push(t)}function lt(){const t=R();return(e,n,{cancelable:i=!1}={})=>{const o=t.$$.callbacks[e];if(o){const c=it(e,n,{cancelable:i});return o.slice().forEach(l=>{l.call(t,c)}),!c.defaultPrevented}return!0}}function st(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const E=[],U=[],q=[],W=[],ct=Promise.resolve();let H=!1;function at(){H||(H=!0,ct.then(X))}function B(t){q.push(t)}const F=new Set;let A=0;function X(){const t=k;do{for(;A<E.length;){const e=E[A];A++,w(e),ft(e.$$)}for(w(null),E.length=0,A=0;U.length;)U.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(E.length);for(;W.length;)W.pop()();H=!1,F.clear(),w(t)}function ft(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const C=new Set;let g;function dt(){g={r:0,c:[],p:g}}function ut(){g.r||$(g.c),g=g.p}function _(t,e){t&&t.i&&(C.delete(t),t.i(e))}function j(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function I(t){t&&t.c()}function N(t,e,n,i){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,n),i||B(()=>{const l=t.$$.on_mount.map(J).filter(V);t.$$.on_destroy?t.$$.on_destroy.push(...l):$(l),t.$$.on_mount=[]}),c.forEach(B)}function z(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(E.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,i,o,c,l,a=[-1]){const r=k;w(t);const s=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:K(),dirty:a,skip_bound:!1,root:e.target||r.$$.root};l&&l(s.root);let m=!1;if(s.ctx=n?n(t,e.props||{},(u,f,...v)=>{const O=v.length?v[0]:f;return s.ctx&&o(s.ctx[u],s.ctx[u]=O)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](O),m&&pt(t,u)),f}):[],s.update(),m=!0,$(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const u=nt(e.target);s.fragment&&s.fragment.l(u),u.forEach(x)}else s.fragment&&s.fragment.c();e.intro&&_(t.$$.fragment),N(t,e.target,e.anchor,e.customElement),X()}w(r)}class S{$destroy(){z(this,1),this.$destroy=y}$on(e,n){if(!V(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const jt="";function ht(t){let e,n,i,o,c=t[0].name+"",l,a,r,s,m;return{c(){e=h("div"),n=h("div"),n.innerHTML=`<span class=""><form><input type="checkbox"/> 
            <input type="hidden" name="id" value=""/></form></span>`,i=b(),o=h("span"),l=G(c),a=b(),r=h("a"),r.innerHTML='<i class="icon-close"></i>',p(n,"class","checker svelte-9jlfy0"),p(r,"href","javascript:void(0);"),p(r,"class","float-right remove-todo-item svelte-9jlfy0"),p(e,"class","todo-item svelte-9jlfy0")},m(u,f){L(u,e,f),d(e,n),d(e,i),d(e,o),d(o,l),d(e,a),d(e,r),s||(m=M(r,"click",t[2]),s=!0)},p(u,[f]){f&1&&c!==(c=u[0].name+"")&&ot(l,c)},i:y,o:y,d(u){u&&x(e),s=!1,m()}}}function mt(t,e,n){const i=lt();let{todo:o}=e,c=async a=>{await fetch("http://localhost:8000/api/todos/"+a,{method:"DELETE"}).then(r=>r.text()).then(r=>console.log(r)),i("reload",{todos:"reload"})};const l=()=>c(o.id);return t.$$set=a=>{"todo"in a&&n(0,o=a.todo)},[o,c,l]}class gt extends S{constructor(e){super(),P(this,e,mt,ht,T,{todo:0})}}const Ot="";function Y(t,e,n){const i=t.slice();return i[2]=e[n],i}function Z(t){let e,n;return e=new gt({props:{todo:t[2]}}),e.$on("reload",t[1]),{c(){I(e.$$.fragment)},m(i,o){N(e,i,o),n=!0},p(i,o){const c={};o&1&&(c.todo=i[2]),e.$set(c)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function _t(t){let e,n,i=t[0],o=[];for(let l=0;l<i.length;l+=1)o[l]=Z(Y(t,i,l));const c=l=>j(o[l],1,1,()=>{o[l]=null});return{c(){e=h("div");for(let l=0;l<o.length;l+=1)o[l].c();p(e,"class","todo-list svelte-dtqldy"),p(e,"id","todo-list")},m(l,a){L(l,e,a);for(let r=0;r<o.length;r+=1)o[r].m(e,null);n=!0},p(l,[a]){if(a&1){i=l[0];let r;for(r=0;r<i.length;r+=1){const s=Y(l,i,r);o[r]?(o[r].p(s,a),_(o[r],1)):(o[r]=Z(s),o[r].c(),_(o[r],1),o[r].m(e,null))}for(dt(),r=i.length;r<o.length;r+=1)c(r);ut()}},i(l){if(!n){for(let a=0;a<i.length;a+=1)_(o[a]);n=!0}},o(l){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)j(o[a]);n=!1},d(l){l&&x(e),et(o,l)}}}function vt(t,e,n){let{todos:i=[]}=e;function o(c){st.call(this,t,c)}return t.$$set=c=>{"todos"in c&&n(0,i=c.todos)},[i,o]}class yt extends S{constructor(e){super(),P(this,e,vt,_t,T,{todos:0})}}const Tt="";function $t(t){let e,n,i,o,c,l,a,r,s,m,u;return r=new yt({props:{todos:t[1]}}),r.$on("reload",t[3]),{c(){e=h("div"),n=h("div"),i=h("form"),o=h("input"),c=b(),l=h("ul"),l.innerHTML=`<li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link svelte-qgi5fc">All</a></li> 
            <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link svelte-qgi5fc">Active</a></li> 
            <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link svelte-qgi5fc">Completed</a></li>`,a=b(),I(r.$$.fragment),p(o,"name","name"),p(o,"class","form-control add-task svelte-qgi5fc"),p(o,"placeholder","New Task..."),p(i,"action","javascript:void(0);"),p(l,"class","nav nav-pills todo-nav svelte-qgi5fc"),p(n,"class","card-body"),p(e,"class","container")},m(f,v){L(f,e,v),d(e,n),d(n,i),d(i,o),Q(o,t[0]),d(n,c),d(n,l),d(n,a),N(r,n,null),s=!0,m||(u=[M(o,"input",t[4]),M(i,"submit",t[2])],m=!0)},p(f,[v]){v&1&&o.value!==f[0]&&Q(o,f[0]);const O={};v&2&&(O.todos=f[1]),r.$set(O)},i(f){s||(_(r.$$.fragment,f),s=!0)},o(f){j(r.$$.fragment,f),s=!1},d(f){f&&x(e),z(r),m=!1,$(u)}}}function bt(t,e,n){let i,o=[];async function c(){const s=await(await fetch("http://localhost:8000/api/todos/?format=json",{method:"POST",body:JSON.stringify({name:i}),headers:{"Content-Type":"application/json"}})).json();JSON.stringify(s),l()}let l=async()=>{await fetch("http://localhost:8000/api/todos/?format=json").then(r=>r.json()).then(r=>{n(1,o=r)})};rt(l);function a(){i=this.value,n(0,i)}return[i,o,c,l,a]}class xt extends S{constructor(e){super(),P(this,e,bt,$t,T,{})}}function kt(t){let e,n,i,o,c,l,a,r;return a=new xt({}),{c(){e=h("main"),n=h("h4"),n.textContent="Vite und Svelte",i=b(),o=h("div"),o.innerHTML='<img src="/assets/vite.svg"/>',c=b(),l=h("div"),I(a.$$.fragment),p(o,"class","card"),p(l,"class","card")},m(s,m){L(s,e,m),d(e,n),d(e,i),d(e,o),d(e,c),d(e,l),N(a,l,null),r=!0},p:y,i(s){r||(_(a.$$.fragment,s),r=!0)},o(s){j(a.$$.fragment,s),r=!1},d(s){s&&x(e),z(a)}}}class wt extends S{constructor(e){super(),P(this,e,null,kt,T,{})}}new wt({target:document.getElementById("app")})})();
//# sourceMappingURL=index-d17d7dbe.js.map
