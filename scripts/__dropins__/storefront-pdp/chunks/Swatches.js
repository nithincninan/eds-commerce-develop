import{jsx as f,jsxs as q}from"@dropins/tools/preact-jsx-runtime.js";import{useState as C,useEffect as g,useMemo as L,useCallback as _}from"@dropins/tools/preact-compat.js";import{classes as $}from"@dropins/tools/lib.js";import{Picker as y,ColorSwatch as J,ImageSwatch as M,TextSwatch as R}from"@dropins/tools/components.js";/* empty css     */import{useText as z}from"@dropins/tools/i18n.js";const A=["text","image","color","dropdown"],B=d=>d.map(n=>({...n,text:n.label,disabled:!n.inStock}));function F(d,n){return d.reduce((h,b)=>{const i=n==null?void 0:n.find(s=>s.items.find(k=>k.id===b));if(!i)return h;const w=i.items.find(s=>s.id===b);return{...h,[i.id]:{label:w.label,value:w.id}}},{})}const Z=({options:d,hideSelectedValue:n,selectedUIDs:h,onValues:b,onErrors:i,defaultOptions:w,selectionsToUpdate:s,className:k,children:G,...N})=>{const P=z("PDP.Swatches.Required.label").label,[S,m]=C(()=>d==null?void 0:d.reduce((r,e)=>{const{items:a}=e,u=a==null?void 0:a.find(c=>w==null?void 0:w.includes(c.id)),t=a==null?void 0:a.find(c=>c.selected);return u?{...r,[e.id]:{label:u.label,value:u.id}}:t?{...r,[e.id]:{label:t.label,value:t.id}}:r},{}));g(()=>{if(h){const l=F(h,d);if(JSON.stringify(l)===JSON.stringify(S))return;x(Object.keys(l)[0],l[Object.keys(l)[0]].label,h[0])}},[h]),g(()=>{s==null||s.forEach(l=>{m(r=>{var u;const e=(u=l==null?void 0:l.items)==null?void 0:u.find(t=>t.selected);return e?{...r,[l.id]:{label:e==null?void 0:e.label,value:e==null?void 0:e.id}}:r})})},[s,m]),L(()=>{const l=d==null?void 0:d.reduce((r,e)=>{var u;let a=!1;return(u=e==null?void 0:e.items)==null||u.forEach(t=>{var v;((v=S[e.id])==null?void 0:v.value)===t.id&&(a=!0)}),e.required&&!a&&(r[e.id]=P),r},{});return i==null||i(l),l},[S]);const x=_((l,r,e)=>{m(a=>{const u={...a,[l]:{label:r,value:e}};return b==null||b(u,e),u})},[b]),j=(l,r)=>{var a;const e=((a=r.selectedOptions[0])==null?void 0:a.label)??"";x(l,e,r.value)},O=_(({items:l,id:r,required:e,type:a,selected:u,label:t})=>(l==null?void 0:l.length)>0&&f("div",{className:$(["pdp-swatches__options"]),children:(a==null?void 0:a.toLowerCase())==="dropdown"?f(y,{"aria-label":t,handleSelect:c=>j(r,c.target),options:B(l),value:u}):l==null?void 0:l.map(c=>{const v={key:c.id,id:c.id,name:r,value:c.value,label:c.label,groupAriaLabel:t,selected:u===c.id,outOfStock:!c.inStock,required:e===null?!0:e,onValue:()=>{x(r,c.label,c.id)}};switch(a){case"text":return f(R,{...v,label:c.label});case"image":return f(M,{...v,src:c.value,alt:c.label});case"color":return f(J,{...v,size:"large",color:c.value});default:return console.warn(`Invalid swatch type ${a}`),null}})}),[]);return f("div",{...N,className:$(["pdp-swatches",k]),children:d==null?void 0:d.map(({type:l,label:r,id:e,multiple:a,required:u,items:t})=>{var c;return A.includes(l)||console.warn(`Invalid swatch type ${l}`),a&&console.warn("Multiple selection swatches are not currently supported."),q("div",{id:`swatch-item-${e}`,"data-slot-key":`product-swatch--${e}`,className:"pdp-swatches__field",children:[f("div",{className:"pdp-swatches__field__label",children:S[e]?n?`${r}`:`${r}: ${S[e].label}`:r}),f(O,{id:e,type:l,required:u,items:t,label:r,selected:(c=S[e])==null?void 0:c.value})]},`swatch-item-${e}`)})})};export{Z as S};