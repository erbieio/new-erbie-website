import{j as e,r as l}from"./react-Dbae-1t-.js";import{N as h}from"./index-PK9vjt7K.js";import{S as x}from"./antd-CNAC7LZF.js";function m(t){return e.jsx("div",{className:"w-100% h-100% loading-component",children:e.jsx(x,{spinning:t.loading,children:t.children})})}function b(t){const[i,r]=l.useState([]),[o,d]=l.useState(!1);return l.useEffect(()=>{const s=[];t.dataSources&&t.dataSources.length&&t.dataSources.forEach(a=>{const n=[];t.columns.forEach(c=>{n.push(c)}),s.push({...a,children:n})}),r(s)},[t.columns,t.dataSources]),l.useEffect(()=>{t.loading?d(!1):d(!0)},[t.loading]),e.jsx("div",{className:"table-components-box w-100% h-100% min-h-30vh",children:e.jsx("div",{className:"h-100%",children:e.jsxs(m,{loading:t.loading,children:[e.jsxs("table",{className:"table-components w-100% text-left py-10px",children:[e.jsx("thead",{className:"table-thead",children:e.jsx("tr",{className:"table-thead-tr",children:t.columns.map((s,a)=>e.jsx("th",{className:"fw-light font-size-12px px-10px py-8px color-#80838e  text-center",style:{width:(s.width||0)+"px"},children:s.title},"t-thead-row-".concat(a)))})}),e.jsx("tbody",{className:"table-tbody",children:i.map((s,a)=>e.jsx("tr",{className:"table-tbody-tr h-24px",children:s.children.map((n,c)=>e.jsx("td",{className:"font-size-12px px-8px py-4px text-center",children:typeof n.render=="function"?n.render(s):s[n.key]},"t-body-row-".concat(a,"-").concat(c)))},a))})]}),!i.length&&o&&e.jsx("div",{className:"flex justify-center items-center h-100% min-h-48vh w-100%",children:e.jsx(h,{})})]})})})}export{b as T};
