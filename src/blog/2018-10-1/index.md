---
path: '/coercion-in-JavaScript'
title: 'Coercion in JavaScript'
date: '2018-10-19'
tags: ['React', 'JavaScript']
excerpt: 'Scroll down a little further and read through the list of plugins, if you like. Or just ignore them for now. Scroll down a little further and read through the list of plugins, if you like. Or just ignore them for now.'
---

Scroll down a little further and read through the list of plugins, if you like. Or just ignore them for now. Scroll down a little further and read through the list of plugins, if you like. Or just ignore them for now.

When operator encounters objects of different type, it will attempt to change (coerce) those to `string` format.

### Type Coercion in constructors

Coercions also occurs when we provide an initialization value to a type constructor.

![1563022399029](https://eckbpg.by.files.1drv.com/y4mPyZzIih4NIHnZMswNBZfb1p7kZVufoB6Jy0LOivbOreN5wsBWVVeSGOhhQY64DvkxJAnqfBgy1WWaQJBa3_nsVzQDXsV383-DLnL3YFY1zIMyAIsk1utbaNwF85jgUeAS_cblNFtod4jpzns4mGc_HuAIR8fcGa7pcET0NrxAGagzs6o-5ES3t68-mMtQI0LuRQt3WBr9DSQB0-tKXtVdw?width=430&height=83&cropmode=none)

### Type coercion

Coercion is the process of converting a value from one type to another.

num => string, obj => string, string => number etc.

### `null` vs `undefined`

When we use null, we are explicitly assigning a "nothing" or "empty" value to the variable.

If we don't assign a variable to null or any other value its value will be , it's value will be undefined by default.

```js
let color;
console.log(color); //undefined
color = null;
console.log(color); //null
```

The `null` keyword can be used, when we want to assign temporary value to a variable;

For example, when getting response from the API.

```javascript
let posts = null;

fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => {
  posts = response;
  console.log(posts);
});
```

Note: Fetching data is a asynchronous, it may take time to update the `posts` variable value.
