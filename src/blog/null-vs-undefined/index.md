---
title: 'Null vs Undefined in JavaScript in 1 min'
tags: ['JavaScript', 'beginners']
date: '2019-07-23'
path: '/blog/null-vs-undefined'
---

I always had a small confusion between `null` and `undefined` in JavaScript. My confusion got cleared, after reading **JS Grammar** by [@js_tut](https://twitter.com/js_tut). 

Checkout [JS Grammer](https://twitter.com/js_tut), It's an awesome resource to learn JavaScript.

Now, Let's dive into the topic.

When we declare a variable without assigning any value to it, its value will be `undefined` by default.

```js
let color;
console.log(color); //undefined
```

But when we assign `null` to a variable, we are explicitly assigning a "nothing" or "empty" value to it.

For example, we have a _user_, whose details are unknown

```js
let userDetails = null;
```

Later we fill the `userDetails` variable with the response from our function `getUserDetails`. The function may be a call to an API or accessing `localStorage` for details etc. Here it’s a simple function which returns an Object.

```js
function getUserDetails() {
  return {
    userName: 'gk',
    id: '1',
  };
}

userDetails = getUserDetails();
console.log(userDetails); // {userName:"gk", id:"1"}
```

#### Reference

[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) - MDN
| [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) - MDN

[Javascript Grammer](https://twitter.com/js_tut)
