const config = {
  host: 'http://localhost:8000/',
  apiHost: 'htpp://localhost:8000/api/v1',
}

export default config

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true
  },
}[process.env.NODE_ENV || 'development'];

export const env = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  apiHost: process.env.APIHOST || config.apiHost,
  app: {
    title: 'Redux Saga Example',
    meta: [
      {
        name: 'decription',
        content: 'Experimenting about what the redux saga is',
      },
      {
        charset: 'utf-8'
      },
      {
        property: 'og:site_name',
        content: 'Redux Saga example',
      },
      {
        property: 'og:title',
        content: 'Redux Saga example,
      },
      {
        property: 'og:description',
        content: 'Experimenting about what the redux saga is',
      },
      {
        property: 'og:card',
        content: 'summary'
      },
      {
        property: 'og:creator',
        content: '@bh',
      },
  },      
}, enviroment)

