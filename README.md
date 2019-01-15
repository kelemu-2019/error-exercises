# Errors

runtime errors happen after creation phase/parsing
* they will appear under the log --- broken code ---
syntax errors will keep JS from parsing your code
* they will appear all alone since the logs never happened


learning objectives:
* reading & identifying error messages
* finding and fixing errors
* runtime vs syntax errors 
* building a personal error+fix reference
* not logic errors, that's for 'debugging'
* using replit

---
---

(we can refine the examples in meetups by seeing what errors people often make)

you can complete these exercises directly in the browser on your fork of this repo.  paste the broken code into the devtools console, copy-paste the error message into the 'error message' space, then fix the error and paste your fixed code into 'the fix'.
we've provided some examples


## The Challenges
* organize/index this by error type
    * and example name

---
**missing variable name** 
broken code:
```js
var = 5;
```
error message:
```js
```
the fix:
```js
```
your notes:

---

**malformed while loop** 
broken code:
```js
let value = 0;
while (value < 9) 
  value++;
};
```
error message:
```js
Uncaught SyntaxError: Unexpected token }
```
the fix:
```js
let value = 0;
while (value < 9) {
  value++;
};
```
your notes:

---
```

let a = {b:3};
a.b.3

let a = {b:'e'};
b.e

let a;
a.b;

let a = 'this is 
two lines';

let a = 1:

let myArray = [1, 2, 3;

function getNine {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine;

let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";

let nested_messages = 'remind yourself ''i can do this!'' at least once a day';

const a = 9;
a = 0;

const a;
a = 0;

let value = 0;
while (value < 9) 
  value++;
};

let array = [];
array.length()
```

