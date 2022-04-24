let age: number;

age = 12;

let userName: string | string[];

userName = "Nenad";

let isInstructor: boolean;

isInstructor = true;

type Person = {
  name: string;
  age: number;
};

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: Person;

person = {
  name: "Nenad",
  age: 42,
};

let people: Person[];

let course: string | number = "React - The Complete Guide";

course = 12341;

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
