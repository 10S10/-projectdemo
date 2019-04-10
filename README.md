# Steps to run the code

1) Clone the repository
2) Make sure you have mysql installed on your local machine 
3) Create a database name "projectDB" in mysql with credentials
    user - root
    password - root123
    
  Look you can also change credentials But then you will need to change that into code also to run the proejct
4) In case of if you want other credentials of you Database you need to change password, username into two file the path are
     config->database.js
     database.json
   But yes project name must be projectDB
5) please install all dependencies of node modules
    npm i 
6) to start the server run below command
    npm start

You can see the server is running on localhost:3000
7)  You can test APIs from the given postman collection link
   https://www.getpostman.com/collections/da09be4dcb950eb55951

#APIS list
1) Login  
   POST localhost:3000/api/v1/auth/login 
   pass jsondata here with username, password field  

2) Logout
   POST localhost:3000/api/v1/auth/logout
   
3) Projects List  (Note this will be only available after loggedin), you need to pass JWT token in header that you will get from the login API

   POST localhost:3000/api/v1/auth/projects
   you can pass request like provided in postman collection
    ```js
{
     "start":0,
     "limit":15,
     "sort":"category_name",
     "order":"asc"
    }```

<%= answers['app:desc'] %>

## License
MIT

[npm-image]: https://img.shields.io/npm/v/<%= answers['app:name'] %>.svg?style=flat-square
[npm-url]: https://npmjs.org/package/<%= answers['app:name'] %>
[ci-image]: https://img.shields.io/travis/trailsjs/<%= answers['app:name'] %>/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/<%= answers['app:name'] %>
[daviddm-image]: http://img.shields.io/david/trailsjs/<%= answers['app:name'] %>.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/<%= answers['app:name'] %>
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/<%= answers['app:name'] %>.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/<%= answers['app:name'] %>
