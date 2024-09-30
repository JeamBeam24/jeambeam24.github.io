"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1557,2001],{57809:(e,t,i)=>{i.d(t,{Z:()=>d});var o=i(45779),n=i(68090),s=i.n(n);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=(0,o.forwardRef)((function(e,t){var i=e.color,n=void 0===i?"currentColor":i,s=e.size,r=void 0===s?24:s,d=l(e,["color","size"]);return o.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));r.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},r.displayName="Plus";const d=r},25321:(e,t,i)=>{i.d(t,{l:()=>h,u:()=>v});var o=i(29531),n=i(74365),s=i(52364),a=i(49256),l=i(10105),r=i(76078),d=i(57852),c=i(25873);const p=new o.u({uri:d.V_[r.ChainId.MAINNET]}),u=new n.i(((e,t)=>{const i=c.ZP.getState().application.chainId;return e.setContext((()=>({uri:(0,d.ht)(i)&&d.V_[i]?d.V_[i]:d.V_[r.ChainId.MAINNET]}))),t(e)})),h=new s.f({cache:new a.h,link:(0,l.z)(u,p)}),v=Object.fromEntries(Object.entries(d.V_).map((([e,t])=>[e,new s.f({cache:new a.h,uri:t})])))},36813:(e,t,i)=>{i.d(t,{K:()=>w});var o=i(76078),n=i(21651),s=i(26729),a=i(63945),l=i(61592),r=i.n(l),d=i(63490),c=i.n(d),p=i(45779);const u=8;function h(e,t,i,o,s,a){let l={...i},d=[];for(let c=s+(a?1:-1);a?c<o.length:c>=0;a?c++:c--){const i=Number(o[c].tick),s=(0,n.tickToPrice)(e,t,i),p={liquidityActive:l.liquidityActive,tick:i,liquidityNet:r().BigInt(o[c].liquidityNet),price0:s.toFixed(u),sdkPrice:s};a?p.liquidityActive=r().add(l.liquidityActive,r().BigInt(o[c].liquidityNet)):!a&&r().notEqual(l.liquidityNet,r().BigInt(0))&&(p.liquidityActive=r().subtract(l.liquidityActive,l.liquidityNet)),d.push(p),l=p}return a||(d=d.reverse()),d}var v=i(25321),m=i(55660);const x=8,f=(e,t)=>e&&t?Math.floor(e/n.TICK_SPACINGS[t])*n.TICK_SPACINGS[t]:void 0;const k=1e3;function g(e,t,i,s){var l,r;const[d,u]=(0,p.useState)(0),[h,m]=(0,p.useState)([]),{data:x,error:f,loading:g}=function(e,t,i,s=0,l){var r,d,p;const u=v.u[l],h=e&&t&&i?n.Pool.getAddress(null===(r=e)||void 0===r?void 0:r.wrapped,null===(d=t)||void 0===d?void 0:d.wrapped,i,void 0,l?o.V3_CORE_FACTORY_ADDRESSES[l]:void 0):void 0;return(0,a.K_)({variables:{poolAddress:null===(p=h)||void 0===p?void 0:p.toLowerCase(),skip:s},skip:!h,pollInterval:c()("30s"),client:u})}(e,t,i,d,s);return(0,p.useEffect)((()=>{var e;(null===(e=x)||void 0===e?void 0:e.ticks.length)&&(m((e=>[...e,...x.ticks])),x.ticks.length===k&&u((e=>e+k)))}),[null===(l=x)||void 0===l?void 0:l.ticks]),{isLoading:g||(null===(r=x)||void 0===r?void 0:r.ticks.length)===k,error:f,ticks:h}}function w(e,t,i,a){var l,d,c,u,v;const k=(0,s.G)().chainId??o.ChainId.MAINNET,w=(0,m.$o)(null===(l=e)||void 0===l?void 0:l.wrapped,null===(d=t)||void 0===d?void 0:d.wrapped,i,a??k),y=null===(c=w[1])||void 0===c?void 0:c.liquidity,b=null===(u=w[1])||void 0===u?void 0:u.sqrtRatioX96,P=null===(v=w[1])||void 0===v?void 0:v.tickCurrent,j=(0,p.useMemo)((()=>f(P,i)),[P,i]),{isLoading:C,error:T,ticks:I}=g(e,t,i,a??k);return(0,p.useMemo)((()=>{var i,o,s;if(!e||!t||void 0===j||w[0]!==m.tK.EXISTS||!I||0===I.length||C)return{isLoading:C||w[0]===m.tK.LOADING,error:T,activeTick:j,data:void 0};const a=null===(i=e)||void 0===i?void 0:i.wrapped,l=null===(o=t)||void 0===o?void 0:o.wrapped,d=I.findIndex((({tick:e})=>e>j))-1;if(d<0)return console.error("TickData pivot not found"),{isLoading:C,error:T,activeTick:j,data:void 0};const c=(0,n.tickToPrice)(a,l,j),p={liquidityActive:r().BigInt((null===(s=w[1])||void 0===s?void 0:s.liquidity)??0),tick:j,liquidityNet:Number(I[d].tick)===j?r().BigInt(I[d].liquidityNet):r().BigInt(0),price0:c.toFixed(x),sdkPrice:c},u=h(a,l,p,I,d,!0),v=h(a,l,p,I,d,!1).concat(p).concat(u);return{isLoading:C,error:T,currentTick:P,activeTick:j,liquidity:y,sqrtPriceX96:b,data:v}}),[e,t,j,w,I,C,T,P,y,b])}},55660:(e,t,i)=>{i.d(t,{$o:()=>g,AI:()=>k,Oh:()=>f,tK:()=>x});var o=i(51371),n=i(76078),s=i(87270),a=i(21651),l=i(21891),r=i(61592),d=i.n(r),c=i(84938),p=i(45779),u=i(72993);function h(e,t,i,o,n,s,a){try{var l=e[s](a),r=l.value}catch(d){return void i(d)}l.done?t(r):Promise.resolve(r).then(o,n)}const v=new o.vU(s.Mt);let m=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,t,i,o){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:n}=t,{address:s}=i,l=`${e}:${n}:${s}:${o.toString()}`,r=this.addresses.find((e=>e.key===l));if(r)return r.address;const d={key:l,address:(0,a.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:i,fee:o})};return this.addresses.unshift(d),d.address}static getPool(e,t,i,o,n,s){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const l=this.pools.find((a=>a.token0===e&&a.token1===t&&a.fee===i&&d().EQ(a.sqrtRatioX96,o)&&d().EQ(a.liquidity,n)&&a.tickCurrent===s));if(l)return l;const r=new a.Pool(e,t,i,o,n,s);return this.pools.unshift(r),r}};var x;function f(e){const t=(0,u.x)(),i=(0,p.useMemo)((()=>t?e.map((([e,t,i])=>{if(e&&t&&i){const o=e.wrapped,n=t.wrapped;if(o.equals(n))return;return o.sortsBefore(n)?[o,n,i]:[n,o,i]}})):new Array(e.length)),[t,e]),o=(0,p.useMemo)((()=>{const e=t&&n.V3_CORE_FACTORY_ADDRESSES[t];return e?i.map((t=>t&&m.getPoolAddress(e,...t))):new Array(i.length)}),[t,i]),s=(0,c._Y)(o,v,"slot0"),a=(0,c._Y)(o,v,"liquidity");return(0,p.useMemo)((()=>e.map(((e,t)=>{const o=i[t];if(!o)return[x.INVALID,null];const[n,l,r]=o;if(!s[t])return[x.INVALID,null];const{result:d,loading:c,valid:p}=s[t];if(!a[t])return[x.INVALID,null];const{result:u,loading:h,valid:v}=a[t];if(!o||!p||!v)return[x.INVALID,null];if(c||h)return[x.LOADING,null];if(!d||!u)return[x.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=m.getPool(n,l,r,d.sqrtPriceX96,u[0],d.tick);return[x.EXISTS,e]}catch(f){return console.error("Error when constructing the pool",f),[x.NOT_EXISTS,null]}}))),[a,e,s,i])}function k(e,t,i){return f((0,p.useMemo)((()=>[[e,t,i]]),[e,t,i]))[0]}function g(e,t,i,o){const r=(0,p.useRef)([x.LOADING,null]),d=e&&t&&i?m.getPoolAddress(n.V3_CORE_FACTORY_ADDRESSES[o],e,t,i):void 0,c=(0,p.useMemo)((()=>d?{[o]:d}:{}),[o,d]),u=(0,l.SO)(c,s.Mt)[o];return(0,p.useEffect)((()=>{function o(){var n;return n=function*(){try{if(!e||!t||!i||!d||!u)return void(r.current=[x.INVALID,null]);const o=yield u.slot0(),n=yield u.liquidity();r.current=[x.NOT_EXISTS,null];const s=new a.Pool(e,t,i,o.sqrtPriceX96.toString(),n.toString(),o.tick);r.current=[x.EXISTS,s]}catch(o){r.current=[x.INVALID,null]}},o=function(){var e=this,t=arguments;return new Promise((function(i,o){var s=n.apply(e,t);function a(e){h(s,i,o,a,l,"next",e)}function l(e){h(s,i,o,a,l,"throw",e)}a(void 0)}))},o.apply(this,arguments)}!function(){o.apply(this,arguments)}()}),[u,i,d,e,t]),r.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},46012:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var o=i(92936),n=i(5985),s=i(12722),a=i(69780),l=i(97341),r=i(6823),d=i(43454),c=i(14411),p=i(54972),u=i(65075);const h=i.p+"static/media/404-page-dark.f24684e761633ae99402.png",v=i.p+"static/media/404-page-light.c448d3fd36de14609aba.png",m=c.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\NotFound\\index__Image",componentId:"sc-3b2569b-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,x=c.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\NotFound\\index__Container",componentId:"sc-3b2569b-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=(0,c.default)(x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\NotFound\\index__Header",componentId:"sc-3b2569b-2"})`
  gap: 30px;
`,k=(0,c.default)(x).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\NotFound\\index__PageWrapper",componentId:"sc-3b2569b-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function g(){const e=(0,u.Gv)(),t=(0,l.dD)(),i=t?p.Tv.LargeHeader:p.Tv.Hero,c=t?p.Tv.HeadlineMedium:p.Tv.HeadlineLarge;return(0,o.jsx)(k,{children:(0,o.jsxs)(s.fM,{page:n.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,o.jsxs)(f,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(i,{children:"404"}),(0,o.jsx)(c,{color:"neutral2",children:(0,o.jsx)(r.cC,{children:"Page not found!"})})]}),(0,o.jsx)(m,{src:e?h:v,alt:"Liluni"})]}),(0,o.jsx)(a.Hm,{as:d.rU,to:"/",children:(0,o.jsx)(r.cC,{children:"Oops, take me back to Swap"})})]})})}},75963:(e,t,i)=>{i.r(t),i.d(t,{default:()=>zi});var o=i(92936),n=i(5985),s=i(12722),a=i(44591),l=i(76078),r=i(21651),d=i(70060),c=i(74118),p=i(96524),u=i(36813),h=i(61592),v=i.n(h),m=i(45779),x=i(66136),f=i(69632),k=i(55810);class g{_data=null;_options;constructor(e){this._options=e,this._options.hoveredTick=e.activeTick}draw(e,t){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,t)))}update(e,t){this._data=e,this._options={...this._options,...t}}_drawImpl(e,t){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;const i=e.context,o=this._data.bars.map((e=>({x:e.x,y:t(e.originalData.liquidity)??0,tick:e.originalData.tick})));(0,k.XV)(o,this._data.barSpacing,e.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const n=t(0)??0;i.fillStyle=this._options.tokenAColor;for(let s=this._data.visibleRange.from;s<this._data.visibleRange.to;s++){const t=o[s],a=t.column,l=this._options.activeTick===t.tick,r=this._options.hoveredTick===t.tick;if(!a)return;const d=Math.min(Math.max(e.horizontalPixelRatio,a.right-a.left),this._data.barSpacing*e.horizontalPixelRatio),c=.3*d,p=d-2*c,u=(0,k.n1)(n,t.y,e.verticalPixelRatio);if(r){const e=.3*i.canvas.height,t=i.canvas.height-e;i.fillStyle=this._options.highlightColor,i.beginPath(),i.roundRect(a.left+c,e,p,t,8),i.fill(),i.globalAlpha=1}else i.globalAlpha=.4;if(l?i.fillStyle=this._options.tokenBColor:void 0===this._options.activeTick?i.fillStyle=this._options.color??"white":this._options.activeTick>t.tick?i.fillStyle=this._options.tokenBColor:this._options.activeTick<t.tick&&(i.fillStyle=this._options.tokenAColor),i.beginPath(),i.roundRect(a.left+c,u.position,p,u.length,8),i.fill(),i.globalAlpha=1,l&&this._options.activeTickProgress){i.globalCompositeOperation="source-atop";const e=u.length*this._options.activeTickProgress,t=u.position+(u.length-e);i.fillStyle=this._options.tokenAColor,i.beginPath(),i.fillRect(a.left,t,d,e),i.globalCompositeOperation="source-over"}}}}class w{_renderer;_tokenAColor;_tokenBColor;_highlightColor;constructor(e){this._tokenAColor=e.tokenAColor,this._renderer=new g(e),this._tokenBColor=e.tokenBColor,this._highlightColor=e.highlightColor}priceValueBuilder(e){return[0,e.liquidity]}isWhitespace(e){return!e.liquidity}renderer(){return this._renderer}update(e,t){this._renderer.update(e,t)}defaultOptions(){return{...f.Qb,tokenAColor:this._tokenAColor,tokenBColor:this._tokenBColor,highlightColor:this._highlightColor}}}function y(e,t,i,o,n,s,a){try{var l=e[s](a),r=l.value}catch(d){return void i(d)}l.done?t(r):Promise.resolve(r).then(o,n)}function b(e){return function(){var t=this,i=arguments;return new Promise((function(o,n){var s=e.apply(t,i);function a(e){y(s,o,n,a,l,"next",e)}function l(e){y(s,o,n,a,l,"throw",e)}a(void 0)}))}}class P extends c.B{series;activeTick;constructor(e,t){super(e,t),this.series=this.api.addCustomSeries(new w(t)),this.series.setData(this.data),this.updateOptions(t),this.fitContent()}updateOptions(e){super.updateOptions(e,{localization:{locale:e.locale},rightPriceScale:{visible:!1,borderVisible:!1,scaleMargins:{top:.35,bottom:0},autoScale:!0},timeScale:{visible:!1,fixLeftEdge:!0,fixRightEdge:!0,borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}}});const{data:t,activeTick:i}=e;this.activeTick=i,this.data!==t&&(this.data=t,this.series.setData(t),this.fitContent()),this.series.applyOptions({priceFormat:{type:"volume"},priceLineVisible:!1,lastValueVisible:!1}),this.series.applyOptions(e)}onSeriesHover(e){var t;super.onSeriesHover(e);const i={hoveredTick:(null===(t=e)||void 0===t?void 0:t.item.tick)??this.activeTick};this.series.applyOptions(i)}activeTickIndex(){return this.data.findIndex((e=>e.tick===this.activeTick))}fitContent(){const e=this.data.length,t=this.data.findIndex((e=>e.tick===this.activeTick)),i=-1!==t?t:e/2;this.api.timeScale().setVisibleLogicalRange({from:Math.max(i-50,0),to:Math.min(i+50,this.data.length)})}}const j=p.BigNumber.from(2).pow(128).sub(1);function C(e){return l.CurrencyAmount.fromRawAmount(e,j.toString())}function T(){return(T=b((function*(e,t,i,o,n){if(n.currentTick&&n.sqrtPriceX96&&n.liquidity)try{const s=v().greaterThan(o.liquidityNet,v().BigInt(0))?o.liquidityNet:v().multiply(o.liquidityNet,v().BigInt("-1")),a=[{index:o.tick,liquidityGross:s,liquidityNet:v().multiply(o.liquidityNet,v().BigInt("-1"))},{index:o.tick+r.TICK_SPACINGS[i],liquidityGross:s,liquidityNet:o.liquidityNet}],l=new r.Pool(e,t,i,n.sqrtPriceX96,o.liquidityActive,n.currentTick,a),d=r.TickMath.getSqrtRatioAtTick(a[0].index),c=(yield l.getOutputAmount(C(e),d))[0],p=parseFloat(o.sdkPrice.invert().quote(c).toExact()),u=r.TickMath.getSqrtRatioAtTick(a[1].index),h=(yield l.getOutputAmount(C(t),u))[0];return{amount0Locked:p,amount1Locked:parseFloat(o.sdkPrice.quote(h).toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function I(e,t,i,o){return D.apply(this,arguments)}function D(){return(D=b((function*(e,t,i,o){try{const n=r.TICK_SPACINGS[i],s=v().greaterThan(o.liquidityNet,v().BigInt(0))?o.liquidityNet:v().multiply(o.liquidityNet,v().BigInt("-1")),a=r.TickMath.getSqrtRatioAtTick(o.tick),d=[{index:o.tick,liquidityGross:s,liquidityNet:v().multiply(o.liquidityNet,v().BigInt("-1"))},{index:o.tick+r.TICK_SPACINGS[i],liquidityGross:s,liquidityNet:o.liquidityNet}],c=new r.Pool(e,t,Number(i),a,o.liquidityActive,o.tick,d),p=r.TickMath.getSqrtRatioAtTick(o.tick-n),u=l.CurrencyAmount.fromRawAmount(e,j.toString()),h=(yield c.getOutputAmount(u,p))[0],m=parseFloat(o.sdkPrice.invert().quote(h).toExact());return{amount0Locked:m,amount1Locked:parseFloat(h.toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function A({tokenA:e,tokenB:t,feeTier:i,isReversed:o,chainId:n}){const{formatNumber:s,formatPrice:a}=(0,x.Gb)(),l=(0,u.K)(e,t,i,n),[d,c]=(0,m.useState)();return(0,m.useEffect)((()=>{function n(){return n=b((function*(){var n;const s=l.data;if(!s)return;let d,p;const u=[];for(let c=0;c<s.length;c++){const n=s[c],h=o?1e3*c:1e3*(s.length-c),v=l.activeTick===n.tick;let m=n.sdkPrice,f=n.sdkPrice.invert();v&&l.activeTick&&l.currentTick&&(p=c,d=(l.currentTick-n.tick)/r.TICK_SPACINGS[i],m=(0,r.tickToPrice)(e,t,n.tick),f=m.invert());const{amount0Locked:k,amount1Locked:g}=yield I(e,t,i,n);u.push({tick:n.tick,liquidity:parseFloat(n.liquidityActive.toString()),price0:a({price:m,type:x.sw.SwapDetailsAmount}),price1:a({price:f,type:x.sw.SwapDetailsAmount}),time:h,amount0Locked:k,amount1Locked:g})}null===(n=u)||void 0===n||n.map(((e,t)=>{t>0&&(u[t-1].amount0Locked=e.amount0Locked,u[t-1].amount1Locked=e.amount1Locked)}));const h=void 0!==p?u[p]:void 0;if(void 0!==p&&h){const o=yield function(e,t,i,o,n){return T.apply(this,arguments)}(e,t,i,s[p],l);u[p]={...h,...o}}o||u.reverse(),c({barData:u.filter((e=>e.liquidity>0)),activeRangeData:h,activeRangePercentage:d})})),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[l,e,t,s,a,o,i]),{tickData:d,activeTick:l.activeTick,loading:l.isLoading||!d}}var _=i(7392),S=i(95757),N=i(6992),$=i(24997),L=i(68310),E=i(13382),U=i(26431),B=i(90511),R=i(90471),M=i(67968),O=i(53950),V=i(18569),q=i(32682),F=i(6823),Z=i(64505),X=i(14411),H=i(54972),z=i(55874),W=i(99582);const G=356,Q=[L.oX.VOLUME,L.oX.PRICE,L.oX.LIQUIDITY],Y=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__TimePeriodSelectorContainer",componentId:"sc-30ba6815-0"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,K=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__ChartTypeSelectorContainer",componentId:"sc-30ba6815-1"})`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,J=(0,X.default)(c.k).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__StyledChart",componentId:"sc-30ba6815-2"})`
  height: ${G}px;
`,ee=({chartType:e,onChartTypeChange:t})=>(0,o.jsx)(K,{children:(0,o.jsx)(B.W,{options:Q,currentChartType:e,onSelectOption:t})});function te(e,t,i,o,n,s){var a;const[l,r]=(0,m.useState)(V.XH.DAY),[d,c]=(0,m.useState)(L.oX.VOLUME),p=s===W.Qeo.V3,u={address:(null===(a=e)||void 0===a?void 0:a.address)??"",chain:n,duration:(0,V.uw)(l),isV3:p},h=function(e,t,i,o,n){var s,a,l;const{data:r,loading:d}=(0,W.TNW)({variables:e});return(0,m.useMemo)((()=>{var e,s,a;const{priceHistory:l}=(null===(e=r)||void 0===e?void 0:e.v2Pair)??(null===(s=r)||void 0===s?void 0:s.v3Pool)??{},c=n?i:o,p=(null===(a=l)||void 0===a?void 0:a.filter((e=>null!==e)).map((e=>{var i,o,n,s;const a=(null===(i=t)||void 0===i?void 0:i.token0.address)===(null===(o=c)||void 0===o?void 0:o.address.toLowerCase())?null===(n=e)||void 0===n?void 0:n.token0Price:null===(s=e)||void 0===s?void 0:s.token1Price;return{time:e.timestamp,value:a,open:a,high:a,low:a,close:a}})))??[],u=d||!l?R.x1.INVALID:R.x1.VALID;return{chartType:L.oX.PRICE,entries:p,loading:d,dataQuality:u}}),[null===(s=r)||void 0===s?void 0:s.v2Pair,null===(a=r)||void 0===a?void 0:a.v3Pool,n,d,null===(l=t)||void 0===l?void 0:l.token0.address,i,o])}(u,e,t,i,o),v=function(e){var t,i;const{data:o,loading:n}=(0,W.hzq)({variables:e});return(0,m.useMemo)((()=>{var t,i,s;const{historicalVolume:a}=(null===(t=o)||void 0===t?void 0:t.v2Pair)??(null===(i=o)||void 0===i?void 0:i.v3Pool)??{},l=(null===(s=a)||void 0===s?void 0:s.filter((e=>null!==e)).map(R.Yz))??[],r=(0,R.q6)(l,L.oX.VOLUME,e.duration);return{chartType:L.oX.VOLUME,entries:l,loading:n,dataQuality:r}}),[null===(t=o)||void 0===t?void 0:t.v2Pair,null===(i=o)||void 0===i?void 0:i.v3Pool,n,e.duration])}(u);return(0,m.useMemo)((()=>{const e=(()=>{switch(d){case L.oX.PRICE:return h;case L.oX.VOLUME:return v;case L.oX.LIQUIDITY:return{chartType:L.oX.LIQUIDITY,entries:[],loading:!1,dataQuality:R.x1.VALID}}})();return{timePeriod:l,setTimePeriod:r,setChartType:c,activeQuery:e}}),[d,v,h,l])}function ie(e){var t,i,n,s,a,r;const[d,c]=[(null===(t=e.poolData)||void 0===t?void 0:t.token0)&&(0,V.Pc)(e.poolData.token0),(null===(i=e.poolData)||void 0===i?void 0:i.token1)&&(0,V.Pc)(e.poolData.token1)],{setChartType:p,timePeriod:u,setTimePeriod:h,activeQuery:v}=te(e.poolData,null===(n=d)||void 0===n?void 0:n.wrapped,null===(s=c)||void 0===s?void 0:s.wrapped,e.isReversed,e.chain??W.qop.Ethereum,(null===(a=e.poolData)||void 0===a?void 0:a.protocolVersion)??W.Qeo.V3),x=(0,Z.Dv)(N.N),f=e.loading||v.chartType!==L.oX.LIQUIDITY&&(null===(r=v)||void 0===r?void 0:r.loading),k=(()=>{if(!d||!c||!e.poolData||!e.chain)return(0,o.jsx)(_.M,{type:v.chartType,height:G});const t={...e,feeTier:Number(e.poolData.feeTier),height:G,timePeriod:u,tokenA:d.wrapped,tokenB:c.wrapped,chainId:(0,V.Tz)(e.chain)??l.ChainId.MAINNET};if(v.chartType===L.oX.LIQUIDITY)return(0,o.jsx)(de,{...t});if(v.dataQuality===R.x1.INVALID||!d||!c){const e=f?void 0:(0,o.jsx)(F.cC,{children:"Unable to display historical data for the current pool."});return(0,o.jsx)(_.M,{type:v.chartType,height:G,errorText:e})}const i=v.dataQuality===R.x1.STALE;switch(v.chartType){case L.oX.PRICE:return(0,o.jsx)(se,{...t,data:v.entries,stale:i});case L.oX.VOLUME:return(0,o.jsx)($.x,{...t,data:v.entries,stale:i})}})(),g=(0,m.useMemo)((()=>v.chartType===L.oX.PRICE?U.Bz.filter((e=>e.value!==O._u.HOUR)):U.Bz),[v.chartType]);return(0,o.jsxs)("div",{"data-testid":"pdp-chart-container",children:[k,(0,o.jsxs)(U.Os,{children:[(0,o.jsx)(ee,{chartType:v.chartType,onChartTypeChange:p}),v.chartType!==L.oX.LIQUIDITY&&(0,o.jsx)(Y,{children:(0,o.jsx)(E.Z,{options:g,currentSelected:O.rD[u],onSelectOption:e=>{const t=(0,O.Wz)(e);var i;t===u?null===(i=x)||void 0===i||i():h(t)}})})]})]})}const oe=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__PriceDisplayContainer",componentId:"sc-30ba6815-3"})`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,ne=(0,X.default)(H.Tv.HeadlineMedium).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__ChartPriceText",componentId:"sc-30ba6815-4"})`
  ${H.cw}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function se({tokenA:e,tokenB:t,isReversed:i,data:n,stale:s}){const{formatCurrencyAmount:a,formatPrice:r}=(0,x.Gb)(),[c,p]=i?[t,e]:[e,t],u=(0,m.useMemo)((()=>({data:n,stale:s,type:L.E4.LINE})),[n,s]),h=(0,q.ZP)(c),v=n[n.length-1];return(0,o.jsx)(J,{Model:S.r4,params:u,children:e=>{var t;const i=e??v,s=Math.floor((i.value??i.close)*10**p.decimals),u=(0,o.jsxs)(oe,{children:[(0,o.jsx)(ne,{children:`1 ${c.symbol} = ${a({amount:l.CurrencyAmount.fromRawAmount(p,s)})} \n            ${p.symbol}`}),(0,o.jsx)(ne,{color:"neutral2",children:h?"("+r({price:h})+")":""})]});return(0,o.jsx)(d._,{value:u,additionalFields:(0,o.jsx)(S.Tg,{startingPrice:n[0],endingPrice:i}),valueFormatterType:x.sw.FiatTokenPrice,time:null===(t=e)||void 0===t?void 0:t.time})}})}const ae=(0,X.default)(H.Tv.H1Medium).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__FadeInHeading",componentId:"sc-30ba6815-5"})`
  ${z.Sj};
  line-height: 32px;
`,le=(0,X.default)(H.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__FadeInSubheader",componentId:"sc-30ba6815-6"})`
  ${z.Sj}
`;function re({data:e,tokenADescriptor:t,tokenBDescriptor:i,currentTick:n}){const{formatNumber:s}=(0,x.Gb)();if(!n)return null;const a=e.tick>=n?s({input:e.amount0Locked,type:x.sw.TokenQuantityStats}):0,l=e.tick<=n?s({input:e.amount1Locked,type:x.sw.TokenQuantityStats}):0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(H.Tv.BodySmall,{children:(0,F.t)("{{token}} liquidity: {{name}}",{token:t,name:a})}),(0,o.jsx)(H.Tv.BodySmall,{children:(0,F.t)("{{token}} liquidity: {{name}}",{token:i,name:l})})]})}function de({tokenA:e,tokenB:t,feeTier:i,isReversed:n,chainId:s}){const a=e.symbol??e.name??F.t`Token A`,l=t.symbol??t.name??F.t`Token B`,{tickData:c,activeTick:p,loading:u}=A({tokenA:e,tokenB:t,feeTier:i,isReversed:n,chainId:s}),h=(0,X.useTheme)(),v=(0,m.useMemo)((()=>{var e,t;return{data:(null===(e=c)||void 0===e?void 0:e.barData)??[],tokenAColor:n?h.token1:h.token0,tokenBColor:n?h.token0:h.token1,highlightColor:h.surface3,activeTick:p,activeTickProgress:null===(t=c)||void 0===t?void 0:t.activeRangePercentage}}),[p,n,h,c]);return u?(0,o.jsx)(M.sT,{}):(0,o.jsx)(J,{Model:P,params:v,TooltipBody:i!==r.FeeAmount.LOWEST?({data:e})=>{var t,i;return(0,o.jsx)(re,{data:e,tokenADescriptor:a,tokenBDescriptor:l,currentTick:null===(i=c)||void 0===i||null===(t=i.activeRangeData)||void 0===t?void 0:t.tick})}:void 0,children:e=>{var t,i,n;const s=e??(null===(t=c)||void 0===t?void 0:t.activeRangeData),r=(0,o.jsxs)("div",{children:[(0,o.jsx)(ae,{children:`1 ${a} = ${null===(i=s)||void 0===i?void 0:i.price0} ${l}`}),(0,o.jsx)(ae,{children:`1 ${l} = ${null===(n=s)||void 0===n?void 0:n.price1} ${a}`}),s&&s.tick===p&&(0,o.jsx)(le,{color:"neutral2",paddingTop:"4px",children:(0,o.jsx)(F.cC,{children:"Active tick range"})})]});return(0,o.jsx)(d._,{value:r})}})}var ce=i(98961),pe=i(3167),ue=i(18124),he=i(5319),ve=i(23532),me=i(5967),xe=i(94284),fe=i(22717),ke=i(75495),ge=i(41886),we=i(82743),ye=i(13820),be=i(64370),Pe=i(97341),je=i(30520),Ce=i(51578),Te=i(48111),Ie=i(43454),De=i(13446),Ae=i(54703),_e=i(47841),Se=i(57852);const Ne=(0,X.default)(we.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\shared__DetailBubble",componentId:"sc-c2245840-0"})`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,$e=(0,X.default)(we.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\shared__SmallDetailBubble",componentId:"sc-c2245840-1"})`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`,Le=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__HeaderContainer",componentId:"sc-34ab3f22-0"})`
  display: flex;
  justify-content: space-between;
  align-items: 'flex-start';
  width: 100%;
  ${z.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,Ee=(0,X.default)(H.Tv.LabelMicro).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__Badge",componentId:"sc-34ab3f22-1"})`
  background: ${({theme:e})=>e.surface2};
  padding: 2px 6px;
  border-radius: 4px;
`,Ue=(0,X.default)(ve.o).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__ToggleReverseArrows",componentId:"sc-34ab3f22-2"})`
  ${H.iV}
  fill: ${({theme:e})=>e.neutral2};
`,Be=(0,X.default)(we.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__IconBubble",componentId:"sc-34ab3f22-3"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function Re({chainId:e,poolAddress:t,token0:i,token1:n,loading:s}){var a,l;const r=(0,Se.tq)({chainId:e,withFallback:!0}),d=`/explore/${r.toLowerCase()}`,c=`/explore/pools/${r.toLowerCase()}`;return(0,o.jsxs)(ce.zG,{"aria-label":"breadcrumb-nav",children:[(0,o.jsxs)(ce.yY,{to:d,children:[(0,o.jsx)(F.cC,{children:"Explore"})," ",(0,o.jsx)(Ce.Z,{size:14})]}),(0,o.jsxs)(ce.yY,{to:c,children:[(0,o.jsx)(F.cC,{children:"Pools"})," ",(0,o.jsx)(Ce.Z,{size:14})]}),s||!t?(0,o.jsx)(Ne,{$width:200}):(0,o.jsx)(ce.f3,{address:t,poolName:`${null===(a=i)||void 0===a?void 0:a.symbol} / ${null===(l=n)||void 0===l?void 0:l.symbol}`})]})}const Me=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__StyledPoolDetailsTitle",componentId:"sc-34ab3f22-4"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: max-content;
  align-items: center;
`,Oe=(0,X.default)(H.Tv.HeadlineMedium).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__PoolName",componentId:"sc-34ab3f22-5"})`
  font-size: 24px !important;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
`,Ve=({token0:e,token1:t,chainId:i,feeTier:n,protocolVersion:s,toggleReversed:a})=>{var r,d,c,p;const{formatPercent:u}=(0,x.Gb)(),h=n&&u(new l.Percent(n,100*ye.PM));return(0,o.jsxs)(Me,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)(Oe,{children:[(0,o.jsx)(He,{to:(0,V.dG)({address:null===(r=e)||void 0===r?void 0:r.address,chain:(0,Se.tq)({chainId:i,withFallback:!0})}),children:null===(d=e)||void 0===d?void 0:d.symbol}),"\xa0/\xa0",(0,o.jsx)(He,{to:(0,V.dG)({address:null===(c=t)||void 0===c?void 0:c.address,chain:(0,Se.tq)({chainId:i,withFallback:!0})}),children:null===(p=t)||void 0===p?void 0:p.symbol})]})}),s===W.Qeo.V2&&(0,o.jsx)(Ee,{children:"v2"}),!!h&&(0,o.jsx)(Ee,{children:h}),(0,o.jsx)(Ue,{"data-testid":"toggle-tokens-reverse-arrows",onClick:a})]})},qe=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__ContractsDropdownRowContainer",componentId:"sc-34ab3f22-6"})`
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Fe=({address:e,chainId:t,tokens:i})=>{var n;const s=(0,X.useTheme)(),a=i[0]&&(0,V.Pc)(i[0]),l=2===i.length,r=l&&i[1]?[a,(0,V.Pc)(i[1])]:[a],d=e===be.dt,c=t&&e&&(0,Ae.E)(t,e,d?Ae.r.NATIVE:l?Ae.r.ADDRESS:Ae.r.TOKEN);return t&&c?(0,o.jsx)(ke.B,{href:c,children:(0,o.jsxs)(qe,{children:[(0,o.jsxs)(xe.ZP,{gap:"sm",children:[l?(0,o.jsx)(_e.io,{chainId:t,currencies:r,size:24}):(0,o.jsx)(me.Z,{currency:a,size:24}),(0,o.jsx)(H.Tv.BodyPrimary,{children:l?(0,o.jsx)(F.cC,{children:"Pool"}):null===(n=i[0])||void 0===n?void 0:n.symbol}),(0,o.jsx)(H.Tv.BodySecondary,{children:(0,De.Xn)(e)})]}),(0,o.jsx)(Te.Z,{size:"16px",stroke:s.neutral2})]})}):(0,o.jsx)(qe,{children:(0,o.jsx)(Ne,{$width:117})})},Ze=X.css`
  ${ge.jF}
  min-width: 235px;
  border-radius: 16px;
  ${H.cw}
`,Xe=({chainId:e,poolAddress:t,poolName:i,token0:n,token1:s})=>{var a,r;const d=(0,X.useTheme)(),[c,p]=(0,m.useReducer)((e=>!e),!1),u=(0,m.useRef)(null);return(0,je.t)(u,c?p:void 0),(0,o.jsxs)(xe.ZP,{width:"max-content",justify:"flex-end",gap:"sm",children:[(0,o.jsx)("div",{style:{position:"relative"},ref:u,children:(0,o.jsx)(pe.ud,{isOpen:c,toggleOpen:p,menuLabel:e===l.ChainId.MAINNET?(0,o.jsx)(ue.P,{width:"18px",height:"18px",fill:d.neutral1}):(0,o.jsx)(he.J,{width:"18px",height:"18px",fill:d.neutral1}),internalMenuItems:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Fe,{address:t,chainId:e,tokens:[n,s]}),(0,o.jsx)(Fe,{address:null===(a=n)||void 0===a?void 0:a.address,chainId:e,tokens:[n]}),(0,o.jsx)(Fe,{address:null===(r=s)||void 0===r?void 0:r.address,chainId:e,tokens:[s]})]}),tooltipText:F.t`Explorers`,hideChevron:!0,buttonCss:ge.TX,menuFlyoutCss:Ze})}),(0,o.jsx)(fe.Z,{name:i})]})},He=(0,X.default)(Ie.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__StyledLink",componentId:"sc-34ab3f22-7"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${H.iV}
`;function ze({chainId:e,poolAddress:t,token0:i,token1:n,feeTier:s,protocolVersion:l,toggleReversed:r,loading:d}){var c,p;const u=!(0,Pe.eI)().sm,h=`${null===(c=i)||void 0===c?void 0:c.symbol} / ${null===(p=n)||void 0===p?void 0:p.symbol}`,v=(0,m.useMemo)((()=>i&&n?[(0,V.Pc)(i),(0,V.Pc)(n)]:[]),[i,n]);return d?(0,o.jsx)(Le,{"data-testid":"pdp-header-loading-skeleton",children:u?(0,o.jsxs)(a.ZP,{gap:"sm",style:{width:"100%"},children:[(0,o.jsx)(Be,{}),(0,o.jsx)(Ne,{$height:40,$width:137})]}):(0,o.jsxs)(xe.ZP,{gap:"sm",children:[(0,o.jsx)(Be,{}),(0,o.jsx)(Ne,{$height:40,$width:137})]})}):(0,o.jsx)(Le,{children:u?(0,o.jsxs)(a.ZP,{gap:"sm",style:{width:"100%"},children:[(0,o.jsxs)(xe.ZP,{gap:"md",justify:"space-between",children:[e&&(0,o.jsx)(_e.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,o.jsx)(Xe,{chainId:e,poolAddress:t,poolName:h,token0:i,token1:n})]}),(0,o.jsx)(Ve,{token0:i,token1:n,chainId:e,feeTier:s,protocolVersion:l,toggleReversed:r})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(xe.ZP,{gap:"md",children:[e&&(0,o.jsx)(_e.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,o.jsx)(Ve,{token0:i,token1:n,chainId:e,feeTier:s,protocolVersion:l,toggleReversed:r})]}),(0,o.jsx)(Xe,{chainId:e,poolAddress:t,poolName:h,token0:i,token1:n})]})})}var We=i(86059),Ge=i(50333),Qe=i(94191),Ye=i(6282),Ke=i(66869);const Je=(0,X.default)(H.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__TokenName",componentId:"sc-b13554a5-0"})`
  display: none;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    display: block;
  }
  ${H.cw}
`,et=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__TokenTextWrapper",componentId:"sc-b13554a5-1"})`
  gap: 8px;
  margin-right: 12px;
  ${H.cw}
  ${({isClickable:e})=>e&&H.iV}
`,tt=(0,X.default)(H.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__SymbolText",componentId:"sc-b13554a5-2"})`
  flex-shrink: 0;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,it=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__CopyAddress",componentId:"sc-b13554a5-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${H.iV}
`,ot=(0,X.default)(Qe.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__StyledCopyIcon",componentId:"sc-b13554a5-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,nt=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__ExplorerWrapper",componentId:"sc-b13554a5-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${H.iV}
`,st=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__ButtonsRow",componentId:"sc-b13554a5-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function at({address:e,chainId:t,tokens:i,loading:n}){var s,a,r,d,c,p,u;const h=(0,X.useTheme)(),v=e===be.dt,x=i[0]&&(0,V.Pc)(i[0]),[f,k]=(0,Ge.Z)(),g=(0,m.useCallback)((()=>{const t=(0,De.UJ)(e);t&&k(t)}),[e,k]),w=2===i.length,y=w&&i[1]?[x,(0,V.Pc)(i[1])]:[x],b=e&&t&&(0,Ae.E)(t,e,v?Ae.r.NATIVE:w?Ae.r.ADDRESS:Ae.r.TOKEN),P=(0,Ye.s0)(),j=(0,Se.tq)({chainId:t,withFallback:!0}),C=(0,m.useCallback)((()=>{var e;w||P((0,V.dG)({address:null===(e=i[0])||void 0===e?void 0:e.address,chain:j}))}),[P,i,w,j]),[T,I]=(0,m.useState)(!1),D=(0,m.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&I((e=>e?"both":"start"))}}),[T]);return!n&&e&&t?(0,o.jsxs)(xe.ZP,{align:"space-between",children:[(0,o.jsxs)(et,{"data-testid":w?`pdp-pool-logo-${null===(s=i[0])||void 0===s?void 0:s.symbol}-${null===(a=i[1])||void 0===a?void 0:a.symbol}`:`pdp-token-logo-${null===(r=i[0])||void 0===r?void 0:r.symbol}`,isClickable:!w,onClick:C,ref:D,children:[w?(0,o.jsx)(_e.io,{chainId:t,currencies:y,size:20}):(0,o.jsx)(me.Z,{currency:x,size:20}),(0,o.jsx)(Je,{children:w?(0,o.jsx)(F.cC,{children:"Pool"}):null===(d=i[0])||void 0===d?void 0:d.name}),(0,o.jsx)(tt,{children:w?`${null===(c=i[0])||void 0===c?void 0:c.symbol} / ${null===(p=i[1])||void 0===p?void 0:p.symbol}`:(0,o.jsxs)(xe.ZP,{gap:"4px",children:[null===(u=i[0])||void 0===u?void 0:u.symbol," ",(0,o.jsx)(Ce.Z,{size:16,color:h.neutral2})]})})]}),(0,o.jsxs)(st,{children:[!v&&(0,o.jsx)(We.ZP,{placement:"bottom",size:We.Oz.Max,show:f,text:F.t`Copied`,children:(0,o.jsxs)(it,{"data-testid":`copy-address-${e}`,onClick:g,children:[(0,De.Xn)(e,T?2:void 0,"both"===T?2:void 0),(0,o.jsx)(ot,{})]})}),b&&(0,o.jsx)(H.dL,{href:b,"data-testid":`explorer-url-${b}`,children:(0,o.jsx)(nt,{children:t===l.ChainId.MAINNET?(0,o.jsx)(ue.P,{width:"16px",height:"16px",fill:h.neutral1}):(0,o.jsx)(he.J,{width:"16px",height:"16px",fill:h.neutral1})})})]})]}):(0,o.jsxs)(xe.ZP,{gap:"8px",padding:"6px 0px",children:[(0,o.jsx)($e,{}),(0,o.jsx)(Ne,{$width:117})]})}var lt=i(19478),rt=i(39671),dt=i(22953);const ct=(0,X.default)(dt.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__HeaderText",componentId:"sc-3c01d155-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
  }
`,pt=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatsWrapper",componentId:"sc-3c01d155-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,ut=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatItemColumn",componentId:"sc-3c01d155-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${Ke.j$.sm}px) {
    min-width: 150px;
  }
`,ht=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-3c01d155-3"})`
  justify-content: space-between;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
  }
`,vt=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-3c01d155-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,mt=(0,X.default)(Ie.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StyledLink",componentId:"sc-3c01d155-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${H.iV}
`,xt=X.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,ft=X.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,kt=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__BalanceChartSide",componentId:"sc-3c01d155-6"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?xt:ft}
`,gt=(0,X.default)(we.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatSectionBubble",componentId:"sc-3c01d155-7"})`
  width: 180px;
  height: 40px;
`,wt=(0,X.default)(we.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatHeaderBubble",componentId:"sc-3c01d155-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,yt=({token:e,chainId:t})=>{var i;const n=(0,Pe.eI)().lg,{formatNumber:s}=(0,x.Gb)(),a=t?(0,V.vR)(t,e):e,l=(null===(i=a)||void 0===i?void 0:i.address)===be.dt&&t?(0,be.gX)(t):e.currency;return(0,o.jsxs)(vt,{children:[!n&&(0,o.jsx)(me.Z,{currency:l,size:20,style:{marginRight:"8px"}}),s({input:e.tvl,type:x.sw.TokenQuantityStats}),"\xa0",(0,o.jsxs)(mt,{to:(0,V.dG)({address:a.address,chain:(0,Se.tq)({chainId:t,withFallback:!0})}),children:[n&&(0,o.jsx)(me.Z,{currency:l,size:16,style:{marginRight:"4px",marginLeft:"4px"}}),a.symbol]})]})};function bt({poolData:e,isReversed:t,chainId:i,loading:n}){var s,l,r,d,c,p,u,h;const v=(0,Pe.eI)().lg,x=(0,X.useTheme)(),f=(0,rt.U8)(null===(l=e)||void 0===l||null===(s=l.token0)||void 0===s?void 0:s.address,i),k=(0,rt.U8)(null===(d=e)||void 0===d||null===(r=d.token1)||void 0===r?void 0:r.address,i),[g,w]=(0,m.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var i,o,n,s,a,l,r,d,c,p,u,h,v,m;const x=(null===(i=e)||void 0===i?void 0:i.tvlToken0)*(null===(o=e)||void 0===o?void 0:o.token0Price)+(null===(n=e)||void 0===n?void 0:n.tvlToken1)*(null===(s=e)||void 0===s?void 0:s.token1Price),g={...null===(a=e)||void 0===a?void 0:a.token0,price:null===(l=e)||void 0===l?void 0:l.token0Price,tvl:null===(r=e)||void 0===r?void 0:r.tvlToken0,percent:(null===(d=e)||void 0===d?void 0:d.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/x,currency:f},w={...null===(p=e)||void 0===p?void 0:p.token1,price:null===(u=e)||void 0===u?void 0:u.token1Price,tvl:null===(h=e)||void 0===h?void 0:h.tvlToken1,percent:(null===(v=e)||void 0===v?void 0:v.tvlToken1)*(null===(m=e)||void 0===m?void 0:m.token1Price)/x,currency:k};return t?[w,g]:[g,w]}return[void 0,void 0]}),[f,k,t,e]);return!n&&g&&w&&e?(0,o.jsxs)(pt,{loaded:!0,children:[(0,o.jsx)(ct,{children:(0,o.jsx)(F.cC,{children:"Stats"})}),(0,o.jsxs)(ut,{children:[(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(F.cC,{children:"Pool balances"})}),(0,o.jsxs)(ht,{children:[(0,o.jsx)(yt,{token:g,chainId:i}),(0,o.jsx)(yt,{token:w,chainId:i})]}),v&&(0,o.jsxs)(xe.ZP,{"data-testid":"pool-balance-chart",children:[(0,o.jsx)(kt,{percent:g.percent,$color:x.token0,isLeft:!0}),(0,o.jsx)(kt,{percent:w.percent,$color:x.token1,isLeft:!1})]})]}),(null===(c=e)||void 0===c?void 0:c.tvlUSD)&&(0,o.jsx)(Ct,{title:(0,o.jsx)(F.cC,{children:"TVL"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(p=e)||void 0===p?void 0:p.volumeUSD24H)&&(0,o.jsx)(Ct,{title:(0,o.jsx)(F.cC,{children:"24H volume"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(u=e)||void 0===u?void 0:u.volumeUSD24H)&&void 0!==(null===(h=e)||void 0===h?void 0:h.feeTier)&&(0,o.jsx)(Ct,{title:(0,o.jsx)(F.cC,{children:"24H fees"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,o.jsxs)(pt,{children:[(0,o.jsx)(ct,{children:(0,o.jsx)(wt,{})}),Array.from({length:4}).map(((e,t)=>(0,o.jsxs)(a.ZP,{gap:"md",children:[(0,o.jsx)(Ne,{}),(0,o.jsx)(gt,{})]},`loading-info-row-${t}`)))]})}const Pt=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatsTextContainer",componentId:"sc-3c01d155-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,jt=(0,X.default)(dt.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatItemText",componentId:"sc-3c01d155-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function Ct({title:e,value:t,delta:i}){const{formatNumber:n,formatDelta:s}=(0,x.Gb)();return(0,o.jsxs)(ut,{children:[(0,o.jsx)(H.Tv.BodySecondary,{children:e}),(0,o.jsxs)(Pt,{children:[(0,o.jsx)(jt,{children:n({input:t,type:x.sw.FiatTokenStats})}),!!i&&(0,o.jsxs)(xe.ZP,{width:"max-content",padding:"4px 0px",children:[(0,o.jsx)(lt.Kx,{delta:i}),(0,o.jsx)(H.Tv.BodySecondary,{children:s(i)})]})]})]})}var Tt=i(26729),It=i(56708),Dt=i(91216),At=i(69924),_t=i(56536),St=i(79833),Nt=i(80149),$t=i(93741),Lt=i(83102),Et=i(32972),Ut=i(63194),Bt=i(57809),Rt=i(62652),Mt=i(62587),Ot=i(17202);function Vt(e,t,i,o,n,s,a){try{var l=e[s](a),r=l.value}catch(d){return void i(d)}l.done?t(r):Promise.resolve(r).then(o,n)}const qt=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-879ff902-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${Ke.j$.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${Mt.k.sticky};
  }
  @media (max-width: ${Ke.j$.md}px) {
    bottom: 56px;
  }
`,Ft=X.default.button.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__PoolButton",componentId:"sc-879ff902-1"})`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({$open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,$open:t})=>t?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:t})=>t?e.surface1:(0,Rt.jb)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:t})=>t&&`1px solid ${e.surface3}`};
  ${H.iV}
  @media (max-width: ${Ke.j$.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  }
  @media (max-width: ${Ke.j$.sm}px) {
    display: ${({$hideOnMobile:e})=>e&&"none"};
    width: ${({$fixedWidth:e})=>!e&&"100%"};
  }
`,Zt=(0,X.default)(ve.o).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__SwapIcon",componentId:"sc-879ff902-2"})`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,Xt=(0,X.default)(we.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-879ff902-3"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Ht=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__SwapModalWrapper",componentId:"sc-879ff902-4"})`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${_t.R0} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${At.Vt} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${Ke.j$.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${Mt.k.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`,zt=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__MobileBalance",componentId:"sc-879ff902-5"})`
  gap: 2px;
  display: none;
  @media (max-width: ${Ke.j$.lg}px) {
    display: flex;
  }
`;function Wt({chainId:e,token0:t,token1:i,feeTier:n,loading:s}){var l,r,d,c,p,u,h,v,f,k;const{chainId:g,account:w}=(0,Tt.G)(),{positions:y}=(0,Dt.Z)(w??"",e?[e]:void 0),b=y&&function(e,t,i,o){var n;return null===(n=e)||void 0===n?void 0:n.find((e=>{var n,s,a,l,r,d,c,p,u;return((null===(n=e)||void 0===n?void 0:n.details.token0.toLowerCase())===(null===(s=t)||void 0===s?void 0:s.address)||(null===(a=e)||void 0===a?void 0:a.details.token0.toLowerCase())===(null===(l=i)||void 0===l?void 0:l.address))&&((null===(r=e)||void 0===r?void 0:r.details.token1.toLowerCase())===(null===(d=t)||void 0===d?void 0:d.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(p=i)||void 0===p?void 0:p.address))&&(null===(u=e)||void 0===u?void 0:u.details.fee)==o&&!e.closed}))}(y,t,i,n),P=null===(l=b)||void 0===l?void 0:l.details.tokenId,j=(0,Lt.o)(),C=(0,Ye.s0)(),T=t&&(0,V.Pc)(t),I=i&&(0,V.Pc)(i),{data:D}=(0,$t.vv)(),{balance0:A,balance1:_,balance0Fiat:S,balance1Fiat:N}=(0,m.useMemo)((()=>{var o,n,s,a,l,r,d,c,p,u,h,v;const m=null===(a=D)||void 0===a||null===(s=a.portfolios)||void 0===s||null===(n=s[0])||void 0===n||null===(o=n.tokenBalances)||void 0===o?void 0:o.filter((t=>{var i,o;return(null===(o=t)||void 0===o||null===(i=o.token)||void 0===i?void 0:i.chain)===(0,Se.tq)({chainId:e,withFallback:!0})})),x=null===(l=m)||void 0===l?void 0:l.find((e=>{var i,o,n;return(null===(o=e)||void 0===o||null===(i=o.token)||void 0===i?void 0:i.address)===(null===(n=t)||void 0===n?void 0:n.address)})),f=null===(r=m)||void 0===r?void 0:r.find((e=>{var t,o,n;return(null===(o=e)||void 0===o||null===(t=o.token)||void 0===t?void 0:t.address)===(null===(n=i)||void 0===n?void 0:n.address)}));return{balance0:(null===(d=x)||void 0===d?void 0:d.quantity)??0,balance1:(null===(c=f)||void 0===c?void 0:c.quantity)??0,balance0Fiat:(null===(u=x)||void 0===u||null===(p=u.denominatedValue)||void 0===p?void 0:p.value)??0,balance1Fiat:(null===(v=f)||void 0===v||null===(h=v.denominatedValue)||void 0===h?void 0:h.value)??0}}),[null===(r=D)||void 0===r?void 0:r.portfolios,e,null===(d=t)||void 0===d?void 0:d.address,null===(c=i)||void 0===c?void 0:c.address]),{formatNumber:$}=(0,x.Gb)(),L=$({input:A,type:x.sw.TokenNonTx}),E=$({input:_,type:x.sw.TokenNonTx}),U=S+N,B=$({input:U,type:x.sw.PortfolioBalance}),R=function(){var t,i=(t=function*(){T&&I&&(g!==e&&e&&(yield j(e)),C(`/add/${(0,Ot.H)(T)}/${(0,Ot.H)(I)}/${n}${P?`/${P}`:""}`))},function(){var e=this,i=arguments;return new Promise((function(o,n){var s=t.apply(e,i);function a(e){Vt(s,o,n,a,l,"next",e)}function l(e){Vt(s,o,n,a,l,"throw",e)}a(void 0)}))});return function(){return i.apply(this,arguments)}}(),[M,O]=(0,m.useReducer)((e=>!e),!1),q=(0,Pe.eI)(),Z=q.lg,X=!q.sm,z=(0,Nt.Xp)(null===(p=t)||void 0===p?void 0:p.address,e),W=(0,Nt.Xp)(null===(u=i)||void 0===u?void 0:u.address,e),G=(0,Nt.em)(z,W);return!s&&T&&I?(0,o.jsxs)(a.ZP,{gap:"lg",children:[(0,o.jsxs)(qt,{children:[w&&(0,o.jsxs)(zt,{children:[(0,o.jsx)(H.Tv.SubHeaderSmall,{children:(0,o.jsx)(F.cC,{children:"Your balances"})}),(0,o.jsxs)(xe.ZP,{gap:"8px",children:[(0,o.jsxs)(H.Tv.HeadlineSmall,{children:[L," ",T.symbol]}),(0,o.jsx)(H.Tv.HeadlineSmall,{color:"neutral3",children:"|"}),(0,o.jsxs)(H.Tv.HeadlineSmall,{children:[E," ",I.symbol]}),Boolean(U)&&!X&&(0,o.jsxs)(H.Tv.Caption,{children:["(",B,")"]})]})]}),(0,o.jsx)(Ft,{onClick:O,$open:M,$fixedWidth:Boolean(w),"data-testid":`pool-details-${M?"close":"swap"}-button`,children:M?(0,o.jsxs)(o.Fragment,{children:[Z&&(0,o.jsx)(Ut.Z,{size:20}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(F.cC,{children:"Close"})})]}):(0,o.jsxs)(o.Fragment,{children:[Z&&(0,o.jsx)(Zt,{}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(F.cC,{children:"Swap"})})]})}),(0,o.jsxs)(Ft,{onClick:R,"data-testid":"pool-details-add-liquidity-button",$fixedWidth:Boolean(w),$hideOnMobile:!0,children:[Z&&(0,o.jsx)(Bt.Z,{size:20}),(0,o.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,o.jsx)(F.cC,{children:"Add liquidity"})})]})]}),(0,o.jsxs)(Ht,{open:M,"data-testid":"pool-details-swap-modal",children:[(0,o.jsx)(Et.HY,{syncTabToUrl:!1,chainId:e,initialInputCurrency:T,initialOutputCurrency:I,compact:!0,disableTokenInputs:e!==g}),Boolean(G)&&(0,o.jsx)(St.Z,{tokenAddress:(G===z?null===(h=t)||void 0===h?void 0:h.address:null===(v=i)||void 0===v?void 0:v.address)??"",warning:G??Nt.Jf,plural:Boolean(z&&W),tokenSymbol:G===z?null===(f=t)||void 0===f?void 0:f.symbol:null===(k=i)||void 0===k?void 0:k.symbol})]}),(0,o.jsx)(It.Z,{$open:M&&!Z,$maxWidth:Ke.j$.lg,$zIndex:Mt.k.sticky,onClick:O})]}):(0,o.jsxs)(qt,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,o.jsx)(zt,{children:(0,o.jsx)(Xt,{})}),(0,o.jsx)(Xt,{}),(0,o.jsx)(Xt,{})]})}const Gt=e=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,o.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,o.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,o.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Qt=i(57221),Yt=i(31744);function Kt(e,t,i,o,n,s,a){try{var l=e[s](a),r=l.value}catch(d){return void i(d)}l.done?t(r):Promise.resolve(r).then(o,n)}function Jt(e){return function(){var t=this,i=arguments;return new Promise((function(o,n){var s=e.apply(t,i);function a(e){Kt(s,o,n,a,l,"next",e)}function l(e){Kt(s,o,n,a,l,"throw",e)}a(void 0)}))}}const ei=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-2d8ae14b-0"})`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,ti=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__PositionWrapper",componentId:"sc-2d8ae14b-1"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${H.iV}
  padding: 16px;
`,ii=(0,X.default)(H.Tv.LabelMicro).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__FeeTier",componentId:"sc-2d8ae14b-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,oi=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-2d8ae14b-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color: ${({theme:e,status:t})=>t===ri.IN_RANGE?e.success:t===ri.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,ni=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-2d8ae14b-4"})`
  gap: 10px;

  @media screen and (max-width: ${Ke.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,si=(0,X.default)((e=>(0,o.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-2d8ae14b-5"})`
  @media screen and (max-width: ${Ke.j$.sm}px) {
    display: none;
  }
`,ai=(0,X.default)(H.Tv.Caption).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__RangeText",componentId:"sc-2d8ae14b-6"})`
  width: max-content;
  white-space: nowrap;
`,li=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StyledDot",componentId:"sc-2d8ae14b-7"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;var ri;function di({positionInfo:e}){const t=[(0,rt.U8)(e.details.token0,e.chainId),(0,rt.U8)(e.details.token1,e.chainId)],{chainId:i}=(0,Tt.G)(),n=(0,Ye.s0)(),s=(0,Lt.o)(),a=(0,X.useTheme)(),{formatTickPrice:l}=(0,x.Gb)(),r=(0,m.useCallback)(Jt((function*(){i!==e.chainId&&(yield s(e.chainId)),n("/pool/"+e.details.tokenId)})),[n,e.chainId,e.details.tokenId,s,i]),d=e.inRange?ri.IN_RANGE:e.closed?ri.CLOSED:ri.OUT_OF_RANGE,c=e.position.token0PriceLower.invert(),p=e.position.token0PriceUpper.invert(),u={LOWER:0===parseFloat(p.toFixed(0)),UPPER:parseFloat(c.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,o.jsxs)(ti,{onClick:r,children:[(0,o.jsxs)(xe.ZP,{gap:"8px",children:[(0,o.jsx)(_e.ge,{currencies:t,size:16}),(0,o.jsxs)(H.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,o.jsxs)(ii,{children:[e.pool.fee/ye.PM,"%"]}),(0,o.jsxs)(oi,{status:d,children:[(0,o.jsx)(H.Tv.Caption,{color:"inherit",children:d}),d===ri.IN_RANGE&&(0,o.jsx)(li,{}),d===ri.OUT_OF_RANGE&&(0,o.jsx)(Qt.Z,{size:12,color:a.deprecated_accentWarning}),d===ri.CLOSED&&(0,o.jsx)(Gt,{})]})]}),(0,o.jsxs)(ni,{children:[(0,o.jsxs)(ai,{"data-testid":`position-min-${p.toFixed(0)}`,children:[(0,o.jsx)(F.cC,{children:"Min:"}),"\xa0",l({price:p,atLimit:u,direction:Yt.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,o.jsx)(F.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]}),(0,o.jsx)(si,{}),(0,o.jsxs)(ai,{"data-testid":`position-max-${c.toFixed(0)}`,children:[(0,o.jsx)(F.cC,{children:"Max:"}),"\xa0",l({price:c,atLimit:u,direction:Yt.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,o.jsx)(F.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]})]})]})}function ci({positions:e}){return(0,o.jsx)(ei,{children:e.map(((e,t)=>(0,o.jsx)(di,{positionInfo:e},`pool-position-${t}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(ri||(ri={}));var pi,ui=i(73705),hi=i(66789),vi=i(53083),mi=i(57144),xi=i(23388),fi=i(42183),ki=i(70559);!function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(pi||(pi={}));const gi=25;var wi=i(63945),yi=i(95685);const bi=(0,X.default)(H.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-62cc13d4-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,Pi=X.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTransactionsTable__TableWrapper",componentId:"sc-62cc13d4-1"})`
  min-height: 256px;
`;var ji;!function(e){e[e.Timestamp=0]="Timestamp",e[e.Type=1]="Type",e[e.MakerAddress=2]="MakerAddress",e[e.FiatValue=3]="FiatValue",e[e.InputAmount=4]="InputAmount",e[e.OutputAmount=5]="OutputAmount"}(ji||(ji={}));const Ci={[ji.Timestamp]:120,[ji.Type]:144,[ji.MakerAddress]:100,[ji.FiatValue]:125,[ji.InputAmount]:125,[ji.OutputAmount]:125};function Ti(e,t){var i,o,n;if((null===(i=t)||void 0===i?void 0:i.address)===be.dt){var s;const i=(0,V.Tz)(t.chain);return i&&e.id.toLowerCase()===(null===(s=be.Fl[i])||void 0===s?void 0:s.address.toLowerCase())}return e.id.toLowerCase()===(null===(n=t)||void 0===n||null===(o=n.address)||void 0===o?void 0:o.toLowerCase())}function Ii({poolAddress:e,token0:t,token1:i,protocolVersion:n}){var s;const a=(0,V.L7)((0,Se.WN)(),{fallbackToEthereum:!0}),r=(0,yi.XB)(),{formatNumber:d,formatFiatPrice:c}=(0,x.Gb)(),[p,u]=(0,m.useReducer)((e=>!e),!1),[h,v]=(0,m.useState)([pi.BUY,pi.SELL,pi.BURN,pi.MINT]),[f]=(0,m.useState)({sortBy:wi.ri.Timestamp,sortDirection:wi.N9.Desc}),{transactions:k,loading:g,loadMore:w,error:y}=function(e,t,i=[pi.BUY,pi.SELL,pi.BURN,pi.MINT],o,n=W.Qeo.V3,s=gi){var a,r,d,c,p;const u=(0,ki.ye)(fi.TP.V2Explore),{loading:h,error:v,data:x,fetchMore:f}=(0,W.uv5)({variables:{first:s,chain:(0,Se.tq)({chainId:t,withFallback:!0}),address:e},skip:n!==W.Qeo.V3}),{loading:k,error:g,data:w,fetchMore:y}=(0,W.arC)({variables:{first:s,chain:(0,Se.tq)({chainId:t,withFallback:!0}),address:e},skip:!t||n!==W.Qeo.V2||t!==l.ChainId.MAINNET&&!u}),b=(0,m.useRef)(!1),{transactions:P,loading:j,fetchMore:C,error:T}=n===W.Qeo.V3?{transactions:null===(r=x)||void 0===r||null===(a=r.v3Pool)||void 0===a?void 0:a.transactions,loading:h,fetchMore:f,error:v}:{transactions:null===(c=w)||void 0===c||null===(d=c.v2Pair)||void 0===d?void 0:d.transactions,loading:k,fetchMore:y,error:g},I=(0,m.useCallback)((({onComplete:e})=>{var t,i;b.current||(b.current=!0,C({variables:{cursor:null===(i=P)||void 0===i||null===(t=i[P.length-1])||void 0===t?void 0:t.timestamp},updateQuery:(t,{fetchMoreResult:i})=>{var o,s,a;if(!i)return t;null===(o=e)||void 0===o||o();const l=n===W.Qeo.V3?{v3Pool:{...i.v3Pool,transactions:[...(null===(s=t.v3Pool)||void 0===s?void 0:s.transactions)??[],...i.v3Pool.transactions]}}:{v2Pair:{...i.v2Pair,transactions:[...(null===(a=t.v2Pair)||void 0===a?void 0:a.transactions)??[],...i.v2Pair.transactions]}};return b.current=!1,l}}))}),[C,P,n]),D=(0,m.useMemo)((()=>{var e;return null===(e=P??[])||void 0===e?void 0:e.map((e=>{var t,n,s,a;if(!e)return;const l=(null===(n=parseFloat(e.token0Quantity)>0?e.token0:e.token1)||void 0===n||null===(t=n.address)||void 0===t?void 0:t.toLowerCase())===(null===(a=o)||void 0===a||null===(s=a.address)||void 0===s?void 0:s.toLowerCase()),r=e.type===W.uGm.Swap?l?pi.SELL:pi.BUY:e.type===W.uGm.Remove?pi.BURN:pi.MINT;return i.includes(r)?{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:r}:void 0})).filter((e=>void 0!==e))}),[P,i,null===(p=o)||void 0===p?void 0:p.address]);return(0,m.useMemo)((()=>({transactions:D,loading:j,loadMore:I,error:T})),[D,j,I,T])}(e,a.id,h,t,n),b=g||!!y,P=(0,m.useMemo)((()=>{const e=(0,ui.Cl)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,o.jsx)(vi.b,{minWidth:Ci[ji.Timestamp],justifyContent:"flex-start",children:(0,o.jsxs)(xe.ZP,{gap:"4px",children:[f.sortBy===wi.ri.Timestamp&&(0,o.jsx)(xi.iX,{direction:wi.N9.Desc}),(0,o.jsx)(xi.Hu,{$active:f.sortBy===wi.ri.Timestamp,children:(0,o.jsx)(F.cC,{children:"Time"})})]})}),cell:e=>{var t,i,n,s;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.Timestamp],justifyContent:"flex-start",children:(0,o.jsx)(xi._q,{timestamp:Number(null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i).timestamp),link:(0,Ae.E)(a.id,null===(n=(s=e).getValue)||void 0===n?void 0:n.call(s).transaction,Ae.r.TRANSACTION)})})}}),e.accessor((e=>{let i,n;var s;if(e.type===pi.BUY)i="success",n=(0,o.jsxs)("span",{children:[(0,o.jsx)(F.cC,{children:"Buy"}),"\xa0",null===(s=t)||void 0===s?void 0:s.symbol]});else if(e.type===pi.SELL){var a;i="critical",n=(0,o.jsxs)("span",{children:[(0,o.jsx)(F.cC,{children:"Sell"}),"\xa0",null===(a=t)||void 0===a?void 0:a.symbol]})}else i=e.type===pi.MINT?"success":"critical",n=e.type===pi.MINT?(0,o.jsx)(F.cC,{children:"Add"}):(0,o.jsx)(F.cC,{children:"Remove"});return(0,o.jsx)(H.Tv.BodyPrimary,{color:i,children:n})}),{id:"swap-type",header:()=>(0,o.jsx)(vi.b,{minWidth:Ci[ji.Type],justifyContent:"flex-start",children:(0,o.jsxs)(xi.j4,{modalOpen:p,onClick:()=>u(),children:[(0,o.jsx)(mi.w,{allFilters:Object.values(pi),activeFilter:h,setFilters:v,isOpen:p,toggleFilterModal:u}),(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(F.cC,{children:"Type"})})]})}),cell:e=>{var t,i;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.Type],justifyContent:"flex-start",children:null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,o.jsx)(vi.b,{minWidth:Ci[ji.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:r})}),cell:e=>{var t,i;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:c({price:null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i)})})})}}),e.accessor((e=>Ti(e.pool.token0,t)?e.amount0:e.amount1),{id:"input-amount",header:()=>{var e;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:null===(e=t)||void 0===e?void 0:e.symbol})})},cell:e=>{var t,i;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:d({input:Math.abs((null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i))??0),type:x.sw.TokenTx})})})}}),e.accessor((e=>Ti(e.pool.token0,t)?e.amount1:e.amount0),{id:"output-amount",header:()=>{var e;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:null===(e=i)||void 0===e?void 0:e.symbol})})},cell:e=>{var t,i;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodyPrimary,{children:d({input:Math.abs((null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i))??0),type:x.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,o.jsx)(vi.b,{minWidth:Ci[ji.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(H.Tv.BodySecondary,{children:(0,o.jsx)(F.cC,{children:"Wallet"})})}),cell:e=>{var t,i,n,s;return(0,o.jsx)(vi.b,{loading:b,minWidth:Ci[ji.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,o.jsx)(bi,{href:(0,Ae.E)(a.id,null===(t=(i=e).getValue)||void 0===t?void 0:t.call(i),Ae.r.ADDRESS),children:(0,o.jsx)(H.Tv.BodyPrimary,{children:(0,De.Xn)(null===(n=(s=e).getValue)||void 0===n?void 0:n.call(s),0)})})})}})]}),[r,a.id,h,p,c,d,b,f.sortBy,t,null===(s=i)||void 0===s?void 0:s.symbol]);return(0,o.jsx)(Pi,{"data-testid":"pool-details-transactions-table",children:(0,o.jsx)(hi.i,{columns:P,data:k,loading:g,error:y,loadMore:w,maxHeight:600})})}var Di;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(Di||(Di={}));const Ai=(0,X.default)(H.Tv.HeadlineMedium).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTable__TableHeader",componentId:"sc-6bd7a15b-0"})`
  color: ${({theme:e,active:t})=>!t&&e.neutral2};
  ${({disabled:e})=>!e&&H.iV}
  user-select: none;
`;function _i({poolAddress:e,token0:t,token1:i,protocolVersion:n}){var s;const[l,d]=(0,m.useState)(Di.TRANSACTIONS),c=(0,V.L7)((0,Se.WN)(),{fallbackToEthereum:!0}),{account:p}=(0,Tt.G)(),{positions:u}=(0,Dt.Z)(p??"",[c.id]),h=(0,m.useMemo)((()=>{var t;return(null===(t=u)||void 0===t?void 0:t.filter((t=>r.Pool.getAddress(t.pool.token0,t.pool.token1,t.pool.fee).toLowerCase()===e.toLowerCase())))??[]}),[e,u]);return(0,o.jsxs)(a.ZP,{gap:"lg",children:[(0,o.jsxs)(xe.ZP,{gap:"16px",children:[(0,o.jsx)(Ai,{active:l===Di.TRANSACTIONS,onClick:()=>d(Di.TRANSACTIONS),disabled:!h.length,children:(0,o.jsx)(F.cC,{children:"Transactions"})}),Boolean(h.length)&&(0,o.jsxs)(Ai,{active:l===Di.POSITIONS,onClick:()=>d(Di.POSITIONS),children:[(0,o.jsx)(F.cC,{children:"Positions"}),` (${null===(s=h)||void 0===s?void 0:s.length})`]})]}),l===Di.TRANSACTIONS?(0,o.jsx)(Ii,{poolAddress:e,token0:t,token1:i,protocolVersion:n}):(0,o.jsx)(ci,{positions:h})]})}var Si=i(75748),Ni=i(63490),$i=i.n(Ni);function Li(e){if(!e)return;const t=(new Date).getTime(),i=(t-$i()("1d"))/1e3,o=(t-$i()("2d"))/1e3,n=e.filter((e=>{var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.timestamp)&&e.timestamp>=i})).reduce(((e,t)=>e+t.value),0),s=e.filter((e=>{var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.timestamp)&&e.timestamp>=o&&e.timestamp<i})).reduce(((e,t)=>e+t.value),0);return(n-s)/s*100}var Ei=i(3359),Ui=i(46012);const Bi=e=>{var t,i;const o=null===(t=e)||void 0===t?void 0:t.token0.symbol,n=null===(i=e)||void 0===i?void 0:i.token1.symbol,s=F.t`Buy and sell on Uniswap`;return o&&n?`${o}/${n}: ${s}`:s};var Ri=i(37018),Mi=i(437);const Oi=(0,X.default)(xe.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\PoolDetails\\index__PageWrapper",componentId:"sc-ffebf317-0"})`
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,Vi=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\PoolDetails\\index__LeftColumn",componentId:"sc-ffebf317-1"})`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
    max-width: unset;
  }
`,qi=X.default.hr.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\PoolDetails\\index__HR",componentId:"sc-ffebf317-2"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,Fi=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\PoolDetails\\index__RightColumn",componentId:"sc-ffebf317-3"})`
  gap: 24px;
  width: 360px;

  @media (max-width: ${Ke.j$.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,Zi=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\PoolDetails\\index__TokenDetailsWrapper",componentId:"sc-ffebf317-4"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${Ke.j$.sm}px) {
    padding: unset;
  }
`,Xi=(0,X.default)(dt.xv).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\PoolDetails\\index__TokenDetailsHeader",componentId:"sc-ffebf317-5"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,Hi=(0,X.default)(a.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\pages\\PoolDetails\\index__LinksContainer",componentId:"sc-ffebf317-6"})`
  gap: 16px;
  width: 100%;
`;function zi(){var e,t,i,r,d,c,p,u,h,v,x,f,k,g,w,y,b,P,j,C,T,I,D,A,_,S,N,$,L,E;const{poolAddress:U}=(0,Ye.UO)(),B=(0,V.L7)((0,Se.WN)()),{data:R,loading:M}=function(e,t){var i,o;const n=(0,ki.ye)(fi.TP.V2Explore),{loading:s,error:a,data:r}=(0,W.Bn1)({variables:{chain:(0,Se.tq)({chainId:t,withFallback:!0}),address:e},errorPolicy:"all"}),{loading:d,error:c,data:p}=(0,W.gyz)({variables:{chain:(0,Se.tq)({chainId:t,withFallback:!0}),address:e},skip:!t||t!==l.ChainId.MAINNET&&!n,errorPolicy:"all"});return(0,m.useMemo)((()=>{var e,i,o,u,h,v,m,x,f,k,g,w,y,b,P,j,C,T;const I=Boolean(a||c&&(t===l.ChainId.MAINNET||n)),D=Boolean(s||d&&(t===l.ChainId.MAINNET||n)),A=(null===(e=r)||void 0===e?void 0:e.v3Pool)??(null===(i=p)||void 0===i?void 0:i.v2Pair)??void 0,_=(null===(u=r)||void 0===u||null===(o=u.v3Pool)||void 0===o?void 0:o.feeTier)??Si.y9;return{data:A?{address:A.address,txCount:A.txCount,protocolVersion:A.protocolVersion,token0:A.token0,tvlToken0:A.token0Supply,token0Price:null===(f=A.token0)||void 0===f||null===(x=f.project)||void 0===x||null===(m=x.markets)||void 0===m||null===(v=m[0])||void 0===v||null===(h=v.price)||void 0===h?void 0:h.value,token1:A.token1,tvlToken1:A.token1Supply,token1Price:null===(b=A.token1)||void 0===b||null===(y=b.project)||void 0===y||null===(w=y.markets)||void 0===w||null===(g=w[0])||void 0===g||null===(k=g.price)||void 0===k?void 0:k.value,feeTier:_,volumeUSD24H:null===(P=A.volume24h)||void 0===P?void 0:P.value,volumeUSD24HChange:Li(null===(j=A.historicalVolume)||void 0===j?void 0:j.concat()),tvlUSD:null===(C=A.totalLiquidity)||void 0===C?void 0:C.value,tvlUSDChange:null===(T=A.totalLiquidityPercentChange24h)||void 0===T?void 0:T.value}:void 0,error:I,loading:D}}),[t,null===(i=p)||void 0===i?void 0:i.v2Pair,null===(o=r)||void 0===o?void 0:o.v3Pool,c,a,d,s,n])}((null===(e=U)||void 0===e?void 0:e.toLowerCase())??"",null===(t=B)||void 0===t?void 0:t.id),[O,q]=(0,m.useReducer)((e=>!e),!1),Z=function(e,t){var i,o,n,s;return(null===(i=e)||void 0===i?void 0:i.token0)&&(null===(o=e)||void 0===o?void 0:o.token1)&&t?[(0,V.vR)(t,null===(n=e)||void 0===n?void 0:n.token0),(0,V.vR)(t,null===(s=e)||void 0===s?void 0:s.token1)]:[void 0,void 0]}(R,null===(i=B)||void 0===i?void 0:i.id),[H,z]=O?[null===(r=Z)||void 0===r?void 0:r[1],null===(d=Z)||void 0===d?void 0:d[0]]:Z,{darkMode:G,surface2:Q,accent1:Y}=(0,X.useTheme)(),K=(0,Ei.r)(H&&(0,V.Pc)(H),{backgroundColor:Q,darkMode:G}),J=(0,Ei.r)(z&&(0,V.Pc)(z),{backgroundColor:Q,darkMode:G}),ee=!U||!B||!(0,De.UJ)(U),te=!M&&!R||ee,oe=(0,m.useMemo)((()=>{var e,t,i;const o=`${null===(e=R)||void 0===e?void 0:e.token0.symbol}/${null===(t=R)||void 0===t?void 0:t.token1.symbol}`,n=(null===(i=B)||void 0===i?void 0:i.label)??"Ethereum";return{title:o,url:window.location.href,description:`Swap ${o} on ${n}. Trade tokens and provide liquidity. Real-time prices, charts, transaction data, and more.`}}),[null===(c=B)||void 0===c?void 0:c.label,null===(p=R)||void 0===p?void 0:p.token0.symbol,null===(u=R)||void 0===u?void 0:u.token1.symbol]),ne=(0,Ri.X)(oe);return te?(0,o.jsx)(Ui.default,{}):(0,o.jsxs)(Ke.f6,{token0:K!==Y?K:void 0,token1:J!==Y?J:void 0,children:[(0,o.jsxs)(Mi.Helmet,{children:[(0,o.jsx)("title",{children:Bi(R)}),ne.map(((e,t)=>(0,o.jsx)("meta",{...e},t)))]}),(0,o.jsx)(s.fM,{page:n.yJ.POOL_DETAILS_PAGE,properties:{poolAddress:U,chainId:null===(h=B)||void 0===h?void 0:h.id,feeTier:null===(v=R)||void 0===v?void 0:v.feeTier,token0Address:null===(x=R)||void 0===x?void 0:x.token0.address,token1Address:null===(f=R)||void 0===f?void 0:f.token1.address,token0Symbol:null===(k=R)||void 0===k?void 0:k.token0.symbol,token1Symbol:null===(g=R)||void 0===g?void 0:g.token1.symbol,token0Name:null===(w=R)||void 0===w?void 0:w.token0.name,token1Name:null===(y=R)||void 0===y?void 0:y.token1.name},shouldLogImpression:!M,children:(0,o.jsxs)(Oi,{children:[(0,o.jsxs)(Vi,{children:[(0,o.jsxs)(a.ZP,{gap:"20px",children:[(0,o.jsxs)(a.ZP,{children:[(0,o.jsx)(Re,{chainId:null===(b=B)||void 0===b?void 0:b.id,poolAddress:U,token0:H,token1:z,loading:M}),(0,o.jsx)(ze,{chainId:null===(P=B)||void 0===P?void 0:P.id,poolAddress:U,token0:H,token1:z,feeTier:null===(j=R)||void 0===j?void 0:j.feeTier,protocolVersion:null===(C=R)||void 0===C?void 0:C.protocolVersion,toggleReversed:q,loading:M})]}),(0,o.jsx)(ie,{poolData:R,loading:M,isReversed:O,chain:null===(T=B)||void 0===T?void 0:T.backendChain.chain})]}),(0,o.jsx)(qi,{}),(0,o.jsx)(_i,{poolAddress:U,token0:H,token1:z,protocolVersion:null===(I=R)||void 0===I?void 0:I.protocolVersion})]}),(0,o.jsxs)(Fi,{children:[(0,o.jsx)(Wt,{chainId:null===(D=B)||void 0===D?void 0:D.id,token0:H,token1:z,feeTier:null===(A=R)||void 0===A?void 0:A.feeTier,loading:M}),(0,o.jsx)(bt,{poolData:R,isReversed:O,chainId:null===(_=B)||void 0===_?void 0:_.id,loading:M}),(0,o.jsxs)(Zi,{children:[(0,o.jsx)(Xi,{children:(0,o.jsx)(F.cC,{children:"Links"})}),(0,o.jsxs)(Hi,{children:[(0,o.jsx)(at,{address:U,chainId:null===(S=B)||void 0===S?void 0:S.id,tokens:[H,z],loading:M}),(0,o.jsx)(at,{address:null===(N=H)||void 0===N?void 0:N.address,chainId:null===($=B)||void 0===$?void 0:$.id,tokens:[H],loading:M}),(0,o.jsx)(at,{address:null===(L=z)||void 0===L?void 0:L.address,chainId:null===(E=B)||void 0===E?void 0:E.id,tokens:[z],loading:M})]})]})]})]})})]})}}}]);
//# sourceMappingURL=1557.91785a1c.chunk.js.map