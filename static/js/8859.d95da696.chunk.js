"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8859],{78859:(e,n,t)=>{t.r(n),t.d(n,{default:()=>sn});var s=t(92936),a=t(5985),o=t(12722),i=t(66057),r=t(78129),l=t(45779),d=t(6282),p=t(14411),c=t(99582),m=t(58690),u=t(76907);function x(e,n,t,s,a,o,i){try{var r=e[o](i),l=r.value}catch(d){return void t(d)}r.done?n(l):Promise.resolve(l).then(s,a)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(s,a){var o=e.apply(n,t);function i(e){x(o,s,a,i,r,"next",e)}function r(e){x(o,s,a,i,r,"throw",e)}i(void 0)}))}}const f=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselContainer",componentId:"sc-433e7397-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,g=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselCardContainer",componentId:"sc-433e7397-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,w=(0,p.default)(u.a.div).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemCard",componentId:"sc-433e7397-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,C=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemIcon",componentId:"sc-433e7397-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,b=800,y=({children:e,activeIndex:n,toggleNextSlide:t})=>{const a=(0,l.useCallback)(((n,t=e.length)=>(0,r.ef)(n,t)),[e]),o=(0,l.useCallback)(((e,n,t)=>(0,r.E)(e,n,t,a)),[a]),[i,d]=(0,u.bY)(e.length,(n=>({x:(n<e.length-1?n:-1)*b}))),p=(0,l.useRef)([0,1]),c=(0,l.useCallback)(((n,t)=>{const s=a(Math.floor(n/b)%e.length),i=t<0?e.length-2:1;d((a=>{const l=o(a,s,i),d=o(a,p.current[0],p.current[1]),c=(0,r.Z1)(s,i,l,e.length,n);return{x:-n%(b*e.length)+b*c,immediate:t<0?d>l:d<l,config:{tension:250,friction:30}}})),p.current=[s,i]}),[a,o,d,e.length]),x=(0,l.useRef)(0);(0,l.useEffect)((()=>{c(n*b,x.current)}),[n,c]);const y=(0,l.useCallback)((e=>{x.current=e,t(e)}),[t]);return(0,l.useEffect)((()=>{const e=setInterval(h((function*(){y(1)})),7e3);return()=>{clearInterval(e)}}),[y,n]),(0,s.jsxs)(f,{children:[(0,s.jsx)(C,{onClick:()=>y(-1),children:(0,s.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,s.jsx)(g,{children:i.map((({x:n},t)=>(0,s.jsx)(w,{style:{x:n},children:e[t]},t)))}),(0,s.jsx)(C,{onClick:()=>y(1),children:(0,s.jsx)(m.XC,{width:"16px",height:"16px"})})]})},k=({children:e})=>(0,s.jsx)(y,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var v=t(32546),j=t(82743),_=t(13901),T=t(47263),N=t(68798),$=t(66136);const S=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardBorder",componentId:"sc-3794e070-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,D=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderContainer",componentId:"sc-3794e070-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,I=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCardHeaderContainer",componentId:"sc-3794e070-2"})`
  position: relative;
  animation: ${v.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,H=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderColumn",componentId:"sc-3794e070-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,A=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__IconContainer",componentId:"sc-3794e070-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,z=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionNameContainer",componentId:"sc-3794e070-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,U=(0,p.default)(j.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionNameContainer",componentId:"sc-3794e070-6"})`
  width: 50%;
`,F=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__HeaderOverlay",componentId:"sc-3794e070-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,E=p.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionImage",componentId:"sc-3794e070-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,P=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionImage",componentId:"sc-3794e070-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${v.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,B=(0,p.default)(j.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingTableElement",componentId:"sc-3794e070-10"})`
  width: 50px;
`,X=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__TableElement",componentId:"sc-3794e070-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,O=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__FirstColumnTextWrapper",componentId:"sc-3794e070-12"})``,V=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardBottomContainer",componentId:"sc-3794e070-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,L=p.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__MarketplaceIcon",componentId:"sc-3794e070-14"})`
  width: 20px;
  height: 20px;
`,M=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardContainer",componentId:"sc-3794e070-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${X}:nth-child(3n-1), ${B}:nth-child(3n-1) {
    justify-self: center;
  }

  ${X}:nth-child(3n), ${B}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${O} {
      display: none;
    }
    ${X} {
      justify-self: left !important;
    }
    ${H} {
      padding: 0 20px;
    }
  }
`,R=({marketplace:e,floorInEth:n,listings:t})=>{const{formatNumberOrString:a}=(0,$.Gb)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(X,{children:[(0,s.jsx)(L,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,s.jsx)(O,{children:(0,s.jsx)(N.T.BodySmall,{color:"neutral2",children:e})})]}),(0,s.jsx)(X,{children:(0,s.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${a({input:n,type:$.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,s.jsx)(X,{children:(0,s.jsx)(N.T.BodySmall,{color:"neutral2",children:Number(t)>0?t:"None"})})]})},G=[T.Fz.Opensea,T.Fz.X2Y2,T.Fz.LooksRare],W={[T.Fz.Opensea]:"OpenSea",[T.Fz.X2Y2]:"X2Y2",[T.Fz.LooksRare]:"LooksRare"},Y=({collection:e,onClick:n})=>{var t;const{data:a,loading:o}=(0,_.K)(e.address??""),{formatNumber:i}=(0,$.Gb)();return o?(0,s.jsx)(J,{}):(0,s.jsx)(S,{children:(0,s.jsxs)(M,{onClick:n,children:[(0,s.jsx)(q,{collection:e}),(0,s.jsx)(V,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(X,{children:[(0,s.jsx)(m.pD,{width:"20",height:"20"}),(0,s.jsx)(O,{children:(0,s.jsx)(N.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,s.jsx)(X,{children:e.floor&&(0,s.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[i({input:e.floor,type:$.sw.NFTToken})," ETH Floor"]})}),(0,s.jsx)(X,{children:(0,s.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(t=a.marketplaceCount)||void 0===t?void 0:t.reduce(((e,n)=>e+n.count),0)," Listings"]})}),G.map((n=>{var t;const o=null===(t=a.marketplaceCount)||void 0===t?void 0:t.find((e=>e.marketplace===n));return o?(0,s.jsx)(R,{marketplace:W[n],listings:o.count,floorInEth:o.floorPrice},`CarouselCard-key-${e.address}-${o.marketplace}`):null}))]})})]})})},K=()=>(0,s.jsx)(s.Fragment,{children:[...Array(12)].map((e=>(0,s.jsx)(B,{},e)))}),Z=(0,p.default)(N.T.MediumHeader).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionName",componentId:"sc-3794e070-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,q=({collection:e})=>(0,s.jsxs)(D,{src:e.bannerImageUrl??"",children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(E,{src:e.imageUrl}),(0,s.jsxs)(z,{children:[(0,s.jsx)(Z,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,s.jsx)(A,{children:(0,s.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,s.jsx)(F,{})]}),J=({collection:e})=>(0,s.jsx)(S,{children:(0,s.jsxs)(M,{children:[e?(0,s.jsx)(q,{collection:e}):(0,s.jsxs)(I,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(P,{}),(0,s.jsx)(U,{})]}),(0,s.jsx)(F,{})]}),(0,s.jsx)(V,{children:(0,s.jsx)(K,{})})]})}),Q=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerContainer",componentId:"sc-dcc9bf26-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ee=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerMainArea",componentId:"sc-dcc9bf26-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ne=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Banner__HeaderContainer",componentId:"sc-dcc9bf26-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,te=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],se=()=>{const e=(0,d.s0)(),{data:n}=(0,i.S)(5+te.length,c._uu.Day),t=(0,l.useMemo)((()=>{var e;return null===(e=n)||void 0===e?void 0:e.filter((e=>e.address&&!te.includes(e.address))).slice(0,5)}),[n]),[a,o]=(0,l.useState)(0),p=(0,l.useCallback)((e=>{t&&o((n=>(0,r.ef)(n+e,t.length)))}),[t]);return(0,s.jsx)(Q,{children:(0,s.jsxs)(ee,{children:[(0,s.jsxs)(ne,{children:["Better prices. ",(0,s.jsx)("br",{}),"More listings."]}),t?(0,s.jsx)(y,{activeIndex:a,toggleNextSlide:p,children:t.map((n=>(0,s.jsx)(Y,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,s.jsx)(k,{children:(0,s.jsx)(J,{})})]})})};var ae=t(68588),oe=t(79132),ie=t(54972),re=t(66284),le=t(19478),de=t(97341);t(12143),t(49484);const pe=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedText",componentId:"sc-cab00f20-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ce=(0,p.default)(pe).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionNameContainer",componentId:"sc-cab00f20-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,me=(0,p.default)(pe).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionName",componentId:"sc-cab00f20-2"})`
  margin-left: 8px;
`,ue=(0,p.default)(ie.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeader",componentId:"sc-cab00f20-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,xe=(0,p.default)(ie.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeaderSmall",componentId:"sc-cab00f20-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__RoundedImage",componentId:"sc-cab00f20-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,fe=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__ChangeCellContainer",componentId:"sc-cab00f20-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ge=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__EthContainer",componentId:"sc-cab00f20-7"})`
  display: flex;
  justify-content: flex-end;
`,we=({value:e})=>{const n=(0,de.dD)();return(0,s.jsxs)(ce,{children:[(0,s.jsx)(he,{src:e.logo}),(0,s.jsx)(me,{children:n?(0,s.jsx)(xe,{children:e.name}):(0,s.jsx)(ue,{children:e.name})}),e.isVerified&&(0,s.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,s.jsx)(m.SA,{})})]})},Ce=({value:e})=>{const{formatNumberOrString:n}=(0,$.Gb)();return(0,s.jsx)("span",{children:e.value?n({input:e.value,type:$.sw.NFTCollectionStats}):"-"})},be=(e,n,t,s)=>e===T.VG.ETH?t:s&&t?s*(n?parseFloat((0,re.formatEther)(t)):t):void 0,ye=({value:e,denomination:n,usdPrice:t})=>{const{formatNumberOrString:a}=(0,$.Gb)(),o=be(n,!1,e,t),i=n===T.VG.ETH,r=a({input:o,type:i?$.sw.NFTToken:$.sw.FiatTokenStats})+(i?" ETH":""),l=(0,de.dD)()?ie.Tv.BodySmall:ie.Tv.BodyPrimary;return(0,s.jsx)(ge,{children:(0,s.jsx)(l,{children:e?r:"-"})})},ke=({value:e})=>(0,s.jsx)(ie.Tv.BodyPrimary,{children:e}),ve=({value:e,denomination:n,usdPrice:t})=>{const{formatNumberOrString:a}=(0,$.Gb)(),o=be(n,!1,e,t),i=n===T.VG.ETH,r=a({input:o,type:i?$.sw.WholeNumber:$.sw.FiatTokenStats})+(i?" ETH":"");return(0,s.jsx)(ge,{children:(0,s.jsx)(ie.Tv.BodyPrimary,{children:r})})},je=({change:e,children:n})=>{const t=(0,de.dD)()?ie.Tv.BodySmall:ie.Tv.BodyPrimary;return(0,s.jsxs)(fe,{change:e??0,children:[(0,s.jsx)(le.Kx,{delta:e}),(0,s.jsx)(t,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var _e=t(98643),Te=t(91527),Ne=t(40403),$e=t(72993),Se=t(80305),De="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Ie="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",He="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",Ae="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const ze=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__RankCellContainer",componentId:"sc-442346c-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Ue=p.default.tr.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRow",componentId:"sc-442346c-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Fe=p.default.tr.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingRow",componentId:"sc-442346c-2"})`
  height: 80px;
`,Ee=p.default.th.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__StyledHeader",componentId:"sc-442346c-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Pe=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingHolder",componentId:"sc-442346c-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Be=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__StyledCollectionNameHolder",componentId:"sc-442346c-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Xe=(0,p.default)(j.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__StyledImageHolder",componentId:"sc-442346c-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Oe=(0,p.default)(j.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRankHolder",componentId:"sc-442346c-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Ve=10;function Le({columns:e,data:n,smallHiddenColumns:t,mediumHiddenColumns:i,largeHiddenColumns:r,...c}){const m=(0,p.useTheme)(),u=(0,$e.x)(),{width:x}=(0,de.iP)(),h=(0,de.dD)(),{getTableProps:f,getTableBodyProps:g,headerGroups:w,rows:C,prepareRow:b,setHiddenColumns:y,visibleColumns:k}=(0,Ne.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Re.Volume}]},...c},Ne.useSortBy),v=(0,d.s0)();return(0,l.useEffect)((()=>{x&&(x<=m.breakpoint.sm?y(t):x<=m.breakpoint.md?y(i):x<=m.breakpoint.lg?y(r):y([]))}),[x,y,e,t,i,r,m.breakpoint]),0===n.length?(0,s.jsx)(Me,{headerGroups:w,visibleColumns:k,...f()}):(0,s.jsxs)("table",{...f(),className:Ie,children:[(0,s.jsx)("thead",{className:Ae,children:w.map((e=>(0,l.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,l.createElement)(Ee,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?h?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,s.jsx)(Se.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,s.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,s.jsx)(_e.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,s.jsx)(Se.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,s.jsx)("tbody",{...g(),children:C.map(((e,n)=>(b(e),(0,s.jsx)(o.M8,{events:[a.TM.onClick],name:a.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:a.xo.NFT_TRENDING_ROW,children:(0,l.createElement)(Ue,{...e.getRowProps(),key:e.id,onClick:()=>v(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,t)=>(0,l.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:t,style:{maxWidth:0===t?h?"240px":"360px":"160px"}},0===t?(0,s.jsxs)(ze,{children:[!h&&(0,s.jsx)(ie.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Me({headerGroups:e,visibleColumns:n,...t}){return(0,s.jsxs)("table",{...t,className:Ie,children:[(0,s.jsx)("thead",{className:Ae,children:e.map((e=>(0,l.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,l.createElement)(Ee,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,s.jsx)(Se.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,s.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,s.jsx)(_e.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,s.jsx)(Se.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,s.jsx)("tbody",{...t,children:[...Array(Ve)].map(((e,t)=>(0,s.jsx)(Fe,{children:[...Array(n.length)].map(((e,n)=>(0,s.jsx)("td",{className:De,children:0===n?(0,s.jsxs)(Be,{children:[(0,s.jsx)(Oe,{}),(0,s.jsx)(Xe,{}),(0,s.jsx)(j.X,{})]}):(0,s.jsx)(Pe,{children:(0,s.jsx)(j.X,{})})},n)))},t)))})]})}var Re;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Re||(Re={}));const Ge=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1,We=({data:e,timePeriod:n})=>{const t=(0,l.useMemo)((()=>(e,n)=>Ge(e.original.floor.value,n.original.floor.value)),[]),a=(0,l.useMemo)((()=>(e,n)=>Ge(e.original.floor.change,n.original.floor.change)),[]),o=(0,l.useMemo)((()=>(e,n)=>Ge(e.original.volume.value,n.original.volume.value)),[]),i=(0,l.useMemo)((()=>(e,n)=>Ge(e.original.volume.change,n.original.volume.change)),[]),r=(0,l.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:we,disableSortBy:!0},{id:Re.Floor,Header:Re.Floor,accessor:({floor:e})=>e.value,sortType:t,Cell:function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ye,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==T.XH.AllTime&&(0,s.jsx)(ie.SF,{children:(0,s.jsx)(je,{change:e.row.original.floor.change})})]})}},{id:Re.FloorChange,Header:Re.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===T.XH.AllTime,sortType:a,Cell:function(e){return n===T.XH.AllTime?(0,s.jsx)(ke,{value:"-"}):(0,s.jsx)(je,{change:e.row.original.floor.change})}},{id:Re.Volume,Header:Re.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,s.jsx)(ve,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Re.VolumeChange,Header:Re.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===T.XH.AllTime,sortType:i,Cell:function(e){const{change:t}=e.row.original.volume;return n===T.XH.AllTime?(0,s.jsx)(ke,{value:"-"}):t&&t>=9999?(0,s.jsxs)(je,{change:t,children:[">9999","%"]}):(0,s.jsx)(je,{change:t})}},{id:Re.Items,Header:Re.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,s.jsx)(Ce,{value:{value:e.row.original.totalSupply}})}},{Header:Re.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,s.jsx)(Ce,{value:e.row.original.owners})}}]),[a,t,i,o,n]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(Le,{smallHiddenColumns:[Re.Items,Re.FloorChange,Re.Volume,Re.VolumeChange,Re.Owners],mediumHiddenColumns:[Re.Items,Re.FloorChange,Re.VolumeChange,Re.Owners],largeHiddenColumns:[Re.Items,Re.Owners],data:e,columns:r})})},Ye=[{label:"1D",value:T.XH.OneDay},{label:"1W",value:T.XH.SevenDays},{label:"1M",value:T.XH.ThirtyDays},{label:"All",value:T.XH.AllTime}],Ke=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__ExploreContainer",componentId:"sc-6d5069b4-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ze=p.default.h1.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledHeader",componentId:"sc-6d5069b4-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,qe=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__FiltersRow",componentId:"sc-6d5069b4-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Je=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Filter",componentId:"sc-6d5069b4-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Qe=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Selector",componentId:"sc-6d5069b4-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${ae.cR}
`,en=(0,p.default)(ie.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledSelectorText",componentId:"sc-6d5069b4-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;const nn=()=>{const{formatterLocalCurrency:e}=(0,$.h2)(),[n,t]=(0,l.useState)(T.XH.OneDay),[a,o]=(0,l.useState)(!0),{data:r,loading:d}=(0,i.S)(100,function(e){switch(e){case T.XH.OneDay:return c._uu.Day;case T.XH.SevenDays:return c._uu.Week;case T.XH.ThirtyDays:return c._uu.Month;case T.XH.AllTime:return c._uu.Max;default:return c._uu.Day}}(n)),p=(0,oe.$N)(),m=(0,l.useMemo)((()=>!d&&r?r.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:a?T.VG.ETH:T.VG.USD,usdPrice:p}))):[]),[r,d,a,p]);return(0,s.jsxs)(Ke,{children:[(0,s.jsx)(Ze,{children:"Trending NFT collections"}),(0,s.jsxs)(qe,{children:[(0,s.jsx)(Je,{children:Ye.map((e=>(0,s.jsx)(Qe,{active:e.value===n,onClick:()=>t(e.value),children:(0,s.jsx)(en,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,s.jsxs)(Je,{onClick:()=>o(!a),children:[(0,s.jsx)(Qe,{active:a,children:(0,s.jsx)(en,{lineHeight:"20px",active:a,children:"ETH"})}),(0,s.jsx)(Qe,{active:!a,children:(0,s.jsx)(en,{lineHeight:"20px",active:!a,children:e})})]})]}),(0,s.jsx)(We,{data:m,timePeriod:n})]})},tn=p.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\explore\\index__ExploreContainer",componentId:"sc-63c48b70-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,sn=()=>{const e=(0,oe.cP)((e=>e.setBagExpanded));return(0,l.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.fM,{page:a.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,s.jsxs)(tn,{children:[(0,s.jsx)(se,{}),(0,s.jsx)(nn,{})]})})})}}}]);
//# sourceMappingURL=8859.d95da696.chunk.js.map