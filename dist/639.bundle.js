(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{639:(e,t,r)=>{"use strict";r.r(t);var n=r(294),o=r.n(n),a=r(697),c=r.n(a),u=function(e){var t,r=e.className,n=e.columns,a=[],c=[],u=1,l=o().Children.toArray(e.children),i="row-col-container ".concat(r=r||"");if(n=Number.parseInt(n),l.length<=0)return null;a=[],c=[],t="".concat(12/n),u=1;for(var s=1;s<=l.length;s++){var f="column-".concat(t," ").concat(r,"-column-"),p="".concat("row ").concat(r,"-row-");f+=s,c.push(o().createElement("div",{className:f,key:f},l[s-1])),s%n!=0&&s!==l.length||(p+=u,a.push(o().createElement("div",{className:p,key:"row".concat(s)},c)),u++,c=[])}return o().createElement("div",{className:i},a)};u.propTypes={className:c().string,columns:c().number,children:c().oneOfType([c().arrayOf(c().node),c().node])};const l=u;var i=r(895);const s=function(e,t){var r;return function(){var n=this,o=arguments;clearTimeout(r),r=setTimeout((function(){return e.apply(n,o)}),t)}};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={searchText:"",isLoading:!1,results:[]};function E(e,t){switch(t.type){case"SET_LOADING":return m({},e,{isLoading:!0,results:[],searchText:t.payload});case"FETCH_COMPLETE":return m({},e,{isLoading:!1,results:t.payload});case"SET_SEARCH_TEXT":return m({},e,{searchText:t.payload,results:[]});default:throw new Error}}function v(e){var t,r=p((0,n.useReducer)(E,b),2),a=r[0],c=r[1],u=e.delay,l=void 0===u?500:u,y=a.isLoading,m=a.results,d=a.searchText,v=(0,n.useRef)(""),h=(0,n.useRef)(s((function(){var t=v.current.value;if(""!==t){c({type:"SET_LOADING",payload:t});var r=e.getResults(t);null===r||"object"!==f(r)&&"function"!=typeof r||"function"!=typeof r.then?c({type:"FETCH_COMPLETE",payload:[]}):r.then((function(e){c({type:"FETCH_COMPLETE",payload:e})}))}}),l)).current;function T(e){c({type:"SET_SEARCH_TEXT",payload:e.target.innerHTML})}return o().createElement("div",{className:"autocomplete-container"},o().createElement("input",{type:"text",onChange:function(e){c({type:"SET_SEARCH_TEXT",payload:e.target.value}),h()},value:d,ref:v}),y&&o().createElement(i.Z,null),(t="",m.length>0&&(t=o().createElement("div",{className:"autocomplete-results"},m.map((function(e,t){return o().createElement("div",{className:"autocomplete-results-row",key:t,id:"ac-results-".concat(t),onClick:T},e)})))),t))}v.propTypes={getResults:c().func.isRequired,delay:c().number};const h=v;function T(e){var t=["arun","ramya","ram","wk"];return new Promise((function(r,n){setTimeout((function(){var n=t.filter((function(t){return-1!=t.search(e)}));r(n)}),1e3)}))}function O(){return o().createElement(l,{columns:1},"Hello Dynamic Container",o().createElement(h,{getResults:T}))}r.d(t,{default:()=>O})}}]);
//# sourceMappingURL=639.bundle.js.map