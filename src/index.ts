class User {
  email: string;
  name: string;
  city: string = "";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const terrence = new User("terrence@gmail.com", "terrence");
