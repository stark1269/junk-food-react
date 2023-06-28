(self.webpackChunkjunk_food_react=self.webpackChunkjunk_food_react||[]).push([[445],{9445:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ne}});var r,o,i,c,u,a,l,s,p,f,d,y,m,h,b,g,x,v,O=t(168),j=t(5867),w=j.zo.div(r||(r=(0,O.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  @media (min-width: 768px) {\n    width: 50%;\n  }\n"]))),S=j.zo.h2(o||(o=(0,O.Z)(["\n  font-size: 38px;\n  font-family: 'Josefin Sans';\n  color: ",";\n"])),(function(e){return e.theme.colors.white})),P=j.zo.p(i||(i=(0,O.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  font-family: 'Josefin Sans';\n  color: ",";\n"])),(function(e){return e.theme.colors.white})),_=j.zo.ul(c||(c=(0,O.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),C=j.zo.li(u||(u=(0,O.Z)(["\n  width: 100%;\n  position: relative;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  border-radius: 12px;\n  background-color: ",";\n  @media (min-width: 768px) {\n    width: calc((100% - 16px) / 2);\n  }\n"])),(function(e){return e.theme.colors.bgc})),k=j.zo.button(a||(a=(0,O.Z)(["\n  position: absolute;\n  top: 4px;\n  right: 0;\n  border: none;\n  background-color: transparent;\n  color: ",";\n  font-size: 22px;\n  transition: transform 300ms linear;\n  &:hover {\n    transform: scale(1.2);\n  }\n"])),(function(e){return e.theme.colors.error})),E=j.zo.div(l||(l=(0,O.Z)(["\n  display: flex;\n  gap: 6px;\n"]))),M=j.zo.input(s||(s=(0,O.Z)(["\n  width: 34px;\n  text-align: center;\n  border-radius: 6px;\n"]))),R=j.zo.button(p||(p=(0,O.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: none;\n  color: ",";\n  transition: background-color 300ms linear;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.success})),z=j.zo.button(f||(f=(0,O.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 26px;\n  height: 26px;\n  border: none;\n  border-radius: 50%;\n  color: ",";\n  transition: color 300ms linear, background-color 300ms linear;\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.error})),A=t(8820),T=t(184),Z=function(e){var n=e.DeleteShopCart,t=e.shopCart,r=e.updateCart,o=t.reduce((function(e,n){return e+=n.quantity*n.price}),0);return(0,T.jsxs)(w,{children:[(0,T.jsxs)(S,{children:["Total Price: ",o,"$"]}),(0,T.jsx)(_,{children:t.map((function(e){return(0,T.jsxs)(C,{children:[(0,T.jsx)("img",{loading:"lazy",src:e.picture,alt:e.name,width:200}),(0,T.jsx)(P,{children:e.name}),(0,T.jsxs)(P,{children:["Price: ",e.price*e.quantity,"$"]}),(0,T.jsxs)(E,{children:[(0,T.jsx)(z,{disabled:1===e.quantity,onClick:function(){return r(e.id,-1)},children:"-"}),(0,T.jsx)(M,{type:"text",value:e.quantity,readOnly:!0}),(0,T.jsx)(R,{onClick:function(){return r(e.id,1)},children:"+"})]}),(0,T.jsx)(k,{onClick:function(){return n(e.id)},children:(0,T.jsx)(A.YK6,{})})]},e.id)}))})]})},L=t(9439),I=t(5705),q=t(6727),G=t(5568),B=(0,j.zo)(G.default)(d||(d=(0,O.Z)(["\n  width: 100%;\n  padding: 6px;\n  border-radius: 6px;\n  color: ",";\n  background-color: ",";\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.bgc})),D=j.zo.form(y||(y=(0,O.Z)(["\n  top: 22px;\n  padding: 22px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  border: 1px solid black;\n  border-radius: 12px;\n  width: 100%;\n  height: 100%;\n  @media (min-width: 768px) {\n    position: sticky;\n    width: 50%;\n  }\n"]))),U=j.zo.label(m||(m=(0,O.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n  font-size: 22px;\n  color: ",";\n"])),(function(e){return e.theme.colors.white})),K=j.zo.span(h||(h=(0,O.Z)(["\n  font-family: 'Josefin Sans';\n  position: relative;\n  &::after {\n    content: '*';\n    position: absolute;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.error})),W=j.zo.input(b||(b=(0,O.Z)(["\n  width: 100%;\n  padding: 6px;\n  border-radius: 6px;\n  color: ",";\n  background-color: ",";\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.bgc})),F=j.zo.button(g||(g=(0,O.Z)(["\n  padding: 6px;\n  font-size: 22px;\n  font-family: 'Josefin Sans';\n  border: none;\n  border-radius: 6px;\n  color: ",";\n  background-color: ",";\n  transition: background-color 300ms linear;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.bgc}),(function(e){return e.theme.colors.current})),V=t(1686),H=t.n(V),J=j.zo.iframe(x||(x=(0,O.Z)(["\n  border: none;\n  border-radius: 6px;\n"]))),Y=function(e){var n=e.coordinate;return(0,T.jsx)(J,{title:"map",width:"100%",height:300,loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:"".concat("https://www.google.com/maps/embed/v1/place","?key=").concat("AIzaSyCrs9IgGlZ0hl2-4pueyi1ESmZ7nR5YSq4","\n        &q=").concat(n.lat,"+").concat(n.lng)})},N=t(2791),$=q.Ry({name:q.Z_().required("Required"),phone:q.Z_().required("Required"),address:q.Z_().required("Required")}),Q=function(e){var n=e.shopCart,t=e.setShopCart,r=(0,N.useState)({lat:50.450152,lng:30.524047}),o=(0,L.Z)(r,2),i=o[0],c=o[1],u=n.reduce((function(e,n){return e.push({name:n.name,quantity:n.quantity}),e}),[]),a=(0,I.TA)({initialValues:{name:"",phone:"",address:""},validationSchema:$,onSubmit:function(e,n){var r=n.resetForm;console.log(e,e.order=u),r(),t([]),H().Notify.success("".concat(e.name,", thank you for your order"))}});return(0,T.jsxs)(D,{onSubmit:a.handleSubmit,children:[(0,T.jsxs)(U,{children:[(0,T.jsx)(K,{children:"Name"}),(0,T.jsx)(W,{type:"text",name:"name",value:a.values.name,onChange:a.handleChange})]}),(0,T.jsxs)(U,{children:[(0,T.jsx)(K,{children:"Phone"}),(0,T.jsx)(W,{type:"tel",name:"phone",value:a.values.phone,onChange:a.handleChange})]}),(0,T.jsxs)(U,{children:[(0,T.jsx)(K,{children:"Address"}),(0,T.jsx)(B,{onPlaceSelected:function(e){var n=e.geometry.location,t=n.lat,r=n.lng;c({lat:t(),lng:r()}),a.setFieldValue("address",e.formatted_address||"")},options:{types:["address"],componentRestrictions:{country:"ua"}},apiKey:"AIzaSyCrs9IgGlZ0hl2-4pueyi1ESmZ7nR5YSq4",type:"text",name:"address",placeholder:"",value:a.values.address,onChange:a.handleChange})]}),(0,T.jsx)(Y,{coordinate:i}),(0,T.jsx)(F,{type:"submit",children:"Order"})]})},X=t(7689),ee=j.zo.div(v||(v=(0,O.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 22px;\n  padding: 22px;\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),ne=function(e){var n=e.shopCart,t=e.DeleteShopCart,r=e.updateCart,o=e.setShopCart;return n.length?(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(ee,{children:[(0,T.jsx)(Q,{shopCart:n,setShopCart:o}),(0,T.jsx)(Z,{shopCart:n,DeleteShopCart:t,updateCart:r})]})}):(0,T.jsx)(X.Fg,{to:"/rest"})}},888:function(e,n,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5568:function(e,n,t){"use strict";e.exports=t(3984)},7802:function(e,n,t){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=i?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(o,c,u):o[c]=e[c]}o.default=e,t&&t.set(e,o);return o}(t(2791)),i=u(t(2007)),c=u(t(9476));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e){var n=e.onPlaceSelected,t=e.apiKey,r=e.libraries,i=e.inputAutocompleteValue,u=e.options,a=e.googleMapsScriptBaseUrl,p=e.refProp,f=e.language,d=s(e,["onPlaceSelected","apiKey","libraries","inputAutocompleteValue","options","googleMapsScriptBaseUrl","refProp","language"]),y=(0,c.default)({ref:p,googleMapsScriptBaseUrl:a,onPlaceSelected:n,apiKey:t,libraries:r,inputAutocompleteValue:i,options:u,language:f}).ref;return o.default.createElement("input",l({ref:y},d))}p.propTypes={apiKey:i.default.string,libraries:i.default.arrayOf(i.default.string),ref:i.default.oneOfType([i.default.func,i.default.shape({current:i.default.any})]),googleMapsScriptBaseUrl:i.default.string,onPlaceSelected:i.default.func,inputAutocompleteValue:i.default.string,options:i.default.shape({componentRestrictions:i.default.object,bounds:i.default.object,location:i.default.object,offset:i.default.number,origin:i.default.object,radius:i.default.number,sessionToken:i.default.object,types:i.default.arrayOf(i.default.string)}),language:i.default.string};var f=(0,o.forwardRef)((function(e,n){return o.default.createElement(p,l({},e,{refProp:n}))}));n.default=f},6615:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.GOOGLE_MAP_SCRIPT_BASE_URL=void 0;n.GOOGLE_MAP_SCRIPT_BASE_URL="https://maps.googleapis.com/maps/api/js"},3984:function(e,n,t){"use strict";Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.default}});var r=i(t(7802)),o=i(t(9476));function i(e){return e&&e.__esModule?e:{default:e}}},9476:function(e,n,t){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=e.ref,t=e.onPlaceSelected,r=e.apiKey,u=e.libraries,a=void 0===u?"places":u,s=e.inputAutocompleteValue,p=void 0===s?"new-password":s,f=e.options,d=(f=void 0===f?{}:f).types,y=void 0===d?["(cities)"]:d,m=f.componentRestrictions,h=f.fields,b=void 0===h?["address_components","geometry.location","place_id","formatted_address"]:h,g=f.bounds,x=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(f,["types","componentRestrictions","fields","bounds"]),v=e.googleMapsScriptBaseUrl,O=void 0===v?c.GOOGLE_MAP_SCRIPT_BASE_URL:v,j=e.language,w=(0,o.useRef)(null),S=(0,o.useRef)(null),P=(0,o.useRef)(null),_=(0,o.useRef)(null),C=j?"&language=".concat(j):"",k="".concat(O,"?libraries=").concat(a,"&key=").concat(r).concat(C),E=(0,o.useCallback)((function(){return(0,i.loadGoogleMapScript)(O,k)}),[O,k]);return(0,o.useEffect)((function(){var e=l(l({},x),{},{fields:b,types:y,bounds:g});if(m&&(e.componentRestrictions=m),!P.current&&w.current&&i.isBrowser){n&&!n.current&&(n.current=w.current);var o=function(){var n;return"undefined"===typeof google?console.error("Google has not been found. Make sure your provide apiKey prop."):null!==(n=google.maps)&&void 0!==n&&n.places?!w.current instanceof HTMLInputElement?console.error("Input ref must be HTMLInputElement."):(P.current=new google.maps.places.Autocomplete(w.current,e),void(P.current&&(S.current=P.current.addListener("place_changed",(function(){t&&P&&P.current&&t(P.current.getPlace(),w.current,P.current)}))))):console.error("Google maps places API must be loaded.")};return r?E().then((function(){return o()})):o(),function(){return S.current?S.current.remove():void 0}}}),[]),(0,o.useEffect)((function(){var e;(null===o.default||void 0===o.default||null===(e=o.default.version)||void 0===e||!e.startsWith("18"))&&i.isBrowser&&window.MutationObserver&&w.current&&w.current instanceof HTMLInputElement&&(_.current=new MutationObserver((function(){_.current.disconnect(),w.current&&(w.current.autocomplete=p)})),_.current.observe(w.current,{attributes:!0,attributeFilter:["autocomplete"]}))}),[p]),(0,o.useEffect)((function(){P.current&&P.current.setFields(b)}),[b]),(0,o.useEffect)((function(){P.current&&P.current.setBounds(g)}),[g]),(0,o.useEffect)((function(){P.current&&P.current.setComponentRestrictions(m)}),[m]),(0,o.useEffect)((function(){P.current&&P.current.setOptions(x)}),[x]),{ref:w,autocompleteRef:P}};var o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=u(n);if(t&&t.has(e))return t.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var a=i?Object.getOwnPropertyDescriptor(e,c):null;a&&(a.get||a.set)?Object.defineProperty(o,c,a):o[c]=e[c]}o.default=e,t&&t.set(e,o);return o}(t(2791)),i=t(2170),c=t(6615);function u(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(u=function(e){return e?t:n})(e)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},2170:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loadGoogleMapScript=n.isBrowser=void 0;var t="undefined"!==typeof window&&window.document;n.isBrowser=t;n.loadGoogleMapScript=function(e,n){if(!t)return Promise.resolve();if("undefined"!==typeof google&&google.maps&&google.maps.api)return Promise.resolve();var r=document.querySelectorAll('script[src*="'.concat(e,'"]'));if(r&&r.length)return new Promise((function(e){if("undefined"!==typeof google)return e();r[0].addEventListener("load",(function(){return e()}))}));var o=new URL(n);o.searchParams.set("callback","__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__");var i=document.createElement("script");return i.src=o.toString(),new Promise((function(e){window.__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__=e,document.body.appendChild(i)}))}}}]);
//# sourceMappingURL=445.1597ae75.chunk.js.map