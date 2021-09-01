<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Estructura de programas

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.png", alt="Estructura de programas")  

    p.mb-5(data-aos="fade") Con miras a realizar un trabajo de alto valor para las comunidades, es necesario estructurar un programa detallado en donde se plasme como se va a desarrollar la actividad, un cronograma con fechas establecidas, horarios y temáticas a trabajar. Para las campañas de concientización y de sensibilización es de vital importancia tener 
      strong claridad de cuales son los resultados esperados, a quienes va dirigidos y como se realizará la medición de estos en el tiempo.


    h3(data-aos="fade-right") Objetivos

    p.mb-5(data-aos="fade") Deben ser claros, alcanzables y medibles en el tiempo, con la finalidad de establecer un programa conciso y detallado de las actividades a realizar. Para ello, se debe tener en cuenta las particularidades de cada tipo de objetivo. 

    .row.objetivos.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-objetivos.svg' alt='Toma de conciencia')
          .tarjeta.color-primario.text-center.p-4
            h4.text-center Toma de conciencia
            p Concienciar a las personas de los problemas del medio ambiente.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-objetivos2.svg' alt='Conocimientos')
          .tarjeta.color-primario.text-center.p-4(@mouseover='mostrarIndicador = false')
            .indicador--hover(v-if='mostrarIndicador')
            h4.text-center Conocimientos
            p Ayudar a interesarse por el medio ambiente. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-objetivos3.svg' alt='Actitudes')
          .tarjeta.color-primario.text-center.p-4
            h4.text-center Actitudes
            p Adquirir interés por el medio ambiente y voluntad para conservarlo.

    .row.objetivos.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-objetivos4.svg' alt='Aptitudes')
          .tarjeta.color-primario.text-center.p-4
            h4.text-center Aptitudes
            p Ayudar a resolver el problema que afecta el medio ambiente.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-objetivos5.svg' alt='Capacidad de evaluación')
          .tarjeta.color-primario.text-center.p-4
            h4.text-center Capacidad de evaluación
            p Evaluar los programas de educación ambiental. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1-objetivos6.svg' alt='Participación')
          .tarjeta.color-primario.text-center.p-4
            h4.text-center Participación
            p Desarrollar el sentido de la responsabilidad para adoptar medidas adecuadas.       


    h3(data-aos="fade-right") Actividades
    
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-7.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p El punto de partida para la implementación de una cultura de sensibilización ambiental debe enfocarse en la identificación de sectores de atención en los cuales se pretende generar un cambio de pensamiento sobre el deterioro ambiental ocasionado por el ser humano. Para esto se deben detallar los temas específicos a tratar con la comunidad, teniendo en cuenta el contexto y sus necesidades.
            .col-lg-5
              ul.lista-ul--color.lista-verde
                li.mb-0 
                  i.fas.fa-circle
                  | Uso eficiente y ahorro de agua. 
                li.mb-0 
                  i.fas.fa-circle
                  | Uso eficiente y ahorro de energía.
                li.mb-0
                  i.fas.fa-circle
                  | Saneamiento ambiental.     
                li.mb-0
                  i.fas.fa-circle
                  | Buenas prácticas ambientales.
                li.mb-0 
                  i.fas.fa-circle
                  | Cambio Climático. 
                li.mb-0 
                  i.fas.fa-circle
                  | Biodiversidad. 
                li.mb-0
                  i.fas.fa-circle
                  | Prevención de riesgos. 
                li.mb-0
                  i.fas.fa-circle
                  | Reducción, reutilización y reciclaje de residuos sólidos.            

    p.mb-4(data-aos="fade") Se deben definir las actividades de formación que se llevarán a cabo, estas actividades se pueden clasificar de la siguiente manera: 

    .row.back-verde.mb-5.p-4
      .col-lg-2.mt-lg-5.mb-lg-4.mb-3.back-img-verde.text-center
        h4 Actividades de introducción
      .col-lg-2.mt-lg-4.mb-lg-5.mb-3.back-img-azul.text-center
        h4 Actividades de desarrollo
      .col-lg-2.mt-lg-5.mb-lg-4.mb-3.back-img-amarillo.text-center
        h4 Actividades de  resumen o repaso
      .col-lg-2.mt-lg-4.mb-lg-5.mb-3.back-img-verde.text-center
        h4 Actividades de evaluación
      .col-lg-2.mt-lg-5.mb-lg-4.mb-3.back-img-azul.text-center
        h4 Actividades de refuerzo 
      .col-lg-2.mt-lg-4.mb-lg-5.mb-3.back-img-amarillo.text-center
        h4 Actividades de ampliación      


    h3(data-aos="fade-right") Actividades didácticas 

    p.mb-5(data-aos="fade") Usualmente se llevan a cabo para generar un aprendizaje de manera grupal y así los alumnos puedan resolver dudas entre ellos.

    .row.mb-5(data-aos="fade-down")
      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact1.svg", alt="Mesa redonda")
            .tarjetaTxt.text-center.p-2
              h5.mb-0 Mesa redonda
              p.mb-0 Permite exponer puntos de vista sobre un tema común, aportando información variada. Al finalizar las exposiciones, el moderador hace un resumen de las coincidencias y diferencias, posteriormente se invita a formular preguntas que puedan aclarar las dudas que se tengan sobre algún tema específico.
      .col-lg-4.mb-2
        .tarjeta-container(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact2.svg", alt="Philipps 66")
            .tarjetaTxt2.text-center.p-2
              h5.mb-0 Philipps 66
              p.mb-0 En esta técnica un grupo se divide en subgrupos de seis personas, para discutir durante seis minutos un tema y llegar a una conclusión. Cada grupo genera un informe donde se extrae la conclusión general. 
      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact3.svg", alt="Juego de roles")
            .tarjetaTxt.text-center.p-2
              h5.mb-0 Juego de roles
              p.mb-0 Dos o más personas representan una situación real, asumiendo los roles del caso, con la finalidad de que el tema propuesto pueda ser mejor comprendido por el grupo.

      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact4.svg", alt="Foro")
            .tarjetaTxt2.text-center.p-2
              h5.mb-0 Foro
              p.mb-0 El grupo expresa informal y libremente sus ideas y opiniones sobre un asunto. Para esta actividad, se requiere de una moderación. 
      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact5.svg", alt="Interrogatorio")
            .tarjetaTxt.text-center.p-2
              h5.mb-0 Interrogatorio
              p.mb-0 Se basa en el cuestionamiento para obtener información sobre procedimientos, habilidades, conceptos, sentimientos o experiencias que estén relacionadas con la temática.
      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact6.svg", alt="Estudio de caso")
            .tarjetaTxt2.text-center.p-2
              h5.mb-0 Estudio de caso
              p.mb-0 Se describe una situación real o ficticia, y se sigue con el planteamiento de un problema para el cual se requiere de una solución. 

      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact7.svg", alt="Exposición")
            .tarjetaTxt.text-center.p-2
              h5.mb-0 Exposición
              p.mb-0 Se trata de una técnica para expresar de manera oral un tema de interés colectivo.
      .col-lg-4.mb-2
        .tarjeta-container(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact8.svg", alt="Lluvia de ideas")
            .tarjetaTxt2.text-center.p-2
              h5.mb-0 Lluvia de ideas
              p.mb-0 Permite establecer ideas para que sea analizadas las más relevantes. Generalmente se descartan las que no se relacionan con el tema.
      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact9.svg", alt="Diálogos simultáneos")
            .tarjetaTxt.text-center.p-2
              h5.mb-0 Diálogos simultáneos
              p.mb-0  Se utiliza para dar soluciones rápidas a un tema específico por medio de confrontar puntos de vista. En esto participan varios equipos en los cuales se discute el problema en un breve periodo de tiempo. 

      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact10.svg", alt="Simposio")
            .tarjetaTxt2.text-center.p-2
              h5.mb-0 Simposio
              p.mb-0 Un grupo de expertos habla por turnos acerca de un tema y se utiliza para ampliar la información de un asunto o tema.
      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact11.svg", alt="Debate o discusión guiada")
            .tarjetaTxt.text-center.p-2
              h5.mb-0 Debate o discusión guiada
              p.mb-0 Consiste en el intercambio informal de ideas, información u opiniones, la cual permite la moderación para guiar y plantear interrogantes para conducir la discusión.
      .col-lg-4.mb-2
        .tarjeta-container
          .tarjetaContent
            .tarjetaImg
              figure
                img(src="@/assets/curso/tema1-actdidact12.svg", alt="Dramatización")
            .tarjetaTxt2.text-center.p-2
              h5.mb-0 Dramatización
              p.mb-0 Consiste en la interpretación “teatral” de una situación o problemática. 


    h3(data-aos="fade-right") Metodología

    p.mb-4(data-aos="fade") El mundo está cambiando y con éste, la forma cómo las personas aprenden. Es por esto que es necesario reinventar las metodologías de enseñanza, y dentro de los contextos de capacitación para programas se deben utilizar según la necesidad. Esto quiere decir que ahora todas las personas son sujetos activos dentro del sistema de aprendizaje, rompiendo con lo tradicional hacia nuevos procesos de conocimiento. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tabla-b.color-acento-botones
          table  
            thead.tabla-b__header
              tr
                th.col1-tabla1 
                  h3.mb-0 Metologia
                th 
                  h3.mb-0 Concepto
            tbody
              tr
                td.col-gris1.text-center 
                  strong Aprendizaje Basado en Proyectos
                td.col-gris1 Esta metodología permite adquirir conocimientos y competencias a través de la elaboración de proyectos que den respuesta a problemas de la vida real. Se inicia de un problema concreto y real.
              tr
                td.col-gris2.text-center
                  strong Aula invertida
                td.col-gris2 Es un modelo donde primero se ve la práctica y después la teoría. Lo que lleva a que las personas primero aprendan de manera autónoma antes de las orientaciones y aclaraciones del moderador. 
              tr
                td.col-gris1.text-center
                  strong Aprendizaje cooperativo
                td.col-gris1 Se usa esta metodología para agrupar a los estudiantes e impactar de forma positiva. Este permite que los estudiantes mejoren la atención y la adquisición de conocimientos. 
              tr
                td.col-gris2.text-center
                  strong Gamificación
                td.col-gris2 Se trata de la integración de dinámicas de juego en entornos lo lúdicos, esto con el fin de aumentar la motivación, la concentración, la fidelización y el esfuerzo.  
              tr
                td.col-gris1.text-center
                  strong Pensamiento de diseño
                td.col-gris1 Esta metodología nace de la práctica de los diseñadores y su método para resolver problemas y satisfacer a sus clientes. Cuando se aplica a la educación permite identificar los problemas individuales de cada persona para generar nuevas ideas, resolver problemas de manera creativa y ampliar el horizonte de soluciones. 
              tr
                td.col-gris2.text-center
                  strong Aprendizaje Basado en el Pensamiento
                td.col-gris2 Se basa en contextualizar, relacionar, analizar, argumentar, convertir información en conocimiento y desarrollar destrezas del pensamiento más allá de la memorización.             


    h3(data-aos="fade-right") Criterios de evaluación

    p.mb-4(data-aos="fade") Son el referente específico que permite la valoración del aprendizaje, ya que describen las bases en que se centrará el aprendizaje a parir de los logros que se quieran alcanzar, tanto en competencias como en conocimiento, sus especificaciones permiten definir los resultados de aprendizaje y concretar lo que el estudiante debe saber hacer y comprender para determinado tema, los cuales deben ser medibles, observables y evaluables. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tabla-b.color-acento-botones
          table  
            thead.tabla-b__header
              tr
                th 
                  h3.mb-0 Contexto
                th 
                  h3.mb-0 Criterios
            tbody
              tr
                td.col-gris1.text-center 
                  strong De acuerdo a su origen.
                td.col-gris1
                  ul.lista-ul--color.lista-circulo.lista-azul
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0 Personales.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0 Disciplinarios.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0 De la institución educacional. 
              tr
                td.col-gris2.text-center 
                  strong De acuerdo con la forma de usar los criterios para juzgar.
                td.col-gris2
                  ul.lista-ul--color.lista-circulo.lista-azul
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0 Analíticos.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0 Holísticos.
              tr
                td.col-gris1.text-center 
                  strong De acuerdo con el momento de aplicación de la situación de evaluación.
                td.col-gris1
                  ul.lista-ul--color.lista-circulo.lista-azul
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0 Antes.
                    li.mb-1
                      i.fas.fa-circle
                      p.mb-0 Después.


    h3(data-aos="fade-right") Medición de resultados

    p.mb-4(data-aos="fade") La medición del aprendizaje es una práctica que está directamente relacionada con la educación que ha venido aumentando de manera significativa en los últimos años. Estos procesos se adelantan para poder examinar el desarrollo y la posible consecución de las expectativas a través de la complejidad del aprendizaje.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/tema1-infografia.svg", alt="Medición de resultados") 


    h3.mb-4(data-aos="fade-right") Formas de evaluar propuestas

    .row
      .col-lg-7.mb-4(data-aos="fade-right")  
        AcordeonB(tipo="a" clase-tarjeta="tarjeta tarjeta-verde")
          .row.justify-content-center.px-lg-5(titulo="Evaluación diagnóstica")
            .col-lg-3.col-4.mb-3
              img(src="@/assets/curso/tema1-tab1.svg", alt="Evaluación diagnóstica") 
            .col-lg-1  
            .col-lg-8
              p Evalúa las fortalezas, debilidades, conocimientos y habilidades antes de un proceso de la formación. En sí, sirve para conocer el punto de partida.
          .row.justify-content-center.px-lg-5(titulo="Evaluación formativa")
            .col-lg-3.col-4.mb-3
              img(src="@/assets/curso/tema1-tab2.svg", alt="Evaluación formativa") 
            .col-lg-1  
            .col-lg-8
              p Evalúa el rendimiento durante la formación y, por lo general, se produce con regularidad durante todo el proceso de instrucción. 
          .row.justify-content-center.px-lg-5(titulo="Evaluación sumativa")
            .col-lg-3.col-4.mb-3
              img(src="@/assets/curso/tema1-tab3.svg", alt="Evaluación sumativa") 
            .col-lg-1  
            .col-lg-8
              p Mide el rendimiento al final de la formación. Es la forma de saber qué ha aprendido y qué no.
          .row.justify-content-center.px-lg-5(titulo="Evaluación por medias")
            .col-lg-3.col-4.mb-3
              img(src="@/assets/curso/tema1-tab4.svg", alt="Evaluación por medias") 
            .col-lg-1  
            .col-lg-8
              p Compara el desempeño de las personas; es una especie de evaluación grupal o “demográfica” que ayuda sacar conclusiones generales.
          .row.justify-content-center.px-lg-5(titulo="Evaluación basada en objetivos")
            .col-lg-3.col-4.mb-3
              img(src="@/assets/curso/tema1-tab5.svg", alt="Evaluación basada en objetivos") 
            .col-lg-1  
            .col-lg-8
              p Mide el rendimiento frente a una meta, un objetivo específico o estándar. Consigue obtener datos y conclusiones más concretas sobre el proceso de enseñanza y aprendizaje.
          .row.justify-content-center.px-lg-5(titulo="Evaluación intermedia o de referencia")
            .col-lg-3.col-4.mb-3
              img(src="@/assets/curso/tema1-tab6.svg", alt="Evaluación intermedia o de referencia") 
            .col-lg-1  
            .col-lg-8
              p Evalúa el rendimiento por intervalos de tiempo periódicos. Normalmente coinciden con el final de períodos de calificación: meses, trimestres, entre otros.            
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1-tabs.jpg", alt="Imagen decorativa") 


</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema1',
  components: {
    AcordeonB,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.back-img-verde, .back-img-azul, .back-img-amarillo
  height: 145px
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  display: flex
  flex-direction: row
  align-content: center
  justify-content: center
  align-items: center
.back-img-verde
  background-image: url(../assets/curso/tema1-back-img-verde.svg)
.back-img-azul
  background-image: url(../assets/curso/tema1-back-img-azul.svg)
.back-img-amarillo
  background-image: url(../assets/curso/tema1-back-img-amarillo.svg)
.back-img-verde h4, .back-img-azul h4, .back-img-amarillo h4
  width: 105px
  margin-left: -22px

@media (max-width: $bp-max-md)
    .back-img-verde, .back-img-azul, .back-img-amarillo
      height: 170px
      background-size: contain
      background-repeat: no-repeat
</style>
