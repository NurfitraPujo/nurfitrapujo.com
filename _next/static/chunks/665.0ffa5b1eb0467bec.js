"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{780:function(e,t,n){n.r(t),n.d(t,{default:function(){return xe}});var r=n(5893),o=n(9583),i=n(7294),l=n.t(i,2);const s=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?i.useLayoutEffect:()=>{},c=l["useId".toString()]||(()=>{});let a=0;function u(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function d(...e){return i.useCallback(u(...e),e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const p=i.forwardRef(((e,t)=>{const{children:n,...r}=e;return i.Children.toArray(n).some(g)?i.createElement(i.Fragment,null,i.Children.map(n,(e=>g(e)?i.createElement(m,f({},r,{ref:t}),e.props.children):e))):i.createElement(m,f({},r,{ref:t}),n)}));p.displayName="Slot";const m=i.forwardRef(((e,t)=>{const{children:n,...r}=e;return i.isValidElement(n)?i.cloneElement(n,{...w(r,n.props),ref:u(t,n.ref)}):i.Children.count(n)>1?i.Children.only(null):null}));m.displayName="SlotClone";const h=({children:e})=>i.createElement(i.Fragment,null,e);function g(e){return i.isValidElement(e)&&e.type===h}function w(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?n[r]=(...e)=>{null==i||i(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const v=["a","button","div","h2","h3","img","li","nav","p","span","svg","ul"].reduce(((e,t)=>({...e,[t]:i.forwardRef(((e,n)=>{const{asChild:r,...o}=e,l=r?p:t;return i.useEffect((()=>{window[Symbol.for("radix-ui")]=!0}),[]),e.as&&console.error(y),i.createElement(l,f({},o,{ref:n}))}))})),{}),y="Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element",b=i.forwardRef(((e,t)=>i.createElement(v.span,f({},e,{ref:t,style:{...e.style,position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}}))));var x=n(3935);const E=i.forwardRef(((e,t)=>{var n,r;const{containerRef:o,style:l,...c}=e,a=null!==(n=null==o?void 0:o.current)&&void 0!==n?n:null===globalThis||void 0===globalThis||null===(r=globalThis.document)||void 0===r?void 0:r.body,[,u]=i.useState({});return s((()=>{u({})}),[]),a?x.createPortal(i.createElement(v.div,f({"data-radix-portal":""},c,{ref:t,style:a===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...l}:void 0})),a):null})),C=i.forwardRef(((e,t)=>{const{children:n,width:r=10,height:o=5,...l}=e;return i.createElement(v.svg,f({},l,{ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:i.createElement("polygon",{points:"0,0 30,0 15,10"}))}));function O(e){const[t,n]=i.useState(void 0);return i.useEffect((()=>{if(e){const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let o,i;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,i=t.blockSize}else{const t=e.getBoundingClientRect();o=t.width,i=t.height}n({width:o,height:i})}));return t.observe(e,{box:"border-box"}),()=>{n(void 0),t.unobserve(e)}}}),[e]),t}function S(e,t){const n=N.get(e);return void 0===n?(N.set(e,{rect:{},callbacks:[t]}),1===N.size&&(T=requestAnimationFrame(k))):(n.callbacks.push(t),t(e.getBoundingClientRect())),()=>{const n=N.get(e);if(void 0===n)return;const r=n.callbacks.indexOf(t);r>-1&&n.callbacks.splice(r,1),0===n.callbacks.length&&(N.delete(e),0===N.size&&cancelAnimationFrame(T))}}let T;const N=new Map;function k(){const e=[];N.forEach(((t,n)=>{const r=n.getBoundingClientRect();var o,i;i=r,((o=t.rect).width!==i.width||o.height!==i.height||o.top!==i.top||o.right!==i.right||o.bottom!==i.bottom||o.left!==i.left)&&(t.rect=r,e.push(t))})),e.forEach((e=>{e.callbacks.forEach((t=>t(e.rect)))})),T=requestAnimationFrame(k)}function R(e){const[t,n]=i.useState();return i.useEffect((()=>{if(e){const t=S(e,n);return()=>{n(void 0),t()}}}),[e]),t}function _(e,t=[]){let n=[];const r=()=>{const t=n.map((e=>i.createContext(e)));return function(n){const r=(null==n?void 0:n[e])||t;return i.useMemo((()=>({[`__scope${e}`]:{...n,[e]:r}})),[n,r])}};return r.scopeName=e,[function(t,r){const o=i.createContext(r),l=n.length;function s(t){const{scope:n,children:r,...s}=t,c=(null==n?void 0:n[e][l])||o,a=i.useMemo((()=>s),Object.values(s));return i.createElement(c.Provider,{value:a},r)}return n=[...n,r],s.displayName=t+"Provider",[s,function(n,s){const c=(null==s?void 0:s[e][l])||o,a=i.useContext(c);if(a)return a;if(void 0!==r)return r;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},A(r,...t)]}function A(...e){const t=e[0];if(1===e.length)return t;const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const r=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{});return i.useMemo((()=>({[`__scope${t.scopeName}`]:r})),[r])}};return n.scopeName=t.scopeName,n}function P(e,t,n){const r=e["x"===n?"left":"top"],o="x"===n?"width":"height",i=e[o],l=t[o];return{before:r-l,start:r,center:r+(i-l)/2,end:r+i-l,after:r+i}}function j(e){return{position:"absolute",top:0,left:0,minWidth:"max-content",willChange:"transform",transform:`translate3d(${Math.round(e.x+window.scrollX)}px, ${Math.round(e.y+window.scrollY)}px, 0)`}}function M(e,t,n,r,o){const i="top"===t||"bottom"===t,l=o?o.width:0,s=o?o.height:0,c=l/2+r;let a="",u="";return i?(a={start:`${c}px`,center:"center",end:e.width-c+"px"}[n],u="top"===t?`${e.height+s}px`:-s+"px"):(a="left"===t?`${e.width+s}px`:-s+"px",u={start:`${c}px`,center:"center",end:e.height-c+"px"}[n]),`${a} ${u}`}const z={position:"fixed",top:0,left:0,opacity:0,transform:"translate3d(0, -200%, 0)"},$={position:"absolute",opacity:0};function L({popperSize:e,arrowSize:t,arrowOffset:n,side:r,align:o}){const i=(e.width-t.width)/2,l=(e.height-t.width)/2,s={top:0,right:90,bottom:180,left:-90}[r],c=Math.max(t.width,t.height),a={width:`${c}px`,height:`${c}px`,transform:`rotate(${s}deg)`,willChange:"transform",position:"absolute",[r]:"100%",direction:D(r,o)};return"top"!==r&&"bottom"!==r||("start"===o&&(a.left=`${n}px`),"center"===o&&(a.left=`${i}px`),"end"===o&&(a.right=`${n}px`)),"left"!==r&&"right"!==r||("start"===o&&(a.top=`${n}px`),"center"===o&&(a.top=`${l}px`),"end"===o&&(a.bottom=`${n}px`)),a}function D(e,t){return("top"!==e&&"right"!==e||"end"!==t)&&("bottom"!==e&&"left"!==e||"end"===t)?"ltr":"rtl"}function B(e){return{top:"bottom",right:"left",bottom:"top",left:"right"}[e]}function I(e,t){return{top:e.top<t.top,right:e.right>t.right,bottom:e.bottom>t.bottom,left:e.left<t.left}}const[U,F]=_("Popper"),[W,X]=U("Popper"),q=i.forwardRef(((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,l=X("PopperAnchor",n),s=i.useRef(null),c=d(t,s);return i.useEffect((()=>{l.onAnchorChange((null==r?void 0:r.current)||s.current)})),r?null:i.createElement(v.div,f({},o,{ref:c}))})),[V,G]=U("PopperContent"),H=e=>{const{__scopePopper:t,children:n}=e,[r,o]=i.useState(null);return i.createElement(W,{scope:t,anchor:r,onAnchorChange:o},n)},J=q,Y=i.forwardRef(((e,t)=>{const{__scopePopper:n,side:r="bottom",sideOffset:o,align:l="center",alignOffset:s,collisionTolerance:c,avoidCollisions:a=!0,...u}=e,p=X("PopperContent",n),[m,h]=i.useState(),g=R(p.anchor),[w,y]=i.useState(null),b=O(w),[x,E]=i.useState(null),C=O(x),S=d(t,(e=>y(e))),T=function(){const[e,t]=i.useState(void 0);return i.useEffect((()=>{let e;function n(){t({width:window.innerWidth,height:window.innerHeight})}function r(){window.clearTimeout(e),e=window.setTimeout(n,100)}return n(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)}),[]),e}(),N=T?DOMRect.fromRect({...T,x:0,y:0}):void 0,{popperStyles:k,arrowStyles:_,placedSide:A,placedAlign:D}=function({anchorRect:e,popperSize:t,arrowSize:n,arrowOffset:r=0,side:o,sideOffset:i=0,align:l,alignOffset:s=0,shouldAvoidCollisions:c=!0,collisionBoundariesRect:a,collisionTolerance:u=0}){if(!e||!t||!a)return{popperStyles:z,arrowStyles:$};const d=function(e,t,n=0,r=0,o){const i=o?o.height:0,l=P(t,e,"x"),s=P(t,e,"y"),c=s.before-n-i,a=s.after+n+i,u=l.before-n-i,d=l.after+n+i;return{top:{start:{x:l.start+r,y:c},center:{x:l.center,y:c},end:{x:l.end-r,y:c}},right:{start:{x:d,y:s.start+r},center:{x:d,y:s.center},end:{x:d,y:s.end-r}},bottom:{start:{x:l.start+r,y:a},center:{x:l.center,y:a},end:{x:l.end-r,y:a}},left:{start:{x:u,y:s.start+r},center:{x:u,y:s.center},end:{x:u,y:s.end-r}}}}(t,e,i,s,n),f=d[o][l];if(!1===c){const e=j(f);let i=$;return n&&(i=L({popperSize:t,arrowSize:n,arrowOffset:r,side:o,align:l})),{popperStyles:{...e,"--radix-popper-transform-origin":M(t,o,l,r,n)},arrowStyles:i,placedSide:o,placedAlign:l}}const p=DOMRect.fromRect({...t,...f}),m=(h=a,g=u,DOMRect.fromRect({width:h.width-2*g,height:h.height-2*g,x:h.left+g,y:h.top+g}));var h,g;const w=I(p,m),v=d[B(o)][l],y=function(e,t,n){const r=B(e);return t[e]&&!n[r]?r:e}(o,w,I(DOMRect.fromRect({...t,...v}),m)),b=function(e,t,n,r,o){const i="top"===n||"bottom"===n,l=i?"left":"top",s=i?"right":"bottom",c=i?"width":"height",a=t[c]>e[c];return"start"!==r&&"center"!==r||!(o[l]&&a||o[s]&&!a)?"end"!==r&&"center"!==r||!(o[s]&&a||o[l]&&!a)?r:"start":"end"}(t,e,o,l,w),x=j(d[y][b]);let E=$;return n&&(E=L({popperSize:t,arrowSize:n,arrowOffset:r,side:y,align:b})),{popperStyles:{...x,"--radix-popper-transform-origin":M(t,y,b,r,n)},arrowStyles:E,placedSide:y,placedAlign:b}}({anchorRect:g,popperSize:b,arrowSize:C,arrowOffset:m,side:r,sideOffset:o,align:l,alignOffset:s,shouldAvoidCollisions:a,collisionBoundariesRect:N,collisionTolerance:c}),U=void 0!==A;return i.createElement("div",{style:k,"data-radix-popper-content-wrapper":""},i.createElement(V,{scope:n,arrowStyles:_,onArrowChange:E,onArrowOffsetChange:h},i.createElement(v.div,f({"data-side":A,"data-align":D},u,{style:{...u.style,animation:U?void 0:"none"},ref:S}))))})),Z=i.forwardRef((function(e,t){const{__scopePopper:n,offset:r,...o}=e,l=G("PopperArrow",n),{onArrowOffsetChange:s}=l;return i.useEffect((()=>s(r)),[s,r]),i.createElement("span",{style:{...l.arrowStyles,pointerEvents:"none"}},i.createElement("span",{ref:l.onArrowChange,style:{display:"inline-block",verticalAlign:"top",pointerEvents:"auto"}},i.createElement(C,f({},o,{ref:t,style:{...o.style,display:"block"}}))))})),K=e=>{const{present:t,children:n}=e,r=function(e){const[t,n]=i.useState(),r=i.useRef({}),o=i.useRef(e),l=i.useRef("none"),c=e?"mounted":"unmounted",[a,u]=function(e,t){return i.useReducer(((e,n)=>{const r=t[e][n];return null!=r?r:e}),e)}(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect((()=>{const e=Q(r.current);l.current="mounted"===a?e:"none"}),[a]),s((()=>{const t=r.current,n=o.current;if(n!==e){const r=l.current,i=Q(t);if(e)u("MOUNT");else if("none"===i||"none"===(null==t?void 0:t.display))u("UNMOUNT");else{const e=r!==i;u(n&&e?"ANIMATION_OUT":"UNMOUNT")}o.current=e}}),[e,u]),s((()=>{if(t){const e=e=>{const n=Q(r.current).includes(e.animationName);e.target===t&&n&&u("ANIMATION_END")},n=e=>{e.target===t&&(l.current=Q(r.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}}),[t,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:i.useCallback((e=>{e&&(r.current=getComputedStyle(e)),n(e)}),[])}}(t),o="function"==typeof n?n({present:r.isPresent}):i.Children.only(n),l=d(r.ref,o.ref);return"function"==typeof n||r.isPresent?i.cloneElement(o,{ref:l}):null};function Q(e){return(null==e?void 0:e.animationName)||"none"}function ee(e){const t=i.useRef(e);return i.useEffect((()=>{t.current=e}),[e]),t.current}function te(e){const t=i.useRef(e);return i.useEffect((()=>{t.current=e})),i.useMemo((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}function ne(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}K.displayName="Presence";const[re,oe]=_("Tooltip",[F]),ie=F(),le=700,[se,ce]=re("TooltipProvider",{isOpenDelayed:!0,delayDuration:le,onOpen:()=>{},onClose:()=>{}}),[ae,ue]=re("Tooltip"),de=i.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,o=ue("TooltipTrigger",n),l=ie(n),s=d(t,o.onTriggerChange),c=i.useRef(!1),a=i.useCallback((()=>c.current=!1),[]);return i.useEffect((()=>()=>document.removeEventListener("mouseup",a)),[a]),i.createElement(J,f({asChild:!0},l),i.createElement(v.button,f({"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute},r,{ref:s,onMouseEnter:ne(e.onMouseEnter,o.onTriggerEnter),onMouseLeave:ne(e.onMouseLeave,o.onClose),onMouseDown:ne(e.onMouseDown,(()=>{o.onClose(),c.current=!0,document.addEventListener("mouseup",a,{once:!0})})),onFocus:ne(e.onFocus,(()=>{c.current||o.onOpen()})),onBlur:ne(e.onBlur,o.onClose),onClick:ne(e.onClick,o.onClose)})))})),fe=i.forwardRef(((e,t)=>{const{forceMount:n,...r}=e,o=ue("TooltipContent",e.__scopeTooltip);return i.createElement(K,{present:n||o.open},i.createElement(pe,f({ref:t},r)))})),pe=i.forwardRef(((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,portalled:l=!0,...s}=e,c=ue("TooltipContent",n),a=ie(n),u=l?E:i.Fragment,{onClose:d}=c;return function(e){const t=te(e);i.useEffect((()=>{const e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t])}((()=>d())),i.useEffect((()=>(document.addEventListener("tooltip.open",d),()=>document.removeEventListener("tooltip.open",d))),[d]),i.createElement(u,null,i.createElement(me,{__scopeTooltip:n}),i.createElement(Y,f({"data-state":c.stateAttribute},a,s,{ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)"}}),i.createElement(h,null,r),i.createElement(b,{id:c.contentId,role:"tooltip"},o||r)))}));function me(e){const{__scopeTooltip:t}=e,n=ue("CheckTriggerMoved",t),r=R(n.trigger),o=null==r?void 0:r.left,l=ee(o),s=null==r?void 0:r.top,c=ee(s),a=n.onClose;return i.useEffect((()=>{(void 0!==l&&l!==o||void 0!==c&&c!==s)&&a()}),[a,l,c,o,s]),null}const he=e=>{const{__scopeTooltip:t,delayDuration:n=le,skipDelayDuration:r=300,children:o}=e,[l,s]=i.useState(!0),c=i.useRef(0);return i.useEffect((()=>{const e=c.current;return()=>window.clearTimeout(e)}),[]),i.createElement(se,{scope:t,isOpenDelayed:l,delayDuration:n,onOpen:i.useCallback((()=>{window.clearTimeout(c.current),s(!1)}),[]),onClose:i.useCallback((()=>{window.clearTimeout(c.current),c.current=window.setTimeout((()=>s(!0)),r)}),[r])},o)},ge=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:o=!1,onOpenChange:l,delayDuration:u}=e,d=ce("Tooltip",t),f=ie(t),[p,m]=i.useState(null),h=function(e){const[t,n]=i.useState(c());return s((()=>{e||n((e=>null!=e?e:String(a++)))}),[e]),e||(t?`radix-${t}`:"")}(),g=i.useRef(0),w=null!=u?u:d.delayDuration,v=i.useRef(!1),{onOpen:y,onClose:b}=d,[x=!1,E]=function({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[r,o]=function({defaultProp:e,onChange:t}){const n=i.useState(e),[r]=n,o=i.useRef(r),l=te(t);return i.useEffect((()=>{o.current!==r&&(l(r),o.current=r)}),[r,o,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,s=l?e:r,c=te(n);return[s,i.useCallback((t=>{if(l){const n=t,r="function"==typeof t?n(e):t;r!==e&&c(r)}else o(t)}),[l,e,o,c])]}({prop:r,defaultProp:o,onChange:e=>{e&&(document.dispatchEvent(new CustomEvent("tooltip.open")),y()),null==l||l(e)}}),C=i.useMemo((()=>x?v.current?"delayed-open":"instant-open":"closed"),[x]),O=i.useCallback((()=>{window.clearTimeout(g.current),v.current=!1,E(!0)}),[E]),S=i.useCallback((()=>{window.clearTimeout(g.current),g.current=window.setTimeout((()=>{v.current=!0,E(!0)}),w)}),[w,E]);return i.useEffect((()=>()=>window.clearTimeout(g.current)),[]),i.createElement(H,f,i.createElement(ae,{scope:t,contentId:h,open:x,stateAttribute:C,trigger:p,onTriggerChange:m,onTriggerEnter:i.useCallback((()=>{d.isOpenDelayed?S():O()}),[d.isOpenDelayed,S,O]),onOpen:i.useCallback(O,[O]),onClose:i.useCallback((()=>{window.clearTimeout(g.current),E(!1),b()}),[E,b])},n))},we=de,ve=fe,ye=i.forwardRef(((e,t)=>{const{__scopeTooltip:n,...r}=e,o=ie(n);return i.createElement(Z,f({},o,r,{ref:t}))}));function be(e){var t=e.children,n=e.text,o=e.link,i=e.name;return(0,r.jsx)(he,{children:(0,r.jsxs)(ge,{children:[(0,r.jsx)(we,{name:i,children:(0,r.jsxs)("a",{href:o,target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("p",{className:"hidden",children:i}),t]})}),(0,r.jsxs)(ve,{side:"top",align:"center",children:[(0,r.jsx)("div",{className:"bg-blue px-1 py-1.5 border-none",children:(0,r.jsx)("p",{className:"text-white font-display",children:n})}),(0,r.jsx)(ye,{className:"fill-blue border-none"})]})]})})}var xe=function(){return(0,r.jsxs)("div",{className:"self-end flex flex-row space-x-6 mr-10 mb-10 text-white",children:[(0,r.jsx)(be,{name:"Nurfitra Pujo Santiko Email Link Button",text:"Contact me here!",link:"https://mail.google.com/mail/u/0/?fs=1&to=fitrapujo@gmail.com",children:(0,r.jsx)(o.SRX,{size:"28px"})}),(0,r.jsx)(be,{name:"Nurfitra Pujo Santiko Github Link Button",text:"Let's collaborate!",link:"https://github.com/NurfitraPujo",children:(0,r.jsx)(o.hJX,{size:"28px"})}),(0,r.jsx)(be,{name:"Nurfitra Pujo Santiko Linkedin Link Button",text:"More about me here",link:"https://www.linkedin.com/in/nurfitrapujo/",children:(0,r.jsx)(o.ltd,{size:"28px"})})]})}},8357:function(e,t,n){n.d(t,{w_:function(){return a}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function a(e){return function(t){return r.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,a=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,a,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}}]);