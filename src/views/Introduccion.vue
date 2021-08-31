<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/intro-banner.png", alt="Introducción")  

    p.mb-4(data-aos="fade") Con este componente de formación se podrá adquirir conocimientos que permitirán tener un trabajo más cercano con las comunidades, desarrollando actividades de sociabilización y orientación en temas ambientales con miras a evaluar las medidas tomadas y facilitar el manejo de las normativas ambientales aplicables a cada contexto social.  

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
