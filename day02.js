                // 🟢 Day 02 — Node.js Modules + npm
        //  Lesson 17: CommonJS Modules
        
//  You already learned JavaScript ES Modules: export & import

//  Node.js also has another module system called CommonJS. 
//  The two important keywords are: module.exports & require()

// Example

// create : math.js and add the following code:
/*

const add = (a, b) => {
    return a + b;
};

module.exports = add;

*/

// const {add} = require("./math.js")
// const result = add(10, 20);
// console.log(result);

        // Lesson 18 — Exporting Multiple Functions

//  Make sure you check both the math.js and day02.js files for the code. 

const {add, sum, subtract, multiply } = require("./math");

console.log(add(10, 20));
console.log(sum(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));

//  In destructuring, which you already learned in JavaScript. 👍


                //  Lesson 19 — npm

// npm = Node Package Manager

/*

It allows us to:

1. install packages
2. manage packages
3. remove packages
4. manage project dependencies

*/

        //  For example, later your FYP will use packages such as:

/*

Express
Mongoose
bcrypt
jsonwebtoken
dotenv
cors
Axios

//  Instead of manually downloading these libraries, npm manages them for us.

*/

// Run in terminal  :: node -v and than npm -v

/*
    // Problem 
Sometimes when you try to check your npm -v (version), you may get an error.
Error : npm.ps1 cannot be loaded because running scripts is disabled on this system
 // Solution
To solve this, you can run the following command in your terminal (PowerShell): 
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

PowerShell will ask:

Execution Policy Change
[Y] Yes  [A] Yes to All  [N] No ...

Type:
Y

and press Enter.

*/

//  Now again check your npm version by running the following command in your terminal:
// npm -v

        //  What did we actually change? 

// -Scope CurrentUser :: means the change applies only to your Windows user account, not the entire computer.
// -ExecutionPolicy RemoteSigned :: means that you can run scripts that you create on your local computer, but any scripts downloaded from the internet must be signed by a trusted publisher before they can be run.

        //  Don't use this

// You may find tutorials telling you to run :
// Set-ExecutionPolicy Unrestricted OR Set-ExecutionPolicy Bypass :: Don't do that just to fix npm. It's unnecessarily broad.

                //  Lesson 20 — package.json

//  A Node.js project normally has:

/*

project/
│
├── package.json
├── app.js
└── ...

*/

    // Create it with: 

// Run in Terminal :: npm init -y => it's create a package.json file with default values.

        // Why package.json?

//  It contains project information and dependency information.
// Example : 

/*

{
  "name": "node-js-for-fyp",
  "version": "1.0.0",
  "description": "",
  "main": "day01.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

*/

//  Don't worry about every property yet.

/*

package.json
      ↓
Node project configuration
      +
Dependencies information

*/

                //  Lesson 21 — Installing a Package

//  For example, install Express:
// Run in terminal :: npm install express => it will create a node_modules folder and package-lock.json file.

        // Important

        /* 

node_modules contains the installed packages.
package.json records your dependencies.
package-lock.json locks the exact dependency versions/tree.

*/


// For GitHub, we normally do not upload node_modules. :: Instead, another developer can run:

//  Run in terminal :: npm install =>  npm installs the dependencies listed in package.json.

                //  🎯 Day 02 Practice

//  Create a new folder :: node-day02

//  Inside that folder, create the following files:

/*

node-day02/
│
├── math.js
├── app.js
└── package.json

*/

// Where math.js contains the following code :: add() , subtract() & multiply() all exported as a single object.
// Where app.js contains the following code :: import the math.js file and use the functions.
// and install package.json using :: npm init -y & than run node app.js to see the output.

//  You can also check the node-day02 folder's files for the code.