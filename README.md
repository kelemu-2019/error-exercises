# Errors

syntax errors will keep JS from parsing your code since you are passing in invalid commands to the engine


learning objectives:
* reading & identifying error messages
* finding and fixing syntax errors
* building a personal error+fix reference
* not logic errors, that's for 'debugging'
* using devtools console

---
---

(we can refine the examples in meetups by seeing what errors people often make)

you can complete these exercises directly in the browser on your fork of this repo.  paste the broken code into the devtools console, copy-paste the error message into the 'error message' space, then fix the error and paste your fixed code into 'the fix'.
We've provided some completed examples for you to get the idea

Practice also clicking on the 'VM##:#' link to the right of the error message.  Devtools will automatically open the source code and highlight where the error appears.  With these super simple examples this feature may feel like overkill, but you will appreciate it's help once you move on to the next set of exercises

('unexpected token' or 'end of input' is a tough one since it is often caught well after the mistake that caused it)


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
```
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
**too-far object access**   
broken code:
```js
let a = {b:3};
let b = a.b.3
```
error message:
```
```
the fix:
```js
```
your notes:

---
**access property directly**   
broken code:
```js
let x = {b:'e'};
let y = b.e;
```
error message:
```
```
the fix:
```js
```
your notes:

---
**impropper multi-line string**   
broken code:
```js
let a = 'this is 
two lines';
```
error message:
```
```
the fix:
```js
```
your notes:


---
**impropper end of statement**   
broken code:
```js
let a = 1:
```
error message:
```
```
the fix:
```js
```
your notes:


---
**malformed array**   
broken code:
```js
let myArray = [1, 2, 3;
```
error message:
```
```
the fix:
```js
```
your notes:


---
**missing arguments**   
broken code:
```js
function getNine {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine();
```
error message:
```
```
the fix:
```js
```
your notes:


---
**improper nested quotes**   
broken code:
```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
```
error message:
```
```
the fix:
```js
```
your notes:

---
**improper nested quotes**   
broken code:
```js
let nested_messages = 'remind yourself ''i can do this!'' at least once a day';
```
error message:
```
```
the fix:
```js
```
your notes:


---
**reassigning to constant**   
broken code:
```js
const a = 9;
a = 0;
```
error message:
```
```
the fix:
```js
```
your notes:

---
**unassigned const declaration**   
broken code:
```js
const a;
a = 0;
```
error message:
```
```
the fix:
```js
```
your notes:


---
**.length is not a function**   
broken code:
```js
let array = [];
array.length()
```
error message:
```
```
the fix:
```js
```
your notes:







