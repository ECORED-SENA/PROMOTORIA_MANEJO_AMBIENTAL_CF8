(function(e){function a(a){for(var o,i,c=a[0],l=a[1],d=a[2],s=0,u=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"56cd91d4","chunk-0206bfa0":"4d34bff0","chunk-04b93936":"7e1d8717","chunk-13a6037e":"aecd9d72","chunk-16015154":"49ce4832","chunk-17977988":"ba53ec10","chunk-2c06842c":"3e32d9ab","chunk-2d208d90":"a8e8d9b0","chunk-2d21d0e2":"1bd19836","chunk-2d22c123":"1bea3445","chunk-2e80bb9a":"cfc5ce1d","chunk-3145fe0f":"48bc8990","chunk-328f70dd":"f32eeee7","chunk-3807499c":"fbabfc2f","chunk-3dc647fd":"86327865","chunk-4cdd78c0":"18eacfa2","chunk-4fde0a08":"2569ad60","chunk-515a8379":"01382b23","chunk-53ccb27e":"f34c5235","chunk-59974754":"f3fb4212","chunk-766a929b":"1a7dde6e","chunk-839300a6":"b5996397","chunk-c796899c":"049769b7","chunk-dbb9869e":"4eb5f732",comple:"950291bc",creditos:"129457a9",glosario:"72aaedf4",intro:"915d55f7",referencias:"bdb2ce35",tema1:"9d2b0342",tema2:"c20f5f9b"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"1cd216af","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"a2e53937","chunk-766a929b":"c5c27b88","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"0fc690bd",creditos:"b1b8712f",glosario:"1fb7ccc1",intro:"0e433876",referencias:"d4a3a517",tema1:"34cfbe56",tema2:"d0834c44"}[e]+".css",t=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],s=d.getAttribute("data-href");if(s===o||s===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var u=new Error;d=function(a){s.onerror=s.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=n("2877"),d=Object(l["a"])(c,i,t,!1,null,null,null),s=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Plan de promotoría",descripcionCurso:"En el componente se abordan temas que permiten estructurar programas de formación, teniendo clara la metodología y los criterios de evaluación frente al trabajo de concientización con comunidades a cerca de las normativas ambientales. ",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Estructura de programas",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Legislación ambiental ",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Factores de clasificación de las normas ambientales ",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Métodos de jerarquización de las normas ambientales",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Autoridades ambientales",hash:"t_2_3"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Universidad Cetys (2019). Medición del aprendizaje: Manual para profesores. ",link:"https://repositorio.cetys.mx/bitstream/60000/421/1/ManualDeMedici%C3%B3nDelAprendizaje2019.pdf "},{referencia:"DANE (2010). Clasificaciones de las actividades ambientales. ",link:"https://www.dane.gov.co/files/investigaciones/pib/ambientales/Clas_actividades_ambientales.pdf "},{referencia:"Ideam, (s.f.) Autoridades ambientales en Colombia. ",link:"http://www.ideam.gov.co/web/ocga/autoridades "}],glosario:[{termino:"Actividades didácticas",significado:"conjunto de operaciones propuestas para alcanzar los objetivos determinados en un proceso de capacitación."},{termino:"Criterio de evaluación",significado:"enunciado que expresa el grado y tipo de aprendizaje que se espera que sea alcanzado con respecto a algún concepto, procedimiento o actitud concreta."},{termino:"Cultura de sensibilización",significado:"consiste en saber y comprender que cada cultura es diferente y aceptar dicha diferencia."},{termino:"Gamificación",significado:"se trata de la integración entre dinámicas de juego en entornos no lúdicos."},{termino:"Legislación ambiental",significado:"es un complejo conjunto de normas que regulan la interacción del ser humano y el resto de los componentes del medio ambiente natural."},{termino:"Normativa ambiental",significado:"es el conjunto de objetivos, principios, criterios y orientaciones generales para la protección del medio ambiente."},{termino:"Resolución ambiental",significado:"es el acto administrativo final del procedimiento de evaluación ambiental mediante el cual se califica ambientalmente el proyecto o actividad sometido al SEIA - Sistema Nacional de Evaluación de Impacto Ambiental."},{termino:"Saneamiento ambiental",significado:"conjunto de acciones técnicas y socioeconómicas de salud pública que tienen por objetivo alcanzar niveles crecientes de salubridad ambiental."}],complementario:[{texto:"Godínez, A. (2017). Planeación de la capacitación [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=hFB8-l8-CU4"},{texto:"Salas, J. (2018), Capacitación práctica en 4 pasos. [Video]. YouTube",tipo:"Video",link:"https://www.youtube.com/watch?v=aJyzuRwgRlE"},{texto:"Martínez, P. (2000) Jerarquización de las decisiones ambientales: el modelo de esferas concéntricas. Observatorio Medioambiental.  Número 3, p. 21-34.",tipo:"Pdf",link:"https://revistas.ucm.es/index.php/OBMD/article/download/OBMD0000110021A/21895/0  MI0C4FFV)/Downloads/23037-Texto%20del%20art%C3%ADculo-23056-1-10-20110607.PDF"},{texto:"Doria, C. (2020). SISTEMA NACIONAL AMBIENTAL - Autoridades Ambientales. [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=iNfCjL1L3pg"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Víctor Julián Ardila",cargo:"Experto temático",centro:"Centro Agropecuario La Granja <br>Regional Tolima"},{nombre:"Paula Andrea Taborda Ortiz",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología <br>Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Diseño y Metrología <br>Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios <br>Regional Tolima"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"},{nombre:"Jhana Johanna Bustillo Ardila",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura <br>Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.b837830b.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.55e1d76e.png"}});
//# sourceMappingURL=app.b47cf9e8.js.map