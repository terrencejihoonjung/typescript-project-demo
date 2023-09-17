"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur";
    }
}
const terrence = new User("terrence@gmail.com", "terrence");
// terrence.name = "jung"; this doesn't work
