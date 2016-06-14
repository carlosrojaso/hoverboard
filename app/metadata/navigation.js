module.exports = {
  navigation: [{
    route: 'home',
    permalink: '/',
    text: 'Inicio',
    heroSettings: {
      backgroundColor: '#00BCD4',
      backgroundImage: '/images/backgrounds/home.png',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF',
      video: {
        title: 'NG Conf 2016',
        youtubeId: 'J5Bvy4KhIs0',
        text: 'Mira como fue en USA'
      }
    }
  }
  /*, 
  {
    route: 'blog',
    permalink: '/blog',
    text: 'Blog',
    heroSettings: {
      backgroundColor: '#03A9F4',
      backgroundImage: '/images/backgrounds/blog.png',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF'
    }
  }*/
  ,
   {
    route: 'schedule',
    permalink: '/schedule',
    text: 'Agenda',
    heroSettings: {
      backgroundColor: '#607D8B',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF'
    }
  }, {
    route: 'speakers',
    permalink: '/speakers',
    text: 'Conferencistas',
    heroSettings: {
      backgroundColor: '#673AB7',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF'
    }
  }]
};
