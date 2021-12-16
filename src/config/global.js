export default {
  global: {
    componenteFormativo: 'Plan de promotoría',
    descripcionCurso:
      'En el componente se abordan temas que permiten estructurar programas de formación, teniendo clara la metodología y los criterios de evaluación frente al trabajo de concientización con comunidades a cerca de las normativas ambientales. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estructura de programas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Legislación ambiental ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Factores de clasificación de las normas ambientales ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de jerarquización de las normas ambientales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Autoridades ambientales',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Universidad Cetys (2019). Medición del aprendizaje: Manual para profesores. ',
      link:
        'https://repositorio.cetys.mx/bitstream/60000/421/1/ManualDeMedici%C3%B3nDelAprendizaje2019.pdf ',
    },
    {
      referencia:
        'DANE (2010). Clasificaciones de las actividades ambientales. ',
      link:
        'https://www.dane.gov.co/files/investigaciones/pib/ambientales/Clas_actividades_ambientales.pdf ',
    },
    {
      referencia: 'Ideam, (s.f.) Autoridades ambientales en Colombia. ',
      link: 'http://www.ideam.gov.co/web/ocga/autoridades ',
    },
  ],
  glosario: [
    {
      termino: 'Actividades didácticas',
      significado:
        'conjunto de operaciones propuestas para alcanzar los objetivos determinados en un proceso de capacitación.',
    },
    {
      termino: 'Criterio de evaluación',
      significado:
        'enunciado que expresa el grado y tipo de aprendizaje que se espera que sea alcanzado con respecto a algún concepto, procedimiento o actitud concreta.',
    },
    {
      termino: 'Cultura de sensibilización',
      significado:
        'consiste en saber y comprender que cada cultura es diferente y aceptar dicha diferencia.',
    },
    {
      termino: 'Gamificación',
      significado:
        'se trata de la integración entre dinámicas de juego en entornos no lúdicos.',
    },
    {
      termino: 'Legislación ambiental',
      significado:
        'es un complejo conjunto de normas que regulan la interacción del ser humano y el resto de los componentes del medio ambiente natural.',
    },
    {
      termino: 'Normativa ambiental',
      significado:
        'es el conjunto de objetivos, principios, criterios y orientaciones generales para la protección del medio ambiente.',
    },
    {
      termino: 'Resolución ambiental',
      significado:
        'es el acto administrativo final del procedimiento de evaluación ambiental mediante el cual se califica ambientalmente el proyecto o actividad sometido al SEIA - Sistema Nacional de Evaluación de Impacto Ambiental.',
    },
    {
      termino: 'Saneamiento ambiental',
      significado:
        'conjunto de acciones técnicas y socioeconómicas de salud pública que tienen por objetivo alcanzar niveles crecientes de salubridad ambiental.',
    },
  ],
  complementario: [
    {
      texto:
        'Godínez, A. (2017). Planeación de la capacitación [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hFB8-l8-CU4',
    },
    {
      texto:
        'Salas, J. (2018), Capacitación práctica en 4 pasos. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aJyzuRwgRlE',
    },
    {
      texto:
        'Martínez, P. (2000) Jerarquización de las decisiones ambientales: el modelo de esferas concéntricas. Observatorio Medioambiental.  Número 3, p. 21-34.',
      tipo: 'Pdf',
      link:
        'https://revistas.ucm.es/index.php/OBMD/article/download/OBMD0000110021A/21895/0  MI0C4FFV)/Downloads/23037-Texto%20del%20art%C3%ADculo-23056-1-10-20110607.PDF',
    },
    {
      texto:
        'Doria, C. (2020). SISTEMA NACIONAL AMBIENTAL - Autoridades Ambientales. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iNfCjL1L3pg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
