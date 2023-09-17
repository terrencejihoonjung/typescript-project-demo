class User {
  readonly city: string = "Jaipur";
  constructor(public email: string, public name: string) {}
}

const terrence = new User("terrence@gmail.com", "terrence");
// terrence.name = "jung"; this doesn't work
