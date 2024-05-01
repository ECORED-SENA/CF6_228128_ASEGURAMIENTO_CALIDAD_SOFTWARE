<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos GOF
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Los patrones GoF se presentan como una forma indispensable de abordar la programación y surgen debido a: #[b Erich Gamma, Richard Helm, Ralph Jonson y John Vlissides], quienes tratan el tema en su libro “#[i Design Patterns—Elements of Reusable Software]”; por esta razón, a estos patrones se les conoce con el nombre de #[b la pandilla de los cuatro] (#[i GoF, gang of four]). Según estos autores, los patrones de diseño se basan principalmente en dos principios de diseño orientado a objetos:
        .row.justify-content-center.mb-3
          .col-lg-10.bg-c2
            .p-4
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', style="width:80px", alt='').m-auto
                .col
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa.fa-cube(style="color:white")
                      | 
                      p.text-white.mb-0 Programa una interfaz, no una implementación.
                    li.d-flex.mb-0
                      i.fa.fa-cube(style="color:white")
                      | 
                      p.text-white.mb-0 Favorece la composición de objetos sobre la herencia.
        p.mb-0 Para EcuRed (s. f.), los patrones de diseño tienen las siguientes características:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width:400px", alt='').m-auto
    .row.bg-c3.mb-5(data-aos="fade-down")
      .col-12.px-3.px-lg-5
        .p-4
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img3.svg', alt='El diagrama describe cinco características de los patrones de diseño en informática: constituyen soluciones conceptuales para problemas reales, son especificaciones técnicas basadas en la experiencia que pueden variar, se utilizan frecuentemente aprovechando la experiencia de la industria del software, no imponen un diseño concreto de objetos sino que dan guías de estructuración, y favorecen la implementación de las principales características de la programación orientada a objetos, mejorando el manejo y la especialización.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img3m.svg', alt='El diagrama describe cinco características de los patrones de diseño en informática: constituyen soluciones conceptuales para problemas reales, son especificaciones técnicas basadas en la experiencia que pueden variar, se utilizan frecuentemente aprovechando la experiencia de la industria del software, no imponen un diseño concreto de objetos sino que dan guías de estructuración, y favorecen la implementación de las principales características de la programación orientada a objetos, mejorando el manejo y la especialización.').m-auto
    p.mb-5(data-aos="fade-right") Los patrones que describen GOF suelen clasificarse en tres grandes categorías según su finalidad: patrones comportamentales, patrones creacionales y patrones estructurales. Una breve explicación de estos podrá consultarse a continuación, pues en el transcurso de este componente serán explicados con mayor detalle:
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/tema1/img4.svg', style="width:750px", alt='El diagrama clasifica los patrones de diseño de software del grupo de los cuatro en tres tipos: creacionales, que abstraen la creación y configuración de objetos; estructurales, que agrupan entidades para formar estructuras más complejas; y comportamentales, que detallan las responsabilidades y comunicación entre objetos.').m-auto
    p.mb-5(data-aos="fade-right") Para conocer cada uno de estos patrones GOF, lo invitamos a revisar su definición:
    .titulo-sexto.color-acento-contenido
      span #[b Tabla 1.] Patrones GoF    
    .tabla-a.color-acento-contenido(data-aos="fade-left")
      table
        thead
          tr
            th(style="width:30%") Nombre
            th Definición
        tbody
          tr
            td Fábrica abstracta (#[i Abstract factory])
            td Crea diferentes familias de objetos relacionados o dependientes, como, por ejemplo, la creación de diferentes elementos de una interfaz gráfica.
          tr
            td Método de fabricación (#[i Factory method])
            td Define una interfaz para crear un objeto, pero permite que las subclases determinen la clase a implementar.
          tr
            td Prototipo (#[i Prototype])
            td Se basa en la clonación de objetos copiándolos de un prototipo.
          tr
            td #[i Singleton]
            td Restringe una clase a una sola instancia y provee un punto global de acceso a la clase.
          tr
            td Constructor (#[i Builder])
            td Separa la construcción de objetos complejos de su representación.
          tr
            td Adaptador (#[i Adapter])
            td Convierte una interfaz de una clase en otra.
          tr
            td Puente (#[i Bridge])
            td Desacopla una abstracción de su implementación, permitiendo modificarlas independientemente.
          tr
            td Objeto Compuesto (#[i Composite])
            td Construye objetos complejos a partir de otros más simples, utilizando para ello la composición recursiva y una estructura de árbol.
          tr
            td Envoltorio (#[i Decorator])
            td Permite añadir dinámicamente funcionalidad a un objeto existente, evitando heredar sucesivas clases para incorporar la nueva funcionalidad.
          tr
            td Fachada (#[i Facade])
            td Permite una interfaz unificada para un conjunto de interfaces en un subsistema.
          tr
            td Peso Mosca (#[i Flyweight])
            td Emplea un uso compartido para eliminar o reducir la redundancia cuando se tiene gran cantidad de objetos con información idéntica.
          tr
            td Apoderado (#[i Proxy])
            td Proporciona un objeto sustituto para controlar el acceso a otro.
          tr
            td Cadena de responsabilidad (#[i Chain of responsibility])
            td Permite que más de un objeto tenga la posibilidad de atender una petición.
          tr
            td Orden (#[i Command])
            td Encapsula una petición como un objeto y permite “deshacer” la petición.
          tr
            td Intérprete (#[i Interpreter])
            td Permite construir un intérprete de lenguaje para una gramática simple y sencilla.
          tr
            td Iterador (#[i Iterator])
            td Define una interfaz que declara los métodos necesarios para acceder secuencialmente a una colección de objetos sin exponer su estructura interna.
          tr
            td Mediador (#[i Mediator])
            td Coordina las relaciones entre sus asociados. Permite la interacción de varios objetos, sin generar acoples fuertes en esas relaciones.
          tr
            td Recuerdo (#[i Memento])
            td Almacena el estado interno de un objeto y lo restaura posteriormente.
          tr
            td Observador (#[i Observer])
            td Dependencia de uno a muchos para notificar cambios de estado de un objeto.
          tr
            td Estado (#[i State])
            td Permite a un objeto alterar su comportamiento dependiendo del estado interno del mismo.
          tr
            td Estrategia (#[i Strategy])
            td Define familias de algoritmos, los encapsula y maneja su selección.
          tr
            td Método plantilla (#[i Template method])
            td Define el esqueleto de un algoritmo y permite que clases derivadas redefinan ciertos pasos.
          tr
            td Visitante (#[i Visitor])
            td Operaciones aplicadas a elementos de una estructura de objetos.
      
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

<style lang="sass"></style>
