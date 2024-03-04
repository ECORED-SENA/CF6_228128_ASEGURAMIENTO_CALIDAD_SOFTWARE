<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Vistas estáticas
    p(data-aos="fade-right") La vista estática está encargada de modelar los conceptos significativos del dominio de la aplicación desde sus propiedades internas y las relaciones existentes. Se denomina vista estática porque no modela el comportamiento del sistema ni muestra las variaciones que se puedan presentar por efecto del tiempo.
    p.mb-5(data-aos="fade-right") Los elementos fundamentales de la vista estática son las clases, que describen los conceptos del dominio del problema, y las relaciones, que pueden ser de tipo asociación, generalización y de dependencia. Entre los diagramas de UML que se utilizan para representar la vista estática del sistema, se encuentran (ITCA-FEPADE, s. f.):
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema6/img1.svg', style="width:900px", alt='').m-auto
    p(data-aos="fade-right") A continuación, se detallan algunos diagramas de UML que permiten tener una visión más generalizada de los sistemas de información en desarrollo o desarrollados por el equipo de trabajo.

</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass"></style>
