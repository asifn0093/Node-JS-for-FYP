                //  Day 01 — Node.js Fundamentals 🚀


//  Lesson 13 — What is Node.js? Node.js is a JavaScript runtime that allows us to run JavaScript outside the browser, especially on the server.

/*

You already know JavaScript runs in the browser:

HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Browser

For your FYP, we also need JavaScript to run on the server/backend.

That's where Node.js comes in.

So:

Browser JavaScript
        ↓
Frontend
        ↓
User Interface

while:

Node.js
   ↓
Backend
   ↓
API
   ↓
Database
Your FYP example

Eventually your system will look roughly like:

Student
   ↓
React Frontend
   ↓
Node.js + Express
   ↓
MongoDB

For example, when a student submits an admission form:

Student clicks "Submit"
          ↓
React sends POST request
          ↓
Node.js/Express receives it
          ↓
MongoDB stores application
          ↓
Server sends response
          ↓
React shows "Application submitted"

*/

        //  Lesson 14 — Node.js vs Browser JavaScript 

/*

This distinction is important.

Browser JavaScript

Can work with:

document.querySelector()
window
alert()

because the browser provides these features.

Node.js

Node.js doesn't have the browser's document or window.

Instead, Node gives us server-side capabilities such as:

=> fs

for files,

=> http

for servers,

=> process

for information about the running Node program.

So remember:

Browser → Web Page / DOM
Node.js → Server / Backend

*/

        //  Lesson 15 — Run Your First Node.js Program

console.log("Hello from Node.js!");

            //  Your first task 🎯


console.log("My name is Asif");
console.log("I am learning Node.js");
console.log("I am building my FYP with MERN");

            //   Lesson 16 — process, __dirname, and __filename
//  These are important Node.js concepts because Node.js runs outside the browser.

        // 1. process : process gives us information and control related to the currently running Node.js program.

// process.version
console.log(process.version); // This shows your installed Node.js version.

//  process.arch 
console.log(process.arch); // This shows your system architecture (e.g., x64, arm).

//  process.platform    
console.log(process.platform); // This shows your operating system platform (e.g., win32, linux, darwin).

//  process.argv
console.log(process.argv); // This shows the command-line arguments passed to the Node.js program.

console.log(process.argv[2]);
console.log(process.argv[3]);

        // 2. __dirname : __dirname tells you the absolute path of the directory containing the current file.
console.log(__dirname);

        //  3. __filename : __filename gives the absolute path of the current file.
console.log(__filename);

//  **** Main Difference ****

/*

__dirname
↓
folder path

__filename
↓
folder path + current file

*/

                //  🎯 Your task
/*

Make your own lesson16.js and print:

Node version
Platform
Your name using process.argv
Your program using process.argv
Current directory using __dirname
Current file using __filename

*/
console.log("WelCome to the Task ");

//  CODE for Node version
console.log(process.version); // v24.21.0

//  CODE for Platform
console.log(process.platform); // win32

//  CODE for Your name using process.argv
console.log(process.argv); 
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'F:\\WEB PRACTICE\\JavaScript\\Node JS for FYP\\day01.js',
  'Asif',
  'BSSE'
]
*/

// CODE FOR Your Name &  program using process.argv
console.log(process.argv[2]); // Asif
console.log(process.argv[3]); // BSSE

//  CODE for Current directory using __dirname
console.log(__dirname); // F:\WEB PRACTICE\JavaScript\Node JS for FYP

//  CODE for Current file using __filename
console.log(__filename); // F:\WEB PRACTICE\JavaScript\Node JS for FYP\day01.js