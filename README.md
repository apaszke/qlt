qlt
===

Quick and lightweight logging tool for node.js.
All datatypes are provided with two new properties:

* ```log``` (prints value to stdout)
* ```logn``` (prints value and newline to stdout)

**Changing ```.log``` property of object prototype collides with console.log, so objects use ```.print``` instead of ```.log```**

Install
===

```
npm install qlt
```

Usage
===

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
e.print;
f.logn;
```

Outputs:

```
5a
[1,2]true
{ a: 5, b: 6 }
{ a: 5, b: 6 }Sun Mar 30 2014 20:10:26 GMT+0200 (CEST)

```
