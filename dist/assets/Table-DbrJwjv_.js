import{r as n,j as e}from"./react-Dbae-1t-.js";import{L as h,N as x}from"./index-DRYoLyEx.js";function u(t){const[d,i]=n.useState([]),[o,r]=n.useState(!1);return n.useEffect(()=>{const s=[];t.dataSources&&t.dataSources.length&&t.dataSources.forEach(a=>{const l=[];t.columns.forEach(c=>{l.push(c)}),s.push({...a,children:l})}),i(s)},[t.columns,t.dataSources]),n.useEffect(()=>{t.loading?r(!1):r(!0)},[t.loading]),e.jsx("div",{className:"table-components-box w-100% h-100% min-h-30vh",children:e.jsx("div",{className:"h-100%",children:e.jsxs(h,{loading:t.loading,children:[e.jsxs("table",{className:"table-components w-100% text-left py-10px",children:[e.jsx("thead",{className:"table-thead",children:e.jsx("tr",{className:"table-thead-tr",children:t.columns.map((s,a)=>e.jsx("th",{className:"fw-light font-size-12px px-10px py-8px color-#80838e  text-center",style:{width:(s.width||0)+"px"},children:s.title},"t-thead-row-".concat(a)))})}),e.jsx("tbody",{className:"table-tbody",children:d.map((s,a)=>e.jsx("tr",{className:"table-tbody-tr h-24px",children:s.children.map((l,c)=>e.jsx("td",{className:"font-size-12px px-8px py-4px text-center",children:typeof l.render=="function"?l.render(s):s[l.key]},"t-body-row-".concat(a,"-").concat(c)))},a))})]}),!d.length&&o&&e.jsx("div",{className:"flex justify-center items-center h-100% min-h-48vh w-100%",children:e.jsx(x,{})})]})})})}export{u as T};