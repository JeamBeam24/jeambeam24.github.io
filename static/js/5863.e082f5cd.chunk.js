"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5863,5118,5347],{39753:(e,n,i)=>{i.d(n,{q:()=>j,w:()=>k});var t=i(92936),r=i(69751),o=i(6823),s=i(21926),a=i(43454),d=i(6282),c=i(22953),l=i(47856),u=i(47632),p=i(31744),m=i(14411),x=i(54972),h=i(55874),f=i(72993),v=i(94284);const g=m.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-e4c19afb-0"})`
  ${h.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,m.default)(a.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-e4c19afb-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,m.default)(x.Tv.H1Small).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-e4c19afb-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,w=(0,m.default)(s.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-e4c19afb-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function j({origin:e}){return(0,t.jsx)(g,{children:(0,t.jsxs)(v.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,t.jsx)(a.rU,{to:e,children:(0,t.jsx)(w,{})}),(0,t.jsx)(b,{children:(0,t.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const C=(0,m.default)(x.Tv.H1Small).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-e4c19afb-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function k({adding:e,creating:n,autoSlippage:i,children:s}){const a=(0,f.x)(),x=(0,m.useTheme)(),h=(0,l.T)(),b=(0,d.s0)();return(0,t.jsx)(g,{children:(0,t.jsxs)(v.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,t.jsx)(y,{to:"..",onClick:n=>{n.preventDefault(),b(-1),e&&(h((0,u.dA)()),h((0,p.dA)()))},flex:s?"1":void 0,children:(0,t.jsx)(w,{stroke:x.neutral2})}),(0,t.jsx)(C,{$center:!s,children:n?(0,t.jsx)(o.cC,{children:"Create a pair"}):e?(0,t.jsx)(o.cC,{children:"Add liquidity"}):(0,t.jsx)(o.cC,{children:"Remove liquidity"})}),s&&(0,t.jsx)(c.xu,{style:{marginRight:".5rem"},children:s}),(0,t.jsx)(r.Z,{autoSlippage:i,chainId:a,hideRoutingSettings:!0})]})})}},3094:(e,n,i)=>{i.d(n,{Z:()=>s});var t=i(92936),r=i(45779);const o=i(14411).default.input.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Slider\\index__StyledRangeInput",componentId:"sc-dce001c3-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function s({value:e,onChange:n,min:i=0,step:s=1,max:a=100,size:d=28,...c}){const l=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,t.jsx)(o,{size:d,...c,type:"range",value:e,style:{padding:"15px 0"},onChange:l,"aria-labelledby":"input slider",step:s,min:i,max:a})}},82731:(e,n,i)=>{i.d(n,{SS:()=>m,sq:()=>c,MN:()=>l,RF:()=>u,uO:()=>p,I8:()=>d});var t=i(14411);const r=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=i.p+"static/media/noise.3c7efafc83614205bd1a.png",s=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var a=i(44591);const d=(0,t.default)(a.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-1a2037c7-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,c=t.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-1a2037c7-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,l=t.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-1a2037c7-2"})`
  background: url(${s});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=t.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-1a2037c7-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,t.default)(a.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-1a2037c7-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=t.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-1a2037c7-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},47848:(e,n,i)=>{i.d(n,{Z:()=>r});var t=i(45779);function r(e,n,i=100){const[r,o]=(0,t.useState)((()=>e)),s=(0,t.useRef)(),a=(0,t.useCallback)((e=>{o(e),s.current&&clearTimeout(s.current),s.current=setTimeout((()=>{n(e),s.current=void 0}),i)}),[i,n]);return(0,t.useEffect)((()=>{s.current&&(clearTimeout(s.current),s.current=void 0),o(e)}),[e]),[r,a]}},65118:(e,n,i)=>{i.d(n,{Z:()=>a,e:()=>s});var t=i(92936),r=i(14411),o=i(62587);const s=r.default.main.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
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
`;function a(e){return(0,t.jsx)(s,{...e})}},32219:(e,n,i)=>{i.r(n),i.d(n,{default:()=>de});var t=i(92936),r=i(11604),o=i(5985),s=i(76078),a=i(21651),d=i(12722),c=i(73499),l=i(69780),u=i(61182),p=i(44591),m=i(47841),x=i(63415),h=i(5967),f=i(39753),v=i(94284),g=i(3094),y=i(67716),b=i(82731),w=i(57852),j=i(7151),C=i(47848),k=i(40413),$=i(6823),S=i(24509),z=i(26522),_=i(45779),A=i(6282),I=i(26729),T=i(39671),D=i(55660),q=i(42938),N=i(47856),R=i(5347),U=i(54542);function W(){return(0,N.C)((e=>e.burnV3))}var L=i(99454),P=i(28098),Z=i(54972),E=i(63420),F=i(66136),M=i(51001),V=i(4650),B=i(5931),O=i(590),G=i(99819),H=i(64370),Q=i(47186),Y=i(64510),X=i(17202),J=i(65118),K=i(40926),ee=i(22953),ne=i(14411);const ie=ne.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__Wrapper",componentId:"sc-4a09531d-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,te=(0,ne.default)(K.ER).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__SmallMaxButton",componentId:"sc-4a09531d-1"})`
  font-size: 12px;
`,re=(0,ne.default)(ee.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__ResponsiveHeaderText",componentId:"sc-4a09531d-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;function oe(e,n,i,t,r,o,s){try{var a=e[o](s),d=a.value}catch(c){return void i(c)}a.done?n(d):Promise.resolve(d).then(t,r)}function se(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function s(e){oe(o,t,r,s,a,"next",e)}function a(e){oe(o,t,r,s,a,"throw",e)}s(void 0)}))}}const ae=new s.Percent(50,1e4);function de(){const e=(0,O.m)(),n=(0,w.Nb)(e.chainId),{tokenId:i}=(0,A.UO)(),o=(0,A.TH)(),s=(0,_.useMemo)((()=>{try{return r.O$.from(i)}catch{return null}}),[i]),{position:a,loading:d}=(0,k.n)(s??void 0);return null===s||s.eq(0)?(0,t.jsx)(A.Fg,{to:{...o,pathname:"/pools"},replace:!0}):n&&(d||a)?(0,t.jsx)(ce,{tokenId:s}):(0,t.jsx)(z.PositionPageUnsupportedContent,{})}function ce({tokenId:e}){var n,i,r,w,z,A,K,ee,ne,oe,de,ce,le,ue,pe,me,xe,he,fe,ve,ge,ye,be,we,je,Ce,ke,$e,Se,ze,_e,Ae;const{position:Ie}=(0,k.n)(e),Te=(0,O.m)(),De=(0,M.z)(),qe=(0,d.oO)(),{formatCurrencyAmount:Ne}=(0,F.Gb)(),[Re,Ue]=(0,_.useState)(!1),We=(0,S.Z)(Te.chainId).wrapped.symbol,{percent:Le}=W(),{position:Pe,liquidityPercentage:Ze,liquidityValue0:Ee,liquidityValue1:Fe,feeValue0:Me,feeValue1:Ve,outOfRange:Be,error:Oe}=function(e,n=!1){var i,r,o,d;const{account:c}=(0,I.G)(),{percent:l}=W(),u=(0,T.dQ)(null===(i=e)||void 0===i?void 0:i.token0),p=(0,T.dQ)(null===(r=e)||void 0===r?void 0:r.token1),[,m]=(0,D.AI)(u??void 0,p??void 0,null===(o=e)||void 0===o?void 0:o.fee),x=(0,_.useMemo)((()=>{var n,i,t;return m&&(null===(n=e)||void 0===n?void 0:n.liquidity)&&"number"===typeof(null===(i=e)||void 0===i?void 0:i.tickLower)&&"number"===typeof(null===(t=e)||void 0===t?void 0:t.tickUpper)?new a.Position({pool:m,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[m,e]),h=new s.Percent(l,100),f=x?h.multiply(x.amount0.quotient).quotient:void 0,v=x?h.multiply(x.amount1.quotient).quotient:void 0,g=u&&f?s.CurrencyAmount.fromRawAmount(n?u:(0,R.B)(u),f):void 0,y=p&&v?s.CurrencyAmount.fromRawAmount(n?p:(0,R.B)(p),v):void 0,[b,w]=(0,q.t)(m??void 0,null===(d=e)||void 0===d?void 0:d.tokenId,n),j=!(!m||!e)&&(m.tickCurrent<e.tickLower||m.tickCurrent>e.tickUpper);let C;return c||(C=(0,t.jsx)($.cC,{children:"Connect wallet"})),0===l&&(C=C??(0,t.jsx)($.cC,{children:"Enter a percent"})),{position:x,liquidityPercentage:h,liquidityValue0:g,liquidityValue1:y,feeValue0:b,feeValue1:w,outOfRange:j,error:C}}(Ie,Re),{onPercentSelect:Ge}=function(){const e=(0,N.T)();return{onPercentSelect:(0,_.useCallback)((n=>{e((0,U.o)({percent:n}))}),[e])}}(),He=null===(i=Ie)||void 0===i||null===(n=i.liquidity)||void 0===n?void 0:n.eq(0),[Qe,Ye]=(0,C.Z)(Le,Ge),Xe=(0,V.n)(),Je=(0,P.eq)(ae),[Ke,en]=(0,_.useState)(!1),[nn,tn]=(0,_.useState)(!1),[rn,on]=(0,_.useState)(),sn=(0,L.h7)(),an=(0,j.GL)(),dn=(0,_.useCallback)(se((function*(){if(tn(!0),!an||!Ee||!Fe||"connected"!==Te.status||!Pe||!Ze||!De)return;const n=yield Xe();if(!n)throw new Error("could not get deadline");const{calldata:i,value:t}=a.NonfungiblePositionManager.removeCallParameters(Pe,{tokenId:e.toString(),liquidityPercentage:Ze,slippageTolerance:Je,deadline:n.toString(),collectOptions:{expectedCurrencyOwed0:Me??s.CurrencyAmount.fromRawAmount(Ee.currency,0),expectedCurrencyOwed1:Ve??s.CurrencyAmount.fromRawAmount(Fe.currency,0),recipient:Te.address}}),r={to:an.address,data:i,value:t},c=yield De.getChainId();if(Te.chainId!==c)throw new E.CJ;De.estimateGas(r).then((e=>{const n={...r,gasLimit:(0,Y.y)(e)};return De.sendTransaction(n).then((e=>{(0,d._P)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[Ee.currency.symbol,Fe.currency.symbol].join("/"),...qe}),on(e.hash),tn(!1),sn(e,{type:Q.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,X.H)(Ee.currency),quoteCurrencyId:(0,X.H)(Fe.currency),expectedAmountBaseRaw:Ee.quotient.toString(),expectedAmountQuoteRaw:Fe.quotient.toString()})}))})).catch((e=>{tn(!1),console.error(e)}))})),[an,Ee,Fe,Te.status,Te.address,Te.chainId,Pe,Ze,De,Xe,e,Je,Me,Ve,qe,sn]),cn=(0,_.useCallback)((()=>{en(!1),rn&&Ye(0),tn(!1),on("")}),[Ye,rn]),ln=(0,t.jsxs)($.cC,{children:["Removing ",{amt:null===(r=Ee)||void 0===r?void 0:r.toSignificant(6)}," ",{sym:null===(z=Ee)||void 0===z||null===(w=z.currency)||void 0===w?void 0:w.symbol}," and"," ",{amt2:null===(A=Fe)||void 0===A?void 0:A.toSignificant(6)}," ",{sym2:null===(ee=Fe)||void 0===ee||null===(K=ee.currency)||void 0===K?void 0:K.symbol}]});function un(){var e,n,i,r,o,s,a,d,c,u,m,x,f,g;return(0,t.jsxs)(p.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,t.jsxs)(v.m0,{align:"flex-end",children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:["Pooled ",{sym:null===(n=Ee)||void 0===n||null===(e=n.currency)||void 0===e?void 0:e.symbol},":"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ee&&Ne({amount:Ee})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(i=Ee)||void 0===i?void 0:i.currency})]})]}),(0,t.jsxs)(v.m0,{align:"flex-end",children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:["Pooled ",{sym:null===(o=Fe)||void 0===o||null===(r=o.currency)||void 0===r?void 0:r.symbol},":"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&Ne({amount:Fe})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(s=Fe)||void 0===s?void 0:s.currency})]})]}),(null===(a=Me)||void 0===a?void 0:a.greaterThan(0))||(null===(d=Ve)||void 0===d?void 0:d.greaterThan(0))?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B.xv,{fontSize:12,color:"$neutral2",textAlign:"left",pt:8,children:(0,t.jsx)($.cC,{children:"You will also collect fees earned from this position."})}),(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{sym:null===(u=Me)||void 0===u||null===(c=u.currency)||void 0===c?void 0:c.symbol}," Fees Earned:"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ne({amount:Me})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(m=Me)||void 0===m?void 0:m.currency})]})]}),(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{sym:null===(f=Ve)||void 0===f||null===(x=f.currency)||void 0===x?void 0:x.symbol}," Fees Earned:"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ve&&Ne({amount:Ve})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(g=Ve)||void 0===g?void 0:g.currency})]})]})]}):null,(0,t.jsx)(l.DF,{mt:"16px",onClick:dn,children:(0,t.jsx)($.cC,{children:"Remove"})})]})}const pn=Boolean((null===(ne=Ee)||void 0===ne?void 0:ne.currency)&&(null===(oe=Fe)||void 0===oe?void 0:oe.currency)&&(Ee.currency.isNative||Fe.currency.isNative||(null===(de=H.Fl[Ee.currency.chainId])||void 0===de?void 0:de.equals(Ee.currency.wrapped))||(null===(ce=H.Fl[Fe.currency.chainId])||void 0===ce?void 0:ce.equals(Fe.currency.wrapped))));return(0,t.jsxs)(p.Tz,{children:[(0,t.jsx)(G.Z,{isOpen:Ke,onDismiss:cn,attemptingTxn:nn,hash:rn??"",reviewContent:()=>(0,t.jsx)(G.p,{title:(0,t.jsx)($.cC,{children:"Remove liquidity"}),onDismiss:cn,topContent:un}),pendingText:ln}),(0,t.jsxs)(J.Z,{$maxWidth:"unset",children:[(0,t.jsx)(f.w,{creating:!1,adding:!1,autoSlippage:ae}),(0,t.jsx)(ie,{children:Ie?(0,t.jsxs)(p.Tz,{gap:"lg",children:[(0,t.jsxs)(v.m0,{children:[(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(m.ge,{currencies:[null===(le=Ee)||void 0===le?void 0:le.currency,null===(ue=Fe)||void 0===ue?void 0:ue.currency],size:20}),(0,t.jsx)(Z.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(me=Ee)||void 0===me||null===(pe=me.currency)||void 0===pe?void 0:pe.symbol}/${null===(he=Fe)||void 0===he||null===(xe=he.currency)||void 0===xe?void 0:xe.symbol}`})]}),(0,t.jsx)(c.Z,{removed:He,inRange:!Be})]}),(0,t.jsx)(u.hl,{children:(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsx)(Z.Tv.DeprecatedMain,{fontWeight:485,children:(0,t.jsx)($.cC,{children:"Amount"})}),(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(re,{children:(0,t.jsxs)($.cC,{children:[{percentForSlider:Qe},"%"]})}),(0,t.jsxs)(v.BA,{gap:"4px",justify:"flex-end",children:[(0,t.jsx)(te,{onClick:()=>Ge(25),width:"20%",children:(0,t.jsx)($.cC,{children:"25%"})}),(0,t.jsx)(te,{onClick:()=>Ge(50),width:"20%",children:(0,t.jsx)($.cC,{children:"50%"})}),(0,t.jsx)(te,{onClick:()=>Ge(75),width:"20%",children:(0,t.jsx)($.cC,{children:"75%"})}),(0,t.jsx)(te,{onClick:()=>Ge(100),width:"20%",children:(0,t.jsx)($.cC,{children:"Max"})})]})]}),(0,t.jsx)(g.Z,{value:Qe,onChange:Ye})]})}),(0,t.jsx)(u.hl,{children:(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokena-symbol",children:(0,t.jsxs)($.cC,{children:["Pooled ",{symbol:null===(ve=Ee)||void 0===ve||null===(fe=ve.currency)||void 0===fe?void 0:fe.symbol},":"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ee&&Ne({amount:Ee})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(ge=Ee)||void 0===ge?void 0:ge.currency})]})]}),(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokenb-symbol",children:(0,t.jsxs)($.cC,{children:["Pooled ",{symbol:null===(be=Fe)||void 0===be||null===(ye=be.currency)||void 0===ye?void 0:ye.symbol},":"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&Ne({amount:Fe})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(we=Fe)||void 0===we?void 0:we.currency})]})]}),(null===(je=Me)||void 0===je?void 0:je.greaterThan(0))||(null===(Ce=Ve)||void 0===Ce?void 0:Ce.greaterThan(0))?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.SS,{}),(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{symbol:null===($e=Me)||void 0===$e||null===(ke=$e.currency)||void 0===ke?void 0:ke.symbol}," Fees Earned:"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ne({amount:Me})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Se=Me)||void 0===Se?void 0:Se.currency})]})]}),(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",children:(0,t.jsxs)($.cC,{children:[{symbol:null===(_e=Ve)||void 0===_e||null===(ze=_e.currency)||void 0===ze?void 0:ze.symbol}," Fees Earned:"]})}),(0,t.jsxs)(v.DA,{children:[(0,t.jsx)(B.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ve&&Ne({amount:Ve})}),(0,t.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Ae=Ve)||void 0===Ae?void 0:Ae.currency})]})]})]}):null]})}),pn&&(0,t.jsxs)(v.m0,{children:[(0,t.jsx)(Z.Tv.DeprecatedMain,{children:(0,t.jsxs)($.cC,{children:["Collect as ",{nativeWrappedSymbol:We}]})}),(0,t.jsx)(y.Z,{id:"receive-as-weth",isActive:Re,toggle:()=>Ue((e=>!e))})]}),(0,t.jsx)("div",{style:{display:"flex"},children:(0,t.jsx)(p.Tz,{gap:"md",style:{flex:"1"},children:(0,t.jsx)(l.gn,{confirmed:!1,disabled:He||0===Le||!Ee,onClick:()=>en(!0),children:He?(0,t.jsx)($.cC,{children:"Closed"}):Oe??(0,t.jsx)($.cC,{children:"Remove"})})})})]}):(0,t.jsx)(x.ZP,{})})]})]})}},5347:(e,n,i)=>{i.d(n,{B:()=>r});var t=i(64370);function r(e){var n;return e.isNative?e:(null===(n=t.Fl[e.chainId])||void 0===n?void 0:n.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=5863.e082f5cd.chunk.js.map