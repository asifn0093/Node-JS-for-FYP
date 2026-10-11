                //  Day 04 — Node.js HTTP Server

// Goal / Objective :: Node.js ka built-in http module use karke request ko samajhna aur different types ke responses/API-style server banana.

        //   Lesson 26 — Request & Response


const { response } = require("express");
const http = require("http");

const server = http.createServer((request, response) => { // Server create kar rahe hain
    console.log("Method:", request.method); // Client ki request ka method
    console.log("URL:", request.url); // Client ne kis URL ko request kiya
    response.end("Hello from Asif's server!"); // Client ko response bhej rahe hain
});
server.listen(3004, () => { // Server ko port 3004 par run kar rahe hain
    console.log("Server running on port 3004");
});

//  Important => We already user port 3001 and 3002 in day03.js, so we are using port 3004 here to avoid conflict.

    //  Request kya hai?
//  "Mujhe /students ka data chahiye."

/*

Browser
   ↓
Request
   ↓
Node.js Server

*/

    //  Response kya hai?
//  "Yeh raha /students ka data."

/*

Node.js Server
      ↓
   Response
      ↓
   Browser

*/

        //  request.method
//  Ye batata hai request kis HTTP method ki hai.

/*
        Common Methods

GET
POST
PUT
PATCH
DELETE

*/

        //  request.url
//  Ye batata hai request kis URL ke liye hai.

/*

Agr browser ne http://localhost:3001/ URL ko request kiya hai to http://localhost:3001/ ye request.url hoga.

*/

                //  Your Task  :: Code ko modify karo taake:
/*

1. Server port 3005 par chale.
2. Terminal mein method show ho.
3. Terminal mein URL show ho.
4. Browser ko response mile:
Welcome to Asif's FYP Backend
5. Browser mein ye URLs test karo:
   - http://localhost:3005/
   - http://localhost:3005/students
   - http://localhost:3005/courses  

*/

const http2 = require("http");

const server2 = http2.createServer((request , response) => {
    console.log("Method : ", request.method)
    console.log("URL : ", request.url);
    response.end("Welcome to Asif's FYP Backend");
});
server2.listen(3005, () => {
    console.log("Server running on port 3005");     
});

            //  Lesson 27 — HTTP Methods  
// HTTP Method basically server ko batata hai ke client kya karna chahta hai.

/*

| Method   | Purpose                                  | FYP Example                            |
| -------- | ---------------------------------------- | -------------------------------------- |
| `GET`    | Data lena                                | Students ki list lena                  |
| `POST`   | New data banana                          | New admission application submit karna |
| `PUT`    | Existing data ko completely update karna | Complete application update            |
| `PATCH`  | Existing data ka kuch part update karna  | Status `Pending → Accepted`            |
| `DELETE` | Data delete karna                        | Application delete karna               |

*/

//  1. GET :: GET = data lena

const http3 = require("http"); // Importing the http module

const server3 = http3.createServer((request, response) => { // Creating an HTTP server
    if (request.method === "GET") { // Checking if the request method is GET
        response.end("GET Request - Students Data"); // Sending a response to the client
    }
});
server3.listen(3006, () => { // Listening on port 3006
    console.log("Server running on port 3006");
});

//  2. POST :: POST = new data banana

/*

Student
   ↓
POST /applications
   ↓
Server
   ↓
New Application

*/

const http4 = require("http"); // Importing the http module
const server4 = http4.createServer((request , response) => {
    if(request.method === "POST") { // Checking if the request method is POST
        response.end("POST Request - New Application Submitted"); // Sending a response to the client
    }
});
server4.listen(3007, () => { // Listening on port 3007
    console.log("Server running on port 3007");
});

// 3. PUT :: PUT = existing data ko completely update karna

const http5 = require("http"); // Importing the http module
const server5 = http5.createServer((request , response) => {
    if(request.method === "PUT") { // Checking if the request method is PUT
        response.end("PUT Request - Application Updated"); // Sending a response to the client
    }
});
server5.listen(3008, () => { // Listening on port 3008
    console.log("Server running on port 3008");
});

// 4. PATCH :: PATCH = existing data ka specific part update karna

const http6 = require("http"); // Importing the http module
const server6 = http6.createServer((request , response) => {
    if(request.method === "PATCH") { // Checking if the request method is PATCH
        response.end("PATCH Request - Application Status Updated"); // Sending a response to the client
    }
});
server6.listen(3009, () => { // Listening on port 3009
    console.log("Server running on port 3009");
});

// 5. DELETE :: DELETE = existing data ko delete karna

const http7 = require("http"); // Importing the http module
const server7 = http7.createServer((request , response) => {
    if(request.method === "DELETE") { // Checking if the request method is DELETE
        response.end("DELETE Request - Application Deleted"); // Sending a response to the client
    }
});
server7.listen(3010, () => { // Listening on port 3010
    console.log("Server running on port 3010");
});

//  Complete Example :: Ab sab methods ko ek server mein dekho

const http8 = require("http");

const server8 = http8.createServer((request, response) => {

    if (request.method === "GET") {

        response.end("GET Request - Get Students");

    } else if (request.method === "POST") {

        response.end("POST Request - Create Application");

    } else if (request.method === "PUT") {

        response.end("PUT Request - Update Application");

    } else if (request.method === "PATCH") {

        response.end("PATCH Request - Update Application Status");

    } else if (request.method === "DELETE") {

        response.end("DELETE Request - Delete Application");

    } else {

        response.end("Method Not Supported");

    }

});

server8.listen(3011, () => {
    console.log("Server running on port 3011");
});

            //  🧠 FYP mein iska connection :: Tumhare admission portal mein roughly:

/*

GET
↓
Applications/Students ka data lena

POST
↓
New admission application submit karna

PUT
↓
Application ki complete information update karna

PATCH
↓
Application status change karna

DELETE
↓
Application remove karna

*/

            //  Your Task :: Write down the complete code y your own.
 
/*

1. GET     → Get Students
2. POST    → Create Application
3. PUT     → Update Application
4. PATCH   → Update Status
5. DELETE  → Delete Application

*/            

                // Lesson 28 — HTTP Status Codes
//  In this lesson we learn

/*

1. 200 → Success
2. 201 → Created
3. 400 → Bad Request
4. 401 → Unauthorized
5. 403 → Forbidden
6. 404 → Not Found
7. 500 → Server Error

*/

        //  Than we use it in node.js 

/* 
response.statusCode = 200;
response.end("Success");
*/

        // Let's get started

//  Jab server client ko response bhejta hai, sirf message nahi bhejta. Server ek status code bhi bhejta hai.

/*
Example:

200 → Request successful
404 → Requested resource nahi mila
500 → Server mein error
*/

        // 1. 200 OK  ::  Request successfully complete ho gayi.


const http9 = require("http");
const server9 = http9.createServer((request, response) => {
    response.statusCode = 200; 
    response.end("Student of Data retrived successfully!")
});
server9.listen(3011, () => {
    console.log("Server is Runnig on port 3011");
});

        //  2. 201 Created  ::  new resource create

const http10 = require("http");
const server10 = http10.createServer((request, response) => {
    response.statusCode = 201;
    response.end("New resources created successfully!")
});
server10.listen(3012 , () => {
    console.log("Server is running on port 3012");
});

        //  3. 400 Bad Request  ::  Client ki request mein kuch galat hai.

const http11 = require("http");
const server11 = http11.createServer((request, response) => {
    response.statusCode = 400; 
    response.end("Invalid application data!")
});
server11.listen(3013, () => {
    console.log("Server is ruinning on port 3013");
});

        //  4. 401 Unauthorized  :: 
    
const http12 = require("http");
const server12 = http12.createServer((request, response) => {
    response.statusCode = 401; 
    response.end("Invalid application data!")
});
server12.listen(3014, () => {
    console.log("Server is ruinning on port 3014");
});

        //  5. 403 Forbidden     :: 

const http13 = require("http");
const server13 = http13.createServer((request, response) => {
    response.statusCode = 403; 
    response.end("Invalid application data!")
});
server13.listen(3015, () => {
    console.log("Server is ruinning on port 3015");
});

        //  6. 404 Not Found     ::

const http14 = require("http");
const server14 = http14.createServer((request, response) => {
    response.statusCode = 404; 
    response.end("Invalid application data!")
});
server14.listen(3016, () => {
    console.log("Server is ruinning on port 3016");
});

        //  7. 500 Internal Server Error :: 

const http15 = require("http");
const server15 = http15.createServer((request, response) => {
    response.statusCode = 500; 
    response.end("Invalid application data!")
});
server15.listen(3016, () => {
    console.log("Server is ruinning on port 3016");
});

                //  Important Status Codes

/*

|    Code | Meaning               |
| ------: | --------------------- |
| **200** | OK / Success          |
| **201** | Created               |
| **400** | Bad Request           |
| **401** | Unauthorized          |
| **403** | Forbidden             |
| **404** | Not Found             |
| **500** | Internal Server Error |

*/

                //  Ab Practical Example 
//  Ab ek simple server banate hain jo URL ke according status code return kare:

const http16 = require("http");

const server16 = http16.createServer((request, response) => {

    if (request.url === "/students") {

        response.statusCode = 200;
        response.end("Students data found");

    } else if (request.url === "/applications") {

        response.statusCode = 201;
        response.end("Application created");

    } else {

        response.statusCode = 404;
        response.end("Route not found");

    }

});

server16.listen(3018, () => {
    console.log("Server running on port 3018");
});

                //  🧠 FYP connection
//  Later humarii admission API mein ye kuch aisa hoga:

/*

POST /applications
       ↓
Application successfully created
       ↓
201 Created

GET /applications/123
       ↓
Application found
       ↓
200 OK

GET /applications/999
       ↓
Application doesn't exist
       ↓
404 Not Found

POST /applications
       ↓
Required data missing
       ↓
400 Bad Request

Student → Admin API
       ↓
No permission
       ↓
403 Forbidden

*/

                // 🔥 Day 04 — Lesson 29: HTTP Headers
                
//  Headers = extra information jo request ya response ke saath send hoti hai.  

        //  1. Response Header

response.setHeader("Content-Type", "text/plain");

// WHERE :- Content-Type (Header Name) and  text/plain (Header Value)

const http19 = require("http");

const server17 = http19.createServer((request, response) => {

    response.setHeader("Content-Type", "text/plain");  // Setting the Content-Type header 
    //  Server browser ko bta rha hai ==> Jo data main bhej raha hoon, woh plain text hai.
    response.end("Hello from Asif's Backend!");
});

server17.listen(3018, () => {
    console.log("Server running on port 3018");
});

        //  2. JSON Content-Type
//  Very Important => Agar hum JSON data bhejna chahte hain, toh humein Content-Type ko "application/json" set karna hoga.

const http18 = require("http");
const server18 = http18.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");
    const student = { // student is a JavaScript object
        name: "Asif",
        age: 22,
        course: "FYP"
    };
    response.end(JSON.stringify(student)); // Response is sent as a JSON string
});
server18.listen(3020, () => {
    console.log("Server running on port 3020");
});

//  Output: {"name":"Asif","age":22,"course":"FYP"}

            //   3. Status Code + Header Together 
//  Real API response mein dono use hote hain

const http19 = require("http");
const server19 = http19.createServer((request , response) => {
    response.statusCode = 200;
    response.setHeader(
        "Content-type" , "application/json"
    )
    response.end(
        JSON.stringify({
            message : "Student Data Found"
        })
    )
});
server19.listen(3021, () => {
    console.log("Server is Running on port 3021");
})

        //  Meaning 

/*

Status Code
200 → Success

Header
Content-Type → JSON

Body
{"message":"Student Data found"}

*/

            //  4. Common Content Types
//  1. Normal text :: text/plain , 2. HTML content :: text/html , 3. JSON/API data ::  application/json

            //  5. Multiple Headers
//  We can use multiple Header but for our FYP the most important is "Content-type"
//  Other One Like => response.setHeader("X-Powered-By", "Node.js");

            //  🎯 Your Task
//  See Task Requirements in task.txt
//   Try it by your own and then check the solution given below.

const http20 = require("http");
const server20 = http20.createServer((request , response) => {
    response.setHeader("Content-type" , "application/json")
    response.statusCode = 200;
    const student = {
        name : "Asif",
        program : "BSSE",
        semester : 7
    }
    response.end(JSON.stringify(student));
});
server20.listen(3022 , () => {
    console.log("Server is Running on port 3022");
})

                // Lesson 30: Simple REST-style Server 

//  🔥 Let's move fro the last lesson of Day04 

    //  1. REST-style server kya hota hai? ==> Simple words mein, server different URLs aur HTTP methods ke through different operations perform karta hai.

//  Example, In Our FYP admission portal:

/*

Method	URL	            Purpose
GET	    /students	    Students ka data lena
GET	    /applications	Applications ka data lena
POST	/applications	New application create karna
GET	    /	            API welcome message

NOTE => Abhi hum REST-style server ka basic version banayenge. Ye actual database mein data save nahi karega; filhaal sample data return karega.

*/

        // 2. Complete code

const http21 = require("http");
const { title } = require("process");
const server21 = http21.createServer((request , response) => {
    response.setHeader("Content-type" , "application/json")
    if(request.method === "GET" && request.url === "/"){
        response.statusCode = 200;
        response.end(JSON.stringify({
            message : "WelCome Node JS Journey with Asif"
        }))
    }else if(request.method === "GET" && request.url === "/students"){
        response.statusCode = 200;
        const students = [
            {
                id : "1" , 
                studentName : "Asif",
                status : "Pending"
            },
            {
                id : "2",
                studentName : "Ali",
                status : "Approved"
            }
        ];
        response.end(JSON.stringify(students));
    }else if(request.method === "GET" && request.url === "/applications"){
        response.statusCode = 200;
        const applications = [
            {
                id : 101,
                studentName : "Asif",
                program : "BSSE"
            },
            {
                id : 102,
                studentName : "Ahmad",
                program : "BSCS"
            }
        ];
        response.end(JSON.stringify(applications))
    }else if(request.method === "GET" && request.url === "/courses"){
        response.statusCode = 200;
        const courses = [
            {
                id : "1",
                title : "JavaScript"
            },
            {
                id : "2",
                title : "Python"
            }
        ];
        response.end(JSON.stringify(courses))
    }else{
        response.statusCode = 404;
        response.end(JSON.stringify({
            message : "Route Not Found"
        }))
    }
});
server21.listen(3023, () => {
    console.log("Server is Runing on port 3023");
})

// Do this Code by your own and then check the solution given above. If you done than your day04.js will be officially completed.