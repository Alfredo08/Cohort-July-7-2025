# M01 W02 | Callbacks
[Github Repository](https://github.com/Alfredo08/Cohort-July-7-2025/tree/main/M01W02%20-%20Callbacks) | [Vimeo Video Recording](https://vimeo.com/1102058537/2560fad698?share=copy)

## Topics to cover

* [X] Functions as values
* [X] Intro to anonymous functions & arrow functions
* [X] Function calling vs passing (reference to a function)
* [X] Callback functions and Higher Order functions
    * [X] Why they exist
    * [X] Implementing our own forEach and forEachInReverse
* [X] Nested scope and "scope chain"

### Functions as Values

Just like everything else in JavaScript, functions are values. As a result, they can be stored in variables just like any other value

```js
const myFunction = function() {
  // do something
};
```

They can also be passed around just like any other variable

```js
const myFunction = function() {
  // do something
}

const myVar = myFunction;

myVar(); // equivalent to calling myFunction()
```

And they can be passed to other functions as arguments

```js
const myFunction = function() {
  // do something
}

const myHigherOrderFunction = function(callback) {
  callback(); // equivalent to myFunction()
}

myHigherOrderFunction(myFunction);
```

### Callbacks and Higher Order Functions

A callback is a function that gets passed to another function to be executed by that function
* Callback functions are used all over the place in JavaScript
* They encapsulate reusable code that can be passed around like any other JS variable
* We call the function that accepts another function as an argument a **higher order function**

### Anonymous Functions

We can pass callback functions _inline_ to a higher order function rather than storing the callback in a variable first

```js
const myHigherOrderFunction = function(callback) {
  callback();
}

// the function we pass as an argument has no name
myHigherOrderFunction(function() {});
```

Anonymous functions are simply functions that do not have a name. Don't forget that [naming things is hard.](https://martinfowler.com/bliki/TwoHardThings.html)

### Arrow Functions

Arrow functions give us a syntactic alternative to using the `function` keyword

```js
// function keyword
const myFunc = function() {
  // do something
};

// arrow function
const myArrowFunc = () => {
  // do something
};
```

* There are some _gotchas_ around using the `this` keyword inside an arrow function, but if you aren't using `this`, arrow functions can be used interchangeably with "regular" functions
* Arrow functions are often used as callbacks because they are shorter/cleaner to type

```js
arr.forEach(function(element) {});

// vs
arr.forEach((element) => {});
```

### Useful Links

* [Wikipedia: Callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Understanding scope and context in JS](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)