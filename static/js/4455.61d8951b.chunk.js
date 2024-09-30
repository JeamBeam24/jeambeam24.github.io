"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4455,5118],{37525:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(45779),i=t(68090),o=t.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,l=a(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="ChevronUp";const l=c},57809:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(45779),i=t(68090),o=t.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,l=a(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Plus";const l=c},74293:(e,n,t)=>{t.d(n,{Z:()=>z});var r=t(92936),i=t(5985),o=t(26729),s=t(12722),a=t(32546),c=t(57852),l=t(6823),d=t(36399),p=t(45779),u=t(14411),m=t(66869),h=t(54972),f=t(55874),w=t(66136),y=t(47841),x=t(93741),g=t(96326),v=t(73720),b=t(69780),k=t(5967),C=t(17706),j=t(94284),_=t(24210),N=t(19996);const I=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-e47f9ec2-0"})`
  ${f.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,$=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-e47f9ec2-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,A=(0,u.default)(b.Ux).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-e47f9ec2-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,d._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,O=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-e47f9ec2-3"})`
  ${f.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,P=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-e47f9ec2-4"})`
  ${f.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,d._j)(.2,e.neutral2)};
  }
`,T=(0,u.default)(P).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-e47f9ec2-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,D=u.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-e47f9ec2-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,U=(0,u.default)(g.r).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-e47f9ec2-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,S=u.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-e47f9ec2-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${m.j$.sm}px) {
    font-size: 16px;
  }
`,E=u.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-e47f9ec2-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,R=(0,u.default)(C.I).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-e47f9ec2-10"})`
  ${a._Q};
  text-align: left;
`,B=(0,u.default)(x.Kh).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-e47f9ec2-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function z({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:m,currency:f,otherCurrency:x,id:g,currencySearchFilters:b,showCurrencyAmount:C,renderBalance:P,fiatValue:z,hideBalance:M=!1,pair:W=null,hideInput:V=!1,locked:G=!1,loading:L=!1,...q}){var K,Z,F,X,H;const[Q,J]=(0,p.useState)(!1),{account:Y,chainId:ee}=(0,o.G)(),ne=(0,c.Nb)(ee),te=(0,v._h)(Y??void 0,f??void 0),re=(0,u.useTheme)(),{formatCurrencyAmount:ie}=(0,w.Gb)(),oe=(0,p.useCallback)((()=>{J(!1)}),[J]);return(0,r.jsxs)(I,{id:g,hideInput:V,...q,children:[!G&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)($,{hideInput:V,disabled:!ne,children:[(0,r.jsxs)(O,{style:V?{padding:"0",borderRadius:"8px"}:{},selected:!m,children:[!V&&(0,r.jsx)(R,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:L,maxDecimals:null===(K=f)||void 0===K?void 0:K.decimals}),(0,r.jsx)(B,{$fullWidth:V,children:(0,r.jsx)(A,{disabled:!ne,visible:void 0!==f,selected:!!f,hideInput:V,className:"open-currency-select-button",onClick:()=>{m&&J(!0)},pointerEvents:m?void 0:"none",children:(0,r.jsxs)(D,{children:[(0,r.jsxs)(j.DA,{children:[W?(0,r.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,r.jsx)(y.ge,{currencies:[W.token0,W.token1],size:24})}):f&&(0,r.jsx)(k.Z,{style:{marginRight:"0.5rem"},currency:f,size:24}),W?(0,r.jsxs)(S,{className:"pair-name-container",children:[null===(Z=W)||void 0===Z?void 0:Z.token0.symbol,":",null===(F=W)||void 0===F?void 0:F.token1.symbol]}):(0,r.jsx)(S,{className:"token-symbol-container",active:Boolean(f&&f.symbol),children:(f&&f.symbol&&f.symbol.length>20?f.symbol.slice(0,4)+"..."+f.symbol.slice(f.symbol.length-5,f.symbol.length):null===(X=f)||void 0===X?void 0:X.symbol)||(0,r.jsx)(l.cC,{children:"Select a token"})})]}),m&&(0,r.jsx)(U,{selected:!!f})]})})})]}),Boolean(!V&&!M&&f)&&(0,r.jsx)(T,{children:(0,r.jsxs)(j.m0,{children:[(0,r.jsx)(a.EG,{$loading:L,children:z&&(0,r.jsx)(N.x,{fiatValue:z})}),Y&&(0,r.jsxs)(j.DA,{style:{height:"17px"},children:[(0,r.jsx)(h.Tv.DeprecatedBody,{onClick:t,color:re.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!M&&f&&te)&&((null===(H=P)||void 0===H?void 0:H(te))||(0,r.jsxs)(l.cC,{children:["Balance:"," ",{amount:ie({amount:te,type:w.sw.TokenNonTx})}]}))}),Boolean(d&&te)&&(0,r.jsx)(s.M8,{events:[i.TM.onClick],name:i.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:i.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,r.jsx)(E,{onClick:t,children:(0,r.jsx)(l.cC,{children:"MAX"})})})]})]})})]})}),m&&(0,r.jsx)(_.Z,{isOpen:Q,onDismiss:oe,onCurrencySelect:m,selectedCurrency:f,otherSelectedCurrency:x,showCurrencyAmount:C,currencySearchFilters:b})]})}},39753:(e,n,t)=>{t.d(n,{q:()=>k,w:()=>j});var r=t(92936),i=t(69751),o=t(6823),s=t(21926),a=t(43454),c=t(6282),l=t(22953),d=t(47856),p=t(47632),u=t(31744),m=t(14411),h=t(54972),f=t(55874),w=t(72993),y=t(94284);const x=m.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-e4c19afb-0"})`
  ${f.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,g=(0,m.default)(a.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-e4c19afb-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-e4c19afb-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,m.default)(s.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-e4c19afb-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function k({origin:e}){return(0,r.jsx)(x,{children:(0,r.jsxs)(y.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(a.rU,{to:e,children:(0,r.jsx)(b,{})}),(0,r.jsx)(v,{children:(0,r.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const C=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-e4c19afb-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function j({adding:e,creating:n,autoSlippage:t,children:s}){const a=(0,w.x)(),h=(0,m.useTheme)(),f=(0,d.T)(),v=(0,c.s0)();return(0,r.jsx)(x,{children:(0,r.jsxs)(y.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(g,{to:"..",onClick:n=>{n.preventDefault(),v(-1),e&&(f((0,p.dA)()),f((0,u.dA)()))},flex:s?"1":void 0,children:(0,r.jsx)(b,{stroke:h.neutral2})}),(0,r.jsx)(C,{$center:!s,children:n?(0,r.jsx)(o.cC,{children:"Create a pair"}):e?(0,r.jsx)(o.cC,{children:"Add liquidity"}):(0,r.jsx)(o.cC,{children:"Remove liquidity"})}),s&&(0,r.jsx)(l.xu,{style:{marginRight:".5rem"},children:s}),(0,r.jsx)(i.Z,{autoSlippage:t,chainId:a,hideRoutingSettings:!0})]})})}},29025:(e,n,t)=>{t.d(n,{U:()=>r,q:()=>v});var r,i=t(16790),o=t(5985),s=t(26729),a=t(12722),c=t(7151),l=t(65471),d=t(11016),p=t(45779),u=t(64510),m=t(72993);function h(e,n,t,r,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(r,i)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function s(e){h(o,r,i,s,a,"next",e)}function a(e){h(o,r,i,s,a,"throw",e)}s(void 0)}))}}function w(e,n,t){var h,w,y;const x=(0,m.x)(),g=(null===(w=e)||void 0===w||null===(h=w.currency)||void 0===h?void 0:h.isToken)?e.currency:void 0,v=function(e,n,t){var i,o;const{account:a}=(0,s.G)(),c=(null===(o=e)||void 0===o||null===(i=o.currency)||void 0===i?void 0:i.isToken)?e.currency:void 0,{tokenAllowance:d}=(0,l.Fx)(c,a??void 0,n),u=t(c,n);return(0,p.useMemo)((()=>e&&n?e.currency.isNative?r.APPROVED:d?d.lessThan(e)?u?r.PENDING:r.NOT_APPROVED:r.APPROVED:r.UNKNOWN:r.UNKNOWN),[e,u,n,d])}(e,n,t),b=(0,c.Ib)(null===(y=g)||void 0===y?void 0:y.address),k=(0,p.useCallback)(f((function*(){function t(e){var n;console.warn(`${(null===(n=g)||void 0===n?void 0:n.symbol)||"Token"} approval failed:`,e)}if(v!==r.NOT_APPROVED)return t("approve was called unnecessarily");if(!x)return t("no chainId");if(!g)return t("no token");if(!b)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let s=!1;const c=yield b.estimateGas.approve(n,i.Bz).catch((()=>(s=!0,b.estimateGas.approve(n,e.quotient.toString()))));return b.approve(n,s?e.quotient.toString():i.Bz,{gasLimit:(0,u.y)(c)}).then((t=>{var r;const i={chain_id:x,token_symbol:null===(r=g)||void 0===r?void 0:r.symbol,token_address:(0,d.DT)(g)};return(0,a._P)(o.Je.APPROVE_TOKEN_TXN_SUBMITTED,i),{response:t,tokenAddress:g.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))})),[v,g,b,e,n,x]);return[v,k]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(r||(r={}));var y=t(99454),x=t(47186);function g(e){const n=(0,y.h7)();return(0,p.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:r,spenderAddress:i,amount:o}=e;n(t,{type:x.i.APPROVAL,tokenAddress:r,spender:i,amount:o.quotient.toString()})}}))),[n,e])}function v(e,n){const[t,r]=w(e,n,y.wB);return[t,g(r)]}},65118:(e,n,t)=>{t.d(n,{Z:()=>a,e:()=>s});var r=t(92936),i=t(14411),o=t(62587);const s=i.default.main.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function a(e){return(0,r.jsx)(s,{...e})}},61744:(e,n,t)=>{t.d(n,{u:()=>i});const r=new(t(76078).Fraction)(1,1);function i(e,n){if(n.lessThan(0)||n.greaterThan(r))throw new Error("Unexpected slippage");return[e.multiply(r.subtract(n)).quotient,e.multiply(r.add(n)).quotient]}}}]);
//# sourceMappingURL=4455.61d8951b.chunk.js.map