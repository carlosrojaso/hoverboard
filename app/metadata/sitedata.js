module.exports = {
  statistics: [{
    counter: 500,
    caption: 'Asistentes'
  }, {
    counter: 2,
    caption: 'Dias'
  }, {
    counter: 40,
    caption: 'Charlas'
  }, {
    counter: 6,
    caption: 'Workshops'
  }],
  callToAction: {
    text: 'NG-Conf Global 2016',
    buttonText: 'Mira como estuvos',
    video: {
      id: 't95z_HLMTmM',
      title: 'GDG DevFest Ukraine 2014 - Highlights'
    }
  },
  galleryBlock: {
    title: 'GDG DevFest Ukraine 2014 - Photos',
    photos: {
      big: '../images/backgrounds/2015_1.jpg',
      small: ['../images/backgrounds/2015_2.jpg', '../images/backgrounds/2015_3.jpg']
    },
    albumUrl: 'http://www.ng-conf.org'
  },
  ticketsBlock: {
    title: 'Tiquetes',
    tickets: [{
      name: 'Estudiantes',
      price: 150,
      currency: 'USD',
      info: '*Antes del 23 de Octubre o 100 Tiquetes vendidos.<br/>Requiere Carnet Estudiantil.'
    }, {
      name: 'Creyentes',
      price: 350,
      currency: 'USD',
      info: '*Antes del 27 de Septiembre o 150 Tiquetes',
      soldOut: false
    }, {
      name: 'Regular',
      price: 400,
      currency: 'USD',
      info: '*Despues del 27 de Septiembre'
    }],
    details: 'Tiquetes dan acceso a todas las conferencias, Coffee Breaks, Almuerzos y Fiesta Oficial. Hospedaje es no incluido en el precio del tiquete.'
  },
  socialFeed: {
    source: '/data/tweets.json'
  },
  partnershipProposition: '/assets/GDG_DevFest_Ukraine_2015_Partnership_Proposition.pdf'
};
