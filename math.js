// math.js
const add = (a, b) => {
    return a + b;
};

// module.exports = add; // "I want to make add available to another file."

        // Lesson 18 — Exporting Multiple Functions

const sum = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

module.exports = {
    add,
    sum,
    subtract,
    multiply
};