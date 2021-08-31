<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-center
    .col-md-6.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/botones-fondo.svg', alt='Texto que describa la imagen')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-1        
    .col-md-5
      .tarjeta.tarjeta-botones.p-3(v-if="selected === 0")
        h4 Ministerio de ambiente y desarrollo sostenible
        p.mb-0 Es el rector de la gestión del ambiente y de los recursos naturales renovables, encargado de orientar y regular el ordenamiento ambiental del territorio y de definir las políticas y regulaciones a las que se sujetarán la recuperación, conservación, protección, ordenamiento, manejo, uso y aprovechamiento sostenible de los recursos naturales renovables y del ambiente de la nación, a fin de asegurar el desarrollo sostenible, sin perjuicio de las funciones asignadas a otros sectores.  

      .tarjeta.tarjeta-botones.p-3(v-else-if="selected === 1")
        h4 Autoridad nacional de licencias ambientales
        p.mb-0 Es una unidad administrativa especial, creada mediante el decreto 3573 del 2011, de orden nacional encargada de que los proyectos, obras o actividades sujetos de licenciamiento, permiso o trámite ambiental cumplan con la normativa, de tal manera que contribuyan al desarrollo sostenible. con respecto al recurso hídrico, esta autoridad se ocupa de otorgar los permisos de concesión de aguas superficiales y subterráneas, de prospección y exploración de aguas subterráneas y de la autorización de construcción en zonas que ocupen el cauce de una corriente o depósito de agua, así como hacerles seguimiento a todas las licencias otorgadas.  

      .tarjeta.tarjeta-botones.p-3(v-else-if="selected === 2")
        h4 Parques nacionales naturales de Colombia
        p.mb-0 Es una unidad administrativa especial, creada mediante el decreto 3572 del 2011, de orden nacional encargada de la administración y manejo del sistema de parques nacionales naturales y la coordinación del sistema nacional de áreas protegidas. con respecto al recurso hídrico, esta autoridad se ocupa de otorgar concesiones de los recursos hídricos presentes en los parques nacionales naturales y las áreas protegidas, así como de su administración, control y conservación.

</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,
    size: '21%',
    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '24%',
        pos_y: '15%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '54%',
        pos_y: '34%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '22%',
        pos_y: '42%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: cover
  position: absolute
  cursor: pointer
  border-radius: 50%
  transition: background-image 0.2s ease-in-out
</style>
