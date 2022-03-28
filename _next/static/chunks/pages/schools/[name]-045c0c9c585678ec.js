(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{8640:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return L},default:function(){return Y}});var r=i(3918),o=i(2962),t=i(3366),s=i(7462),c=i(7294),a=i(6010),l=i(5408),d=i(9707),m=i(7192),p=i(948),h=i(1657);var g=c.createContext(),x=i(8979);function u(n){return(0,x.Z)("MuiGrid",n)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var j=(0,i(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...f.map((n=>`grid-xs-${n}`)),...f.map((n=>`grid-sm-${n}`)),...f.map((n=>`grid-md-${n}`)),...f.map((n=>`grid-lg-${n}`)),...f.map((n=>`grid-xl-${n}`))]),w=i(5893);const S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(n){const e=parseFloat(n);return`${e}${String(n).replace(String(e),"")||"px"}`}function N(n,e,i={}){if(!e||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[i[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:r,sm:o,md:t,lg:s,xl:c}=n;return[Number(r)>0&&(i[`spacing-xs-${String(r)}`]||`spacing-xs-${String(r)}`),Number(o)>0&&(i[`spacing-sm-${String(o)}`]||`spacing-sm-${String(o)}`),Number(t)>0&&(i[`spacing-md-${String(t)}`]||`spacing-md-${String(t)}`),Number(s)>0&&(i[`spacing-lg-${String(s)}`]||`spacing-lg-${String(s)}`),Number(c)>0&&(i[`spacing-xl-${String(c)}`]||`spacing-xl-${String(c)}`)]}const $=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,e)=>{const{container:i,direction:r,item:o,lg:t,md:s,sm:c,spacing:a,wrap:l,xl:d,xs:m,zeroMinWidth:p}=n.ownerState;return[e.root,i&&e.container,o&&e.item,p&&e.zeroMinWidth,...N(a,i,e),"row"!==r&&e[`direction-xs-${String(r)}`],"wrap"!==l&&e[`wrap-xs-${String(l)}`],!1!==m&&e[`grid-xs-${String(m)}`],!1!==c&&e[`grid-sm-${String(c)}`],!1!==s&&e[`grid-md-${String(s)}`],!1!==t&&e[`grid-lg-${String(t)}`],!1!==d&&e[`grid-xl-${String(d)}`]]}})((({ownerState:n})=>(0,s.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:e}){const i=(0,l.P$)({values:e.direction,breakpoints:n.breakpoints.values});return(0,l.k9)({theme:n},i,(n=>{const e={flexDirection:n};return 0===n.indexOf("column")&&(e[`& > .${j.item}`]={maxWidth:"none"}),e}))}),(function({theme:n,ownerState:e}){const{container:i,rowSpacing:r}=e;let o={};if(i&&0!==r){const e=(0,l.P$)({values:r,breakpoints:n.breakpoints.values});o=(0,l.k9)({theme:n},e,(e=>{const i=n.spacing(e);return"0px"!==i?{marginTop:`-${b(i)}`,[`& > .${j.item}`]:{paddingTop:b(i)}}:{}}))}return o}),(function({theme:n,ownerState:e}){const{container:i,columnSpacing:r}=e;let o={};if(i&&0!==r){const e=(0,l.P$)({values:r,breakpoints:n.breakpoints.values});o=(0,l.k9)({theme:n},e,(e=>{const i=n.spacing(e);return"0px"!==i?{width:`calc(100% + ${b(i)})`,marginLeft:`-${b(i)}`,[`& > .${j.item}`]:{paddingLeft:b(i)}}:{}}))}return o}),(function({theme:n,ownerState:e}){let i;return n.breakpoints.keys.reduce(((r,o)=>{let t={};if(e[o]&&(i=e[o]),!i)return r;if(!0===i)t={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)t={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,l.P$)({values:e.columns,breakpoints:n.breakpoints.values}),a="object"===typeof c?c[o]:c;if(void 0===a||null===a)return r;const d=Math.round(i/a*1e8)/1e6+"%";let m={};if(e.container&&e.item&&0!==e.columnSpacing){const i=n.spacing(e.columnSpacing);if("0px"!==i){const n=`calc(${d} + ${b(i)})`;m={flexBasis:n,maxWidth:n}}}t=(0,s.Z)({flexBasis:d,flexGrow:0,maxWidth:d},m)}return 0===n.breakpoints.values[o]?Object.assign(r,t):r[n.breakpoints.up(o)]=t,r}),{})}));var _=c.forwardRef((function(n,e){const i=(0,h.Z)({props:n,name:"MuiGrid"}),r=(0,d.Z)(i),{className:o,columns:l,columnSpacing:p,component:x="div",container:f=!1,direction:j="row",item:b=!1,lg:_=!1,md:y=!1,rowSpacing:v,sm:k=!1,spacing:P=0,wrap:Z="wrap",xl:C=!1,xs:W=!1,zeroMinWidth:A=!1}=r,I=(0,t.Z)(r,S),M=v||P,z=p||P,E=c.useContext(g),T=f?l||12:E,G=(0,s.Z)({},r,{columns:T,container:f,direction:j,item:b,lg:_,md:y,sm:k,rowSpacing:M,columnSpacing:z,wrap:Z,xl:C,xs:W,zeroMinWidth:A}),B=(n=>{const{classes:e,container:i,direction:r,item:o,lg:t,md:s,sm:c,spacing:a,wrap:l,xl:d,xs:p,zeroMinWidth:h}=n,g={root:["root",i&&"container",o&&"item",h&&"zeroMinWidth",...N(a,i),"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==c&&`grid-sm-${String(c)}`,!1!==s&&`grid-md-${String(s)}`,!1!==t&&`grid-lg-${String(t)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,m.Z)(g,u,e)})(G);return(0,w.jsx)(g.Provider,{value:T,children:(0,w.jsx)($,(0,s.Z)({ownerState:G,className:(0,a.Z)(B.root,o),as:x,ref:e},I))})})),y=i(1664);function v(n){var e=n.label,i=n.children,r=(0,c.useState)(!0),o=r[0],t=r[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(E,{onClick:function(){return t(!o)},onKeyUp:function(n){return function(n){"Enter"!==n.key&&"Space"!==n.key||t(!o)}(n)},children:[(0,w.jsx)(B,{children:e}),(0,w.jsx)(G,{"aria-label":"open section",tabIndex:0,children:o?"-":"+"})]}),o&&(0,w.jsx)(z,{item:!0,children:i})]})}var k=r.ZP.div.withConfig({displayName:"name__Wrapper",componentId:"sc-1op9rh6-0"})(["margin-top:2rem;justify-content:center;width:100%;background:#fff;"]),P=(0,r.ZP)("div").withConfig({displayName:"name__Container",componentId:"sc-1op9rh6-1"})(["display:flex;flex:1;flex-direction:column;max-width:60rem;width:100%;height:100%;box-shadow:5px 10px 18px #888888;padding-bottom:2rem;margin:0 auto;"]),Z=r.ZP.h1.withConfig({displayName:"name__Title",componentId:"sc-1op9rh6-2"})(["font-size:1.8rem;font-weight:700;color:#fff;margin:0;"]),C=r.ZP.h2.withConfig({displayName:"name__SubTitle",componentId:"sc-1op9rh6-3"})(["font-size:1.2rem;margin-bottom:1rem;"]),W=(0,r.ZP)(C).withConfig({displayName:"name__Value",componentId:"sc-1op9rh6-4"})(["color:#01579b;margin:0;font-size:1rem;"]),A=(0,r.ZP)(_).withConfig({displayName:"name__Body",componentId:"sc-1op9rh6-5"})(["align-text:left;height:100%;margin:0 auto;font-size:1rem;max-width:60rem;"]),I=(0,r.ZP)(_).withConfig({displayName:"name__Head",componentId:"sc-1op9rh6-6"})(["padding:2rem 0;background:#01579b;color:#fff;text-align:center;"]),M=r.ZP.a.withConfig({displayName:"name__Anchor",componentId:"sc-1op9rh6-7"})(["cursor:pointer;border:1px solid #fff;padding:0.5rem 1rem;display:inline-block;font-size:0.9rem;background:#fff;color:#01579b;&:visited{color:rgba(0,0,0,0.87);}&:hover{text-decoration:underline;}"]),z=(0,r.ZP)(_).withConfig({displayName:"name__Row",componentId:"sc-1op9rh6-8"})(["display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;border:1px solid #ccc;padding:1rem;"]),E=(0,r.ZP)("div").withConfig({displayName:"name__Info",componentId:"sc-1op9rh6-9"})(["padding:0.5rem 1rem;display:inline-block;font-size:1rem;background:rgba(0,0,0,0.04);border:1px solid #ccc;margin:0;display:flex;align-items:center;justify-content:space-between;cursor:pointer;"]),T=(0,r.ZP)("div").withConfig({displayName:"name__Item",componentId:"sc-1op9rh6-10"})(["margin:0;padding:0;"]),G=(0,r.ZP)("span").withConfig({displayName:"name__Icon",componentId:"sc-1op9rh6-11"})(["font-weight:700;"]),B=(0,r.ZP)("h4").withConfig({displayName:"name__Label",componentId:"sc-1op9rh6-12"})(["padding:0;margin:0;"]),L=!0,Y=function(n){var e=n.school;return(0,w.jsxs)(k,{children:[(0,w.jsx)(o.PB,{title:e.schoolName,titleTemplate:e.schoolName}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(I,{children:[(0,w.jsx)(Z,{children:e.schoolName}),(0,w.jsxs)(C,{children:[e.district," District - ",e.county," County"]}),(0,w.jsx)(C,{children:"Liberia"}),(0,w.jsx)(y.default,{href:"/",passHref:!0,children:(0,w.jsx)(M,{children:"Return to home page"})})]}),(0,w.jsxs)(A,{container:!0,direction:"column",sx:{px:{xs:0,sm:1,md:2,lg:3},py:3},children:[(0,w.jsxs)(v,{label:"Main",children:[(0,w.jsxs)(T,{children:["EMIS",(0,w.jsx)(W,{children:e.emisNumber})]}),(0,w.jsxs)(T,{children:["School Type",(0,w.jsx)(W,{children:e.schoolType})]}),(0,w.jsxs)(T,{children:["Phone",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Email",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Address",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Website",(0,w.jsx)(W,{children:"N/A"})]})]}),(0,w.jsxs)(v,{label:"Extra",children:[(0,w.jsxs)(T,{children:["Senior High",(0,w.jsx)(W,{children:e.shsSchool?"Yes":"None"})]}),(0,w.jsxs)(T,{children:["TVET School",(0,w.jsx)(W,{children:e.tvetSchool?"Yes":"None"})]}),(0,w.jsxs)(T,{children:["ABE School",(0,w.jsx)(W,{children:e.abeSchool?"Yes":"None"})]}),(0,w.jsxs)(T,{children:["Junior High",(0,w.jsx)(W,{children:e.jhsSchool?"Yes":"None"})]}),(0,w.jsxs)(T,{children:["ALP School",(0,w.jsx)(W,{children:e.alpSchool?"Yes":"None"})]}),(0,w.jsxs)(T,{children:["Elementary",(0,w.jsx)(W,{children:e.primarySchool?"Yes":"None"})]}),(0,w.jsxs)(T,{children:["ECE School",(0,w.jsx)(W,{children:e.eceSchool?"Yes":"None"})]})]}),(0,w.jsxs)(v,{label:"Facilities",children:[(0,w.jsxs)(T,{children:["Computer Lab",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Gymnasium",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Laboratory",(0,w.jsx)(W,{children:"N/A"})]})]}),(0,w.jsxs)(v,{label:"Ratings",children:[(0,w.jsxs)(T,{children:["MOE",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Public",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["WAEC",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Basketball",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Kickball",(0,w.jsx)(W,{children:"N/A"})]}),(0,w.jsxs)(T,{children:["Football",(0,w.jsx)(W,{children:"N/A"})]})]})]})]})]})}},4823:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schools/[name]",function(){return i(8640)}])}},function(n){n.O(0,[774,888,179],(function(){return e=4823,n(n.s=e);var e}));var e=n.O();_N_E=e}]);