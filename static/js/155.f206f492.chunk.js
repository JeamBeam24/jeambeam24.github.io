"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[155],{10404:(e,n,s)=>{s.d(n,{Z:()=>d});var r=s(45779),i=s(68090),o=s.n(i);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},t.apply(this,arguments)}function c(e,n){if(null==e)return{};var s,r,i=function(e,n){if(null==e)return{};var s,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],n.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var a=(0,r.forwardRef)((function(e,n){var s=e.color,i=void 0===s?"currentColor":s,o=e.size,a=void 0===o?24:o,d=c(e,["color","size"]);return r.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));a.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},a.displayName="AlertCircle";const d=a},33882:(e,n,s)=>{s.d(n,{Z:()=>d});var r=s(45779),i=s(68090),o=s.n(i);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},t.apply(this,arguments)}function c(e,n){if(null==e)return{};var s,r,i=function(e,n){if(null==e)return{};var s,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],n.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var a=(0,r.forwardRef)((function(e,n){var s=e.color,i=void 0===s?"currentColor":s,o=e.size,a=void 0===o?24:o,d=c(e,["color","size"]);return r.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("polyline",{points:"16 12 12 8 8 12"}),r.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));a.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},a.displayName="ArrowUpCircle";const d=a},16709:(e,n,s)=>{s.d(n,{Z:()=>r});s(45779);const r=s.p+"static/media/blue-loader.ca1aedeb13ab14d6ef4eb375580604ad.svg"},99819:(e,n,s)=>{s.d(n,{p:()=>xe,Z:()=>ye});var r=s(92936),i=s(76078),o=s(26729),t=s(61077),c=s(33932),a=s(57852),d=s(39671),l=s(6823),u=s(45779),p=s(33882),m=s(19733),x=s(10404),f=s(99454),h=s(14411),y=s(54972),g=s(2148),j=s(54703),w=s(72993),C=s(99582),b=s(16709),v=s(96524),A=s(61592),T=s.n(A),I=s(64370),k=s(27179),_=s(53286),S=s(47186);function D(e,n,s){return new i.Fraction(e,T().exponentiate(T().BigInt(10),T().BigInt(n))).toSignificant(s)}function E({rawAmount:e,symbol:n,decimals:s,sigFigs:i}){return(0,r.jsxs)(r.Fragment,{children:[D(e,s,i)," ",n]})}function N({rawAmount:e,currencyId:n,sigFigs:s=6}){const i=(0,d.U8)(n);return i?(0,r.jsx)(E,{rawAmount:e,decimals:i.decimals,sigFigs:s,symbol:i.symbol??"???"}):null}function O({info:{recipient:e,uniAmountRaw:n}}){const{ENSName:s}=(0,k.Z)(),i=s??e;return"string"===typeof n?(0,r.jsxs)(l.cC,{children:["Claim ",(0,r.jsx)(E,{rawAmount:n,symbol:"UNI",decimals:18,sigFigs:4})," for ",{name:i}]}):(0,r.jsxs)(l.cC,{children:["Claim UNI reward for ",{name:i}]})}function U(){return(0,r.jsx)(l.cC,{children:"Submit new proposal"})}function L({info:e}){var n,s,i;const o=(0,d.dQ)(e.tokenAddress);return(null===(n=v.BigNumber.from(e.amount))||void 0===n?void 0:n.eq(0))?(0,r.jsxs)(l.cC,{children:["Revoke ",{sym:null===(s=o)||void 0===s?void 0:s.symbol}]}):(0,r.jsxs)(l.cC,{children:["Approve ",{sym:null===(i=o)||void 0===i?void 0:i.symbol}]})}function R({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;if(e.reason&&e.reason.trim().length>0)switch(e.decision){case _.N.For:return(0,r.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n}]});case _.N.Abstain:return(0,r.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n}]});case _.N.Against:return(0,r.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n}]})}else switch(e.decision){case _.N.For:return(0,r.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Abstain:return(0,r.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Against:return(0,r.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']})}}function P({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,r.jsxs)(l.cC,{children:["Queue proposal ",{proposalKey:n},"."]})}function F({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,r.jsxs)(l.cC,{children:["Execute proposal ",{proposalKey:n},"."]})}function V({info:{delegatee:e}}){const{ENSName:n}=(0,k.Z)(e),s=n??e;return(0,r.jsxs)(l.cC,{children:["Delegate voting power to ",{name:s}]})}function W({info:{chainId:e,currencyAmountRaw:n,unwrapped:s}}){const i=e?(0,I.gX)(e):void 0;var o,t,c,a,d,u;return s?(0,r.jsxs)(l.cC,{children:["Unwrap"," ",(0,r.jsx)(E,{rawAmount:n,symbol:(null===(t=i)||void 0===t||null===(o=t.wrapped)||void 0===o?void 0:o.symbol)??"WETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(c=i)||void 0===c?void 0:c.symbol)??"ETH"}]}):(0,r.jsxs)(l.cC,{children:["Wrap"," ",(0,r.jsx)(E,{rawAmount:n,symbol:(null===(a=i)||void 0===a?void 0:a.symbol)??"ETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(u=i)||void 0===u||null===(d=u.wrapped)||void 0===d?void 0:d.symbol)??"WETH"}]})}function $(){return(0,r.jsx)(l.cC,{children:"Deposit liquidity"})}function z(){return(0,r.jsx)(l.cC,{children:"Withdraw deposited liquidity"})}function M({info:{baseCurrencyId:e,quoteCurrencyId:n}}){var s,i;const o=(0,d.U8)(e),t=(0,d.U8)(n);return(0,r.jsxs)(l.cC,{children:["Migrate ",{baseSymbol:null===(s=o)||void 0===s?void 0:s.symbol},"/",{quoteSymbol:null===(i=t)||void 0===i?void 0:i.symbol}," liquidity to V3"]})}function q({info:{quoteCurrencyId:e,baseCurrencyId:n}}){var s,i;const o=(0,d.U8)(n),t=(0,d.U8)(e);return(0,r.jsxs)(l.cC,{children:["Create ",{baseSymbol:null===(s=o)||void 0===s?void 0:s.symbol},"/",{quoteSymbol:null===(i=t)||void 0===i?void 0:i.symbol}," V3 pool"]})}function H({info:{currencyId0:e,currencyId1:n}}){var s,i;const o=(0,d.U8)(e),t=(0,d.U8)(n);return(0,r.jsxs)(l.cC,{children:["Collect ",{symbol0:null===(s=o)||void 0===s?void 0:s.symbol},"/",{symbol1:null===(i=t)||void 0===i?void 0:i.symbol}," fees"]})}function B({info:{baseCurrencyId:e,quoteCurrencyId:n,expectedAmountBaseRaw:s,expectedAmountQuoteRaw:i}}){return(0,r.jsxs)(l.cC,{children:["Remove"," ",(0,r.jsx)(N,{rawAmount:s,currencyId:e,sigFigs:3})," and"," ",(0,r.jsx)(N,{rawAmount:i,currencyId:n,sigFigs:3})]})}function Z({info:{createPool:e,quoteCurrencyId:n,baseCurrencyId:s}}){var i,o,t,c;const a=(0,d.U8)(s),u=(0,d.U8)(n);return e?(0,r.jsxs)(l.cC,{children:["Create pool and add ",{baseSymbol:null===(i=a)||void 0===i?void 0:i.symbol},"/",{quoteSymbol:null===(o=u)||void 0===o?void 0:o.symbol}," V3 liquidity"]}):(0,r.jsxs)(l.cC,{children:["Add ",{baseSymbol:null===(t=a)||void 0===t?void 0:t.symbol},"/",{quoteSymbol:null===(c=u)||void 0===c?void 0:c.symbol}," V3 liquidity"]})}function Q({info:{quoteCurrencyId:e,expectedAmountBaseRaw:n,expectedAmountQuoteRaw:s,baseCurrencyId:i}}){return(0,r.jsxs)(l.cC,{children:["Add ",(0,r.jsx)(N,{rawAmount:n,currencyId:i,sigFigs:3})," ","and ",(0,r.jsx)(N,{rawAmount:s,currencyId:e,sigFigs:3})," ","to Uniswap V2"]})}function K({info:e}){return(0,r.jsxs)(l.cC,{children:["Sent",(0,r.jsx)(N,{rawAmount:e.amount,currencyId:e.currencyId,sigFigs:6})," to"," ",{recipient:e.recipient}]})}function Y({info:e}){return e.tradeType===i.TradeType.EXACT_INPUT?(0,r.jsxs)(l.cC,{children:["Swap exactly"," ",(0,r.jsx)(N,{rawAmount:e.inputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for"," ",(0,r.jsx)(N,{rawAmount:e.settledOutputCurrencyAmountRaw??e.expectedOutputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]}):(0,r.jsxs)(l.cC,{children:["Swap"," ",(0,r.jsx)(N,{rawAmount:e.expectedInputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for exactly"," ",(0,r.jsx)(N,{rawAmount:e.outputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]})}function G({info:e}){switch(e.type){case S.i.ADD_LIQUIDITY_V3_POOL:return(0,r.jsx)(Z,{info:e});case S.i.ADD_LIQUIDITY_V2_POOL:return(0,r.jsx)(Q,{info:e});case S.i.CLAIM:return(0,r.jsx)(O,{info:e});case S.i.DEPOSIT_LIQUIDITY_STAKING:return(0,r.jsx)($,{});case S.i.WITHDRAW_LIQUIDITY_STAKING:return(0,r.jsx)(z,{});case S.i.SWAP:return(0,r.jsx)(Y,{info:e});case S.i.APPROVAL:return(0,r.jsx)(L,{info:e});case S.i.VOTE:return(0,r.jsx)(R,{info:e});case S.i.DELEGATE:return(0,r.jsx)(V,{info:e});case S.i.WRAP:return(0,r.jsx)(W,{info:e});case S.i.CREATE_V3_POOL:return(0,r.jsx)(q,{info:e});case S.i.MIGRATE_LIQUIDITY_V3:return(0,r.jsx)(M,{info:e});case S.i.COLLECT_FEES:return(0,r.jsx)(H,{info:e});case S.i.REMOVE_LIQUIDITY_V3:return(0,r.jsx)(B,{info:e});case S.i.QUEUE:return(0,r.jsx)(P,{info:e});case S.i.EXECUTE:return(0,r.jsx)(F,{info:e});case S.i.SUBMIT_PROPOSAL:return(0,r.jsx)(U,{});case S.i.SEND:return(0,r.jsx)(K,{info:e})}}var X=s(69780),J=s(44591),ee=s(2562),ne=s(94284);const se=h.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Wrapper",componentId:"sc-d0b133e0-0"})`
  height: 90px;
  width: 90px;
`,re=h.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,ie=h.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,oe=h.default.circle.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Circle",componentId:"sc-d0b133e0-1"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${re} 0.9s ease-in-out;
  animation: ${re} 0.9s ease-in-out;
`,te=h.default.polyline.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__PolyLine",componentId:"sc-d0b133e0-2"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${ie} 0.9s 0.35s ease-in-out forwards;
  animation: ${ie} 0.9s 0.35s ease-in-out forwards;
`;function ce({className:e}){const n=(0,h.useTheme)();return(0,r.jsx)(se,{className:e,"data-testid":"animated-confirmation",children:(0,r.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,r.jsx)(oe,{className:"path circle",fill:"none",stroke:n.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,r.jsx)(te,{className:"path check",fill:"none",stroke:n.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}const ae=h.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__Wrapper",componentId:"sc-73df0c16-0"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
  padding: 16px;
`,de=(0,h.default)(J.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__BottomSection",componentId:"sc-73df0c16-1"})`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,le=(0,h.default)(J.lg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmedIcon",componentId:"sc-73df0c16-2"})`
  padding: ${({inline:e})=>e?"20px 0":"32px 0;"};
`,ue=(0,h.default)(J.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmationModalContentWrapper",componentId:"sc-73df0c16-3"})`
  padding-bottom: 12px;
`;function pe({onDismiss:e,pendingText:n,inline:s}){return(0,r.jsx)(ae,{children:(0,r.jsxs)(J.Tz,{gap:"md",children:[!s&&(0,r.jsxs)(ne.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(y.Tw,{onClick:e})]}),(0,r.jsx)(le,{inline:s,children:(0,r.jsx)(y._1,{src:b.Z,alt:"loader",size:s?"40px":"90px"})}),(0,r.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(y.Tv.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,r.jsx)(l.cC,{children:"Waiting for confirmation"})}),(0,r.jsx)(y.Tv.SubHeader,{color:"neutral1",textAlign:"center",children:n}),(0,r.jsx)(y.Tv.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,r.jsx)(l.cC,{children:"Confirm this transaction in your wallet"})})]})]})})}function me({onDismiss:e,chainId:n,hash:s,currencyToAdd:t,inline:c}){var a,x;const f=(0,h.useTheme)(),{connector:g}=(0,o.G)(),w=null===(a=t)||void 0===a?void 0:a.wrapped,C=(null===(x=(0,d.J3)(w))||void 0===x?void 0:x.logoUrl)??"",[b,v]=(0,u.useState)(),A=(0,u.useCallback)((()=>{var e;(null===(e=w)||void 0===e?void 0:e.symbol)&&g.watchAsset&&g.watchAsset({address:w.address,symbol:w.symbol,decimals:w.decimals,image:C}).then((()=>v(!0))).catch((()=>v(!1)))}),[g,C,w]),T=n===i.ChainId.MAINNET?l.t`View on  Etherscan`:l.t`View on Block Explorer`;return(0,r.jsx)(ae,{children:(0,r.jsxs)(J.Tz,{children:[!c&&(0,r.jsxs)(ne.m0,{children:[(0,r.jsx)("div",{}),(0,r.jsx)(y.Tw,{onClick:e})]}),(0,r.jsx)(le,{inline:c,children:(0,r.jsx)(p.Z,{strokeWidth:1,size:c?"40px":"75px",color:f.accent1})}),(0,r.jsxs)(ue,{gap:"md",justify:"center",children:[(0,r.jsx)(y.Tv.MediumHeader,{textAlign:"center",children:(0,r.jsx)(l.cC,{children:"Transaction submitted"})}),t&&g.watchAsset&&(0,r.jsx)(X.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:A,children:b?(0,r.jsxs)(ne.DA,{children:[(0,r.jsxs)(l.cC,{children:["Added ",{sym:t.symbol}," "]}),(0,r.jsx)(m.Z,{size:"16px",stroke:f.success,style:{marginLeft:"6px"}})]}):(0,r.jsx)(ne.DA,{children:(0,r.jsxs)(l.cC,{children:["Add ",{sym:t.symbol}]})})}),(0,r.jsx)(X.DF,{onClick:e,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,r.jsx)(y.Tv.HeadlineSmall,{color:f.deprecated_accentTextLightPrimary,children:c?(0,r.jsx)(l.cC,{children:"Return"}):(0,r.jsx)(l.cC,{children:"Close"})})}),n&&s&&(0,r.jsx)(y.dL,{href:(0,j.E)(n,s,j.r.TRANSACTION),children:(0,r.jsx)(y.Tv.Link,{color:f.accent1,children:T})})]})]})})}function xe({title:e,bottomContent:n,onDismiss:s,topContent:i,headerContent:o}){var t;return(0,r.jsxs)(ae,{children:[(0,r.jsxs)(J.Tz,{gap:"sm",children:[(0,r.jsxs)(ne.ZP,{children:[null===(t=o)||void 0===t?void 0:t(),(0,r.jsx)(ne.ZP,{justify:"center",marginLeft:"24px",children:(0,r.jsx)(y.Tv.SubHeader,{children:e})}),(0,r.jsx)(y.Tw,{onClick:s,"data-testid":"confirmation-close-icon"})]}),i()]}),n&&(0,r.jsx)(de,{gap:"16px",children:n()})]})}const fe=(0,h.default)(t.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__StyledL2Badge",componentId:"sc-73df0c16-4"})`
  padding: 6px 8px;
`;function he({onDismiss:e,chainId:n,hash:s,pendingText:i,inline:o}){var t;const d=(0,h.useTheme)(),u=(0,f.kF)(s),p=u&&(0,f.qy)(u),m=(null===(t=u)||void 0===t?void 0:t.status)===C.LND.Confirmed,g=p&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,w=a.T_[n];return(0,r.jsx)(ae,{children:(0,r.jsxs)(J.Tz,{children:[!o&&(0,r.jsxs)(ne.m0,{mb:"16px",children:[(0,r.jsx)(fe,{children:(0,r.jsxs)(ne.DA,{gap:"sm",children:[(0,r.jsx)(c.E,{chainId:n}),(0,r.jsx)(y.Tv.SubHeaderSmall,{children:w.label})]})}),(0,r.jsx)(y.Tw,{onClick:e})]}),(0,r.jsx)(le,{inline:o,children:p?m?(0,r.jsx)(ce,{}):(0,r.jsx)(x.Z,{strokeWidth:1,size:o?"40px":"90px",color:d.critical}):(0,r.jsx)(y._1,{src:b.Z,alt:"loader",size:o?"40px":"90px"})}),(0,r.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,r.jsx)(y.Tv.SubHeaderLarge,{textAlign:"center",children:s?p?m?(0,r.jsx)(l.cC,{children:"Success"}):(0,r.jsx)(l.cC,{children:"Error"}):(0,r.jsx)(l.cC,{children:"Transaction submitted"}):(0,r.jsx)(l.cC,{children:"Confirm transaction in wallet"})}),(0,r.jsx)(y.Tv.BodySecondary,{textAlign:"center",children:u?(0,r.jsx)(G,{info:u.info}):i}),n&&s?(0,r.jsx)(y.dL,{href:(0,j.E)(n,s,j.r.TRANSACTION),children:(0,r.jsx)(y.Tv.SubHeaderSmall,{color:d.accent1,children:(0,r.jsx)(l.cC,{children:"View on Explorer"})})}):(0,r.jsx)("div",{style:{height:"17px"}}),(0,r.jsx)(y.Tv.SubHeaderSmall,{color:d.neutral3,marginTop:"20px",children:g?(0,r.jsxs)("div",{children:[(0,r.jsx)(l.cC,{children:"Transaction completed in "}),(0,r.jsxs)("span",{style:{fontWeight:535,marginLeft:"4px",color:d.neutral1},children:[g," seconds \ud83c\udf89"]})]}):(0,r.jsx)("div",{style:{height:"24px"}})}),(0,r.jsx)(X.DF,{onClick:e,style:{margin:"4px 0 0 0"},children:o?(0,r.jsx)(l.cC,{children:"Return"}):(0,r.jsx)(l.cC,{children:"Close"})})]})]})})}function ye({isOpen:e,onDismiss:n,attemptingTxn:s,hash:i,pendingText:o,reviewContent:t,currencyToAdd:c}){const d=(0,w.x)(),l=(0,a.Nb)(d);return d&&l?(0,r.jsx)(ee.Z,{isOpen:e,$scrollOverlay:!0,onDismiss:n,maxHeight:90,children:(0,g.p)(d)&&(i||s)?(0,r.jsx)(he,{chainId:d,hash:i,onDismiss:n,pendingText:o}):s?(0,r.jsx)(pe,{onDismiss:n,pendingText:o}):i?(0,r.jsx)(me,{chainId:d,hash:i,onDismiss:n,currencyToAdd:c}):t()}):null}},40926:(e,n,s)=>{s.d(n,{DC:()=>c,ER:()=>a,bb:()=>d,im:()=>t,pr:()=>l});var r=s(32546),i=s(22953),o=s(14411);const t=o.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-e4e1fcd6-0"})`
  position: relative;
  padding: 20px;
`,c=(0,o.default)(i.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-e4e1fcd6-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=o.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-e4e1fcd6-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=o.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-e4e1fcd6-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,o.default)(r.pr).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-e4e1fcd6-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},53286:(e,n,s)=>{var r;s.d(n,{N:()=>r}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(r||(r={}))}}]);
//# sourceMappingURL=155.f206f492.chunk.js.map