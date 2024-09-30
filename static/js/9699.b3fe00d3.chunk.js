"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9699],{89699:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Ze});var n=t(92936),a=t(45779),s=t(14411),o=t(6823),r=t(55479),d=t(27427),p=t(97341),l=t(27359),c=t(95055);const x=(0,s.default)(c.E.button).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Button",componentId:"sc-cf748e08-0"})`
  display: flex;
  padding: 12px 16px;
  border-radius: 24px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${({theme:e})=>e.surface1};
  overflow: hidden;
  cursor: ${({cursor:e})=>e??"pointer"};
  flex: none;
`,h=(0,s.default)(c.E.div).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Slider",componentId:"sc-cf748e08-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,g=s.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Label",componentId:"sc-cf748e08-2"})`
  color: ${e=>e.color};
  font-family: Basel;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  font-style: normal;
  font-weight: 535;
  line-height: 24px; /* 120% */
  flex: none;
`,m=(0,s.default)(c.E.div).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Opacity",componentId:"sc-cf748e08-3"})`
  flex: 0;
  display: flex;
  overflow: visible;
  opacity: ${e=>e.opacity};
`;function w(e){return(0,n.jsx)(x,{transition:{delayChildren:0},cursor:e.cursor,children:(0,n.jsxs)(h,{variants:{intial:{x:0},hover:{x:-24}},children:[(0,n.jsx)(m,{opacity:1,variants:{intial:{opacity:1},hover:{opacity:0}},children:e.icon}),(0,n.jsx)(g,{color:e.color,children:e.label}),(0,n.jsx)(m,{opacity:0,variants:{intial:{opacity:0},hover:{opacity:1}},children:(0,n.jsx)(r.x,{width:"0px",overflow:"visible",children:(0,n.jsx)(l.ol,{size:"24px",fill:e.color})})})]})})}var u=t(6282);const f=(0,c.E)((0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\ValuePropCard__Container",componentId:"sc-5e52b940-0"})`
  position: relative;
  border-radius: 32px;
  width: 100%;
  cursor: pointer;
  height: ${e=>e.height||"609px"};
  background-color: ${e=>{var i,t;return e.isDarkMode?null===(i=e.backgroundColor)||void 0===i?void 0:i.dark:null===(t=e.backgroundColor)||void 0===t?void 0:t.light}};
  overflow: hidden;
  text-decoration: none;
  @media (max-width: 1024px) {
    height: ${e=>e.height||"516px"};
    min-height: ${e=>e.minHeight||"240px"};
  }
  @media (max-width: 768px) {
    height: auto;
    min-height: ${e=>e.minHeight||"240px"};
  }
`),C=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\ValuePropCard__Inner",componentId:"sc-5e52b940-1"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({alignTextToBottom:e})=>e?s.css`
          height: 100%;
          justify-content: space-between;
        `:"height: unset;"}
  z-index: 5;
  gap: 24px;
  padding: 32px;
  @media (max-width: 1024px) {
    gap: 16px;
    padding: 24px;
  }
  @media (max-width: 396px) {
    padding: 20px;
  }
`,b=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\ValuePropCard__Title",componentId:"sc-5e52b940-2"})`
  color: ${e=>e.color};
  font-feature-settings: 'ss07' on;
  font-family: Basel;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  white-space: pre-line;
  text-wrap: pretty;
  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;function v(e){const{isDarkMode:i,backgroundColor:t,height:a,textColor:s,minHeight:o,alignTextToBottom:r,href:d,to:p}=e,l=(0,u.s0)();return(0,n.jsxs)(f,{initial:"initial",whileHover:"hover",isDarkMode:i,backgroundColor:t,height:a,minHeight:o,as:"a",href:d,target:"_blank",rel:"noreferrer noopener",onClick:()=>{p&&l(p)},...e,children:[(0,n.jsxs)(C,{alignTextToBottom:r,children:[e.button,(0,n.jsx)(b,{color:s,children:e.titleText})]}),e.children]})}const k=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\DocumentationCard__Contents",componentId:"sc-b889ac93-0"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 1;
  @media (max-width: 1280px) {
    opacity: 0.32;
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`,y="#00C3A0";function j(e){const{rive:i,RiveComponent:t}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"Dev",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.CenterRight})}),a=(0,p.eI)(),s=a.lg,r=a.xl;return(0,n.jsx)(v,{height:s?"340px":"240px",href:"https://docs.uniswap.org/",backgroundColor:{dark:"rgba(0, 195, 160, 0.08);",light:"rgba(0, 195, 160, 0.06);"},isDarkMode:e.isDarkMode,textColor:y,button:(0,n.jsx)(w,{color:y,label:o.t`Developer docs`,icon:(0,n.jsx)(l.EG,{size:"24px",fill:y})}),titleText:o.t`Build the next generation of open applications and tools.`,paddingRight:r?"16%":"0%",alignTextToBottom:!0,children:(0,n.jsx)(k,{children:(0,n.jsx)(t,{onMouseEnter:()=>i&&i.play()})})})}var _=t(65075);const D=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\DownloadWalletCard__Contents",componentId:"sc-90a08ba1-0"})`
  width: 100%;
  height: 75%;
  position: absolute;
  margin: auto;
  bottom: 0;
  z-index: 1;
  @media (max-width: 980px) and (min-width: 768px) {
    width: 125%;
    transform: translateX(-10.25%);
  }
`;function I(){const e=(0,s.useTheme)(),i=(0,_.Gv)(),{rive:t,RiveComponent:a}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Light",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.BottomCenter})}),{rive:r,RiveComponent:p}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Dark",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.BottomCenter})});return(0,n.jsx)(v,{href:"https://wallet.uniswap.org/",minHeight:"500px",isDarkMode:i,textColor:e.accent1,backgroundColor:{dark:"rgba(252, 114, 255, 0.12)",light:"rgba(252, 114, 255, 0.12)"},button:(0,n.jsx)(w,{color:e.accent1,label:o.t`Uniswap wallet`,icon:(0,n.jsx)(l.w5,{size:"24px",fill:e.accent1})}),titleText:o.t`The wallet built for swapping. Available on iOS and Android.`,children:(0,n.jsx)(D,{children:i?(0,n.jsx)(p,{onMouseEnter:()=>{var e;return null===(e=r)||void 0===e?void 0:e.play()}}):(0,n.jsx)(a,{onMouseEnter:()=>{var e;return null===(e=t)||void 0===e?void 0:e.play()}})})})}const L=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\LiquidityCard__Contents",componentId:"sc-d4ebd4f0-0"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 1;
  @media (max-width: 1280px) {
    opacity: 0.24;
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`,A="#9E62FF";function N(e){const{rive:i,RiveComponent:t}=(0,d.useRive)({src:"/rive/landing-page.riv",artboard:"LP",stateMachines:"Animation",layout:new d.Layout({fit:d.Fit.Contain,alignment:d.Alignment.CenterRight})}),a=(0,p.eI)(),s=a.lg,r=a.xl;return(0,n.jsx)(v,{to:"/pool",tagText:o.t`Provide Liquidity`,height:s?"340px":"240px",isDarkMode:e.isDarkMode,textColor:A,backgroundColor:{dark:"rgba(136, 63, 255, 0.12)",light:"rgba(136, 63, 255, 0.06)"},button:(0,n.jsx)(w,{color:A,label:o.t`Liquidity`,icon:(0,n.jsx)(l.Ll,{size:"24px",fill:A})}),titleText:o.t`Provide liquidity to pools on the Uniswap Protocol and earn fees on swaps.`,paddingRight:r?"16%":"0%",alignTextToBottom:!0,children:(0,n.jsx)(L,{children:(0,n.jsx)(t,{onMouseEnter:()=>i&&i.play()})})})}var U=t(76078),T=t(47236),$=t(19478),S=t(64370),z=t(18569),E=t(39671),B=t(99582),M=t(66136),P=t(57852);const H=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__Contents",componentId:"sc-6eca038-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 32px;
  padding-bottom: 32px;
  @media (max-width: 1024px) {
    padding: 24px;
    padding-bottom: 32px;
  }
  @media (max-width: 396px) {
    padding: 16px;
    padding-bottom: 24px;
  }
`,V=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenRow",componentId:"sc-6eca038-1"})`
  width: 100%;
  height: 72px;
  overflow: hidden;
  padding: 16px;
  padding-right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface1};
  @media (max-width: 1024px) {
    height: 64px;
    padding-right: 16px;
  }
  @media (max-width: 768px) {
    height: 56px;
    padding-right: 16px;
  }
  @media (max-width: 468px) {
    height: 48px;
    padding: 12px;
    border-radius: 16px;
  }
  transition: background-color 125ms ease-in, transform 125ms ease-in;
  &:hover {
    background-color: ${({theme:e})=>e.surface2};
    transform: scale(1.03);
  }
`,R=s.default.h3.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenName",componentId:"sc-6eca038-2"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${e=>e.color||e.theme.neutral1};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    display: none;
  }
`,F=s.default.h3.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenTicker",componentId:"sc-6eca038-3"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.color||e.theme.neutral2};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    color: ${e=>e.color||e.theme.neutral1};
  }
`,W=s.default.h3.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenPrice",componentId:"sc-6eca038-4"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  line-height: 32px;
  color: ${e=>e.color||e.theme.neutral1};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
`,q=s.default.h3.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__DeltaText",componentId:"sc-6eca038-5"})`
  text-align: right;
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  line-height: 32px;
  color: ${e=>"red"===e.color?e.theme.critical:e.theme.success};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
    width: 50px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
    width: 50px;
  }
`,G=(0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__DeltaContainer",componentId:"sc-6eca038-6"})`
  @media (min-width: 1030px) and (max-width: 1150px) {
    display: none;
  }
  @media (min-width: 767px) and (max-width: 915px) {
    display: none;
  }
`,O="#2ABDFF",Q=[{chainId:U.ChainId.MAINNET,address:"ETH"},{chainId:U.ChainId.BASE,address:S.QP.address},{chainId:U.ChainId.MAINNET,address:S.yg[U.ChainId.MAINNET].address},{chainId:U.ChainId.MAINNET,address:S.Ej.address}];function X({chainId:e,address:i}){var t,s,o,d,l,c,x,h,g,m,w;const f=(0,p.eI)().sm,C=(0,u.s0)(),{formatFiatPrice:b,formatDelta:v}=(0,M.Gb)(),k=(0,E.U8)(i,e),y=(0,B.sYx)({variables:{address:null===(t=k)||void 0===t?void 0:t.wrapped.address,chain:(0,P.tq)({chainId:e})}}),j=(null===(l=y.data)||void 0===l||null===(d=l.token)||void 0===d||null===(o=d.market)||void 0===o||null===(s=o.price)||void 0===s?void 0:s.value)??0,_=(null===(g=y.data)||void 0===g||null===(h=g.token)||void 0===h||null===(x=h.market)||void 0===x||null===(c=x.pricePercentChange)||void 0===c?void 0:c.value)??0,D=(0,a.useCallback)((t=>{t.stopPropagation(),C((0,z.dG)({address:"ETH"===i?S.dt:i,chain:(0,P.tq)({chainId:e})}))}),[i,e,C]);return(0,n.jsxs)(V,{onClick:D,children:[(0,n.jsx)(T.V,{currencies:[k],chainId:e,size:f?32:24}),(0,n.jsxs)(r.x,{justify:"space-between",gap:"16px",children:[(0,n.jsxs)(r.x,{width:"auto",gap:"8px",align:"center",overflow:"hidden",children:[(0,n.jsx)(R,{children:null===(m=k)||void 0===m?void 0:m.name}),(0,n.jsx)(F,{children:null===(w=k)||void 0===w?void 0:w.symbol})]}),(0,n.jsxs)(r.x,{width:"auto",gap:"8px",align:"center",children:[(0,n.jsx)(W,{children:b({price:j,type:M.sw.FiatTokenPrice})}),(0,n.jsxs)(G,{gap:"4px",align:"center",justify:"flex-end",children:[(0,n.jsx)($.Kx,{delta:_}),(0,n.jsx)(q,{color:_<0?"red":"green",children:v(_)})]})]})]})]})}function Z(e){return(0,n.jsx)(v,{to:"/tokens/ethereum",minHeight:"450px",isDarkMode:e.isDarkMode,textColor:O,backgroundColor:{dark:"rgba(0, 102, 255, 0.12)",light:"rgba(0, 102, 255, 0.04)"},button:(0,n.jsx)(w,{color:O,label:o.t`Web app`,icon:(0,n.jsx)(l.ar,{size:"24px",fill:O})}),titleText:o.t`Swapping made simple. Access thousands of tokens on 8+ chains.`,children:(0,n.jsx)(H,{children:Q.map((e=>(0,n.jsx)(X,{chainId:e.chainId,address:e.address},`tokenRow-${e.address}`)))})})}const K=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\DirectToDefi__SectionLayout",componentId:"sc-219bd854-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,Y=(0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\DirectToDefi__RowToCol",componentId:"sc-219bd854-1"})`
  height: auto;
  flex-shrink: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,J=(0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\DirectToDefi__SectionCol",componentId:"sc-219bd854-2"})`
  flex-direction: column;
  max-width: 1280px;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;function ee(){return(0,n.jsx)(K,{children:(0,n.jsxs)(J,{direction:"column",gap:"40px",maxWidth:"1280px",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(o.cC,{children:"Go direct to DeFi"})}),(0,n.jsxs)(r.x,{direction:"column",gap:"16px",children:[(0,n.jsxs)(Y,{direction:"row",gap:"16px",children:[(0,n.jsx)(Z,{}),(0,n.jsx)(I,{})]}),(0,n.jsxs)(Y,{direction:"row",gap:"16px",children:[(0,n.jsx)(j,{}),(0,n.jsx)(N,{})]})]})]})})}var ie=t(89332);const te=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__SectionLayout",componentId:"sc-850addca-0"})`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,ne=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__Layout",componentId:"sc-850addca-1"})`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`,ae=(0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__SectionCol",componentId:"sc-850addca-2"})`
  flex-direction: column;
  max-width: 1328px;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`,se=s.default.a.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__Card",componentId:"sc-850addca-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  height: 250px;
  border-radius: 20px;
  padding: 32px 28px;
  overflow: hidden;
  text-decoration: none;
  background-color: ${e=>e.backgroundColor||e.theme.surface2};
  @media (max-width: 1024px) {
    gap: 16px;
    padding: 24px;
  }
  @media (max-width: 768px) {
    gap: 16px;
    padding: 24px;
  }
`,oe=(0,c.E)((0,s.default)(se).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__SquareCard",componentId:"sc-850addca-4"})`
  grid-column: span 1 / span 1;
  grid-row: span 4 / span 4;

  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`),re=(0,s.default)(oe).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__HelpCenterCard",componentId:"sc-850addca-5"})`
  @media (max-width: 1024px) {
    grid-column: span 2 / span 2;

    grid-row-start: 1;
    grid-row-end: 3;
  }
  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`,de=(0,s.default)(oe).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__BlogCard",componentId:"sc-850addca-6"})`
  @media (max-width: 1024px) {
    grid-column: span 2 / span 2;

    grid-row-start: 3;
    grid-row-end: 5;
  }
  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`,pe=(0,c.E)((0,s.default)(se).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__RectCard",componentId:"sc-850addca-7"})`
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;

  gap: 32px;

  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`),le="#FF4D00",ce="#8E8767";function xe(){const e=(0,s.useTheme)(),i=(0,_.Gv)();return(0,n.jsx)(te,{children:(0,n.jsx)(r.x,{direction:"row",maxWidth:"1328px",gap:"24px",width:"100%",children:(0,n.jsxs)(ae,{"justify-content":"space-between",height:"100%",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(o.cC,{children:"Connect with us"})}),(0,n.jsxs)(ne,{children:[(0,n.jsxs)(re,{initial:"initial",whileHover:"hover",href:"https://help.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:i?"rgba(255, 77, 0, 0.08)":"rgba(255, 77, 0, 0.04)",children:[(0,n.jsx)(w,{icon:(0,n.jsx)(l.j$,{fill:le}),color:le,label:o.t`Help Center`}),(0,n.jsx)(r.H3,{color:le,children:(0,n.jsx)(o.cC,{children:"Get support"})})]}),(0,n.jsxs)(de,{initial:"initial",whileHover:"hover",href:"https://blog.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:i?"rgba(98, 84, 50, 0.16)":"rgba(98, 84, 50, 0.04)",children:[(0,n.jsx)(w,{icon:(0,n.jsx)(l.p1,{fill:ce}),color:ce,label:o.t`Blog`}),(0,n.jsx)(r.H3,{color:ce,children:(0,n.jsx)(o.cC,{children:"Insights and news from the team"})})]}),(0,n.jsxs)(pe,{backgroundColor:e.accent2,initial:"initial",whileHover:"hover",href:"https://twitter.com/Uniswap/",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(w,{icon:(0,n.jsx)(l.r_,{fill:e.accent1}),color:e.accent1,label:o.t`Stay connected`}),(0,n.jsx)(r.H3,{color:e.accent1,children:(0,n.jsx)(o.cC,{children:"Follow @Uniswap on X for the latest updates"})})]})]})]})})})}var he=t(94284),ge=t(26880),me=t(54972),we=t(36399),ue=t(62652);const fe=(0,c.E)(s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Mask",componentId:"sc-acaa8a57-0"})`
  position: relative;
  display: flex;
  flex: 0;
  min-height: 52px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-height: 40px;
  }
  @media (max-width: 768px) {
    min-height: 32px;
  }
`),Ce=(0,c.E)(s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Char",componentId:"sc-acaa8a57-1"})`
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Basel;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  color: ${({color:e})=>e};
  line-height: 52px;
  @media (max-width: 1280px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 1050px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (max-width: 850px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media (max-width: 396px) {
    font-size: 22px;
    line-height: 22px;
  }
`),be=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Container",componentId:"sc-acaa8a57-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 20px;

  width: 100%;
  height: 100%;
  max-height: 230px;

  padding: 32px;

  background-color: ${({theme:e,live:i})=>i?"#2FBA610A":e.surface2};
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
  }
  background-image: radial-gradient(rgba(${({theme:e})=>{const{red:i,green:t,blue:n}=(0,we.Oq)(e.neutral2);return`${i}, ${t}, ${n}`}}, 0.25) 0.5px, transparent 0)};
  background-size: 12px 12px;
  background-position: -8.5px -8.5px;
`,ve=(0,c.E)(s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\StatCard__SpriteContainer",componentId:"sc-acaa8a57-3"})`
  pointer-events: none;
  diplay: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
`),ke=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\StatCard__LiveIcon",componentId:"sc-acaa8a57-4"})`
  display: ${({display:e})=>e};
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background: ${({theme:e})=>e.success};

  animation-name: ${({theme:e})=>{return i=e.success,s.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${(0,ue.jb)(24,i)};
  }
  100% {
    box-shadow: 0 0 0 4px ${(0,ue.jb)(24,i)};
  }
`;var i}};
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`,ye=s.default.h3.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Title",componentId:"sc-acaa8a57-5"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 535;
  line-height: 32px; /* 133.333% */
  color: ${({color:e})=>e};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
`;const je=["0","1","2","3","4","5","6","7","8","9"],_e=["\xa5","\xa3","\u20ac","$"],De=[" ","K","M","B","T"],Ie=[",","."];function Le(e){const i=(0,s.useTheme)();return(0,n.jsxs)(be,{live:e.live,children:[(0,n.jsxs)(he.ZP,{align:"center",gap:"sm",children:[(0,n.jsx)(ke,{display:e.live?"block":"none"}),(0,n.jsx)(ye,{color:e.live?i.success:i.neutral2,children:e.title})]}),(0,n.jsx)(Ae,{prefix:e.prefix,suffix:e.suffix,value:e.value,live:e.live,delay:e.delay,inView:e.inView})]})}function Ae({value:e,delay:i,inView:t,live:a}){const o=e.split(""),r=(0,s.useTheme)();return(0,n.jsx)(fe,{initial:"initial",animate:t?"animate":"initial",transition:{staggerChildren:.025,delayChildren:i},children:o.map(((e,i)=>{const t=je.includes(e)?je:Ie.includes(e)?Ie:_e.includes(e)?_e:De;return(0,n.jsx)(Ne,{char:e,charset:t,color:a?r.success:r.neutral1},i)}))})}function Ne({char:e,charset:i,color:t}){const a=(s=i,o=i.indexOf(e),s.slice(o,s.length).concat(s.slice(0,o)));var s,o;const r=a.indexOf(e),d={initial:{y:r+-180},animate:{y:-60*r,transition:{duration:1,type:"spring"}}};return(0,n.jsx)(ve,{variants:d,children:a.map(((e,i)=>{const a={initial:{opacity:.25},animate:{opacity:r===i?1:0,transition:{opacity:{duration:.5},duration:1,type:"spring"}}};return(0,n.jsx)(Ce,{variants:a,color:t,children:e},i)}))})}const Ue=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Container",componentId:"sc-e40d2345-0"})`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 960px) {
    max-height: 360px;
  }

  @media (max-width: 768px) {
    max-height: none;
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,Te=(0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__SectionLayout",componentId:"sc-e40d2345-1"})`
  width: 100%;
  max-width: 1280px;
`,$e=(0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__HideWhenLarge",componentId:"sc-e40d2345-2"})`
  @media (min-width: 768px) {
    display: none;
  }
`,Se=(0,s.default)(r.x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__HideWhenSmall",componentId:"sc-e40d2345-3"})`
  @media (max-width: 768px) {
    display: none;
  }
`,ze=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LeftTop",componentId:"sc-e40d2345-4"})`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`,Ee=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__RightTop",componentId:"sc-e40d2345-5"})`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
`,Be=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LeftBottom",componentId:"sc-e40d2345-6"})`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 5;
`,Me=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__RightBottom",componentId:"sc-e40d2345-7"})`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
`,Pe=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__CardLayout",componentId:"sc-e40d2345-8"})`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  overflow: hidden;

  @media (max-width: 768px) {
    height: 320px;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  @media (max-width: 468px) {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }
`,He=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Layout",componentId:"sc-e40d2345-9"})`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 234px);
  @media (max-width: 960px) {
    grid-template-rows: repeat(2, 160px);
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 200px);
  }
  grid-column-gap: 24px;
  grid-row-gap: 16px;
`,Ve=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Left",componentId:"sc-e40d2345-10"})`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
`,Re=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Right",componentId:"sc-e40d2345-11"})`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
`,Fe=(0,s.default)(me.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LearnMoreButton",componentId:"sc-e40d2345-12"})`
  padding: 12px 16px;
  border-radius: 24px;
  border: 0;
  background-color: ${({theme:e})=>e.surface2};
  font-family: Basel;
  font-size: 20px;
  font-style: normal;
  font-weight: 535;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  ${me.iV}
`,We=(0,s.default)(ge.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LearnMoreArrow",componentId:"sc-e40d2345-13"})`
  size: 24px;
  stroke: ${({theme:e})=>e.surface2};
  fill: ${({theme:e})=>e.neutral1};
`,qe=()=>(0,n.jsx)(o.cC,{children:"Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace, with billions of dollars in weekly volume across thousands of tokens on Ethereum and 7+ additional chains."});function Ge(){return(0,n.jsx)(Fe,{href:"https://info.uniswap.org",children:(0,n.jsxs)(he.ZP,{gap:"sm",align:"center",children:[(0,n.jsx)(o.cC,{children:"Learn more"}),(0,n.jsx)(We,{})]})})}function Oe(){const{ref:e,inView:i}=(()=>{const e=(0,a.useRef)(),[i,t]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const i=new IntersectionObserver((e=>{if(!e.length)return;const[i]=e;i.isIntersecting&&t(!0)}),{threshold:.25});return i.observe(e.current),()=>{i.disconnect()}}),[e]),{ref:e,inView:i}})();return(0,n.jsx)(Ue,{children:(0,n.jsxs)(Te,{ref:e,children:[(0,n.jsx)(Se,{children:(0,n.jsxs)(He,{children:[(0,n.jsx)(Ve,{children:(0,n.jsxs)(r.x,{direction:"column","justify-content":"space-between",height:"100%",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(o.cC,{children:"Trusted by millions"})}),(0,n.jsxs)(r.x,{bottom:"0",position:"absolute",direction:"column",maxWidth:"480px",gap:"24px",children:[(0,n.jsx)(r.m,{children:(0,n.jsx)(qe,{})}),(0,n.jsx)(Ge,{})]})]})}),(0,n.jsx)(Re,{children:(0,n.jsx)(Qe,{inView:i})})]})}),(0,n.jsxs)($e,{maxWidth:"1280px",direction:"column",gap:"32px",children:[(0,n.jsx)(r.H2,{children:(0,n.jsx)(o.cC,{children:"Trusted by millions"})}),(0,n.jsx)(Qe,{inView:i}),(0,n.jsx)(r.m,{children:(0,n.jsx)(qe,{})}),(0,n.jsx)(Ge,{})]})]})})}function Qe({inView:e}){var i,t,s,r;const{formatNumber:d}=(0,M.Gb)(),p=(0,B.eX0)({variables:{version:B.Qeo.V2}}),l=(0,B.eX0)({variables:{version:B.Qeo.V3}}),c=(0,a.useMemo)((()=>{var e,i,t,n;const a=null===(i=p)||void 0===i||null===(e=i.data)||void 0===e?void 0:e.historicalProtocolVolume,s=a&&a.length>=2?a[a.length-2].value:0,o=null===(n=l)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.historicalProtocolVolume;return s+(o&&o.length>=2?o[o.length-2].value:0)}),[null===(t=p)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.historicalProtocolVolume,null===(r=l)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.historicalProtocolVolume]);return(0,n.jsxs)(Pe,{children:[(0,n.jsx)(ze,{children:(0,n.jsx)(Le,{title:o.t`All time volume`,value:d({input:2*10**12,type:M.sw.FiatTokenStats}),delay:0,inView:e})}),(0,n.jsx)(Ee,{children:(0,n.jsx)(Le,{title:o.t`All time swappers`,value:d({input:16.6*10**6,type:M.sw.TokenQuantityStats}),delay:.2,inView:e})}),(0,n.jsx)(Be,{children:(0,n.jsx)(Le,{title:o.t`All time LP fees `,value:d({input:3.4*10**9,type:M.sw.FiatTokenStats}),delay:.4,inView:e})}),(0,n.jsx)(Me,{children:(0,n.jsx)(Le,{title:o.t`24H volume`,value:d({input:c||5e8,type:M.sw.FiatTokenStats}),live:!0,delay:.6,inView:e})})]})}const Xe=s.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Landing\\Fold__Container",componentId:"sc-131b1ec8-0"})`
  gap: 120px;
  @media (max-width: 1024px) {
    gap: 80px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
`,Ze=(0,a.forwardRef)((function(e,i){return(0,n.jsxs)(Xe,{children:[(0,n.jsx)("div",{ref:i,children:(0,n.jsx)(ee,{})}),(0,n.jsx)(Oe,{}),(0,n.jsx)(xe,{}),(0,n.jsx)(ie.$,{})]})}))}}]);
//# sourceMappingURL=9699.b3fe00d3.chunk.js.map