(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1874],{92552:function(e,s,r){"use strict";var t=r(59499),a=r(4730),n=(r(67294),r(85893));const i=["set","className","checked"];function l(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?l(Object(r),!0).forEach((function(s){(0,t.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}s.Z=function(e){let{set:s,className:r="",checked:t}=e,l=(0,a.Z)(e,i);return(0,n.jsx)("div",{className:"relative flex items-center justify-center",children:(0,n.jsx)("input",c({type:"checkbox",onChange:e=>s?s(e.target.checked):null,className:"border border-dark-700 checked:bg-gradient-to-r checked:border-[3px] checked:from-blue checked:to-pink cursor-pointer appearance-none h-5 w-5 rounded-[4px] bg-dark-900 disabled:bg-dark-1000 disabled:border-dark-800 ".concat(r),checked:t},l))})}},44345:function(e,s,r){"use strict";var t=r(49196),a=r(85220),n=r(63801),i=r(67294),l=r(56785),c=r(85893);s.Z=({title:e,open:s,onClose:r,children:o,closeTrigger:d})=>(0,c.jsx)(t.u.Root,{show:s,as:i.Fragment,children:(0,c.jsx)(a.V,{as:"div",static:!0,className:"fixed inset-0 overflow-hidden z-20",open:s,onClose:r,children:(0,c.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,c.jsx)(t.u.Child,{as:i.Fragment,enter:"ease-in-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,c.jsx)(a.V.Overlay,{className:"absolute inset-0 bg-black bg-opacity-75 transition-opacity"})}),(0,c.jsx)("div",{className:"max-h-[fit-content] absolute bottom-0 fixed right-0 left-0 w-full flex",children:(0,c.jsx)(t.u.Child,{as:i.Fragment,enter:"transform transition ease-in-out duration-200 sm:duration-700",enterFrom:"translate-y-full",enterTo:"translate-y-0",leave:"transform transition ease-in-out duration-200 sm:duration-700",leaveFrom:"translate-y-0",leaveTo:"translate-y-full",children:(0,c.jsx)("div",{className:"w-full rounded-t overflow-hidden",children:e?(0,c.jsxs)("div",{className:"flex flex-col shadow-xl overflow-y-auto h-full bg-gradient-to-r from-blue to-pink",children:[(0,c.jsx)("div",{className:"p-5",children:(0,c.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,c.jsx)(l.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:e}),d||(0,c.jsxs)("button",{onClick:r,children:[(0,c.jsx)("span",{className:"sr-only",children:"Close panel"}),(0,c.jsx)(n.b0D,{className:"h-6 w-6 text-high-emphesis","aria-hidden":"true"})]})]})}),o]}):o})})})]})})})},85874:function(e,s,r){"use strict";r.d(s,{a:function(){return c}});var t=r(63153),a=r(85169),n=r(67294),i=r(40195),l=r(85893);const c=({pageIndex:e,pageSize:s,totalItems:r,gotoPage:c,canNextPage:o,canPreviousPage:d,loading:h})=>{const{i18n:x}=(0,a.mV)(),u=(0,n.useMemo)((()=>(0,i.z)(e,s,r,x._(x._("None")),h,x._(x._("Loading...")))),[e,s,r,x,h]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"text-right -mt-2 py-3 select-none hidden lg:block",children:[u," ",(0,l.jsx)(t.wyc,{onClick:()=>c(e-1),width:24,height:24,className:"inline-block -mt-1 ".concat(d?"text-high-emphesis cursor-pointer":"text-gray-500")}),(0,l.jsx)(t.XCv,{onClick:()=>c(e+1),width:24,height:24,className:"inline-block -mt-1 ".concat(o?"text-high-emphesis cursor-pointer":"text-gray-500")})]}),(0,l.jsxs)("div",{className:"select-none mb-16 lg:hidden",children:[(0,l.jsxs)("div",{className:"rounded-t overflow-hidden border border-dark-700 bg-dark-800 flex justify-between p-3",children:[(0,l.jsx)("span",{children:x._(x._("Showing Results"))}),(0,l.jsxs)("span",{className:"text-high-emphesis",children:[" ",u]})," "]}),(0,l.jsxs)("div",{className:"border-b rounded-b border-l border-r border-dark-700 bg-dark-900 overflow-hidden flex justify-between",children:[(0,l.jsx)("div",{onClick:()=>c(e-1),className:"flex-grow border-r p-3 border-dark-700 ".concat(d?"text-high-emphesis cursor-pointer":"text-gray-500"),children:x._(x._("Previous"))}),(0,l.jsx)("div",{onClick:()=>c(e+1),className:"flex-grow p-3 text-right ".concat(o?"text-high-emphesis cursor-pointer":"text-gray-500"),children:x._(x._("Next"))})]})]})]})}},40195:function(e,s,r){"use strict";r.d(s,{z:function(){return t},X:function(){return a}});const t=(e,s,r,t,a,n)=>{if(0===r)return a?n:t;{const t=e*s+s;return"".concat(e*s+1,"-").concat(t<r?t:r," of ").concat(r)}},a=e=>{const s=e.substring(0,6),r=e.substring(e.length-4);return"".concat(s,"...").concat(r)}},91282:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return X}});var t=r(85169),a=r(22680),n=r(41664),i=r(67294),l=r(71862),c=r(56785),o=r(85893);const d=()=>{const{i18n:e}=(0,t.mV)();return(0,o.jsxs)(a.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("Provide liquidity & earn."))}),(0,o.jsx)(c.Z,{variant:"sm",weight:400,children:e._(e._("Earn LP fees by depositing tokens to the platform."))})]}),(0,o.jsxs)("div",{className:"flex gap-3",children:[(0,o.jsx)(n.default,{href:"/farm",passHref:!0,children:(0,o.jsx)(l.ZP,{color:"blue",size:"sm",children:e._(e._("My Positions"))})}),(0,o.jsx)(n.default,{href:"/trident/create",passHref:!0,children:(0,o.jsx)(l.ZP,{id:"btn-create-new-pool",size:"sm",children:e._(e._("Create New Pool"))})})]})]})};var h=r(63153),x=r(26822),u=r(16339),m=r(53654),p=r(92552),g=r(44345);const f=({children:e,title:s})=>(0,o.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,o.jsx)(c.Z,{variant:"sm",weight:700,children:s}),(0,o.jsx)("div",{className:"flex flex-col gap-4",children:e})]}),j=({title:e,checked:s,setter:r})=>(0,o.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,o.jsx)(p.Z,{checked:s,set:r}),(0,o.jsx)("span",{className:"text-xs",children:e})]}),v=(e,s,r)=>{s.includes(e)?r(s.filter((s=>s!==e))):r([...s,e])},b=()=>{const{feeTiers:e}=(0,u.C)(x.cd),s=(0,u.T)();return(0,o.jsx)(f,{title:"Fee Tiers",children:[m.at.HIGH,m.at.DEFAULT,m.at.MEDIUM,m.at.LOW].map((r=>(0,o.jsx)(j,{title:"".concat(r/100,"%"),checked:e.includes(r),setter:()=>v(r,e,(e=>s((0,x.Gu)(e))))},r)))})},y=()=>{const{showTWAPOnly:e}=(0,u.C)(x.cd),s=(0,u.T)();return(0,o.jsxs)("div",{className:"hidden lg:flex flex-col gap-6 w-52 pt-2",children:[(0,o.jsx)(f,{title:"TWAP Oracles",children:(0,o.jsx)(j,{title:"Show oracle pairs only",checked:e,setter:()=>s((0,x.M8)(!e))})}),(0,o.jsx)(b,{})]})},w=()=>{const{showTWAPOnly:e}=(0,u.C)(x.cd),s=(0,u.T)();return(0,o.jsxs)("div",{className:"flex flex-col gap-5 p-5",children:[(0,o.jsx)("div",{className:"flex items-center justify-between gap-3",children:(0,o.jsx)(c.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:"TWAP Oracles:"})}),(0,o.jsxs)("div",{className:"flex flex-row gap-3 items-center",onClick:()=>s((0,x.M8)(!e)),children:[(0,o.jsx)(p.Z,{checked:e}),(0,o.jsx)(c.Z,{className:"text-secondary",children:"Show oracle pairs only"})]})]})},N=()=>{const{feeTiers:e}=(0,u.C)(x.cd),s=(0,u.T)();return(0,o.jsxs)("div",{className:"flex flex-col gap-5 p-5",children:[(0,o.jsx)("div",{className:"flex items-center justify-between gap-3",children:(0,o.jsx)(c.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:"By Fee Tier:"})}),[m.at.HIGH,m.at.DEFAULT,m.at.MEDIUM,m.at.LOW].map((r=>(0,o.jsxs)("div",{className:"flex flex-row gap-3 items-center",onClick:()=>v(r,e,(e=>s((0,x.Gu)(e)))),children:[(0,o.jsx)(p.Z,{checked:e.includes(r)}),(0,o.jsxs)(c.Z,{className:"text-secondary",children:[r/100,"%"]})]},r)))]})},k=()=>{const{i18n:e}=(0,t.mV)(),{0:s,1:r}=(0,i.useState)(!1),{feeTiers:a,showTWAPOnly:n,farmsOnly:c}=(0,u.C)(x.cd),d=c||n||a.length>0;return(0,o.jsxs)("div",{className:"lg:hidden",children:[(0,o.jsx)("div",{onClick:()=>r(!0),className:"hover:cursor-pointer",children:(0,o.jsx)("svg",{width:"25",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M10 0a1.5 1.5 0 0 1 1.5 1.5V3h12a1.5 1.5 0 0 1 0 3h-12v1.5a1.5 1.5 0 0 1-3 0v-6A1.5 1.5 0 0 1 10 0ZM0 4.5A1.5 1.5 0 0 1 1.5 3H5a1.5 1.5 0 1 1 0 3H1.5A1.5 1.5 0 0 1 0 4.5ZM13 14H1.5a1.5 1.5 0 0 0 0 3H13a1.5 1.5 0 0 0 0-3Zm3.5 1.5v-3a1.5 1.5 0 0 1 3 0V14h4a1.5 1.5 0 0 1 0 3h-4v1.5a1.5 1.5 0 0 1-3 0v-3Z",fill:d?"#f139c3":"#E3E3E3"})})}),(0,o.jsx)(g.Z,{title:e._(e._("Select Filters")),open:s,onClose:()=>r(!1),closeTrigger:(0,o.jsx)(l.ZP,{size:"sm",onClick:()=>r(!1),children:(0,o.jsx)("span",{className:"px-3",children:e._(e._("Apply & Close"))})}),children:(0,o.jsx)("div",{className:"bg-dark-700 rounded-t",children:(0,o.jsxs)("div",{className:"bg-dark-800 rounded-t",children:[(0,o.jsx)(w,{}),(0,o.jsx)("div",{className:"relative bg-dark-900 rounded-t",children:(0,o.jsx)(N,{})})]})})})]})},P=()=>{const{i18n:e}=(0,t.mV)(),s=(0,u.T)();return(0,o.jsxs)("div",{className:"flex flex-grow items-center gap-4 w-full sm:w-auto",children:[(0,o.jsxs)("div",{className:"flex flex-grow gap-2 items-center rounded border border-dark-800 bg-dark-900 bg-opacity-50 py-2 px-3 w-full sm:w-auto",children:[(0,o.jsx)(h.W1M,{strokeWidth:3,width:20,height:20}),(0,o.jsx)("input",{className:"bg-transparent text-high-emphesis w-full placeholder:text-low-emphesis",placeholder:e._(e._("Search by token or pair")),onChange:e=>s((0,x.jr)(e.target.value))})]}),(0,o.jsx)(k,{})]})};var O=r(29763),_=r(49196),C=r(77062);const T=()=>{const{sort:e}=(0,u.C)(x.cd),s=(0,u.T)();return(0,o.jsx)("div",{className:"flex gap-2 items-center",children:(0,o.jsxs)(O.v,{as:"div",className:"relative inline-block text-left",children:[(0,o.jsx)("div",{children:(0,o.jsx)(O.v.Button,{className:"w-full px-4 py-2.5 text-sm font-bold bg-transparent border rounded shadow-sm text-primary border-dark-800 hover:bg-dark-900",children:(0,o.jsxs)("div",{className:"flex flex-row",children:[e,(0,o.jsx)(h.v4q,{className:"w-5 h-5 ml-2 -mr-1","aria-hidden":"true"})]})})}),(0,o.jsx)(_.u,{as:i.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,o.jsx)(O.v.Items,{static:!0,className:"w-full absolute rounded mt-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-dark-800 bg-dark-1000 shadow-md",children:Object.values(x.JD).filter((s=>s!==e)).map(((e,r)=>(0,o.jsx)(O.v.Item,{children:({active:r})=>(0,o.jsx)("div",{className:(0,C.A)(r?"bg-dark-700 text-high-emphesis":"text-primary","group flex items-center px-4 py-2 text-sm hover:bg-dark-900 hover:cursor-pointer focus:bg-dark-900 rounded font-bold"),onClick:()=>{s((0,x.Ew)(e))},children:e})},r)))})})]})})};var F=r(59499),Z=r(85874),E=r(89046),S=r(79521),A=r(25675);const H=()=>{const{i18n:e}=(0,t.mV)(),{searchQuery:s}=(0,u.C)(x.cd);return(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:[(0,o.jsx)(c.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:s?e._(e._("Search results for '{searchQuery}'",{searchQuery:s})):e._(e._("Top Liquidity Pools"))}),(0,o.jsxs)("div",{className:"flex gap-1",children:[(0,o.jsx)(A.default,{src:"https://app.sushi.com/images/rss.svg",width:16,height:16,alt:"rss icon"}),(0,o.jsx)("div",{className:"text-xs text-secondary",children:e._(e._("*Pairs with this symbol have a TWAP oracle."))})]})]})},D=(e,s)=>{(e=>{const{searchQuery:s,showTWAPOnly:r,feeTiers:t}=(0,u.C)(x.cd);(0,i.useMemo)((()=>e("assets",{searchQuery:s,twapEnabled:r})),[s,e,r]),(0,i.useMemo)((()=>e("swapFee",{feeTiersSelected:t})),[t,e])})(e),(e=>{const{sort:s}=(0,u.C)(x.cd);(0,i.useLayoutEffect)((()=>{e(U[s],!0)}),[s,e])})(s)};var M=r(17141),W=r(47448),I=r(25361),L=r(12614),V=r(50484),z=r(85843),G=r(26797);function q(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function R(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?q(Object(r),!0).forEach((function(s){(0,F.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}const U={[x.JD.TVL]:"liquidityUSD",[x.JD.APY]:"apy"};var B=()=>{const{i18n:e}=(0,t.mV)(),{config:s,loading:r,error:a}=(()=>{const{chainId:e}=(0,L.a)(),{data:s,error:r,isValidating:t}=(0,I.fv)(),a=(0,i.useMemo)((()=>[{Header:"Assets",accessor:"assets",Cell:({value:e,row:{original:s}})=>(0,o.jsx)(z.y,{assets:e,twapEnabled:s.twapEnabled}),filter:G._},{Header:"Pool Type",accessor:"type",maxWidth:100,Cell:e=>(0,o.jsx)(M.Z,{label:V.kv[e.value],color:V.bG[e.value]}),filter:(e,s,r)=>e.filter((e=>!r.length||r.includes(e.values.type)))},{Header:"Fee Tier",accessor:"swapFee",maxWidth:100,Cell:e=>(0,o.jsxs)("span",{children:[e.value/100,"%"]}),filter:G.S},{Header:"TVL",accessor:"liquidityUSD",maxWidth:100,Cell:e=>(0,o.jsx)("span",{children:(0,W.uf)(e.value,!0)})},{Header:"APY",accessor:"apy",maxWidth:100,Cell:({row:r})=>{var t;const{data:a}=(0,I.IA)({chainId:e,variables:{where:{id_in:null===s||void 0===s?void 0:s.map((e=>e.address.toLowerCase()))}},shouldFetch:!!e&&!!s});return(0,o.jsx)("span",{children:(0,W.T3)(null===a||void 0===a||null===(t=a[r.id])||void 0===t?void 0:t.apy)})}},{Header:"Actions",accessor:"actions",maxWidth:100,Cell:()=>(0,o.jsx)(l.ZP,{color:"blue",size:"sm",variant:"empty",children:"Invest"})}]),[e,s]);return(0,i.useMemo)((()=>({config:{columns:a,data:null!==s&&void 0!==s?s:[],initialState:{pageSize:15,sortBy:[{id:"liquidityUSD",desc:!0}]},autoResetFilters:!1},loading:t,error:r})),[a,s,r,t])})(),{getTableProps:c,getTableBodyProps:d,headerGroups:h,rows:x,page:u,gotoPage:m,canPreviousPage:p,canNextPage:g,prepareRow:f,setFilter:j,toggleSortBy:v,state:{pageIndex:b,pageSize:y}}=(0,S.useTable)(s,S.useFlexLayout,S.useFilters,S.useSortBy,S.useFlexLayout,S.usePagination);return D(j,v),(0,o.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,o.jsx)(H,{}),(0,o.jsx)("div",{className:E._O,children:(0,o.jsxs)("table",R(R({},c()),{},{className:E.RR,children:[(0,o.jsx)("thead",{children:h.map(((s,t)=>(0,i.createElement)("tr",R(R({},s.getHeaderGroupProps()),{},{key:t}),s.headers.map(((t,n)=>(0,i.createElement)("th",R(R({},t.getHeaderProps()),{},{key:n,className:(0,E.G0)(n,s.headers.length)}),t.render("Header"),0===n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue inline-block ml-3 transition ".concat(r?"opacity-100":"opacity-0")}),a&&(0,o.jsx)("span",{className:"ml-2 text-sm italic text-red",children:e._(e._("\u26a0\ufe0f Loading Error"))})]})))))))}),(0,o.jsx)("tbody",R(R({},d()),{},{children:u.map(((e,s)=>(f(e),(0,o.jsx)(n.default,{href:{pathname:"/trident/pool",query:{tokens:e.original.assets.map((e=>e.address)),fee:e.original.swapFee,twap:e.original.twapEnabled}},passHref:!0,children:(0,o.jsx)("tr",R(R({},e.getRowProps()),{},{className:E.vu,children:e.cells.map(((s,r)=>(0,o.jsx)("td",R(R({},s.getCellProps()),{},{className:(0,E.zm)(r,e.cells.length),children:s.render("Cell")}),r)))}))},s))))}))]}))}),(0,o.jsx)(Z.a,{pageIndex:b,pageSize:y,totalItems:x.length,gotoPage:m,canPreviousPage:p,canNextPage:g,loading:r})]})};const Q=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{}),(0,o.jsx)(a.A9,{children:(0,o.jsxs)("div",{className:"flex gap-6",children:[(0,o.jsx)(y,{}),(0,o.jsx)("div",{className:"flex w-full",children:(0,o.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between gap-4 items-center",children:[(0,o.jsx)(P,{}),(0,o.jsx)(T,{})]}),(0,o.jsx)(B,{})]})})]})})]});Q.Layout=a.ZP;var X=Q},30677:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trident/pools",function(){return r(91282)}])}},function(e){e.O(0,[9521,1626,7879,9774,2888,179],(function(){return s=30677,e(e.s=s);var s}));var s=e.O();_N_E=s}]);