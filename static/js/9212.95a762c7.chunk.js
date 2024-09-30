"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9212],{73499:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(92936),s=n(6823),o=n(30335),r=n(57221),a=n(14411),d=n(86059);const c=a.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeWrapper",componentId:"sc-d31d223d-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,l=a.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeText",componentId:"sc-d31d223d-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,p=a.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Badge\\RangeBadge__ActiveDot",componentId:"sc-d31d223d-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,u=a.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Badge\\RangeBadge__LabelText",componentId:"sc-d31d223d-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function f({removed:e,inRange:t}){const n=(0,a.useTheme)();return(0,i.jsx)(c,{children:e?(0,i.jsx)(d.ud,{text:(0,i.jsx)(s.cC,{children:"Your position has 0 liquidity, and is not earning fees."}),children:(0,i.jsxs)(u,{color:n.neutral2,children:[(0,i.jsx)(l,{children:(0,i.jsx)(s.cC,{children:"Closed"})}),(0,i.jsx)(o.Z,{width:12,height:12})]})}):t?(0,i.jsx)(d.ud,{text:(0,i.jsx)(s.cC,{children:"The price of this pool is within your selected range. Your position is currently earning fees."}),children:(0,i.jsxs)(u,{color:n.success,children:[(0,i.jsx)(l,{children:(0,i.jsx)(s.cC,{children:"In range"})}),(0,i.jsx)(p,{})]})}):(0,i.jsx)(d.ud,{text:(0,i.jsx)(s.cC,{children:"The price of this pool is outside of your selected range. Your position is not currently earning fees."}),children:(0,i.jsxs)(u,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(l,{children:(0,i.jsx)(s.cC,{children:"Out of range"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})})})}},23116:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(92936),s=n(86059),o=n(45779);const r=n(14411).default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\HoverInlineText\\index__TextWrapper",componentId:"sc-f58de02a-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,a=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:a=!1,fontSize:d,textColor:c,link:l,...p})=>{const[u,f]=(0,o.useState)(!1);return e?e.length>t?(0,i.jsx)(s.ZP,{text:e,show:u,children:(0,i.jsx)(r,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),margin:n,adjustSize:a,textColor:c,link:l,fontSize:d,...p,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(r,{margin:n,adjustSize:a,link:l,fontSize:d,textColor:c,...p,children:e}):(0,i.jsx)("span",{})}},90652:(e,t,n)=>{n.d(t,{N:()=>N,Z:()=>E});var i=n(92936),s=n(76078),o=n(21651),r=n(73499),a=n(23116),d=n(63415),c=n(94284),l=n(39671),p=n(57899),u=n(55660),f=n(6823),h=n(45779),m=n(43454),x=n(31744),w=n(14411),g=n(66869),k=n(54972),I=n(66136),v=n(5347),y=n(47841),_=n(64370);const j=(0,w.default)(m.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__LinkRow",componentId:"sc-daf9a64f-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${g.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,C=w.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__DataLineItem",componentId:"sc-daf9a64f-1"})`
  font-size: 14px;
`,S=(0,w.default)(C).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__RangeLineItem",componentId:"sc-daf9a64f-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,A=w.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__DoubleArrow",componentId:"sc-daf9a64f-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,T=(0,w.default)(k.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__RangeText",componentId:"sc-daf9a64f-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,L=(0,w.default)(k.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__FeeTierText",componentId:"sc-daf9a64f-5"})`
  margin-left: 8px !important;
  line-height: 12px;
  color: ${({theme:e})=>e.neutral3};
`,b=(0,w.default)(k.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__ExtentsText",componentId:"sc-daf9a64f-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,P=w.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionListItem\\index__PrimaryPositionIdData",componentId:"sc-daf9a64f-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function N(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([_.h1,_.Hz,_.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(_.Fl),_.ML].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function E({token0:e,token1:t,tokenId:n,fee:m,liquidity:w,tickLower:g,tickUpper:_}){var C,E,D,M,U,O,R;const{formatDelta:X,formatTickPrice:q}=(0,I.Gb)(),B=(0,l.dQ)(e),$=(0,l.dQ)(t),z=B?(0,v.B)(B):void 0,Z=$?(0,v.B)($):void 0,[,G]=(0,u.AI)(z??void 0,Z??void 0,m),V=(0,h.useMemo)((()=>{if(G)return new o.Position({pool:G,liquidity:w.toString(),tickLower:g,tickUpper:_})}),[w,G,g,_]),W=(0,p.Z)(m,g,_),{priceLower:Y,priceUpper:F,quote:K,base:Q}=N(V),H=K&&(0,v.B)(K),J=Q&&(0,v.B)(Q),ee=!!G&&(G.tickCurrent<g||G.tickCurrent>=_),te="/pools/"+n,ne=null===(C=w)||void 0===C?void 0:C.eq(0);return(0,i.jsxs)(j,{to:te,children:[(0,i.jsxs)(c.m0,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(y.ge,{currencies:[J,H],size:18}),(0,i.jsxs)(k.Tv.SubHeader,{children:["\xa0",null===(E=H)||void 0===E?void 0:E.symbol,"\xa0/\xa0",null===(D=J)||void 0===D?void 0:D.symbol]}),(0,i.jsx)(L,{children:X(parseFloat(new s.Percent(m,1e6).toSignificant()))})]}),(0,i.jsx)(r.Z,{removed:ne,inRange:!ee})]}),Y&&F?(0,i.jsxs)(S,{children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(b,{children:(0,i.jsx)(f.cC,{children:"Min: "})}),(0,i.jsxs)("span",{children:[q({price:Y,atLimit:W,direction:x.Mb.LOWER})," "]}),(0,i.jsxs)(f.cC,{children:[(0,i.jsx)(a.Z,{text:null===(M=H)||void 0===M?void 0:M.symbol})," per ",(0,i.jsx)(a.Z,{text:(null===(U=J)||void 0===U?void 0:U.symbol)??""})]})]})," ",(0,i.jsxs)(k.Pw,{children:[(0,i.jsx)(A,{children:"\u2194"})," "]}),(0,i.jsxs)(k.Z,{children:[(0,i.jsx)(A,{children:"\u2194"})," "]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(b,{children:(0,i.jsx)(f.cC,{children:"Max:"})}),(0,i.jsxs)("span",{children:[q({price:F,atLimit:W,direction:x.Mb.UPPER})," "]}),(0,i.jsxs)(f.cC,{children:[(0,i.jsx)(a.Z,{text:null===(O=H)||void 0===O?void 0:O.symbol})," per"," ",(0,i.jsx)(a.Z,{maxCharacters:10,text:null===(R=J)||void 0===R?void 0:R.symbol})]})]})]}):(0,i.jsx)(d.ZP,{})]})}},57899:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(21651),s=n(45779),o=n(31744);function r(e,t,n){return(0,s.useMemo)((()=>({[o.Mb.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[o.Mb.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},55660:(e,t,n)=>{n.d(t,{$o:()=>k,AI:()=>g,Oh:()=>w,tK:()=>x});var i=n(51371),s=n(76078),o=n(87270),r=n(21651),a=n(21891),d=n(61592),c=n.n(d),l=n(84938),p=n(45779),u=n(72993);function f(e,t,n,i,s,o,r){try{var a=e[o](r),d=a.value}catch(c){return void n(c)}a.done?t(d):Promise.resolve(d).then(i,s)}const h=new i.vU(o.Mt);let m=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:s}=t,{address:o}=n,a=`${e}:${s}:${o}:${i.toString()}`,d=this.addresses.find((e=>e.key===a));if(d)return d.address;const c={key:a,address:(0,r.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(c),c.address}static getPool(e,t,n,i,s,o){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find((r=>r.token0===e&&r.token1===t&&r.fee===n&&c().EQ(r.sqrtRatioX96,i)&&c().EQ(r.liquidity,s)&&r.tickCurrent===o));if(a)return a;const d=new r.Pool(e,t,n,i,s,o);return this.pools.unshift(d),d}};var x;function w(e){const t=(0,u.x)(),n=(0,p.useMemo)((()=>t?e.map((([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,s=t.wrapped;if(i.equals(s))return;return i.sortsBefore(s)?[i,s,n]:[s,i,n]}})):new Array(e.length)),[t,e]),i=(0,p.useMemo)((()=>{const e=t&&s.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map((t=>t&&m.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]),o=(0,l._Y)(i,h,"slot0"),r=(0,l._Y)(i,h,"liquidity");return(0,p.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[x.INVALID,null];const[s,a,d]=i;if(!o[t])return[x.INVALID,null];const{result:c,loading:l,valid:p}=o[t];if(!r[t])return[x.INVALID,null];const{result:u,loading:f,valid:h}=r[t];if(!i||!p||!h)return[x.INVALID,null];if(l||f)return[x.LOADING,null];if(!c||!u)return[x.NOT_EXISTS,null];if(!c.sqrtPriceX96||c.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=m.getPool(s,a,d,c.sqrtPriceX96,u[0],c.tick);return[x.EXISTS,e]}catch(w){return console.error("Error when constructing the pool",w),[x.NOT_EXISTS,null]}}))),[r,e,o,n])}function g(e,t,n){return w((0,p.useMemo)((()=>[[e,t,n]]),[e,t,n]))[0]}function k(e,t,n,i){const d=(0,p.useRef)([x.LOADING,null]),c=e&&t&&n?m.getPoolAddress(s.V3_CORE_FACTORY_ADDRESSES[i],e,t,n):void 0,l=(0,p.useMemo)((()=>c?{[i]:c}:{}),[i,c]),u=(0,a.SO)(l,o.Mt)[i];return(0,p.useEffect)((()=>{function i(){var s;return s=function*(){try{if(!e||!t||!n||!c||!u)return void(d.current=[x.INVALID,null]);const i=yield u.slot0(),s=yield u.liquidity();d.current=[x.NOT_EXISTS,null];const o=new r.Pool(e,t,n,i.sqrtPriceX96.toString(),s.toString(),i.tick);d.current=[x.EXISTS,o]}catch(i){d.current=[x.INVALID,null]}},i=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=s.apply(e,t);function r(e){f(o,n,i,r,a,"next",e)}function a(e){f(o,n,i,r,a,"throw",e)}r(void 0)}))},i.apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[u,n,c,e,t]),d.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},40413:(e,t,n)=>{n.d(t,{W:()=>c,n:()=>d});var i=n(11604),s=n(84938),o=n(45779),r=n(7151);function a(e){var t;const n=(0,r.GL)(),a=(0,o.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),d=(0,s.es)(n,"positions",a),c=(0,o.useMemo)((()=>d.some((({loading:e})=>e))),[d]),l=(0,o.useMemo)((()=>d.some((({error:e})=>e))),[d]),p=(0,o.useMemo)((()=>{if(!c&&!l&&e)return d.map(((t,n)=>{const i=e[n],s=t.result;return{tokenId:i,fee:s.fee,feeGrowthInside0LastX128:s.feeGrowthInside0LastX128,feeGrowthInside1LastX128:s.feeGrowthInside1LastX128,liquidity:s.liquidity,nonce:s.nonce,operator:s.operator,tickLower:s.tickLower,tickUpper:s.tickUpper,token0:s.token0,token1:s.token1,tokensOwed0:s.tokensOwed0,tokensOwed1:s.tokensOwed1}}))}),[c,l,d,e]);return{loading:c,positions:null===(t=p)||void 0===t?void 0:t.map(((e,t)=>({...e,tokenId:a[t][0]})))}}function d(e){var t;const n=a(e?[e]:void 0);return{loading:n.loading,position:null===(t=n.positions)||void 0===t?void 0:t[0]}}function c(e){var t,n;const d=(0,r.GL)(),{loading:c,result:l}=(0,s.Wk)(d,"balanceOf",[e??void 0]),p=null===(n=l)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toNumber(),u=(0,o.useMemo)((()=>{if(p&&e){const t=[];for(let n=0;n<p;n++)t.push([e,n]);return t}return[]}),[e,p]),f=(0,s.es)(d,"tokenOfOwnerByIndex",u),h=(0,o.useMemo)((()=>f.some((({loading:e})=>e))),[f]),m=(0,o.useMemo)((()=>e?f.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,f]),{positions:x,loading:w}=a(m);return{loading:h||c||w,positions:x}}}}]);
//# sourceMappingURL=9212.95a762c7.chunk.js.map