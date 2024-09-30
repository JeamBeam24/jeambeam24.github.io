"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5773],{47411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Vi});var s=n(92936),i=n(5985),o=n(26729),a=n(12722),r=n(25320),l=n(69780),c=n(27179),p=n(6823),d=n(3464),f=n(44591),u=n(94284),h=n(32682),m=n(24509),x=n(89882),w=n(60040),g=n(70518),k=n(45779),b=n(63194),C=n(57221),v=n(14411),y=n(66869),j=n(54972),_=n(62587),P=n(66136);const S=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ModalWrapper",componentId:"sc-f1392cb1-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${y.j$.sm}px) {
    width: 100%;
  }
`,N=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-f1392cb1-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,I=(0,v.default)(b.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIcon",componentId:"sc-f1392cb1-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,A=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__HazardIconWrap",componentId:"sc-f1392cb1-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,D=(0,v.default)(l.DF).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ContinueButton",componentId:"sc-f1392cb1-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,T=v.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__EditListings",componentId:"sc-f1392cb1-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,$=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const i=(0,v.useTheme)(),{formatDelta:o}=(0,P.Gb)();return(0,s.jsxs)(w.h,{children:[(0,s.jsxs)(S,{children:[(0,s.jsxs)(N,{children:[(0,s.jsx)(I,{width:24,height:24,onClick:t})," "]}),(0,s.jsx)(A,{children:(0,s.jsx)(C.Z,{height:90,width:90,color:i.critical})}),(0,s.jsx)(j.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,s.jsx)(p.cC,{children:"Low listing price"})}),(0,s.jsxs)(j.Tv.BodyPrimary,{textAlign:"center",children:[(0,s.jsx)(p.CN,{value:1!==e.length?2:1,one:(0,p.t)("One NFT is listed {{delta}} ",{delta:o(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}),other:(0,p.t)("{{count}} NFTs are listed significantly ",{count:e.length})}),"\xa0",(0,s.jsx)(p.cC,{children:"below the collection\u2019s floor price. Are you sure you want to continue?"})]}),(0,s.jsx)(D,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,s.jsx)(p.cC,{children:"Continue"})}),(0,s.jsx)(T,{onClick:t,children:(0,s.jsx)(p.cC,{children:"Edit listings"})})]}),(0,s.jsx)(g.a,{onClick:t})]})};var R=n(79132),M=n(97341),E=n(40300),L=n(63490),F=n.n(L);const O=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\shared__RemoveIconWrap",componentId:"sc-7c47588-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,U=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\shared__TitleRow",componentId:"sc-7c47588-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var B,Z;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(B||(B={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(Z||(Z={}));const W="0x59728544B08AB483533076417FbBB2fD0B17CE3a",G="0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051",H="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",z="0x1e0049783f008a0085193e00003d00cd54003c71",X="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",V={[H]:z},Y=1e4;function q(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){q(o,s,i,a,r,"next",e)}function r(e){q(o,s,i,a,r,"throw",e)}a(void 0)}))}}const K="0xf849de01b080adc3a814fabe1e2087475cf2e354",Q="0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779",ee=function(){var e=J((function*(e){const t=JSON.stringify(e),n=new AbortController,s=new Request("http://localhost:8080/api?url=https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),i=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(s);return 200===(yield e.json()).code}catch(o){return!1}finally{clearTimeout(i)}}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=J((function*(e,t){var n,s,i,o;const a=`http://localhost:8080/api?url=https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,r=yield fetch(a,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(o=yield r.json())||void 0===o||null===(i=o.data)||void 0===i||null===(s=i.data)||void 0===s||null===(n=s[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ne=n(47263),se=n(11604),ie=n(7937),oe=n(66284),ae=n(5540),re=n(56079),le=n(13820);function ce(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const pe=function(){var e,t=(e=function*(e){const t=yield fetch("http://localhost:8080/api?url=https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){ce(o,s,i,a,r,"next",e)}function r(e){ce(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function de(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function fe(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,s=new Request("http://localhost:8080/api?url=https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),i=setTimeout((()=>n.abort()),F()("60s"));try{const e=yield fetch(s);return 200===(yield e.json()).code}catch(o){return!1}finally{clearTimeout(i)}},fe=function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){de(o,s,i,a,r,"next",e)}function r(e){de(o,s,i,a,r,"throw",e)}a(void 0)}))},fe.apply(this,arguments)}var ue=n(23399),he=n(98282),me=n(99582),xe=n(31042),we=n(46854),ge=n(73116),ke=n(6412),be=n(30012);function Ce(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const ve="tuple(uint256 price, bytes data)",ye=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${ve}[]`],je=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${ve}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,_e=function(){var e,t=(e=function*(e,t){const n=xe.$.encode(ye,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),s=(0,ke.keccak256)(n),i=yield e.send("personal_sign",[s,t.user]);t.r=`0x${i.slice(2,66)}`,t.s=`0x${i.slice(66,130)}`,t.v=parseInt(i.slice(130,132),16),Pe(t)},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){Ce(o,s,i,a,r,"next",e)}function r(e){Ce(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Pe=e=>{e.v<27&&(e.v=e.v+27)},Se=e=>xe.$.encode([je],[e]),Ne=(e,t,n,s=me.hgB.Erc721)=>({salt:(()=>{const e=se.O$.from((0,be.O)(16)).toHexString();return(0,we.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:s===me.hgB.Erc721?1:2,deadline:t,currency:ge.d,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,xe.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});function Ie(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function Ae(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){Ie(o,s,i,a,r,"next",e)}function r(e){Ie(o,s,i,a,r,"throw",e)}a(void 0)}))}}const De=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],Te=(e,t)=>({amount:e,recipient:t}),$e=(e,t,n)=>{var s,i,o,a;const r=(null===(s=e)||void 0===s?void 0:s.basisPoints)??0,l=100*((null===(i=De.find((e=>"OpenSea"===e.name)))||void 0===i?void 0:i.fee)??0),c=Y-r-l,p=t.mul(se.O$.from(r)).div(se.O$.from(Y)).toString(),d=t.mul(se.O$.from(c)).div(se.O$.from(Y)).toString(),f=t.mul(se.O$.from(l)).div(se.O$.from(Y)).toString();return{sellerFee:Te(d,n),creatorFee:r>0?Te(p,(null===(a=e)||void 0===a||null===(o=a.asset_contract)||void 0===o?void 0:o.payout_address)??""):void 0,openSeaFee:l?Te(f,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};function Re(){return(Re=Ae((function*(e,t,n,s,i=me.hgB.Erc721){const o=new ie.Contract(t,i===me.hgB.Erc721?he:ue,n),a=yield n.getAddress();try{if(yield o.isApprovedForAll(a,e))return void s(ne.Sb.APPROVED);s(ne.Sb.SIGNING);const t=yield o.setApprovalForAll(e,!0);s(ne.Sb.PENDING);1===(yield t.wait()).status?s(ne.Sb.APPROVED):s(ne.Sb.FAILED)}catch(r){4001===r.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED)}}))).apply(this,arguments)}function Me(){return Me=Ae((function*(e,t,n,s,i=0,o){var a,r;const l=new ae.A(s,{conduitKeyToConduit:V,overrides:{defaultConduitKey:H},seaportVersion:"1.5"}),c=yield n.getAddress(),p=null===(r=t.newListings)||void 0===r||null===(a=r.find((t=>t.marketplace.name===e.name)))||void 0===a?void 0:a.price;if(!p||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,oe.parseEther)(`${p}`),{sellerFee:n,creatorFee:s,openSeaFee:i}=$e(t,e,c),a=[n,s,i].filter((e=>void 0!==e)),{executeAllActions:r}=yield l.createOrder({offer:[{itemType:t.asset_contract.tokenType===me.hgB.Erc721?re.ItemType.ERC721:re.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:a,endTime:t.expirationTime.toString(),zone:le.r_,allowPartialFills:!0},c),d={...yield r(),protocol_address:X};o(ne.Sb.PENDING);const f=yield function(e){return fe.apply(this,arguments)}(d);return o(f?ne.Sb.APPROVED:ne.Sb.FAILED),f}catch(d){return 4001===d.code?o(ne.Sb.REJECTED):o(ne.Sb.FAILED),!1}case"LooksRare":{const e=E.Xg[E.HL.MAINNET],s=Math.round(Date.now()/1e3),a={isOrderAsk:!0,signer:c,collection:t.asset_contract.address,price:(0,oe.parseEther)(p.toString()),tokenId:se.O$.from(t.tokenId),amount:se.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:se.O$.from(i),startTime:se.O$.from(s),endTime:se.O$.from(t.expirationTime),minPercentageToAsk:se.O$.from(1e4).sub(se.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const r=yield(0,E.tI)(n,E.HL.MAINNET,a,W);o(ne.Sb.PENDING);const l={signature:r,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:c,isOrderAsk:!0,nonce:i,amount:1,price:(0,oe.parseEther)(p.toString()).toString(),startTime:s,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},d=yield pe(l);return o(d?ne.Sb.APPROVED:ne.Sb.FAILED),d}catch(d){return 4001===d.code?o(ne.Sb.REJECTED):o(ne.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,oe.parseEther)(p.toString()),tokens:[{token:t.asset_contract.address,tokenId:se.O$.from(t.tokenId),amount:1}]},n=Ne(c,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield te(t.asset_contract.address,t.tokenId);yield _e(s,n);const i={order:Se(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};o(ne.Sb.PENDING);const a=yield ee(i);return o(a?ne.Sb.APPROVED:ne.Sb.FAILED),a}catch(d){return 4001===d.code?o(ne.Sb.REJECTED):o(ne.Sb.FAILED),!1}}default:return!1}})),Me.apply(this,arguments)}function Ee(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function Le(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){Ee(o,s,i,a,r,"next",e)}function r(e){Ee(o,s,i,a,r,"throw",e)}a(void 0)}))}}function Fe(e,t,n){return Oe.apply(this,arguments)}function Oe(){return Oe=Le((function*(e,t,n){const s=()=>Fe(e,t,n);n(e,ne.Sb.SIGNING,s);const{marketplace:i,collectionAddress:o,nftStandard:a}=e,r=E.Xg[E.HL.MAINNET],l="OpenSea"===i.name?z:"LooksRare"===i.name?e.nftStandard===me.hgB.Erc721?W:G:"X2Y2"===i.name?e.nftStandard===me.hgB.Erc721?K:Q:r.TRANSFER_MANAGER_ERC721;o&&(yield function(e,t,n,s){return Re.apply(this,arguments)}(l,o,t,(t=>n(e,t,s)),a))})),Oe.apply(this,arguments)}function Ue(e,t,n,s,i,o){return Be.apply(this,arguments)}function Be(){return Be=Le((function*(e,t,n,s,i,o){const a=s(),r=()=>Ue(e,t,n,s,i,o);o(e,ne.Sb.SIGNING,r);const{asset:l,marketplace:c}=e,p=yield function(e,t,n,s){return Me.apply(this,arguments)}(c,l,t,n,a,(t=>o(e,t,r)));p&&"LooksRare"===e.marketplace.name&&i(a+1)})),Be.apply(this,arguments)}const Ze=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var s;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),i=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(s=t)||void 0===s?void 0:s.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(i/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function We(){const e=(0,R.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=(0,R.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,k.useEffect)((()=>{const[s,i]=(e=>{const t=[],n=[];return e.forEach((e=>{var s;null===(s=e.marketplaces)||void 0===s||s.forEach((s=>{var i,o;const a={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:ne.Sb.DEFINED,asset:e,marketplace:s,price:null===(o=e.newListings)||void 0===o||null===(i=o.find((e=>e.marketplace.name===s.name)))||void 0===i?void 0:i.price};if(n.push(a),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===s.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:ne.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:s,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(i),n(s)}),[e,n,t])}const Ge=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),He=(0,v.default)(l.Yd).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListingButton__StyledListingButton",componentId:"sc-381430bc-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${y.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,ze=({onClick:e})=>{const{sellAssets:t,showResolveIssues:n,toggleShowResolveIssues:i,issues:o,setIssues:a}=(0,R.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:s,setIssues:i})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:s,setIssues:i}))),[r,l]=(0,k.useState)(!1),c=(0,M.dD)(),[d,f]=(0,k.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:s,listingsMissingPrice:o,listingsBelowFloor:r,listingsAboveSellOrderFloor:l}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<F()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>F()("180d"))),s=[],i=[],o=[];for(const r of e)if(r.newListings)for(const e of r.newListings){var a;e.price?e.price<.8*((null===(a=r)||void 0===a?void 0:a.floorPrice)??0)&&!e.overrideFloorPrice?i.push([r,e]):r.floor_sell_order_price&&e.price>=r.floor_sell_order_price&&r.asset_contract.tokenType!==me.hgB.Erc1155&&o.push([r,e]):s.push([r,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:s,listingsBelowFloor:i,listingsAboveSellOrderFloor:o}})(t),c=Number(e)+Number(s)+o.length+l.length;return a(c),!c&&n&&i(),(e||s||l.length)&&!n&&i(),[o,r]}),[t,a,n,i]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(He,{onClick:()=>{o?!n&&i():f.length?l(!0):e()},missingPrices:!!d.length,showResolveIssues:n,children:n?(0,s.jsx)(p.CN,{value:1!==o?2:1,one:p.t`Resolve issue`,other:(0,p.t)("Resolve {{issues}} issues",{issues:o})}):d.length&&!c?(0,s.jsx)(p.cC,{children:"Set prices to continue"}):(0,s.jsx)(p.cC,{children:"Start listing"})}),r&&(0,s.jsx)($,{listingsBelowFloor:f,closeModal:()=>l(!1),startListing:e})]})};var Xe=n(21926),Ve=n(51001),Ye=n(590),qe=n(16449),Je=n(68588),Ke=n(86059),Qe=n(58690),et=n(81205),tt=n(76623),nt=n(55874),st=n(63415),it=n(78129),ot=n(7797),at=n(50901),rt=n(62652);const lt=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentColumn",componentId:"sc-a9142d37-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,rt.jb)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,ct=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentRowWrapper",componentId:"sc-a9142d37-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,pt=v.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__CollectionIcon",componentId:"sc-a9142d37-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,dt=v.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__AssetIcon",componentId:"sc-a9142d37-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,ft=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__MarketplaceIcon",componentId:"sc-a9142d37-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,ut=(0,v.default)(j.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentName",componentId:"sc-a9142d37-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,ht=v.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ProceedText",componentId:"sc-a9142d37-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,mt=v.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__FailedText",componentId:"sc-a9142d37-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,xt=(0,v.default)(Qe.SA).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__StyledVerifiedIcon",componentId:"sc-a9142d37-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,wt=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__IconWrapper",componentId:"sc-a9142d37-9"})`
  margin-left: auto;
  margin-right: 0px;
`,gt=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ButtonRow",componentId:"sc-a9142d37-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,kt=v.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,bt=v.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RemoveButton",componentId:"sc-a9142d37-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${kt}
`,Ct=v.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RetryButton",componentId:"sc-a9142d37-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${kt}
`,vt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const i=(0,v.useTheme)(),o=(0,k.useRef)(),a=e.status===ne.Sb.FAILED||e.status===ne.Sb.REJECTED;return(0,k.useEffect)((()=>{var t;e.status===ne.Sb.SIGNING&&(null===(t=o.current)||void 0===t||t.scroll)}),[e.status]),(0,s.jsxs)(lt,{failed:a,children:[(0,s.jsxs)(ct,{active:e.status===ne.Sb.SIGNING||e.status===ne.Sb.APPROVED,failed:a,ref:o,children:[t?(0,s.jsx)(pt,{src:e.image}):(0,s.jsx)(dt,{src:e.image}),(0,s.jsx)(ft,{children:(0,it.Dp)(e.marketplace.name,"24")}),(0,s.jsx)(ut,{children:e.name}),t&&e.isVerified&&(0,s.jsx)(xt,{}),(0,s.jsx)(wt,{children:e.status===ne.Sb.DEFINED||e.status===ne.Sb.PENDING?(0,s.jsx)(st.ZP,{height:"14px",width:"14px",stroke:e.status===ne.Sb.PENDING?i.accent1:i.neutral3}):e.status===ne.Sb.SIGNING?(0,s.jsx)(ht,{children:(0,s.jsx)(p.cC,{children:"Proceed in wallet"})}):e.status===ne.Sb.APPROVED?(0,s.jsx)(ot.Z,{height:"20",width:"20",stroke:i.success}):a&&(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(at.Z,{height:"20",width:"20",color:i.critical}),(0,s.jsx)(mt,{children:e.status===ne.Sb.FAILED?(0,s.jsx)(p.cC,{children:"Failed"}):(0,s.jsx)(p.cC,{children:"Rejected"})})]})})]}),a&&(0,s.jsxs)(gt,{justify:"space-between",children:[(0,s.jsx)(bt,{onClick:()=>n(e),children:(0,s.jsx)(p.cC,{children:"Remove"})}),(0,s.jsx)(Ct,{onClick:e.callback,children:(0,s.jsx)(p.cC,{children:"Retry"})})]})]})},yt=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionHeader",componentId:"sc-e5cc017f-0"})`
  justify-content: space-between;
`,jt=(0,v.default)(j.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionTitle",componentId:"sc-e5cc017f-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,_t=(0,v.default)(Qe.g8).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionArrow",componentId:"sc-e5cc017f-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${nt.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,Pt=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionBody",componentId:"sc-e5cc017f-3"})`
  border-left: 1.5px solid ${tt.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Je.Zl}
`,St=(0,v.default)(et.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__StyledInfoIcon",componentId:"sc-e5cc017f-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,Nt=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__ContentRowContainer",componentId:"sc-e5cc017f-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var It;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(It||(It={}));const At=({sectionType:e,active:t,content:n,toggleSection:i})=>{const o=(0,v.useTheme)(),a=(0,R.Pc)((e=>e.sellAssets)),r=(0,R.Pc)((e=>e.removeAssetMarketplace)),l=(0,k.useMemo)((()=>!n.some((e=>e.status!==ne.Sb.APPROVED))),[n]),c=0===e,d=(0,k.useMemo)((()=>{if(c){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,c]),h=e=>{if(c){const t=e;for(const e of a)e.asset_contract.address===t.collectionAddress&&r(e,t.marketplace)}else{const t=e;r(t.asset,t.marketplace)}};return(0,s.jsxs)(f.ZP,{children:[(0,s.jsxs)(yt,{children:[(0,s.jsxs)(u.ZP,{children:[t||l?(0,s.jsx)(Qe.bT,{fill:l?o.success:o.accent1}):(0,s.jsx)(Qe.rD,{}),(0,s.jsx)(jt,{active:t,marginLeft:"12px",approved:l,children:c?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.cC,{children:"Approve"}),"\xa0",(0,s.jsx)(p.CN,{value:d??1,one:p.t`collection`,other:p.t`collections`})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.cC,{children:"Sign"})," \xa0",n.length,"\xa0"," ",(0,s.jsx)(p.CN,{value:n.length,one:p.t`listing`,other:p.t`listings`})]})})]}),(0,s.jsx)(_t,{active:t,secondaryColor:t?o.neutral1:o.neutral2,onClick:i})]}),t&&(0,s.jsxs)(Pt,{children:[c&&(0,s.jsxs)(u.ZP,{height:"16px",marginBottom:"16px",children:[(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,s.jsx)(p.cC,{children:"Why is a transaction required?"})}),(0,s.jsx)(Ke.ud,{text:(0,s.jsx)(p.cC,{children:"Listing an NFT requires a one-time marketplace approval for each NFT collection."}),children:(0,s.jsx)(St,{})})]}),(0,s.jsx)(Nt,{children:n.map((e=>{var t;return(0,s.jsx)(vt,{row:e,removeRow:h,isCollectionApprovalSection:c},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var Dt=n(81339),Tt=n(72993);const $t=v.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImage",componentId:"sc-7e8a38e8-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,Rt=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImageWrapper",componentId:"sc-7e8a38e8-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Je.Zl}
`,Mt=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ProceedsColumn",componentId:"sc-7e8a38e8-2"})`
  text-align: right;
`,Et=v.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${y.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,Lt=v.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ReturnButton",componentId:"sc-7e8a38e8-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Et}
`,Ft=v.default.a.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetButton",componentId:"sc-7e8a38e8-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Et}
`,Ot=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetRow",componentId:"sc-7e8a38e8-5"})`
  justify-content: center;
  gap: 4px;
`,Ut=({overlayClick:e})=>{const t=(0,v.useTheme)(),{formatNumberOrString:n}=(0,P.Gb)(),i=(0,R.Pc)((e=>e.sellAssets)),o=(0,Tt.x)(),a=(0,m.Z)(o),{formatCurrencyAmount:r}=(0,P.Gb)(),l=(0,k.useMemo)((()=>Ze(i)),[i]),c=(0,x.Z)(l.toString(),a),d=(0,h.sq)(c);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(U,{children:[(0,s.jsxs)(j.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,s.jsx)(p.cC,{children:"Successfully listed"}),"\xa0",i.length>1?` ${i.length} `:"","NFT",(0,it._6)(i.length),"!"]}),(0,s.jsx)(b.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,s.jsx)(Rt,{children:i.map((e=>{var t,n,o;return(0,s.jsx)($t,{src:e.imageUrl,numImages:i.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(o=e)||void 0===o?void 0:o.tokenId))}))}),(0,s.jsxs)(u.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,s.jsx)(j.Tv.SubHeader,{children:(0,s.jsx)(p.cC,{children:"Proceeds if sold"})}),(0,s.jsxs)(Mt,{children:[(0,s.jsxs)(j.Tv.SubHeader,{children:[n({input:l,type:P.sw.NFTToken})," ETH"]}),d&&(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:r({amount:d,type:P.sw.FiatTokenPrice})})]})]}),(0,s.jsxs)(u.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,s.jsx)(Lt,{onClick:()=>window.location.reload(),children:(0,s.jsx)(p.cC,{children:"Return to My NFTs"})}),(0,s.jsx)(Ft,{href:(0,it.FX)(i),target:"_blank",rel:"noreferrer",children:(0,s.jsxs)(Ot,{children:[(0,s.jsx)(Dt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,s.jsx)(p.cC,{children:"Share on Twitter"})]})})]})]})};function Bt(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const Zt=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModal__ListModalWrapper",componentId:"sc-c92bbdb2-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${y.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Wt=({overlayClick:e})=>{var t;const n=(0,Ye.m)(),o=(0,qe.n)(),r=null===(t=o)||void 0===t?void 0:t.getSigner(),l=(0,a.oO)({modal:i.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,P.Gb)(),d=(0,R.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:f,setLooksRareNonce:u,getLooksRareNonce:C,collectionsRequiringApproval:v,listings:y}=(0,R.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:s,listings:i})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:s,listings:i}))),_=(0,k.useMemo)((()=>Ze(d)),[d]),[S,N]=(0,k.useReducer)((e=>e===It.APPROVE?It.SIGN:It.APPROVE),It.APPROVE),I=(0,m.Z)(n.chainId),A=(0,x.Z)(_.toString(),I),D=c({amount:(0,h.sq)(A),type:P.sw.FiatTokenPrice}),T=(0,k.useMemo)((()=>v.every((e=>e.status===ne.Sb.APPROVED))),[v]),$=(0,k.useMemo)((()=>y.every((e=>e.status===ne.Sb.APPROVED))),[y]),M=function(){var e,t=(e=function*(){if(r&&o){for(const e of y)yield Ue(e,r,o,C,u,f);(0,a._P)(i.Yz.NFT_LISTING_COMPLETED,{signatures_approved:y.filter((e=>e.status===ne.Sb.APPROVED)),list_quantity:y.length,usd_value:D,...l})}},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){Bt(o,s,i,a,r,"next",e)}function r(e){Bt(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,k.useEffect)((()=>{T&&(M(),S===It.APPROVE&&N())}),[T]);const E=(0,k.useCallback)((()=>{$?window.location.reload():e()}),[$,e]);return(0,k.useEffect)((()=>{!y.length&&E()}),[y,E]),(0,s.jsxs)(w.h,{children:[(0,s.jsx)(a.fM,{modal:i.KO.NFT_LISTING,children:(0,s.jsx)(Zt,{children:$?(0,s.jsx)(Ut,{overlayClick:E}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(j.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,s.jsx)(p.cC,{children:"List NFTs"})}),(0,s.jsx)(b.Z,{size:24,cursor:"pointer",onClick:E})]}),(0,s.jsx)(At,{sectionType:It.APPROVE,active:S===It.APPROVE,content:v,toggleSection:N}),(0,s.jsx)(At,{sectionType:It.SIGN,active:S===It.SIGN,content:y,toggleSection:N})]})})}),(0,s.jsx)(g.a,{onClick:E})]})};var Gt=n(30520),Ht=n(86082);const zt=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownWrapper",componentId:"sc-92c556b4-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,Xt=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownRow",componentId:"sc-92c556b4-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Vt=({dropDownOptions:e,width:t})=>{const n=(0,v.useTheme)();return(0,s.jsx)(zt,{$width:t,children:e.map((e=>(0,s.jsxs)(Xt,{onClick:e.onClick,children:[(0,s.jsx)(j.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,s.jsx)(ot.Z,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var Yt=n(95684),qt=n(43562),Jt=n(87175),Kt=n(68113),Qt=n(37246);const en=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__PriceTextInputWrapper",componentId:"sc-76d62578-0"})`
  gap: 12px;
  position: relative;
`,tn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__InputWrapper",componentId:"sc-76d62578-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,nn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__CurrencyWrapper",componentId:"sc-76d62578-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,sn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__GlobalPriceIcon",componentId:"sc-76d62578-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,on=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningRow",componentId:"sc-76d62578-4"})`
  gap: 4px;
`,an=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningMessage",componentId:"sc-76d62578-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${y.j$.md}px) {
    right: unset;
  }
`,rn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningAction",componentId:"sc-76d62578-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,ln=e=>{let t=(0,s.jsx)(s.Fragment,{});switch(e){case Z.BELOW_FLOOR:t=(0,s.jsx)(p.cC,{children:"below floor price."});break;case Z.ALREADY_LISTED:t=(0,s.jsx)(p.cC,{children:"Already listed at"})}return t},cn=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:i,globalOverride:o,asset:a})=>{var r;const{formatNumberOrString:l,formatDelta:c}=(0,P.Gb)(),[d,f]=(0,k.useState)(Z.NONE),u=(0,R.Pc)((e=>e.removeSellAsset)),h=(0,R.Pc)((e=>e.showResolveIssues)),m=(0,k.useRef)(),x=(0,v.useTheme)(),w=100*(1-(e??0)/(a.floorPrice??0)),g=h&&!e||d===Z.ALREADY_LISTED||d===Z.BELOW_FLOOR&&w>=20?tt.O9.red400:d===Z.BELOW_FLOOR?x.deprecated_accentWarning:n||e?x.accent1:x.neutral2;return function(e,t,n,s){var i;(0,k.useEffect)((()=>{var i;e(Z.NONE);const o=s??0;t.current.value=`${o}`,o<((null===(i=n)||void 0===i?void 0:i.floorPrice)??0)&&o>0?e(Z.BELOW_FLOOR):n.floor_sell_order_price&&o>=n.floor_sell_order_price&&n.asset_contract.tokenType!==me.hgB.Erc1155&&e(Z.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(i=n)||void 0===i?void 0:i.floorPrice,n.floor_sell_order_price,t,s,e])}(f,m,a,e),(0,s.jsxs)(en,{children:[(0,s.jsxs)(tn,{borderColor:g,children:[(0,s.jsx)(Jt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:m,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const s=parseFloat(n.target.value);t(isNaN(s)?void 0:s)}}),(0,s.jsx)(nn,{listPrice:e,children:"\xa0ETH"}),(n||o)&&(0,s.jsx)(sn,{onClick:()=>i(!o),children:o?(0,s.jsx)(Qe.We,{}):(0,s.jsx)(Qt.Z,{size:20,color:g})})]}),(0,s.jsx)(an,{$color:g,children:d!==Z.NONE&&(0,s.jsxs)(on,{children:[(0,s.jsx)(C.Z,{height:16,width:16,color:g}),(0,s.jsxs)("span",{children:[d===Z.BELOW_FLOOR&&`${c(w)} `,ln(d),"\xa0",d===Z.ALREADY_LISTED&&`${l({input:(null===(r=a)||void 0===r?void 0:r.floor_sell_order_price)??0,type:P.sw.NFTToken})} ETH`]}),(0,s.jsx)(rn,{onClick:()=>{d===Z.ALREADY_LISTED&&u(a),f(Z.NONE)},children:d===Z.BELOW_FLOOR?(0,s.jsx)(p.cC,{children:"Dismiss"}):(0,s.jsx)(p.cC,{children:"Remove item"})})]})})]})},pn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeeWrap",componentId:"sc-b62846d1-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,dn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__RoyaltyContainer",componentId:"sc-b62846d1-1"})`
  gap: 12px;
  padding: 4px 0px;
`,fn=v.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,un=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MarketIcon",componentId:"sc-b62846d1-2"})`
  border-radius: 4px;
  ${fn}
`,hn=v.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__CollectionIcon",componentId:"sc-b62846d1-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${fn}
`,mn=(0,v.default)(j.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeePercent",componentId:"sc-b62846d1-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,xn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MaxFeeContainer",componentId:"sc-b62846d1-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,wn=({selectedMarkets:e,asset:t,fees:n})=>{var i;const{formatNumberOrString:o,formatDelta:a}=(0,P.Gb)(),r=Math.max(...e.map((e=>Ge(e,t)??0)));return(0,s.jsxs)(dn,{children:[e.map((e=>{var n;return(0,s.jsxs)(pn,{children:[(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(un,{children:(0,it.Dp)(e.name,"16")}),(0,s.jsxs)(j.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,s.jsx)(p.cC,{children:"fee"})]})]}),(0,s.jsx)(mn,{children:a(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,s.jsxs)(pn,{children:[(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(hn,{src:null===(i=t.collection)||void 0===i?void 0:i.imageUrl}),(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,s.jsx)(p.cC,{children:"Max creator royalties"})})]}),(0,s.jsxs)(mn,{children:[r,"%"]})]}),(0,s.jsxs)(xn,{children:[(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"16px",children:(0,s.jsx)(p.cC,{children:"Max fees"})}),(0,s.jsxs)(j.Tv.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?o({input:n,type:P.sw.NFTToken}):"-"," ETH"]})]})]})},gn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__LastPriceInfo",componentId:"sc-18dd4463-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${y.j$.lg}px) {
    display: flex;
  }
`,kn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FloorPriceInfo",componentId:"sc-18dd4463-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${y.j$.md}px) {
    display: flex;
  }
`,bn=(0,v.default)(O).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-18dd4463-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,Cn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconsWrapper",componentId:"sc-18dd4463-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${y.j$.sm}px) {
    display: none;
  }
`,vn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconWrapper",componentId:"sc-18dd4463-4"})`
  position: relative;
  cursor: pointer;
`,yn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIcon",componentId:"sc-18dd4463-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,jn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-18dd4463-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${y.j$.sm}px) {
    display: none;
  }
`,_n=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeColumnWrapper",componentId:"sc-18dd4463-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${y.j$.md}px) {
    display: flex;
  }
`,Pn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeWrapper",componentId:"sc-18dd4463-8"})`
  width: min-content;
  white-space: nowrap;
`,Sn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ReturnColumn",componentId:"sc-18dd4463-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${y.j$.md}px) {
    display: flex;
  }
`,Nn=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:i,removeMarket:o,asset:a,expandMarketplaceRows:r,toggleExpandMarketplaceRows:l,rowHovered:c})=>{const{formatNumberOrString:d,formatDelta:f}=(0,P.Gb)(),h=(0,R.Pc)((e=>e.setAssetListPrice)),m=(0,R.Pc)((e=>e.removeAssetMarketplace)),[x,w]=(0,k.useReducer)((e=>!e),!1),[g,b]=(0,k.useReducer)((e=>!e),!1),[C,v]=(0,k.useState)((()=>{var e,t;return null===(t=a.newListings)||void 0===t||null===(e=t.find((e=>{var t;return r?e.marketplace.name===(null===(t=i)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[y,_]=(0,k.useState)(!1),S=e===B.SAME_PRICE&&!y,N=S?t:C,I=(0,k.useCallback)((e=>{S?n(e):v(e);for(const t of i)h(a,e,t)}),[a,i,h,n,S]),A=(0,k.useMemo)((()=>{let e=0;for(const t of i){const n=Ge(t,a)+t.fee;e=Math.max(n,e)}return e}),[a,i]),D=N&&N*A/100,T=N&&D&&N-D;return function(e,t,n,s,i){(0,k.useEffect)((()=>{let o;e?(s||t(i),o=i):o=s,n(o)}),[e])}(y,v,I,C,t),function(e,t,n,s,i,o,a){(0,k.useEffect)((()=>{var r;a===B.FLOOR_PRICE?(t(null===(r=e)||void 0===r?void 0:r.floorPrice),n(e.floorPrice)):a===B.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):a===B.SAME_PRICE&&(i&&!o?n(i):t(o)),s(!1)}),[a])}(a,v,n,_,C,t,e),(0,k.useEffect)((()=>{S&&I(t)}),[t]),(0,s.jsxs)(u.ZP,{onMouseEnter:b,onMouseLeave:b,children:[(0,s.jsx)(kn,{children:(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:d({input:a.floorPrice,type:P.sw.NFTToken})+a.floorPrice?" ETH":""})}),(0,s.jsx)(gn,{children:(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:a.lastPrice?`${d({input:a.lastPrice,type:P.sw.NFTToken})} ETH`:"-"})}),(0,s.jsxs)(u.ZP,{flex:"2",children:[(r||i.length>1)&&(0,s.jsx)(Cn,{onMouseEnter:w,onMouseLeave:w,children:i.map(((e,t)=>{var n;return(0,s.jsxs)(vn,{onClick:t=>{t.stopPropagation(),m(a,e),o&&o()},children:[(0,s.jsx)(yn,{index:t,children:(0,it.Dp)(e.name,"20")}),(0,s.jsx)(bn,{hovered:x&&(r??!1),children:(0,s.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=a.collection)||void 0===n?void 0:n.address)+a.tokenId)}))}),(0,s.jsx)(cn,{listPrice:N,setListPrice:I,isGlobalPrice:S,setGlobalOverride:_,globalOverride:y,asset:a}),c&&(r&&g||i.length>1)&&(0,s.jsx)(jn,{onClick:l,children:r?(0,s.jsx)(Qe.fJ,{}):(0,s.jsx)(Qe.nG,{})})]}),(0,s.jsx)(_n,{children:(0,s.jsx)(Ke.ud,{text:(0,s.jsx)(wn,{selectedMarkets:i,asset:a,fees:D}),placement:"left",children:(0,s.jsx)(Pn,{children:(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",children:A>0?`${f(A)}${i.length>1?p.t`max`:""}`:"--%"})})})}),(0,s.jsx)(Sn,{children:(0,s.jsx)(In,{ethPrice:T})})]})},In=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,P.Gb)(),n=(0,qt.$)();return(0,s.jsx)(u.ZP,{width:"100%",justify:"flex-end",children:(0,s.jsx)(j.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,s.jsxs)(f.ZP,{children:[(0,s.jsxs)("span",{children:[t({input:e,type:P.sw.NFTToken})," ETH"]}),(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:P.sw.FiatNFTToken})})]}):"- ETH"})})},An=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTListRowWrapper",componentId:"sc-c3541116-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Dn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__RemoveIconContainer",componentId:"sc-c3541116-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${y.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Tn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTInfoWrapper",componentId:"sc-c3541116-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${y.j$.md}px) {
    flex: 1.5;
  }
`,$n=v.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTImage",componentId:"sc-c3541116-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Rn=v.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Mn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenInfoWrapper",componentId:"sc-c3541116-4"})`
  margin-right: 8px;
  min-width: 0px;
`,En=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenName",componentId:"sc-c3541116-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Rn}
`,Ln=(0,v.default)(j.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__CollectionName",componentId:"sc-c3541116-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Rn};
`,Fn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__MarketPlaceRowWrapper",componentId:"sc-c3541116-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${y.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${y.j$.md}px) {
    flex: 3;
  }
`,On=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:o})=>{var a;const[r,l]=(0,k.useReducer)((e=>!e),!1),c=(0,R.Pc)((e=>e.removeSellAsset)),[p,d]=(0,k.useState)([]),[f,u]=(0,k.useReducer)((e=>!e),!1),h=(0,v.useTheme)();return(0,k.useEffect)((()=>{d(JSON.parse(JSON.stringify(o)))}),[o]),(0,s.jsxs)(An,{onMouseEnter:()=>{!f&&u()},onMouseLeave:()=>{f&&u()},children:[(0,s.jsx)(Dn,{children:f&&(0,s.jsx)(Yt.Z,{size:20,color:h.neutral2,cursor:"pointer",onClick:()=>{c(e)}})}),(0,s.jsxs)(Tn,{children:[(0,s.jsx)($n,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,s.jsxs)(Mn,{children:[(0,s.jsx)(En,{children:e.name?e.name:`#${e.tokenId}`}),(0,s.jsxs)(Ln,{children:[null===(a=e.collection)||void 0===a?void 0:a.name,e.collectionIsVerified&&(0,s.jsx)(Qe.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,s.jsx)(Fn,{children:r&&p.length>1?p.map((o=>(0,s.jsx)(Nn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:[o],removeMarket:()=>d(p.filter((e=>e.name!==o.name))),asset:e,expandMarketplaceRows:r,rowHovered:f,toggleExpandMarketplaceRows:l},e.name+o.name))):(0,s.jsx)(Nn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:p,asset:e,rowHovered:f,toggleExpandMarketplaceRows:l})})]})},Un=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__TableHeader",componentId:"sc-caddb1b7-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${y.j$.sm}px) {
    padding-left: 48px;
  }
`,Bn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__NFTHeader",componentId:"sc-caddb1b7-1"})`
  flex: 2;

  @media screen and (min-width: ${y.j$.md}px) {
    flex: 1.5;
  }
`,Zn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__PriceHeaders",componentId:"sc-caddb1b7-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${y.j$.md}px) {
    flex: 3;
  }
`,Wn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__LastPriceHeader",componentId:"sc-caddb1b7-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${y.j$.lg}px) {
    display: flex;
  }
`,Gn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FloorPriceHeader",componentId:"sc-caddb1b7-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${y.j$.md}px) {
    display: flex;
  }
`,Hn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-caddb1b7-5"})`
  flex: 2;
  gap: 4px;
`,zn=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPromptContainer",componentId:"sc-caddb1b7-6"})`
  position: relative;
  @media screen and (max-width: ${y.j$.sm}px) {
    display: none;
  }
`,Xn=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPrompt",componentId:"sc-caddb1b7-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Vn=(0,v.default)(Ht.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownChevron",componentId:"sc-caddb1b7-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Yn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownContainer",componentId:"sc-caddb1b7-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,qn=v.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${y.j$.md}px) {
    display: flex;
  }
`,Jn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FeeHeader",componentId:"sc-caddb1b7-10"})`
  flex: 1;
  ${qn}
`,Kn=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__UserReceivesHeader",componentId:"sc-caddb1b7-11"})`
  flex: 1.5;
  ${qn}
`,Qn=v.default.hr.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__RowDivider",componentId:"sc-caddb1b7-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,es=({selectedMarkets:e})=>{const t=(0,R.Pc)((e=>e.sellAssets)),[n,i]=(0,k.useState)(B.CUSTOM),[o,a]=(0,k.useState)(),[r,l]=(0,k.useReducer)((e=>!e),!1),c=(0,k.useRef)(null);(0,Gt.t)(c,r?l:void 0);const d=(0,k.useMemo)((()=>[{displayText:"Custom",isSelected:n===B.CUSTOM,onClick:()=>{i(B.CUSTOM),l()}},{displayText:"Floor price",isSelected:n===B.FLOOR_PRICE,onClick:()=>{i(B.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:n===B.LAST_PRICE,onClick:()=>{i(B.LAST_PRICE),l()}},{displayText:"Same price",isSelected:n===B.SAME_PRICE,onClick:()=>{i(B.SAME_PRICE),l()}}]),[n]);let u;switch(n){case B.CUSTOM:u=(0,s.jsx)(p.cC,{children:"Custom"});break;case B.FLOOR_PRICE:u=(0,s.jsx)(p.cC,{children:"Floor price"});break;case B.LAST_PRICE:u=(0,s.jsx)(p.cC,{children:"Last price"});break;case B.SAME_PRICE:u=(0,s.jsx)(p.cC,{children:"Same price"})}return(0,s.jsxs)(f.ZP,{children:[(0,s.jsxs)(Un,{children:[(0,s.jsx)(Bn,{children:(0,s.jsx)(p.cC,{children:"NFT"})}),(0,s.jsxs)(Zn,{children:[(0,s.jsx)(Gn,{children:(0,s.jsx)(p.cC,{children:"Floor"})}),(0,s.jsx)(Wn,{children:(0,s.jsx)(p.cC,{children:"Last"})}),(0,s.jsxs)(Hn,{ref:c,children:[(0,s.jsx)(p.cC,{children:"Price"}),(0,s.jsxs)(zn,{children:[(0,s.jsxs)(Xn,{onClick:l,children:[u," ",(0,s.jsx)(Vn,{isOpen:r})]}),r&&(0,s.jsx)(Yn,{children:(0,s.jsx)(Vt,{dropDownOptions:d,width:200})})]})]}),(0,s.jsx)(Jn,{children:(0,s.jsx)(p.cC,{children:"Fees"})}),(0,s.jsx)(Kn,{children:(0,s.jsx)(p.cC,{children:"You receive"})})]})]}),t.map((i=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(On,{asset:i,globalPriceMethod:n,globalPrice:o,setGlobalPrice:a,selectedMarkets:e}),t.indexOf(i)<t.length-1&&(0,s.jsx)(Qn,{})]})))]})};var ts=n(90090),ns=n(15288),ss=n(4256),is=n(27389);const os=(0,v.default)(ns.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-7944421b-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,as=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__FeeText",componentId:"sc-7944421b-1"})`
  color: ${({theme:e})=>e.neutral2};
`,rs=(0,v.default)(ns.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-7944421b-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${ts.T1}) {
    width: 220px;
  }
`,ls=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-7944421b-3"})`
  display: flex;
`,cs=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketIcon",componentId:"sc-7944421b-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,ps=(0,v.default)(Qe.g8).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__Chevron",componentId:"sc-7944421b-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,ds=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-7944421b-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,fs=(0,v.default)(ns.sg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-7944421b-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${_.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,us=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,i]=(0,k.useReducer)((e=>!e),!1),o=(0,k.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),a=(0,k.useRef)(null);return(0,Gt.t)(a,(()=>n&&i())),(0,s.jsxs)(ds,{ref:a,children:[(0,s.jsxs)(rs,{className:Kt.km,onClick:i,children:[(0,s.jsxs)(ls,{children:[t.map(((e,n)=>(0,s.jsx)(cs,{totalSelected:t.length,index:n,children:(0,it.Dp)(e.name,"20")},n))),o]}),(0,s.jsx)(ps,{isOpen:n,secondaryColor:is.Z4.colors.neutral1})]}),(0,s.jsx)(fs,{isOpen:n,children:De.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const i=n.includes(e),[o,a]=(0,k.useReducer)((e=>!e),!1),r=()=>{1===n.length&&i||t(i?n.filter((t=>t!==e)):[...n,e])};return(0,s.jsxs)(os,{onMouseEnter:a,onMouseLeave:a,onClick:r,children:[(0,s.jsxs)(ns.X2,{gap:"12",onClick:r,children:[(0,it.Dp)(e.name,"24"),(0,s.jsxs)(ns.sg,{children:[(0,s.jsx)(j.Tv.BodyPrimary,{children:e.name}),(0,s.jsxs)(as,{className:Kt.VJ,children:[e.fee,"% fee"]})]})]}),(0,s.jsx)(ss.X,{hovered:o,checked:i,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,s.jsx)("span",{})})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},hs=(0,v.default)(ns.sg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ModalWrapper",componentId:"sc-b781153c-0"})`
  gap: 4px;
  position: relative;
`,ms=(0,v.default)(ns.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__InputWrapper",componentId:"sc-b781153c-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,xs=(0,v.default)(ns.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownPrompt",componentId:"sc-b781153c-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,ws=(0,v.default)(Ht.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownChevron",componentId:"sc-b781153c-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,gs=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownContainer",componentId:"sc-b781153c-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${_.k.dropdown};
`,ks=(0,v.default)(ns.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ErrorMessage",componentId:"sc-b781153c-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,bs=(0,v.default)(C.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__WarningIcon",componentId:"sc-b781153c-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var Cs,vs;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(Cs||(Cs={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(vs||(vs={}));const ys=()=>{const[e,t]=(0,k.useState)(Cs.day),[n,i]=(0,k.useState)("7"),[o,a]=(0,k.useState)(vs.valid),r=(0,R.Pc)((e=>e.setGlobalExpiration)),[l,c]=(0,k.useReducer)((e=>!e),!1),d=(0,k.useRef)(null);(0,Gt.t)(d,l?c:void 0);const f=(0,k.useMemo)((()=>[{displayText:"hours",isSelected:e===Cs.hour,onClick:()=>{t(Cs.hour),c()}},{displayText:"days",isSelected:e===Cs.day,onClick:()=>{t(Cs.day),c()}},{displayText:"weeks",isSelected:e===Cs.week,onClick:()=>{t(Cs.week),c()}},{displayText:"months",isSelected:e===Cs.month,onClick:()=>{t(Cs.month),c()}}]),[e]);let u;switch(e){case Cs.hour:u=(0,s.jsx)(p.CN,{value:+n,one:p.t`hour`,other:p.t`hours`});break;case Cs.day:u=(0,s.jsx)(p.CN,{value:+n,one:p.t`day`,other:p.t`days`});break;case Cs.week:u=(0,s.jsx)(p.CN,{value:+n,one:p.t`week`,other:p.t`weeks`});break;case Cs.month:u=(0,s.jsx)(p.CN,{value:+n,one:p.t`month`,other:p.t`months`})}return(0,k.useEffect)((()=>{const t=js(parseFloat(n),e);1e3*t-Date.now()<F()("60s")||isNaN(t)?a(vs.empty):1e3*t-Date.now()>F()("180d")?a(vs.overMax):a(vs.valid),r(t)}),[n,e,r]),(0,s.jsxs)(hs,{ref:d,children:[(0,s.jsxs)(ms,{isInvalid:o!==vs.valid,children:[(0,s.jsx)(Jt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:n,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{i(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,s.jsxs)(xs,{onClick:c,children:[u," ",(0,s.jsx)(ws,{isOpen:l})]}),l&&(0,s.jsx)(gs,{children:(0,s.jsx)(Vt,{dropDownOptions:f,width:125})})]}),o!==vs.valid&&(0,s.jsxs)(ks,{className:Kt.VJ,children:[" ",(0,s.jsx)(bs,{})," ",o===vs.overMax?"Maximum 6 months":"Set duration"]})]})},js=(e,t)=>Math.round((Date.now()+F()("1h")*(()=>{switch(t){case Cs.hour:return 1;case Cs.day:return 24;case Cs.week:return 168;default:return 720}})()*e)/1e3);function _s(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const Ps=(0,v.default)(f.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeader",componentId:"sc-3f5f02ca-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${y.j$.xs}px) {
    gap: 4px;
  }
`,Ss=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ArrowContainer",componentId:"sc-3f5f02ca-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${y.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Ns=(0,v.default)(Xe.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__BackArrow",componentId:"sc-3f5f02ca-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${y.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,Is=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__TitleWrapper",componentId:"sc-3f5f02ca-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${y.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,As=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ButtonsWrapper",componentId:"sc-3f5f02ca-4"})`
  gap: 12px;
  width: min-content;
`,Ds=v.default.section.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__MarketWrap",componentId:"sc-3f5f02ca-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,Ts=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeaderRow",componentId:"sc-3f5f02ca-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${y.j$.sm}px) {
    padding-left: 40px;
  }
`,$s=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__GridWrapper",componentId:"sc-3f5f02ca-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,Rs=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__FloatingConfirmationBar",componentId:"sc-3f5f02ca-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${_.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${y.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${y.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,Ms=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__Overlay",componentId:"sc-3f5f02ca-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Es=(0,v.default)(j.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__UsdValue",componentId:"sc-3f5f02ca-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${y.j$.lg}px) {
    display: flex;
  }
`,Ls=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsAndButtonWrapper",componentId:"sc-3f5f02ca-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${y.j$.sm}px) {
    gap: 20px;
  }
`,Fs=(0,v.default)(u.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsWrapper",componentId:"sc-3f5f02ca-12"})`
  width: min-content;
  gap: 16px;
`,Os=v.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__EthValueWrapper",componentId:"sc-3f5f02ca-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${y.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Us=()=>{const{formatNumberOrString:e}=(0,P.Gb)(),{setProfilePageState:t}=(0,R.aO)(),n=(0,Ye.m)(),o=(0,Ve.z)(),r=(0,M.dD)(),l=(0,a.oO)({modal:i.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,P.Gb)(),{setGlobalMarketplaces:d,sellAssets:w,issues:g}=(0,R.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:b,collectionsRequiringApproval:C,setCollectionStatusAndCallback:v}=(0,R.zM)((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),y=(0,k.useMemo)((()=>Ze(w)),[w]),_=(0,m.Z)(n.chainId),S=(0,x.Z)(y.toString(),_),N=(0,h.sq)(S),I=c({amount:N,type:P.sw.FiatTokenPrice}),[A,D]=(0,k.useReducer)((e=>!e),!1),[T,$]=(0,k.useState)([De[0]]);We(),(0,k.useEffect)((()=>{d(T)}),[T,d]);const E={collection_addresses:w.map((e=>e.asset_contract.address)),token_ids:w.map((e=>e.tokenId)),marketplaces:Array.from(new Set(b.map((e=>e.marketplace.name)))),list_quantity:b.length,usd_value:I,...l},L=function(){var e,t=(e=function*(){if(o){(0,a._P)(i.Yz.NFT_SELL_START_LISTING,{...E});for(const t of C)(e=t.status)!==ne.Sb.PAUSED&&e!==ne.Sb.APPROVED&&(r?yield Fe(t,o,v):Fe(t,o,v));var e}},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){_s(o,s,i,a,r,"next",e)}function r(e){_s(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),F=r?(0,s.jsx)(j.Tv.SubHeader,{children:(0,s.jsx)(p.cC,{children:"Receive"})}):(0,s.jsx)(j.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,s.jsx)(p.cC,{children:"You receive"})});return(0,s.jsxs)(f.ZP,{children:[(0,s.jsxs)(Ds,{children:[(0,s.jsxs)(Ps,{children:[(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(Ss,{children:(0,s.jsx)(Ns,{onClick:()=>t(ne.HA.VIEWING)})}),(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,s.jsx)(p.cC,{children:"My NFTs"})})]}),(0,s.jsxs)(Ts,{children:[(0,s.jsx)(Is,{children:(0,s.jsx)(p.cC,{children:"Sell NFTs"})}),(0,s.jsxs)(As,{children:[(0,s.jsx)(us,{setSelectedMarkets:$,selectedMarkets:T}),(0,s.jsx)(ys,{})]})]})]}),(0,s.jsx)($s,{children:(0,s.jsx)(es,{selectedMarkets:T})})]}),(0,s.jsxs)(Rs,{issues:!!g,children:[F,(0,s.jsxs)(Ls,{children:[(0,s.jsxs)(Fs,{children:[(0,s.jsxs)(Os,{totalEthListingValue:!!y,children:[y>0?e({input:y,type:P.sw.NFTToken}):"-"," ","ETH"]}),!!N&&(0,s.jsx)(Es,{children:I})]}),(0,s.jsx)(ze,{onClick:()=>{D(),L()}})]})]}),(0,s.jsx)(Ms,{}),A&&(0,s.jsx)(Wt,{overlayClick:D})]})};var Bs=n(44952),Zs=n(80305),Ws=n(71291),Gs=n(34385),Hs=n(48714),zs=n(52873),Xs=n(82743),Vs=(n(12143),n(76907)),Ys=n(1285),qs=n(43328),Js=n(84820),Ks=n(15511);n(49484);const Qs=(0,v.default)(ns.sg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__ItemsContainer",componentId:"sc-2e0ebedf-0"})`
  ${Je.Zl}
  height: 100vh;
`,ei=(0,v.default)(Xs.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__LongLoadingBubble",componentId:"sc-2e0ebedf-1"})`
  min-height: 15px;
  width: 75%;
`,ti=(0,v.default)(Xs.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__SmallLoadingBubble",componentId:"sc-2e0ebedf-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,ni=(0,v.default)(ns.X2).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__MobileMenuHeader",componentId:"sc-2e0ebedf-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,si=({style:e})=>(0,s.jsxs)(ns.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,s.jsxs)(ns.X2,{display:"flex",flex:"1",children:[(0,s.jsx)(ti,{}),(0,s.jsx)(ei,{})]}),(0,s.jsx)(Zs.n,{as:"span",borderColor:"surface3",className:"rgw6ez453 rgw6ezq9 rgw6ez80l rgw6ez19f rgw6ez12f rgw6ez7zp rgw6ez89d","aria-hidden":"true"})]}),ii=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:i})=>{const o=(0,R.Pr)((e=>e.collectionFilters)),a=(0,R.Pr)((e=>e.setCollectionFilters)),[r,l]=(0,R.wx)(),c=(0,M.dD)(),{sidebarX:p}=(0,Vs.q_)({sidebarX:r?0:-360,config:{duration:nt.Kd.medium,easing:Vs.Z5.easeOutSine}}),d=(0,k.useMemo)((()=>{var e;return i&&(null===(e=i)||void 0===e?void 0:e.length)>=Ei||n}),[i,n]);return(0,s.jsx)(Zs.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:r?"flex":"none",style:{transform:c?void 0:p.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,s.jsxs)(Zs.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[c&&(0,s.jsxs)(ni,{children:[(0,s.jsx)(j.Tv.HeadlineSmall,{children:"Filter"}),(0,s.jsx)(Qe.DX,{height:28,width:28,fill:is.Z4.colors.neutral1,onClick:()=>l(!1)})]}),(0,s.jsx)(oi,{collections:i,collectionFilters:o,setCollectionFilters:a,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:d})]})})},oi=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:a,hideSearch:r})=>{const[l,c]=(0,k.useState)(""),[p,d]=(0,k.useState)(e);(0,k.useEffect)((()=>{if(l){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(l.toLowerCase())}));d(t)}else d(e)}),[l,e]);const f=(0,k.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),u=o?p.length+1:p.length,h=a?Ks.Z:i,m=(0,k.useCallback)((e=>!o||e<p.length),[p.length,o]),x=(0,k.useCallback)((({index:e,style:i})=>!(!!p&&p[e])||a?(0,s.jsx)(si,{style:i},e):(0,s.jsx)(ri,{style:i,collection:p[e],collectionFilters:t,setCollectionFilters:n},f(e,p))),[p,a,f,t,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Zs.n,{className:Kt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,s.jsx)(Zs.n,{paddingBottom:"12",borderRadius:"8",children:(0,s.jsxs)(ns.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!r&&(0,s.jsx)(ai,{collectionSearchText:l,setCollectionSearchText:c}),(0,s.jsx)(Qs,{children:(0,s.jsx)(Ys.ZP,{disableWidth:!0,children:({height:e})=>(0,s.jsx)(Js.Z,{isItemLoaded:m,itemCount:u,loadMoreItems:h,children:({onItemsRendered:t,ref:n})=>(0,s.jsx)(qs.t7,{height:e,width:"100%",itemCount:u,itemSize:44,onItemsRendered:t,itemKey:f,ref:n,children:x})})})})]})})]})},ai=({collectionSearchText:e,setCollectionSearchText:t})=>(0,s.jsx)(Jt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),ri=({collection:e,collectionFilters:t,setCollectionFilters:n,style:i})=>{const[o,a]=(0,k.useState)(!1),[r,l]=(0,k.useReducer)((e=>!e),!1),c=(0,k.useCallback)((e=>t.some((t=>t===e))),[t]),p=()=>{a(!o),n(e.address)};return(0,s.jsxs)(ns.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...i},maxHeight:"44",as:"li",onMouseEnter:l,onMouseLeave:l,onClick:p,children:[(0,s.jsxs)(ns.X2,{children:[(0,s.jsx)(Zs.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,s.jsxs)(Zs.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,s.jsx)(ss.X,{checked:c(e.address),hovered:r,onChange:p,children:(0,s.jsx)(Zs.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var li,ci=n(40976),pi=n(10581),di=n(31915),fi=n(61049);function ui(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function hi(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){ui(o,s,i,a,r,"next",e)}function r(e){ui(o,s,i,a,r,"throw",e)}a(void 0)}))}}!function(e){e[e.SHORT=5e3]="SHORT",e[e.MEDIUM=15e3]="MEDIUM",e[e.LONG=6e4]="LONG"}(li||(li={}));const mi=function(){var e=hi((function*({params:e}){let t=!1;if(!e)return[];for(const i of Object.values(e))void 0===i&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),s=yield n.json();return s?s.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]}));return function(t){return e.apply(this,arguments)}}();var xi=n(41218),wi=n(23173);const gi=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-20d199ad-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,ki=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-20d199ad-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,bi=(0,v.default)(ki).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-20d199ad-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,Ci=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-20d199ad-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,vi=(0,v.default)(ki).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-20d199ad-4"})`
  justify-content: space-between;
`,yi=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-20d199ad-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,ji=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-20d199ad-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,_i=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-20d199ad-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,Pi=()=>(0,s.jsx)(Zs.n,{width:"full",className:Gs.P,children:Array.from(Array(Mi),((e,t)=>(0,s.jsx)(_i,{className:wi.S},t)))}),Si=()=>(0,s.jsxs)(gi,{children:[(0,s.jsx)(bi,{children:(0,s.jsx)(Ci,{className:wi.S})}),(0,s.jsxs)(vi,{children:[(0,s.jsx)(yi,{className:wi.S}),(0,s.jsx)(ji,{className:wi.S})]}),(0,s.jsx)(Pi,{})]});var Ni=n(2798),Ii=n(42601),Ai=n(6282);const Di=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:o})=>{const r=(0,R.Pc)((e=>e.sellAssets)),l=(0,R.Pc)((e=>e.selectSellAsset)),c=(0,R.Pc)((e=>e.removeSellAsset)),d=(0,R.cP)((e=>e.bagExpanded)),f=(0,R.cP)((e=>e.toggleBag)),u=(0,M.dD)(),h=(0,Ai.s0)(),m=(0,k.useMemo)((()=>r.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,r]),x=(0,a.oO)(),w=t=>{t?c(e):(l(e),(0,a._P)(i.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...x})),d||r.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||u||f()},g=e.susFlag,b=(0,k.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,s.jsx)(Qe.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,s.jsx)(p.cC,{children:"Remove from bag"}),notSelectedInfo:(0,s.jsx)(p.cC,{children:"List for sale"}),disabledInfo:(0,s.jsx)(p.cC,{children:"Unavailable for listing"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,s.jsx)(Ni.y,{asset:e,display:b,isSelected:m,isDisabled:Boolean(g),selectAsset:()=>w(!1),unselectAsset:()=>w(!0),onButtonClick:()=>w(m),onCardClick:()=>{o||h((0,Ii.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})},Ti=(0,v.default)(ns.sg).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfilePageColumn",componentId:"sc-f44ec1cd-0"})`
  ${ci.bc}
`,$i=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfileHeader",componentId:"sc-f44ec1cd-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,Ri=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__EmptyStateContainer",componentId:"sc-f44ec1cd-2"})`
  margin-top: 164px;
`,Mi=25,Ei=300,Li=()=>{const{address:e}=(0,R.tM)(),t=(0,R.Pr)((e=>e.walletCollections)),n=(0,R.Pr)((e=>e.setWalletCollections)),{resetSellAssets:i}=(0,R.Pc)((({reset:e})=>({resetSellAssets:e}))),o=(0,R.Pc)((e=>e.sellAssets)),a=(0,R.cP)((e=>e.toggleBag)),[r,l]=(0,R.wx)(),c=(0,M.dD)(),{data:p,fetchNextPage:d,hasNextPage:f,isFetchingNextPage:u,isSuccess:h}=(0,di.N)(function(e){return(0,fi.t)({queryKey:["ownerCollections",{address:e}],queryFn:function(){var t=hi((function*({pageParam:t}){const n={asset_owner:e,offset:""+t*Ei,limit:`${Ei}`};return{data:yield mi(n),nextPage:t+1}}));return function(e){return t.apply(this,arguments)}}(),initialPageParam:0,getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:li.MEDIUM})}(e)),m=(0,k.useMemo)((()=>{var e;return h?null===(e=p)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[h,p]);return(0,k.useEffect)((()=>{m&&n(m)}),[m,n]),(0,s.jsxs)(Ti,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($i,{children:"My NFTs"}),(0,s.jsxs)(ns.X2,{alignItems:"flex-start",position:"relative",children:[(0,s.jsx)(ii,{fetchNextPage:d,hasNextPage:f,isFetchingNextPage:u,walletCollections:t}),(!c||!r)&&(0,s.jsx)(k.Suspense,{fallback:(0,s.jsx)(Si,{}),children:(0,s.jsx)(Fi,{walletCollections:t,isFiltersExpanded:r,setFiltersExpanded:l})})]})]}),o.length>0&&(0,s.jsxs)(ns.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Kt.v4,children:[o.length," NFT",1===o.length?"":"s",(0,s.jsx)(Zs.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:i,lineHeight:"16",children:"Clear"}),(0,s.jsx)(Zs.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:a,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},Fi=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var i,o,a,r,l;const{address:c}=(0,R.tM)(),p=(0,R.Pr)((e=>e.setCollectionFilters)),d=(0,R.Pr)((e=>e.collectionFilters)),f=(0,R.Pr)((e=>e.clearCollectionFilters)),u=(0,R.cP)((e=>e.bagExpanded)),[h,m]=(0,k.useState)(),x=(0,M.dD)(),w=(0,R.Pc)((e=>e.sellAssets)),{walletAssets:g,loading:b,hasNext:C,loadMore:v}=(0,Bs.b)(c,d,[],Mi),{gridX:y}=(0,Vs.q_)({gridX:t?300:-16,config:{duration:250,easing:Vs.Z5.easeOutSine}});return b?(0,s.jsx)(Si,{}):(0,s.jsx)(ns.sg,{width:"full",children:0===(null===(i=g)||void 0===i?void 0:i.length)?(0,s.jsx)(Ri,{children:(0,s.jsx)(xi.f,{})}):(0,s.jsxs)(Zs.x,{flexShrink:"0",position:x&&u?"fixed":"static",style:{transform:y.to((e=>`translate(${Number(e)-(!x&&t?300:-16)}px)`))},paddingY:"20",children:[(0,s.jsx)(ns.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,s.jsx)(Hs.L,{isMobile:x,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,s.jsx)(ns.X2,{children:(0,s.jsx)(Oi,{collections:e,collectionFilters:d,setCollectionFilters:p,clearCollectionFilters:f})}),(0,s.jsx)(pi.Z,{next:v,hasMore:C??!1,loader:Boolean(C&&(null===(o=g)||void 0===o?void 0:o.length))&&(0,s.jsx)(Ws.p,{count:Mi}),dataLength:(null===(a=g)||void 0===a?void 0:a.length)??0,className:(null===(r=g)||void 0===r?void 0:r.length)?Gs.P:void 0,style:{overflow:"unset"},children:(null===(l=g)||void 0===l?void 0:l.length)?g.map(((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(Di,{asset:e,mediaShouldBePlaying:e.tokenId===h,setCurrentTokenPlayingMedia:m,hideDetails:w.length>0})},t))):null})]})})},Oi=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:i})=>{var o,a;const r=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},l=(0,k.useCallback)((()=>i()),[i]);return(0,s.jsxs)(ns.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(o=t)||void 0===o?void 0:o.length)&&t.map(((e,t)=>(0,s.jsx)(Ui,{collection:r(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(a=t)||void 0===a?void 0:a.length)&&(0,s.jsx)(zs.v,{onClick:l,children:"Clear all"})]})},Ui=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,s.jsxs)(ns.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,s.jsx)(Zs.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,s.jsx)(Zs.n,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,s.jsx)(Zs.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,s.jsx)(Qe.aM,{})})]}):null};var Bi=n(437),Zi=n(13446);const Wi=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\profile\\index__ProfilePageWrapper",componentId:"sc-ef1fc7c4-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${y.j$.lg}px) {
    height: auto;
  }
`,Gi=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\profile\\index__LoadedAccountPage",componentId:"sc-ef1fc7c4-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?d.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${y.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,Hi=v.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\profile\\index__Center",componentId:"sc-ef1fc7c4-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,zi=(0,v.default)(l.DF).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\profile\\index__ConnectWalletButton",componentId:"sc-ef1fc7c4-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function Xi(e,t){return e?t?(0,p.t)("{{name}}'s NFT collection on Uniswap",{name:t}):(0,p.t)("NFT collection on Uniswap - {{address}}",{address:(0,Zi.Xn)(e)}):p.t`NFT collection on Uniswap`}function Vi(){const e=(0,R.aO)((e=>e.state)),t=(0,R.aO)((e=>e.setProfilePageState)),n=(0,R.Pc)((e=>e.reset)),l=(0,R.Pr)((e=>e.clearCollectionFilters)),{account:d}=(0,o.G)(),{ENSName:f}=(0,c.Z)(d),u=(0,k.useRef)(d),h=(0,r.LK)();(0,k.useEffect)((()=>{u.current!==d&&(u.current=d,n(),t(ne.HA.VIEWING),l())}),[d,n,t,l]);const m=(0,R.cP)((e=>e.bagExpanded)),x=e===ne.HA.LISTING;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Bi.Helmet,{children:(0,s.jsx)("title",{children:Xi(d,f)})}),(0,s.jsx)(a.fM,{page:i.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,s.jsx)(Wi,{children:d?(0,s.jsx)(Gi,{cartExpanded:m,isListingNfts:x,children:x?(0,s.jsx)(Us,{}):(0,s.jsx)(Li,{})}):(0,s.jsxs)(Hi,{children:[(0,s.jsx)(j.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,s.jsx)(p.cC,{children:"No items to display"})}),(0,s.jsx)(zi,{onClick:h,children:(0,s.jsx)(j.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,s.jsx)(p.cC,{children:"Connect wallet"})})})]})})})]})}}}]);
//# sourceMappingURL=5773.c4aad2ad.chunk.js.map