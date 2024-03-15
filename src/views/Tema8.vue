<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Diagrama de componentes
    p.mb-5(data-aos="fade-right") El diagrama de componentes es uno de los diagramas propuestos en UML que representa una vista estática del sistema de información y hace parte de los diagramas estructurales. Este diagrama proporciona una vista de alto nivel de los componentes dentro del sistema y generalmente se construye posterior a la construcción del diagrama de clases.
    .row.justify-content-center.mb-5
      .col-lg-8.bg-c8(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img1.png', style="width:120px", alt='').m-auto
            .col.bg-c7
              .p-4
                p.mb-0 Un componente puede ser #[i software], como, por ejemplo, las bases de datos o una interfaz de usuario; y también puede ser #[i hardware], como un dispositivo o incluso una unidad de negocio, como, por ejemplo, la nómina, el inventario, proveedores, etc.
    p(data-aos="fade-right") Este tipo de diagrama es muy útil para arquitecturas orientadas a servicios, permite mostrar la estructura general del código, por lo que puede ser usado para mostrar las funciones del sistema que se construye a cualquier parte interesada. 
    p.mb-5(data-aos="fade-right") Los elementos que conforman un diagrama de componente son los siguientes (Diagramas UML, 2019):
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row.justify-content-center(titulo="Componente")
        .col-10
          p.mb-4 Es una abstracción de un nivel más alto que las clases y representa unidades lógicas del sistema.
          figure
            img(src='@/assets/curso/tema8/img1.svg', style="width:650px", alt='La imagen representa un componente con puntos de conexión para la integración con otros elementos.').m-auto
      .row.justify-content-center(titulo="Interfaz")
        .col-10
          p.mb-4 Las interfaces siempre se asocian con los componentes y representan el lugar que debe ser usado por otros componentes para poder establecer comunicación con él.
          figure
            img(src='@/assets/curso/tema8/img2.svg', style="width:650px", alt='La imagen muestra dos componentes se conectan a través de una interfaz.').m-auto
      .row.justify-content-center(titulo="Relación de dependencia")
        .col-10
          p.mb-4 Representa una relación más general entre dos componentes, para indicar que un componente requiere de otro para poder ejecutar su trabajo.
          figure
            img(src='@/assets/curso/tema8/img3.svg', style="width:400px", alt='La imagen presenta dos componentes están alineados verticalmente con una conexión punteada entre ellos, indicando una relación o flujo.').m-auto
      .row.justify-content-center(titulo="Paquetes")
        .col-10
          p.mb-4 Es posible utilizar los paquetes para agrupar lógicamente un conjunto de componentes dentro de un subsistema.
          figure
            img(src='@/assets/curso/tema8/img4.svg', style="width:650px", alt='La imagen presenta cuatro componentes están agrupados dentro de un paquete.').m-auto
      .row.justify-content-center(titulo="Ejemplo")
        .col-10
          p.mb-4 En la figura, se muestra un ejemplo de un diagrama de componentes para un sistema de gestión de una clínica veterinaria.
          figure
            img(src='@/assets/curso/tema8/img5.svg', style="width:850px", alt='La imagen es un diagrama de arquitectura de software de tres niveles con Presentación en la parte superior, Lógica de negocio en el medio y BBDD con Servicios en la base, mostrando la segmentación de funciones y su interconexión.').m-auto

</template>

<script>
export default {
  name: 'Tema8',
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
