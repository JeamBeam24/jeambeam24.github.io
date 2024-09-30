"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[688,5347],{13310:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(45779),s=n(68090),o=n.n(s);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=(0,i.forwardRef)((function(e,t){var n=e.color,s=void 0===n?"currentColor":n,o=e.size,d=void 0===o?24:o,p=a(e,["color","size"]);return i.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),i.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),i.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Inbox";const p=d},27279:(e,t,n)=>{n.d(t,{r:()=>p});var i,s,o,r=n(45779);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function d(e,t){let{title:n,titleId:d,...p}=e;return r.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":d},p),n?r.createElement("title",{id:d},n):null,i||(i=r.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),s||(s=r.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=r.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const p=r.forwardRef(d);n.p},17889:(e,t,n)=>{n.d(t,{q:()=>i,v:()=>g});var i,s=n(92936),o=n(45779),r=n(43454),a=n(14411),d=n(54972),p=n(27279),c=n(30520),l=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const u=(0,a.default)(p.r).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Menu\\index__StyledMenuIcon",componentId:"sc-bae64c45-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,h=a.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Menu\\index__StyledMenu",componentId:"sc-bae64c45-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,x=a.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Menu\\index__MenuFlyout",componentId:"sc-bae64c45-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=i.RIGHT})=>e===i.RIGHT?a.css`
          right: 0rem;
        `:a.css`
          left: 0rem;
        `};
`,m=(0,a.default)(d.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Menu\\index__MenuItem",componentId:"sc-bae64c45-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,f=(0,a.default)(r.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Menu\\index__InternalMenuItem",componentId:"sc-bae64c45-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,w=(0,a.default)(m).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Menu\\index__ExternalMenuItem",componentId:"sc-bae64c45-5"})`
  width: max-content;
  text-decoration: none;
`,g=({modal:e,flyoutAlignment:t=i.RIGHT,ToggleUI:n,menuItems:r,...a})=>{const d=(0,o.useRef)(),p=(0,l.Wt)(e),m=(0,l.xk)(e);(0,c.t)(d,p?m:void 0);const g=n||u;return(0,s.jsxs)(h,{ref:d,...a,children:[(0,s.jsx)(g,{onClick:m}),p&&(0,s.jsx)(x,{flyoutAlignment:t,onClick:m,children:r.map((({content:e,link:t,external:n},i)=>n?(0,s.jsx)(w,{href:t,children:e},i):(0,s.jsx)(f,{to:t,children:e},i)))})]})}},81069:(e,t,n)=>{n.d(t,{G:()=>a});var i=n(57852),s=n(42183),o=n(70559),r=n(590);function a(){const{chainId:e}=(0,r.m)(),t=(0,o.ye)(s.TP.V2Everywhere);return e&&(t&&i.Ep.includes(e)||i.$6.includes(e))}},74220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var i=n(92936),s=n(5985),o=n(26729),r=n(12722),a=n(25320),d=n(69780),p=n(44591),c=n(17889),l=n(90652),u=n(6823),h=n(45779),x=n(14411),m=n(66869);const f=x.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionList\\index__DesktopHeader",componentId:"sc-ddcc4861-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${m.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,w=x.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionList\\index__MobileHeader",componentId:"sc-ddcc4861-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${m.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${m.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,g=x.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionList\\index__ToggleWrap",componentId:"sc-ddcc4861-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,C=x.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\PositionList\\index__ToggleLabel",componentId:"sc-ddcc4861-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function b({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(f,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(u.cC,{children:"Your positions"}),e&&" ("+e.length+")"]}),(0,i.jsx)(C,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,i.jsx)(u.cC,{children:"Show closed positions"}):(0,i.jsx)(u.cC,{children:"Hide closed positions"})})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(u.cC,{children:"Your positions"}),(0,i.jsx)(g,{children:(0,i.jsx)(C,{onClick:()=>{t(!n)},children:n?(0,i.jsx)(u.cC,{children:"Show closed positions"}):(0,i.jsx)(u.cC,{children:"Hide closed positions"})})})]}),e.map((e=>(0,i.jsx)(l.Z,{...e},e.tokenId.toString())))]})}var y=n(94284),j=n(10672),k=n(57852),v=n(30112),_=n(81069),T=n(40413),I=n(75512),P=n(57221),O=n(13310),$=n(74928),A=n(68090),L=n.n(A);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},N.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var D=(0,h.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,s=e.size,o=void 0===s?24:s,r=U(e,["color","size"]);return h.createElement("svg",N({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),h.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),h.createElement("polyline",{points:"2 17 12 22 22 17"}),h.createElement("polyline",{points:"2 12 12 17 22 12"}))}));D.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},D.displayName="Layers";const E=D;function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},M.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var H=(0,h.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,s=e.size,o=void 0===s?24:s,r=z(e,["color","size"]);return h.createElement("svg",M({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),h.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),h.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));H.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},H.displayName="BookOpen";const B=H;var S=n(86082),V=n(43454),W=n(29021),R=n(28098),Z=n(54972),q=n(99582),F=n(76078),G=n(72993);const Q=x.default.section.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\CTACards__CTASection",componentId:"sc-7b5eb37b-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,J=x.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,Y=(0,x.default)(Z.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\CTACards__CTAExternalLink",componentId:"sc-7b5eb37b-1"})`
  ${J}
`,K=(0,x.default)(Z.m_).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\CTACards__CTALink",componentId:"sc-7b5eb37b-2"})`
  ${J}
`,X=(0,x.default)(Z.Tv.DeprecatedLabel).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\CTACards__HeaderText",componentId:"sc-7b5eb37b-3"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,ee=(0,x.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\CTACards__ResponsiveColumn",componentId:"sc-7b5eb37b-4"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function te(){const e=(0,G.x)(),t=k.T_[(0,k.Jw)(e)??F.ChainId.MAINNET];return(0,i.jsxs)(Q,{children:[(0,i.jsx)(Y,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,i.jsxs)(ee,{children:[(0,i.jsxs)(X,{children:[(0,i.jsx)(u.cC,{children:"Learn about providing liquidity"})," \u2197"]}),(0,i.jsx)(Z.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,i.jsx)(u.cC,{children:"Check out our v3 LP walkthrough and migration guides."})})]})}),(0,i.jsx)(K,{"data-testid":"cta-poolslink",to:`/explore/pools/${t.urlParam}`,children:(0,i.jsxs)(ee,{children:[(0,i.jsxs)(X,{style:{alignSelf:"flex-start"},children:[(0,i.jsx)(u.cC,{children:"Top pools"})," \u2197"]}),(0,i.jsx)(Z.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,i.jsx)(u.cC,{children:"Explore Uniswap Analytics."})})]})})]})}var ne=n(40926);const ie=(0,x.default)(p.Tz).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__PageWrapper",componentId:"sc-d0f41c98-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,se=(0,x.default)(y.m0).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__TitleRow",componentId:"sc-d0f41c98-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,oe=(0,x.default)(y.DA).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__ButtonRow",componentId:"sc-d0f41c98-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,re=(0,x.default)(c.v).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__PoolMenu",componentId:"sc-d0f41c98-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,ae=x.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__PoolMenuItem",componentId:"sc-d0f41c98-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,de=(0,x.default)(d.Ux).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__MoreOptionsButton",componentId:"sc-d0f41c98-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,pe=(0,x.default)(Z.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__MoreOptionsText",componentId:"sc-d0f41c98-6"})`
  align-items: center;
  display: flex;
`,ce=x.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__ErrorContainer",componentId:"sc-d0f41c98-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,le=x.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,ue=(0,x.default)(P.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__NetworkIcon",componentId:"sc-d0f41c98-8"})`
  ${le}
`,he=(0,x.default)(O.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__InboxIcon",componentId:"sc-d0f41c98-9"})`
  ${le}
`,xe=(0,x.default)(d.DF).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__ResponsiveButtonPrimary",componentId:"sc-d0f41c98-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,me=x.default.main.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\index__MainContentWrapper",componentId:"sc-d0f41c98-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function fe(){return(0,i.jsxs)(ne.pr,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})}function we(){const e=(0,x.useTheme)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ie,{children:(0,i.jsx)(p.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(p.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsx)(se,{padding:"0",children:(0,i.jsx)(Z.Tv.H1Large,{children:(0,i.jsx)(u.cC,{children:"Positions"})})}),(0,i.jsx)(me,{children:(0,i.jsx)(ce,{children:(0,i.jsxs)(Z.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,i.jsx)(ue,{strokeWidth:1.2}),(0,i.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,i.jsx)(u.cC,{children:"Your connected network is unsupported."})})]})})})]})})}),(0,i.jsx)(j.c,{})]})}function ge(){var e;const{account:t,chainId:n}=(0,o.G)(),l=(0,k.Nb)(n),m=(0,_.G)(),f=(0,a.LK)(),w=(0,x.useTheme)(),[g,C]=(0,R.QP)(),{positions:P,loading:O}=(0,T.W)(t),[A,L]=(null===(e=P)||void 0===e?void 0:e.reduce(((e,t)=>{var n;return e[(null===(n=t.liquidity)||void 0===n?void 0:n.isZero())?1:0].push(t),e}),[[],[]]))??[[],[]],N=(0,h.useMemo)((()=>[...A,...g?[]:L]),[L,A,g]),U=(0,v.J)(N);if(!l)return(0,i.jsx)(we,{});const D=Boolean(!t),M=[{content:(0,i.jsxs)(ae,{children:[(0,i.jsx)(u.cC,{children:"Migrate"}),(0,i.jsx)($.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,i.jsxs)(ae,{children:[(0,i.jsx)(u.cC,{children:"V2 liquidity"}),(0,i.jsx)(E,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,i.jsxs)(ae,{children:[(0,i.jsx)(u.cC,{children:"Learn"}),(0,i.jsx)(B,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,i.jsxs)(r.fM,{page:s.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,i.jsx)(ie,{children:(0,i.jsx)(p.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(p.Tz,{gap:"lg",style:{width:"100%"},children:[(0,i.jsxs)(se,{padding:"0",children:[(0,i.jsxs)(y.ZP,{gap:"md",width:"min-content",children:[(0,i.jsx)(Z.Tv.LargeHeader,{children:(0,i.jsx)(u.cC,{children:"Positions"})}),(0,i.jsx)(I.p,{protocolVersion:q.Qeo.V3})]}),(0,i.jsxs)(oe,{children:[m&&(0,i.jsx)(re,{modal:W.Lk.POOL_OVERVIEW_OPTIONS,menuItems:M,flyoutAlignment:c.q.LEFT,ToggleUI:e=>(0,i.jsx)(de,{...e,children:(0,i.jsxs)(pe,{children:[(0,i.jsx)(u.cC,{children:"More"}),(0,i.jsx)(S.Z,{size:15})]})})}),(0,i.jsxs)(xe,{"data-cy":"join-pool-button",id:"join-pool-button",as:V.rU,to:"/add/ETH",children:["+ ",(0,i.jsx)(u.cC,{children:"New position"})]})]})]}),(0,i.jsx)(me,{children:O?(0,i.jsx)(fe,{}):U&&L&&U.length>0?(0,i.jsx)(b,{positions:U,setUserHideClosedPositions:C,userHideClosedPositions:g}):(0,i.jsxs)(ce,{children:[(0,i.jsxs)(Z.Tv.BodyPrimary,{color:w.neutral3,textAlign:"center",children:[(0,i.jsx)(he,{strokeWidth:1,style:{marginTop:"2em"}}),(0,i.jsx)("div",{children:(0,i.jsx)(u.cC,{children:"Your active V3 liquidity positions will appear here."})})]}),!D&&L.length>0&&(0,i.jsx)(d.oD,{style:{marginTop:".5rem"},onClick:()=>C(!g),children:(0,i.jsx)(u.cC,{children:"Show closed positions"})}),D&&(0,i.jsx)(r.M8,{events:[s.TM.onClick],name:s.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:s.xo.CONNECT_WALLET_BUTTON,children:(0,i.jsx)(d.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:f,children:(0,i.jsx)(u.cC,{children:"Connect a wallet"})})})]})}),(0,i.jsx)(Z.Pw,{children:(0,i.jsx)(te,{})})]})})}),(0,i.jsx)(j.c,{})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>C});var i=n(92936),s=n(69780);const o=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var r=n(17889),a=n(6823),d=n(86082),p=n(1356),c=n(29021),l=n(14411),u=n(54972),h=n(99582);const x=l.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\shared__PoolVersionItem",componentId:"sc-1050cdea-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,m=(0,l.default)(s.Ux).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\shared__PoolOptionsButton",componentId:"sc-1050cdea-1"})`
  flex: 1 1 auto;
  padding: 6px 8px 6px 12px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  border-radius: 8px;
  gap: 6px;

  &:hover {
    background-color: ${({theme:e,$isOpen:t})=>t?e.surface1:e.surface3};
    opacity: 0.9;
  }

  ${({$isOpen:e})=>e&&l.css`
      background-color: ${({theme:e})=>e.surface1};
      border: ${({theme:e})=>`1.5px solid ${e.neutral3}`};
    `}
`,f=(0,l.default)(d.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\shared__StyledChevron",componentId:"sc-1050cdea-2"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,w={[h.Qeo.V3]:{content:(0,i.jsxs)(x,{children:[(0,i.jsx)(o,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(a.cC,{children:"v3 pools"})})]}),link:"/pool",external:!1},[h.Qeo.V2]:{content:(0,i.jsxs)(x,{children:[(0,i.jsx)(o,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(a.cC,{children:"v2 pools"})})]}),link:"/pools/v2",external:!1}},g={[h.Qeo.V3]:a.t`v3`,[h.Qeo.V2]:a.t`v2`};function C({protocolVersion:e}){const t=(0,p.Wt)(c.Lk.POOL_VERSION);return(0,i.jsx)(r.v,{modal:c.Lk.POOL_VERSION,menuItems:[w[e===h.Qeo.V3?h.Qeo.V2:h.Qeo.V3]],flyoutAlignment:r.q.LEFT,ToggleUI:n=>(0,i.jsxs)(m,{...n,$isOpen:t,children:[(0,i.jsx)(u.Tv.BodyPrimary,{color:"neutral2",children:g[e]}),(0,i.jsx)(f,{$isOpen:t})]})})}},40926:(e,t,n)=>{n.d(t,{DC:()=>a,ER:()=>d,bb:()=>p,im:()=>r,pr:()=>c});var i=n(32546),s=n(22953),o=n(14411);const r=o.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-e4e1fcd6-0"})`
  position: relative;
  padding: 20px;
`,a=(0,o.default)(s.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-e4e1fcd6-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=o.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-e4e1fcd6-2"})`
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
`,p=o.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-e4e1fcd6-3"})`
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
`,c=(0,o.default)(i.pr).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-e4e1fcd6-4"})`
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
`},5347:(e,t,n)=>{n.d(t,{B:()=>s});var i=n(64370);function s(e){var t;return e.isNative?e:(null===(t=i.Fl[e.chainId])||void 0===t?void 0:t.equals(e))?(0,i.gX)(e.chainId):e}}}]);
//# sourceMappingURL=688.71bc09ce.chunk.js.map