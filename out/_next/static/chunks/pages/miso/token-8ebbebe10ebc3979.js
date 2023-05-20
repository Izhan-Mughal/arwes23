(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6341],{18261:function(e,t,n){"use strict";n.d(t,{E:function(){return k}});var r=n(19642),i=n(67294),o=n(133),a=n(58529),s=n(62659),l=n(60852),c=n(92506),d=n(35057),u=n(87587),p=n(61145);var h,v,f=n(78999);!function(e){e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption"}(v||(v={}));var m=((h={})[v.RegisterOption]=function(e,t){return(0,r.gY)({},e,{options:[].concat(e.options,[{id:t.id,element:t.element,propsRef:t.propsRef}])})},h[v.UnregisterOption]=function(e,t){var n=e.options.slice(),i=e.options.findIndex((function(e){return e.id===t.id}));return-1===i?e:(n.splice(i,1),(0,r.gY)({},e,{options:n}))},h),b=(0,i.createContext)(null);function g(e){var t=(0,i.useContext)(b);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+k.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,g),n}return t}function y(e,t){return(0,o.E)(t.type,m,e,t)}b.displayName="RadioGroupContext";var x;function k(e){var t=e.value,n=e.onChange,o=e.disabled,l=void 0!==o&&o,h=(0,r.gK)(e,["value","onChange","disabled"]),m=(0,i.useReducer)(y,{options:[]}),g=m[0].options,x=m[1],k=(0,f.b)(),j=k[0],w=k[1],O=(0,u.f)(),T=O[0],_=O[1],N="headlessui-radiogroup-"+(0,c.M)(),S=(0,i.useRef)(null),C=(0,i.useMemo)((function(){return g.find((function(e){return!e.propsRef.current.disabled}))}),[g]),E=(0,i.useMemo)((function(){return g.some((function(e){return e.propsRef.current.value===t}))}),[g,t]),I=(0,i.useCallback)((function(e){var r;if(l)return!1;if(e===t)return!1;var i=null==(r=g.find((function(t){return t.propsRef.current.value===e})))?void 0:r.propsRef.current;return!(null==i?void 0:i.disabled)&&(n(e),!0)}),[n,t,l,g]);(0,p.B)({container:S.current,accept:function(e){return"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var A=(0,i.useCallback)((function(e){if(S.current){var t=g.filter((function(e){return!1===e.propsRef.current.disabled})).map((function(e){return e.element.current}));switch(e.key){case s.R.ArrowLeft:case s.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){var n=g.find((function(e){return e.element.current===document.activeElement}));n&&I(n.propsRef.current.value)}break;case s.R.ArrowRight:case s.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(t,d.TO.Next|d.TO.WrapAround)===d.fE.Success){var r=g.find((function(e){return e.element.current===document.activeElement}));r&&I(r.propsRef.current.value)}break;case s.R.Space:e.preventDefault(),e.stopPropagation();var i=g.find((function(e){return e.element.current===document.activeElement}));i&&I(i.propsRef.current.value)}}}),[S,g,I]),D=(0,i.useCallback)((function(e){return x((0,r.gY)({type:v.RegisterOption},e)),function(){return x({type:v.UnregisterOption,id:e.id})}}),[x]),P=(0,i.useMemo)((function(){return{registerOption:D,firstOption:C,containsCheckedOption:E,change:I,disabled:l,value:t}}),[D,C,E,I,l,t]),Z={ref:S,id:N,role:"radiogroup","aria-labelledby":j,"aria-describedby":T,onKeyDown:A};return i.createElement(_,{name:"RadioGroup.Description"},i.createElement(w,{name:"RadioGroup.Label"},i.createElement(b.Provider,{value:P},(0,a.sY)({props:(0,r.gY)({},h,Z),defaultTag:"div",name:"RadioGroup"}))))}!function(e){e[e.Empty=1]="Empty",e[e.Active=2]="Active"}(x||(x={}));k.Option=function e(t){var n=(0,i.useRef)(null),o="headlessui-radiogroup-option-"+(0,c.M)(),s=(0,f.b)(),d=s[0],p=s[1],h=(0,u.f)(),v=h[0],m=h[1],b=function(e){void 0===e&&(e=0);var t=(0,i.useState)(e),n=t[0],r=t[1];return{addFlag:(0,i.useCallback)((function(e){return r((function(t){return t|e}))}),[r]),hasFlag:(0,i.useCallback)((function(e){return Boolean(n&e)}),[n]),removeFlag:(0,i.useCallback)((function(e){return r((function(t){return t&~e}))}),[r]),toggleFlag:(0,i.useCallback)((function(e){return r((function(t){return t^e}))}),[r])}}(x.Empty),y=b.addFlag,j=b.removeFlag,w=b.hasFlag,O=t.value,T=t.disabled,_=void 0!==T&&T,N=(0,r.gK)(t,["value","disabled"]),S=(0,i.useRef)({value:O,disabled:_});(0,l.e)((function(){S.current.value=O}),[O,S]),(0,l.e)((function(){S.current.disabled=_}),[_,S]);var C=g([k.name,e.name].join(".")),E=C.registerOption,I=C.disabled,A=C.change,D=C.firstOption,P=C.containsCheckedOption,Z=C.value;(0,l.e)((function(){return E({id:o,element:n,propsRef:S})}),[o,E,n,t]);var R=(0,i.useCallback)((function(){var e;A(O)&&(y(x.Active),null==(e=n.current)||e.focus())}),[y,A,O]),F=(0,i.useCallback)((function(){return y(x.Active)}),[y]),L=(0,i.useCallback)((function(){return j(x.Active)}),[j]),M=(null==D?void 0:D.id)===o,U=I||_,H=Z===O,G={ref:n,id:o,role:"radio","aria-checked":H?"true":"false","aria-labelledby":d,"aria-describedby":v,"aria-disabled":!!U||void 0,tabIndex:U?-1:H||!P&&M?0:-1,onClick:U?void 0:R,onFocus:U?void 0:F,onBlur:U?void 0:L},B=(0,i.useMemo)((function(){return{checked:H,disabled:U,active:w(x.Active)}}),[H,U,w]);return i.createElement(m,{name:"RadioGroup.Description"},i.createElement(p,{name:"RadioGroup.Label"},(0,a.sY)({props:(0,r.gY)({},N,G),slot:B,defaultTag:"div",name:"RadioGroup.Option"})))},k.Label=f._,k.Description=u.d},13752:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(59499),i=n(4730),o=n(36325),a=n(25675);var s=n(85893);const l=["src","width","height","layout"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=e=>{let{src:t,width:n,height:r,layout:c}=e,u=(0,i.Z)(e,l);const p=parseInt(String(r),10)>=40&&parseInt(String(n),10)>=40,h="string"===typeof t&&t.includes("http")?o.HT:void 0;return(0,s.jsx)("div",{style:{width:n,height:r},className:"overflow-hidden rounded",children:p?(0,s.jsx)(a.default,d({loader:h,src:t,width:n,height:r,layout:c,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((f=n,m=r,v='\n<svg width="'.concat(f,'" height="').concat(m,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(f,'" height="').concat(m,'" fill="#333" />\n  <rect id="r" width="').concat(f,'" height="').concat(m,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(f,'" to="').concat(f,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(v)))},u)):(0,s.jsx)(a.default,d({loader:h,src:t,width:n,height:r,layout:c,placeholder:"empty"},u))});var v,f,m}},72356:function(e,t,n){"use strict";var r=n(85169),i=n(71923),o=n(25401),a=n(64527),s=n(12614),l=n(67294);t.Z=()=>{const{i18n:e}=(0,r.mV)(),{chainId:t}=(0,s.a)(),n=(0,l.useCallback)((t=>({[a.iv.FIXED]:e._(e._("Fixed")),[a.iv.SUSHI]:e._(e._("NEXUSSwap")),[a.iv.MINTABLE]:e._(e._("Mintable"))}[t])),[e]);return{map:(0,l.useMemo)((()=>{var e,n,r,s,l,c,d,u,p,h,v,f;if(t)return{[null===(e=o[t])||void 0===e||null===(n=e[i.bk[t]])||void 0===n?void 0:n.contracts.FixedToken.address]:a.iv.FIXED,[null===(r=o[t])||void 0===r||null===(s=r[i.bk[t]])||void 0===s?void 0:s.contracts.SushiToken.address]:a.iv.SUSHI,[null===(l=o[t])||void 0===l||null===(c=l[i.bk[t]])||void 0===c?void 0:c.contracts.MintableToken.address]:a.iv.MINTABLE,[a.iv.FIXED]:null===(d=o[t])||void 0===d||null===(u=d[i.bk[t]])||void 0===u?void 0:u.contracts.FixedToken,[a.iv.SUSHI]:null===(p=o[t])||void 0===p||null===(h=p[i.bk[t]])||void 0===h?void 0:h.contracts.SushiToken,[a.iv.MINTABLE]:null===(v=o[t])||void 0===v||null===(f=v[i.bk[t]])||void 0===f?void 0:f.contracts.MintableToken}}),[t]),templateIdToLabel:n}}},64527:function(e,t,n){"use strict";let r,i,o,a,s;n.d(t,{sg:function(){return r},tn:function(){return i},wo:function(){return o},Fh:function(){return a},iv:function(){return s}}),function(e){e[e.PostAuctionLauncher=1]="PostAuctionLauncher"}(r||(r={})),function(e){e[e.CROWDSALE=1]="CROWDSALE",e[e.DUTCH_AUCTION=2]="DUTCH_AUCTION",e[e.BATCH_AUCTION=3]="BATCH_AUCTION",e[e.HYPERBOLIC_AUCTION=4]="HYPERBOLIC_AUCTION"}(i||(i={})),function(e){e[e.LIVE=1]="LIVE",e[e.UPCOMING=2]="UPCOMING",e[e.FINISHED=3]="FINISHED"}(o||(o={})),function(e){e.DEFI="DeFi",e.GAMING="Gaming",e.UTILITY="Utility",e.SOCIAL="Social",e.GOVERNANCE="Governance",e.NFTS="NFTs"}(a||(a={})),function(e){e[e.FIXED=0]="FIXED",e[e.MINTABLE=1]="MINTABLE",e[e.SUSHI=2]="SUSHI"}(s||(s={}))},12281:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(19485);const i=n(74231).Z_().test("is-address","${value} is not a valid address",(e=>{if(0===(null===e||void 0===e?void 0:e.length))return!0;try{return!(!e||!(0,r.Kn)(e))}catch{return!1}}))},77191:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(63153),i=n(85169),o=n(71862),a=n(56785),s=n(38239),l=n(59499),c=n(95496),d=n(71923),u=n(25401),p=n(10145),h=n(12614),v=n(67294),f=n(87536),m=n(85893);var b=({})=>{var e,t;const{chainId:n}=(0,h.a)(),{i18n:r}=(0,i.mV)(),o=(0,f.qo)({name:"tokenTypeAddress"});return(0,m.jsxs)(p.Z.Section,{header:(0,m.jsx)(p.Z.Section.Header,{header:r._(r._("Token Details"))}),className:"pt-8",children:[(0,m.jsx)("div",{className:"col-span-6",children:(0,m.jsx)(p.Z.TextField,{name:"tokenName",label:r._(r._("Name*")),helperText:r._(r._("This will be the name of your token. Choose wisely, this is final and immutable.")),placeholder:"The name of your token"})}),(0,m.jsx)("div",{className:"col-span-6",children:(0,m.jsx)(p.Z.TextField,{name:"tokenSymbol",label:r._(r._("Symbol*")),helperText:r._(r._("This will be the symbol of your token. Choose wisely, this is final and immutable.")),placeholder:"The symbol of your token"})}),(0,m.jsx)("div",{className:"col-span-6",children:(0,m.jsx)(p.Z.TextField,{name:"tokenSupply",label:r._(r._("Initial Supply*")),helperText:o===(n?null===(e=u[n])||void 0===e||null===(t=e[d.bk[n]])||void 0===t?void 0:t.contracts.FixedToken.address:void 0)?r._(r._("This will be the initial supply of your token. Because your token type is set to fixed. This value will be final and immutable")):r._(r._("This will be the initial supply of your token.")),placeholder:"The name of your token"})})]})},g=n(18261),y=n(42144),x=n(72356),k=n(64527),j=n(36325);var w=()=>{const{watch:e,setValue:t}=(0,f.Gc)(),n=e("tokenTypeAddress"),{i18n:r}=(0,i.mV)(),{map:o,templateIdToLabel:s}=(0,x.Z)(),l=[{icon:(0,m.jsx)(y.Wh,{height:83,width:83}),address:null===o||void 0===o?void 0:o[k.iv.FIXED],value:k.iv.FIXED,label:s(k.iv.FIXED),description:r._(r._('A "standard" ERC20 token with a fixed supply and protections against further token minting or burning.'))},{icon:(0,m.jsx)(y.ZF,{height:83,width:83}),address:null===o||void 0===o?void 0:o[k.iv.MINTABLE],value:k.iv.MINTABLE,label:s(k.iv.MINTABLE),description:r._(r._("An ERC20 token with a function allowing further minting at a later date. Creators will have to assign an owner for the minting controls."))},{icon:(0,m.jsx)(y.tG,{height:83,width:83}),address:null===o||void 0===o?void 0:o[k.iv.SUSHI],value:k.iv.SUSHI,label:s(k.iv.SUSHI),description:r._(r._("NEXUSSwap tokens function similar to mintable tokens but with additional capabilities built into the token. Creators will have to assign an owner address for token functions during minting."))}];return(0,m.jsx)(p.Z.Section,{columns:6,header:(0,m.jsx)(p.Z.Section.Header,{header:r._(r._("Select Token Type")),subheader:r._(r._("Decide on the type of token"))}),children:(0,m.jsx)("div",{className:"col-span-6",children:(0,m.jsxs)(g.E,{value:n,onChange:e=>t("tokenTypeAddress",e),className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10",children:[(0,m.jsx)("input",{className:"hidden",name:"tokenTypeAddress",value:n,onChange:()=>{}}),l.map((({icon:e,value:t,address:n,label:r,description:i})=>(0,m.jsx)(g.E.Option,{value:n,children:({checked:t})=>(0,m.jsxs)("div",{className:(0,j.AK)(t?"bg-dark-1000/40":"bg-dark-900","flex flex-col gap-4 border border-dark-800 p-5 rounded h-full cursor-pointer"),children:[(0,m.jsx)(a.Z,{variant:"lg",weight:700,className:"text-high-emphesis",children:r}),e,(0,m.jsx)(a.Z,{className:"text-high-emphesis",children:i})]})},t)))]})})})},O=n(22244),T=n(63929),_=n(84243),N=n(83304),S=n(68411),C=n(3085);var E=()=>{var e,t,n,r;const{account:i,chainId:o}=(0,h.a)(),a=(0,S.h7)(),s=(0,N.cq)(o?null===(e=u[o])||void 0===e||null===(t=e[d.bk[o]])||void 0===t?void 0:t.contracts.MISOTokenFactory.address:void 0,o?null===(n=u[o])||void 0===n||null===(r=n[d.bk[o]])||void 0===r?void 0:r.contracts.MISOTokenFactory.abi:void 0);return{subscribe:(0,v.useCallback)(((e,t)=>{s&&s.on(e,t)}),[s]),unsubscribe:(0,v.useCallback)(((e,t)=>{s&&s.off(e,t)}),[s]),init:(0,v.useCallback)((async(e,t,n,r)=>{if(!s)throw new Error("Contract not initialized");if(!i)throw new Error("Wallet not connected");const o=await s.getTemplateId(r),l=await s.createToken(o,i,_.$.encode(["string","string","address","uint256"],[e,t,i,(0,C.toWei)(n.toString())]));return a(l,{summary:"Initialize Fixed Token"}),l}),[i,a,s])}},I=n(49680),A=n(70028),D=n(69260),P=n.n(D);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=({txHash:e,onDismiss:t,tokenAddress:n})=>{const{i18n:r}=(0,i.mV)();return(0,m.jsx)(A.S.SubmittedModalContent,{txHash:e,header:r._(r._("Success!")),subheader:r._(r._("Token creation transaction successfully submitted. Your newly created token address will appear here once we receive the event from the blockchain")),onDismiss:t,actions:(0,m.jsx)(A.S.Action,R(R({main:!0,disabled:!n},!n&&{startIcon:(0,m.jsx)("div",{className:"w-4 h-4 mr-1",children:(0,m.jsx)(P(),{animationData:O,autoplay:!0,loop:!0})})}),{},{children:(0,m.jsx)("a",{href:"/miso/auction?token=".concat(n),target:"_blank",rel:"noreferrer",className:n?"":"pointer-events-none",children:r._(r._("Create auction"))})})),children:(0,m.jsxs)("div",{className:"flex flex-col px-4 py-3 bg-dark-900 rounded border border-dark-700 mt-4",children:[(0,m.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Token Address"))}),n?(0,m.jsx)(a.Z,{variant:"sm",className:"text-high-emphesis",weight:700,children:(0,m.jsx)(I.Z,{toCopy:n,className:"text-high-emphesis opacity-100",children:n})}):(0,m.jsx)("div",{className:"w-4 h-4",children:(0,m.jsx)(P(),{animationData:O,autoplay:!0,loop:!0})})]})})};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=({open:e,onDismiss:t,data:n})=>{const{i18n:r}=(0,i.mV)(),{0:o,1:s}=(0,v.useState)(),{0:l,1:c}=(0,v.useState)(!1),{init:d,subscribe:u,unsubscribe:p}=E(),{0:h,1:f}=(0,v.useState)(),{0:b,1:g}=(0,v.useState)(),{map:y,templateIdToLabel:k}=(0,x.Z)(),j=(0,v.useCallback)((()=>{l||(f(void 0),s(void 0),g(void 0))}),[l]),w=(0,v.useCallback)((()=>{j(),t()}),[t,j]),_=(0,v.useCallback)((async e=>{c(!0);try{const t=await d(e.tokenName,e.tokenSymbol,e.tokenSupply,e.tokenTypeAddress);null!==t&&void 0!==t&&t.hash&&(s(t.hash),await t.wait())}catch(n){var t;g(null===(t=n.error)||void 0===t?void 0:t.message)}finally{c(!1)}}),[d]);return(0,v.useEffect)((()=>(u("TokenCreated",((e,t,n,{transactionHash:r})=>{(null===r||void 0===r?void 0:r.toLowerCase())===(null===o||void 0===o?void 0:o.toLowerCase())&&f(t)})),()=>{p("TokenCreated",(()=>console.log("unsubscribed")))})),[u,o,p]),(0,m.jsx)(T.Z.Controlled,{isOpen:e,onDismiss:w,afterLeave:()=>s(void 0),children:o?(0,m.jsx)(F,{txHash:o,tokenAddress:h,onDismiss:w}):(0,m.jsxs)(T.Z.Body,{children:[(0,m.jsx)(T.Z.Header,{header:r._(r._("Create Token")),subheader:r._(r._("Please review your entered details thoroughly."))}),(0,m.jsx)(T.Z.Content,{children:(0,m.jsx)("div",{className:"flex flex-col gap-4",children:(0,m.jsxs)("div",{className:"flex flex-col divide-y divide-dark-700",children:[(0,m.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,m.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Type"))}),(0,m.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:k(null===y||void 0===y?void 0:y[n.tokenTypeAddress])})]}),(0,m.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,m.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Name"))}),(0,m.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:n.tokenName})]}),(0,m.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,m.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Symbol"))}),(0,m.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:n.tokenSymbol})]}),(0,m.jsxs)("div",{className:"flex justify-between gap-2 py-3",children:[(0,m.jsx)(a.Z,{variant:"sm",className:"text-secondary",children:r._(r._("Total Supply"))}),(0,m.jsx)(a.Z,{weight:700,variant:"sm",className:"text-high-emphesis",children:n.tokenSupply})]})]})})}),(0,m.jsxs)(T.Z.Actions,{children:[(0,m.jsx)(T.Z.Action,{onClick:w,children:r._(r._("Cancel"))}),(0,m.jsx)(T.Z.Action,M(M({main:!0},l&&{startIcon:(0,m.jsx)("div",{className:"w-4 h-4 mr-1",children:(0,m.jsx)(P(),{animationData:O,autoplay:!0,loop:!0})})}),{},{disabled:l,onClick:()=>_(n),children:r._(r._("Create Token"))}))]}),(0,m.jsx)(T.Z.Error,{children:b})]})})},H=n(12281),G=n(74231);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const V=G.Ry({tokenTypeAddress:H.q.required("Must be a valid ERC-20 token address"),tokenName:G.Z_().required("Must enter a valid name"),tokenSymbol:G.Z_().required("Must enter a valid symbol"),tokenSupply:G.Rx().typeError("Supply must be a number").required("Must enter a valid number").moreThan(0,"Token supply must be larger than zero").max(2e256,"Token supply can be at most 2^256 - 1 due to network limitations")});var Y=({})=>{var e,t;const{chainId:n}=(0,h.a)(),{i18n:r}=(0,i.mV)(),{0:a,1:s}=(0,v.useState)(!1),l=(0,f.cI)({resolver:(0,c.X)(V),defaultValues:{tokenTypeAddress:n?null===(e=u[n])||void 0===e||null===(t=e[d.bk[n]])||void 0===t?void 0:t.contracts.FixedToken.address:void 0},reValidateMode:"onChange",mode:"onChange"}),{watch:g,formState:{errors:y}}=l,x=g();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.Z,X(X({},l),{},{onSubmit:l.handleSubmit((()=>s(!0))),children:(0,m.jsxs)(p.Z.Card,{children:[(0,m.jsx)(w,{}),(0,m.jsx)(b,{}),(0,m.jsx)(p.Z.Submit,{children:(0,m.jsx)("div",{children:(0,m.jsx)(o.ZP,{disabled:Object.keys(y).length>0,color:"blue",type:"submit",children:r._(r._("Review"))})})})]})})),(0,m.jsx)(U,{open:a,onDismiss:()=>s(!1),data:x})]})},q=n(87433),W=n(95497),K=n(41664);const z=()=>{const{i18n:e}=(0,i.mV)(),t=(0,m.jsx)("a",{href:"https://instantmiso.gitbook.io/miso/tokens",target:"_blank",rel:"noreferrer",className:"text-blue",children:"documentation"});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(W.Zo,{className:"bg-miso-bowl bg-cover",children:(0,m.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,m.jsx)("div",{children:(0,m.jsx)(o.ZP,{color:"blue",size:"sm",className:"rounded-full !pl-2 !py-1.5",startIcon:(0,m.jsx)(r.wyc,{width:24,height:24}),children:(0,m.jsx)(K.default,{href:"/miso",children:e._(e._("All Auctions"))})})}),(0,m.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,m.jsx)(a.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("New Token"))}),(0,m.jsx)(a.Z,{variant:"sm",weight:400,children:(0,m.jsx)(i.cC,{id:"Create your own Token at the Token Factory. For details on all current Token types, please visit our {link}",values:{link:t},components:v.Fragment})})]})]})}),(0,m.jsx)(W.SX,{children:(0,m.jsx)(Y,{})})]})};z.Layout=W.ZP,z.Guard=(0,q.Z)(s.L.MISO);var $=z},85331:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miso/token",function(){return n(77191)}])}},function(e){e.O(0,[7440,4221,8003,3978,3588,145,9774,2888,179],(function(){return t=85331,e(e.s=t);var t}));var t=e.O();_N_E=t}]);