import{e as t}from"./index-7e17df3a.js";import{g as r}from"./data-8d72ffdb.js";const l=!0,s=async({fetch:o,url:n})=>{let e;try{e=await(await o("/data.json")).json()}catch(a){throw t(500,`${a}`)}r.set(e)},c=Object.freeze(Object.defineProperty({__proto__:null,prerender:l,load:s},Symbol.toStringTag,{value:"Module"}));export{c as _,s as l,l as p};
