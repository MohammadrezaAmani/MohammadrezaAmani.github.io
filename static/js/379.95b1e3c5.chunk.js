"use strict";(self.webpackChunkmr_template=self.webpackChunkmr_template||[]).push([[379],{4379:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var l=t(5462),a=t(8709),n=t(579);function r(e){let{theme:s,lang:t,slug:r}=e;return(0,n.jsx)(l.B,{lang:t,theme:s,slug:r,data:a.A})}},5462:(e,s,t)=>{t.d(s,{B:()=>u});var l=t(5043),a=t(8903),n=t(1637),r=t(5051),c=t(579);const d=e=>{let{handleSearch:s}=e;return(0,c.jsxs)("div",{className:"relative w-full sm:w-1/4",children:[(0,c.jsx)(r.Xj1,{className:"absolute left-2 mt-2 text-gray-500 h-6 w-6",onClick:()=>{const e=document.getElementById("search");e&&alert(e.value)}}),(0,c.jsx)("input",{type:"text",placeholder:"\u062c\u0633\u062a \u0648 \u062c\u0648",className:"rounded-md pl-10 pr-2 py-2 w-full bg-gray-200 text-gray-500 onfocus:bg-gray-100",id:"search",onChange:s})]})};var i=t(7538),o=t(9193);const m=e=>{let{data:s,lang:t,slug:l,theme:a}=e,n=s.langs.find((e=>e.lang===t));return n||(n=s.langs[0]),(0,c.jsxs)("div",{id:"data-item-".concat(s.slug),className:"shadow-lg rounded-sm p-6",children:[(0,c.jsxs)("a",{href:o.Io+l+"/"+s.slug,className:"block w-full",children:[""!==s.image&&(0,c.jsx)("div",{className:"h-48 w-full ",children:(0,c.jsx)("img",{src:s.image,alt:n.title,className:"rounded-lg object-cover w-full h-full"})}),(0,c.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,c.jsx)("h6",{className:"text-xl font-bold",children:n.title}),(0,c.jsx)("p",{className:"text-xs",children:s.updated_at})]}),(0,c.jsx)("p",{className:"mt-2",children:n.description})]}),(0,c.jsx)("div",{className:"mt-2 flex flex-row flex-wrap space-x-1 w-full",children:s.tags.map(((e,s)=>(0,c.jsx)("span",{className:"bg-gray-200 p-1 rounded-md flex-wrap",children:(0,c.jsx)("a",{href:o.Io+i.J.category.path+"/"+e,children:"#"+e})},s)))})]})},u=e=>{let{lang:s,data:t,slug:r,theme:i}=e;const[o,u]=(0,l.useState)([]),[g,h]=(0,l.useState)(1),[x,f]=(0,l.useState)(!0);(0,l.useEffect)((()=>{u(t.slice(0,12*g)),f(!1)}),[t,g]);return(0,l.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&h((e=>e+1))}),{root:null,rootMargin:"20px",threshold:0}),s=document.getElementById("observer");return s&&e.observe(s),()=>{e.disconnect()}}),[]),(0,c.jsxs)("div",{className:"m-8",children:[(0,c.jsx)("div",{className:"flex flex-row",children:(0,c.jsx)(d,{handleSearch:e=>{const l=e.target.value;h(1);const a=((e,s,t)=>e.filter((e=>{let l=e.langs.find((e=>e.lang===t));return l||(l=e.langs[0]),l.title.toLowerCase().includes(s.toLowerCase())||l.description.toLowerCase().includes(s.toLowerCase())||e.tags.join(" ").toLowerCase().includes(s.toLowerCase())})))(t,l,s);u(a.slice(0,12))}})}),(0,c.jsx)(a.Ay,{container:!0,spacing:4,justifyContent:"center mt-4",children:o.map(((e,t)=>(0,c.jsx)(a.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,className:"grid-flow-dense",children:(0,c.jsx)(m,{data:e,lang:s,slug:r,theme:i})},t)))}),x&&(0,c.jsx)("div",{className:"flex justify-center mt-4",children:(0,c.jsx)(n.A,{})}),(0,c.jsx)("div",{id:"observer"})]})}}}]);
//# sourceMappingURL=379.95b1e3c5.chunk.js.map