"use strict";(self.webpackChunkmr_template=self.webpackChunkmr_template||[]).push([[610],{4610:(t,n,e)=>{e.r(n),e.d(n,{default:()=>T});var a=e(5043),r=e(7528),o=e(8587),i=e(8168),s=e(8387),l=e(3290),c=e(8606);function h(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(t){return parseFloat(t)}var u=e(6632),m=e(7040);function g(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,m.A)(t,n,e)}function p(t){if(t.type)return t;if("#"===t.charAt(0))return p(function(t){t=t.slice(1);const n=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g");let e=t.match(n);return e&&1===e[0].length&&(e=e.map((t=>t+t))),e?"rgb".concat(4===e.length?"a":"","(").concat(e.map(((t,n)=>n<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3)).join(", "),")"):""}(t));const n=t.indexOf("("),e=t.substring(0,n);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(e))throw new Error((0,u.A)(9,t));let a,r=t.substring(n+1,t.length-1);if("color"===e){if(r=r.split(" "),a=r.shift(),4===r.length&&"/"===r[3].charAt(0)&&(r[3]=r[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a))throw new Error((0,u.A)(10,a))}else r=r.split(",");return r=r.map((t=>parseFloat(t))),{type:e,values:r,colorSpace:a}}function f(t){const{type:n,colorSpace:e}=t;let{values:a}=t;return-1!==n.indexOf("rgb")?a=a.map(((t,n)=>n<3?parseInt(t,10):t)):-1!==n.indexOf("hsl")&&(a[1]="".concat(a[1],"%"),a[2]="".concat(a[2],"%")),a=-1!==n.indexOf("color")?"".concat(e," ").concat(a.join(" ")):"".concat(a.join(", ")),"".concat(n,"(").concat(a,")")}function v(t,n){return t=p(t),n=g(n),"rgb"!==t.type&&"hsl"!==t.type||(t.type+="a"),"color"===t.type?t.values[3]="/".concat(n):t.values[3]=n,f(t)}var b=e(4535),w=e(3847),x=e(7056),A=e(2400);function y(t){return(0,A.Ay)("MuiSkeleton",t)}(0,x.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var j,k,C,S,N=e(579);const R=["animation","className","component","height","style","variant","width"];let E,M,O,I;const X=(0,l.i7)(E||(E=j||(j=(0,r.A)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),F=(0,l.i7)(M||(M=k||(k=(0,r.A)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),_=(0,b.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.root,n[e.variant],!1!==e.animation&&n[e.animation],e.hasChildren&&n.withChildren,e.hasChildren&&!e.width&&n.fitContent,e.hasChildren&&!e.height&&n.heightAuto]}})((t=>{let{theme:n,ownerState:e}=t;const a=h(n.shape.borderRadius)||"px",r=d(n.shape.borderRadius);return(0,i.A)({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:v(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(a,"/").concat(Math.round(r/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(n.vars||n).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(t=>{let{ownerState:n}=t;return"pulse"===n.animation&&(0,l.AH)(O||(O=C||(C=(0,r.A)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),X)}),(t=>{let{ownerState:n,theme:e}=t;return"wave"===n.animation&&(0,l.AH)(I||(I=S||(S=(0,r.A)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),F,(e.vars||e).palette.action.hover)})),B=a.forwardRef((function(t,n){const e=(0,w.A)({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:r,component:l="span",height:h,style:d,variant:u="text",width:m}=e,g=(0,o.A)(e,R),p=(0,i.A)({},e,{animation:a,component:l,variant:u,hasChildren:Boolean(g.children)}),f=(t=>{const{classes:n,variant:e,animation:a,hasChildren:r,width:o,height:i}=t,s={root:["root",e,a,r&&"withChildren",r&&!o&&"fitContent",r&&!i&&"heightAuto"]};return(0,c.A)(s,y,n)})(p);return(0,N.jsx)(_,(0,i.A)({as:l,ref:n,className:(0,s.A)(f.root,r),ownerState:p},g,{style:(0,i.A)({width:m,height:h},d)}))}));var H=e(3288);function L(t){let{imageLoaded:n,handleImageError:e}=t;const a=n?"":"ml-4 mt-4 scale-150";return(0,N.jsx)("div",{className:"shadow-lg rounded-lg p-4  sm:flex ".concat(a),children:n?(0,N.jsx)("img",{src:"https://avatars.githubusercontent.com/u/64687226?v=4",className:"rounded-lg h-72 w-72 object-cover",alt:"Profile",onError:e}):(0,N.jsx)(B,{variant:"rectangular",width:12,height:12})})}const P=function(t){let{theme:n,lang:e,slug:r}=t;const[o,i]=(0,a.useState)(!0);return(0,N.jsx)("div",{className:"w-full h-full sm:mt-0 relative",children:(0,N.jsx)("div",{className:"container mx-auto",children:(0,N.jsxs)("div",{className:"flex flex-col sm:flex-row items-center \n                      justify-center p-6 w-full shadow-lg \n                      rounded-b-lg h-screen sm:mt-0 bg-gray-100\n                      relative\n          ",children:[(0,N.jsx)(L,{imageLoaded:o,handleImageError:()=>{i(!1)}}),(0,N.jsxs)("div",{className:"flex flex-col sm:w-1/2 sm:ml-4",children:[(0,N.jsx)("h1",{className:"text-4xl font-bold mt-6 sm:mt-0",children:H.ME[e].name}),(0,N.jsx)("p",{className:"text-lg mt-4",children:H.ME[e].about})]})]})})})};function T(t){let{theme:n,lang:e,slug:a}=t;return(0,N.jsx)(P,{lang:e,theme:n,slug:a})}}}]);
//# sourceMappingURL=610.e09ac877.chunk.js.map