<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Patrones creacionales
    p.mb-5(data-aos="fade-right") Una de las tareas habituales en el proceso de construcción de #[i software] es distribuir responsabilidades entre un conjunto de módulos o clases, siguiendo los principios establecidos por los paradigmas de programación, como la programación orientada a objetos. No obstante, al abordar un requerimiento específico, será necesario instanciar objetos de distintos tipos que, asumiendo sus responsabilidades, ejecutan cierta lógica.
    .row.justify-content-center
      .col-lg-8.bg-c8(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img1.png', style="width:120px", alt='').m-auto
            .col.bg-c7
              .p-4
                p.mb-0 Los patrones creacionales proporcionan diversos mecanismos de creación de objetos, que aumentan la flexibilidad y la reutilización del código existente de una manera adecuada a la situación. Esto le da al programa más flexibilidad para decidir qué objetos deben crearse para un caso de uso dado.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Singleton
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Este patrón de diseño creacional se encarga de definir la forma en que se puede garantizar que exista una única instancia de una clase particular en el contexto de la aplicación. Esto es útil para casos en los que, por cuestiones de manejo de memoria o de la lógica del negocio, se requiere que sea el mismo objeto quien responda todos los mensajes, independientemente del contexto actual de la aplicación.
        p.mb-0 Este patrón se ve reflejado en el cuerpo de la misma clase que se requiere sea instancia una sola vez. 
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width:320px", alt='').m-auto
    .row.bg-c3
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10.bg-c2(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema4/img2.svg', style="width:170px", alt='').m-auto
                  .col
                    p.text-white #[b Ejemplo]
                    p.text-white.mb-0 Puede ser el manejo de conexiones a bases de datos. En algunos casos, no sería conveniente instanciar nuevos objetos de conexión cada vez que se genere un evento.
          p.mb-5(data-aos="fade-right") A continuación, se puede ver cada uno de los componentes del patrón relacionados entre el cliente y los requerimientos.
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 8]. Diagrama patrón Singleton
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img3.svg', alt='La imagen describe el patrón Singleton en un diagrama de clases, donde una clase Singleton asegura una única instancia de sí misma y proporciona un acceso global a esa instancia. Se ilustran dos clases principales: la Clase Cliente, que utiliza la instancia Singleton, y la Clase Singleton, que incluye un atributo privado "singletonInstance" para garantizar una única instancia y un método público "getInstance()" para acceder a dicha instancia.').m-auto
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Fábrica abstracta
    p.mb-5(data-aos="fade-right") Es un patrón de diseño creacional que permite producir familias de objetos relacionados sin especificar sus clases concretas. En el siguiente recurso, podrá apreciar en detalle sus características.
    .row.bg-c11
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10.bg-c9(data-aos="fade-left")
              .p-4
                .row.mb-5
                  .col-lg-7.bg-c7.mb-4.mb-lg-0
                    .p-4
                      p Este patrón de diseño permite las #[b instancias de una familia de objetos relacionados o dependientes], sin necesidad de entrar en detalles particulares de su implementación, de forma que tanto el cliente como los elementos creados por la fábrica son totalmente independientes unos de otros.
                      p.mb-0 Este patrón define #[b una interfaz de tipo fábrica], la cual se refina por medio de la creación de fábricas concretas, las cuales pueden producir diferentes tipos de objetos y en diferentes combinaciones, según las necesidades del cliente.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema4/img4.svg', style="width:390px", alt='').m-auto
                .row.mb-5
                  .col-12.bg-c10
                    .p-2
                      p.text-center.text-white.fs-5.mb-0 #[b Los elementos importantes de este patrón se describen a continuación (Landa, 2018c):]
                .row.align-items-center
                  .col-lg-5.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema4/img5.svg', style="width:450px", alt='').m-auto
                  .col-lg-7
                    .row.mb-3
                      .col-12.bg-c10
                        .p-2
                          .row.align-items-center
                            .col-auto.ps-0
                              figure
                                img(src='@/assets/curso/tema4/img6.svg', style="width:70px", alt='').m-auto
                            .col
                              p.text-white.mb-0 #[b Interfaz de la fábrica abstracta], la cual relaciona las operaciones de creación de los productos abstractos.
                    .row.mb-3
                      .col-12.bg-c10
                        .p-2
                          .row.align-items-center
                            .col-auto.ps-0
                              figure
                                img(src='@/assets/curso/tema4/img6.svg', style="width:70px", alt='').m-auto
                            .col
                              p.text-white.mb-0 #[b Fábricas concretas], las cuales implementan las operaciones de creación definidas en la interfaz de fábrica abstracta.
                    .row.mb-3
                      .col-12.bg-c10
                        .p-2
                          .row.align-items-center
                            .col-auto.ps-0
                              figure
                                img(src='@/assets/curso/tema4/img6.svg', style="width:70px", alt='').m-auto
                            .col
                              p.text-white.mb-0 #[b Interfaz de producto], la cual relaciona los comportamientos de los productos o elementos.
                    .row
                      .col-12.bg-c10
                        .p-2
                          .row.align-items-center
                            .col-auto.ps-0
                              figure
                                img(src='@/assets/curso/tema4/img6.svg', style="width:70px", alt='').m-auto
                            .col
                              p.text-white.mb-0 #[b Productos concretos], los cuales implementan los comportamientos definidos en la interfaz de producto.
          p.mb-5(data-aos="fade-right") En la siguiente figura se puede ver cada uno de los componentes.
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 9]. Componentes de un patrón de fábrica abstracta
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img7.svg', alt='El diagrama ilustra el patrón de diseño Abstract Factory, mostrando una interfaz "IFábricaAbstracta" implementada por dos "Fábricas Concretas", las cuales producen objetos de dos tipos de productos abstractos "A" y "B". Cada tipo de producto tiene dos variantes concretas. El cliente interactúa con las fábricas para crear objetos, permitiendo al sistema fabricar diferentes variantes de productos sin depender de sus clases concretas.').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
