"use strict";(self.webpackChunkjunk_food_react=self.webpackChunkjunk_food_react||[]).push([[373],{5373:function(n,e,o){o.r(e),o.d(e,{default:function(){return q}});var r,t,a,i,s,c,d,l,u,p,h=o(9439),f=o(2791),x=o(168),b=o(5867),g=o(1087),m=b.zo.ul(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 30%;\n"]))),j=b.zo.li(t||(t=(0,x.Z)(["\n  padding: 12px;\n  border: none;\n  border-radius: 12px;\n  background-color: #eeeeee7d;\n"]))),k=(0,b.zo)(g.OL)(a||(a=(0,x.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  color: black;\n  font-family: 'Josefin Sans';\n  font-size: 24px;\n  &.active {\n    color: #2b7b0c;\n  }\n"]))),v=o(7689),Z=b.ZP.div(i||(i=(0,x.Z)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nbackground-color: rgba(0,0,0,.8);;\n"]))),C=b.ZP.div(s||(s=(0,x.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nwidth: 400px;\nheight: 250px;\npadding: 18px;\nborder-radius: 6px;\nbackground-color: white;\n"]))),w=b.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 72px;\n  align-items: center;\n"]))),y=b.ZP.div(d||(d=(0,x.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),S=b.ZP.button(l||(l=(0,x.Z)(["\n  border-radius: 6px;\n  padding: 4px;\n  font-weight: 500;\n  border: none;\n  background-color: #eeeeee7d;\n  transition: color 300ms linear, background-color 300ms linear;\n  &:hover {\n    color: white;\n    background-color: #2b7b0c;\n  }\n"]))),_=b.ZP.p(u||(u=(0,x.Z)(["\n  text-align: center;\n  font-size: 24px;\n  font-family: 'Josefin Sans';\n"]))),P=o(4164),z=o(184),O=document.querySelector("#modal-root"),I=function(n){var e=n.setIsModalOpen,o=n.setShopCart,r=(0,v.s0)();return(0,P.createPortal)((0,z.jsx)(Z,{children:(0,z.jsx)(C,{children:(0,z.jsxs)(w,{children:[(0,z.jsx)(_,{children:"You already have food from another restaurant in your cart. Do you want to start a new order or go back to a previous one?"}),(0,z.jsxs)(y,{children:[(0,z.jsx)(S,{onClick:function(){e(!1),r("/shop-cart")},children:"Go back to the previous"}),(0,z.jsx)(S,{onClick:function(){e(!1),o([])},children:"Start a new order"})]})]})})}),O)},J=function(n){var e=n.menu,o=n.shopCart,r=n.setShopCart,t=(0,f.useState)(!1),a=(0,h.Z)(t,2),i=a[0],s=a[1];return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m,{children:e.map((function(n){return(0,z.jsx)(j,{children:(0,z.jsx)(k,{onClick:function(){return function(n){var e=null===o||void 0===o?void 0:o.some((function(e){return e.rest_name===n}));o.length&&!e&&s(!0)}(n.rest_name)},to:"/rest/".concat(n.rest_name),children:n.rest_name})},n.id)}))}),i&&(0,z.jsx)(I,{setShopCart:r,setIsModalOpen:s})]})},M=b.zo.div(p||(p=(0,x.Z)(["\n  padding: 22px;\n  display: flex;\n  gap: 20px;\n"]))),q=function(n){var e=n.menu,o=n.shopCart,r=n.setShopCart;return(0,z.jsxs)(M,{children:[(0,z.jsx)(J,{shopCart:o,setShopCart:r,menu:e}),(0,z.jsx)(v.j3,{})]})}}}]);
//# sourceMappingURL=373.a6c78929.chunk.js.map