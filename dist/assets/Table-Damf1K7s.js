import{j as e,r as n,L as d}from"./index-DEJy5W0I.js";const x="data:image/svg+xml,%3csvg%20width='184'%20height='152'%20viewBox='0%200%20184%20152'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cg%20transform='translate(24%2031.67)'%3e%3cellipse%20fill-opacity='.8'%20fill='%23F5F5F7'%20cx='67.797'%20cy='106.89'%20rx='67.797'%20ry='12.668'%3e%3c/ellipse%3e%3cpath%20d='M122.034%2069.674L98.109%2040.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766%200-3.444.839-4.592%202.225L13.56%2069.674v15.383h108.475V69.674z'%20fill='%23AEB8C2'%3e%3c/path%3e%3cpath%20d='M101.537%2086.214L80.63%2061.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54%200-3.047.66-4.048%201.867L6.769%2086.214v13.792h94.768V86.214z'%20fill='url(%23linearGradient-1)'%20transform='translate(13.56)'%3e%3c/path%3e%3cpath%20d='M33.83%200h67.933a4%204%200%200%201%204%204v93.344a4%204%200%200%201-4%204H33.83a4%204%200%200%201-4-4V4a4%204%200%200%201%204-4z'%20fill='%23F5F5F7'%3e%3c/path%3e%3cpath%20d='M42.678%209.953h50.237a2%202%200%200%201%202%202V36.91a2%202%200%200%201-2%202H42.678a2%202%200%200%201-2-2V11.953a2%202%200%200%201%202-2zM42.94%2049.767h49.713a2.262%202.262%200%201%201%200%204.524H42.94a2.262%202.262%200%200%201%200-4.524zM42.94%2061.53h49.713a2.262%202.262%200%201%201%200%204.525H42.94a2.262%202.262%200%200%201%200-4.525zM121.813%20105.032c-.775%203.071-3.497%205.36-6.735%205.36H20.515c-3.238%200-5.96-2.29-6.734-5.36a7.309%207.309%200%200%201-.222-1.79V69.675h26.318c2.907%200%205.25%202.448%205.25%205.42v.04c0%202.971%202.37%205.37%205.277%205.37h34.785c2.907%200%205.277-2.421%205.277-5.393V75.1c0-2.972%202.343-5.426%205.25-5.426h26.318v33.569c0%20.617-.077%201.216-.221%201.789z'%20fill='%23DCE0E6'%3e%3c/path%3e%3c/g%3e%3cpath%20d='M149.121%2033.292l-6.83%202.65a1%201%200%200%201-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802%208.102%20148.92%200%20161.402%200%20173.881%200%20184%208.102%20184%2018.097c0%209.995-10.118%2018.097-22.599%2018.097-4.528%200-8.744-1.066-12.28-2.902z'%20fill='%23DCE0E6'%3e%3c/path%3e%3cg%20transform='translate(149.65%2015.383)'%20fill='%23FFF'%3e%3cellipse%20cx='20.654'%20cy='3.167'%20rx='2.849'%20ry='2.815'%3e%3c/ellipse%3e%3cpath%20d='M5.698%205.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";function m(t){return e.jsxs("div",{className:"no-data w-100%  py-20px",children:[e.jsx("div",{className:"flex justify-center items-center",children:t.icon?e.jsx("i",{className:`font-size-40 ${t.icon}`}):e.jsx("img",{className:"empty-img w-100px",src:x,alt:""})}),e.jsx("div",{className:"text-center mt-10px font-size-14px",children:t.text||"No Data"})]})}function p(t){const[i,r]=n.useState([]),[h,o]=n.useState(!1);return n.useEffect(()=>{const a=[];t.dataSources&&t.dataSources.length&&t.dataSources.forEach(s=>{const c=[];t.columns.forEach(l=>{c.push(l)}),a.push({...s,children:c})}),r(a),o(!0)},[t.columns,t.dataSources]),e.jsxs("div",{className:"table-components-box w-100% min-h-30vh",children:[t.loading===!0?e.jsx(d,{}):e.jsxs("table",{className:"table-components w-100% text-left py-10px",children:[e.jsx("thead",{className:"table-thead",children:e.jsx("tr",{className:"table-thead-tr",children:t.columns.map((a,s)=>e.jsx("th",{className:"fw-light font-size-12px px-10px py-8px color-#80838e  text-center",style:{width:(a.width||0)+"px"},children:a.title},`t-thead-row-${s}`))})}),e.jsx("tbody",{className:"table-tbody",children:i.map((a,s)=>e.jsx("tr",{className:"table-tbody-tr h-24px",children:a.children.map((c,l)=>(console.log("child",c),console.log("item",a),e.jsx("td",{className:"font-size-12px px-8px py-4px text-center",children:typeof c.render=="function"?c.render(a):a[c.key]},`t-body-row-${s}-${l}`)))},s))})]}),!i.length&&h&&e.jsx("div",{className:"w-100% flex justify-center items-center h-90%",children:e.jsx(m,{})})]})}export{p as T};
