"use strict";(self.webpackChunkmr_template=self.webpackChunkmr_template||[]).push([[903],{8903:(t,n,e)=>{e.d(n,{Ay:()=>A});var o=e(8587),r=e(8168),c=e(5043),i=e(8387),a=e(9751),s=e(8698),p=e(8606),u=e(4535),l=e(3847),m=e(6240);const d=c.createContext();var f=e(7056),g=e(2400);function w(t){return(0,g.Ay)("MuiGrid",t)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,f.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((t=>"spacing-xs-".concat(t))),...["column-reverse","column","row-reverse","row"].map((t=>"direction-xs-".concat(t))),...["nowrap","wrap-reverse","wrap"].map((t=>"wrap-xs-".concat(t))),...h.map((t=>"grid-xs-".concat(t))),...h.map((t=>"grid-sm-".concat(t))),...h.map((t=>"grid-md-".concat(t))),...h.map((t=>"grid-lg-".concat(t))),...h.map((t=>"grid-xl-".concat(t)))]);var b=e(579);const k=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(t){const n=parseFloat(t);return"".concat(n).concat(String(t).replace(String(n),"")||"px")}function v(t){let{breakpoints:n,values:e}=t,o="";Object.keys(e).forEach((t=>{""===o&&0!==e[t]&&(o=t)}));const r=Object.keys(n).sort(((t,e)=>n[t]-n[e]));return r.slice(0,r.indexOf(o))}const W=(0,u.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t,{container:o,direction:r,item:c,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:p}=e;let u=[];o&&(u=function(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||t<=0)return[];if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t)return[e["spacing-xs-".concat(String(t))]];const o=[];return n.forEach((n=>{const r=t[n];Number(r)>0&&o.push(e["spacing-".concat(n,"-").concat(String(r))])})),o}(i,p,n));const l=[];return p.forEach((t=>{const o=e[t];o&&l.push(n["grid-".concat(t,"-").concat(String(o))])})),[n.root,o&&n.container,c&&n.item,s&&n.zeroMinWidth,...u,"row"!==r&&n["direction-xs-".concat(String(r))],"wrap"!==a&&n["wrap-xs-".concat(String(a))],...l]}})((t=>{let{ownerState:n}=t;return(0,r.A)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})}),(function(t){let{theme:n,ownerState:e}=t;const o=(0,a.kW)({values:e.direction,breakpoints:n.breakpoints.values});return(0,a.NI)({theme:n},o,(t=>{const n={flexDirection:t};return 0===t.indexOf("column")&&(n["& > .".concat(x.item)]={maxWidth:"none"}),n}))}),(function(t){let{theme:n,ownerState:e}=t;const{container:o,rowSpacing:r}=e;let c={};if(o&&0!==r){const t=(0,a.kW)({values:r,breakpoints:n.breakpoints.values});let e;"object"===typeof t&&(e=v({breakpoints:n.breakpoints.values,values:t})),c=(0,a.NI)({theme:n},t,((t,o)=>{var r;const c=n.spacing(t);return"0px"!==c?{marginTop:"-".concat(S(c)),["& > .".concat(x.item)]:{paddingTop:S(c)}}:null!=(r=e)&&r.includes(o)?{}:{marginTop:0,["& > .".concat(x.item)]:{paddingTop:0}}}))}return c}),(function(t){let{theme:n,ownerState:e}=t;const{container:o,columnSpacing:r}=e;let c={};if(o&&0!==r){const t=(0,a.kW)({values:r,breakpoints:n.breakpoints.values});let e;"object"===typeof t&&(e=v({breakpoints:n.breakpoints.values,values:t})),c=(0,a.NI)({theme:n},t,((t,o)=>{var r;const c=n.spacing(t);return"0px"!==c?{width:"calc(100% + ".concat(S(c),")"),marginLeft:"-".concat(S(c)),["& > .".concat(x.item)]:{paddingLeft:S(c)}}:null!=(r=e)&&r.includes(o)?{}:{width:"100%",marginLeft:0,["& > .".concat(x.item)]:{paddingLeft:0}}}))}return c}),(function(t){let n,{theme:e,ownerState:o}=t;return e.breakpoints.keys.reduce(((t,c)=>{let i={};if(o[c]&&(n=o[c]),!n)return t;if(!0===n)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,a.kW)({values:o.columns,breakpoints:e.breakpoints.values}),p="object"===typeof s?s[c]:s;if(void 0===p||null===p)return t;const u="".concat(Math.round(n/p*1e8)/1e6,"%");let l={};if(o.container&&o.item&&0!==o.columnSpacing){const t=e.spacing(o.columnSpacing);if("0px"!==t){const n="calc(".concat(u," + ").concat(S(t),")");l={flexBasis:n,maxWidth:n}}}i=(0,r.A)({flexBasis:u,flexGrow:0,maxWidth:u},l)}return 0===e.breakpoints.values[c]?Object.assign(t,i):t[e.breakpoints.up(c)]=i,t}),{})}));const y=t=>{const{classes:n,container:e,direction:o,item:r,spacing:c,wrap:i,zeroMinWidth:a,breakpoints:s}=t;let u=[];e&&(u=function(t,n){if(!t||t<=0)return[];if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t)return["spacing-xs-".concat(String(t))];const e=[];return n.forEach((n=>{const o=t[n];if(Number(o)>0){const t="spacing-".concat(n,"-").concat(String(o));e.push(t)}})),e}(c,s));const l=[];s.forEach((n=>{const e=t[n];e&&l.push("grid-".concat(n,"-").concat(String(e)))}));const m={root:["root",e&&"container",r&&"item",a&&"zeroMinWidth",...u,"row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==i&&"wrap-xs-".concat(String(i)),...l]};return(0,p.A)(m,w,n)},N=c.forwardRef((function(t,n){const e=(0,l.A)({props:t,name:"MuiGrid"}),{breakpoints:a}=(0,m.A)(),p=(0,s.A)(e),{className:u,columns:f,columnSpacing:g,component:w="div",container:h=!1,direction:x="row",item:S=!1,rowSpacing:v,spacing:N=0,wrap:A="wrap",zeroMinWidth:M=!1}=p,z=(0,o.A)(p,k),j=v||N,G=g||N,E=c.useContext(d),O=h?f||12:E,B={},C=(0,r.A)({},z);a.keys.forEach((t=>{null!=z[t]&&(B[t]=z[t],delete C[t])}));const L=(0,r.A)({},p,{columns:O,container:h,direction:x,item:S,rowSpacing:j,columnSpacing:G,wrap:A,zeroMinWidth:M,spacing:N},B,{breakpoints:a.keys}),T=y(L);return(0,b.jsx)(d.Provider,{value:O,children:(0,b.jsx)(W,(0,r.A)({ownerState:L,className:(0,i.A)(T.root,u),as:w,ref:n},C))})}));const A=N}}]);
//# sourceMappingURL=903.74f550b8.chunk.js.map