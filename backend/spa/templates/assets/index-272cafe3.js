(function(){"use strict";var K=document.createElement("style");K.textContent=`:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.todo-item.svelte-9jlfy0{padding:15px;margin:5px 0;border-radius:0;background:#f7f7f7}div.checker.svelte-9jlfy0{display:inline-block;vertical-align:middle;width:19px;height:19px}.remove-todo-item.svelte-9jlfy0{background-color:red;display:block;width:10px;height:10px;float:right}.todo-list.svelte-dtqldy{margin:10px 0;min-width:500px;text-align:left}.form-control.svelte-qgi5fc{width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;color:#495057;border:1px solid #ced4da;border-radius:.25rem}.nav.svelte-qgi5fc{list-style:none;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0}.nav-link.svelte-qgi5fc{display:block;padding:.5rem 1rem;text-decoration:none}
`,document.head.appendChild(K);const Tt="";function k(){}function V(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(V)}function Q(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function q(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function it(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function y(){return R(" ")}function A(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function st(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function U(t,e){t.value=e??""}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}let E;function j(t){E=t}function W(){if(!E)throw new Error("Function called outside component initialization");return E}function ct(t){W().$$.on_mount.push(t)}function at(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const o=t.$$.callbacks[e];if(o){const c=lt(e,n,{cancelable:i});return o.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function ft(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const O=[],X=[],C=[],Y=[],dt=Promise.resolve();let F=!1;function ut(){F||(F=!0,dt.then(Z))}function I(t){C.push(t)}const D=new Set;let N=0;function Z(){const t=E;do{for(;N<O.length;){const e=O[N];N++,j(e),pt(e.$$)}for(j(null),O.length=0,N=0;X.length;)X.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];D.has(n)||(D.add(n),n())}C.length=0}while(O.length);for(;Y.length;)Y.pop()();F=!1,D.clear(),j(t)}function pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const z=new Set;let $;function ht(){$={r:0,c:[],p:$}}function mt(){$.r||v($.c),$=$.p}function b(t,e){t&&t.i&&(z.delete(t),t.i(e))}function T(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),$.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function J(t){t&&t.c()}function P(t,e,n,i){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,n),i||I(()=>{const s=t.$$.on_mount.map(V).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),c.forEach(I)}function S(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(O.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,n,i,o,c,s,a=[-1]){const r=E;j(t);const l=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:o,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:G(),dirty:a,skip_bound:!1,root:e.target||r.$$.root};s&&s(l.root);let h=!1;if(l.ctx=n?n(t,e.props||{},(m,p,...g)=>{const _=g.length?g[0]:p;return l.ctx&&o(l.ctx[m],l.ctx[m]=_)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](_),h&&gt(t,m)),p}):[],l.update(),h=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const m=rt(e.target);l.fragment&&l.fragment.l(m),m.forEach(w)}else l.fragment&&l.fragment.c();e.intro&&b(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),Z()}j(r)}class H{$destroy(){S(this,1),this.$destroy=k}$on(e,n){if(!Q(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Lt="";function _t(t){let e,n,i,o,c,s,a,r,l,h=t[0].name+"",m,p,g,_,nt;return{c(){e=u("div"),n=u("div"),i=u("span"),o=u("form"),c=u("input"),s=y(),a=u("input"),r=y(),l=u("span"),m=R(h),p=y(),g=u("a"),g.innerHTML='<i class="icon-close"></i>',d(c,"type","checkbox"),d(a,"type","hidden"),d(a,"name","id"),a.value="",d(i,"class",""),d(n,"class","checker svelte-9jlfy0"),d(g,"href","javascript:void(0);"),d(g,"class","float-right remove-todo-item svelte-9jlfy0"),d(e,"class","todo-item svelte-9jlfy0")},m(x,B){q(x,e,B),f(e,n),f(n,i),f(i,o),f(o,c),c.checked=t[0].status,f(o,s),f(o,a),f(e,r),f(e,l),f(l,m),f(e,p),f(e,g),_||(nt=[A(c,"change",t[2]),A(g,"click",t[3])],_=!0)},p(x,[B]){B&1&&(c.checked=x[0].status),B&1&&h!==(h=x[0].name+"")&&st(m,h)},i:k,o:k,d(x){x&&w(e),_=!1,v(nt)}}}function vt(t,e,n){const i=at();let{todo:o}=e;o.status;let c=async r=>{await fetch(location.origin+"/api/todos/"+r,{method:"DELETE"}).then(l=>l.text()).then(l=>console.log(l)),i("reload",{todos:"reload"})};function s(){o.status=this.checked,n(0,o)}const a=()=>c(o.id);return t.$$set=r=>{"todo"in r&&n(0,o=r.todo)},[o,c,s,a]}class yt extends H{constructor(e){super(),M(this,e,vt,_t,L,{todo:0})}}const qt="";function tt(t,e,n){const i=t.slice();return i[2]=e[n],i}function et(t){let e,n;return e=new yt({props:{todo:t[2]}}),e.$on("reload",t[1]),{c(){J(e.$$.fragment)},m(i,o){P(e,i,o),n=!0},p(i,o){const c={};o&1&&(c.todo=i[2]),e.$set(c)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){S(e,i)}}}function $t(t){let e,n,i=t[0],o=[];for(let s=0;s<i.length;s+=1)o[s]=et(tt(t,i,s));const c=s=>T(o[s],1,1,()=>{o[s]=null});return{c(){e=u("div");for(let s=0;s<o.length;s+=1)o[s].c();d(e,"class","todo-list svelte-dtqldy"),d(e,"id","todo-list")},m(s,a){q(s,e,a);for(let r=0;r<o.length;r+=1)o[r].m(e,null);n=!0},p(s,[a]){if(a&1){i=s[0];let r;for(r=0;r<i.length;r+=1){const l=tt(s,i,r);o[r]?(o[r].p(l,a),b(o[r],1)):(o[r]=et(l),o[r].c(),b(o[r],1),o[r].m(e,null))}for(ht(),r=i.length;r<o.length;r+=1)c(r);mt()}},i(s){if(!n){for(let a=0;a<i.length;a+=1)b(o[a]);n=!0}},o(s){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)T(o[a]);n=!1},d(s){s&&w(e),it(o,s)}}}function bt(t,e,n){let{todos:i=[]}=e;function o(c){ft.call(this,t,c)}return t.$$set=c=>{"todos"in c&&n(0,i=c.todos)},[i,o]}class kt extends H{constructor(e){super(),M(this,e,bt,$t,L,{todos:0})}}const At="";function xt(t){let e,n,i,o,c,s,a,r,l,h,m;return r=new kt({props:{todos:t[1]}}),r.$on("reload",t[3]),{c(){e=u("div"),n=u("div"),i=u("form"),o=u("input"),c=y(),s=u("ul"),s.innerHTML=`<li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link svelte-qgi5fc">All</a></li> 
            <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link svelte-qgi5fc">Active</a></li> 
            <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link svelte-qgi5fc">Completed</a></li>`,a=y(),J(r.$$.fragment),d(o,"name","name"),d(o,"class","form-control add-task svelte-qgi5fc"),d(o,"placeholder","New Task..."),d(i,"action","javascript:void(0);"),d(s,"class","nav nav-pills todo-nav svelte-qgi5fc"),d(n,"class","card-body"),d(e,"class","container")},m(p,g){q(p,e,g),f(e,n),f(n,i),f(i,o),U(o,t[0]),f(n,c),f(n,s),f(n,a),P(r,n,null),l=!0,h||(m=[A(o,"input",t[4]),A(i,"submit",t[2])],h=!0)},p(p,[g]){g&1&&o.value!==p[0]&&U(o,p[0]);const _={};g&2&&(_.todos=p[1]),r.$set(_)},i(p){l||(b(r.$$.fragment,p),l=!0)},o(p){T(r.$$.fragment,p),l=!1},d(p){p&&w(e),S(r),h=!1,v(m)}}}function wt(t,e,n){let i=location.origin,o,c=[];async function s(){const h=await(await fetch(i+"/api/todos/?format=json",{method:"POST",body:JSON.stringify({name:o}),headers:{"Content-Type":"application/json"}})).json();JSON.stringify(h),a()}let a=async()=>{await fetch(i+"/api/todos/?format=json").then(l=>l.json()).then(l=>{n(1,c=l)})};ct(a);function r(){o=this.value,n(0,o)}return[o,c,s,a,r]}class Et extends H{constructor(e){super(),M(this,e,wt,xt,L,{})}}function jt(t){let e,n,i,o,c,s,a,r;return a=new Et({}),{c(){e=u("main"),n=u("h4"),n.textContent="Vite und Svelte",i=y(),o=u("div"),o.innerHTML='<img src="/assets/vite.svg"/>',c=y(),s=u("div"),J(a.$$.fragment),d(o,"class","card"),d(s,"class","card")},m(l,h){q(l,e,h),f(e,n),f(e,i),f(e,o),f(e,c),f(e,s),P(a,s,null),r=!0},p:k,i(l){r||(b(a.$$.fragment,l),r=!0)},o(l){T(a.$$.fragment,l),r=!1},d(l){l&&w(e),S(a)}}}class Ot extends H{constructor(e){super(),M(this,e,null,jt,L,{})}}new Ot({target:document.getElementById("app")})})();
//# sourceMappingURL=index-272cafe3.js.map