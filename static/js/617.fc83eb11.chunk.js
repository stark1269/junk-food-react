"use strict";(self.webpackChunkjunk_food_react=self.webpackChunkjunk_food_react||[]).push([[617],{1617:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,i,a,d,s,l,o,c,p=t(168),u=t(5867),x=u.zo.div(r||(r=(0,p.Z)(["\n  width: 50%;\n"]))),h=u.zo.ul(i||(i=(0,p.Z)(["\n  width: 100%;\n  padding: 18px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),j=u.zo.li(a||(a=(0,p.Z)(["\n  width: calc((100% - 16px) / 2);\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  border-radius: 12px;\n  background-color: #eeeeee7d;\n"]))),f=t(8820),m=t(184),g=function(n){var e=n.DeleteShopCart,t=n.shopCart,r=n.updateCart,i=t.reduce((function(n,e){return n+=e.quantity*e.price}),0);return(0,m.jsxs)(x,{children:[(0,m.jsx)(h,{children:t.map((function(n){return(0,m.jsxs)(j,{children:[(0,m.jsx)("img",{src:n.picture,alt:n.name,width:200}),(0,m.jsxs)("h2",{children:["Name: ",n.name]}),(0,m.jsxs)("p",{children:["Price: ",n.price*n.quantity,"$"]}),(0,m.jsx)("button",{disabled:1===n.quantity,onClick:function(){return r(n.id,-1)},children:"-"}),(0,m.jsx)("input",{type:"text",value:n.quantity,readOnly:!0}),(0,m.jsx)("button",{onClick:function(){return r(n.id,1)},children:"+"}),(0,m.jsx)("button",{onClick:function(){return e(n.id)},children:(0,m.jsx)(f.YK6,{})})]},n.id)}))}),(0,m.jsxs)("p",{children:["Total Price: ",i]})]})},y=t(5705),b=(0,u.zo)(y.l0)(d||(d=(0,p.Z)(["\n  padding: 22px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  border: 1px solid black;\n  border-radius: 12px;\n  width: 50%;\n  height: 100%;\n"]))),C=u.zo.label(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n"]))),k=(0,u.zo)(y.gN)(l||(l=(0,p.Z)(["\n  width: 100%;\n"]))),w=u.zo.button(o||(o=(0,p.Z)(["\n  border-radius: 6px;\n"]))),v=function(n){var e=n.shopCart.reduce((function(n,e){return n.push({name:e.name,quantity:e.quantity}),n}),[]);return(0,m.jsx)(y.J9,{initialValues:{name:"",phone:"",address:""},onSubmit:function(n,t){var r=t.resetForm;console.log(n,n.order=e),r()},children:(0,m.jsxs)(b,{children:[(0,m.jsxs)(C,{children:["Name",(0,m.jsx)(k,{type:"text",name:"name"})]}),(0,m.jsxs)(C,{children:["Phone",(0,m.jsx)(k,{type:"tel",name:"phone"})]}),(0,m.jsxs)(C,{children:["Address",(0,m.jsx)(k,{type:"search",name:"address"})]}),(0,m.jsx)(w,{type:"submit",children:"Order"})]})})},z=t(7689),Z=u.zo.div(c||(c=(0,p.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 22px;\n"]))),q=function(n){var e=n.shopCart,t=n.DeleteShopCart,r=n.updateCart;return e.length?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(Z,{children:[(0,m.jsx)(v,{shopCart:e}),(0,m.jsx)(g,{shopCart:e,DeleteShopCart:t,updateCart:r})]})}):(0,m.jsx)(z.Fg,{to:"/rest"})}}}]);
//# sourceMappingURL=617.fc83eb11.chunk.js.map