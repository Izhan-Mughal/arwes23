"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5311],{78999:function(e,t,r){r.d(t,{_:function(){return p},b:function(){return u}});var n=r(19642),a=r(67294),l=r(58529),c=r(60852),s=r(92506),i=(0,a.createContext)(null);function o(){var e=(0,a.useContext)(i);if(null===e){var t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,o),t}return e}function u(){var e=(0,a.useState)([]),t=e[0],r=e[1];return[t.length>0?t.join(" "):void 0,(0,a.useMemo)((function(){return function(e){var t=(0,a.useCallback)((function(e){return r((function(t){return[].concat(t,[e])})),function(){return r((function(t){var r=t.slice(),n=r.indexOf(e);return-1!==n&&r.splice(n,1),r}))}}),[]),n=(0,a.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return a.createElement(i.Provider,{value:n},e.children)}}),[r])]}function p(e){var t=e.passive,r=void 0!==t&&t,a=(0,n.gK)(e,["passive"]),i=o(),u="headlessui-label-"+(0,s.M)();(0,c.e)((function(){return i.register(u)}),[u,i.register]);var p=(0,n.gY)({},i.props,{id:u}),d=(0,n.gY)({},a,p);return r&&delete d.onClick,(0,l.sY)({props:d,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})}},85460:function(e,t,r){r.d(t,{r:function(){return m}});var n=r(19642),a=r(67294),l=r(58529),c=r(57471),s=r(62659),i=r(79016),o=r(92506),u=r(87587),p=r(56637),d=r(78999),f=(0,a.createContext)(null);f.displayName="GroupContext";var h=a.Fragment;function m(e){var t=e.checked,r=e.onChange,u=(0,n.gK)(e,["checked","onChange"]),d="headlessui-switch-"+(0,o.M)(),h=(0,a.useContext)(f),m=(0,a.useRef)(null),b=(0,c.T)(m,null===h?null:h.setSwitch),x=(0,a.useCallback)((function(){return r(!t)}),[r,t]),g=(0,a.useCallback)((function(e){if((0,i.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),x()}),[x]),v=(0,a.useCallback)((function(e){e.key!==s.R.Tab&&e.preventDefault(),e.key===s.R.Space&&x()}),[x]),j=(0,a.useCallback)((function(e){return e.preventDefault()}),[]),y=(0,a.useMemo)((function(){return{checked:t}}),[t]),O={id:d,ref:b,role:"switch",type:(0,p.f)(e,m),tabIndex:0,"aria-checked":t,"aria-labelledby":null==h?void 0:h.labelledby,"aria-describedby":null==h?void 0:h.describedby,onClick:g,onKeyUp:v,onKeyPress:j};return(0,l.sY)({props:(0,n.gY)({},u,O),slot:y,defaultTag:"button",name:"Switch"})}m.Group=function(e){var t=(0,a.useState)(null),r=t[0],n=t[1],c=(0,d.b)(),s=c[0],i=c[1],o=(0,u.f)(),p=o[0],m=o[1],b=(0,a.useMemo)((function(){return{switch:r,setSwitch:n,labelledby:s,describedby:p}}),[r,n,s,p]);return a.createElement(m,{name:"Switch.Description"},a.createElement(i,{name:"Switch.Label",props:{onClick:function(){r&&(r.click(),r.focus({preventScroll:!0}))}}},a.createElement(f.Provider,{value:b},(0,l.sY)({props:e,defaultTag:h,name:"Switch.Group"}))))},m.Label=d._,m.Description=u.d},3382:function(e,t,r){var n=r(36325),a=r(76866),l=(r(67294),r(85893));t.Z=({children:e,className:t})=>(0,a.Z)()?(0,l.jsx)("div",{className:(0,n.AK)(t,"relative w-full max-w-2xl"),children:(0,l.jsx)("div",{className:"relative z-10 filter",children:e})}):(0,l.jsx)(l.Fragment,{children:e})},48410:function(e,t,r){var n=r(59499),a=r(4730),l=r(36325),c=r(67294),s=r(85893);const i=["value","onUserInput","placeholder","className"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const p=RegExp("^\\d*(?:\\\\[.])?\\d*$"),d="w-0 p-0 text-2xl bg-transparent",f=c.memo((e=>{let{value:t,onUserInput:r,placeholder:n,className:c=d}=e,o=(0,a.Z)(e,i);return(0,s.jsx)("input",u(u({},o),{},{value:t,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,"."))||p.test((0,l.hr)(t)))&&r(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:n||"0.0",min:0,minLength:1,maxLength:79,spellCheck:"false",className:(0,l.AK)("relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary",c)}))}));f.displayName="NumericalInput",t.Z=f},23987:function(e,t,r){var n=r(59499),a=r(4730),l=r(36325),c=r(67294),s=r(85893);const i=["value","onUserInput","placeholder","className","align","fontSize"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const p=RegExp("^\\d*$"),d=c.memo((e=>{let{value:t,onUserInput:r,placeholder:n,className:c,align:o,fontSize:d="24px"}=e,f=(0,a.Z)(e,i);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("input",u({value:t,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,".").replace(/%/g,""))||p.test((0,l.hr)(t)))&&Number(t)<=100&&r(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*$",placeholder:n||"100",maxLength:3,className:(0,l.AK)("right"===o&&"text-right","font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto",c),style:{fontSize:d}},f))})}));d.displayName="PercentInput",t.Z=d},39281:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(59499),a=r(4730),l=r(36325),c=r(67294),s=r(85893);const i=["value","onUserInput","placeholder","className","align","fontSize"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const p=c.memo((e=>{let{value:t,onUserInput:r,placeholder:n,className:c="flex w-full h-full p-3 font-bold rounded overflow-ellipsis recipient-address-input bg-dark-900 placeholder-low-emphesis",align:o,fontSize:p="24px"}=e,d=(0,a.Z)(e,i);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("input",u({value:t,onChange:e=>{r(e.target.value.replace(/\s+/g,""))},inputMode:"text",title:"Wallet Address or ENS name",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address or ENS name",pattern:"^(0x[a-fA-F0-9]{40})$",type:"text",className:(0,l.AK)("right"===o&&"text-right","font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto",c),style:{fontSize:p}},d))})}));p.displayName="AddressInput";var d=p,f=r(48410);var h={Address:d,Percent:r(23987).Z,Numeric:f.Z}},64958:function(e,t,r){var n=r(59499),a=r(4730),l=r(41664),c=r(11163),s=r(67294),i=r(85893);const o=["children","exact","activeClassName"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=e=>{let{children:t,exact:r=!1,activeClassName:n="text-high-emphesis"}=e,u=(0,a.Z)(e,o);const{asPath:d,pathname:f,route:h,query:m,basePath:b}=(0,c.useRouter)(),x=s.Children.only(t),g=x.props.className||"",v=(r?(u.as||u.href.pathname||u.href)===d:d.startsWith(u.as||u.href.pathname||u.href))?"".concat(g," ").concat(n).trim():g;return(0,i.jsx)(l.default,p(p({href:u.href},u),{},{children:s.cloneElement(x,{className:v||null})}))}},9456:function(e,t,r){var n=r(85169),a=r(41626),l=r(39281),c=r(56785),s=r(16339),i=r(19266),o=r(99154),u=r(2528),p=r(67294),d=r(85893);t.Z=({label:e,value:t,token:r,showMax:f=!1,symbol:h,balance:m,field:b})=>{const{i18n:x}=(0,n.mV)(),g=(0,s.T)(),{zapIn:v}=(0,o.j$)(),{tokens:j}=(0,o.vG)(),{calculateOutputFromInput:y}=(0,o.If)(),O=(0,p.useCallback)((async e=>{g((0,i.gg)({inputValue:b===u.g.INPUT?e:await y(!v,e,j.outputToken,j.inputToken),outputValue:b===u.g.INPUT?await y(v,e,j.inputToken,j.outputToken):e}))}),[y,g,b,j.inputToken,j.outputToken,v]),w=(0,p.useCallback)((async()=>{const e=m?null===m||void 0===m?void 0:m.toExact():"0";await O(e)}),[m,O]);return(0,d.jsxs)("div",{className:"flex flex-col w-full gap-1",children:[(0,d.jsxs)("div",{className:"inline",children:[(0,d.jsx)(c.Z,{component:"span",children:e})," ",(0,d.jsx)(c.Z,{component:"span",weight:700,children:h})]}),(0,d.jsxs)("div",{className:"flex flex-row items-center gap-4 p-4 rounded bg-dark-800",children:[(0,d.jsx)("div",{className:"overflow-hidden rounded-full",children:(0,d.jsx)(a.X,{currency:r,size:40})}),(0,d.jsx)(l.Z.Numeric,{value:t,onUserInput:O}),f&&(0,d.jsx)("span",{onClick:w,className:"cursor-pointer flex items-center rounded-full h-[30px] bg-blue bg-opacity-30 hover:border-opacity-100 border border-blue border-opacity-50 text-xs font-medium text-blue px-3",children:x._(x._("Max"))})]}),(0,d.jsx)("div",{className:"flex flex-row",children:(0,d.jsxs)("div",{className:"flex gap-2 cursor-pointer",onClick:w,children:[(0,d.jsx)(c.Z,{variant:"sm",className:"text-secondary",children:x._(x._("Balance:"))}),(0,d.jsxs)(c.Z,{variant:"sm",children:[(null===m||void 0===m?void 0:m.toSignificant(6))||"0"," ",h]})]})})]})}},51566:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(59499),a=r(4730),l=r(85169),c=r(71923),s=r(71862),i=r(15097),o=r(36325),u=r(67294),p=r(85893);const d=["steps","disabled"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){let{steps:t,disabled:r=!1}=e,n=(0,a.Z)(e,d);return(0,p.jsx)("div",h(h({className:"flex justify-center"},n),{},{children:(0,p.jsxs)("div",{className:"flex justify-between w-1/2",children:[t.map(((e,n)=>(0,p.jsxs)("div",{className:"flex items-center w-full",children:[(0,p.jsx)("div",{className:(0,o.AK)(e?"bg-green":"bg-pink",(r||!t[n-1]&&0!==n)&&"bg-dark-800","min-w-5 min-h-5 rounded-full flex justify-center items-center text-xs"),children:e?"\u2713":n+1}),(0,p.jsx)("div",{className:(0,o.AK)(r&&"bg-dark-1000",e&&"bg-gradient-to-r from-green to-pink",t[n-1]?"bg-gradient-to-r from-pink to-dark-1000":"bg-dark-900","w-full h-0.5 opacity-60")})]},n))),(0,p.jsx)("div",{className:(0,o.AK)((r||!t[t.length-1])&&"bg-dark-800","min-w-5 min-h-5 rounded-full flex justify-center items-center text-xs"),children:t.length+1})]})}))}var b=r(27262),x=r(69137),g=r(12614),v=r(99154);const j=["children"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=e=>{let{children:t}=e,r=(0,a.Z)(e,j);const{i18n:n}=(0,l.mV)(),{account:o}=(0,g.a)(),{inputValue:d}=(0,v.vG)(),{balances:f,execute:h,bentoApproveCallback:y,approveCallback:w}=(0,v.If)(),{0:k,1:P}=(0,u.useState)(!1),N=(0,u.useCallback)((async()=>{P(!0);const e=await h(d);P(!1),await(null===e||void 0===e?void 0:e.wait())}),[h,d]),Z=(0,u.useCallback)((async()=>{await y.getPermit()}),[y]),C=[];w&&C.push(w[0]===b.UK.APPROVED),y&&C.push(y.approvalState===x.kG.APPROVED);const E=(0,p.jsx)("div",{className:"flex flex-col",children:(0,p.jsx)(m,{steps:C})});return o?!d||d.equalTo(c.xE)?(0,p.jsx)(s.ZP,O(O({},r),{},{disabled:!0,children:n._(n._("Enter an amount"))})):d&&f&&f.inputTokenBalance&&f.inputTokenBalance.lessThan(d)?(0,p.jsx)(s.ZP,O(O({},r),{},{disabled:!0,children:n._(n._("Insufficient Balance"))})):w&&w[0]===b.UK.PENDING?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.ZP,O(O({},r),{},{disabled:!0,children:(0,p.jsx)(i.Z,{children:n._(n._("Approving Inari to spend"))+" ".concat(w[2].currency.symbol)})})),E]}):w&&w[0]===b.UK.NOT_APPROVED?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.ZP,O(O({},r),{},{color:"pink",onClick:w[1],children:n._(n._("Approve Inari to spend"))+" ".concat(w[2].currency.symbol)})),E]}):y&&y.approvalState===x.kG.PENDING?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.ZP,O(O({},r),{},{disabled:!0,children:(0,p.jsx)(i.Z,{children:n._(n._("Approving Inari Master Contract"))})})),E]}):y&&y.approvalState===x.kG.NOT_APPROVED?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.ZP,O(O({},r),{},{color:"pink",onClick:Z,children:n._(n._("Approve Inari Master Contract"))})),E]}):(0,p.jsx)(s.ZP,O(O({},r),{},{disabled:k,color:k?"gray":"gradient",onClick:N,children:t})):(0,p.jsx)(s.ZP,O(O({},r),{},{disabled:!0,children:n._(n._("Connect Wallet"))}))}},47630:function(e,t,r){var n=r(99154),a=(r(67294),r(56785)),l=r(85893);t.Z=()=>{const{general:e}=(0,n.vG)();return(0,l.jsxs)("div",{className:"grid gap-2",children:[(0,l.jsx)(a.Z,{variant:"lg",className:"text-high-emphesis",weight:700,children:null===e||void 0===e?void 0:e.name}),(0,l.jsx)(a.Z,{children:null===e||void 0===e?void 0:e.description})]})}},16387:function(e,t,r){var n=r(85460),a=r(63801),l=r(85169),c=r(16339),s=r(19266),i=r(99154),o=(r(67294),r(56785)),u=r(85893);t.Z=()=>{const{i18n:e}=(0,l.mV)(),{zapIn:t}=(0,i.j$)(),r=(0,c.T)();return(0,u.jsx)(n.r.Group,{children:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)(n.r.Label,{className:"mr-3",children:(0,u.jsx)(o.Z,{variant:"xs",children:e._(e._("Withdraw"))})}),(0,u.jsx)(n.r,{checked:t,onChange:()=>r((0,s.TP)(!t)),className:"bg-blue bg-opacity-60 border border-blue border-opacity-80 relative inline-flex items-center h-[32px] rounded-full w-[54px] transition-colors focus:outline-none",children:(0,u.jsx)("span",{className:"".concat(t?"translate-x-[23px]":"translate-x-[1px]"," inline-block w-7 h-7 transform bg-white rounded-full transition-transform text-blue"),children:t?(0,u.jsx)(a.pOD,{}):(0,u.jsx)(a.V_R,{})})}),(0,u.jsx)(n.r.Label,{className:"ml-3",children:(0,u.jsx)(o.Z,{variant:"xs",children:e._(e._("Deposit"))})})]})})}},45897:function(e,t,r){var n=r(16339),a=r(19266),l=r(99154),c=(r(67294),r(36325)),s=r(85893);t.Z=()=>{var e;const{id:t}=(0,l.j$)(),r=(0,l.r1)(),i=(0,n.T)();return(0,s.jsx)("div",{className:"flex flex-col gap-4 z-10 relative",children:null===(e=Object.values(r))||void 0===e?void 0:e.map((e=>(0,s.jsx)("div",{onClick:()=>i((0,a.wU)(e.getStrategy())),className:(0,c.AK)(e.id===t?"border-gradient-r-blue-pink-dark-800":"bg-dark-900","cursor-pointer border border-transparent pl-5 py-2 rounded whitespace-nowrap w-full font-bold h-[48px] flex items-center text-sm"),children:e.general.name},e.id)))})}},43165:function(e,t,r){var n=r(63153),a=r(99154),l=(r(67294),r(56785)),c=r(85893);t.Z=()=>{const{general:e}=(0,a.vG)();return(0,c.jsx)("div",{className:"flex gap-3 items-center text-high-emphesis",children:null===e||void 0===e?void 0:e.steps.map((e=>(0,c.jsx)(l.Z,{weight:700,variant:"lg",children:e},e))).reduce(((e,t)=>null===e?t:(0,c.jsxs)(c.Fragment,{children:[e," ",(0,c.jsx)("div",{className:"rounded-full p-1 bg-dark-800 border-[3px] border-dark-900 relative z-10",children:(0,c.jsx)(n.LZ3,{width:16,height:16})})," ",t]})),null)})}},87433:function(e,t,r){var n=r(85169),a=r(71923),l=r(63929),c=r(64958),s=r(56785),i=r(87269),o=r(10552),u=r(90662),p=r(12614),d=r(49552),f=r.n(d),h=r(25675),m=r(67294),b=r(85893);const x=({children:e,feature:t})=>{const{i18n:r}=(0,n.mV)(),{chainId:d,library:x,account:g}=(0,p.a)(),v=(0,b.jsx)(c.Z,{href:"/swap",children:(0,b.jsx)("a",{className:"text-blue focus:outline-none",children:r._(r._("home page"))})}),j=Object.entries(i.Z).reduce(((e,[r,n])=>(n.includes(t)&&e.push(r),e)),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z.Controlled,{isOpen:!!g&&!i.Z[d].includes(t),onDismiss:()=>null,transparent:!0,children:(0,b.jsxs)("div",{className:"flex flex-col justify-center p-4 mt-10 gap-7 lg:mt-0",children:[(0,b.jsx)(s.Z,{variant:"h1",className:"max-w-2xl text-center text-white",weight:700,children:r._(r._("Roll it back - this feature is not yet supported on {0}.",{0:o.z[d]}))}),(0,b.jsx)(s.Z,{className:"text-center",children:(0,b.jsx)(n.cC,{id:"Either return to the {link}, or change to an available network.",values:{link:v},components:m.Fragment})}),(0,b.jsx)(s.Z,{className:"uppercase text-white text-center text-lg tracking-[.2rem]",weight:700,children:r._(r._("Available Networks"))}),(0,b.jsx)("div",{className:"flex justify-center gap-5 md:gap-10",children:j.map(((e,t)=>(0,b.jsxs)("button",{className:"flex flex-col items-center justify-start gap-2 text-primary hover:text-white",onClick:()=>{const t=u.b[e];f().set("chainId",e),e===a.a_.ETHEREUM.toString()?null===x||void 0===x||x.send("wallet_switchEthereumChain",[{chainId:"0x1"},g]):e===a.a_.KOVAN.toString()?null===x||void 0===x||x.send("wallet_switchEthereumChain",[{chainId:"0x2A"},g]):null===x||void 0===x||x.send("wallet_addEthereumChain",[t,g])},children:[(0,b.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,b.jsx)(h.default,{src:o.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,b.jsx)(s.Z,{className:"text-sm",children:o.z[e]})]},t)))})]})}),e]})};t.Z=e=>({children:t})=>(0,b.jsx)(x,{feature:e,children:t})},2528:function(e,t,r){let n;r.d(t,{g:function(){return n}}),function(e){e.INPUT="INPUT",e.OUTPUT="OUTPUT"}(n||(n={}))}}]);