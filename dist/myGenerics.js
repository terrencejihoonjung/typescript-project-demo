"use strict";
const score = [];
const names = [];
// We can only do this for boolean or number types
function identityOne(val) {
    return val;
}
// Problem is that we are using the any keyword, the information about the type is gone
// We could provide a number but return a string
function identityTwo(val) {
    return val;
}
// Use any type and provide/return the same type
function identityThree(val) {
    return val;
}
identityThree("3"); // Returns "3"
identityThree(3); // Returns 3
// Shortcut definition
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({});
