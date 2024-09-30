"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1271,5118],{16709:(e,t,n)=>{n.d(t,{Z:()=>s});n(45779);const s=n.p+"static/media/blue-loader.ca1aedeb13ab14d6ef4eb375580604ad.svg"},32305:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(92936),a=n(6823),i=n(45779),o=n(14411),r=n(54972),l=n(55874),d=n(72993),c=n(27296),p=n(54703),u=n(44591),h=n(94284);const m=o.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\AddressInputPanel\\index__InputPanel",componentId:"sc-63ab9f36-0"})`
  ${l.lt};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:e})=>e.surface1};
  z-index: 1;
  width: 100%;
`,f=o.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\AddressInputPanel\\index__ContainerRow",componentId:"sc-63ab9f36-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:e,theme:t})=>e?t.critical:t.surface3};
  transition: border-color 300ms ${({error:e})=>e?"step-end":"step-start"},
    color 500ms ${({error:e})=>e?"step-end":"step-start"};
  background-color: ${({theme:e})=>e.surface1};
`,g=o.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\AddressInputPanel\\index__InputContainer",componentId:"sc-63ab9f36-2"})`
  flex: 1;
  padding: 1rem;
`,x=o.default.input.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\AddressInputPanel\\index__Input",componentId:"sc-63ab9f36-3"})`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`;function y({id:e,className:t="recipient-address-input",label:n,placeholder:l,value:y,onChange:w}){const v=(0,d.x)(),b=(0,o.useTheme)(),{address:C,loading:j,name:k}=(0,c.Z)(y),T=(0,i.useCallback)((e=>{const t=e.target.value.replace(/\s+/g,"");w(t)}),[w]),D=Boolean(y.length>0&&!j&&!C);return(0,s.jsx)(m,{id:e,children:(0,s.jsx)(f,{error:D,children:(0,s.jsx)(g,{children:(0,s.jsxs)(u.Tz,{gap:"md",children:[(0,s.jsxs)(h.m0,{children:[(0,s.jsx)(r.Tv.DeprecatedBlack,{color:b.neutral2,fontWeight:535,fontSize:14,children:n??(0,s.jsx)(a.cC,{children:"Recipient"})}),C&&v&&(0,s.jsx)(r.dL,{href:(0,p.E)(v,k??C,p.r.ADDRESS),style:{fontSize:"14px"},children:(0,s.jsx)(a.cC,{children:"(View on Explorer)"})})]}),(0,s.jsx)(x,{className:t,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:l??a.t`Wallet address or ENS name`,error:D,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:T,value:y})]})})})})}},74293:(e,t,n)=>{n.d(t,{Z:()=>O});var s=n(92936),a=n(5985),i=n(26729),o=n(12722),r=n(32546),l=n(57852),d=n(6823),c=n(36399),p=n(45779),u=n(14411),h=n(66869),m=n(54972),f=n(55874),g=n(66136),x=n(47841),y=n(93741),w=n(96326),v=n(73720),b=n(69780),C=n(5967),j=n(17706),k=n(94284),T=n(24210),D=n(19996);const I=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-e47f9ec2-0"})`
  ${f.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:t})=>t?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,A=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-e47f9ec2-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:t,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${t?" transparent":e.surface2};\n    }\n  `}
`,N=(0,u.default)(b.Ux).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-e47f9ec2-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:t})=>e?t.surface1:t.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
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
    background-color: ${({selected:e,theme:t})=>e?t.surface2:(0,c._j)(.05,t.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,E=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-e47f9ec2-3"})`
  ${f.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,_=u.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-e47f9ec2-4"})`
  ${f.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,c._j)(.2,e.neutral2)};
  }
`,S=(0,u.default)(_).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-e47f9ec2-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,P=u.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-e47f9ec2-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,U=(0,u.default)(w.r).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-e47f9ec2-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:t})=>e?t.neutral1:t.white};
    stroke-width: 1.5px;
  }
`,M=u.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-e47f9ec2-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${h.j$.sm}px) {
    font-size: 16px;
  }
`,$=u.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-e47f9ec2-9"})`
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
`,V=(0,u.default)(j.I).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-e47f9ec2-10"})`
  ${r._Q};
  text-align: left;
`,R=(0,u.default)(y.Kh).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-e47f9ec2-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function O({value:e,onUserInput:t,onMax:n,showMaxButton:c,onCurrencySelect:h,currency:f,otherCurrency:y,id:w,currencySearchFilters:b,showCurrencyAmount:j,renderBalance:_,fiatValue:O,hideBalance:L=!1,pair:z=null,hideInput:B=!1,locked:W=!1,loading:F=!1,...G}){var H,Z,q,Q,K;const[Y,X]=(0,p.useState)(!1),{account:J,chainId:ee}=(0,i.G)(),te=(0,l.Nb)(ee),ne=(0,v._h)(J??void 0,f??void 0),se=(0,u.useTheme)(),{formatCurrencyAmount:ae}=(0,g.Gb)(),ie=(0,p.useCallback)((()=>{X(!1)}),[X]);return(0,s.jsxs)(I,{id:w,hideInput:B,...G,children:[!W&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(A,{hideInput:B,disabled:!te,children:[(0,s.jsxs)(E,{style:B?{padding:"0",borderRadius:"8px"}:{},selected:!h,children:[!B&&(0,s.jsx)(V,{className:"token-amount-input",value:e,onUserInput:t,disabled:!te,$loading:F,maxDecimals:null===(H=f)||void 0===H?void 0:H.decimals}),(0,s.jsx)(R,{$fullWidth:B,children:(0,s.jsx)(N,{disabled:!te,visible:void 0!==f,selected:!!f,hideInput:B,className:"open-currency-select-button",onClick:()=>{h&&X(!0)},pointerEvents:h?void 0:"none",children:(0,s.jsxs)(P,{children:[(0,s.jsxs)(k.DA,{children:[z?(0,s.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,s.jsx)(x.ge,{currencies:[z.token0,z.token1],size:24})}):f&&(0,s.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:f,size:24}),z?(0,s.jsxs)(M,{className:"pair-name-container",children:[null===(Z=z)||void 0===Z?void 0:Z.token0.symbol,":",null===(q=z)||void 0===q?void 0:q.token1.symbol]}):(0,s.jsx)(M,{className:"token-symbol-container",active:Boolean(f&&f.symbol),children:(f&&f.symbol&&f.symbol.length>20?f.symbol.slice(0,4)+"..."+f.symbol.slice(f.symbol.length-5,f.symbol.length):null===(Q=f)||void 0===Q?void 0:Q.symbol)||(0,s.jsx)(d.cC,{children:"Select a token"})})]}),h&&(0,s.jsx)(U,{selected:!!f})]})})})]}),Boolean(!B&&!L&&f)&&(0,s.jsx)(S,{children:(0,s.jsxs)(k.m0,{children:[(0,s.jsx)(r.EG,{$loading:F,children:O&&(0,s.jsx)(D.x,{fiatValue:O})}),J&&(0,s.jsxs)(k.DA,{style:{height:"17px"},children:[(0,s.jsx)(m.Tv.DeprecatedBody,{onClick:n,color:se.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!L&&f&&ne)&&((null===(K=_)||void 0===K?void 0:K(ne))||(0,s.jsxs)(d.cC,{children:["Balance:"," ",{amount:ae({amount:ne,type:g.sw.TokenNonTx})}]}))}),Boolean(c&&ne)&&(0,s.jsx)(o.M8,{events:[a.TM.onClick],name:a.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:a.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,s.jsx)($,{onClick:n,children:(0,s.jsx)(d.cC,{children:"MAX"})})})]})]})})]})}),h&&(0,s.jsx)(T.Z,{isOpen:Y,onDismiss:ie,onCurrencySelect:h,selectedCurrency:f,otherSelectedCurrency:y,showCurrencyAmount:j,currencySearchFilters:b})]})}},94961:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(92936),a=n(76078),i=n(61592),o=n.n(i);const r=new a.Fraction(o().BigInt(1),o().BigInt(1e6));function l({currencyAmount:e,significantDigits:t=4}){return(0,s.jsx)(s.Fragment,{children:e.equalTo(o().BigInt(0))?"0":e.greaterThan(r)?e.toSignificant(t):`<${r.toSignificant(1)}`})}},82731:(e,t,n)=>{n.d(t,{SS:()=>h,sq:()=>d,MN:()=>c,RF:()=>p,uO:()=>u,I8:()=>l});var s=n(14411);const a=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",i=n.p+"static/media/noise.3c7efafc83614205bd1a.png",o=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var r=n(44591);const l=(0,s.default)(r.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-1a2037c7-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=s.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-1a2037c7-1"})`
  background: url(${a});
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
`,c=s.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-1a2037c7-2"})`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=s.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-1a2037c7-3"})`
  background: url(${i});
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
`,u=(0,s.default)(r.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-1a2037c7-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-1a2037c7-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},27296:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(45779),a=n(13446),i=n(36145),o=n(27179);function r(e){const t=(0,a.UJ)(e),n=(0,o.Z)(t||void 0),r=(0,i.Z)(e);return(0,s.useMemo)((()=>({loading:n.loading||r.loading,address:t||r.address,name:n.ENSName?n.ENSName:!t&&r.address&&e||null})),[r.address,r.loading,e,n.ENSName,n.loading,t])}},65118:(e,t,n)=>{n.d(t,{Z:()=>r,e:()=>o});var s=n(92936),a=n(14411),i=n(62587);const o=a.default.main.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-de634c55-0"})`
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
  z-index: ${i.k.default};
`;function r(e){return(0,s.jsx)(o,{...e})}},40926:(e,t,n)=>{n.d(t,{DC:()=>r,ER:()=>l,bb:()=>d,im:()=>o,pr:()=>c});var s=n(32546),a=n(22953),i=n(14411);const o=i.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-e4e1fcd6-0"})`
  position: relative;
  padding: 20px;
`,r=(0,i.default)(a.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-e4e1fcd6-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,l=i.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-e4e1fcd6-2"})`
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
`,d=i.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-e4e1fcd6-3"})`
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
`,c=(0,i.default)(s.pr).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-e4e1fcd6-4"})`
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
`},45727:(e,t,n)=>{n.r(t),n.d(t,{default:()=>En});var s=n(92936),a=n(31042),i=n(16851),o=n(5985),r=n(26729),l=n(12722),d=n(69780),c=n(61182),p=n(44591),u=n(6823),h=n(61592),m=n.n(h),f=n(89882),g=n(40926),x=n(45779),y=n(21926),w=n(43454),v=n(51371),b=n(29400),C=n(72993),j=n(37240),k=n(71383),T=n(76078);const D={[T.ChainId.MAINNET]:{[T.UNI_ADDRESSES[T.ChainId.MAINNET]]:"UNI",[T.TIMELOCK_ADDRESSES[T.ChainId.MAINNET]]:"Timelock",[T.GOVERNANCE_ALPHA_V0_ADDRESSES[T.ChainId.MAINNET]]:"Governance (V0)",[T.GOVERNANCE_ALPHA_V1_ADDRESSES[T.ChainId.MAINNET]]:"Governance (V1)",[T.GOVERNANCE_BRAVO_ADDRESSES[T.ChainId.MAINNET]]:"Governance","0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e":"ENS Registry","0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41":"ENS Public Resolver","0xf754A7E347F81cFdc70AF9FbCCe9Df3D826360FA":"Franchiser Factory"}},I=12,A={1:I},N=2,E="Should Uniswap v3 be deployed to Polygon?",_="# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n";var S=n(7151),P=n(84938);const U=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldProposalThreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"ProposalThresholdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"support","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"VoteCast","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingDelay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"VotingDelaySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"VotingPeriodSet","type":"event"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalCount","type":"uint256"}],"name":"_initiate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"_setProposalThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"_setVotingDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"_setVotingPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"string","name":"reason","type":"string"}],"name":"castVoteWithReason","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorBravoDelegateStorageV1.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"uni_","type":"address"},{"internalType":"uint256","name":"votingPeriod_","type":"uint256"},{"internalType":"uint256","name":"votingDelay_","type":"uint256"},{"internalType":"uint256","name":"proposalThreshold_","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"uint256","name":"abstainVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorBravoDelegateStorageV1.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract UniInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');var M=n(64510);const $=11473815,V=13059344,R=13551293,O=13786993,L=14732457;var z,B=n(64370),W=n(70152),F=n(47856),G=n(27414),H=n(95591);!function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.SYNCING=2]="SYNCING",e[e.ERROR=3]="ERROR",e[e.SYNCED=4]="SYNCED"}(z||(z={}));var Z=n(99454),q=n(47186),Q=n(53286);function K(){return(0,S.cq)(T.GOVERNANCE_BRAVO_ADDRESSES,U,!0)}const Y=K;function X(){const e=(0,C.x)(),t=(0,x.useMemo)((()=>{var t;return e?null===(t=B.yg[e])||void 0===t?void 0:t.address:void 0}),[e]);return(0,S.cq)(t,k.Mt,!0)}var J;!function(e){e[e.UNDETERMINED=-1]="UNDETERMINED",e[e.PENDING=0]="PENDING",e[e.ACTIVE=1]="ACTIVE",e[e.CANCELED=2]="CANCELED",e[e.DEFEATED=3]="DEFEATED",e[e.SUCCEEDED=4]="SUCCEEDED",e[e.QUEUED=5]="QUEUED",e[e.EXPIRED=6]="EXPIRED",e[e.EXECUTED=7]="EXECUTED"}(J||(J={}));const ee=new v.vU(j.Mt);function te(e){var t,n;const{result:s}=(0,P.Wk)(e,"proposalCount");return null===(n=s)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toNumber()}const ne={"0x5ef2c7f0":"setSubnodeRecord(bytes32,bytes32,address,address,uint64)","0x10f13a8c":"setText(bytes32,string,string)","0xb4720477":"sendMessageToChild(address,bytes)","0xa9059cbb":"transfer(address,uint256)","0x095ea7b3":"approve(address,uint256)","0x7b1837de":"fund(address,uint256)"};function se(e,t,n,s){const i=function(e){const t=(0,C.x)(),n=(0,W.ZP)(),s=(0,F.C)((e=>e.logs)),a=(0,F.T)();return(0,x.useEffect)((()=>{if(e&&t)return a((0,G.NH)({chainId:t,filter:e})),()=>{a((0,G.ys)({chainId:t,filter:e}))}}),[t,a,e]),(0,x.useMemo)((()=>{var a,i;if(!t||!e||!n)return{logs:void 0,state:z.INVALID};const o=null===(i=null===(a=s[t])||void 0===a?void 0:a[(0,H.QM)(e)])||void 0===i?void 0:i.results;return o?o.error?{state:z.ERROR,logs:void 0}:{state:(0,H.x5)(e,n)||o.blockNumber>=n?z.SYNCED:z.SYNCING,logs:o.logs}:{state:z.LOADING,logs:void 0}}),[n,t,e,s])}((0,x.useMemo)((()=>{var t,a;const i=null===(a=e)||void 0===a||null===(t=a.filters)||void 0===t?void 0:t.ProposalCreated();if(i)return{...i,fromBlock:n,toBlock:s}}),[e,n,s]));return(0,x.useMemo)((()=>{var e,n,s,o;return null===(o=i)||void 0===o||null===(s=o.logs)||void 0===s||null===(n=s.map((e=>ee.parseLog(e).args)))||void 0===n||null===(e=n.filter((e=>t.flat().some((t=>t===e.id.toNumber())))))||void 0===e?void 0:e.map((e=>{var t;let n;const s=parseInt(null===(t=e.startBlock)||void 0===t?void 0:t.toString());try{n=e.description}catch(i){let e=b.te.replace;if(s===V){const t=[226,128,152].toString(),n=[226,128,166].toString();e=(e,s,a,i)=>{if(e===b.Uw.UNEXPECTED_CONTINUE){const e=[a[s],a[s+1],a[s+2]].reverse().toString();if(e===t)return i.push(8216),2;if(e===n)return i.push(8230),2}return b.te.replace(e,s,a,i)}}n=JSON.parse((0,b.ZN)(i.error.value,e))||""}return s!==V&&s!==R&&s!==L||(n=n.replace(/ {2}/g,"\n").replace(/\d\. /g,"\n$&")),{description:n,details:e.targets.map(((t,n)=>{const s=e.signatures[n];let i,o,r=e.calldatas[n];if(""===s){const e=r.slice(0,10),t=ne[e]??"UNKNOWN()";if(!t)throw new Error("Missing four byte sig");[i,o]=t.substring(0,t.length-1).split("("),r=`0x${r.slice(10)}`}else[i,o]=s.substring(0,s.length-1).split("(");return{target:t,functionSig:i,callData:a.$.decode(o.split(","),r).join(", ")}}))}}))}),[t,i])}const ae=[[1],[2],[3],[4]],ie=[[1],[2],[3]];function oe(e,t=0){return"number"===typeof e?new Array(e-t).fill(0).map(((e,n)=>[n+1+t])):[]}function re(){const e=(0,C.x)(),t=(0,S.cq)(T.GOVERNANCE_ALPHA_V0_ADDRESSES,j.Mt,!1),n=(0,S.cq)(T.GOVERNANCE_ALPHA_V1_ADDRESSES,j.Mt,!1),s=K(),a=te(t),i=te(n),o=te(s),r=(0,x.useMemo)((()=>e===T.ChainId.MAINNET?ae:oe(a)),[e,a]),l=(0,x.useMemo)((()=>e===T.ChainId.MAINNET?ie:oe(i)),[e,i]),d=(0,x.useMemo)((()=>oe(o,8)),[o]),c=(0,P.es)(t,"proposals",r),p=(0,P.es)(n,"proposals",l),h=(0,P.es)(s,"proposals",d),m=(0,P.es)(t,"state",r),f=(0,P.es)(n,"state",l),g=(0,P.es)(s,"state",d),y=se(t,r,11042287,12563484),w=se(n,l,12686656,13059343),v=se(s,d,13538153),b=(0,x.useMemo)((()=>e?B.yg[e]:void 0),[e]);return(0,x.useMemo)((()=>{const e=[...c,...p,...h],a=[...m,...f,...g],i=[...y??[],...w??[],...v??[]];return!b||e.some((e=>e.loading))||a.some((e=>e.loading))||t&&!y||n&&!w||s&&!v?{data:[],loading:!0}:{data:e.map(((e,t)=>{var n,s,o,r,l,d,h,m,f,g,x,y,w,v,C,j,k,D,I,A,N;const S=parseInt(null===(o=e)||void 0===o||null===(s=o.result)||void 0===s||null===(n=s.startBlock)||void 0===n?void 0:n.toString());let P=(null===(r=i[t])||void 0===r?void 0:r.description)??"";S===$&&(P=_);let U=null===(l=P)||void 0===l?void 0:l.split(/#+\s|\n/g)[1];return S===O&&(U=E),{id:null===(h=e)||void 0===h||null===(d=h.result)||void 0===d?void 0:d.id.toString(),title:U??u.t`Untitled`,description:P??u.t`No description.`,proposer:null===(f=e)||void 0===f||null===(m=f.result)||void 0===m?void 0:m.proposer,status:(null===(x=a[t])||void 0===x||null===(g=x.result)||void 0===g?void 0:g[0])??J.UNDETERMINED,forCount:T.CurrencyAmount.fromRawAmount(b,null===(w=e)||void 0===w||null===(y=w.result)||void 0===y?void 0:y.forVotes),againstCount:T.CurrencyAmount.fromRawAmount(b,null===(C=e)||void 0===C||null===(v=C.result)||void 0===v?void 0:v.againstVotes),startBlock:S,endBlock:parseInt(null===(D=e)||void 0===D||null===(k=D.result)||void 0===k||null===(j=k.endBlock)||void 0===j?void 0:j.toString()),eta:null===(A=e)||void 0===A||null===(I=A.result)||void 0===I?void 0:I.eta,details:null===(N=i[t])||void 0===N?void 0:N.details,governorIndex:t>=c.length+p.length?2:t>=c.length?1:0}})),loading:!1}}),[y,w,v,t,n,s,m,f,g,c,p,h,b])}function le(e,t){var n;const{data:s}=re();return null===(n=s.filter((t=>t.governorIndex===e)))||void 0===n?void 0:n.find((e=>e.id===t))}function de(){var e;const{account:t}=(0,r.G)(),n=X(),{result:s}=(0,P.Wk)(n,"delegates",[t??void 0]);return(null===(e=s)||void 0===e?void 0:e[0])??void 0}function ce(){const{account:e,chainId:t}=(0,r.G)(),n=X(),{result:s,loading:a}=(0,P.Wk)(n,"getCurrentVotes",[e??void 0]);return(0,x.useMemo)((()=>{var e;const n=t?B.yg[t]:void 0;return{loading:a,votes:n&&s?T.CurrencyAmount.fromRawAmount(n,null===(e=s)||void 0===e?void 0:e[0]):void 0}}),[t,a,s])}var pe,ue=n(14411),he=n(54972),me=n(65118),fe=n(32305),ge=n(74293),xe=n(2562),ye=n(94284),we=n(49934),ve=n(22953);!function(e){e.TRANSFER_TOKEN="Transfer Token",e.APPROVE_TOKEN="Approve Token"}(pe||(pe={}));const be=(0,ue.default)(p.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ContentWrapper",componentId:"sc-9dcd2f35-0"})`
  width: 100%;
  flex: 1 1;
  position: relative;
`,Ce=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ActionSelectorHeader",componentId:"sc-9dcd2f35-1"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
  margin-bottom: 10px;
`,je=(0,ue.default)(d.Kb).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ActionDropdown",componentId:"sc-9dcd2f35-2"})`
  padding: 0px;
  background-color: transparent;
  color: ${({theme:e})=>e.neutral1};
  font-size: 1.25rem;

  :hover,
  :active,
  :focus {
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`,ke=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ProposalActionSelectorFlex",componentId:"sc-9dcd2f35-3"})`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Te=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ProposalActionSelectorContainer",componentId:"sc-9dcd2f35-4"})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1em;
`,De=({className:e,onClick:t,proposalAction:n})=>(0,s.jsx)(ke,{children:(0,s.jsxs)(Te,{className:e,children:[(0,s.jsx)(Ce,{children:(0,s.jsx)(u.cC,{children:"Proposed action"})}),(0,s.jsx)(je,{onClick:t,children:n})]})});function Ie({isOpen:e,onDismiss:t,onProposalActionSelect:n}){const a=(0,x.useCallback)((e=>{n(e),t()}),[t,n]);return(0,s.jsx)(xe.Z,{isOpen:e,onDismiss:t,children:(0,s.jsxs)(be,{children:[(0,s.jsx)(we.AC,{gap:"16px",children:(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(ve.xv,{fontWeight:535,fontSize:16,children:(0,s.jsx)(u.cC,{children:"Select an action"})}),(0,s.jsx)(he.Tw,{onClick:t})]})}),(0,s.jsx)(we.Z0,{}),(0,s.jsx)(we.sN,{onClick:()=>a(pe.TRANSFER_TOKEN),children:(0,s.jsx)(p.ZP,{children:(0,s.jsx)(ve.xv,{fontWeight:535,children:(0,s.jsx)(u.cC,{children:"Transfer token"})})})}),(0,s.jsx)(we.sN,{onClick:()=>a(pe.APPROVE_TOKEN),children:(0,s.jsx)(p.ZP,{children:(0,s.jsx)(ve.xv,{fontWeight:535,children:(0,s.jsx)(u.cC,{children:"Approve token"})})})})]})})}var Ae;!function(e){e[e.ADDRESS=0]="ADDRESS",e[e.CURRENCY=1]="CURRENCY"}(Ae||(Ae={}));const Ne=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionDetail__ProposalActionDetailContainer",componentId:"sc-b62ef950-0"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > * {
    width: 100%;
  }
  > :not(:last-child) {
    margin-bottom: 10px;
  }
`,Ee={disableNonToken:!0,showCommonBases:!1},_e=({className:e,proposalAction:t,currency:n,amount:a,toAddress:i,onCurrencySelect:o,onAmountInput:r,onToAddressInput:l})=>{const d={[pe.TRANSFER_TOKEN]:[{type:Ae.ADDRESS,label:(0,s.jsx)(u.cC,{children:"To"})},{type:Ae.CURRENCY}],[pe.APPROVE_TOKEN]:[{type:Ae.ADDRESS,label:(0,s.jsx)(u.cC,{children:"To"})},{type:Ae.CURRENCY}]};return(0,s.jsx)(Ne,{className:e,children:d[t].map(((e,t)=>e.type===Ae.ADDRESS?(0,s.jsx)(fe.Z,{label:e.label,value:i,onChange:l},t):e.type===Ae.CURRENCY?(0,s.jsx)(ge.Z,{value:a,currency:n,onUserInput:e=>r(e),onCurrencySelect:e=>o(e),showMaxButton:!1,showCurrencyAmount:!1,hideBalance:!0,id:"currency-input",currencySearchFilters:Ee},t):null))})},Se=ue.default.input.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TextInput\\index__Input",componentId:"sc-67fd5149-0"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`,Pe=ue.default.textarea.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\TextInput\\index__TextAreaInput",componentId:"sc-67fd5149-1"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  resize: none;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.critical:t.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  line-height: 1.2;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral2};
  }
`,Ue=(0,x.memo)((({className:e,value:t,onUserInput:n,placeholder:a,fontSize:i})=>{const o=(0,x.useRef)(document.createElement("textarea")),r=(0,x.useCallback)((e=>{o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px",n(e.target.value)}),[n]);return(0,s.jsx)(Pe,{style:{height:"auto",minHeight:"535px"},className:e,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:r,value:t,fontSize:i,ref:o})}));Ue.displayName="ResizingTextArea";const Me=(0,ue.default)(ve.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalEditor__ProposalEditorHeader",componentId:"sc-86ae0868-0"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
`,$e=(0,x.memo)((0,ue.default)((({className:e,value:t,onUserInput:n,placeholder:a,fontSize:i})=>{const o=(0,x.useCallback)((e=>{n(e.target.value)}),[n]);return(0,s.jsx)("div",{className:e,children:(0,s.jsx)(Se,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:o,value:t,fontSize:i})})})).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalEditor__ProposalTitle",componentId:"sc-86ae0868-1"})`
  margin-top: 10.5px;
  margin-bottom: 7.5px;
`),Ve=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\ProposalEditor__ProposalEditorContainer",componentId:"sc-86ae0868-2"})`
  margin-top: 10px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Re=({className:e,title:t,body:n,onTitleInput:a,onBodyInput:i})=>(0,s.jsxs)(Ve,{className:e,children:[(0,s.jsx)(Me,{children:(0,s.jsx)(u.cC,{children:"Proposal"})}),(0,s.jsx)($e,{value:t,onUserInput:a,placeholder:u.t`Proposal Title`,fontSize:"1.25rem"}),(0,s.jsx)("hr",{}),(0,s.jsx)(Ue,{value:n,onUserInput:i,placeholder:"## Summary\n\nInsert your summary here\n\n## Methodology\n  \nInsert your methodology here\n\n## Conclusion\n  \nInsert your conclusion here\n  \n  ",fontSize:"1rem"})]});var Oe=n(33882),Le=n(16709),ze=n(54703);const Be=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\ModalViews\\index__ConfirmOrLoadingWrapper",componentId:"sc-61fe316d-0"})`
  width: 100%;
  padding: 24px;
`,We=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\ModalViews\\index__ConfirmedIcon",componentId:"sc-61fe316d-1"})`
  padding: 60px 0;
`;function Fe({children:e,onDismiss:t}){return(0,s.jsxs)(Be,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(he.Tw,{onClick:t})]}),(0,s.jsx)(We,{children:(0,s.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[e,(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]})}function Ge({children:e,onDismiss:t,hash:n}){const a=(0,ue.useTheme)(),i=(0,C.x)();return(0,s.jsxs)(Be,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(he.Tw,{onClick:t})]}),(0,s.jsx)(We,{children:(0,s.jsx)(Oe.Z,{strokeWidth:.5,size:90,color:a.accent1})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[e,i&&n&&(0,s.jsx)(he.dL,{href:(0,ze.E)(i,n,ze.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})}const He=({isOpen:e,hash:t,onDismiss:n})=>{const a=(0,ue.useTheme)();return(0,s.jsx)(xe.Z,{isOpen:e,onDismiss:n,children:t?(0,s.jsx)(Ge,{onDismiss:n,hash:t,children:(0,s.jsxs)(p.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(ve.xv,{fontWeight:535,fontSize:20,textAlign:"center",children:(0,s.jsx)(u.cC,{children:"Proposal submitted"})}),t&&(0,s.jsx)(he.dL,{href:(0,ze.E)(1,t,ze.r.TRANSACTION),children:(0,s.jsx)(ve.xv,{fontWeight:535,fontSize:14,color:a.accent1,children:(0,s.jsx)(u.cC,{children:"View on Etherscan"})})}),(0,s.jsx)(d.DF,{as:w.rU,to:"/vote",onClick:n,style:{margin:"20px 0 0 0"},children:(0,s.jsx)(ve.xv,{fontWeight:535,fontSize:20,children:(0,s.jsx)(u.cC,{children:"Return"})})})]})}):(0,s.jsx)(Fe,{onDismiss:n,children:(0,s.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Submitting proposal"})})})})})};function Ze(e,t,n,s,a,i,o){try{var r=e[i](o),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(s,a)}const qe=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\index__PageWrapper",componentId:"sc-d3a37859-0"})`
  padding: 68px 8px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,Qe=(0,ue.default)(y.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\index__BackArrow",componentId:"sc-d3a37859-1"})`
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
`,Ke=(0,ue.default)(w.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\index__Nav",componentId:"sc-d3a37859-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1em 0 0 1em;
  text-decoration: none;
`,Ye=(0,ue.default)(he.Tv.H1Small).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\index__HeaderText",componentId:"sc-d3a37859-3"})`
  margin: auto !important;
`,Xe=({proposalThreshold:e,hasActiveOrPendingProposal:t,hasEnoughVote:n,isFormInvalid:a,handleCreateProposal:i})=>{const o=e?m().divide(e.quotient,m().exponentiate(m().BigInt(10),m().BigInt(e.currency.decimals))).toLocaleString():void 0;return(0,s.jsx)(d.Kd,{style:{marginTop:"18px"},error:t||!n,disabled:a||t||!n,onClick:i,children:t?(0,s.jsx)(u.cC,{children:"You already have an active or pending proposal"}):n?(0,s.jsx)(u.cC,{children:"Create proposal"}):(0,s.jsx)(s.Fragment,{children:o?(0,s.jsxs)(u.cC,{children:["You must have ",{formattedProposalThreshold:o}," votes to submit a proposal"]}):(0,s.jsx)(u.cC,{children:"You don't have enough votes to submit a proposal"})})})},Je=(0,ue.default)(g.im).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\index__CreateProposalWrapper",componentId:"sc-d3a37859-4"})`
  display: flex;
  flex-flow: column wrap;
`,et=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\CreateProposal\\index__AutonomousProposalCTA",componentId:"sc-d3a37859-5"})`
  text-align: center;
  margin-top: 10px;
`;function tt(){var e,t;const{account:n,chainId:d}=(0,r.G)(),h=function(e){var t,n,s;const a=Y();return null===(s=(0,P.Wk)(a,"latestProposalIds",[e]))||void 0===s||null===(n=s.result)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toString()}(n??void 0)??"0",g=le(N,h),{votes:y}=ce(),w=function(){var e,t;const n=(0,C.x)(),s=Y(),a=(0,P.Wk)(s,"proposalThreshold"),i=(0,x.useMemo)((()=>n?B.yg[n]:void 0),[n]);if((null===(t=a)||void 0===t||null===(e=t.result)||void 0===e?void 0:e[0])&&i)return T.CurrencyAmount.fromRawAmount(i,a.result[0])}(),[v,b]=(0,x.useState)(!1),[j,k]=(0,x.useState)(),[D,I]=(0,x.useState)(!1),[A,E]=(0,x.useState)(pe.TRANSFER_TOKEN),[_,S]=(0,x.useState)(""),[U,$]=(0,x.useState)(B.yg[d??1]),[V,R]=(0,x.useState)(""),[O,L]=(0,x.useState)(""),[z,W]=(0,x.useState)(""),F=(0,x.useCallback)((()=>{b(!0)}),[b]),G=(0,x.useCallback)((e=>{E(e)}),[E]),H=(0,x.useCallback)((()=>{b(!1)}),[b]),Q=(0,x.useCallback)((()=>{k(void 0),I(!1)}),[k,I]),K=(0,x.useCallback)((e=>{S(e)}),[S]),X=(0,x.useCallback)((e=>{$(e)}),[$]),ee=(0,x.useCallback)((e=>{R(e)}),[R]),te=(0,x.useCallback)((e=>{L(e)}),[L]),ne=(0,x.useCallback)((e=>{W(e)}),[W]),se=(0,x.useMemo)((()=>{var e;return Boolean(!A||!(0,i.isAddress)(_)||!(null===(e=U)||void 0===e?void 0:e.isToken)||""===V||""===O||""===z)}),[A,_,U,V,O,z]),ae=Boolean(y&&w&&m().greaterThanOrEqual(y.quotient,w.quotient)),ie=function(){const{account:e,chainId:t}=(0,r.G)(),n=Y(),s=(0,Z.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const i=[a.targets,a.values,a.signatures,a.calldatas,a.description];return n.estimateGas.propose(...i).then((e=>n.propose(...i,{gasLimit:(0,M.y)(e)}).then((e=>(s(e,{type:q.i.SUBMIT_PROPOSAL}),e.hash)))))}),[e,s,n,t])}(),oe=function(){var e,t=(e=function*(){var e;I(!0);const t={};if(!ie||!A||!U.isToken)return;const n=(0,f.Z)(V,U);if(!n)return;let s,o;switch(t.targets=[U.address],t.values=["0"],t.description=`# ${O}\n\n${z}\n`,A){case pe.TRANSFER_TOKEN:s=[["address","uint256"]],o=[[(0,i.getAddress)(_),n.quotient.toString()]],t.signatures=[`transfer(${s[0].join(",")})`];break;case pe.APPROVE_TOKEN:s=[["address","uint256"]],o=[[(0,i.getAddress)(_),n.quotient.toString()]],t.signatures=[`approve(${s[0].join(",")})`]}t.calldatas=[];for(let i=0;i<t.signatures.length;i++)t.calldatas[i]=a.$.encode(s[i],o[i]);const r=yield null===(e=ie(t??void 0))||void 0===e?void 0:e.catch((()=>{I(!1)}));r&&k(r)},function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function o(e){Ze(i,s,a,o,r,"next",e)}function r(e){Ze(i,s,a,o,r,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,s.jsx)(l.fM,{page:o.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,s.jsx)(qe,{children:(0,s.jsxs)(me.Z,{$maxWidth:"800px",children:[(0,s.jsxs)(Ke,{to:"/vote",children:[(0,s.jsx)(Qe,{}),(0,s.jsx)(Ye,{children:"Create Proposal"})]}),(0,s.jsxs)(Je,{children:[(0,s.jsx)(c.Pj,{children:(0,s.jsx)(p.Tz,{gap:"10px",children:(0,s.jsx)(he.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,s.jsxs)(u.cC,{children:[(0,s.jsx)("strong",{children:"Tip:"})," Select an action and describe your proposal for the community. The proposal cannot be modified after submission, so please verify all information before submitting. The voting period will begin immediately and last for 7 days. To propose a custom action,"," ",(0,s.jsx)(he.dL,{href:"https://docs.uniswap.org/protocol/reference/Governance/governance-reference#propose",children:"read the docs"}),"."]})})})}),(0,s.jsx)(De,{onClick:F,proposalAction:A}),(0,s.jsx)(_e,{proposalAction:A,currency:U,amount:V,toAddress:_,onCurrencySelect:X,onAmountInput:ee,onToAddressInput:K}),(0,s.jsx)(Re,{title:O,body:z,onTitleInput:te,onBodyInput:ne}),(0,s.jsx)(Xe,{proposalThreshold:w,hasActiveOrPendingProposal:(null===(e=g)||void 0===e?void 0:e.status)===J.ACTIVE||(null===(t=g)||void 0===t?void 0:t.status)===J.PENDING,hasEnoughVote:ae,isFormInvalid:se,handleCreateProposal:oe}),ae?null:(0,s.jsxs)(et,{children:["Don\u2019t have 2.5M votes? Anyone can create an autonomous proposal using"," ",(0,s.jsx)(he.dL,{href:"https://fish.vote",children:"fish.vote"})]})]}),(0,s.jsx)(Ie,{isOpen:v,onDismiss:H,onProposalActionSelect:e=>G(e)}),(0,s.jsx)(He,{isOpen:D,hash:j,onDismiss:Q})]})})})}var nt=n(6282),st=n(94961),at=n(63415),it=n(10672),ot=n(67716),rt=n(82731),lt=n(63194),dt=n(75082),ct=n(5931),pt=n(27296),ut=n(73720);function ht(e,t,n,s,a,i,o){try{var r=e[i](o),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(s,a)}const mt=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\DelegateModal__ContentWrapper",componentId:"sc-f54c0e30-0"})`
  width: 100%;
  padding: 24px;
`,ft=(0,ue.default)(lt.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\DelegateModal__StyledClosed",componentId:"sc-f54c0e30-1"})`
  :hover {
    cursor: pointer;
  }
`,gt=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\DelegateModal__TextButton",componentId:"sc-f54c0e30-2"})`
  :hover {
    cursor: pointer;
  }
`;function xt({isOpen:e,onDismiss:t,title:n}){const{account:a,chainId:o}=(0,r.G)(),[l,c]=(0,x.useState)(!1),[h,m]=(0,x.useState)("");const f=l?h:a,{address:g}=(0,pt.Z)(f),y=(0,ut.mM)(a??void 0,o?B.yg[o]:void 0),w=function(){const{account:e,chainId:t,provider:n}=(0,r.G)(),s=(0,Z.h7)(),a=X();return(0,x.useCallback)((o=>{if(!n||!t||!e||!o||!(0,i.isAddress)(o??""))return;const r=[o];if(!a)throw new Error("No UNI Contract!");return a.estimateGas.delegate(...r,{}).then((e=>a.delegate(...r,{value:null,gasLimit:(0,M.y)(e)}).then((e=>(s(e,{type:q.i.DELEGATE,delegatee:o}),e.hash)))))}),[e,s,t,n,a])}(),[v,b]=(0,x.useState)(),[C,j]=(0,x.useState)(!1);function k(){b(void 0),j(!1),t()}function T(){var e;return e=function*(){var e;if(j(!0),!w)return;const t=yield null===(e=w(g??void 0))||void 0===e?void 0:e.catch((e=>{j(!1),console.log(e)}));t&&b(t)},T=function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function o(e){ht(i,s,a,o,r,"next",e)}function r(e){ht(i,s,a,o,r,"throw",e)}o(void 0)}))},T.apply(this,arguments)}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:k,maxHeight:90,children:[!C&&!v&&(0,s.jsx)(mt,{gap:"lg",children:(0,s.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:n}),(0,s.jsx)(ft,{stroke:"black",onClick:k})]}),(0,s.jsx)(he.Tv.DeprecatedBody,{children:(0,s.jsx)(u.cC,{children:"Earned UNI tokens represent voting shares in Uniswap governance."})}),(0,s.jsx)(he.Tv.DeprecatedBody,{children:(0,s.jsx)(u.cC,{children:"You can either vote on each proposal yourself or delegate your votes to a third party."})}),l&&(0,s.jsx)(fe.Z,{value:h,onChange:function(e){m(e)}}),(0,s.jsx)(d.DF,{disabled:!(0,i.isAddress)(g??""),onClick:function(){return T.apply(this,arguments)},children:(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:l?(0,s.jsx)(u.cC,{children:"Delegate votes"}):(0,s.jsx)(u.cC,{children:"Self-delegate"})})}),(0,s.jsx)(gt,{onClick:()=>c(!l),children:(0,s.jsx)(ct.xv,{color:"$accent1",children:l?(0,s.jsx)(u.cC,{children:"Remove delegate"}):(0,s.jsx)(u.cC,{children:"Add delegate +"})})})]})}),C&&!v&&(0,s.jsx)(Fe,{onDismiss:k,children:(0,s.jsxs)(p.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:l?(0,s.jsx)(u.cC,{children:"Delegating votes"}):(0,s.jsx)(u.cC,{children:"Unlocking votes"})}),(0,s.jsxs)(he.Tv.DeprecatedMain,{fontSize:36,children:[" ",(0,dt.Z)(y,4)]})]})}),v&&(0,s.jsx)(Ge,{onDismiss:k,hash:v,children:(0,s.jsxs)(p.Tz,{gap:"md",justify:"center",children:[(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Transaction submitted"})}),(0,s.jsx)(he.Tv.DeprecatedMain,{fontSize:36,children:(0,dt.Z)(y,4)})]})})]})}const yt=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\ProposalEmptyState__EmptyProposals",componentId:"sc-dc3b7c06-0"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,wt=ue.default.i.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\ProposalEmptyState__Sub",componentId:"sc-dc3b7c06-1"})`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`,vt=({HeaderContent:e,SubHeaderContent:t})=>(0,s.jsxs)(yt,{children:[(0,s.jsx)(he.Tv.DeprecatedBody,{style:{marginBottom:"8px"},children:(0,s.jsx)(e,{})}),(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(wt,{children:(0,s.jsx)(t,{})})})]});function bt(){const e=(0,C.x)();return e&&e!==T.ChainId.MAINNET?(0,s.jsx)(vt,{HeaderContent:()=>(0,s.jsx)(u.cC,{children:"Please connect to Layer 1 Ethereum"}),SubHeaderContent:()=>(0,s.jsx)(u.cC,{children:"Uniswap governance is only available on Layer 1. Switch your network to Ethereum Mainnet to view Proposals and Vote."})}):(0,s.jsx)(vt,{HeaderContent:()=>(0,s.jsx)(u.cC,{children:"No proposals found."}),SubHeaderContent:()=>(0,s.jsx)(u.cC,{children:"Proposals submitted by community members will appear here."})})}var Ct=n(36399),jt=n(99902),kt=n(1356),Tt=n(29021),Dt=n(13446),It=n(13820);const At=(e,t)=>{switch(e){case J.PENDING:case J.ACTIVE:return t.accent1;case J.SUCCEEDED:case J.EXECUTED:return t.success;case J.DEFEATED:return t.critical;case J.QUEUED:case J.CANCELED:case J.EXPIRED:default:return t.neutral3}};function Nt({status:e}){switch(e){case J.PENDING:return(0,s.jsx)(u.cC,{children:"Pending"});case J.ACTIVE:return(0,s.jsx)(u.cC,{children:"Active"});case J.SUCCEEDED:return(0,s.jsx)(u.cC,{children:"Succeeded"});case J.EXECUTED:return(0,s.jsx)(u.cC,{children:"Executed"});case J.DEFEATED:return(0,s.jsx)(u.cC,{children:"Defeated"});case J.QUEUED:return(0,s.jsx)(u.cC,{children:"Queued"});case J.CANCELED:return(0,s.jsx)(u.cC,{children:"Canceled"});case J.EXPIRED:return(0,s.jsx)(u.cC,{children:"Expired"});default:return(0,s.jsx)(u.cC,{children:"Undetermined"})}}const Et=ue.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\styled__StyledProposalContainer",componentId:"sc-87ff7760-0"})`
  font-size: 0.825rem;
  font-weight: 535;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({status:e,theme:t})=>At(e,t)};
  border: 1px solid ${({status:e,theme:t})=>At(e,t)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
  flex: 0 0 100px;
  text-align: center;
`;function _t({status:e}){return(0,s.jsx)(Et,{status:e,children:(0,s.jsx)(Nt,{status:e})})}const St=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__PageWrapper",componentId:"sc-30f03edc-0"})`
  padding-top: 68px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,Pt=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__TopSection",componentId:"sc-30f03edc-1"})`
  max-width: 640px;
  width: 100%;
`,Ut=(0,ue.default)(jt.zx).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__Proposal",componentId:"sc-30f03edc-2"})`
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  background-color: ${({theme:e})=>e.surface1};
  &:focus {
    background-color: ${({theme:e})=>(0,Ct._j)(.05,e.surface1)};
  }
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
`,Mt=ue.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__ProposalNumber",componentId:"sc-30f03edc-3"})`
  opacity: ${({theme:e})=>e.opacity.hover};
  flex: 0 0 40px;
`,$t=ue.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__ProposalTitle",componentId:"sc-30f03edc-4"})`
  font-weight: 535;
  flex: 1;
  max-width: 420px;
  white-space: initial;
  word-wrap: break-word;
  padding-right: 10px;
`,Vt=(0,ue.default)(rt.I8).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__VoteCard",componentId:"sc-30f03edc-5"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`,Rt=(0,ue.default)(ye.m0).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__WrapSmall",componentId:"sc-30f03edc-6"})`
  margin-bottom: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
  `};
`,Ot=(0,ue.default)(he.Tv.DeprecatedMain).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__TextButton",componentId:"sc-30f03edc-7"})`
  color: ${({theme:e})=>e.accent1};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,Lt=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__AddressButton",componentId:"sc-30f03edc-8"})`
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.accent1};
`,zt=(0,ue.default)(he.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__StyledExternalLink",componentId:"sc-30f03edc-9"})`
  color: ${({theme:e})=>e.neutral1};
`,Bt=(0,ue.default)(he.Tv.H1Small).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\Landing__Header",componentId:"sc-30f03edc-10"})`
  color: white;
  font-weight: 535;
  font-size: inherit;
  line-height: inherit;
`;function Wt(){var e,t,n,a,i,c,h,f;const g=(0,ue.useTheme)(),{account:y,chainId:v}=(0,r.G)(),[b,C]=(0,x.useState)(!0),j=(0,kt.Wt)(Tt.Lk.DELEGATE),k=(0,kt.up)(),{data:T,loading:D}=re(),{loading:I,votes:A}=ce(),N=(0,ut.mM)(y??void 0,v?B.yg[v]:void 0),E=de(),_=Boolean(N&&m().notEqual(N.quotient,m().BigInt(0))&&E===It.r_);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.fM,{page:o.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,s.jsxs)(St,{gap:"lg",justify:"center",children:[(0,s.jsx)(xt,{isOpen:j,onDismiss:k,title:_?(0,s.jsx)(u.cC,{children:"Unlock votes"}):(0,s.jsx)(u.cC,{children:"Update delegation"})}),(0,s.jsx)(Pt,{gap:"md",children:(0,s.jsxs)(Vt,{children:[(0,s.jsx)(rt.sq,{}),(0,s.jsx)(rt.RF,{}),(0,s.jsx)(rt.uO,{children:(0,s.jsxs)(p.Tz,{gap:"md",children:[(0,s.jsx)(ye.m0,{children:(0,s.jsx)(Bt,{children:(0,s.jsx)(u.cC,{children:"Uniswap governance"})})}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(he.Tv.DeprecatedWhite,{fontSize:14,children:(0,s.jsx)(u.cC,{children:"UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party."})})}),(0,s.jsx)(he.dL,{style:{color:g.white,textDecoration:"underline"},href:"https://uniswap.org/blog/uni",target:"_blank",children:(0,s.jsx)(he.Tv.DeprecatedWhite,{fontSize:14,children:(0,s.jsx)(u.cC,{children:"Read more about Uniswap governance"})})})]})}),(0,s.jsx)(rt.sq,{}),(0,s.jsx)(rt.RF,{})]})}),(0,s.jsxs)(Pt,{gap:"2px",children:[(0,s.jsxs)(Rt,{children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{style:{margin:"0.5rem 0.5rem 0.5rem 0",flexShrink:0},children:(0,s.jsx)(u.cC,{children:"Proposals"})}),(0,s.jsxs)(ye.BA,{gap:"6px",justify:"flex-end",children:[D||I?(0,s.jsx)(at.ZP,{}):null,_?(0,s.jsx)(d.DF,{style:{width:"fit-content",height:"40px"},padding:"8px",$borderRadius:"8px",onClick:k,children:(0,s.jsx)(u.cC,{children:"Unlock voting"})}):A&&m().notEqual(m().BigInt(0),null===(e=A)||void 0===e?void 0:e.quotient)?(0,s.jsx)(he.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,s.jsxs)(u.cC,{children:[(0,s.jsx)(st.Z,{currencyAmount:A})," Votes"]})}):N&&E&&E!==It.r_&&m().notEqual(m().BigInt(0),null===(t=N)||void 0===t?void 0:t.quotient)?(0,s.jsx)(he.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,s.jsxs)(u.cC,{children:[(0,s.jsx)(st.Z,{currencyAmount:N})," Votes"]})}):"",(0,s.jsx)(d.DF,{as:w.rU,to:"/create-proposal",style:{width:"fit-content",borderRadius:"8px",height:"40px"},padding:"8px",children:(0,s.jsx)(u.cC,{children:"Create proposal"})})]})]}),!_&&(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),E&&E!==It.r_?(0,s.jsxs)(ye.DA,{children:[(0,s.jsx)(he.Tv.DeprecatedBody,{fontWeight:535,mr:"4px",children:(0,s.jsx)(u.cC,{children:"Delegated to:"})}),(0,s.jsxs)(Lt,{children:[(0,s.jsx)(zt,{href:(0,ze.E)(1,E,ze.r.ADDRESS),style:{margin:"0 4px"},children:E===y?(0,s.jsx)(u.cC,{children:"Self"}):(0,Dt.Xn)(E)}),(0,s.jsx)(Ot,{onClick:k,style:{marginLeft:"4px"},children:(0,s.jsx)(u.cC,{children:"(edit)"})})]})]}):""]}),0===(null===(n=T)||void 0===n?void 0:n.length)&&(0,s.jsx)(bt,{}),(null===(a=T)||void 0===a?void 0:a.length)>0&&(0,s.jsxs)(p.Tz,{gap:"md",children:[(0,s.jsx)(ye.m0,{}),(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(he.Tv.DeprecatedMain,{children:(0,s.jsx)(u.cC,{children:"Show cancelled"})}),(0,s.jsx)(ot.Z,{isActive:!b,toggle:()=>C((e=>!e))})]})]}),null===(f=T)||void 0===f||null===(h=f.slice(0))||void 0===h||null===(c=h.reverse())||void 0===c||null===(i=c.filter((e=>!b||e.status!==J.CANCELED)))||void 0===i?void 0:i.map((e=>(0,s.jsxs)(Ut,{as:w.rU,to:`/vote/${e.governorIndex}/${e.id}`,children:[(0,s.jsxs)(Mt,{children:[e.governorIndex,".",e.id]}),(0,s.jsx)($t,{children:e.title}),(0,s.jsx)(_t,{status:e.status})]},`${e.governorIndex}${e.id}`)))]}),(0,s.jsx)(he.Tv.DeprecatedSubHeader,{color:"text3",children:(0,s.jsx)(u.cC,{children:"A minimum threshold of 0.25% of the total UNI supply is required to submit proposals"})})]})}),(0,s.jsx)(it.c,{})]})}var Ft=n(11604);function Gt(e,t,n,s,a,i,o){try{var r=e[i](o),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(s,a)}const Ht=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\ExecuteModal__ContentWrapper",componentId:"sc-b1077e1b-0"})`
  width: 100%;
  padding: 24px;
`,Zt=(0,ue.default)(lt.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\ExecuteModal__StyledClosed",componentId:"sc-b1077e1b-1"})`
  :hover {
    cursor: pointer;
  }
`,qt=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\ExecuteModal__ConfirmOrLoadingWrapper",componentId:"sc-b1077e1b-2"})`
  width: 100%;
  padding: 24px;
`,Qt=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\ExecuteModal__ConfirmedIcon",componentId:"sc-b1077e1b-3"})`
  padding: 60px 0;
`;function Kt({isOpen:e,onDismiss:t,proposalId:n}){const a=(0,C.x)(),i=function(){const{account:e,chainId:t}=(0,r.G)(),n=Y(),s=(0,Z.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const i=[a];return n.estimateGas.execute(...i,{}).then((e=>n.execute(...i,{value:null,gasLimit:(0,M.y)(e)}).then((e=>(s(e,{type:q.i.EXECUTE,governorAddress:n.address,proposalId:parseInt(a)}),e.hash)))))}),[e,s,n,t])}(),[o,l]=(0,x.useState)(),[c,h]=(0,x.useState)(!1),m=(0,ue.useTheme)();function f(){l(void 0),h(!1),t()}function g(){var e;return e=function*(){var e;if(h(!0),!i)return;const t=yield null===(e=i(n))||void 0===e?void 0:e.catch((e=>{h(!1),console.log(e)}));t&&l(t)},g=function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function o(e){Gt(i,s,a,o,r,"next",e)}function r(e){Gt(i,s,a,o,r,"throw",e)}o(void 0)}))},g.apply(this,arguments)}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!c&&!o&&(0,s.jsx)(Ht,{gap:"lg",children:(0,s.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsxs)(u.cC,{children:["Execute proposal ",{proposalId:n}]})}),(0,s.jsx)(Zt,{onClick:f})]}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(he.Tv.DeprecatedBody,{children:(0,s.jsx)(u.cC,{children:"Executing this proposal will enact the calldata on-chain."})})}),(0,s.jsx)(d.DF,{onClick:function(){return g.apply(this,arguments)},children:(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:(0,s.jsx)(u.cC,{children:"Execute"})})})]})}),c&&!o&&(0,s.jsxs)(qt,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Zt,{onClick:f})]}),(0,s.jsx)(Qt,{children:(0,s.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Executing"})})}),(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]}),o&&(0,s.jsxs)(qt,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Zt,{onClick:f})]}),(0,s.jsx)(Qt,{children:(0,s.jsx)(Oe.Z,{strokeWidth:.5,size:90,color:m.accent1})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Execution submitted"})})}),a&&(0,s.jsx)(he.dL,{href:(0,ze.E)(a,o,ze.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})]})}function Yt(e,t,n,s,a,i,o){try{var r=e[i](o),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(s,a)}const Xt=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\QueueModal__ContentWrapper",componentId:"sc-64e63501-0"})`
  width: 100%;
  padding: 24px;
`,Jt=(0,ue.default)(lt.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\QueueModal__StyledClosed",componentId:"sc-64e63501-1"})`
  :hover {
    cursor: pointer;
  }
`,en=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\QueueModal__ConfirmOrLoadingWrapper",componentId:"sc-64e63501-2"})`
  width: 100%;
  padding: 24px;
`,tn=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\QueueModal__ConfirmedIcon",componentId:"sc-64e63501-3"})`
  padding: 60px 0;
`;function nn({isOpen:e,onDismiss:t,proposalId:n}){const a=(0,C.x)(),i=function(){const{account:e,chainId:t}=(0,r.G)(),n=Y(),s=(0,Z.h7)();return(0,x.useCallback)((a=>{if(!e||!n||!a||!t)return;const i=[a];return n.estimateGas.queue(...i,{}).then((e=>n.queue(...i,{value:null,gasLimit:(0,M.y)(e)}).then((e=>(s(e,{type:q.i.QUEUE,governorAddress:n.address,proposalId:parseInt(a)}),e.hash)))))}),[e,s,n,t])}(),[o,l]=(0,x.useState)(),[c,h]=(0,x.useState)(!1),m=(0,ue.useTheme)();function f(){l(void 0),h(!1),t()}function g(){var e;return e=function*(){var e;if(h(!0),!i)return;const t=yield null===(e=i(n))||void 0===e?void 0:e.catch((e=>{h(!1),console.log(e)}));t&&l(t)},g=function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function o(e){Yt(i,s,a,o,r,"next",e)}function r(e){Yt(i,s,a,o,r,"throw",e)}o(void 0)}))},g.apply(this,arguments)}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:f,maxHeight:90,children:[!c&&!o&&(0,s.jsx)(Xt,{gap:"lg",children:(0,s.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsxs)(u.cC,{children:["Queue proposal ",{proposalId:n}]})}),(0,s.jsx)(Jt,{onClick:f})]}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(he.Tv.DeprecatedBody,{children:(0,s.jsx)(u.cC,{children:"Adding this proposal to the queue will allow it to be executed, after a delay."})})}),(0,s.jsx)(d.DF,{onClick:function(){return g.apply(this,arguments)},children:(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:(0,s.jsx)(u.cC,{children:"Queue"})})})]})}),c&&!o&&(0,s.jsxs)(en,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Jt,{onClick:f})]}),(0,s.jsx)(tn,{children:(0,s.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Queueing"})})}),(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]}),o&&(0,s.jsxs)(en,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(Jt,{onClick:f})]}),(0,s.jsx)(tn,{children:(0,s.jsx)(Oe.Z,{strokeWidth:.5,size:90,color:m.accent1})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Transaction submitted"})})}),a&&(0,s.jsx)(he.dL,{href:(0,ze.E)(a,o,ze.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})]})}var sn=n(85135),an=n(8545),on=n(63490),rn=n.n(on),ln=n(35339),dn=n.n(ln),cn=n(70359);function pn(e,t,n,s,a,i,o){try{var r=e[i](o),l=r.value}catch(d){return void n(d)}r.done?t(l):Promise.resolve(l).then(s,a)}const un=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\VoteModal__ContentWrapper",componentId:"sc-95da2d38-0"})`
  width: 100%;
  padding: 24px;
`,hn=(0,ue.default)(lt.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\VoteModal__StyledClosed",componentId:"sc-95da2d38-1"})`
  :hover {
    cursor: pointer;
  }
`,mn=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\VoteModal__ConfirmOrLoadingWrapper",componentId:"sc-95da2d38-2"})`
  width: 100%;
  padding: 24px;
`,fn=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\vote\\VoteModal__ConfirmedIcon",componentId:"sc-95da2d38-3"})`
  padding: 60px 0;
`;function gn({isOpen:e,onDismiss:t,proposalId:n,voteOption:a}){const i=(0,C.x)(),o=function(){const{account:e,chainId:t}=(0,r.G)(),n=Y(),s=(0,Z.h7)();return(0,x.useCallback)(((a,i)=>{if(!e||!n||!a||!t)return;const o=[a,i===Q.N.Against?0:i===Q.N.For?1:2];return n.estimateGas.castVote(...o,{}).then((e=>n.castVote(...o,{value:null,gasLimit:(0,M.y)(e)}).then((e=>(s(e,{type:q.i.VOTE,decision:i,governorAddress:n.address,proposalId:parseInt(a),reason:""}),e.hash)))))}),[e,s,n,t])}(),{votes:l}=ce(),[c,h]=(0,x.useState)(),[m,f]=(0,x.useState)(!1),g=(0,ue.useTheme)();function y(){h(void 0),f(!1),t()}function w(){var e;return e=function*(){var e;if(f(!0),!o||void 0===a)return;const t=yield null===(e=o(n,a))||void 0===e?void 0:e.catch((e=>{f(!1),console.log(e)}));t&&h(t)},w=function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function o(e){pn(i,s,a,o,r,"next",e)}function r(e){pn(i,s,a,o,r,"throw",e)}o(void 0)}))},w.apply(this,arguments)}return(0,s.jsxs)(xe.Z,{isOpen:e,onDismiss:y,maxHeight:90,children:[!m&&!c&&(0,s.jsx)(un,{gap:"lg",children:(0,s.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:a===Q.N.Against?(0,s.jsxs)(u.cC,{children:["Vote against proposal ",{proposalId:n}]}):a===Q.N.For?(0,s.jsxs)(u.cC,{children:["Vote for proposal ",{proposalId:n}]}):(0,s.jsxs)(u.cC,{children:["Vote to abstain on proposal ",{proposalId:n}]})}),(0,s.jsx)(hn,{onClick:y})]}),(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsxs)(u.cC,{children:[{amt:(0,dt.Z)(l,4)}," Votes"]})}),(0,s.jsx)(d.DF,{onClick:function(){return w.apply(this,arguments)},children:(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{color:"white",children:a===Q.N.Against?(0,s.jsxs)(u.cC,{children:["Vote against proposal ",{proposalId:n}]}):a===Q.N.For?(0,s.jsxs)(u.cC,{children:["Vote for proposal ",{proposalId:n}]}):(0,s.jsxs)(u.cC,{children:["Vote to abstain on proposal ",{proposalId:n}]})})})]})}),m&&!c&&(0,s.jsxs)(mn,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(hn,{onClick:y})]}),(0,s.jsx)(fn,{children:(0,s.jsx)(he._1,{src:Le.Z,alt:"loader",size:"90px"})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Submitting vote"})})}),(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]}),c&&(0,s.jsxs)(mn,{children:[(0,s.jsxs)(ye.m0,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(hn,{onClick:y})]}),(0,s.jsx)(fn,{children:(0,s.jsx)(Oe.Z,{strokeWidth:.5,size:90,color:g.accent1})}),(0,s.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,s.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{children:(0,s.jsx)(u.cC,{children:"Transaction Submitted"})})}),i&&(0,s.jsx)(he.dL,{href:(0,ze.E)(i,c,ze.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,s.jsx)(he.Tv.DeprecatedSubHeader,{children:(0,s.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})]})}const xn=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__PageWrapper",componentId:"sc-9dca8bc9-0"})`
  padding-top: 68px;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,yn=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__ProposalInfo",componentId:"sc-9dca8bc9-1"})`
  background: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  max-width: 640px;
  width: 100%;
`,wn=(0,ue.default)(he.m_).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__ArrowWrapper",componentId:"sc-9dca8bc9-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  color: ${({theme:e})=>e.neutral1};

  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`,vn=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__CardWrapper",componentId:"sc-9dca8bc9-3"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`,bn=(0,ue.default)(rt.I8).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__StyledDataCard",componentId:"sc-9dca8bc9-4"})`
  width: 100%;
  background: none;
  background-color: ${({theme:e})=>e.surface1};
  height: fit-content;
  z-index: 2;
`,Cn=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__ProgressWrapper",componentId:"sc-9dca8bc9-5"})`
  width: 100%;
  margin-top: 1rem;
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.surface2};
  position: relative;
`,jn=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__Progress",componentId:"sc-9dca8bc9-6"})`
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e,status:t})=>"for"===t?e.success:e.critical};
  width: ${({percentageString:e})=>e??"0%"};
`,kn=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__MarkDownWrapper",componentId:"sc-9dca8bc9-7"})`
  max-width: 640px;
  overflow: hidden;
`,Tn=(0,ue.default)(ye.m0).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__WrapSmall",componentId:"sc-9dca8bc9-8"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    align-items: flex-start;
    flex-direction: column;
  `};
`,Dn=ue.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__DetailText",componentId:"sc-9dca8bc9-9"})`
  word-break: break-all;
`,In=(0,ue.default)(he.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Vote\\VotePage__ProposerAddressLink",componentId:"sc-9dca8bc9-10"})`
  word-break: break-all;
`;function An(e,t,n,s){if(e&&t&&n&&s){const a=new Date;return a.setTime(s.add(Ft.O$.from(n).mul(Ft.O$.from(e-t))).toNumber()*rn()("1s")),a}}function Nn(){var e,t,n,a,i,h,f,g,w,v,b,j,k,E,_,S,U,M,$,V,R,O,L,z,F,G,H,Z;const{governorIndex:q,id:K}=(0,nt.UO)(),ee=Number.parseInt(q),{chainId:te,account:ne}=(0,r.G)(),se=function(e){var t,n;const s=Y(),a=null===(n=(0,P.Wk)(s,"quorumVotes"))||void 0===n||null===(t=n.result)||void 0===t?void 0:t[0],i=(0,C.x)(),o=(0,x.useMemo)((()=>i?B.yg[i]:void 0),[i]);if(s&&a&&i===T.ChainId.MAINNET&&o&&e===N)return T.CurrencyAmount.fromRawAmount(o,a)}(ee),ae=le(ee,K),[ie,oe]=(0,x.useState)(void 0),re=(0,kt.Wt)(Tt.Lk.VOTE),ce=(0,kt.VE)(),pe=(0,kt.Wt)(Tt.Lk.DELEGATE),ue=(0,kt.up)(),me=(0,kt.Wt)(Tt.Lk.QUEUE),fe=(0,kt.wG)(),ge=(0,kt.Wt)(Tt.Lk.EXECUTE),xe=(0,kt.jC)(),we=(0,an.Z)(cn.DB),ve=(0,W.ZP)(),be=An(null===(e=ae)||void 0===e?void 0:e.startBlock,ve,(te&&A[te])??I,we),Ce=An(null===(t=ae)||void 0===t?void 0:t.endBlock,ve,(te&&A[te])??I,we),je=new Date,ke=(0,sn.eQ)(),Te={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},De=(null===(n=ae)||void 0===n?void 0:n.eta)?new Date(ae.eta.mul(rn()("1s")).toNumber()):void 0,Ie=null===(i=ae)||void 0===i||null===(a=i.forCount)||void 0===a?void 0:a.add(ae.againstCount),Ae=Ie?null===(w=ae)||void 0===w||null===(g=w.forCount)||void 0===g||null===(f=g.asFraction)||void 0===f||null===(h=f.divide(Ie.asFraction))||void 0===h?void 0:h.multiply(100):void 0,Ne=Ae?new T.Fraction(100).subtract(Ae):void 0,Ee=function(e){var t,n;const{account:s,chainId:a}=(0,r.G)(),i=X(),o=(0,x.useMemo)((()=>a?B.yg[a]:void 0),[a]),l=null===(n=(0,P.Wk)(i,"getPriorVotes",[s??void 0,e??void 0]))||void 0===n||null===(t=n.result)||void 0===t?void 0:t[0];return l&&o?T.CurrencyAmount.fromRawAmount(o,l):void 0}((null===(v=ae)||void 0===v?void 0:v.startBlock)??void 0),_e=Ee&&m().greaterThan(Ee.quotient,m().BigInt(0))&&ae&&ae.status===J.ACTIVE,Se=ne&&(null===(b=ae)||void 0===b?void 0:b.status)===J.SUCCEEDED,Pe=ne&&(null===(j=ae)||void 0===j?void 0:j.status)===J.QUEUED,Ue=(0,ut.mM)(ne??void 0,te?B.yg[te]:void 0),Me=de(),$e=Boolean(Ue&&m().notEqual(Ue.quotient,m().BigInt(0))&&Me===It.r_),Ve=e=>{if((0,Dt.UJ)(e)&&te){var t;const n=(null===(t=D[te])||void 0===t?void 0:t[e])??e;return(0,s.jsx)(he.dL,{href:(0,ze.E)(te,e,ze.r.ADDRESS),children:n})}return(0,s.jsx)("span",{children:e})};return(0,s.jsx)(l.fM,{page:o.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(xn,{gap:"lg",justify:"center",children:[(0,s.jsx)(gn,{isOpen:re,onDismiss:ce,proposalId:null===(k=ae)||void 0===k?void 0:k.id,voteOption:ie}),(0,s.jsx)(xt,{isOpen:pe,onDismiss:ue,title:(0,s.jsx)(u.cC,{children:"Unlock votes"})}),(0,s.jsx)(nn,{isOpen:me,onDismiss:fe,proposalId:null===(E=ae)||void 0===E?void 0:E.id}),(0,s.jsx)(Kt,{isOpen:ge,onDismiss:xe,proposalId:null===(_=ae)||void 0===_?void 0:_.id}),(0,s.jsxs)(yn,{gap:"lg",justify:"start",children:[(0,s.jsxs)(ye.m0,{style:{width:"100%"},children:[(0,s.jsx)(wn,{to:"/vote",children:(0,s.jsxs)(u.cC,{children:[(0,s.jsx)(y.Z,{size:20})," All Proposals"]})}),ae&&(0,s.jsx)(_t,{status:ae.status})]}),(0,s.jsxs)(p.Tz,{gap:"10px",style:{width:"100%"},children:[(0,s.jsx)(he.Tv.DeprecatedLargeHeader,{style:{marginBottom:".5rem"},children:null===(S=ae)||void 0===S?void 0:S.title}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(he.Tv.DeprecatedMain,{children:be&&be>je?(0,s.jsxs)(u.cC,{children:["Voting starts approximately ",{date:be.toLocaleString(ke,Te)}]}):null})}),(0,s.jsx)(ye.m0,{children:(0,s.jsx)(he.Tv.DeprecatedMain,{children:Ce&&(Ce<je?(0,s.jsxs)(u.cC,{children:["Voting ended ",{date:Ce.toLocaleString(ke,Te)}]}):(0,s.jsxs)(u.cC,{children:["Voting ends approximately ",{date:Ce.toLocaleString(ke,Te)}]}))})}),ae&&ae.status===J.ACTIVE&&!_e&&(0,s.jsx)(c.rd,{children:(0,s.jsxs)(he.Tv.DeprecatedBlack,{children:[(0,s.jsxs)(u.cC,{children:["Only UNI votes that were self delegated or delegated to another address before block"," ",{startBlock:ae.startBlock}," are eligible for voting."]})," ",$e&&(0,s.jsx)("span",{children:(0,s.jsxs)(u.cC,{children:[(0,s.jsx)(he.m_,{to:"/vote",children:"Unlock voting"})," to prepare for the next proposal."]})})]})})]}),_e&&(0,s.jsxs)(ye.DA,{style:{width:"100%",gap:"12px"},children:[(0,s.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{oe(Q.N.For),ce()},children:(0,s.jsx)(u.cC,{children:"Vote for"})}),(0,s.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{oe(Q.N.Against),ce()},children:(0,s.jsx)(u.cC,{children:"Vote against"})})]}),Se&&(0,s.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,s.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{fe()},children:(0,s.jsx)(u.cC,{children:"Queue"})})}),Pe&&(0,s.jsxs)(s.Fragment,{children:[De&&(0,s.jsx)(ye.m0,{children:(0,s.jsx)(he.Tv.DeprecatedBlack,{children:(0,s.jsxs)(u.cC,{children:["This proposal may be executed after ",{eta:De.toLocaleString(ke,Te)},"."]})})}),(0,s.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,s.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{xe()},disabled:!we||!(null===(U=ae)||void 0===U?void 0:U.eta)||we.lt(ae.eta),children:(0,s.jsx)(u.cC,{children:"Execute"})})})]}),(0,s.jsxs)(vn,{children:[(0,s.jsx)(bn,{children:(0,s.jsxs)(rt.uO,{children:[(0,s.jsx)(p.Tz,{gap:"md",children:(0,s.jsxs)(Tn,{children:[(0,s.jsx)(he.Tv.DeprecatedBlack,{fontWeight:535,children:(0,s.jsx)(u.cC,{children:"For"})}),ae&&(0,s.jsxs)(he.Tv.DeprecatedBlack,{fontWeight:535,children:[ae.forCount.toFixed(0,{groupSeparator:","}),se&&(0,s.jsx)("span",{style:{fontWeight:485},children:` / ${se.toExact({groupSeparator:","})}`})]})]})}),(0,s.jsx)(Cn,{children:(0,s.jsx)(jn,{status:"for",percentageString:(null===(M=ae)||void 0===M?void 0:M.forCount.greaterThan(0))?`${(null===($=Ae)||void 0===$?void 0:$.toFixed(0))??0}%`:"0%"})})]})}),(0,s.jsx)(bn,{children:(0,s.jsxs)(rt.uO,{children:[(0,s.jsx)(p.Tz,{gap:"md",children:(0,s.jsxs)(Tn,{children:[(0,s.jsx)(he.Tv.DeprecatedBlack,{fontWeight:535,children:(0,s.jsx)(u.cC,{children:"Against"})}),ae&&(0,s.jsx)(he.Tv.DeprecatedBlack,{fontWeight:535,children:ae.againstCount.toFixed(0,{groupSeparator:","})})]})}),(0,s.jsx)(Cn,{children:(0,s.jsx)(jn,{status:"against",percentageString:(null===(R=ae)||void 0===R||null===(V=R.againstCount)||void 0===V?void 0:V.greaterThan(0))?`${(null===(O=Ne)||void 0===O?void 0:O.toFixed(0))??0}%`:"0%"})})]})})]}),(0,s.jsxs)(p.Tz,{gap:"md",children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(u.cC,{children:"Details"})}),null===(z=ae)||void 0===z||null===(L=z.details)||void 0===L?void 0:L.map(((e,t)=>(0,s.jsxs)(Dn,{children:[t+1,": ",Ve(e.target),".",e.functionSig,"(",e.callData.split(",").map(((t,n)=>(0,s.jsxs)("span",{children:[Ve(t),e.callData.split(",").length-1===n?"":","]},n))),")"]},t)))]}),(0,s.jsxs)(p.Tz,{gap:"md",children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(u.cC,{children:"Description"})}),(0,s.jsx)(kn,{children:(0,s.jsx)(dn(),{source:null===(F=ae)||void 0===F?void 0:F.description,renderers:{image:function({...e}){return(0,s.jsx)("img",{...e,style:{width:"100%",height:"100$",objectFit:"cover"},alt:""})}}})})]}),(0,s.jsxs)(p.Tz,{gap:"md",children:[(0,s.jsx)(he.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,s.jsx)(u.cC,{children:"Proposer"})}),(0,s.jsx)(In,{href:(null===(G=ae)||void 0===G?void 0:G.proposer)&&te?(0,ze.E)(te,null===(H=ae)||void 0===H?void 0:H.proposer,ze.r.ADDRESS):"",children:(0,s.jsx)(dn(),{source:null===(Z=ae)||void 0===Z?void 0:Z.proposer})})]})]})]}),(0,s.jsx)(it.c,{})]})})}function En(){return(0,s.jsxs)(nt.Z5,{children:[(0,s.jsx)(nt.AW,{path:"/",element:(0,s.jsx)(Wt,{})}),(0,s.jsx)(nt.AW,{path:":governorIndex/:id",element:(0,s.jsx)(Nn,{})}),(0,s.jsx)(nt.AW,{path:"create-proposal",element:(0,s.jsx)(tt,{})})]})}},53286:(e,t,n)=>{var s;n.d(t,{N:()=>s}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(s||(s={}))},75082:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(76078),a=n(34342),i=n(61592),o=n.n(i);function r({number:e,locale:t,sigFigs:n,fixedDecimals:s,options:i={}}){let o,r;if(o=!t||t&&!a.RF.includes(t)?a.ZW:[t,a.ZW],i.minimumFractionDigits=i.minimumFractionDigits||s,i.maximumFractionDigits=i.maximumFractionDigits||s,i.maximumSignificantDigits=i.maximumSignificantDigits||s?void 0:n,"number"===typeof e)r=s?parseFloat(e.toFixed(s)):e;else{const t=parseFloat(e.toSignificant(n));r=s?parseFloat(t.toFixed(s)):t}return r.toLocaleString(o,i)}function l(e,t,n=a.ZW,i){return e?o().equal(e.quotient,o().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new s.Fraction(1,1e5))?`<${r({number:1e-5,locale:n})}`:r({number:e,locale:n,sigFigs:t,fixedDecimals:i}):"-"}}}]);
//# sourceMappingURL=1271.39aaa79a.chunk.js.map