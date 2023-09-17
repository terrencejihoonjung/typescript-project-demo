class User {
  protected _courseCount: number = 1;

  readonly city: string = "Jaipur";
  constructor(public email: string, public name: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // cannot make setters a void return type
  set courseCount(courseNumber: number) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber;
  }

  private deleteToken(): void {
    console.log("Token deleted");
  }
}

// Inherits all methods and variables from User EXCEPT the privates UNLESS we change the access modifier to protected
class SubUser extends User {
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 4;
  }
}

const terrence = new User("terrence@gmail.com", "terrence");
// terrence.name = "jung"; this doesn't work
