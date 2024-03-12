<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Patrones estructurales
    p.mb-0(data-aos="fade-right") Los patrones estructurales son un conjunto de conceptos y principios fundamentales en el diseño de #[i software] que proporcionan una guía invaluable para organizar y definir los componentes de los objetos de manera eficiente y coherente. Estos patrones se basan en la idea de establecer relaciones y estructuras entre los diferentes elementos de un sistema de #[i software], permitiendo una arquitectura más robusta, flexible y fácil de mantener.
    Separador
    #t_5_1
    .titulo-segundo.color-acento-contenido
      h2 5.1 Fachada
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p El patrón fachada se utiliza cuando el sistema está compuesto por varios subsistemas y se hace complejo gestionar los mensajes que debe realizar el cliente en cada uno de estos subsistemas.
        p Este patrón permite generar al cliente una vista de alto nivel que simplifica el control y el envío de mensajes a los subsistemas, ocultando los detalles relacionados con la gestión de las clases e instancias, como se detalla en el siguiente recurso educativo.
        P.mb-0 Existen diferentes variaciones del patrón fachada (Landa, 2018c):
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.svg', style="width:400px", alt='').m-auto
    .row.bg-c12
      .col-12
        .px-5
          .row.justify-content-center.mb-5.pt-0.pt-lg-5
            .col-lg-9.position-relative(data-aos="fade-left")
              .avatar
                figure
                  img(src="@/assets/curso/tema5/img2.svg", alt="alt").img250
              .crd.crd--avatarHorizontal.crd--first.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema5/img3.svg", alt="alt").img100
                  .col
                    h5 Opaco
                    p Una de las variaciones más utilizadas y en la cual los clientes no pueden acceder a los subsistemas, solo se puede hacer mediante el objeto fachada.
              .crd.crd--avatarHorizontal.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema5/img4.svg", alt="alt").img100
                  .col
                    h5 Transparente
                    p El cliente tiene la posibilidad de acceder a los subsistemas por medio de la fachada, pero también puede hacerlo de forma directa.
              .crd.crd--avatarHorizontal.crd--last.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/tema5/img5.svg", alt="alt").img100
                  .col
                    h5 Estática
                    p En esta variación, la fachada se implementa como una clase estática, por lo cual, no se hace necesaria la instancia de un objeto concreto de la fachada.
          p.mb-5(data-aos="fade-right") En este patrón se reconocen tres partes fundamentales (Landa, 2018c):
          .tarjeta--container.row.mb-5(data-aos="fade-down")
            .col-md.tarjeta.color-primario1.p-4.p-lg-5
              .row.justify-content-center.mb-4
                .col-auto
                  figure
                    img(src='@/assets/curso/tema5/img6.svg', style="width:100px", alt='Texto que describa la imagen')
              .row
                .col-auto
                  p.txt-c4 #[b Fachada]
              p Clase que provee las operaciones de alto nivel que serán usadas por el cliente.
            .col-md.tarjeta.color-primario2.p-4.p-lg-5
              .row.justify-content-center.mb-4
                .col-auto
                  figure
                    img(src='@/assets/curso/tema5/img7.svg', style="width:100px", alt='Texto que describa la imagen')
              .row
                .col-auto
                  p.txt-c4 #[b Subsistemas]
              p Clases que proveen las funcionalidades que son expuestas por la fachada.
            .col-md.tarjeta.color-primario1.p-4.p-lg-5
              .row.justify-content-center.mb-4
                .col-auto
                  figure
                    img(src='@/assets/curso/tema5/img8.svg', style="width:100px", alt='Texto que describa la imagen')
              .row
                .col-auto
                  p.txt-c4 #[b Cliente]
              p Hace uso de las operaciones de alto nivel por medio de la fachada.
          p.mb-5(data-aos="fade-right") En la siguiente figura, se puede ver cada uno de los componentes del patrón.
    .row.justify-content-center
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 10]. Componentes del patrón fachada
        figure
          img(src='@/assets/curso/tema5/img9.svg', alt='La figura muestra un diagrama de patrón de diseño de fachada con un cliente interactuando con una fachada que ofrece tres operaciones. La fachada a su vez se comunica con tres subsistemas, simplificando la interacción del cliente al proporcionar un único punto de acceso a las funcionalidades del sistema.').m-auto
    Separador
    #t_5_2
    .titulo-segundo.color-acento-contenido
      h2 5.2 Delegate
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img1.png', style="width:430px", alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        p El patrón delegate se usa cuando se quieren reutilizar y extender funcionalidades de una clase sin hacer uso de la herencia. Este patrón permite, de cierta forma, implementar algo similar a la herencia múltiple, que no es admitida por algunos lenguajes de programación, pero, adicionalmente, permite tener un control más detallado sobre este proceso, ya que se puede ocultar parte de los elementos heredados o, incluso, compartir elementos que no son posibles de heredar bajo el mecanismo de herencia tradicional.
        p.mb-0 Este patrón lo que busca es evitar asumir todas las responsabilidades en una sola instancia y delegar las actividades en otras instancias que son especializadas en resolver dichas tareas.

</template>

<script>
export default {
  name: 'Tema5',
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
