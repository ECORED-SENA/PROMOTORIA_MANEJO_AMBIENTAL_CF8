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

    p(data-aos="fade") Deben ser claros, alcanzables y medibles en el tiempo, con la finalidad de establecer un programa conciso y detallado de las actividades a realizar. Para ello, se debe tener en cuenta las particularidades de cada tipo de objetivo. 


  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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

<style lang="sass" scoped></style>
