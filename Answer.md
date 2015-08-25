Answers
===========

###A1:

```javascript
{} + [] === {} + [];
[] + {} === {} + [];
({} + [] === [] + {});
```

Result: `false` `true` `true`   
Explanation:在JavaScript中，`{}`可以是[`block`](http://es5.github.io/#x12.1)或者[`Object Initialiser`](http://es5.github.io/#x11.1.5)，`+`可以是[`Unary + Operator`](http://es5.github.io/#x11.4.6)或者[`The Addition operator`](http://es5.github.io/#x11.6.1)，`())`和`===`都是`Operator`，只能包含`Expressions`。

###A2:

```javascript
Object.prototype.person = {
    name: 'cgx',
    age: 24
};
function Person() {
    return this.person
}
new Person === Person(); //What is the result?
```

result: `true` 
Explanation: 1.`new Person`在[不传参数的情况下可以不加括号](http://es5.github.io/#x11.2.2)，而`this.person`通过原型链获取到`Object.prototype.person`，同时`new Person`的return值是Object则[不以this而以返回值为结果](http://es5.github.io/#x13.2.2)，所以`new Person`的结果为`Object.prototype.person`引用的`Object`。2.[非严格模式下](http://es5.github.io/#C)执行函数[GetBase](http://es5.github.io/#x11.2.3)的结果是`undefined`，所以`this.person`指向`window.person`，而`window instanceof Object`为`true`，所以返回值同样是`Object.prototype.person`引用的`Object`。
