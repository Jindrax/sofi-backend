"use strict";(self["webpackChunkmockups"]=self["webpackChunkmockups"]||[]).push([[782],{8782:(e,s,o)=>{o.r(s),o.d(s,{default:()=>L});var a=o(3673),r=o(1959),t=o(7831);const c=(0,t.Q_)("recurso",{state:()=>({recursos:[{idRecurso:"1",cuenta:"Activos"},{idRecurso:"11",cuenta:"Disponible"},{idRecurso:"1105",cuenta:"Caja"},{idRecurso:"1110",cuenta:"Bancos"},{idRecurso:"13",cuenta:"Deudores"},{idRecurso:"1305",cuenta:"Clientes"},{idRecurso:"14",cuenta:"Inventarios"},{idRecurso:"1405",cuenta:"Materias primas"},{idRecurso:"1410",cuenta:"Productos en proceso"},{idRecurso:"1430",cuenta:"Productos terminados"},{idRecurso:"1435",cuenta:"Mercancias no fabricadas por la empresa"},{idRecurso:"1455",cuenta:"Materiales repuestos y accesorios"},{idRecurso:"1499",cuenta:"Provisiones"},{idRecurso:"15",cuenta:"Propiedad planta y equipo"},{idRecurso:"1516",cuenta:"Construcciones y edificaciones"},{idRecurso:"1524",cuenta:"Equipo de oficina"},{idRecurso:"1592",cuenta:"Depreciacion acumulada ACTIVO NEGATIVO"},{idRecurso:"16",cuenta:"Intangibles"},{idRecurso:"1610",cuenta:"Marcas"},{idRecurso:"1635",cuenta:"Licencias"},{idRecurso:"18",cuenta:"Otros activos"},{idRecurso:"2",cuenta:"Pasivos"},{idRecurso:"21",cuenta:"obligaciones"},{idRecurso:"2105",cuenta:"Cuentas por pagar a bancos"},{idRecurso:"2195",cuenta:"Cuentas por pagar a otras entidades"},{idRecurso:"22",cuenta:"Proveedores"},{idRecurso:"2205",cuenta:"Cuentas por pagar proveedores nacionales"},{idRecurso:"2210",cuenta:"Cuentas por pagar proveedores del exterior"},{idRecurso:"23",cuenta:"Otras obligaciones"},{idRecurso:"2335",cuenta:"Costos y gastos por pagar"},{idRecurso:"24",cuenta:"Impuestos por pagar"},{idRecurso:"25",cuenta:"Obligaciones laborales"},{idRecurso:"2505",cuenta:"Salarios por pagar"},{idRecurso:"28",cuenta:"Otros pasivos"},{idRecurso:"3",cuenta:"Patrimonio"},{idRecurso:"31",cuenta:"Capital social"},{idRecurso:"33",cuenta:"Reservas"},{idRecurso:"4",cuenta:"Ingresos"},{idRecurso:"41",cuenta:"Ingresoso operacionales"},{idRecurso:"4135",cuenta:"Ingreso por ventas"},{idRecurso:"4195",cuenta:"Otros ingresos"},{idRecurso:"4275",cuenta:"Devoluciones en ventas CREDITO NEGATIVO"},{idRecurso:"5",cuenta:"Gastos"},{idRecurso:"51",cuenta:"Gastos de adminostracion"},{idRecurso:"5105",cuenta:"Gastos de personal"},{idRecurso:"5115",cuenta:"Gasto en impuestos"},{idRecurso:"5120",cuenta:"Arrendamientos"},{idRecurso:"5145",cuenta:"Mantenimiento"},{idRecurso:"5160",cuenta:"Depreciacion"},{idRecurso:"5195",cuenta:"Otros gastos"},{idRecurso:"6",cuenta:"Costos de ventas"},{idRecurso:"61",cuenta:"Costo de ventas"},{idRecurso:"6195",cuenta:"Otros costos"},{idRecurso:"62",cuenta:"Costo por compra"},{idRecurso:"6205",cuenta:"Costo por compra de mercancía"},{idRecurso:"7",cuenta:"Costos de producción"},{idRecurso:"71",cuenta:"Costo de materia prima"},{idRecurso:"72",cuenta:"Costo de mano de obra"},{idRecurso:"73",cuenta:"Costo indirecto"},{idRecurso:"74",cuenta:"Costo por servicios prestados"}],recursosTree:{}}),getters:{getTree:e=>(0==Object.keys(e.recursosTree).length&&e.recursos.forEach((s=>{let o=s.idRecurso.substring(0,1);if(1!=s.idRecurso.length){if(e.recursosTree[o]){let a=s.idRecurso.substring(0,2);if(2==s.idRecurso.length)return void(e.recursosTree[o].children[a]={recurso:s,children:{}});if(e.recursosTree[o].children[a]){let r=s.idRecurso.substring(0,4);return void(e.recursosTree[o].children[a].children[r]={recurso:s})}}}else e.recursosTree[o]={recurso:s,children:{}}})),e.recursosTree)},actions:{setRecursos(e){this.recursos=e}},persist:!0});o(2946),o(8978),o(3311);var u=o(2323);const n={class:"col text-center"},i={class:"row"},l={class:"row"},d=(0,a.aZ)({props:{question:null},emits:["points"],setup(e,{emit:s}){const o=e,t=(0,r.iH)(""),c=e=>{t.value=e,o.question.solution===t.value?s("points",50):s("points",0)};return(0,a.Xn)((()=>{t.value=""})),(s,r)=>{const d=(0,a.up)("q-card-section"),p=(0,a.up)("q-item-label"),R=(0,a.up)("q-item"),v=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"row items-center justify-center"},{default:(0,a.w5)((()=>[(0,a._)("span",n,(0,u.zw)(e.question.question),1)])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(R,{class:(0,u.C_)({col:!0,"response-selector":!0,"q-ma-xs":!0,"correct-answer":"a"===t.value&&"a"===o.question.solution,"wrong-answer":"a"===t.value&&"a"!==o.question.solution}),clickable:"",onClick:r[0]||(r[0]=e=>c("a"))},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.question.a),1)])),_:1})])),_:1},8,["class"]),(0,a.Wm)(R,{class:(0,u.C_)({col:!0,"response-selector":!0,"q-ma-xs":!0,"correct-answer":"b"===t.value&&"b"===o.question.solution,"wrong-answer":"b"===t.value&&"b"!==o.question.solution}),clickable:"",onClick:r[1]||(r[1]=e=>c("b"))},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.question.b),1)])),_:1})])),_:1},8,["class"])]),(0,a._)("div",l,[(0,a.Wm)(R,{class:(0,u.C_)({col:!0,"response-selector":!0,"q-ma-xs":!0,"correct-answer":"c"===t.value&&"c"===o.question.solution,"wrong-answer":"c"===t.value&&"c"!==o.question.solution}),clickable:"",onClick:r[2]||(r[2]=e=>c("c"))},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.question.c),1)])),_:1})])),_:1},8,["class"]),(0,a.Wm)(R,{class:(0,u.C_)({col:!0,"response-selector":!0,"q-ma-xs":!0,"correct-answer":"d"===t.value&&"d"===o.question.solution,"wrong-answer":"d"===t.value&&"d"!==o.question.solution}),clickable:"",onClick:r[3]||(r[3]=e=>c("d"))},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.question.d),1)])),_:1})])),_:1},8,["class"])])])),_:1})])),_:1})}}});var p=o(4260),R=o(151),v=o(5589),m=o(3414),g=o(2350),b=o(7518),w=o.n(b);const f=(0,p.Z)(d,[["__scopeId","data-v-6792fda6"]]),C=f;w()(d,"components",{QCard:R.Z,QCardSection:v.Z,QItem:m.Z,QItemLabel:g.Z});const q=(0,t.Q_)("ludificacion",{state:()=>({level:1,exp:0}),getters:{getNextLevel(e){return 500*Math.pow(e.level+1,2)-500*(e.level+1)},getExpLabel(e){return`${e.exp}/${this.getNextLevel}`},getExpRatio(e){return e.exp/this.getNextLevel}},actions:{registerExp(e){const s=this.getNextLevel;this.exp+e>=s?(this.level+=1,this.exp=0):this.exp+=e},reset(){this.level=1,this.exp=0}},persist:!0}),h=e=>((0,a.dD)("data-v-449d1964"),e=e(),(0,a.Cn)(),e),_=h((()=>(0,a._)("span",null,"Nivel de usuario",-1))),x=h((()=>(0,a._)("br",null,null,-1))),k={class:"absolute-full flex flex-center"},T=(0,a.aZ)({setup(e){const s=q(),{level:o}=(0,t.Jk)(s),c=(0,r.iH)(!1);(0,a.YP)(o,(()=>{c.value=!0,setTimeout((()=>{c.value=!1}),500)}));return(e,t)=>{const n=(0,a.up)("q-avatar"),i=(0,a.up)("q-badge"),l=(0,a.up)("q-linear-progress"),d=(0,a.up)("q-card-section"),p=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"column items-center justify-center"},{default:(0,a.w5)((()=>[_,x,(0,a.Wm)(n,{color:"javeriana",class:(0,u.C_)({shake:c.value}),size:"50px"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)((0,r.SU)(o)),1)])),_:1},8,["class"]),(0,a.Wm)(l,{dark:"",stripe:"",rounded:"",size:"40px",value:(0,r.SU)(s).getExpRatio,color:"blue",class:"q-mt-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,a.Wm)(i,{color:"white","text-color":"black",label:(0,r.SU)(s).getExpLabel},null,8,["label"])])])),_:1},8,["value"])])),_:1})])),_:1})}}});var W=o(5096),Z=o(1598),I=o(9721);const O=(0,p.Z)(T,[["__scopeId","data-v-449d1964"]]),P=O;w()(T,"components",{QCard:R.Z,QCardSection:v.Z,QAvatar:W.Z,QLinearProgress:Z.Z,QBadge:I.Z});const Q=(0,a.aZ)({setup(e){const s=q(),o=c(),t=[{question:"Cual fue el mejor cameo de los illuminatis?",a:"Profesor X",b:"Reed Richards",c:"Capitana Marvel",d:"Capitana Carter",solution:"b"},{question:"Como se llama la antitesis del darkhold?",a:"Libro de vishanty",b:"Mein Kampf",c:"Clifford el gran perro rojo",d:"El capital",solution:"a"},{question:"Que pasa si luis fonsi se da por vencido?",a:"Big Crunch",b:"Segundo periodo de Donald Trump",c:"La presidencia de Petro",d:"Nada",solution:"d"}],u=(0,r.iH)(0),n=(0,a.Fl)((()=>t[u.value]));function i(e){0!=e&&s.registerExp(e),setTimeout((()=>{u.value<t.length-1?u.value+=1:u.value=0}),200)}(0,r.iH)("");const l=e=>e.children?{label:`${e.recurso.idRecurso}: ${e.recurso.cuenta}`,children:Object.values(e.children).map(l)}:{label:`${e.recurso.idRecurso}: ${e.recurso.cuenta}`};(0,a.Fl)((()=>{let e=[];for(let s of Object.values(o.recursosTree))e.push(l(s));return e}));return(e,s)=>{const o=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(o,{class:"column q-ml-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(P),(0,a.Wm)(C,{onPoints:i,question:(0,r.SU)(n)},null,8,["question"])])),_:1})}}});var j=o(4379);const E=(0,p.Z)(Q,[["__scopeId","data-v-4ba81492"]]),L=E;w()(Q,"components",{QPage:j.Z})}}]);