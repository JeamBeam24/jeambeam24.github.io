"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4075,5347],{52223:(e,n,i)=>{i.d(n,{WP:()=>$,ZP:()=>W,rG:()=>I});var t=i(92936),r=i(76078),s=i(26729),o=i(6823),d=i(61592),a=i.n(d),c=i(36399),l=i(45779),p=i(37525),u=i(86082),h=i(43454),x=i(22953),g=i(14411),f=i(54972),m=i(47841),j=i(13820),v=i(3359),w=i(83416),y=i(73720),b=i(17202),S=i(5347),k=i(69780),C=i(61182),A=i(44591),z=i(5967),T=i(94284),q=i(82731),D=i(56536);const I=(0,g.default)(T.m0).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionCard\\index__FixedHeightRow",componentId:"sc-7d153686-0"})`
  height: 24px;
`,_=(0,g.default)(C.hl).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionCard\\index__StyledPositionCard",componentId:"sc-7d153686-1"})`
  border: none;
  background: ${({theme:e,bgColor:n})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,c.DZ)(.8,n)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function $({pair:e,showUnwrapped:n=!1,border:i}){var d,c;const{account:p}=(0,s.G)(),u=n?e.token0:(0,S.B)(e.token0),h=n?e.token1:(0,S.B)(e.token1),[g,j]=(0,l.useState)(!1),v=(0,y.mM)(p??void 0,e.liquidityToken),b=(0,w.A)(e.liquidityToken),k=v&&b&&a().greaterThanOrEqual(b.quotient,v.quotient)?new r.Percent(v.quotient,b.quotient):void 0,[z,q]=e&&b&&v&&a().greaterThanOrEqual(b.quotient,v.quotient)?[e.getLiquidityValue(e.token0,b,v,!1),e.getLiquidityValue(e.token1,b,v,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:v&&a().greaterThan(v.quotient,a().BigInt(0))?(0,t.jsx)(C.rd,{border:i,children:(0,t.jsxs)(A.Tz,{gap:"md",children:[(0,t.jsx)(I,{children:(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(o.cC,{children:"Your position"})})})}),(0,t.jsxs)(I,{onClick:()=>j(!g),children:[(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(m.ge,{currencies:[u,h],size:20}),(0,t.jsxs)(x.xv,{fontWeight:535,fontSize:20,children:[u.symbol,"/",h.symbol]})]}),(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontWeight:535,fontSize:20,children:v?v.toSignificant(4):"-"})})]}),(0,t.jsxs)(A.Tz,{gap:"4px",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{children:"Your pool share:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:k?k.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(x.xv,{fontSize:16,fontWeight:535,children:[u.symbol,":"]}),z?(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(d=z)||void 0===d?void 0:d.toSignificant(6)})}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(x.xv,{fontSize:16,fontWeight:535,children:[h.symbol,":"]}),q?(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(c=q)||void 0===c?void 0:c.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(C.hl,{children:(0,t.jsxs)(f.Tv.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(o.cC,{children:"By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."})," "]})})})}function W({pair:e,border:n,stakedBalance:i}){var d,c,g,C;const{account:$}=(0,s.G)(),W=(0,S.B)(e.token0),L=(0,S.B)(e.token1),[N,R]=(0,l.useState)(!1),F=(0,y.mM)($??void 0,e.liquidityToken),U=(0,w.A)(e.liquidityToken),E=i?null===(d=F)||void 0===d?void 0:d.add(i):F,B=E&&U&&a().greaterThanOrEqual(U.quotient,E.quotient)?new r.Percent(E.quotient,U.quotient):void 0,[O,V]=e&&U&&E&&a().greaterThanOrEqual(U.quotient,E.quotient)?[e.getLiquidityValue(e.token0,U,E,!1),e.getLiquidityValue(e.token1,U,E,!1)]:[void 0,void 0],P=(0,v.r)(null===(c=e)||void 0===c?void 0:c.token0);return(0,t.jsxs)(_,{border:n,bgColor:P,children:[(0,t.jsx)(q.RF,{}),(0,t.jsxs)(A.Tz,{gap:"md",children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(T.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(m.ge,{currencies:[W,L],size:20}),(0,t.jsx)(x.xv,{fontWeight:535,fontSize:20,children:W&&L?`${W.symbol}/${L.symbol}`:(0,t.jsx)(D.bb,{children:(0,t.jsx)(o.cC,{children:"Loading"})})})]}),(0,t.jsx)(T.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(k.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>R(!N),children:N?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.cC,{children:"Manage"}),(0,t.jsx)(p.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.cC,{children:"Manage"}),(0,t.jsx)(u.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),N&&(0,t.jsxs)(A.Tz,{gap:"sm",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{children:"Your total pool tokens:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:E?E.toSignificant(4):"-"})]}),i&&(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{children:"Pool tokens in rewards pool:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:i.toSignificant(4)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(o.cC,{children:["Pooled ",{sym:W.symbol},":"]})})}),O?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(g=O)||void 0===g?void 0:g.toSignificant(6)}),(0,t.jsx)(z.Z,{size:20,style:{marginLeft:"8px"},currency:W})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(o.cC,{children:["Pooled ",{sym:L.symbol},":"]})})}),V?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(C=V)||void 0===C?void 0:C.toSignificant(6)}),(0,t.jsx)(z.Z,{size:20,style:{marginLeft:"8px"},currency:L})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(o.cC,{children:"Your pool share:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:B?(0,t.jsxs)(o.cC,{children:[{amt:"0.00"===B.toFixed(2)?"<0.01":B.toFixed(2)},"%"]}):"-"})]}),(0,t.jsx)(k.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(f.dL,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${$}`,children:(0,t.jsxs)(o.cC,{children:["View accrued fees and analytics",(0,t.jsx)("span",{style:{fontSize:"11px"},children:"\u2197"})]})})}),F&&a().greaterThan(F.quotient,j.iV)&&(0,t.jsxs)(T.m0,{marginTop:"10px",children:[(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(o.cC,{children:"Migrate"})}),(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/add/v2/${(0,b.H)(W)}/${(0,b.H)(L)}`,width:"32%",children:(0,t.jsx)(o.cC,{children:"Add"})}),(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,width:"32%",to:`/remove/v2/${(0,b.H)(W)}/${(0,b.H)(L)}`,children:(0,t.jsx)(o.cC,{children:"Remove"})})]}),i&&a().greaterThan(i.quotient,j.iV)&&(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/uni/${(0,b.H)(W)}/${(0,b.H)(L)}`,width:"100%",children:(0,t.jsx)(o.cC,{children:"Manage liquidity in rewards pool"})})]})]})]})}},26073:(e,n,i)=>{i.d(n,{A:()=>c});var t=i(92936),r=i(44591),s=i(6823),o=i(14411),d=i(54972);const a=o.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\V2Unsupported\\index__TextWrapper",componentId:"sc-2a4124d1-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function c(){return(0,t.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(a,{children:(0,t.jsx)(d.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(s.cC,{children:"Uniswap V2 is not available on this network."})})})})})}},82731:(e,n,i)=>{i.d(n,{SS:()=>h,sq:()=>c,MN:()=>l,RF:()=>p,uO:()=>u,I8:()=>a});var t=i(14411);const r=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",s=i.p+"static/media/noise.3c7efafc83614205bd1a.png",o=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var d=i(44591);const a=(0,t.default)(d.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-1a2037c7-0"})`
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
`,p=t.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-1a2037c7-3"})`
  background: url(${s});
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
`,u=(0,t.default)(d.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-1a2037c7-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=t.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-1a2037c7-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},81069:(e,n,i)=>{i.d(n,{G:()=>d});var t=i(57852),r=i(42183),s=i(70559),o=i(590);function d(){const{chainId:e}=(0,o.m)(),n=(0,s.ye)(r.TP.V2Everywhere);return e&&(n&&t.Ep.includes(e)||t.$6.includes(e))}},83416:(e,n,i)=>{i.d(n,{A:()=>d});var t=i(76078),r=i(84938),s=i(45779),o=i(7151);function d(e){var n,i,d,a;const c=(0,o.Ib)((null===(n=e)||void 0===n?void 0:n.isToken)?e.address:void 0,!1),l=null===(a=(0,r.Wk)(c,"totalSupply"))||void 0===a||null===(d=a.result)||void 0===d||null===(i=d[0])||void 0===i?void 0:i.toString();return(0,s.useMemo)((()=>{var n;return(null===(n=e)||void 0===n?void 0:n.isToken)&&l?t.CurrencyAmount.fromRawAmount(e,l):void 0}),[e,l])}},41047:(e,n,i)=>{i.d(n,{OY:()=>p,Oo:()=>u,_G:()=>l});var t=i(51371),r=i(76078),s=i(40148),o=i(12972),d=i(84938),a=i(45779);const c=new t.vU(s.abi);var l;function p(e){const n=(0,a.useMemo)((()=>e.map((([e,n])=>{var i,t;return[null===(i=e)||void 0===i?void 0:i.wrapped,null===(t=n)||void 0===t?void 0:t.wrapped]}))),[e]),i=(0,a.useMemo)((()=>n.map((([e,n])=>e&&n&&e.chainId===n.chainId&&!e.equals(n)&&r.V2_FACTORY_ADDRESSES[e.chainId]?(0,o.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:n}):void 0))),[n]),t=(0,d._Y)(i,c,"getReserves");return(0,a.useMemo)((()=>t.map(((e,i)=>{const{result:t,loading:s}=e,d=n[i][0],a=n[i][1];if(s)return[l.LOADING,null];if(!d||!a||d.equals(a))return[l.INVALID,null];if(!t)return[l.NOT_EXISTS,null];const{reserve0:c,reserve1:p}=t,[u,h]=d.sortsBefore(a)?[d,a]:[a,d];return[l.EXISTS,new o.Pair(r.CurrencyAmount.fromRawAmount(u,c.toString()),r.CurrencyAmount.fromRawAmount(h,p.toString()))]}))),[t,n])}function u(e,n){return p((0,a.useMemo)((()=>[[e,n]]),[e,n]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(l||(l={}))},5347:(e,n,i)=>{i.d(n,{B:()=>r});var t=i(64370);function r(e){var n;return e.isNative?e:(null===(n=t.Fl[e.chainId])||void 0===n?void 0:n.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=4075.c201958e.chunk.js.map