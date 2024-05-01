<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Diagrama de despliegue
    p(data-aos="fade-right") Los diagramas de despliegue hacen parte de los tipos de diagrama propuestos por UML y su objetivo es la representación de la arquitectura del sistema en términos de #[i hardware] y #[i software] físico, y los medios por los cuales se conectan. Este tipo de diagrama es muy útil para el proceso de despliegue del sistema.
    p.mb-5(data-aos="fade-right") Los diagramas de despliegue utilizan un conjunto de elementos gráficos que tienen una representación y significado estandarizados. A continuación, se detalla cada uno de ellos (Cinergix Pty. Ltd., 2021):
    TabsB.color-acento-botones(data-aos="fade-left")
      .px-4.py-4.py-md-5(titulo="Nodos")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            p Representan un elemento que puede ser #[i hardware] o #[i software] y se grafican mediante un cubo.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema7/img1.svg', alt='Texto que describa la imagen')
            figcaption Nota. Creately (2022). La Guía Fácil de los Diagramas de Despliegue UML.
      .px-4.py-4.py-md-5(titulo="Artefactos")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            p Representan elementos concretos generados en el proceso de desarrollo, como, por ejemplo, bibliotecas, archivos, etc.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema7/img2.svg', alt='Texto que describa la imagen')
            figcaption Nota. Creately (2022). La Guía Fácil de los Diagramas de Despliegue UML.
      .px-4.py-4.py-md-5(titulo="Asociación de comunicación")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            p Es un tipo especial de nodo que representa un recurso computacional del sistema, como, por ejemplo, un servidor.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema7/img3.svg', alt='Texto que describa la imagen')
            figcaption Nota. Creately (2022). La Guía Fácil de los Diagramas de Despliegue UML.
      .px-4.py-4.py-md-5(titulo="Dispositivos")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            p Es un tipo especial de nodo que representa un recurso computacional del sistema, como, por ejemplo, un servidor.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema7/img4.svg', alt='Texto que describa la imagen')
            figcaption Nota. Creately (2022). La Guía Fácil de los Diagramas de Despliegue UML.
      .px-4.py-4.py-md-5(titulo="Especificaciones de despliegue")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            p Representan configuraciones que se deben tener en cuenta para desplegar un artefacto en un nodo.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema7/img5.svg', alt='Texto que describa la imagen')
            figcaption Nota. Creately (2022). La Guía Fácil de los Diagramas de Despliegue UML.
      .px-4.py-4.py-md-5(titulo="Figura ilustrativa")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            p Este un tipo de ejemplo de un diagrama de despliegue para un sistema de gestión de biblioteca.
          .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema7/img6.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema7',
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
