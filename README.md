### Steps to run the code

- Clone the repository
- Make sure you have mysql installed on your local machine 
- Create a database name `projectDB` in mysql with credentials of mysql
  
        user - root
        password - root123
    
  Look you can also change credentials But then you will need to change that into code also to run the proejct
- In case of if you want other credentials of you Database you need to change password, username into two file the path are
 
        config->database.js
        database.json

   But yes project name must be projectDB

- please install all dependencies of node modules using below command
   
     `npm i`

- to start the server run below command
 
     `npm start`

You can see the server is running on [http://localhost:3000](http://localhost:3000)
-  You can test APIs from the given postman collection link
   https://www.getpostman.com/collections/da09be4dcb950eb55951

### APIS list

Pass headers in all apis 
```
Content-Type : application/json
Accept  : application/json    
```

Here Pass this extra headers in API 2, 3
   
```
Authorization : JWT {{token}}    
```   

**1. Login**

   POST localhost:3000/api/v1/auth/login 
   
   pass jsondata here with username, password field  
   ```javascript
   {   
       "username":"shilpa",
       "password":"123456"   
   }   
   ```   
  
   In response you will get data like 
      
   ```javascript
   {
    "flag": true,
    "data": {
        "user": {
            "id": 1,
            "ipaddress": "127.0.0.1",
            "username": "shilpa123",
            "salt": "%$123",
            "email": "test@gmail.com",
            ...
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJpcGFkZHJlc3MiOiIxMjcuMC4wLjEiLCJ1c2VybmFtZSI6InNoaWxwYTEyMyIsInNhbHQiOiIlJDEyMyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiU2hpbHBhIiwibGFzdF9uYW1lIjoiUGF0ZWwiLCJjaXR5Ijoic3VyYXQiLCJzdGF0ZSI6Imd1amFyYXQiLCJ6aXBfY29kZSI6IjM5NTAwMyIsImNvdW50cnkiOjUwMCwiY3JlYXRlZEF0IjoiMjAxOS0wNC0wOVQyMTo0MDozOC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxOS0wNC0wOVQyMTo0MDozOC4wMDBaIn0sImlhdCI6MTU1NDg2ODkxNiwiZXhwIjoxNTU1MzAwOTE2LCJhdWQiOiJsb2NhbGhvc3QiLCJpc3MiOiJsb2NhbGhvc3QifQ.9yV5CrZnJ8naxQWaxXRuHOWZVPES72kPE9pLm5M_XFY"
    }
  }
   ``` 

  Here token means the JWT token that means user is loggedin and can use this token to authenticate the other apis    
  Now you need to store this token at frontside and need to pass to bloew 2 apis as a header
     
  
**2. Logout**
  
   GET localhost:3000/api/v1/auth/logout
   
**3. Projects List**  (Note this will be only available after loggedin), you need to pass JWT token in header that you will get from the login API

   POST localhost:3000/api/v1/auth/projects
    
   you can pass request like provided in postman collection
   
   ```javascript
   {
     "start":0,
     "limit":15,
     "sort":"category_name",
     "order":"asc"
   }
   ```
