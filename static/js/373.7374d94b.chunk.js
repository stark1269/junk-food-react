"use strict";(self.webpackChunkjunk_food_react=self.webpackChunkjunk_food_react||[]).push([[373],{5373:function(n,e,o){o.r(e),o.d(e,{default:function(){return q}});var r,t,i,a,d,s,l,c,u,p,h=o(9439),x=o(2791),f=o(168),m=o(5867),g=o(1087),w=m.zo.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 30%;\n  }\n"]))),b=m.zo.li(t||(t=(0,f.Z)(["\n  padding: 12px;\n  border: none;\n  border-radius: 12px;\n  background-color: #00000070;\n"]))),j=(0,m.zo)(g.OL)(i||(i=(0,f.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-family: 'Josefin Sans';\n  font-size: 24px;\n  &.active {\n    color: greenyellow;\n  }\n"]))),k=o(7689),v=m.ZP.div(a||(a=(0,f.Z)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nbackground-color: rgba(60, 60, 60, 0.8);\n"]))),Z=m.ZP.div(d||(d=(0,f.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nwidth: 90%;\npadding: 18px;\nborder-radius: 6px;\nbackground-color: black;\n@media (min-width: 768px) {\n  width: 400px;\n  height: 250px;\n}\n"]))),y=m.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 72px;\n  align-items: center;\n"]))),C=m.ZP.div(l||(l=(0,f.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),S=m.ZP.button(c||(c=(0,f.Z)(["\n  border-radius: 6px;\n  padding: 4px;\n  font-weight: 500;\n  border: none;\n  background-color: white;\n  transition: background-color 300ms linear;\n  &:hover {\n    background-color: greenyellow;\n  }\n"]))),_=m.ZP.p(u||(u=(0,f.Z)(["\n  text-align: center;\n  font-size: 24px;\n  font-family: 'Josefin Sans';\n  color: white;\n"]))),P=o(4164),z=o(184),O=document.querySelector("#modal-root"),I=function(n){var e=n.setIsModalOpen,o=n.setShopCart,r=(0,k.s0)();return(0,P.createPortal)((0,z.jsx)(v,{children:(0,z.jsx)(Z,{children:(0,z.jsxs)(y,{children:[(0,z.jsx)(_,{children:"You already have food from another restaurant in your cart. Do you want to start a new order or go back to a previous one?"}),(0,z.jsxs)(C,{children:[(0,z.jsx)(S,{onClick:function(){e(!1),r("/shop-cart")},children:"Go back to the previous"}),(0,z.jsx)(S,{onClick:function(){e(!1),o([])},children:"Start a new order"})]})]})})}),O)},J=function(n){var e=n.menu,o=n.shopCart,r=n.setShopCart,t=(0,x.useState)(!1),i=(0,h.Z)(t,2),a=i[0],d=i[1];return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(w,{children:e.map((function(n){return(0,z.jsx)(b,{children:(0,z.jsx)(j,{onClick:function(){return function(n){var e=null===o||void 0===o?void 0:o.some((function(e){return e.rest_name===n}));o.length&&!e&&d(!0)}(n.rest_name)},to:"/rest/".concat(n.rest_name),children:n.rest_name})},n.id)}))}),a&&(0,z.jsx)(I,{setShopCart:r,setIsModalOpen:d})]})},M=m.zo.div(p||(p=(0,f.Z)(["\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),q=function(n){var e=n.menu,o=n.shopCart,r=n.setShopCart;return(0,z.jsxs)(M,{children:[(0,z.jsx)(J,{shopCart:o,setShopCart:r,menu:e}),(0,z.jsx)(k.j3,{})]})}}}]);
//# sourceMappingURL=373.7374d94b.chunk.js.map