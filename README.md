# TypeScript Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common TypeScript error that occurs when passing an array of strings to a function expecting a single string. The `greeter` function expects a single string as input, but an array is passed to it resulting in a type error.

The solution demonstrates how to handle this situation by either iterating over the array and calling the function multiple times or by joining the array elements into a single string before passing it to the function.