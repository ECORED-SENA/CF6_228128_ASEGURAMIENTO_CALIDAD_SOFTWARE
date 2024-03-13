export default {
  global: {
    componenteFormativo: 'Patrones de diseño de <i>software</i>',
    descripcionCurso:
      'Los patrones de diseño de <i>software</i> surgen a partir de experiencias desarrolladas en la industria y representan un conjunto de formas estandarizadas, probadas y repetibles, que permiten resolver uno o varios problemas particulares que se presentan en el diseño del <i>software</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos GOF',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Patrones de arquitectura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Patrón multicapa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Patrón Modelo Vista Controlador',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Arquitectura monolítica',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Microservicios',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Diseño de la arquitectura',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Estilos arquitectónicos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Patrones comportamentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estrategia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comando',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<i>Iterator</i>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Patrones creacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '<i>Singleton</i>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Fábrica abstracta',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Patrones estructurales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fachada',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: '<i>Delegate</i>',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Vistas estáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Diagrama de despliegue',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Diagrama de componentes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Patrones de diseño',
      referencia:
        'Leiva, A. [DevExperto]. (2020). <i>Patrones de diseño software: Repaso completo en 10 minutos</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/6BHOeDL8vls',
    },
    {
      tema: 'Diagrama de despliegue',
      referencia:
        'Landa, N. [nicosiored]. (2018b). <i>Diagrama de Despliegue - 22 - Tutorial UML en español</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/NSB0ATJUavA',
    },
    {
      tema: 'Diagrama de componentes',
      referencia:
        'Landa, N. [nicosiored]. (2018a). <i>Diagrama de Componentes I - 20 - Tutorial UML en español</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/oOycG_n1ARs',
    },
    {
      tema: 'Arquitectura Multicapa',
      referencia:
        'Garrido, A. [Universitat Politécnica de Valéncia - UPV]. (2017). <i>Arquitectura del software multicapa</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/kHvxX1E9vIU',
    },
    {
      tema: 'Patrón Modelo Vista Controlador',
      referencia:
        'Fazt. (2017). <i>¿What is the MVC Pattern?, Simple explanation</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/ANQDmqBYwns',
    },
    {
      tema: 'Arquitectura Monolítica',
      referencia:
        'Lazy Loading. (2021). <i>Arquitectura monolítica vs microservicios</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/99YMeCBk3jw',
    },
    {
      tema: 'Estilos de Arquitectura',
      referencia:
        'Mercury 7w7. (2020). <i>Estilos de Arquitectura de Software</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PK9TTcTosTw',
    },
    {
      tema: 'Arquitectura Microservicios',
      referencia:
        'MegaPractical. (2016). <i>Arquitectura Orientada a Servicios (SOA), Enterprise Service Bus TIBCO en español.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/o_Br2vZ4uQY',
    },
  ],
  glosario: [
    {
      termino: 'Acoplamiento',
      significado:
        'es la forma y nivel de interdependencia entre módulos de <b><i>software</i></b>; una medida de qué tan cercanamente conectados están dos rutinas o módulos de <b><i>software</i></b>.',
    },
    {
      termino: 'API',
      significado:
        'es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el <i>software</i> de las aplicaciones. API significa interfaz de programación de aplicaciones. Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados.',
    },
    {
      termino: 'Aplicación',
      significado:
        'es un programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: '<i>Browser</i>',
      significado:
        'es el término inglés que se utiliza para identificar a un navegador web o navegador de Internet. Consiste en un <i>software</i>, programa o incluso aplicación que ofrece al usuario el acceso a la red.',
    },
    {
      termino: 'Delegar',
      significado:
        'dar [una persona o un organismo] un poder, una función o una responsabilidad a alguien para que los ejerza en su lugar o para obrar en representación suya.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'capacidad de adaptación y respuesta de un sistema con respecto al rendimiento del mismo a medida que aumentan de forma significativa el número de usuarios del mismo.',
    },
    {
      termino: 'Ícono',
      significado:
        'signo que representa un objeto o una idea con los que guarda una relación de identidad o semejanza formal.',
    },
    {
      termino: 'Implementación',
      significado:
        'poner en funcionamiento o aplicar métodos, medidas, etc., para llevar algo a cabo.',
    },
    {
      termino: 'Interfaz',
      significado:
        'la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro. En este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una <b>interfaz</b>.',
    },
    {
      termino: 'Patrón',
      significado:
        'quitar de una cosa lo malo, lo que es extraño o lo que no sirve, para dejarla pura. Los Patrones de diseño (<i>Design Patterns</i>) son una solución general, reutilizable y aplicable a diferentes problemas de diseño de <i>software</i>.',
    },
    {
      termino: 'Servidor',
      significado:
        'un <b>servidor</b> es un conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'es la “parte de la gramática que estudia el modo en que se combinan las palabras y los grupos que éstas forman para expresar significados, así como las relaciones que se establecen entre todas esas unidades”.',
    },
    {
      termino: 'Sitio web',
      significado:
        'se relacionan con las entidades clave de los proyectos de <b>desarrollo</b>: requerimientos, actividades y resultados.',
    },
    {
      termino: 'UML',
      significado:
        'lenguaje unificado de modelado. Relaciona un conjunto de diagramas estandarizados para la representación de sistemas de información desde diferentes tipos de vista.',
    },
    {
      termino: 'Web',
      significado:
        'conjunto de información que se encuentra en una dirección determinada de Internet.',
    },
  ],
  referencias: [
    {
      referencia: 'Amazon Web Services [AWS]. (s. f.). <i>Microservicios</i>. ',
      link: 'https://aws.amazon.com/es/microservices/',
    },
    {
      referencia:
        'Ayala, J. (s.f.). <i>Modelo de Aplicación de Java Empresarial</i>.',
      link:
        'https://jmaw.blogspot.com/2012/09/modelo-de-aplicacion-de-java-empresarial.html',
    },
    {
      referencia: 'Bahit, E. (2011). <i>POO y MVC en PHP</i>. ',
      link:
        'https://www.slideshare.net/eugeniabahit/poo-y-mvc-en-php-por-eugenia-bahit',
    },
    {
      referencia:
        'Blancarte, O. (2020). <i>Arquitectura Monolítica</i>. Reactive Programming. ',
      link:
        'https://reactiveprogramming.io/blog/es/estilos-arquitectonicos/monolitico',
    },
    {
      referencia:
        'Cinergix Pty. Ltd. (2021). <i>La Guía Fácil de los Diagramas de Despliegue UML</i>. Blog de Creately. ',
      link:
        'https://creately.com/blog/es/diagramas/tutorial-de-diagrama-de-despliegue/',
    },
    {
      referencia:
        'Cuéllar, J. (2010). <i>Estilos y patrones básicos en arquitectura de software</i>. ',
      link:
        'https://josecuellar.net/estilos-patrones-basicos-arquitectura-software/',
    },
    {
      referencia: 'Diagramas UML. (2019). <i>Diagrama de componentes</i>. ',
      link: 'https://diagramasuml.com/componentes/',
    },
    {
      referencia: 'EcuRed. (s. f.). <i>Patrones Gof</i>. ',
      link: 'https://www.ecured.cu/Patrones_Gof',
    },
    {
      referencia: 'Fusap. (2021). <i>INTEGRACIÓN SOA-OSB: TELECOM</i>. ',
      link: 'https://www.fusap.com.ar/desarrollos.html',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R., Vlissides, J. y Booch, G. (1994). <i>Design Patterns: Elements of Reusable Object-Oriented Software</i>. Addison-Wesley Professional. ',
      link: '',
    },
    {
      referencia:
        'Hernández, R. (2021). <i>El patrón modelo-vista-controlador: Arquitectura y frameworks explicados</i>. ',
      link:
        'https://www.freecodecamp.org/espanol/news/el-modelo-de-arquitectura-view-controller-pattern/',
    },
    {
      referencia:
        'Hiberus. (2021, marzo 4). <i>De una arquitectura tradicional a una arquitectura microservicios</i>. Hiberus Tecnología. ',
      link:
        'https://www.hiberus.com/crecemos-contigo/de-una-arquitectura-tradicional-a-microservicios/',
    },
    {
      referencia:
        'Landa, N. [nicosiored]. (2018c). <i>Patrones de Diseño de Software [Video]</i>. YouTube. ',
      link:
        'https://www.youtube.com/playlist?list=PLM-p96nOrGcbqbL_A29b0z3KUXdq2_fpn',
    },
    {
      referencia:
        'Landeta_P. (2013). <i>2 2 estilos arquitectónicos</i>. Slideshare. ',
      link: 'https://es.slideshare.net/landeta_p/2-2-estilos-arquitectonicos',
    },
    {
      referencia: 'Marrero, D. (2016). <i>Patrón MVC</i>. ',
      link:
        'https://daniellamikaelson.files.wordpress.com/2016/07/20160327_56f72c4319db8.jpg?w=840',
    },
    {
      referencia:
        'Novoseltseva, E. (2020). <i>Los 5 principales patrones de Arquitectura de Software</i>. Apiumhub. ',
      link:
        'https://apiumhub.com/es/tech-blog-barcelona/principales-patrones-arquitectura-software/',
    },
    {
      referencia: 'Rojas, Y. (2021). <i>Base de Datos</i>. ',
      link:
        'https://guiadelempresario.com/wp-content/uploads/2021/05/Base-de-datos-orientada-a-objetos.jpeg',
    },
    {
      referencia:
        'Ruelas, U. (2017). Poa aop programación orientada a aspectos <i>aspect oriented programming</i> ejemplo qué es paradigma. ',
      link:
        'https://codingornot.com/que-es-la-programacion-orientada-a-aspectos-aop/poa-aop-programacion-orientada-a-aspectos-aspect-oriented-programming-ejemplo-que-es-paradigma',
    },
    {
      referencia:
        'Zambrano, L. (2017). <i>Diseño de la arquitectura estratificada de la solución</i>. ',
      link:
        'https://www.researchgate.net/figure/Figura-1-Diseno-de-la-arquitectura-estratificada-de-la-solucion_fig1_318509442',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'David Eduardo Lozada Cerón',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y Producción audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
