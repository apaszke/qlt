qlt
===

Quick logging tool for node.js or javascript in general.
Every datatype gets two getters:

* ```log``` (print value to stdout)
* ```logn``` (print value and newline to stdout)

**Changing ```.log``` property of object prototype collides with console.log, so objects use ```.print``` instead of ```.log```**

**Install**

```npm install qlt```

Usage
===

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
e.print
f.logn;
```

Outputs:

```
5a
[1,2]true
{ a: 5, b: 6 }
{ a: 5, b: 6 }Sun Mar 30 2014 20:10:26 GMT+0200 (CEST)
```
