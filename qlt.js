/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Adam Paszke
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var inspect = require('util').inspect;
var EOL = require('os').EOL;

Number.prototype.__defineGetter__('log', function() {
    process.stdout.write(this.toString());
});
Number.prototype.__defineGetter__('logn', function() {
    process.stdout.write(this.toString()+EOL);
});
String.prototype.__defineGetter__('log', function() {
    process.stdout.write(this.valueOf());
});
String.prototype.__defineGetter__('logn', function() {
    process.stdout.write(this.valueOf()+EOL);
});
Array.prototype.__defineGetter__('log', function() {
    process.stdout.write('['+this.toString()+']');
});
Array.prototype.__defineGetter__('logn', function() {
    process.stdout.write('['+this.toString()+']'+EOL);
});
Boolean.prototype.__defineGetter__('log', function() {
    process.stdout.write(this.toString());
});
Boolean.prototype.__defineGetter__('logn', function() {
    process.stdout.write(this.toString()+EOL);
});
Object.prototype.__defineGetter__('print', function() {
    process.stdout.write(inspect(this));
});
Object.prototype.__defineGetter__('logn', function() {
    process.stdout.write(inspect(this)+EOL);
});