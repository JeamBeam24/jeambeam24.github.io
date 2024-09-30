"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7548],{27011:(e,t,n)=>{n.r(t),n.d(t,{BannerWrapper:()=>bn,CollectionBannerLoading:()=>mn,default:()=>In});var i=n(92936),s=n(5985),r=n(12722),a=n(44591),o=n(68588),l=n(94284),d=n(82743),c=n(13901),p=n(97341),g=n(6823),h=n(3464),u=n(80305),m=n(15288),f=n(68113),x=n(79132),w=n(52384),v=n(78129),b=n(66136);n(12143),n(49484);const k=()=>{const e=(0,x.cP)((e=>e.itemsInBag)),t=(0,x.cP)((e=>e.toggleBag)),n=(0,w.P)(),s=(0,w.B)(),{formatEther:r,formatNumberOrString:a}=(0,b.Gb)(),o=e.length>0;return(0,i.jsxs)(m.X2,{display:{sm:o?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,i.jsxs)(m.X2,{gap:"8",children:[(0,i.jsx)(u.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,i.jsx)(u.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,i.jsxs)(m.sg,{children:[(0,i.jsx)(u.n,{className:f.d1,fontWeight:"medium",children:(0,v.t)(e.length,"NFT")}),(0,i.jsxs)(m.X2,{gap:"8",children:[(0,i.jsxs)(u.n,{className:f.d1,children:[`${r({input:n.toString(),type:b.sw.NFTToken})}`," ETH"]}),(0,i.jsx)(u.n,{color:"neutral2",className:f.Km,children:a({input:s,type:b.sw.FiatNFTToken})})]})]})]}),(0,i.jsx)(u.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var y=n(35842),C=n(14411),j=(n(45814),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),_="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const T=(0,C.default)(m.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\ActivitySwitcher__BaseActivityContainer",componentId:"sc-59f230d8-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,I=new Array(2).fill(null).map(((e,t)=>(0,i.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),N=({showActivity:e,toggleActivity:t})=>{const n=(0,x.Iv)((e=>e.isCollectionStatsLoading));return(0,i.jsx)(T,{gap:"24",marginBottom:"16",children:n?I:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.n,{as:"button",className:e?j:_,onClick:()=>e&&t(),children:"Items"}),(0,i.jsx)(r.M8,{events:[s.TM.onClick],element:s.xo.NFT_ACTIVITY_TAB,name:s.Yz.NFT_ACTIVITY_SELECTED,children:(0,i.jsx)(u.n,{as:"button",className:e?_:j,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var S=n(11604),z=n(66284),P=n(21989),$=n(9604),E=n(84662),A=n(2798),R=n(62293),M=n(45779);const F=({asset:e,isMobile:t,mediaShouldBePlaying:n,setCurrentTokenPlayingMedia:a,uniformAspectRatio:o,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c})=>{var p,h;const{formatEther:u}=(0,b.Gb)(),m=(0,x.cP)((e=>e.bagManuallyClosed)),f=(0,x.cP)((e=>e.addAssetsToBag)),w=(0,x.cP)((e=>e.removeAssetsFromBag)),v=(0,x.cP)((e=>e.itemsInBag)),k=(0,x.cP)((e=>e.bagExpanded)),y=(0,x.cP)((e=>e.setBagExpanded)),C=(0,r.oO)({page:s.yJ.NFT_COLLECTION_PAGE}),{isSelected:j}=(0,M.useMemo)((()=>({isSelected:v.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,v]),_=e.notForSale||S.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),T=(null===(h=e)||void 0===h||null===(p=h.rarity)||void 0===p?void 0:p.providers)?e.rarity.providers[0]:void 0,I=(0,M.useCallback)((()=>{var n;S.O$.from((null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice)??0).gt(0)&&(f([e]),k||t||m||y({bagExpanded:!0}),(0,r._P)(s.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...C}))}),[f,e,k,m,t,y,C]),N=(0,M.useCallback)((()=>{w([e])}),[e,w]),z=(0,M.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,i.jsx)(R.yT,{}):null,primaryInfoRight:e.rarity&&T?(0,i.jsx)(R.SD,{provider:T}):null,secondaryInfo:_?"":`${u({input:e.priceInfo.ETHPrice,type:b.sw.NFTToken})} ETH`,selectedInfo:(0,i.jsx)(g.cC,{children:"Remove from bag"}),notSelectedInfo:(0,i.jsx)(g.cC,{children:"Add to bag"}),disabledInfo:(0,i.jsx)(g.cC,{children:"Not listed"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,u,_,T]);return(0,i.jsx)(A.y,{asset:e,display:z,isSelected:j,isDisabled:Boolean(e.notForSale),selectAsset:I,unselectAsset:N,mediaShouldBePlaying:n,uniformAspectRatio:o,setUniformAspectRatio:l,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:a,testId:"nft-collection-asset"})};var D,B=n(34385),U=n(30520),L=n(58690),H=n(27389),O="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",Y="_10b1b4vc",X="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",W="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",Z="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",V="_10b1b4v2",K=n(12461),G=n(12294),q=n(47832);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(D||(D={}));const J=(0,G.Ue)()((0,q.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,n)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:n}})))}})),{name:"useTraitsOpen"}));var Q=n(54972),ee=n(4256);const te=(0,C.default)(m.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\MarketplaceSelect__FilterItemWrapper",componentId:"sc-7452482a-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,ne=(0,C.default)(m.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\MarketplaceSelect__MarketNameWrapper",componentId:"sc-7452482a-1"})`
  gap: 10px;
`,ie={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},se=({title:e,element:t,onClick:n})=>(0,i.jsxs)(te,{onClick:n,children:[(0,i.jsx)(Q.Tv.BodyPrimary,{children:e}),(0,i.jsx)(Q.Tv.SubHeaderSmall,{children:t})]}),re=({title:e,value:t,addMarket:n,removeMarket:a,isMarketSelected:o,count:l})=>{const[d,c]=(0,M.useState)(!1),[p,g]=(0,M.useReducer)((e=>!e),!1);(0,M.useEffect)((()=>{c(o)}),[o]);const h=e=>{e.preventDefault(),d?(a(t),c(!1)):(n(t),c(!0)),(0,r._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.MARKETPLACE})},m=(0,i.jsx)(ee.X,{checked:d,hovered:p,onChange:h,children:(0,i.jsx)(u.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),f=(0,i.jsxs)(ne,{children:[(0,v.Dp)(e,"16"),e]});return(0,i.jsx)("div",{onMouseEnter:g,onMouseLeave:g,children:(0,i.jsx)(se,{title:f,element:m,onClick:h})},t)},ae=({title:e,items:t,onClick:n,isOpen:s})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.n,{className:X,opacity:s?"1":"0"}),(0,i.jsxs)(u.n,{as:"details",className:(0,P.default)(f.Nf,!s&&V),open:s,borderRadius:s?"0":"12",children:[(0,i.jsxs)(u.n,{as:"summary",className:`${Z} ${V}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:n,children:[e,(0,i.jsx)(u.n,{display:"flex",alignItems:"center",children:(0,i.jsx)(u.n,{className:O,style:{transform:`rotate(${s?0:180}deg)`},children:(0,i.jsx)(L.g8,{className:Y})})})]}),(0,i.jsx)(m.sg,{className:W,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),oe=()=>{const{addMarket:e,removeMarket:t,markets:n,marketCount:s}=(0,K.PY)((({markets:e,marketCount:t,removeMarket:n,addMarket:i})=>({markets:e,marketCount:t,removeMarket:n,addMarket:i}))),[r,a]=(0,M.useState)(!!n.length),o=J((e=>e.setTraitsOpen)),l=(0,M.useMemo)((()=>Object.entries(ie).map((([r,a])=>{var o;return(0,i.jsx)(re,{title:a,value:r,count:(null===(o=s)||void 0===o?void 0:o[r])||0,addMarket:e,removeMarket:t,isMarketSelected:n.includes(r)},r)}))),[e,s,t,n]);return(0,i.jsx)(ae,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),a(!r),o(D.MARKPLACE_INDEX,!r)},isOpen:r})};var le=n(7797);const de=(0,C.default)(le.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\common\\SortDropdown\\FilterSortDropdown__CheckIcon",componentId:"sc-80786191-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,ce=({sortDropDownOptions:e})=>{const[t,n]=(0,M.useState)(!1),s=e=>{e.preventDefault(),n(!t)},r=e.map((e=>(0,i.jsx)(pe,{dropDownOption:e,parentOnClick:s},e.displayText)));return(0,i.jsx)(ae,{title:"Sort by",items:r,onClick:s,isOpen:t})},pe=({dropDownOption:e,parentOnClick:t})=>{const n=(0,x.PY)((e=>e.sortBy)),s=void 0!==e.sortBy&&n===e.sortBy?(0,i.jsx)(de,{}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)(se,{title:e.displayText,element:s,onClick:n=>{n.preventDefault(),t(n),e.onClick()}})},ge=({dropDownOptions:e,inFilters:t,mini:n,miniPrompt:s,top:r,left:a})=>{const o=(0,x.PY)((e=>e.sortBy)),[l,d]=(0,M.useReducer)((e=>!e),!1),[c,p]=(0,M.useReducer)((e=>!e),!1),[g,h]=(0,M.useState)(o),w=(0,x.Iv)((e=>e.isCollectionStatsLoading)),[v,b]=(0,M.useState)(0);(0,M.useEffect)((()=>{h(o)}),[o]);const k=(0,M.useRef)(null);(0,U.t)(k,(()=>l&&d())),(0,M.useEffect)((()=>b(0)),[e]);const y=(0,M.useMemo)((()=>e[g].reverseOnClick||e[g].reverseIndex),[g,e]),C=w?220:t?"full":n?"min":v||"300px";return(0,i.jsxs)(u.n,{ref:k,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:C},children:[(0,i.jsx)(u.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:n?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":n?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:w?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,P.default)(l&&!n&&"_12q7kth0"),children:!w&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&y&&(0,i.jsxs)(m.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick){var n,i;null===(n=(i=e[g]).reverseOnClick)||void 0===n||n.call(i),p()}else{const t=e[g].reverseIndex??1;e[t-1].onClick(),h(t-1)}},children:[e[g].reverseOnClick&&(c?(0,i.jsx)(L.iB,{}):(0,i.jsx)(L.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,i.jsx)(L.iB,{}):(0,i.jsx)(L.L7,{}))]}),(0,i.jsx)(u.n,{marginLeft:y?"4":"0",marginRight:n?"2":"0",color:"neutral1",className:f.km,children:n?s:l?"Sort by":e[g].displayText})]}),(0,i.jsx)(L.g8,{secondaryColor:n?H.Z4.colors.neutral1:void 0,secondaryWidth:n?"20":void 0,secondaryHeight:n?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,i.jsx)(u.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:n?void 0:"0",borderTopRightRadius:n?void 0:"0",overflowY:"hidden",transition:"250",display:l||!v?"block":"none",visibility:v?"visible":"hidden",marginTop:n?"12":"0",className:(0,P.default)(!n&&"_12q7kth1"),style:{top:r?`${r}px`:"inherit",left:t?"16px":a?`${a}px`:"inherit"},children:v?l&&e.map(((t,s)=>(0,i.jsx)(he,{option:t,index:s,mini:n,onClick:()=>{e[s].onClick(),h(s),d(),c&&p()}},s))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,i.jsx)(ue,{option:e,index:t,setMaxWidth:b},t)))})]})},he=({option:e,index:t,onClick:n,mini:s})=>(0,i.jsx)(u.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:s?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:n,cursor:"pointer",children:(0,i.jsx)(u.n,{marginLeft:"8",className:f.km,children:e.displayText})},t),ue=({option:e,index:t,setMaxWidth:n})=>{const s=(0,M.useRef)(null);return(0,M.useLayoutEffect)((()=>{s&&s.current&&n(Math.ceil(s.current.getBoundingClientRect().width)+52)})),(0,i.jsx)(u.n,{position:"absolute",ref:s,children:(0,i.jsx)(he,{option:e,index:t})},t)};var me=n(23173),fe=n(11734);const xe=(0,G.Ue)()((0,q.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var we=n(47263);const ve="undefined"!==typeof window;const be=()=>{var e;const t=!!ve&&window.innerWidth<H.AV.sm?"nft-anchor-mobile":"nft-anchor";null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView({behavior:"smooth"})};var ke=n(18806);const ye=e=>{const t={...e};for(const i in t){const e=t[i],n=x.initialCollectionFilterState[i];JSON.stringify(e)===JSON.stringify(n)&&delete t[i]}t.all!==x.initialCollectionFilterState.buyNow&&delete t.all;const n=x.i9[x.initialCollectionFilterState.sortBy];return t.sort===n&&delete t.sort,t},Ce=(e,t)=>{const n={...e};["traits","markets"].forEach((e=>{n[e]||(n[e]=[]),n[e]&&"string"===typeof n[e]&&(n[e]=[n[e]])}));try{const{buyNow:e,search:i}=x.initialCollectionFilterState;if(Object.entries(x.i9).forEach((([e,t])=>{t===n.sort&&(n.sortBy=Number(e))})),n.buyNow=!(void 0===n.all?!e:n.all),n.search=void 0===n.search?i:String(n.search),2===n.traits.length){const[e,t]=n.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(n.traits=[`${e},${t}`])}n.traits=n.traits.map((e=>{const n=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[i,s]=n.split(","),r=t.traits&&t.traits[i].find((e=>e.trait_value===s));return r??{trait_type:i,trait_value:s,trait_count:0}}))}catch(i){n.traits=[]}return n};var je=n(10581),_e=n(6282),Te=n(99582),Ie=n(72993),Ne=n(71291),Se=n(52873),ze=(n(13570),n(4105));const Pe=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepContainer",componentId:"sc-82bdd7dd-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,$e=(0,C.default)(ze.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__StyledSlider",componentId:"sc-82bdd7dd-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ee=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepLeftmostContainer",componentId:"sc-82bdd7dd-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Ae=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepRightmostContainer",componentId:"sc-82bdd7dd-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Re=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepHeaderContainer",componentId:"sc-82bdd7dd-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Me=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepSubContainer",componentId:"sc-82bdd7dd-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Fe=C.default.input.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__InputContainer",componentId:"sc-82bdd7dd-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,De=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__ToggleContainer",componentId:"sc-82bdd7dd-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,Be=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__ToggleSwitch",componentId:"sc-82bdd7dd-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,Ue=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__NftDisplayContainer",componentId:"sc-82bdd7dd-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,Le=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\Sweep__NftHolder",componentId:"sc-82bdd7dd-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,He=RegExp("^(0|[1-9][0-9]*)$"),Oe=RegExp("^\\d*\\.?\\d{0,2}$"),Ye=({nfts:e})=>(0,i.jsx)(Ue,{children:[...Array(3)].map(((t,n)=>(0,i.jsx)(Le,{index:n,src:e.length-1>=n?e[e.length-1-n].smallImageUrl:void 0},n)))}),Xe=({contractAddress:e,minPrice:t,maxPrice:n})=>{var s;const r=(0,C.useTheme)(),{formatEther:a}=(0,b.Gb)(),[o,l]=(0,M.useReducer)((e=>!e),!0),[d,c]=(0,M.useState)(""),p=(0,x.cP)((e=>e.addAssetsToBag)),h=(0,x.cP)((e=>e.removeAssetsFromBag)),u=(0,x.cP)((e=>e.itemsInBag)),m=(0,x.cP)((e=>e.lockSweepItems)),f=(0,x.cP)((e=>e.setBagExpanded)),w=(0,x.PY)((e=>e.traits)),k=(0,x.PY)((e=>e.markets)),y=Ze(e,"others",t,n),j=Ze(e,we.Fz.Sudoswap,t,n),_=Ze(e,we.Fz.NFTX,t,n),T=Ze(e,we.Fz.NFT20,t,n),{data:I}=(0,$.he)(y),{data:N}=(0,$.he)(j),{data:P}=(0,$.he)(_),{data:E}=(0,$.he)(T),{sortedAssets:A,sortedAssetsTotalEth:R}=(0,M.useMemo)((()=>{var e,t,n,i;if(!I&&!N&&!P&&!E)return{sortedAssets:void 0,sortedAssetsTotalEth:S.O$.from(0)};let s=0,r=0,a=[];N&&(a=[...a,...N]),P&&(a=[...a,...P]),E&&(a=[...a,...E]);const o=a.filter((e=>e.marketplace===we.Fz.Sudoswap&&!e.susFlag));a.forEach((e=>{if(!e.susFlag)if(e.marketplace===we.Fz.Sudoswap){const t=(0,v.Pu)(e,o.filter((t=>(0,v.zA)(e,t))).findIndex((t=>t.tokenId===e.tokenId)));e.priceInfo.ETHPrice=t??"0"}else{const t=e.marketplace===we.Fz.NFTX,n=(0,v.Pu)(e,t?s:r);S.O$.from(n).gt(0)&&(t?s++:r++),e.priceInfo.ETHPrice=n}})),a=I?I.concat(a):a,a.sort(((e,t)=>S.O$.from(e.priceInfo.ETHPrice).gt(S.O$.from(t.priceInfo.ETHPrice))?1:-1));let l=a.filter((e=>S.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return l=l.slice(0,Math.max((null===(e=I)||void 0===e?void 0:e.length)??0,(null===(t=N)||void 0===t?void 0:t.length)??0,(null===(n=P)||void 0===n?void 0:n.length)??0,(null===(i=E)||void 0===i?void 0:i.length)??0)),{sortedAssets:l,sortedAssetsTotalEth:l.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0))}}),[I,N,P,E]),{sweepItemsInBag:F,sweepEthPrice:D}=(0,M.useMemo)((()=>{const t=u.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),n=t.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:n}}),[u,e]);(0,M.useEffect)((()=>{0===F.length&&c("")}),[F]),(0,M.useEffect)((()=>{m(e)}),[e,w,k,t,n,m]);const B=e=>{if(A)if(o)0===F.length&&e>0&&f({bagExpanded:!0}),F.length<e?p(A.slice(F.length,e),!0):h(F.slice(e,F.length),!0),c(e<1?"":e.toString());else{const t=(0,z.parseEther)(e.toString());if(D.lte(t)){let e=F.length,n=D;const i=[];for(;e<A.length&&n.add(S.O$.from(A[e].priceInfo.ETHPrice)).lte(t);)i.push(A[e]),n=n.add(S.O$.from(A[e].priceInfo.ETHPrice)),e++;i.length>0&&(0===F.length&&f({bagExpanded:!0}),p(i,!0))}else{let e=F.length-1,n=D;const i=[];for(;e>=0&&n.gt(t);)i.push(F[e]),n=n.sub(S.O$.from(F[e].priceInfo.ETHPrice)),e--;i.length>0&&h(i,!0)}c(0===e?"":e.toFixed(2))}};return(0,i.jsxs)(Pe,{"data-testid":"nft-sweep-slider",children:[(0,i.jsxs)(Ee,{children:[(0,i.jsx)(Re,{children:(0,i.jsx)(Q.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,i.jsx)(g.cC,{children:"Sweep"})})}),(0,i.jsxs)(Me,{children:[(0,i.jsx)($e,{defaultValue:0,min:0,max:o?(null===(s=A)||void 0===s?void 0:s.length)??0:parseFloat((0,z.formatEther)(R).toString()),value:o?F.length:parseFloat((0,z.formatEther)(D.toString())),step:o?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${r.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${r.surface3}`},onChange:e=>{"number"===typeof e&&A&&(o?(Math.floor(e)!==Math.floor(""!==d?parseFloat(d):0)&&B(Math.floor(e)),c(e<1?"":e.toString())):(B(e),c(0===e?"":e.toFixed(2))))}}),(0,i.jsx)(Fe,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:o&&""!==d?Math.floor(parseFloat(d)):d,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(B(0),c("")):(o&&He.test(t)||!o&&Oe.test(t))&&(B(parseFloat(t)),c(t))}}),(0,i.jsxs)(De,{onClick:()=>{c(""),h(F),l()},children:[(0,i.jsx)(Be,{active:o,children:"Items"}),(0,i.jsx)(Be,{active:!o,children:"ETH"})]})]})]}),(0,i.jsxs)(Ae,{children:[(0,i.jsx)(Q.Tv.SubHeader,{"font-size":"14px",children:`${a({input:D.toString(),type:b.sw.NFTToken})} ETH`}),(0,i.jsx)(Ye,{nfts:F})]})]})},We=[we.Fz.Opensea,we.Fz.X2Y2,we.Fz.LooksRare];function Ze(e,t,n,i){const s=(0,x.PY)((e=>e.traits)),r=(0,x.PY)((e=>e.markets)),a=!!r.length;return(0,M.useMemo)((()=>{if(a){if("others"===t){const t=r.filter((e=>!(0,we.g7)(e)));return t.length>0?{contractAddress:e,traits:s,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!r.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case we.Fz.Sudoswap:case we.Fz.NFTX:case we.Fz.NFT20:return{contractAddress:e,traits:s,markets:[t],price:{low:n,high:i,symbol:"ETH"}};case"others":return{contractAddress:e,traits:s,markets:We,price:{low:n,high:i,symbol:"ETH"}}}}),[e,a,t,r,i,n,s])}const Ve=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\TraitChip__TraitChipWrap",componentId:"sc-f115b851-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ke=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\TraitChip__CrossIconWrap",componentId:"sc-f115b851-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,Ge=({onClick:e,value:t})=>(0,i.jsxs)(Ve,{children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)(Ke,{onClick:e,children:(0,i.jsx)(L.aM,{cursor:"pointer"})})]}),qe=new Map,Je=C.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Qe=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ActionsContainer",componentId:"sc-152c9c24-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Je}
`,et=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ActionsSubContainer",componentId:"sc-152c9c24-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,tt=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SortDropdownContainer",componentId:"sc-152c9c24-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,nt=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__EmptyCollectionWrapper",componentId:"sc-152c9c24-3"})`
  display: block;
  text-align: center;
`,it=C.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ViewFullCollection",componentId:"sc-152c9c24-4"})`
  ${o.cR}
`,st=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__InfiniteScrollWrapper",componentId:"sc-152c9c24-5"})`
  ${Je}
`,rt=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SweepButton",componentId:"sc-152c9c24-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:n})=>e&&!t?n.deprecated_accentTextLightPrimary:n.neutral1};
  background: ${({theme:e,toggled:t,disabled:n})=>!n&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,at=(0,C.default)(Q.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SweepText",componentId:"sc-152c9c24-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,ot=(0,C.default)(m.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__MarketNameWrapper",componentId:"sc-152c9c24-8"})`
  gap: 8px;
`,lt=({height:e})=>(0,i.jsx)(u.n,{width:"full",className:B.P,children:(0,i.jsx)(Ne.p,{height:e})}),dt=()=>(0,i.jsx)(st,{children:(0,i.jsxs)(m.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,i.jsxs)(m.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,i.jsx)(u.n,{className:me.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,i.jsx)(u.n,{className:me.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,i.jsx)(u.n,{className:me.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,i.jsx)(lt,{})]})}),ct=(e,t)=>{const n=[{displayText:"Price: Low to High",onClick:()=>e(x.hn.LowToHigh),reverseIndex:2,sortBy:x.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(x.hn.HighToLow),reverseIndex:1,sortBy:x.hn.HighToLow}];return t?n.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(x.hn.RareToCommon),reverseIndex:4,sortBy:x.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(x.hn.CommonToRare),reverseIndex:3,sortBy:x.hn.CommonToRare}]):n},pt=({contractAddress:e,collectionStats:t,rarityVerified:n})=>{var a,o,l,d,c;const g=(0,Ie.x)(),h=(0,x.PY)((e=>e.traits)),w=(0,x.PY)((e=>e.minPrice)),b=(0,x.PY)((e=>e.maxPrice)),k=(0,x.PY)((e=>e.markets)),y=(0,x.PY)((e=>e.sortBy)),C=(0,x.PY)((e=>e.search)),j=(0,x.PY)((e=>e.setMarketCount)),_=(0,x.PY)((e=>e.setSortBy)),T=(0,x.PY)((e=>e.buyNow)),I=xe((e=>e.setPriceRangeLow)),N=xe((e=>e.priceRangeLow)),A=xe((e=>e.priceRangeHigh)),R=xe((e=>e.setPriceRangeHigh)),D=xe((e=>e.setPrevMinMax)),U=(0,fe.I)((e=>e.setIsCollectionNftsLoading)),H=(0,x.PY)((e=>e.removeTrait)),O=(0,x.PY)((e=>e.removeMarket)),Y=(0,x.PY)((e=>e.reset)),X=(0,x.PY)((e=>e.setMinPrice)),W=(0,x.PY)((e=>e.setMaxPrice)),Z=(0,x.PY)((e=>e.setHasRarity)),V=(0,x.cP)((e=>e.toggleBag)),K=(0,x.cP)((e=>e.bagExpanded)),G=(0,x.cP)((e=>e.itemsInBag)),q=(0,E.Z)(w,500),J=(0,E.Z)(b,500),Q=(0,E.Z)(C,500),[ee,te]=(0,M.useState)(we.Yp.unset),[ne,se]=(0,M.useState)(),[re,ae]=(0,M.useState)(!1),oe={address:e,orderBy:x.AZ[y].field,asc:x.AZ[y].asc,filter:{listed:T,marketplaces:k.length>0?k.map((e=>e.toUpperCase())):void 0,maxPrice:J?(0,z.parseEther)(J.toString()).toString():void 0,minPrice:q?(0,z.parseEther)(q.toString()).toString():void 0,tokenSearchQuery:Q,traits:h.length>0?h.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:$.iQ},{data:le,loading:de,hasNext:ce,loadMore:pe}=(0,$.gP)(oe),he=(0,M.useCallback)((e=>{const t=G.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===we.Fz.Sudoswap){const n=G.filter((t=>(0,v.zA)(e,t.asset)));return t?n.findIndex((t=>t.asset.tokenId===e.tokenId)):n.length}return t?G.filter((t=>(0,v.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):G.filter((t=>(0,v.H8)(e,t.asset))).length}),[G]),ue=(0,M.useCallback)((e=>(0,v.Pu)(e,he(e))),[he]),me=(0,M.useMemo)((()=>{if(!le||!le.some((e=>e.marketplace&&(0,we.g7)(e.marketplace))))return le;const e=[...le];return e.forEach((e=>e.marketplace&&(0,we.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ue(e)??"0"))),y!==x.hn.HighToLow&&y!==x.hn.LowToHigh||e.sort(((e,t)=>{var n,i;const s=S.O$.from((null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice)??0),r=S.O$.from((null===(i=t.priceInfo)||void 0===i?void 0:i.ETHPrice)??0);if(s.gt(0)&&r.lte(0))return-1;if(r.gt(0)&&s.lte(0))return 1;const a=s.sub(r);return a.gt(0)?y===x.hn.LowToHigh?1:-1:a.lt(0)?y===x.hn.LowToHigh?-1:1:0})),e}),[le,y,ue]),[ve,ze]=(0,M.useState)(),[Pe,$e]=(0,x.wx)(),Ee=(0,M.useRef)(null),Ae=(0,p.dD)(),Re=(0,p.eI)();(0,M.useEffect)((()=>{U(de)}),[de,U]);const Me=(0,M.useMemo)((()=>{var e;const n=(0,v.oY)(qe,null===(e=t)||void 0===e?void 0:e.address,me)??!1;return Z(n),n}),[t.address,me,Z]),Fe=(0,M.useMemo)((()=>ct(_,Me)),[Me,_]);(0,M.useEffect)((()=>(ae(!1),()=>{x.PY.setState(x.initialCollectionFilterState)})),[e]);const De=(0,M.useMemo)((()=>me?me.map((e=>(0,i.jsx)(F,{asset:e,isMobile:Ae,mediaShouldBePlaying:e.tokenId===ve,setCurrentTokenPlayingMedia:ze,rarityVerified:n,uniformAspectRatio:ee,setUniformAspectRatio:te,renderedHeight:ne,setRenderedHeight:se},e.address+e.tokenId))):null),[me,Ae,ve,n,ee,ne]),Be=me&&me.length>0,Ue=Be&&me[0]&&(null===(a=me[0])||void 0===a?void 0:a.tokenType)===Te.hgB.Erc1155,Le=(0,M.useMemo)((()=>q&&J?`Price: ${q} - ${J} ETH`:q?`Min. Price: ${q} ETH`:J?`Max Price: ${J} ETH`:void 0),[q,J]);(0,M.useEffect)((()=>{var e,n;const i={};null===(n=t)||void 0===n||null===(e=n.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{i[e]=t})),j(i),Ee.current=x.PY.getState()}),[null===(o=t)||void 0===o?void 0:o.marketplaceCount,j]);const He=(0,_e.TH)();(0,M.useEffect)((()=>{var e;if(null===(e=t)||void 0===e?void 0:e.traits){const e=((e,t)=>{if(!e.search)return;const n=ke.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return Ce(n,t)})(He,t);requestAnimationFrame((()=>{e&&x.PY.setState(e)})),x.PY.subscribe((e=>{JSON.stringify(Ee.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((n=>{switch(n){case"traits":{const n=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=n;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=x.i9[e.sortBy];break;default:t[n]=e[n]}}));const n=ye(t),i=window.location.href.split("?")[0],s=ke.stringify(n,{arrayFormat:"comma"});window.history.replaceState({},"",`${i}${s&&`?${s}`}`)})(e),Ee.current=e)}))}}),[He]),(0,M.useEffect)((()=>{te(we.Yp.unset),se(void 0)}),[e]),(0,M.useEffect)((()=>{var e;if(t&&(null===(e=t.stats)||void 0===e?void 0:e.floor_price)){var n,i;const e=null===(n=t.stats)||void 0===n?void 0:n.floor_price,r=10*(null===(i=t.stats)||void 0===i?void 0:i.floor_price);var s;if(""===N)I(null===(s=e)||void 0===s?void 0:s.toFixed(2));""===A&&R(r.toFixed(2))}}),[t,N,A,R,I]);const Oe=(0,M.useCallback)((()=>{Ue||(re||(be(),K||Ae||V()),ae(!re))}),[K,Ue,Ae,re,V]),Ye=(0,M.useCallback)((()=>{Y(),D([0,100]),be()}),[Y,D]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,i.jsxs)(Qe,{children:[(0,i.jsxs)(et,{children:[(0,i.jsx)(r.M8,{events:[s.TM.onClick],element:s.xo.NFT_FILTER_BUTTON,name:s.Yz.NFT_FILTER_OPENED,shouldLogImpression:!Pe,properties:{collection_address:e,chain_id:g},children:(0,i.jsx)(Ft.L,{isMobile:Ae,isFiltersExpanded:Pe,collectionCount:(null===(d=me)||void 0===d||null===(l=d[0])||void 0===l?void 0:l.totalCount)??0,onClick:()=>{K&&!Re.xl&&V(),$e(!Pe)}})}),(0,i.jsx)(tt,{isFiltersExpanded:Pe,children:(0,i.jsx)(ge,{dropDownOptions:Fe})}),(0,i.jsx)(gt,{})]}),!Ue&&(0,i.jsxs)(rt,{toggled:re,disabled:Ue,className:f.km,onClick:Oe,"data-testid":"nft-sweep-button",children:[(0,i.jsx)(L.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,i.jsx)(at,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,i.jsxs)(st,{children:[re&&(0,i.jsx)(Xe,{contractAddress:e,minPrice:q,maxPrice:J}),(0,i.jsxs)(m.X2,{paddingTop:k.length||h.length||Le?"12":"0",gap:"8",flexWrap:"wrap",children:[k.map((e=>(0,i.jsx)(Ge,{value:(0,i.jsxs)(ot,{children:[(0,v.Dp)(e,"16"),ie[e]]}),onClick:()=>{be(),O(e)}},e))),h.map((e=>(0,i.jsx)(Ge,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,v._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{be(),H(e)}},e.trait_value))),Le&&(0,i.jsx)(Ge,{value:Le,onClick:()=>{be(),X(""),W(""),D([0,100])}}),Boolean(h.length||k.length||Le)&&(0,i.jsx)(Se.v,{onClick:Ye,children:"Clear All"})]})]})]}),(0,i.jsx)(st,{children:de?(0,i.jsx)(lt,{height:ne}):(0,i.jsx)(je.Z,{next:pe,hasMore:ce??!1,loader:Boolean(ce&&Be)&&(0,i.jsx)(Ne.p,{}),dataLength:(null===(c=me)||void 0===c?void 0:c.length)??0,style:{overflow:"unset"},className:Be?B.P:void 0,children:Be?De:(0,i.jsx)(m.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,i.jsxs)(nt,{children:[(0,i.jsx)("p",{className:f.Es,children:"No NFTS found"}),(0,i.jsx)(u.n,{onClick:Y,type:"button",className:(0,P.default)(f.Km,f.km),color:"accent1",cursor:"pointer",children:(0,i.jsx)(it,{children:"View full collection"})})]})})})})]})};const gt=()=>{const e=(0,K.PY)((e=>e.setSearch)),t=(0,K.PY)((e=>e.search)),n=(0,x.Iv)((e=>e.isCollectionStatsLoading));return(0,i.jsx)(u.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:n?"":"Search by name",className:(0,P.default)(n&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var ht=n(19478);const ut=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var mt=n(35339),ft=n.n(mt),xt="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",wt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",vt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const bt=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__PercentChange",componentId:"sc-c45d5aa1-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,kt=C.default.h1.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionNameText",componentId:"sc-c45d5aa1-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,yt=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionNameTextLoading",componentId:"sc-c45d5aa1-2"})`
  ${me.S}
  height: 32px;
  width: 236px;
`,Ct=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-c45d5aa1-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,jt=({children:e,href:t})=>(0,i.jsx)(u.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),_t=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:n})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ct,{onClick:n,children:t?(0,i.jsx)(L.DX,{width:"28",height:"28",fill:H.Z4.colors.neutral2}):(0,i.jsx)(L.ws,{width:"28",height:"20",fill:H.Z4.colors.neutral2})}),t&&(0,i.jsxs)(m.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,i.jsx)(jt,{href:e.discordUrl,children:(0,i.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(L.D7,{width:28,height:28,color:H.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,i.jsx)(jt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(u.n,{margin:"auto",paddingTop:"6",children:(0,i.jsx)(L.Zm,{fill:H.Z4.colors.neutral2,color:H.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,i.jsx)(jt,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(u.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,i.jsx)(L.yu,{fill:H.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,i.jsx)(jt,{href:e.externalUrl,children:(0,i.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(L.O1,{fill:H.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),Tt=({children:e,href:t})=>(0,i.jsx)(m.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),It=({collectionStats:e,name:t,isVerified:n,isMobile:s,collectionSocialsIsOpen:r,toggleCollectionSocials:a})=>{const o=(0,fe.I)((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(m.X2,{justifyContent:"space-between",children:[(0,i.jsxs)(m.X2,{minWidth:"0",children:[o?(0,i.jsx)(yt,{}):(0,i.jsx)(kt,{isVerified:n,className:s?f.td:f.Es,children:t}),n&&(0,i.jsx)(L.SA,{style:{width:"32px",height:"32px"}}),(0,i.jsxs)(m.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,i.jsx)(Tt,{href:e.discordUrl??"",children:(0,i.jsx)(L.D7,{fill:H.Z4.colors.neutral2,color:H.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,i.jsx)(Tt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(L.Zm,{fill:H.Z4.colors.neutral2,color:H.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,i.jsx)(Tt,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(L.yu,{fill:H.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,i.jsx)(Tt,{href:e.externalUrl??"",children:(0,i.jsx)(L.O1,{fill:H.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),s&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,i.jsx)(_t,{collectionStats:e,collectionSocialsIsOpen:r,toggleCollectionSocials:a})]})},Nt=C.default.p.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionDescriptionText",componentId:"sc-c45d5aa1-4"})`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?C.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:C.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,St=C.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__ReadMore",componentId:"sc-c45d5aa1-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,zt=()=>(0,i.jsx)(u.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),Pt=({description:e})=>{const[t,n]=(0,M.useState)(!1),[s,r]=(0,M.useReducer)((e=>!e),!1),a=(0,M.useRef)(null),o=(0,M.useRef)(null),l=(0,fe.I)((e=>e.isCollectionStatsLoading)),d=(0,p.dD)();return(0,M.useEffect)((()=>{var e;a&&o&&a.current&&o.current&&(o.current.getBoundingClientRect().width>=(null===(e=a.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||o.current.getBoundingClientRect().width>=590)?n(!0):n(!1)}),[o,a,l,e]),l?(0,i.jsx)(zt,{}):(0,i.jsxs)(u.n,{ref:a,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,i.jsx)(Nt,{readMore:s,ref:o,className:d?f.Km:f.d1,children:(0,i.jsx)(ft(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,i.jsxs)(St,{className:d?f.Km:f.d1,onClick:r,children:["show ",s?"less":"more"]})]})},$t=({children:e,label:t,shouldHide:n})=>(0,i.jsxs)(u.n,{display:n?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,i.jsx)(Q.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,i.jsx)(u.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Et=e=>new Array(e?3:5).fill(null).map(((t,n)=>(0,i.jsxs)(u.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,i.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,i.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${n}`))),At=({stats:e,isMobile:t,...n})=>{var s,r,a,o,l,d,c,g,h,u,f,w,v,k;const{formatNumberOrString:y,formatDelta:C}=(0,b.Gb)(),j=(null===(r=e)||void 0===r||null===(s=r.stats)||void 0===s?void 0:s.total_supply)?ut((e.stats.num_owners??0)/e.stats.total_supply*100):0,_=e.stats?y({input:e.stats.total_supply??0,type:b.sw.NFTCollectionStats}):0,T=(null===(o=e)||void 0===o||null===(a=o.stats)||void 0===a?void 0:a.total_supply)?ut((e.stats.total_listings??0)/e.stats.total_supply*100):0,I=(0,fe.I)((e=>e.isCollectionStatsLoading)),N=y({input:Number(null===(l=e.stats)||void 0===l?void 0:l.total_volume)??0,type:b.sw.NFTCollectionStats}),S=y({input:(null===(d=e.stats)||void 0===d?void 0:d.floor_price)??0,type:b.sw.NFTTokenFloorPrice}),z=C(Math.round(Math.abs((null===(g=e)||void 0===g||null===(c=g.stats)||void 0===c?void 0:c.one_day_floor_change)??0))),P=(0,x.cP)((e=>e.bagExpanded)),$=(0,p.eI)(),E=t||!$.lg&&P;return(0,i.jsx)(m.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...n,children:I?Et(t??!1):(0,i.jsxs)(i.Fragment,{children:[(null===(h=e.stats)||void 0===h?void 0:h.floor_price)?(0,i.jsxs)($t,{label:"Global floor",shouldHide:!1,children:[S," ETH"]}):null,void 0!==(null===(u=e.stats)||void 0===u?void 0:u.one_day_floor_change)?(0,i.jsx)($t,{label:"Floor 24H",shouldHide:!1,children:(0,i.jsxs)(bt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,i.jsx)(ht.Kx,{delta:null===(w=e)||void 0===w||null===(f=w.stats)||void 0===f?void 0:f.one_day_floor_change}),z]})}):null,(null===(v=e.stats)||void 0===v?void 0:v.total_volume)?(0,i.jsxs)($t,{label:"Total volume",shouldHide:!1,children:[N," ETH"]}):null,_?(0,i.jsx)($t,{label:"Items",shouldHide:t??!1,children:_}):null,j&&e.standard!==we.iv.ERC1155?(0,i.jsxs)($t,{label:"Unique owners",shouldHide:E??!1,children:[j,"%"]}):null,(null===(k=e.stats)||void 0===k?void 0:k.total_listings)&&e.standard!==we.iv.ERC1155?(0,i.jsxs)($t,{label:"Listed",shouldHide:E??!1,children:[T,"%"]}):null]})})},Rt=({isMobile:e})=>(0,i.jsxs)(m.sg,{position:"relative",width:"full",children:[(0,i.jsx)(u.n,{className:wt}),(0,i.jsx)(u.n,{className:xt}),(0,i.jsxs)(u.n,{className:vt,children:[(0,i.jsx)(u.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zt,{}),(0,i.jsx)(m.X2,{gap:"60",marginTop:"20",children:Et(!1)})]})]}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zt,{}),(0,i.jsx)(m.X2,{gap:"20",marginTop:"20",children:Et(!0)})]})]}),Mt=({stats:e,isMobile:t})=>{const[n,s]=(0,M.useReducer)((e=>!e),!1),r=(0,fe.I)((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(u.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?n?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[r&&(0,i.jsx)(u.n,{as:"div",borderRadius:"round",position:"absolute",className:wt}),(0,i.jsx)(u.n,{as:r?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:r?xt:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,i.jsxs)(u.n,{className:vt,children:[(0,i.jsx)(It,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:n,toggleCollectionSocials:s}),(e.description||r)&&!t&&(0,i.jsx)(Pt,{description:e.description??""}),(0,i.jsx)(At,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||r)&&t&&(0,i.jsx)(Pt,{description:e.description??""}),(0,i.jsx)("div",{id:"nft-anchor-mobile"}),(0,i.jsx)(At,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var Ft=n(48714),Dt=n(87175),Bt=n(3638),Ut="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Lt=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\TraitsHeader__ChildreMobileWrapper",componentId:"sc-59a3155c-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Ht=e=>{const{children:t,index:n,title:s}=e,[r,a]=(0,M.useState)(!1),o=J((e=>e.traitsOpen)),l=J((e=>e.setTraitsOpen)),d=(0,p.dD)(),c=void 0!==n&&o[n-1],g=n!==D.TRAIT_START_INDEX;return(0,M.useEffect)((()=>{void 0!==n&&l(n,r)}),[r,n,l]),(0,i.jsxs)(i.Fragment,{children:[g&&(0,i.jsx)(u.n,{className:(0,P.default)(f.Nf,!r&&V,X),opacity:!c&&r&&0!==n?"1":"0",marginTop:c?"0":"8"}),(0,i.jsxs)(u.n,{as:"details",className:(0,P.default)(f.Nf,!r&&V),open:r,children:[(0,i.jsxs)(u.n,{as:"summary",className:`${Z} ${V}`,onClick:e=>{e.preventDefault(),a(!r)},children:[s,(0,i.jsxs)(u.n,{display:"flex",alignItems:"center",children:[(0,i.jsx)(u.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,i.jsx)(u.n,{className:O,style:{transform:`rotate(${r?0:180}deg)`},children:(0,i.jsx)(L.g8,{className:Y})})]})]}),(0,i.jsx)(Lt,{isMobile:d,children:t})]})]})},Ot=(0,C.default)(ze.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\PriceRange__StyledSlider",componentId:"sc-e02d4d0-0"})`
  cursor: pointer;
`,Yt=()=>{const[e,t]=(0,M.useState)(""),n=(0,K.PY)((e=>e.setMinPrice)),a=(0,K.PY)((e=>e.setMaxPrice)),o=(0,K.PY)((e=>e.minPrice)),l=(0,K.PY)((e=>e.maxPrice)),d=xe((e=>e.priceRangeLow)),c=xe((e=>e.priceRangeHigh)),p=xe((e=>e.setPriceRangeLow)),g=xe((e=>e.setPriceRangeHigh)),h=xe((e=>e.prevMinMax)),x=xe((e=>e.setPrevMinMax)),w=(0,C.useTheme)(),v=(0,_e.TH)();(0,M.useEffect)((()=>{n(""),a(""),p(""),g("")}),[v.pathname,n,a,p,g]);const b=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},k=n=>{n.currentTarget.placeholder=e,t(""),(o||l)&&(0,r._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.PRICE_RANGE})};return(0,i.jsxs)(Ht,{title:"Price range",index:D.PRICE_RANGE_INDEX,children:[(0,i.jsxs)(m.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,i.jsx)(m.X2,{position:"relative",children:(0,i.jsx)(Dt.A,{style:{width:"126px"},className:Ut,placeholder:d,onChange:e=>{const[,t]=h;if(e.currentTarget.value){const n=parseInt(e.currentTarget.value)-parseInt(d),i=Math.floor(n/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)>=parseInt(l)?x([t,t]):x([i,t])}else x([0,t]);n(e.currentTarget.value.toString()),be()},onFocus:b,value:o,onBlur:k})}),(0,i.jsx)(u.n,{className:f.d1,children:"to"}),(0,i.jsx)(m.X2,{position:"relative",children:(0,i.jsx)(Dt.A,{style:{width:"126px"},className:Ut,placeholder:c,value:l,onChange:e=>{const[t]=h;if(e.currentTarget.value){const n=parseInt(c)-parseInt(e.currentTarget.value),i=Math.floor(100-n/(parseInt(c)-parseInt(d))*100);parseInt(e.currentTarget.value)<=parseInt(o)?x([t,t]):x([t,i])}else x([t,100]);a(e.currentTarget.value),be()},onFocus:b,onBlur:k})})]}),(0,i.jsx)(m.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,i.jsx)(Ot,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:h,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Bt.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,i]=e,s=parseFloat(c.replace(/,/g,"")),r=parseFloat(d.replace(/,/g,"")),o=s-r,l=s-(100-i)/100*o;n((t/100*o+r).toFixed(2).toString()),a(l.toFixed(2).toString()),0===t&&n(""),100===i&&a(""),x(e)}})})]})};var Xt=n(86473),Wt=n(40848),Zt=n(1285),Vt=n(43328);const Kt=({trait:e,addTrait:t,removeTrait:n,isTraitSelected:a,style:o})=>{const[l,d]=(0,M.useState)(!1),[c,p]=(0,M.useState)(!1),g=()=>p(!c),h=(0,K.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:x,trait_value:w,trait_type:v}=(0,K.PY)((e=>e.showFullTraitName));(0,M.useEffect)((()=>{d(a)}),[a]);const b=i=>{i.preventDefault(),be(),l?(n(e),d(!1)):(t(e),d(!0)),(0,r._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.TRAIT})},k=x&&v===e.trait_type&&w===e.trait_value;return(0,i.jsxs)(m.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${f.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...o},maxHeight:"44",onMouseEnter:g,onMouseLeave:g,onClick:b,children:[(0,i.jsx)(u.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:k?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&h({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>h({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Wt._)(Number(e.trait_value))}`:e.trait_value}),(0,i.jsx)(ee.X,{checked:l,hovered:c,onChange:b,children:(0,i.jsx)(u.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!k&&e.trait_count})})]},e.trait_value)},Gt=({traits:e,type:t,index:n})=>{const s=(0,K.PY)((e=>e.addTrait)),r=(0,K.PY)((e=>e.removeTrait)),a=(0,K.PY)((e=>e.traits)),[o,l]=(0,M.useState)(""),d=(0,E.Z)(o,300),c=(0,M.useMemo)((()=>e.filter((e=>{var t;return null===(t=e.trait_value)||void 0===t?void 0:t.toString().toLowerCase().includes(d.toLowerCase())}))),[d,e]),p=(0,M.useCallback)((function({data:e,index:t,style:n}){const o=e[t],l=a.find((({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value)));return(0,i.jsx)(Kt,{style:n,isTraitSelected:!!l,trait:o,addTrait:s,removeTrait:r})}),[a,s,r]),g=(0,M.useCallback)(((e,t)=>{const n=t[e];return`${n.trait_type}_${n.trait_value}_${e}`}),[]);return e.length?(0,i.jsxs)(Ht,{index:n,numTraits:e.length,title:t,children:[(0,i.jsx)(Dt.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,i.jsx)(m.sg,{className:W,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,i.jsx)(Zt.ZP,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(Vt.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:n})=>(0,i.jsx)(p,{style:t,data:n,index:e},g(e,n))})})})]}):null},qt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:n}=(0,x.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),s=(0,x.PY)((e=>e.setSortBy)),r=(0,x.PY)((e=>e.hasRarity)),[a,o]=(0,M.useReducer)((e=>!e),!1),l=()=>{n(!t)},d=(0,M.useMemo)((()=>ct(s,r??!1)),[r,s]);return(0,i.jsxs)(u.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,i.jsx)(m.X2,{width:"full",justifyContent:"space-between"}),(0,i.jsxs)(m.sg,{marginTop:"8",children:[(0,i.jsxs)(m.X2,{justifyContent:"space-between",className:`${Z} ${V}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:o,onMouseLeave:o,children:[(0,i.jsx)(u.n,{"data-testid":"nft-collection-filter-buy-now",className:f.v4,children:"Buy now"}),(0,i.jsx)(ee.X,{hovered:a,checked:t,onClick:l,children:(0,i.jsx)("span",{})})]}),Xt.tq&&(0,i.jsx)(ce,{sortDropDownOptions:d}),(0,i.jsx)(oe,{}),(0,i.jsx)(Yt,{}),Object.entries(e).length>0&&(0,i.jsx)(u.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,i.jsx)(m.sg,{children:Object.entries(e).map((([e,t],n)=>(0,i.jsx)(Gt,{type:e,traits:t,index:n+D.TRAIT_START_INDEX},e)))})]})]})};var Jt=n(40976);const Qt=(0,C.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-e5c534b9-0"})`
  ${Jt.bc}
`,en=(0,C.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledColumn",componentId:"sc-e5c534b9-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.zD+16}px)`:"100%"};
  }
`,tn=(0,C.default)(l.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledRow",componentId:"sc-e5c534b9-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,nn=()=>{const e=(0,x.cP)((e=>e.bagExpanded)),t=(0,p.dD)();return(0,i.jsxs)(en,{isBagExpanded:e,children:[(0,i.jsx)(bn,{children:(0,i.jsx)(mn,{})}),(0,i.jsxs)(Qt,{children:[(0,i.jsx)(Rt,{isMobile:t}),(0,i.jsx)(tn,{children:I})]}),(0,i.jsx)(dt,{})]})};var sn=n(32207),rn=n(57221);const an=(0,C.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\UnavailableCollectionPage__Container",componentId:"sc-b3b4d40a-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,on=(0,C.default)(Q.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\collection\\UnavailableCollectionPage__StyledExternalLink",componentId:"sc-b3b4d40a-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function ln({isBlocked:e}){const t=(0,C.useTheme)();return e?(0,i.jsxs)(an,{children:[(0,i.jsx)(rn.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,i.jsx)(Q.Tv.HeadlineMedium,{children:(0,i.jsx)(g.cC,{children:"This collection is blocked"})}),(0,i.jsx)(Q.m_,{to:"/nfts",children:(0,i.jsx)(g.cC,{children:"Return to NFT Explore"})}),(0,i.jsx)(on,{href:sn.c.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,i.jsx)(g.cC,{children:"Learn why"})})]}):(0,i.jsxs)(an,{children:[(0,i.jsx)(Q.Tv.HeadlineMedium,{children:(0,i.jsx)(g.cC,{children:"No collection assets exist at this address"})}),(0,i.jsx)(Q.m_,{to:"/nfts",children:(0,i.jsx)(g.cC,{children:"Return to NFT Explore"})})]})}var dn=n(37018),cn=n(437),pn=n(76907),gn=n(55874),hn=n(62587);const un={},mn=(0,C.default)(d.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionBannerLoading",componentId:"sc-7fc324dd-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,fn=(0,C.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionContainer",componentId:"sc-7fc324dd-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,xn=(0,pn.q)(fn),wn=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionAssetsContainer",componentId:"sc-7fc324dd-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,vn=(0,pn.q)(wn),bn=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__BannerWrapper",componentId:"sc-7fc324dd-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,kn=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__Banner",componentId:"sc-7fc324dd-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,yn=(0,C.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionDescriptionSection",componentId:"sc-7fc324dd-5"})`
  ${Jt.bc}
`,Cn=C.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__FiltersContainer",componentId:"sc-7fc324dd-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${hn.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,jn=(0,C.default)(l.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__MobileFilterHeader",componentId:"sc-7fc324dd-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,_n=(0,C.default)(l.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionDisplaySection",componentId:"sc-7fc324dd-8"})`
  align-items: flex-start;
  position: relative;
`,Tn=C.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\collection\\index__IconWrapper",componentId:"sc-7fc324dd-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${o.cR}
`,In=()=>{var e,t,n,a,o,l;const{contractAddress:d}=(0,_e.UO)(),u=(0,p.dD)(),[m,f]=(0,x.wx)(),{pathname:w}=(0,_e.TH)(),b=(0,_e.s0)(),C=w.includes("/activity"),j=(0,x.PY)((e=>e.setMarketCount)),_=(0,x.cP)((e=>e.bagExpanded)),T=(0,x.cP)((e=>e.setBagExpanded)),I=(0,Ie.x)(),S=(0,p.eI)(),{data:z,loading:P}=(0,c.K)(d),{CollectionContainerWidthChange:$}=(0,pn.q_)({CollectionContainerWidthChange:_&&!u?(S.xxxl?h.zD:h.ZI)+16:0,config:{duration:gn.Kd.medium,easing:pn.Z5.easeOutSine}}),{gridWidthOffset:E}=(0,pn.q_)({gridWidthOffset:m&&!u?332:0,config:{duration:gn.Kd.medium,easing:pn.Z5.easeOutSine}}),A=(0,M.useMemo)((()=>({title:z.name+" on Uniswap",image:window.location.origin+"/api/image/nfts/collection/"+d,url:window.location.href,description:z.description})),[z.description,z.name,d]),R=(0,dn.X)(A);if((0,M.useEffect)((()=>{var e,t;const n={};null===(t=z)||void 0===t||null===(e=t.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{n[e]=t})),j(n)}),[null===(e=z)||void 0===e?void 0:e.marketplaceCount,j]),(0,M.useEffect)((()=>{_&&m&&!S.xl&&f(!1)}),[_,m,S,f]),(0,M.useEffect)((()=>{T({bagExpanded:!1,manualClose:!1})}),[]),P)return(0,i.jsx)(nn,{});if(!z.name)return(0,i.jsx)(ln,{});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(cn.Helmet,{children:[(0,i.jsx)("title",{children:(0,g.t)("{{name}} | Explore and buy on Uniswap",{name:z.name})}),R.map(((e,t)=>(0,i.jsx)("meta",{...e},t)))]}),(0,i.jsx)(r.fM,{page:s.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:d,chain_id:I,is_activity_view:C},shouldLogImpression:!0,children:(0,i.jsx)(xn,{style:{width:$.to((e=>`calc(100% - ${e}px)`))},children:d&&!v._P.includes(d)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(bn,{children:(0,i.jsx)(kn,{src:(null===(t=z)||void 0===t?void 0:t.bannerImageUrl)?`${z.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,i.jsxs)(yn,{children:[z&&(0,i.jsx)(Mt,{stats:z,isMobile:u}),(0,i.jsx)("div",{id:"nft-anchor"}),(0,i.jsx)(N,{showActivity:C,toggleActivity:()=>{m&&f(!1),b(C?`/nfts/collection/${d}`:`/nfts/collection/${d}/activity`)}})]}),(0,i.jsxs)(_n,{children:[(0,i.jsx)(Cn,{isMobile:u,isFiltersExpanded:m,children:m&&(0,i.jsxs)(i.Fragment,{children:[u&&(0,i.jsxs)(jn,{children:[(0,i.jsx)(Q.Tv.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(Tn,{onClick:()=>f(!1),children:(0,i.jsx)(L.BW,{})})]}),(0,i.jsx)(qt,{traitsByGroup:(null===(n=z)||void 0===n?void 0:n.traits)??un})]})}),(0,i.jsx)(vn,{hideUnderneath:u&&(m||_),style:{transform:E.to((e=>`translate(${e}px)`)),width:E.to((e=>`calc(100% - ${e}px)`))},children:C?d&&(0,i.jsx)(y.cS,{contractAddress:d,rarityVerified:(null===(a=z)||void 0===a?void 0:a.rarityVerified)??!1,collectionName:(null===(o=z)||void 0===o?void 0:o.name)??"",chainId:I}):d&&z&&(0,i.jsx)(M.Suspense,{fallback:(0,i.jsx)(dt,{}),children:(0,i.jsx)(pt,{collectionStats:z,contractAddress:d,rarityVerified:null===(l=z)||void 0===l?void 0:l.rarityVerified})})})]})]}):(0,i.jsx)(ln,{isBlocked:!0})})}),(0,i.jsx)(k,{})]})}}}]);
//# sourceMappingURL=7548.d8e570fa.chunk.js.map