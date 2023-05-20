"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3588],{93688:function(e,t,n){var r,i=n(13752),o=n(36325),c=n(85893);!function(e){e[e.REPEAT=0]="REPEAT",e[e.SINGLE=1]="SINGLE"}(r||(r={}));const s={"bg-bars":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:r.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};t.Z=({variant:e})=>{if(!e)return(0,c.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});const{type:t,url:n}=s[e];return t===r.REPEAT?(0,c.jsx)("div",{className:(0,o.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,c.jsx)("div",{className:(0,o.AK)("absolute inset-0 w-full h-full z-0 opacity-10",e)})}):(0,c.jsx)(i.Z,{alt:"background image",src:n,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},64958:function(e,t,n){var r=n(59499),i=n(4730),o=n(41664),c=n(11163),s=n(67294),a=n(85893);const l=["children","exact","activeClassName"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=e=>{let{children:t,exact:n=!1,activeClassName:r="text-high-emphesis"}=e,u=(0,i.Z)(e,l);const{asPath:f,pathname:h,route:p,query:m,basePath:b}=(0,c.useRouter)(),x=s.Children.only(t),g=x.props.className||"",v=(n?(u.as||u.href.pathname||u.href)===f:f.startsWith(u.as||u.href.pathname||u.href))?"".concat(g," ").concat(r).trim():g;return(0,a.jsx)(o.default,d(d({href:u.href},u),{},{children:s.cloneElement(x,{className:v||null})}))}},87433:function(e,t,n){var r=n(85169),i=n(71923),o=n(63929),c=n(64958),s=n(56785),a=n(87269),l=n(10552),u=n(90662),d=n(12614),f=n(49552),h=n.n(f),p=n(25675),m=n(67294),b=n(85893);const x=({children:e,feature:t})=>{const{i18n:n}=(0,r.mV)(),{chainId:f,library:x,account:g}=(0,d.a)(),v=(0,b.jsx)(c.Z,{href:"/swap",children:(0,b.jsx)("a",{className:"text-blue focus:outline-none",children:n._(n._("home page"))})}),y=Object.entries(a.Z).reduce(((e,[n,r])=>(r.includes(t)&&e.push(n),e)),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z.Controlled,{isOpen:!!g&&!a.Z[f].includes(t),onDismiss:()=>null,transparent:!0,children:(0,b.jsxs)("div",{className:"flex flex-col justify-center p-4 mt-10 gap-7 lg:mt-0",children:[(0,b.jsx)(s.Z,{variant:"h1",className:"max-w-2xl text-center text-white",weight:700,children:n._(n._("Roll it back - this feature is not yet supported on {0}.",{0:l.z[f]}))}),(0,b.jsx)(s.Z,{className:"text-center",children:(0,b.jsx)(r.cC,{id:"Either return to the {link}, or change to an available network.",values:{link:v},components:m.Fragment})}),(0,b.jsx)(s.Z,{className:"uppercase text-white text-center text-lg tracking-[.2rem]",weight:700,children:n._(n._("Available Networks"))}),(0,b.jsx)("div",{className:"flex justify-center gap-5 md:gap-10",children:y.map(((e,t)=>(0,b.jsxs)("button",{className:"flex flex-col items-center justify-start gap-2 text-primary hover:text-white",onClick:()=>{const t=u.b[e];h().set("chainId",e),e===i.a_.ETHEREUM.toString()?null===x||void 0===x||x.send("wallet_switchEthereumChain",[{chainId:"0x1"},g]):e===i.a_.KOVAN.toString()?null===x||void 0===x||x.send("wallet_switchEthereumChain",[{chainId:"0x2A"},g]):null===x||void 0===x||x.send("wallet_addEthereumChain",[t,g])},children:[(0,b.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,b.jsx)(p.default,{src:l.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,b.jsx)(s.Z,{className:"text-sm",children:l.z[e]})]},t)))})]})}),e]})};t.Z=e=>({children:t})=>(0,b.jsx)(x,{feature:e,children:t})},83304:function(e,t,n){n.d(t,{UK:function(){return r.UK},qL:function(){return r.qL},x7:function(){return d},rO:function(){return u.rO},HW:function(){return u.HW},mX:function(){return u.mX},cq:function(){return u.cq},MQ:function(){return u.MQ},JY:function(){return u.JY},wq:function(){return u.wq},mi:function(){return u.mi},ou:function(){return u.ou},JE:function(){return u.JE},Ib:function(){return u.Ib},i7:function(){return u.i7},sL:function(){return u.sL},oF:function(){return f.ZP},lz:function(){return u.lz}});var r=n(27262),i=n(19485),o=n(9279),c=n(71923),s=n(12614),a=n(68411),l=n(67294),u=n(85926);var d=function(){const{account:e,chainId:t}=(0,s.a)(),n=(0,a.h7)(),r=(0,u.rO)();return{deposit:(0,l.useCallback)((async(s,a)=>{if(a&&t)try{const l=(0,i.Kn)(s);if(l===c.df[t]){const t=await(null===r||void 0===r?void 0:r.deposit(o.d,e,e,a,0,{value:a}));return n(t,{summary:"Deposit to Bentobox"})}{const t=await(null===r||void 0===r?void 0:r.deposit(l,e,e,a,0));return n(t,{summary:"Deposit to Bentobox"})}}catch(l){return console.error("bentobox deposit error:",l),l}}),[e,n,r,t]),withdraw:(0,l.useCallback)((async(o,s,a)=>{if(s&&t)try{const l=(0,i.Kn)(o),u=await(null===r||void 0===r?void 0:r.withdraw(l===c.df[t]?"0x0000000000000000000000000000000000000000":l,e,e,s,a?a.toString():0));return n(u,{summary:"Withdraw from Bentobox"})}catch(l){return console.error("bentobox withdraw error:",l),l}}),[e,n,r,t]),harvest:(0,l.useCallback)((async(e,i=!1)=>{if(t)try{const t=await(null===r||void 0===r?void 0:r.harvest(e,i,0));return n(t,{summary:i?"Harvest & Rebalance":"Harvest"})}catch(o){return console.error("bentobox harvest error:",o),o}}),[])}};n(89638),n(37601);n(82766),n(76294),n(80113);var f=n(90573)},82766:function(e,t,n){n.d(t,{r:function(){return l}});var r=n(71923),i=(n(93036),n(1082)),o=n.n(i),c=n(83852),s=n(67294),a=n(75438);function l(e){const{0:t,1:n}=(0,s.useState)("#0094ec");return(0,s.useLayoutEffect)((()=>{let t=!1;return e&&async function(e){if(e.chainId===r.a_.RINKEBY&&"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735"===e.address)return Promise.resolve("#FAAB14");const t="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(e.address,"/logo.png");return o().from(t).getPalette().then((e=>{if(null!==e&&void 0!==e&&e.Vibrant){let t=e.Vibrant.hex,n=(0,a.$v)(t,"#FFF");for(;n<3;)t=(0,c.wj)(.005,t),n=(0,a.$v)(t,"#FFF");return t}return null})).catch((()=>null))}(e).then((e=>{t||null===e||n(e)})),()=>{t=!0,n("#0094ec")}}),[e]),t}},76294:function(e,t,n){var r=n(59499),i=n(74221),o=n(67294);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function({data:e,options:t}){const{0:n,1:s}=(0,o.useState)(""),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);return{result:function({fuse:e,data:t,term:n}){const r=e.search(n);return n?r.map((e=>e.item)):t}({fuse:new i.Z(e||[],a),data:e,term:n}),search:s,term:n,reset:()=>s("")}}},80113:function(e,t,n){var r=n(2593),i=n(67294);function o(e,t,n="."){try{return t.replace("[",n).replace("]","").split(n).reduce(((e,t)=>e[t]),e)}catch(r){return}}t.Z=(e,t=null)=>{const{0:n,1:c}=(0,i.useState)(t);return{items:(0,i.useMemo)((()=>{if(e&&e.length>0){const t=[...e];return null!==n&&t.sort(((e,t)=>{const i=o(e,n.key),c=o(t,n.key);if(i instanceof r.O$&&c instanceof r.O$){if(i.lt(c))return"ascending"===n.direction?-1:1;if(i.gt(c))return"ascending"===n.direction?1:-1}else{if(i===1/0)return"ascending"===n.direction?-1:1;if(c===1/0)return"ascending"===n.direction?1:-1;if(i<c)return"ascending"===n.direction?-1:1;if(i>c)return"ascending"===n.direction?1:-1}return 0})),t}return[]}),[e,n]),requestSort:(e,t="ascending")=>{n&&n.key===e&&"ascending"===n.direction?t="descending":n&&n.key===e&&"descending"===n.direction&&(t="ascending"),c({key:e,direction:t})},sortConfig:n}}},95497:function(e,t,n){n.d(t,{Zo:function(){return v},SX:function(){return y}});var r=n(59499),i=n(4730),o=n(93688),c=n(72457),s=n(39810),a=n(50654),l=n(52907),u=n(3990),d=n(36325),f=n(76866),h=n(25675),p=n(67294),m=n(85893);const b=["children","breadcrumb","className","maxWidth","condensed","auction"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const v=e=>{var t,n,r;let{children:s,breadcrumb:a,className:l,maxWidth:u="7xl",condensed:x,auction:v}=e,y=(0,i.Z)(e,b);const j=(0,f.Z)(),w=(0,p.useMemo)((()=>{var e,t,n,r,i,c;return j&&null!==v&&void 0!==v&&null!==(e=v.auctionDocuments)&&void 0!==e&&e.desktopBanner?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.default,{alt:"".concat(null===v||void 0===v||null===(n=v.auctionInfo)||void 0===n?void 0:n.tokenInfo.name," banner"),src:(0,d.HT)({src:null===v||void 0===v||null===(r=v.auctionDocuments)||void 0===r?void 0:r.desktopBanner,width:1280,height:196}),width:1280,height:196,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0}),(0,m.jsx)("div",{className:"absolute top-0 right-0 bottom-0 left-0 bg-dark-900/60 filter backdrop-blur-[5px]"})]}):!j&&null!==v&&void 0!==v&&null!==(t=v.auctionDocuments)&&void 0!==t&&t.mobileBanner?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.default,{alt:"".concat(null===v||void 0===v||null===(i=v.auctionInfo)||void 0===i?void 0:i.tokenInfo.name," banner"),src:(0,d.HT)({src:null===v||void 0===v||null===(c=v.auctionDocuments)||void 0===c?void 0:c.mobileBanner,width:768,height:360}),width:768,height:360,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0}),(0,m.jsx)("div",{className:"absolute top-0 right-0 bottom-0 left-0 bg-dark-900/60 filter backdrop-blur-[5px]"})]}):(0,m.jsx)(o.Z,{variant:"miso-bowl"})}),[null===v||void 0===v||null===(t=v.auctionDocuments)||void 0===t?void 0:t.desktopBanner,null===v||void 0===v||null===(n=v.auctionDocuments)||void 0===n?void 0:n.mobileBanner,null===v||void 0===v||null===(r=v.auctionInfo)||void 0===r?void 0:r.tokenInfo.name,j]);return(0,m.jsxs)("header",g(g({},y),{},{className:(0,d.AK)("relative w-full bg-opacity-80 flex flex-col items-center shadow-md h-full",l),children:[w,(0,m.jsxs)(c.Z,{maxWidth:u,className:(0,d.AK)("flex flex-col gap-5 z-[1] py-10 px-5 lg:px-6",x&&"py-5",a?"!pt-4":""),children:[a,s]})]}))},y=({children:e,className:t,maxWidth:n="7xl"})=>(0,m.jsx)(l.Z,{children:(0,m.jsx)(c.Z,{maxWidth:n,className:(0,d.AK)("flex flex-col gap-10 py-10 px-5 lg:px-6 z-[1]",t),children:e})});t.ZP=({children:e})=>(0,m.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,m.jsx)(a.Z,{}),(0,m.jsxs)("div",{className:"flex flex-col items-center w-full flex flex-grow",children:[(0,m.jsx)("div",{className:"w-full flex-grow flex flex-col",children:e}),(0,m.jsx)(u.Z,{})]}),(0,m.jsx)(s.Z,{})]})}}]);