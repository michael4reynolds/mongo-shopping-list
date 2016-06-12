# Mongo Shopping List

### Run development server

    $ mongod --db-path=data
    
    # in another terminal window
    $ npm run start 

### Run production server

    $ DB_URL="mongodb://dbusername:dbpassword@dsnum.mlab.com:dsnum/shopping_list" NODE_ENV=production npm run start

### Run on heroku

    $ heroku config:set DB_URL="mongodb://dbusername:dbpassword@dsnum.mlab.com:dsnum/shopping_list"
    $ git push heroku master
