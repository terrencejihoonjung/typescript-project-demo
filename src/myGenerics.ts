const score: Array<number> = [];
const names: Array<string> = [];

// We can only do this for boolean or number types
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// Problem is that we are using the any keyword, the information about the type is gone
// We could provide a number but return a string
function identityTwo(val: any): any {
  return val;
}

// Use any type and provide/return the same type
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("3"); // Returns "3"
identityThree(3); // Returns 3

// Shortcut definition
function identityFour<T>(val: T): T {
  return val;
}

// Using your own types of data
interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({});

function getSearchProducts<T>(products: T[]): T {
  // Do some database operation
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // Do some database operation
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {...});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

// Generic Class
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
