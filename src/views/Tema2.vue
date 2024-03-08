<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Patrones de arquitectura
    .row
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Para hablar de patrones, primero es necesario hablar de arquitectura de #[i software]. Esta consiste en una disciplina dentro del desarrollo de #[i software]. Como ya se sabe, este desarrollo es algo intangible y puede ser tan complejo como las necesidades que se quieren resolver, por lo tanto, es importante tener en cuenta que, cuando se piensa en la escalabilidad del #[i software] y su usabilidad, utilizando los recursos disponibles y sacándole el máximo provecho a esta arquitectura, posibilitando un ciclo de vida mucho más largo, se debe pensar que una aplicación de #[i software] es una especie de lego, donde todas sus piezas se encajan, para poder cumplir con diversas funciones.
        p.mb-0 Dentro de estos patrones de arquitectura, se encuentran diferentes tipos, que permiten generar #[i software] con mayor rendimiento. Algunos de estos son:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:450px", alt='').m-auto
    Separador 
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Patrón multicapa
    p(data-aos="fade-right") Son patrones de X niveles y se organizan en capas horizontales. Muchas de las aplicaciones informáticas han tomado este patrón como arquitectura, funciona conectando los componentes, pero estos no dependen uno del otro. Cada una de estas capas cumple con una función específica en el desarrollo de la aplicación. Su objetivo primordial es la separación de la lógica de negocios de la lógica de diseño, es decir, separar la capa de datos de la capa de presentación al usuario. 
    p.mb-5(data-aos="fade-right") La ventaja que ofrece consiste en que el desarrollo se puede llevar a cabo en varios niveles. En caso de realizar algún cambio, sólo se afecta el nivel requerido, sin tener que revisar todo el código.
    .row.bg-c3
      .col-12
        .px-5
          .row.mb-5
            .col-12.bg-c4(data-aos="fade-down")
              .px-4.pb-4.pb-lg-0
                .row.align-items-center
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema2/img1.svg', style="width:250px", alt='').m-auto
                  .col.bg-c5
                    .p-4
                      p #[b Ejemplo:]
                      p.mb-0 El modelo de interconexión de sistemas abiertos, donde la capa de presentación se encarga de todo el diseño y desarrollo visual de parte del usuario, mientras que la capa de negocio se encarga de ejecutar las reglas y la lógica del negocio. Cada capa tiene funciones específicas, una capa informa cómo debe comportarse la venta de un producto, teniendo en cuenta la lógica y reglas establecidas para registrar esa venta, de esta forma, el patrón permite delegar funcionalidades propias de cada capa.
          p.mb-5(data-aos="fade-right") En la siguiente figura, se puede observar la arquitectura en tres capas. Fue creada en Microsoft Visio 2003, para ayudar a entender gráficamente y de una forma más fácil este tema.
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 1]. Arquitectura de tres capas
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img2.svg', alt='La figura representa describe una arquitectura de tres capas en un sistema informático, iniciando con la capa de presentación donde los usuarios interactúan con el sistema a través de computadoras llamadas clientes. Sigue la capa de negocio, gestionada por un servidor de negociación que procesa las solicitudes según las reglas y lógica empresarial. Finalmente, la capa de datos, operada por un servidor de base de datos, se encarga del almacenamiento, recuperación y manejo eficiente de los datos.').m-auto
          p.mb-5(data-aos="fade-right") Este patrón puede dividirse entre capas tantas veces se decida según su arquitectura, solo se debe tener en cuenta que, aunque es una buena forma de desarrollar, si existen muchas capas, también podría ser contraproducente, así que depende del juicio del arquitecto de #[i software] la distribución de capas que contemple.
          p.mb-5(data-aos="fade-right") #[b Ventajas]
          .row.justify-content-center
            .col-lg-8.bg-c2(data-aos="fade-left")
              .p-4
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema2/img3.svg', style="width:170px", alt='').m-auto
                  .col
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fa.fa-cube(style="color:white")
                        | 
                        p.text-white.mb-0 Facilidad al momento de realizar pruebas.
                      li.d-flex
                        i.fa.fa-cube(style="color:white")
                        | 
                        p.text-white.mb-0 Facilidad para el mantenimiento de la aplicación.
                      li.d-flex
                        i.fa.fa-cube(style="color:white")
                        | 
                        p.text-white.mb-0 Se puede desarrollar por separado, delegando capas por desarrollador.
                      li.d-flex.mb-0
                        i.fa.fa-cube(style="color:white")
                        | 
                        p.text-white.mb-0 Permite actualizar y mejorar la aplicación por separado.
    Separador 
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Patrón Modelo Vista Controlador
    p.mb-5(data-aos="fade-right") Este modelo, también identificado como #[b MVC], es una arquitectura que también se separa por capas, solo que en este caso son tres capas las que se dedican o son responsables de delegar funcionalidades específicas, como se puede observar a continuación:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row.justify-content-center(titulo="Modelo")
        .col-10
          p Es una representación de los datos, maneja la lógica del negocio y la persistencia.
          ul.lista-ul
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Accede a la capa de la base de datos.
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 En el modelo se definen las reglas del negocio.
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Contiene la información extraída de la base de datos para después ser manipulada.
          .row
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img4.svg', style="width:850px", alt='El diagrama representa el patrón Modelo-Vista-Controlador (MVC), donde el usuario interactúa con la interfaz, el controlador gestiona la entrada, manipula el modelo y luego el modelo notifica cambios a la vista, que se actualiza y muestra la nueva información al usuario. Este patrón ayuda a separar la lógica de la aplicación en componentes manejables.')
                figcaption Nota. Marrero, D. (2016). Patrón MVC.
      .row.justify-content-center(titulo="Vista")
        .col-10
          p Se encarga de la interfaz de usuario, la interacción del usuario con el sistema y el despliegue de información.
          ul.lista-ul
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Muestra la información solicitada al modelo.
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Recibe los eventos que ejecuta del usuario en la interacción de la vista y se conecta con el controlador.
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Recibe información del usuario para ser enviada al modelo y que sea almacenada.
          .row
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img5.svg', style="width:950px", alt='La imagen presenta un esquema del patrón de diseño Modelo-Vista-Controlador (MVC), destacando el flujo de procesos desde la solicitud del usuario al controlador, pasando por la manipulación de datos en el modelo, hasta la presentación final en la vista. Se explica que la vista integra tanto la lógica como el diseño para preparar la salida al usuario, y se enfatiza la importancia de este enfoque para la mantenibilidad del sistema.')
                figcaption Nota. Bahit, E. (2011). POO y MVC en PHP.
      .row.justify-content-center(titulo="Controlador")
        .col-10
          p El controlador no es más que el interlocutor entre la vista y el modelo, gestionando y adaptando la información entre ellas.
          ul.lista-ul
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Recibe peticiones desde la vista por medio de eventos.
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Envía peticiones al modelo de datos de información.
            li.d-flex
              i.fa.fa-cube(style="color:#273A89")
              | 
              p.mb-0 Organiza la información para el despliegue en la vista.
          .row
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img6.svg', style="width:950px", alt='La imagen ilustra el patrón Modelo-Vista-Controlador (MVC), donde el Controlador actúa como el cerebro que inicia la interacción, maneja la presentación y flujo de datos entre la Vista y el Modelo. La Vista muestra el estado actual del Modelo y se actualiza a través de eventos, mientras que el Modelo gestiona la lógica de los datos y comunica cambios al Controlador, que a su vez puede modificar el Modelo y actualizar la Vista. Este ciclo asegura que los datos presentados al usuario sean consistentes y estén actualizados.')
              figcaption Nota. Hernández, R. (2021). El patrón modelo-vista-controlador: Arquitectura y frameworks explicados.
    p.mb-5(data-aos="fade-right") Es así como se pueden observar algunas de las responsabilidades de cada capa, para lo que hay que seguir unos pasos específicos al momento de iniciar sesión en una aplicación, observe:
    .row.bg-c3
      .col-12
        .px-5
          .row.justify-content-center
            .col-10
              PasosA.color-acento-contenido(tipo="n")(data-aos="fade-down")
                .row.align-items-center
                  .col-lg-6.order-2.order-lg-1
                    p.mb-0 El usuario ingresa los datos de acceso, login y password, en la vista. Esta información se solicita al usuario dentro de dos cajas de texto.
                  .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img3.png', style="width:250px", alt='').m-auto
                .row.align-items-center
                  .col-lg-6
                    figure.mb-4.mb-lg-0
                      img(src='@/assets/curso/tema2/img4.png', style="width:250px", alt='').m-auto
                  .col-lg-6
                    p.txt-p1.mb-0 El usuario da clic en el botón ingresar, siendo esta una petición mediante un evento desde la vista.
                .row.align-items-center
                  .col-lg-6.order-2.order-lg-1
                    p.mb-0 La vista envía esta petición mediante el evento al controlador y recibe los datos ingresados por el usuario, por medio de un arreglo.
                  .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img5.png', style="width:250px", alt='').m-auto
                .row.align-items-center
                  .col-lg-6
                    figure.mb-4.mb-lg-0
                      img(src='@/assets/curso/tema2/img6.png', style="width:250px", alt='').m-auto
                  .col-lg-6
                    p.txt-p1.mb-0 El controlador envía esta información y manda una petición de consulta al modelo.
                .row.align-items-center
                  .col-lg-6.order-2.order-lg-1
                    p.mb-0 El modelo, que es una representación de los datos, verifica si el usuario existe y la contraseña es la correcta.
                  .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img7.png', style="width:250px", alt='').m-auto
                .row.align-items-center
                  .col-lg-6
                    figure.mb-4.mb-lg-0
                      img(src='@/assets/curso/tema2/img8.png', style="width:250px", alt='').m-auto
                  .col-lg-6
                    p.txt-p1.mb-0 El modelo envía el resultado al controlador, que fue quien hizo la petición de consulta.
                .row.align-items-center
                  .col-lg-6.order-2.order-lg-1
                    p.mb-0 El controlador devuelve el resultado a la vista y, si concuerda, permite el ingreso al usuario; si no, le devuelve un mensaje de error.
                  .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img9.png', style="width:250px", alt='').m-auto
    Separador 
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Arquitectura monolítica
    .row.bg-c3
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") La arquitectura monolítica es aquella en la que el #[i software] está estructurado de forma tal que todos los aspectos funcionales del mismo quedan acoplados y sujetos en un mismo programa. En esta arquitectura, cada proceso o microservicio es un elemento independiente. Es utilizada en aplicaciones en las que todo se desarrolla en una misma parte, aunque también se utilizan módulos para desarrollar.
          .row.justify-content-center.mb-5
            .col-lg-5
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 2]. Monolith
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img7.svg', alt='La figura muestra una arquitectura monolítica de un servicio de API en Node.js, incluyendo usuarios, Threads, y publicaciones dentro de esos hilos, destacando su diseño integrado y unificado.').m-auto
          p.mb-5(data-aos="fade-right") En el momento de compilarse, lo hace de forma completa, como una sola, y se comprende en una interfaz del lado del cliente, una aplicación del lado del servidor y una base de datos. Al igual que las otras arquitecturas, tiene sus ventajas y desventajas:
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            p.mb-0 #[b Tabla 2]. Ventajas y desventajas de la arquitectura monolítica
          .tabla-a.color-acento-contenido(data-aos="fade-left")
            table
              thead
                tr
                  th(style="width:30%") Ventajas
                  th Desventajas
              tbody.bg-white
                tr
                  td Fácil de probar y debuggear.
                  td Alto acoplamiento:  si se hace un cambio en alguna parte del código, puede cambiar el comportamiento en otra parte del mismo.
                tr
                  td Fácil de desplegar.
                  td Código muy grande.
                tr
                  td Fácil de desarrollar.
                  td Costos altos al momento de su escalabilidad.
                tr
                  td 
                  td Difícil de mantener.
                tr
                  td 
                  td Dificultad en las mejoras y actualizaciones.
          Separador 
          #t_2_4
          .titulo-segundo.color-acento-contenido
            h2 2.4 Microservicios
          p.mb-5(data-aos="fade-right") Esta arquitectura se enfoca en crear pequeños programas API, que permiten que los servicios se comuniquen, posibilitando que las aplicaciones con estas arquitecturas puedan evolucionar y adaptarse muchísimo mejor. Además, se pueden incluir servicios de otras plataformas u otras aplicaciones, ya que pueden ser consumidos para la manipulación de la información.
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido(data-aos="fade-right")
                p.mb-0 #[b Figura 3]. Microservicios
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img8.svg', alt='La figura muestra una arquitectura monolítica de un servicio de API en Node.js, incluyendo usuarios, Threads, y publicaciones dentro de esos hilos, destacando su diseño integrado y unificado.').m-auto
                figcaption Nota. Imagen tomada de Hiberus. (2021)
    p(data-aos="fade-right") Dentro de sus características está que cada servicio que se desarrolla se puede hacer de forma independiente, sin que afecte el funcionamiento del resto de la aplicación; además, se crean para solucionar problemas específicos, haciéndolos especializados, y, en caso de que un servicio de estos se vuelva muy grande, puede seguirse dividiendo en más microservicios.
    p.mb-5(data-aos="fade-right") Entre los beneficios de los microservicios, se tienen:
    .row
      .col-12.bg-c6(data-aos="fade-down")
        .p-4
          .tarjeta.tarjeta--azul1.p-4
            SlyderA(tipo="b")
              .row.align-items-center.justify-content-center
                .col-lg-5.order-2.order-lg-1
                  p.txt-c1 #[b Los microservicios]
                  p.text-white.mb-0 En el mundo del desarrollo de #[i software], los microservicios están revolucionando la forma en que las empresas crean y despliegan sus aplicaciones. Hoy, exploraremos cómo esta arquitectura puede ser un catalizador de cambio, ofreciendo múltiples beneficios que potencian la agilidad, la escalabilidad y la eficiencia.
                .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img10.png', style="width:360px", alt='').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-5.order-2.order-lg-1
                  p.txt-c1 #[b La agilidad]
                  p.text-white.mb-0 En el enfoque de microservicios, los desarrolladores se enfrentan a problemas más manejables, aplicando la estrategia de "divide y vencerás". Esto no solo facilita una mejor comprensión y solución de los problemas, sino que también permite que los equipos se dividan según los microservicios en los que trabajan, integrando posteriormente sus funcionalidades, permitiendo a los equipos avanzar más rápido y con mayor precisión.
                .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img11.png', style="width:360px", alt='').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-5.order-2.order-lg-1
                  p.txt-c1 #[b La escalabilidad]
                  p.text-white.mb-0 Con los microservicios, agregar nuevas funciones se convierte en una tarea sin mayores inconvenientes. Esta flexibilidad en el escalado permite a las organizaciones adaptarse rápidamente a las demandas cambiantes del mercado o a los nuevos requisitos de los usuarios, sin comprometer el rendimiento.
                .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img12.png', style="width:360px", alt='').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-5.order-2.order-lg-1
                  p.txt-c1 #[b La sencillez en la implementación]
                  p.text-white.mb-0 Al centrarse en problemas más pequeños, los equipos logran una mejor comprensión de los desafíos, lo que facilita entregas continuas y permite corregir errores de manera oportuna.
                .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img13.png', style="width:360px", alt='').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-5.order-2.order-lg-1
                  p.txt-c1 #[b La libertad tecnológica]
                  p.text-white.mb-0 Los microservicios operan como aplicaciones pequeñas e independientes, lo que significa que no están atados a una única arquitectura. Esta diversidad permite a los equipos utilizar las tecnologías más adecuadas para cada servicio, fomentando la innovación y mejorando la eficiencia.
                .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img14.png', style="width:360px", alt='').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-5.order-2.order-lg-1
                  p.txt-c1 #[b La reutilización de código]
                  p.text-white.mb-0 Los microservicios pueden ser diseñados para ser utilizados en diferentes partes de una aplicación, lo que evita la duplicación de esfuerzos y promueve una base de código más limpia y mantenible.
                .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img15.png', style="width:360px", alt='').m-auto
    Separador 
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Diseño de la arquitectura
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Una arquitectura de #[i software] describe los componentes básicos de un sistema de #[i software] y su combinación interna. En el marco del desarrollo de #[i software], esta arquitectura es la decisión más temprana del diseño de una aplicación. Determina los criterios de calidad, como la mantenibilidad, modificabilidad, seguridad y rendimiento, además, le permite analizar de forma más clara cómo debe comportarse la aplicación que se va a desarrollar, teniendo en cuenta el acceso a ella y su capacidad.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img10.svg', style="width:260px", alt='').m-auto
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 #[b Figura 4]. Diseño de la arquitectura
    .row
      .col-12.bg-c7(data-aos="fade-left")
        .p-4.p-lg-5
          figure
            img(src='@/assets/curso/tema2/img11.svg', alt='El diagrama explica cómo se manejan las transacciones en un sistema desde el inicio en bases de datos (DB2, ORACLE, SQL) hasta la interacción final en la interfaz de usuario, pasando por un pool de conexiones, gestión de transacciones, acceso a datos, y lógica de interfaz. Resalta la secuencia de procesos para la ejecución y respuesta de transacciones.').m-auto
    Separador 
    #t_2_6
    .row.bg-c3
      .col-12
        .px-5
          .titulo-segundo.color-acento-contenido
            h2 2.6 Estilos arquitectónicos
          .row.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Los estilos son un complemento de los patrones de diseño, como los arquitectónicos de #[i software], y lo importante aquí es que se preocupan por los stakeholders. Por lo tanto, los estilos se preocupan por el tratamiento estructural del #[I software].
              p Cuando se aplican estilos arquitectónicos en el desarrollo de #[i software], se le da un valor distintivo a la calidad del #[i software]. Los estilos son un conjunto de componentes, como bases de datos o módulos de cómputo, que son utilizados para realizar una función y, por medio de conectores, permiten la comunicación, coordinación y cooperación entre ellos, #[b “el todo es la suma de sus partes”].
              .row.mb-3
                .col-12.bg-c7
                  .p-4
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/tema2/img12.svg', style="width:50px", alt='').m-auto
                      .col
                        p.mb-0 Un estilo arquitectónico se define teniendo claros los elementos, la forma y la razón por la cual se seleccionan dichos elementos. Dentro de los elementos, se deben tener en cuenta #[b el procesamiento, los datos y las conexiones]. Entre la forma, se deben considerar las propiedades y relaciones que estos elementos deben tener para cumplir con su funcionalidad. Por último, la razón no es más que el análisis mediante el cual se seleccionaron esos elementos para satisfacer las necesidades del cliente o del desarrollador.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img16.png', style="width:350px", alt='').m-auto
          p.mb-5(data-aos="fade-right") Hay diferentes tipos de estilos arquitectónicos, algunos de los más conocidos son:
          .tarjeta.tarjeta--azul1.p-4(data-aos="fade-left")
            SlyderA(tipo="b")
              .row.align-items-center.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  p.txt-c1 #[b Arquitectura centrada en datos]
                  p.text-white.mb-0 Esta arquitectura se selecciona cuando se quiere resolver una necesidad de transformación de datos en cada filtro de información, y estas transformaciones son independientes de cada filtro. Estos filtros son componentes y las tuberías son los medios de comunicación entre los componentes, como se representa en la siguiente imagen.
                .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img13.svg', style="width:480px", alt='La imagen representa el patrón de diseño "Pipes and Filters", donde un conjunto de procesos (filtros) realizan operaciones en datos que fluyen a través de conexiones (tuberías), permitiendo un procesamiento secuencial y modular de la información.').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  p.txt-c1 #[b Arquitectura Abstractos de datos y POO]
                  p.text-white.mb-0 Se piensa en esta arquitectura si la necesidad de la solución informática es integrar varias fuentes de datos desde diferentes aplicaciones o sobre la misma.
                .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img14.svg', style="width:480px", alt='El diagrama ilustra los principios de la programación orientada a objetos, mostrando objetos que contienen datos y métodos. Estos objetos están interconectados, permitiendo la interacción entre ellos mediante la invocación de métodos, lo que facilita el procesamiento y manipulación de datos. Esta interacción subraya la importancia de la encapsulación y la comunicación en la arquitectura del software orientado a objetos.').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  p.txt-c1 #[b Arquitectura de llamada y retorno]
                  p.text-white.mb-0 Refleja la estructura del lenguaje de programación. Permite al diseñador del #[i software] construir una estructura de programa relativamente fácil de modificar y ajustar a escala. Se basa en la bien conocida abstracción de procedimientos/funciones/métodos.
                .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img15.svg', style="width:480px", alt='El diagrama muestra una aplicación empresarial Java EE estructurada en tres niveles: cliente, web y EIS. Los clientes interactúan con el servidor a través de aplicaciones de escritorio o web. El nivel web maneja la interfaz de usuario y la lógica de negocio mediante JSF y Enterprise Beans. El nivel EIS se encarga del almacenamiento de datos. Esta arquitectura modular mejora la flexibilidad y el mantenimiento del software.').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  p.txt-c1 #[b Arquitectura orientada a objetos]
                  p.text-white.mb-0 Los componentes de un sistema encapsulan los datos y las operaciones que se deben realizar para manipular los datos. La comunicación y la coordinación entre componentes se consiguen a través del paso de mensaje.
                .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img16.svg', style="width:480px", alt='El diagrama ilustra los conceptos clave de la Programación Orientada a Objetos (OOP), destacando las clases como estructuras centrales que utilizan la abstracción de datos, junto con la encapsulación e el ocultamiento de información para proteger el estado interno. Además, se enfatiza la herencia, que permite la creación de nuevas clases basadas en las existentes, y el polimorfismo, que posibilita el tratamiento de objetos de diferentes clases a través de una interfaz común.').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  p.txt-c1 #[b Arquitectura orientada a aspecto]
                  p.text-white.mb-0 El uso de AOP puede aislar las diversas partes de la lógica empresarial, reduciendo así el acoplamiento entre las diversas partes de esta lógica, mejorando la reutilización del programa y mejorando la eficiencia del desarrollo, al mismo tiempo.
                .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img17.svg', style="width:480px", alt='La imagen compara la programación tradicional con la Programación Orientada a Aspectos (POA), mostrando cómo POA organiza mejor el código al separar funciones comunes como "Actualizar pantalla", "Respaldo" y "Verificar estabilidad". Mientras que sin POA las operaciones se superponen complicando el mantenimiento, con POA se presentan de forma modular, destacando la eficiencia de POA en la gestión de preocupaciones transversales y en la mejora de la cohesión y reducción del acoplamiento del código.').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  p.txt-c1 #[b Arquitectura orientada a servicios (SOA)]
                  p.text-white.mb-0 La Arquitectura Orientada a Servicios es un estilo de arquitectura de TI que se apoya en la orientación a servicios. Y esta orientación a servicios es una forma de pensar en: servicios, su construcción y sus resultados.
                .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img18.svg', style="width:480px", alt='La imagen presenta un esquema de la Arquitectura Orientada a Servicios, SOA, como núcleo integrador de diversos componentes empresariales y tecnológicos tales como plataformas, servicios, personal, procesos, arquitectura, integración y sistemas.').m-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  p.txt-c1 #[b Arquitectura estratificada]
                  p.text-white.mb-0 Se crean diferentes capas y cada una realiza operaciones que progresivamente se aproximan más al cuadro de instrucciones de la máquina. En la capa externa, los componentes sirven a las operaciones de interfaz de usuario.
                .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/img19.svg', style="width:480px", alt='El diagrama representa la estructura de una plataforma de desarrollo de aplicaciones, mostrando desde la "Capa Central" hasta la "Capa Interfaz de Usuario", las cuales están conectadas al manejo de la aplicación. Esta gestión se enlaza con una red inalámbrica y un portal cautivo, así como con una interfaz de administración y bases de datos. En la base del esquema, se indica la presencia de plataformas de desarrollo donde se crean y mantienen las aplicaciones.').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
