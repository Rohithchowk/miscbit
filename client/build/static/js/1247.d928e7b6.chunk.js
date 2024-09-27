"use strict";(self.webpackChunkcbit_management_information_system=self.webpackChunkcbit_management_information_system||[]).push([[1247,6261],{6261:function(e,t,r){r.r(t);var a=r(7313),n=r(5662),s=r(2548),i=r(1405),l=r(501),o=r(1629),c=r(6835),d=r(3477),h=r(3467),p=r(4076),g=r(7478),x=r(7649),m=r(8737),u=r(5508),f=(r(8695),r(6417));t.default=()=>{const[e,t]=(0,a.useState)([]),[r,b]=(0,a.useState)(""),[j,y]=(0,a.useState)([]),[Z,k]=(0,a.useState)(""),[v,w]=(0,a.useState)([]),[E,L]=(0,a.useState)(""),[C,S]=(0,a.useState)([]),[P,_]=a.useState(0),[V,R]=a.useState(10),[$,T]=(0,a.useState)(null),[I,D]=(0,a.useState)(!1),[M,O]=(0,a.useState)(!1);(0,a.useEffect)((()=>{(async()=>{try{const e=await n.Z.get("https://cbitmis-backend-3.onrender.com/api/departments/blocks");t(e.data)}catch(e){console.error("Error fetching blocks:",e)}})()}),[]);return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"},children:[(0,f.jsx)("button",{onClick:()=>{if(!$)return;const e=Object.keys($[0]),t=$.map((t=>{const r={};return e.forEach((e=>{r[e]=t[e]})),r})),r=m.P6.json_to_sheet(t),a=m.P6.book_new();m.P6.book_append_sheet(a,r,"posts"),m.NC(a,"postsData.xlsx"),D(!0)},style:{marginRight:"10px"},children:"Generate Excel"}),(0,f.jsx)("button",{onClick:()=>{if(!$)return;const e=new u.jsPDF;e.autoTable({html:"#jsonTable"}),e.save("jsonData.pdf"),O(!0)},children:"Generate PDF"})]}),(0,f.jsxs)(s.Z,{value:r,onChange:async e=>{const t=e.target.value;b(t);try{const e=await n.Z.get(`https://cbitmis-backend-3.onrender.com/api/departments/departments/${t}`);y(e.data)}catch(r){console.error(`Error fetching departments for block ${t}:`,r)}k(""),w([]),L(""),S([])},displayEmpty:!0,variant:"outlined",style:{marginRight:"10px"},children:[(0,f.jsx)(i.Z,{value:"",disabled:!0,children:"Select Block"}),e.map((e=>(0,f.jsx)(i.Z,{value:e,children:e},e)))]}),(0,f.jsxs)(s.Z,{value:Z,onChange:async e=>{const t=e.target.value;k(t);try{const e=await n.Z.get(`http://localhost:5000/api/departments/categories/${r}/${t}`);w(e.data)}catch(a){console.error(`Error fetching categories for department ${t} in block ${r}:`,a)}L(""),S([])},displayEmpty:!0,variant:"outlined",style:{marginRight:"10px"},disabled:!r,children:[(0,f.jsx)(i.Z,{value:"",disabled:!0,children:"Select Department"}),j.map((e=>(0,f.jsx)(i.Z,{value:e.name,children:e.name},e._id)))]}),(0,f.jsxs)(s.Z,{value:E,onChange:async e=>{const t=e.target.value;L(t);const a=`http://localhost:5000/api/departments/A/civil/${t}`;try{const e=await n.Z.get(a);S(e.data),(e=>{fetch(e).then((e=>{if(!e.ok)throw new Error("Failed to fetch data");return e.json()})).then((e=>{if(!(e&&e.length>0))throw new Error("Empty JSON response");T(e)})).catch((e=>{console.error("Error fetching data:",e)}))})(a)}catch(s){console.error(`Error fetching ${t} for department ${Z} in block ${r}:`,s)}},displayEmpty:!0,variant:"outlined",style:{marginRight:"10px"},disabled:!Z,children:[(0,f.jsx)(i.Z,{value:"",disabled:!0,children:"Select Category"}),v.map((e=>(0,f.jsx)(i.Z,{value:e,children:e},e)))]}),(0,f.jsxs)(l.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,f.jsx)(o.Z,{sx:{maxHeight:440},children:(0,f.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,f.jsx)(d.Z,{children:(0,f.jsx)(p.Z,{children:C.length>0&&"object"===typeof C[0]&&Object.keys(C[0]).map((e=>"_id"!==e&&(0,f.jsx)(g.Z,{children:(0,f.jsx)("b",{children:e.toUpperCase()})},e)))})}),(0,f.jsx)(h.Z,{children:C.map(((e,t)=>(0,f.jsx)(p.Z,{children:"object"===typeof e&&Object.keys(e).map((t=>"_id"!==t&&(0,f.jsx)(g.Z,{children:"boolean"===typeof e[t]?e[t]?"Yes":"No":e[t]},t)))},t)))})]})}),(0,f.jsx)(x.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:C.length,rowsPerPage:V,page:P,onPageChange:(e,t)=>{_(t)},onRowsPerPageChange:e=>{R(+e.target.value),_(0)}})]}),I&&(0,f.jsx)("p",{children:"Excel file generated successfully."}),M&&(0,f.jsx)("p",{children:"PDF file generated successfully."})]})}},9726:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(9860),n=r(7503),s=r(5272),i=r(891),l=r(8119),o=r(6417);var c=e=>{let{color:t,outline:r,size:n,sx:s,...i}=e;const c=(0,a.Z)(),d=t&&!r&&{color:c.palette.background.paper,bgcolor:`${t}.main`},h=r&&{color:t?`${t}.main`:"primary.main",bgcolor:c.palette.background.paper,border:"2px solid",borderColor:t?`${t}.main`:"primary.main"};let p={};switch(n){case"badge":p={width:c.spacing(3.5),height:c.spacing(3.5)};break;case"xs":p={width:c.spacing(4.25),height:c.spacing(4.25)};break;case"sm":p={width:c.spacing(5),height:c.spacing(5)};break;case"lg":p={width:c.spacing(9),height:c.spacing(9)};break;case"xl":p={width:c.spacing(10.25),height:c.spacing(10.25)};break;case"md":p={width:c.spacing(7.5),height:c.spacing(7.5)};break;default:p={}}return(0,o.jsx)(l.Z,{sx:{...d,...h,...p,...s},...i})};var d=e=>{let{title:t,link:r,icon:l}=e;const d=(0,a.Z)();return(0,o.jsx)(n.Z,{title:t||"Reference",placement:"left",children:(0,o.jsxs)(s.Z,{disableRipple:!0,children:[!l&&(0,o.jsx)(c,{component:i.Z,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,o.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,o.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,o.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0",children:(0,o.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&(0,o.jsx)(c,{component:i.Z,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}},1247:function(e,t,r){r.r(t);var a=r(7592),n=r(1095),s=(r(6261),r(7313)),i=r(3497),l=r(5587),o=(r(9726),r(6417));(0,a.ZP)("iframe")((e=>{let{theme:t}=e;return{height:"calc(100vh - 210px)",border:"1px solid",borderColor:t.palette.primary.light}}));t.default=()=>{const e=(0,s.useRef)(null),t=(0,s.useRef)(null);return(0,o.jsxs)(i.Z,{title:"L BLOCK INFRASTRUCTURE",sx:{textTransform:"uppercase"},children:[(0,o.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,o.jsx)(n.Z,{onClick:()=>{e.current.scrollIntoView({behavior:"smooth"})},sx:{textTransform:"none",marginRight:"2px",width:"49%",border:"1px solid #941b1c","&:hover":{backgroundColor:"#941b1c",color:"#ffffff"}},children:"IT"}),(0,o.jsx)(n.Z,{onClick:()=>{t.current.scrollIntoView({behavior:"smooth"})},sx:{textTransform:"none",width:"49%",marginLeft:"1px",border:"1px solid #941b1c","&:hover":{backgroundColor:"#941b1c",color:"#ffffff"}},children:"EEE"})]}),(0,o.jsx)(i.Z,{title:"IT DETAILS",sx:{textAlign:"center",color:"#941b1c"},ref:e,children:(0,o.jsx)(l.Z,{block:"L",department:"IT"})}),(0,o.jsx)(i.Z,{title:"EEE DETAILS",ref:t,children:(0,o.jsx)(l.Z,{block:"L",department:"EEE"})})]})}}}]);