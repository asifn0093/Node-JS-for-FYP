                //  Day 03 — Node.js Core Modules.

    //  Lesson 22: fs — File System
// fs == File System.

/*
    Node.js can use fs to:

1. Read files
2. Write files
3. Delete files
4. Rename files
5. Create directories
6. Delete directories

*/

    //  First Example — Create/Write a File

const fs = require("fs");
fs.writeFileSync(
    "student.txt",
    "Name: Asif\nProgram: BSSE"
)

console.log("File created successfully!"); 

// Run in terminal :: node day03.js => you will see the file created in the same folder with the name you right in code in our code like "student.txt" This file contain all the details we mention in the code. 

// Understand this line  ::  fs.writeFileSync("student.txt", "Name: Asif\nProgram: BSSE");

/*

writeFileSync
     ↓
create/write file
     ↓
student.txt
     ↓
put this text inside it

*/

            //  🎯 Your task
//  Create a file called :: application.txt and write the following text inside it => Student: Ali ,Program: BSCS ,Semester: 7, Status: Pending

fs.writeFileSync(
    "application.txt",
    "Student: Ali \nProgram: BSCS \nSemester: 7 \nStatus: Pending"
);
console.log("Application File Created Successfully");

            //  Lesson 23 — path Module

//  The path module helps Node.js work safely with file and folder paths.

const path = require("path"); // Importing the path module

const filePath = path.join(__dirname, "application.txt");
console.log(filePath);

                //  Why do we need it?

// Instead of manually writing :: "F:\\WEB PRACTICE\\JavaScript\\Node JS for FYP\\application.txt"
//  we can simply use :: path.join(__dirname, "application.txt");

                //  Useful path methods


console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

//  They Give :: basename → file name, dirname  → folder path, extname  → file extension

                //  🎯 Your task

// const path = require("path"); // Importing the path module

console.log("The Task code start from here");

console.log("File:", path.basename(__filename));
console.log("Extension:", path.extname(__filename));
console.log("Folder:", path.dirname(__filename));

                //  Lesson 24 — os Module

// The os module provides operating system-related utility methods and properties.

const os = require("os"); // Importing the os module

console.log("Platform:", os.platform()); // It will give the platform of your system like win32, linux, darwin etc.
console.log("Architecture:", os.arch()); // It will give the architecture of your system like x64, arm, ia32 etc.
console.log("Total Memory:", os.totalmem()); // It will give the total memory of your system in bytes.
console.log("Free Memory:", os.freemem()); // It will give the free memory of your system in bytes.
console.log("CPU Cores:", os.cpus().length);  // It will give the number of CPU cores of your system.
console.log("Home Directory:", os.homedir()); // It will give the home directory of your system.
console.log("Uptime:", os.uptime()); // It will give the uptime of your system in seconds.
console.log("User Info:", os.userInfo()); // It will give the user info of your system like username, homedir, shell etc.
// console.log("Network Interfaces:", os.networkInterfaces()); // It will give the network interfaces of your system like eth0, wlan0 etc.
console.log("Hostname:", os.hostname()); // It will give the hostname of your system.
console.log("End of the code");

                //  Lesson 25 — http Module

// The http module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).


const http = require("http"); // Importing the http module

const server = http.createServer((request, response) => {
    response.write("Hello from my Node.js server!");
    response.end();
});
server.listen(3001, () => {
    console.log("Server is running on port 3001");
});


// OutPut :: Server is running on port 3001 
// Now open your browser and type :: localhost:3001 => you will see the output on your browser like "Hello from my Node.js server!"

//  Now let's understand the code above ::

/*
    const http = require("http"); // Importing the http module
    const server = http.createServer((request, response) => { // Creating an HTTP server
    response.write("Hello from my Node.js server!"); // Sending a response to the client
    response.end(); // Ending the response
});
server.listen(3001, () => { // Listening on port 3001
    console.log("Server is running on port 3001"); // Logging a message to the console
});   

*/

    //  Understand the flow

/*

Browser
   ↓
http://localhost:3001
   ↓
Node.js Server
   ↓
request
   ↓
response
   ↓
"Hello from my Node.js server!"

*/

                //  🎯 Day 03 Final Task 

console.log("Task Code Starts from here!");


// Create server.js yourself and make it return :: Welcome to Asif's FYP Backend

const server2 = http.createServer((request, response) => {
    response.write("Welcome to Asif's FYP Backend");
    response.end();
});
server2.listen(3002, () => {
    console.log("Server is running on port 3002");
}); 

// OutPut :: Server is running on port 3002
// Now open your browser and type :: localhost:3002 => you will see the output on your browser like "Welcome to Asif's FYP Backend"
