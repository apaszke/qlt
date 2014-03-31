qlt
===

Quick and lightweight logging tool for node.js. Cleaner and faster way to display output from your app! Free yourelf from writing console.log all the time!

```javascript
var how_is_it = 'awesome';
('Wow, this is ' + how_is_it).logn;
```

Wow, this is awesome!

Great! How can i use it?
---

All datatypes (not only strings!) are provided with two new properties:

* ```log``` (prints value to stdout)
* ```logn``` (prints value and newline to stdout)

**Changing ```.log``` property of object prototype collides with console.log, so objects use ```.print``` instead of ```.log```. ```.logn``` is the same for all**

Install
---

```
npm install qlt
```

Example
---

There's no need to assign this module to a variable. Just require it and you're good to go!

```javascript
require('qlt');
var a = 5;
var b = 'a';
var c = [1,2];
var d = true;
var e = {
    a:5,
    b:6
};
var f = new Date();


a.log;
b.logn;
c.log;
d.logn;
e.logn;
e.print; //e is an object!
f.logn;
('How convinient! This is a: ' + a + ', and this is c: ' + c).log;
```

Outputs:

```
5a
[1,2]true
{ a: 5, b: 6 }
{ a: 5, b: 6 }Mon Mar 31 2014 21:11:31 GMT+0200 (CEST)
How convinient! This is a: 5, and this is c: 1,2
```
