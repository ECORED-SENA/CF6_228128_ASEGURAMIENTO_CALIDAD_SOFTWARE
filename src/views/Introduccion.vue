<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Le damos la bienvenida al componente formativo “Patrones de diseño de software”. Recordemos que los patrones de diseño surgen como un concepto, inicialmente, para el área de arquitectura e ingeniería civil, pues era en estas disciplinas donde se presentaban casos particulares que requerían de soluciones a problemáticas particulares.
        p El concepto de patrón de diseño se empezó a asociar al diseño orientado a objetos y, en lugar de referirse a la forma de colocar paredes, puertas o ventanas, se refería a la forma en que se construyen clases, objetos, interfaces, y a la forma en cómo estos deben interactuar.
        .row.mb-3
          .col-12.bg-c1
            .p-4
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/intro/img1.svg', style="width:50px", alt='').m-auto
                .col
                  p.mb-0 El uso de patrones de diseño permite acelerar el proceso de desarrollo, al proporcionar paradigmas probados y comprobados en el diseño de software. Estandarizar las soluciones a problemas comunes permite tambien mejorar la comunicación entre desarrolladores, ya que se emplean nombres bien conocidos y entendidos a la hora de describir un problema de diseño y cómo abordar su solución.
        p A continuación, se abordan varios de los patrones de diseño más representativos en la industria del software, los cuales nos permitirán, a futuro, implementar soluciones más robustas, de acuerdo con altos estándares de calidad y recomendaciones ampliamente conocidas en la industria, lo que adicionalmente nos dará un plus como desarrolladores de software en una industria cada vez más competitiva globalmente. 
        p El uso de patrones de diseño permite acelerar el proceso de desarrollo, al proporcionar paradigmas probados y comprobados en el diseño de software. Estandarizar las soluciones a problemas comunes permite también mejorar la comunicación entre desarrolladores, ya que se emplean nombres bien conocidos y entendidos a la hora de describir un problema de diseño y cómo abordar su solución.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure.mt-0.mt-lg-5
          img(src='@/assets/curso/intro/img2.svg', style="width:450px", alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
