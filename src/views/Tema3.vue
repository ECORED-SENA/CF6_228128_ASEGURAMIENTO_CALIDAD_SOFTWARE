<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Patrones comportamentales
    p.mb-5(data-aos="fade-right") Como se había mencionado en los conceptos GOF, los patrones de diseño comportamentales se centran en definir la forma en cómo los objetos interactúan entre ellos por medio de mensajes.
    .row.justify-content-center
      .col-lg-8.bg-c8(data-aos="fade-left")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/img1.png', style="width:120px", alt='').m-auto
            .col.bg-c7
              .p-4
                p.mb-0 Los patrones de comportamiento gestionan algoritmos, relaciones y responsabilidades entre objetos.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1. Estrategia
    p.mb-5(data-aos="fade-right") El patrón estrategia permite encapsular un conjunto de algoritmos de forma que puedan ser seleccionados dinámicamente durante el tiempo de ejecución de acuerdo con las acciones del cliente. Este patrón es una de las formas en las que se ven reflejadas fácilmente las características de la programación orientada a objetos, particularmente, lo referente a encapsulamiento y polimorfismo (Landa, 2018c).
    .row.bg-c3
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 5]. Ejemplo de Patrón estrategia
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img1.svg', alt='La figura ilustra el Patrón de Estrategia, un diseño ampliamente adoptado en programación que facilita la modificación del comportamiento o algoritmo de una clase durante su ejecución. Destaca la interacción del cliente con la interfaz IEStrategia, que sirve de puente para la ejecución de estrategias concretas (Estrategia 1 a Estrategia N), permitiendo su intercambiabilidad.').m-auto
          .row.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p Este patrón de diseño es útil cuando una misma funcionalidad puede ser provista usando diferentes mecanismos, algoritmos o estrategias, que serán seleccionadas dependiendo de las acciones realizadas por el cliente en el momento que está ejecutando el programa.
              p.mb-0 Para un mejor entendimiento del patrón, suponga que quiere implementar una calculadora, la cual provee un conjunto de operaciones (suma, resta, multiplicación y división) que serán usadas por el cliente según su deseo. Cada una de estas operaciones representa una estrategia diferente y será el cliente quien invocará la ejecución de cada una de ellas dependiendo de su deseo, por medio de una interfaz que, usando las propiedades del polimorfismo, se transformará para poder responder a cada solicitud.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img2.png', style="width:420px", alt='').m-auto
          .row.justify-content-center
            .col-lg-10.bg-c2(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img2.svg', style="width:170px", alt='').m-auto
                  .col
                    p.text-white #[b Ejemplo]
                    p.text-white.mb-0 Consideremos el ejemplo de implementar una calculadora que ofrece un conjunto de operaciones (suma, resta, multiplicación y división) para que el cliente las utilice según necesite. Cada una de estas operaciones constituye una estrategia distinta. Será el cliente quien decida cuál de ellas ejecutar, basándose en sus requerimientos, a través de una interfaz. Esta interfaz, aprovechando las propiedades del polimorfismo, se adapta para responder adecuadamente a cada tipo de solicitud.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2. Comando
    p(data-aos="fade-right") El patrón comando permite aislar los objetos que realizan una petición de los objetos concretos encargados de recibir y realizar dicha acción. Esto permite, entre otras cosas, que las peticiones puedan ser enviadas a varios receptores y, si se maneja el estado de las solicitudes, controla acciones de tipo Undo y Redo.
    p.mb-5(data-aos="fade-right") El patrón comando necesita la implementación de varios elementos (Landa, 2018c), así:
    .row.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Comando")
            .col-10
              p Es la clase que sirve de puente entre el cliente y los receptores.
          .row.justify-content-center(titulo="Invoker")
            .col-10
              p Elemento usado por los clientes y que le solicita al comando llevar a cabo una acción.
          .row.justify-content-center(titulo="Cliente")
            .col-10
              p Invoca la ejecución de las acciones desde el Invoker.
          .row.justify-content-center(titulo="IComando")
            .col-10
              p Interfaz donde se especifican las operaciones a ejecutar.
          .row.justify-content-center(titulo="Receptor")
            .col-10
              p Clase que realiza la acción.
          .row.justify-content-center(titulo="Ejecutar")
            .col-10
              p Operación que necesita ser llevada a cabo.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img3.png', style="width:420px", alt='').m-auto
    .row.bg-c3
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") En la siguiente figura, se puede ver cada uno de los componentes del patrón y cómo interactúan entre ellos.
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 6]. Diagrama patrón comando
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img3.svg', alt='La figura ilustra el Patrón de Comando en diseño de software, destacando la interacción entre sus componentes: el Cliente, que inicia solicitudes de comandos; el Invoker, que invoca dichos comandos; la interfaz ICommando, por donde los comandos son canalizados; las instancias de Comando, que realizan acciones específicas; y el Receptor, donde se ejecutan los comandos.').m-auto
          .row.justify-content-center
            .col-lg-10.bg-c2(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema3/img4.svg', style="width:170px", alt='').m-auto
                  .col
                    p.text-white #[b Ejemplo]
                    p.text-white.mb-0 Para entender mejor este patrón, imagine el siguiente contexto: una persona (cliente) quiere hacer uso del televisor y, para poder realizar esto, hace todas las solicitudes de servicios por medio del control remoto (Invoker). El control remoto se comunica con una interfaz que se encarga de responder a las solicitudes de cada uno de los comandos que el usuario puede hacer, como, por ejemplo, prender el televisor, apagar el televisor, subir el volumen, etc. Cada comando realiza una acción particular sobre el televisor (Receptor).
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3. Iterator
    p(data-aos="fade-right") Este patrón de diseño está orientado al trabajo con colecciones y facilita el acceso a todos los elementos de la colección sin tener la necesidad de conocer su estructura.
    p.mb-5(data-aos="fade-right") En este patrón, se reconocen dos elementos clave: los enumeradores y los iteradores:
    .row.bg-c3
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-md-8.col-lg-5.bg-c2.m-2(data-aos="fade-right")
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/img5.svg', style="width:100px", alt='')
                .row
                  .col-auto
                    p.text-white.txt-c2 #[b Los enumeradores]
                p.text-white.mb-0 Como su nombre lo indica, es el encargado de establecer la secuencia con la cual se puede conocer el siguiente elemento de la estructura.
            .col-md-8.col-lg-5.bg-c2.m-2(data-aos="fade-left")
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema3/img6.svg', style="width:100px", alt='')
                .row
                  .col-auto
                    p.text-white.txt-c2 #[b Los iteradores]
                p.text-white.mb-0 Corresponden a un mecanismo que permite recorrer la estructura de acuerdo con su secuencia de inicio a fin.
          .row.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p El enumerador, se encarga de implementar un conjunto de métodos estándar para poder establecer la secuencia con la que se debe recorrer la estructura. Entre los métodos más comunes, se encuentra, por ejemplo, el método moveNext(), el cual indica si existe o no un próximo elemento por recorrer; el método Current(), que devuelve el valor actual de la colección según la posición actual en la secuencia; y el método Reset(), que permite iniciar nuevamente la secuencia desde su punto de partida. El iterador necesita del enumerador para poder hacer el proceso de recorrido (Landa, 2018c).
              p.mb-0 En la siguiente figura, se puede ver cada uno de los componentes del patrón y cómo interactúan entre ellos.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img4.png', style="width:420px", alt='').m-auto
          .row.justify-content-center.mb-5
            .col-lg-8(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 7]. Diagrama patrón iterador
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img7.svg', alt='La imagen muestra el Patrón Iterador, destacando la interacción entre colecciones y enumeradores mediante las interfaces IEnumerable e IEnumerator. Las colecciones utilizan IEnumerable para ofrecer un enumerador, mientras que los enumeradores implementan los métodos de IEnumerator (moveNext(), current(), reset()) para permitir la navegación secuencial por los elementos de la colección.').m-auto
          p.mb-0(data-aos="fade-right") Este tipo de operaciones son tan comunes en los sistemas actuales que los lenguajes de programación ya poseen una implementación propia del patrón iterador.

</template>

<script>
export default {
  name: 'Tema3',
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
