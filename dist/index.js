"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // cannot make setters a void return type
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
// Inherits all methods and variables from User EXCEPT the privates UNLESS we change the access modifier to protected
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const terrence = new User("terrence@gmail.com", "terrence");
// terrence.name = "jung"; this doesn't work
