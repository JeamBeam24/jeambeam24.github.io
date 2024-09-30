"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2225],{95263:e=>{var t="%[a-f0-9]{2}",n=new RegExp("("+t+")|([^%]+?)","gi"),s=new RegExp("("+t+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),s=e.slice(t);return Array.prototype.concat.call([],i(n),i(s))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n)||[],s=1;s<t.length;s++)t=(e=i(t,s).join("")).match(n)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},i=s.exec(e);i;){try{n[i[0]]=decodeURIComponent(i[0])}catch(t){var r=a(i[0]);r!==i[0]&&(n[i[0]]=r)}i=s.exec(e)}n["%C2"]="\ufffd";for(var o=Object.keys(n),l=0;l<o.length;l++){var d=o[l];e=e.replace(new RegExp(d,"g"),n[d])}return e}(e)}}},67937:e=>{e.exports=function(e,t){for(var n={},s=Object.keys(e),i=Array.isArray(t),a=0;a<s.length;a++){var r=s[a],o=e[r];(i?-1!==t.indexOf(r):t(r,o,e))&&(n[r]=o)}return n}},18806:(e,t,n)=>{const s=n(8248),i=n(95263),a=n(13362),r=n(67937),o=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function c(e,t){return t.decode?i(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function m(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,s)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===s[e]&&(s[e]={}),s[e][t[1]]=n):s[e]=n};case"bracket":return(e,n,s)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==s[e]?s[e]=[].concat(s[e],n):s[e]=[n]:s[e]=n};case"colon-list-separator":return(e,n,s)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==s[e]?s[e]=[].concat(s[e],n):s[e]=[n]:s[e]=n};case"comma":case"separator":return(t,n,s)=>{const i="string"==typeof n&&n.includes(e.arrayFormatSeparator),a="string"==typeof n&&!i&&c(n,e).includes(e.arrayFormatSeparator);n=a?c(n,e):n;const r=i||a?n.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===n?n:c(n,e);s[t]=r};case"bracket-separator":return(t,n,s)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(s[t]=n?c(n,e):n);const a=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>c(t,e)));void 0!==s[t]?s[t]=[].concat(s[t],a):s[t]=a};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),s=Object.create(null);if("string"!=typeof e)return s;if(!(e=e.trim().replace(/^[?#&]/,"")))return s;for(const i of e.split("&")){if(""===i)continue;let[e,r]=a(t.decode?i.replace(/\+/g," "):i,"=");r=void 0===r?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?r:c(r,t),n(c(e,t),r,s)}for(const i of Object.keys(s)){const e=s[i];if("object"==typeof e&&null!==e)for(const n of Object.keys(e))e[n]=u(e[n],t);else s[i]=u(e,t)}return!1===t.sort?s:(!0===t.sort?Object.keys(s).sort():Object.keys(s).sort(t.sort)).reduce(((e,t)=>{const n=s[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=p(n):e[t]=n,e}),Object.create(null))}t.extract=f,t.parse=h,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],s=function(e){switch(e.arrayFormat){case"index":return t=>(n,s)=>{const i=n.length;return void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:null===s?[...n,[d(t,e),"[",i,"]"].join("")]:[...n,[d(t,e),"[",d(i,e),"]=",d(s,e)].join("")]};case"bracket":return t=>(n,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:null===s?[...n,[d(t,e),"[]"].join("")]:[...n,[d(t,e),"[]=",d(s,e)].join("")];case"colon-list-separator":return t=>(n,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:null===s?[...n,[d(t,e),":list="].join("")]:[...n,[d(t,e),":list=",d(s,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(s,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?s:(i=null===i?"":i,0===s.length?[[d(n,e),t,d(i,e)].join("")]:[[s,d(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:null===s?[...n,d(t,e)]:[...n,[d(t,e),"=",d(s,e)].join("")]}}(t),i={};for(const r of Object.keys(e))n(r)||(i[r]=e[r]);const a=Object.keys(i);return!1!==t.sort&&a.sort(t.sort),a.map((n=>{const i=e[n];return void 0===i?"":null===i?d(n,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?d(n,t)+"[]":i.reduce(s(n),[]).join("&"):d(n,t)+"="+d(i,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,s]=a(e,"#");return Object.assign({url:n.split("?")[0]||"",query:h(f(e),t)},t&&t.parseFragmentIdentifier&&s?{fragmentIdentifier:c(s,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0,[o]:!0},n);const s=m(e.url).split("?")[0]||"",i=t.extract(e.url),a=t.parse(i,{sort:!1}),r=Object.assign(a,e.query);let l=t.stringify(r,n);l&&(l=`?${l}`);let c=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(c=`#${n[o]?d(e.fragmentIdentifier,n):e.fragmentIdentifier}`),`${s}${l}${c}`},t.pick=(e,n,s)=>{s=Object.assign({parseFragmentIdentifier:!0,[o]:!1},s);const{url:i,query:a,fragmentIdentifier:l}=t.parseUrl(e,s);return t.stringifyUrl({url:i,query:r(a,n),fragmentIdentifier:l},s)},t.exclude=(e,n,s)=>{const i=Array.isArray(n)?e=>!n.includes(e):(e,t)=>!n(e,t);return t.pick(e,i,s)}},37525:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(45779),i=n(68090),a=n.n(i);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=(0,s.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,d=o(e,["color","size"]);return s.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="ChevronUp";const d=l},13362:e=>{e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},8248:e=>{e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},43912:(e,t,n)=>{n.d(t,{m:()=>i});var s=n(92936);const i=e=>(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,s.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},90219:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Bt});var s=n(92936),i=n(5985),a=n(12722),r=n(66284),o=n(78129),l=n(45779),d=n(99582);var c=n(6823),p=n(68588),m=n(36399),f=n(14411),u=n(54972);const h=(0,f.default)(u.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Resource__ResourceLink",componentId:"sc-a993f100-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,m._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function x({name:e,link:t}){return(0,s.jsxs)(h,{href:t,children:[e,(0,s.jsx)("sup",{children:"\u2197"})]})}var w=n(86059),g=n(74377),C=n(80305),y=n(15288),v=n(35842),b=n(27389),k="_1cf9gnw1";const j=()=>(0,s.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:b.Z4.colors.neutral2,className:k}),(0,s.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:b.Z4.colors.neutral2,className:k}),(0,s.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:b.Z4.colors.neutral2,className:k})]});var A=n(26729),_=n(43912),D=n(44952),N=n(58690),I=n(79132),U=n(47263),$=n(43454),T=n(6282),S=n(13446),P=n(66136);const O=f.css`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
    z-index: 0;
  }
`,F=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__Container",componentId:"sc-a7197451-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,H=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BestPriceContainer",componentId:"sc-a7197451-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
`,L=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__HeaderRow",componentId:"sc-a7197451-2"})`
  display: flex;
  justify-content: space-between;
`,E=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__PriceRow",componentId:"sc-a7197451-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,z=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BuyNowButton",componentId:"sc-a7197451-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:t,useAccentColor:n})=>t?e.critical:n?e.accent1:e.surface3};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${O}
`,B=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-a7197451-5"})`
  position: relative;
`,R=(0,f.default)(u.Tv.BodySecondary).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__Tertiary",componentId:"sc-a7197451-6"})`
  color: ${({theme:e})=>e.neutral3};
`,Z=f.default.a.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__UploadLink",componentId:"sc-a7197451-7"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${p.cR}
`,M=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__NotForSaleContainer",componentId:"sc-a7197451-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,V=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__DiscoveryContainer",componentId:"sc-a7197451-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,X=f.default.a.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__OwnerText",componentId:"sc-a7197451-10"})`
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;

  ${p.cR}
`,G=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__OwnerInformationContainer",componentId:"sc-a7197451-11"})`
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,W=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__AssetInfoContainer",componentId:"sc-a7197451-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,q=f.default.h1.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__AssetHeader",componentId:"sc-a7197451-13"})`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 535;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.neutral1};
  margin: 0;
`,Y=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__CollectionNameContainer",componentId:"sc-a7197451-14"})`
  display: flex;
  justify-content: space-between;
`,J=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__CollectionHeader",componentId:"sc-a7197451-15"})`
  font-size: 16px;
  font-weight: 485;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${p.cR};
`,K=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__VerifiedIconContainer",componentId:"sc-a7197451-16"})`
  position: relative;
`,Q=(0,f.default)(N.SA).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-a7197451-17"})`
  position: absolute;
  top: 0px;
`,ee=(0,f.default)($.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__DefaultLink",componentId:"sc-a7197451-18"})`
  text-decoration: none;
`,te=(0,f.default)(u.dL).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__MarketplaceIcon",componentId:"sc-a7197451-19"})`
  display: flex;
  align-items: center;
`,ne=({asset:e})=>{var t,n;const r=(0,T.s0)(),d=(0,I.$N)(),c=(0,I.aO)((e=>e.setProfilePageState)),p=(0,I.Pc)((e=>e.selectSellAsset)),m=(0,I.Pc)((e=>e.reset)),{formatEther:f,formatNumberOrString:h}=(0,P.Gb)(),x=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,w=(null===(t=x)||void 0===t?void 0:t.endAt)?new Date(x.endAt):void 0,g=(0,l.useMemo)((()=>d&&e.floor_sell_order_price?d*e.floor_sell_order_price:void 0),[d,e.floor_sell_order_price]),C=(0,a.oO)(),y=()=>{m(),r("/nfts/profile"),p(e),(0,a._P)(i.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...C}),c(U.HA.LISTING)};return(0,s.jsxs)(H,{children:[(0,s.jsxs)(L,{children:[(0,s.jsx)(u.Tv.SubHeader,{color:"accent1",children:x?"Your Price":"List for Sale"}),x&&(0,s.jsx)(te,{href:x.marketplaceUrl,children:(0,o.Dp)(x.marketplace,"20")})]}),(0,s.jsx)(E,{children:x?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[f({input:null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice,type:P.sw.NFTToken})," ","ETH"]}),g&&(0,s.jsx)(u.Tv.BodySecondary,{lineHeight:"24px",children:h({input:g,type:P.sw.FiatNFTToken})})]}):(0,s.jsx)(u.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),w&&(0,s.jsxs)(u.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,o.zO)(w)]}),x?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(z,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:y,children:(0,s.jsx)(u.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,s.jsx)(z,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:y,children:(0,s.jsx)(u.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},se=(0,f.default)($.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__StyledLink",componentId:"sc-a7197451-20"})`
  text-decoration: none;
  ${p.cR}
`,ie=({collectionName:e,collectionUrl:t})=>{const n=(0,f.useTheme)();return(0,s.jsx)(H,{children:(0,s.jsxs)(M,{children:[(0,s.jsx)(N.Io,{width:"79px",height:"79px",color:n.neutral3}),(0,s.jsx)(u.Tv.SubHeader,{children:"Not for sale"}),(0,s.jsxs)(V,{children:[(0,s.jsx)(u.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,s.jsx)(se,{to:`/nfts/collection/${t}`,children:(0,s.jsx)(u.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},ae=({asset:e,collection:t})=>{var n,i,a;const{account:r}=(0,A.G)(),{formatEther:d,formatNumberOrString:c}=(0,P.Gb)(),p=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,m=(null===(n=p)||void 0===n?void 0:n.endAt)?new Date(p.endAt):void 0,f=(0,I.cP)((e=>e.itemsInBag)),h=(0,I.cP)((e=>e.addAssetsToBag)),x=(0,I.cP)((e=>e.removeAssetsFromBag)),w=(0,I.cP)((e=>e.toggleBag)),g=(0,I.cP)((e=>e.bagExpanded)),C=(0,I.p6)(e),y=[{address:e.address,tokenId:e.tokenId}],{walletAssets:v}=(0,D.b)(r??"",[],y,1),b=(0,l.useMemo)((()=>{var e;return null===(e=v)||void 0===e?void 0:e[0]}),[v]),{assetInBag:k}=(0,l.useMemo)((()=>({assetInBag:f.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address))})),[e,f]),j=e.ownerAddress&&!!b&&(null===(i=r)||void 0===i?void 0:i.toLowerCase())===(null===(a=e.ownerAddress)||void 0===a?void 0:a.toLowerCase()),N=p&&e.priceInfo;return(0,s.jsxs)(F,{children:[(0,s.jsxs)(W,{children:[(0,s.jsxs)(Y,{children:[(0,s.jsx)(ee,{to:`/nfts/collection/${e.address}`,children:(0,s.jsxs)(J,{children:[t.collectionName,(0,s.jsx)(K,{children:t.isVerified&&(0,s.jsx)(Q,{})})]})}),(0,s.jsx)(Z,{onClick:()=>{window.open((0,o.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,s.jsx)(_.m,{})})]}),(0,s.jsx)(q,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),j?(0,s.jsx)(ne,{asset:b}):N?(0,s.jsxs)(H,{children:[(0,s.jsxs)(L,{children:[(0,s.jsx)(u.Tv.SubHeader,{color:"accent1",children:"Best Price"}),(0,s.jsx)(te,{href:p.marketplaceUrl,children:(0,o.Dp)(p.marketplace,"20")})]}),(0,s.jsxs)(E,{children:[(0,s.jsxs)(u.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[d({input:e.priceInfo.ETHPrice,type:P.sw.NFTToken})," ETH"]}),C&&(0,s.jsx)(u.Tv.BodySecondary,{lineHeight:"24px",children:c({input:C,type:P.sw.FiatNFTToken})})]}),m&&m>new Date&&(0,s.jsxs)(R,{fontSize:"14px",children:["Sale ends: ",(0,o.zO)(m)]}),(0,s.jsx)("div",{children:(0,s.jsx)(B,{children:(0,s.jsx)(z,{assetInBag:k,margin:!0,useAccentColor:!0,onClick:()=>{k?x([e]):h([e]),k||g||w()},children:(0,s.jsx)(u.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,s.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:k?"Remove":"Add to Bag"})})})})})]}):(0,s.jsx)(ie,{collectionName:t.collectionName??"this collection",collectionUrl:e.address}),N&&(0,s.jsxs)(G,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,s.jsx)(u.Tv.BodySmall,{color:"neutral2",lineHeight:"20px",children:"Seller:"}),(0,s.jsx)(X,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,s.jsxs)("span",{children:[" ",j?"You":e.ownerAddress&&(0,S.Xn)(e.ownerAddress,2)]})})]})]})};var re=n(59254),oe=n(25290),le=n(10581),de=n(82743),ce=n(82284),pe=n(49114);const me=f.default.tr.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TR",componentId:"sc-9f01b599-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.surface3}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,fe=f.default.th.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TH",componentId:"sc-9f01b599-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,ue=f.default.table.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__Table",componentId:"sc-9f01b599-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,he=f.default.td.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TD",componentId:"sc-9f01b599-3"})`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,xe=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__PriceContainer",componentId:"sc-9f01b599-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,we=f.default.a.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__Link",componentId:"sc-9f01b599-5"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,ge=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__ActivityContainer",componentId:"sc-9f01b599-6"})`
  max-height: 310px;
  overflow: auto;

  ${p.Zl}
`,Ce=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetActivity__LoadingCell",componentId:"sc-9f01b599-7"})`
  height: 20px;
  width: 80px;
`,ye=({children:e})=>(0,s.jsx)(ge,{id:"activityContainer",children:(0,s.jsxs)(ue,{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)(me,{children:[(0,s.jsx)(fe,{children:(0,s.jsx)(c.cC,{children:"Event"})}),(0,s.jsx)(fe,{children:(0,s.jsx)(c.cC,{children:"Price"})}),(0,s.jsx)(fe,{children:(0,s.jsx)(c.cC,{children:"By"})}),(0,s.jsx)(fe,{children:(0,s.jsx)(c.cC,{children:"To"})}),(0,s.jsx)(fe,{children:(0,s.jsx)(c.cC,{children:"Time"})})]})}),(0,s.jsx)("tbody",{children:e})]})}),ve=({cellCount:e})=>(0,s.jsx)(me,{children:Array(e).fill(null).map(((e,t)=>(0,s.jsx)(he,{children:(0,s.jsx)(Ce,{})},t)))}),be=({rowCount:e})=>(0,s.jsx)(ye,{children:Array(e).fill(null).map(((e,t)=>(0,s.jsx)(ve,{cellCount:5},t)))}),ke=({events:e})=>{const{formatNumberOrString:t}=(0,P.Gb)();return(0,s.jsx)(ye,{children:e&&e.map(((e,n)=>{const{eventTimestamp:i,eventType:a,fromAddress:r,marketplace:l,price:d,toAddress:c,transactionHash:p}=e,m=d?t({input:parseFloat(d),type:P.sw.NFTToken}):null;return a?(0,s.jsxs)(me,{children:[(0,s.jsx)(he,{children:(0,s.jsx)(ce.VM,{eventType:a,eventTimestamp:i,eventTransactionHash:p,eventOnly:!0})}),(0,s.jsx)(he,{children:m&&(0,s.jsxs)(xe,{children:[l&&(0,o.Dp)(l,"16"),m," ETH"]})}),(0,s.jsx)(he,{children:r&&(0,s.jsx)(we,{href:`https://etherscan.io/address/${r}`,target:"_blank",rel:"noopener noreferrer",children:(0,S.Xn)(r,2)})}),(0,s.jsx)(he,{children:c&&(0,s.jsx)(we,{href:`https://etherscan.io/address/${c}`,target:"_blank",rel:"noopener noreferrer",children:(0,S.Xn)(c,2)})}),(0,s.jsx)(he,{children:i&&(0,pe.F)(i.toString())})]},n):null}))})};n(12143),n(49484);var je="_1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",Ae=n(50333),_e=n(94191);const De=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Details",componentId:"sc-e67d1b6c-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ne=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Header",componentId:"sc-e67d1b6c-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
`,Ie=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Body",componentId:"sc-e67d1b6c-2"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,Ue=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Center",componentId:"sc-e67d1b6c-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${p.cR}
`,$e=f.default.a.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__CreatorLink",componentId:"sc-e67d1b6c-4"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,Te=(0,f.default)(_e.Z).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__CopyIcon",componentId:"sc-e67d1b6c-5"})`
  cursor: pointer;
`,Se=({header:e,body:t})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(Ne,{children:e}),(0,s.jsx)(Ie,{children:t})]}),Pe=({asset:e,collection:t})=>{var n;const{formatNumber:i}=(0,P.Gb)(),{address:a,tokenId:r,tokenType:o,creator:d}=e,{totalSupply:c}=t,[,p]=(0,Ae.Z)(),m=(0,l.useCallback)((()=>{p(a??"")}),[a,p]);return(0,s.jsxs)(De,{children:[(0,s.jsx)(Se,{header:"Contract address",body:(0,s.jsxs)(Ue,{onClick:m,children:[(0,S.Xn)(a,2)," ",(0,s.jsx)(Te,{size:13})]})}),(0,s.jsx)(Se,{header:"Token ID",body:r.length>9?(f=r,`${f.substring(0,4)}...${f.substring(f.length-4,f.length)}`):r}),(0,s.jsx)(Se,{header:"Token standard",body:o}),(0,s.jsx)(Se,{header:"Blockchain",body:"Ethereum"}),(0,s.jsx)(Se,{header:"Total supply",body:`${i({input:c??0,type:P.sw.WholeNumber})}`}),(0,s.jsx)(Se,{header:"Creator",body:(null===(n=d)||void 0===n?void 0:n.address)&&(0,s.jsx)($e,{href:`https://etherscan.io/address/${d.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,S.Xn)(d.address,2)})})]});var f};var Oe=n(37525),Fe=n(86082);const He=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\InfoContainer__Header",componentId:"sc-91d042aa-0"})`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.surface1};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:t}}})=>f.css`background-color ${e.medium} ${t.ease}`};
`,Le=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\InfoContainer__PrimaryHeader",componentId:"sc-91d042aa-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  line-height: 28px;
  font-size: 20px;
`,Ee=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\InfoContainer__SecondaryHeader",componentId:"sc-91d042aa-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,ze=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\InfoContainer__SecondaryHeaderContainer",componentId:"sc-91d042aa-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.neutral1};
`,Be=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\InfoContainer__ContentContainer",componentId:"sc-91d042aa-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.surface1};
`,Re=({children:e,primaryHeader:t,secondaryHeader:n,defaultOpen:i,...a})=>{const[r,o]=(0,l.useState)(!!i);return(0,s.jsxs)("div",{children:[(0,s.jsxs)(He,{...a,isOpen:r,onClick:()=>o(!r),children:[(0,s.jsxs)(Le,{children:[t," ",(0,s.jsx)(Ee,{children:n})]}),(0,s.jsx)(ze,{children:r?(0,s.jsx)(Oe.Z,{}):(0,s.jsx)(Fe.Z,{})})]}),r&&(0,s.jsx)(Be,{children:e})]})};var Ze=n(18806);const Me=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__Grid",componentId:"sc-21b39cfb-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ve=(0,f.default)($.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__GridItemContainer",componentId:"sc-21b39cfb-1"})`
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${p.cR}
  min-width: 0;
`,Xe=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__TraitType",componentId:"sc-21b39cfb-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,Ge=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__TraitValue",componentId:"sc-21b39cfb-3"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,We=({trait:e,collectionAddress:t})=>{const{trait_type:n,trait_value:i}=e,a=Ze.stringify({traits:[`("${n}","${i}")`]},{arrayFormat:"comma"});return(0,s.jsxs)(Ve,{to:`/nfts/collection/${t}?${a}`,children:[(0,s.jsx)(Xe,{children:n}),(0,s.jsx)(Ge,{children:i})]})},qe=({asset:e})=>{var t;const n=(0,l.useMemo)((()=>{var t;return null===(t=e.traits)||void 0===t?void 0:t.sort(((e,t)=>e.trait_type.localeCompare(t.trait_type)))}),[e]);return(0,s.jsx)(Me,{children:null===(t=n)||void 0===t?void 0:t.map((t=>(0,s.jsx)(We,{trait:t,collectionAddress:e.address},t.trait_type)))})},Ye=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__AssetPriceDetailsContainer",componentId:"sc-86723baa-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,Je=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__MediaContainer",componentId:"sc-86723baa-1"})`
  display: flex;
  justify-content: center;
`,Ke=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Column",componentId:"sc-86723baa-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,Qe=f.default.a.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__AddressTextLink",componentId:"sc-86723baa-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${p.cR};
`,et=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__SocialsContainer",componentId:"sc-86723baa-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,tt=f.default.p.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__DescriptionText",componentId:"sc-86723baa-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,nt=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__RarityWrap",componentId:"sc-86723baa-6"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,st=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__EmptyActivitiesContainer",componentId:"sc-86723baa-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral1};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,it=(0,f.default)($.rU).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Link",componentId:"sc-86723baa-8"})`
  color: ${({theme:e})=>e.accent1};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${p.cR};
`,at=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ActivitySelectContainer",componentId:"sc-86723baa-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${p.Zl}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,rt=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ContentNotAvailable",componentId:"sc-86723baa-10"})`
  display: flex;
  background-color: ${({theme:e})=>e.surface1};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,ot=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__FilterBox",componentId:"sc-86723baa-11"})`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 535;
  line-height: 14px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${p.cR};
`,lt=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ByText",componentId:"sc-86723baa-12"})`
  font-size: 14px;
  line-height: 20px;
`,dt=f.default.img.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Img",componentId:"sc-86723baa-13"})`
  background-color: white;
`,ct=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__HoverImageContainer",componentId:"sc-86723baa-14"})`
  display: flex;
  margin-right: 4px;
`,pt=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__HoverContainer",componentId:"sc-86723baa-15"})`
  display: flex;
`,mt=f.default.span.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ContainerText",componentId:"sc-86723baa-16"})`
  font-size: 14px;
`,ft=({imageUrl:e,animationUrl:t,name:n,collectionName:i,dominantColor:a})=>(0,s.jsxs)(C.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,s.jsx)(C.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:t}),(0,s.jsx)("img",{className:je,src:e,alt:n||i,style:{"--shadow":`rgba(${a.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),ut={[U.n$.Listing]:!0,[U.n$.Sale]:!0,[U.n$.Transfer]:!1,[U.n$.CancelListing]:!1};var ht;!function(e){e.Audio="audio",e.Video="video",e.Image="image",e.Embed="embed"}(ht||(ht={}));const xt=({mediaType:e,asset:t,dominantColor:n})=>{const i={"--shadow":`rgba(${n.join(", ")}, 0.5)`};switch(e){case ht.Video:return(0,s.jsx)("video",{src:t.animationUrl,className:je,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:i});case ht.Image:return(0,s.jsx)("img",{className:je,src:t.imageUrl,alt:t.name||t.collectionName,style:i});case ht.Audio:return(0,s.jsx)(ft,{...t,dominantColor:n});case ht.Embed:return(0,s.jsx)("div",{className:"_1yohfdw2",children:(0,s.jsx)("iframe",{title:t.name??`${t.collectionName} #${t.tokenId}`,src:t.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",style:i,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},wt=({asset:e,collection:t})=>{var n,i,a,r,o,c,p,m;const{formatNumberOrString:f}=(0,P.Gb)(),[u]=(0,l.useState)([0,0,0]),{rarityProvider:h}=(0,l.useMemo)((()=>{var t,n,s;return e.rarity?{rarityProvider:null===(s=e)||void 0===s||null===(n=s.rarity)||void 0===n||null===(t=n.providers)||void 0===t?void 0:t.find((({provider:t})=>{var n;return t===(null===(n=e.rarity)||void 0===n?void 0:n.primaryProvider)}))}:{}}),[e.rarity]),C=(0,l.useMemo)((()=>(0,re.F)(e.animationUrl??"")?ht.Audio:(0,oe.W)(e.animationUrl??"")?ht.Video:e.animationUrl?ht.Embed:ht.Image),[e]),{address:k,tokenId:A}=e,{nftActivity:_}=(0,g.m)({activityTypes:[d.y3y.Sale],address:k,tokenId:A},1,"no-cache"),D=null===(i=_)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.price,N=D?f({input:parseFloat(D),type:P.sw.NFTToken}):void 0,[I,$]=(0,l.useReducer)(v.YQ,ut),T=(0,l.useCallback)((function({eventType:e}){const t=I[e];return(0,s.jsx)(ot,{backgroundColor:t?b.gR.color.surface1:b.Z4.colors.surface3,onClick:()=>$({eventType:e}),children:e===U.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[I]),{nftActivity:O,hasNext:F,loadMore:H,loading:L,error:E}=(0,g.m)({activityTypes:Object.keys(I).map((e=>e)).filter((e=>I[e])),address:k,tokenId:A},25),z=null===(o=e)||void 0===o||null===(r=o.rarity)||void 0===r||null===(a=r.providers)||void 0===a?void 0:a[0],[B,R]=(0,l.useState)(!1);return(0,s.jsxs)(Ke,{children:[(0,s.jsx)(Je,{children:void 0===e.imageUrl||B?(0,s.jsx)(rt,{children:"Content not available yet"}):C===ht.Image?(0,s.jsx)(dt,{className:je,src:e.imageUrl,alt:e.name||t.collectionName,onError:()=>R(!0)}):(0,s.jsx)(xt,{asset:e,mediaType:C,dominantColor:u})}),(0,s.jsx)(Ye,{children:(0,s.jsx)(ae,{asset:e,collection:t})}),e.traits&&(0,s.jsx)(Re,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:h&&z&&z.score?(0,s.jsx)(w.ud,{text:(0,s.jsxs)(pt,{children:[(0,s.jsx)(ct,{children:(0,s.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,s.jsx)(mt,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,s.jsxs)(nt,{children:["Rarity: ",f({input:z.score,type:P.sw.WholeNumber})]})}):null,children:(0,s.jsx)(qe,{asset:e})}),(0,s.jsx)(Re,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:N?`Last Sale: ${N} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(at,{$isHorizontalScroll:!0,children:[(0,s.jsx)(T,{eventType:U.n$.Listing}),(0,s.jsx)(T,{eventType:U.n$.Sale}),(0,s.jsx)(T,{eventType:U.n$.Transfer}),(0,s.jsx)(T,{eventType:U.n$.CancelListing})]}),L?(0,s.jsx)(be,{rowCount:10}):O&&O.length>0?(0,s.jsx)(le.Z,{next:H,hasMore:!!F,loader:L&&(0,s.jsx)(y.M5,{children:(0,s.jsx)(j,{})}),dataLength:(null===(c=O)||void 0===c?void 0:c.length)??0,scrollableTarget:"activityContainer",children:(0,s.jsx)(ke,{events:O})}):(0,s.jsx)(s.Fragment,{children:!E&&O&&(0,s.jsxs)(st,{children:[(0,s.jsx)("div",{children:"No activities yet"}),(0,s.jsx)(it,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,s.jsx)(Re,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(lt,{children:"By "}),(null===(p=e)||void 0===p?void 0:p.creator)&&(null===(m=e.creator)||void 0===m?void 0:m.address)&&(0,s.jsx)(Qe,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,S.Xn)(e.creator.address,2)}),(0,s.jsx)(tt,{"data-testid":"nft-details-description-text",children:t.collectionDescription}),(0,s.jsxs)(et,{children:[t.externalUrl&&(0,s.jsx)(x,{name:"Website",link:`${t.externalUrl}`}),t.twitterUrl&&(0,s.jsx)(x,{name:"Twitter",link:`https://twitter.com/${t.twitterUrl}`}),t.discordUrl&&(0,s.jsx)(x,{name:"Discord",link:t.discordUrl})]})]})}),(0,s.jsx)(Re,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,s.jsx)(Pe,{asset:e,collection:t})})]})};var gt=n(44591),Ct=n(63415),yt=n(40976);const vt="960px",bt=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__Title",componentId:"sc-57e00d27-0"})`
  height: 16px;
  width: 136px;
`,kt=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__SubTitle",componentId:"sc-57e00d27-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${vt}) {
    width: 100%;
  }
`,jt=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__Seller",componentId:"sc-57e00d27-2"})`
  height: 16px;
  width: 40px;
`,At=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__SellerAddress",componentId:"sc-57e00d27-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,_t=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__PrimaryBody",componentId:"sc-57e00d27-4"})`
  width: 100%;
  height: 260px;
`,Dt=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__ActivityLoader",componentId:"sc-57e00d27-5"})`
  width: 100%;
  height: 428px;
`,Nt=(0,f.default)(gt.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__PrimaryContent",componentId:"sc-57e00d27-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${vt}) {
    max-width: 100%;
  }
`,It=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__LoaderContainer",componentId:"sc-57e00d27-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,Ut=(0,f.default)(de.X).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowContainer",componentId:"sc-57e00d27-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${vt}) {
    width: 100%;
  }
`,$t=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__LoadingContainer",componentId:"sc-57e00d27-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${yt.bc}

  @media (max-width: ${vt}) {
    max-width: 100%;
    margin-top: 0;
  }
`,Tt=(0,f.default)(gt.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__StyledColumn",componentId:"sc-57e00d27-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${vt}) {
    max-width: 100%;
  }
`,St=(0,f.default)(gt.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-57e00d27-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${vt}) {
    display: none;
  }
`,Pt=(0,f.default)(gt.ZP).withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-57e00d27-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${vt}) {
    display: flex;
  }
`,Ot=()=>{const e=(0,f.useTheme)();return(0,s.jsxs)($t,{children:[(0,s.jsxs)(Tt,{children:[(0,s.jsx)(It,{children:(0,s.jsx)(Ct.ZP,{stroke:e.accent1,size:"40px"})}),(0,s.jsxs)(Pt,{children:[(0,s.jsxs)(gt.ZP,{children:[(0,s.jsx)(bt,{}),(0,s.jsx)(kt,{})]}),(0,s.jsx)(Ut,{}),(0,s.jsxs)(gt.ZP,{children:[(0,s.jsx)(jt,{}),(0,s.jsx)(At,{})]})]}),(0,s.jsxs)(Nt,{children:[(0,s.jsx)(_t,{}),(0,s.jsx)(Dt,{}),(0,s.jsx)(_t,{}),(0,s.jsx)(_t,{})]})]}),(0,s.jsxs)(St,{children:[(0,s.jsxs)(gt.ZP,{children:[(0,s.jsx)(bt,{}),(0,s.jsx)(kt,{})]}),(0,s.jsx)(Ut,{}),(0,s.jsxs)(gt.ZP,{children:[(0,s.jsx)(jt,{}),(0,s.jsx)(At,{})]})]})]})};var Ft=n(37018),Ht=n(437),Lt=n(76885);const Et=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\asset\\Asset__AssetContainer",componentId:"sc-d3de3c52-0"})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,zt=f.default.div.withConfig({displayName:"C:\\Users\\Awaken\\Desktop\\uniswap-interface\\test\\apps\\web\\src\\nft\\pages\\asset\\Asset__AssetPriceDetailsContainer",componentId:"sc-d3de3c52-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`,Bt=()=>{const{tokenId:e="",contractAddress:t=""}=(0,T.UO)(),{data:n,loading:p}=function(e,t){var n,s,i,a,c,p,m,f,u,h,x;const{data:w,loading:g}=(0,d.CVZ)({variables:{address:e,tokenId:t}}),C=null===(i=w)||void 0===i||null===(s=i.nftAssets)||void 0===s||null===(n=s.edges[0])||void 0===n?void 0:n.node,y=null===(a=C)||void 0===a?void 0:a.collection,v=null===(m=C)||void 0===m||null===(p=m.listings)||void 0===p||null===(c=p.edges[0])||void 0===c?void 0:c.node,b=(0,r.parseEther)((0,o.K3)((null===(h=v)||void 0===h||null===(u=h.price)||void 0===u||null===(f=u.value)||void 0===f?void 0:f.toString())??"0")).toString();return(0,l.useMemo)((()=>{var n,s,i,a,r,o,l,d,c,p,m,f,u,h,x,w,k,j,A,_,D,N,I,U,$,T,S,P,O,F,H,L,E,z,B,R,Z,M,V,X,G,W,q;return{data:[{id:null===(n=C)||void 0===n?void 0:n.id,address:e,notForSale:null===(null===(s=C)||void 0===s?void 0:s.listings),collectionName:null===(a=C)||void 0===a||null===(i=a.collection)||void 0===i?void 0:i.name,collectionSymbol:null===(l=C)||void 0===l||null===(o=l.collection)||void 0===o||null===(r=o.image)||void 0===r?void 0:r.url,imageUrl:null===(c=C)||void 0===c||null===(d=c.image)||void 0===d?void 0:d.url,animationUrl:null===(p=C)||void 0===p?void 0:p.animationUrl,marketplace:null===(m=v)||void 0===m?void 0:m.marketplace.toLowerCase(),name:null===(f=C)||void 0===f?void 0:f.name,priceInfo:{ETHPrice:b,baseAsset:"ETH",baseDecimals:"18",basePrice:b},susFlag:null===(u=C)||void 0===u?void 0:u.suspiciousFlag,sellorders:null===(x=C)||void 0===x||null===(h=x.listings)||void 0===h?void 0:h.edges.map((e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0}))),smallImageUrl:null===(k=C)||void 0===k||null===(w=k.smallImage)||void 0===w?void 0:w.url,tokenId:t,tokenType:null===(D=C)||void 0===D||null===(_=D.collection)||void 0===_||null===(A=_.nftContracts)||void 0===A||null===(j=A[0])||void 0===j?void 0:j.standard,collectionIsVerified:null===(I=C)||void 0===I||null===(N=I.collection)||void 0===N?void 0:N.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:null===($=C)||void 0===$||null===(U=$.rarities)||void 0===U?void 0:U.map((e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"})))},ownerAddress:null===(T=C)||void 0===T?void 0:T.ownerAddress,creator:{profile_img_url:(null===(O=C)||void 0===O||null===(P=O.creator)||void 0===P||null===(S=P.profileImage)||void 0===S?void 0:S.url)??"",address:(null===(H=C)||void 0===H||null===(F=H.creator)||void 0===F?void 0:F.address)??""},metadataUrl:(null===(L=C)||void 0===L?void 0:L.metadataUrl)??"",traits:null===(z=C)||void 0===z||null===(E=z.traits)||void 0===E?void 0:E.map((e=>({trait_type:e.name??"",trait_value:e.value??""})))},{collectionDescription:null===(B=y)||void 0===B?void 0:B.description,collectionImageUrl:null===(Z=y)||void 0===Z||null===(R=Z.image)||void 0===R?void 0:R.url,collectionName:null===(M=y)||void 0===M?void 0:M.name,isVerified:null===(V=y)||void 0===V?void 0:V.isVerified,totalSupply:null===(X=y)||void 0===X?void 0:X.numAssets,twitterUrl:null===(G=y)||void 0===G?void 0:G.twitterName,discordUrl:null===(W=y)||void 0===W?void 0:W.discordUrl,externalUrl:null===(q=y)||void 0===q?void 0:q.homepageUrl}],loading:g}}),[e,C,y,b,null===(x=v)||void 0===x?void 0:x.marketplace,g,t])}(t,e),[m,f]=n,u=(0,l.useMemo)((()=>({title:(0,Lt.H)(m.name,f.collectionName,e),image:window.location.origin+"/api/image/nfts/asset/"+t+"/"+e,url:window.location.href,description:f.collectionDescription??"View traits, trading activity, descriptions, and other details on your NFTs."})),[m.name,f.collectionDescription,f.collectionName,t,e]),h=(0,Ft.X)(u);return o._P.includes(t)?(0,s.jsx)(T.Fg,{to:"/nfts",replace:!0}):p?(0,s.jsx)(Ot,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Ht.Helmet,{children:[(0,s.jsxs)("title",{children:[m.name??""," ",m.name?"|":""," ",f.collectionName??c.t`Explore NFTs`," on Uniswap"]}),h.map(((e,t)=>(0,s.jsx)("meta",{...e},t)))]}),(0,s.jsx)(a.fM,{page:i.yJ.NFT_DETAILS_PAGE,properties:{collection_address:t,token_id:e},shouldLogImpression:!0,children:m&&f?(0,s.jsxs)(Et,{children:[(0,s.jsx)(wt,{collection:f,asset:m}),(0,s.jsx)(zt,{children:(0,s.jsx)(ae,{collection:f,asset:m})})]}):null})]})}},76885:(e,t,n)=>{function s(e,t){return e?"Get "+e+" on Uniswap":t?"Get "+t+" on Uniswap":"View Token on Uniswap"}function i(e,t,n){return e||(t&&n?t+" #"+n:n?"Asset #"+n:"View NFT on Uniswap")}n.d(t,{H:()=>i,u:()=>s})}}]);
//# sourceMappingURL=2225.f7330290.chunk.js.map