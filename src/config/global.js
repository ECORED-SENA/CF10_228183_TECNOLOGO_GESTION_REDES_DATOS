export default {
  global: {
    componenteFormativo:
      'Verificación de acuerdo con políticas de la organización',
    descripcionCurso:
      'Este componente formativo aborda elementos generales y claves del proceso de verificación de dispositivos y servicios de red, según las políticas y criterios de la organización. Con su estudio responsable, el aprendiz podrá apropiarse de inspección física y lógica de la red, parámetros, comandos, monitoreos de rendimiento, protocolos de prueba y demás acciones propias del proceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Verificación de conectividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Inspección física de la red',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Inspección lógica de la red',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Verificación de dispositivos de cómputo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Verificación de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Monitoreo de rendimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Monitoreo de red',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos de prueba',
            hash: 't_3_3',
          },
        ],
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
      tema: 'SNMP',
      referencia:
        'Network Direction (2020). <em>How SNMP Works | Network Fundamentals Part 24</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vWZefoGNk5g',
    },
  ],
  glosario: [
    {
      termino: '<em>Checksum</em>',
      significado:
        'detecta cambios inesperados en una cadena de datos, verificando su integridad.',
    },
    {
      termino: 'CPU',
      significado:
        'siglas que indican Unidad de Procesamiento Central, aquí se encuentran los componentes que permiten a los equipos electrónicos realizar el procesamiento de datos.',
    },
    {
      termino: 'SAI',
      significado:
        'sistema de alimentación ininterrumpida o también conocido como UPS son dispositivos que sirven para proporcionar una protección eléctrica.',
    },
    {
      termino: 'UDP',
      significado:
        'es el protocolo de datagramas de usuario, permite la transmisión de datagramas en red.',
    },
    {
      termino: 'UNIX',
      significado:
        'sistema operativo multitarea y multiusuario. Los posteriores desarrollos de este sistema son Linux, MAC OS X, Android, iOS, entre otros.',
    },
    {
      termino: 'URL',
      significado:
        'localizador de recursos uniforme, es un identificador que se le asigna a los recursos disponibles en internet como páginas WEB, textos, fotos, videos, entre otros. La URL tiene su correspondencia con una dirección IP.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariganello, E. (2020). Redes cisco - Guía de estudio para la certificación CCNA 200-301. <em>alphaeditorialcloud</em>.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/library/publication/redes-cisco-guia-de-estudio-para-la-certificacion-ccna-200-301',
    },
    {
      referencia:
        'Castaño Ribes, R. J. (2013). Redes locales. Macmillan Iberia S.A.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43257?page=298',
    },
    {
      referencia:
        'Valdivia, C. (2020). <em>Sistemas informáticos y redes locales. Ediciones Paraninfo S.A.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial. Regional Antioquia',
        },
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e innovación tecnológica industrial. Regional Antioquia',
        },
        {
          nombre: 'Cinthia Rocío Trejos Chacón',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la empresa y los servicios. Regional Norte de Santander',
        },
        {
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de la gestión industrial. Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro industrial del Diseño y la Manufactura. Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable desarrollo curricular Ecosistema RED Santander',
          centro:
            'Centro industrial del Diseño y la Manufactura. Regional Santander',
        },
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
        {
          nombre: '',
          cargo: '',
          centro: '',
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
