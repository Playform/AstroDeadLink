import a from"./Option/Index.js";import{Merge as n}from"files-pipe";var f=(o={})=>{for(const t in o)Object.prototype.hasOwnProperty.call(o,t)&&o[t]===!0&&(o[t]=a[t]);const e=n(a,o),r=new Set;if(typeof e.path<"u"&&(e.path instanceof Array||e.path instanceof Set))for(const t of e.path)r.add(t);return{name:"astro-dead-links",hooks:{"astro:build:done":async({dir:t})=>{r.size||r.add(t)}}}};export{f as default};
