"use strict";(self["webpackChunkmockups"]=self["webpackChunkmockups"]||[]).push([[463],{3331:(e,i,s)=>{s.r(i),s.d(i,{default:()=>R});var t=s(3673),o=s(7786),a=s(1959),c=s(4585),n=s(7831),d=s(765),p=s(7536);class l{constructor({codigo:e,costo:i,descripcion:s,fechaIngreso:t,impuesto:o,cantidad:a,unidadTiempo:c,vidaUtil:n}){this.codigo=e||"",this.descripcion=s||"",this.impuesto=o||0,this.costo=i||0,this.fechaIngreso=t||(0,p.l)(),this.type="ACTIVO",this.cantidad=a||0,this.unidadTiempo=c||"Año",this.vidaUtil=n||0}static getCode(e){return e.codigo}}var r=s(7504);const u=(0,r.p)("activos",l,"/activo/activo"),h=(0,t.aZ)({setup(e){const i=[{field:"codigo",label:"Codigo",type:d.N.STRING},{field:"descripcion",label:"Descripcion",responsive:!0,type:d.N.STRING},{field:"cantidad",label:"Cantidad",responsive:!0,type:d.N.NUMBER},{field:"costo",label:"Costo",responsive:!0,type:d.N.NUMBER},{field:"impuesto",label:"Impuesto",responsive:!0,type:d.N.NUMBER,prefix:"%"},{field:"unidadTiempo",label:"Unidad tiempo vida util",responsive:!0,type:d.N.SELECTION,options:["Dias","Meses","Años"]},{field:"vidaUtil",label:"Vida util",responsive:!0,type:d.N.NUMBER},{field:"fechaIngreso",label:"Fecha de ingreso",responsive:!0,type:d.N.DATE,showInTable:!1}],s=u(),{array:o}=(0,n.Jk)(s);return(e,n)=>((0,t.wg)(),(0,t.j4)(c.Z,{data:(0,a.SU)(o),"entity-schema":i,entity:"activo",store:(0,a.SU)(s)},null,8,["data","store"]))}}),N=h,f=N;class v{constructor({codigo:e,costo:i,descripcion:s,fechaIngreso:t,impuesto:o,cantidad:a}){this.codigo=e||"",this.descripcion=s||"",this.impuesto=o||0,this.costo=i||0,this.fechaIngreso=t||(0,p.l)(),this.type="INSUMO",this.cantidad=a||0}static getCode(e){return e.codigo}}const g=(0,r.p)("insumos",v,"/activo/store"),m=(0,t.aZ)({setup(e){const i=[{field:"codigo",label:"Codigo",type:d.N.STRING},{field:"descripcion",label:"Descripcion",responsive:!0,type:d.N.STRING},{field:"cantidad",label:"Cantidad",responsive:!0,type:d.N.NUMBER},{field:"costo",label:"Costo",responsive:!0,type:d.N.NUMBER},{field:"impuesto",label:"Impuesto",responsive:!0,type:d.N.NUMBER,prefix:"%"},{field:"fechaIngreso",label:"Fecha de ingreso",responsive:!0,type:d.N.DATE,showInTable:!1}],s=g(),{array:o}=(0,n.Jk)(s);return(e,n)=>((0,t.wg)(),(0,t.j4)(c.Z,{data:(0,a.SU)(o),"entity-schema":i,entity:"insumo",store:(0,a.SU)(s)},null,8,["data","store"]))}}),y=m,b=y,I=(0,t.aZ)({setup(e){return(e,i)=>{const s=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o.Z,{tabs:["Activos","Insumos"]},{Activos:(0,t.w5)((()=>[(0,t.Wm)(f)])),Insumos:(0,t.w5)((()=>[(0,t.Wm)(b)])),_:1})])),_:1})}}});var U=s(4379),T=s(7518),C=s.n(T);const E=I,R=E;C()(I,"components",{QPage:U.Z})}}]);