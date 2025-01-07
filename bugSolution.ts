function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate over the array
user.forEach(name => console.log(greeter(name)));

// Solution 2: Join the array elements into a single string
console.log(greeter(user.join(" ")));