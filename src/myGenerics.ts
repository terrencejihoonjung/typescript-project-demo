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
