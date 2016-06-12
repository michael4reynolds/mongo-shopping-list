export default {
  production: {url: process.env.DB_URL},
  test: {url: 'mongodb://localhost/shopping-list-test'},
  development: {url: 'mongodb://localhost/shopping-list-dev'}  
}
