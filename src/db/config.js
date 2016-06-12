export default {
  production: {url: process.env.DB_URL},
  test: {url: 'mongodb://localhost/shopping-list-test'},
  dev: {url: 'mongodb://localhost/shopping-list-dev'}  
}
