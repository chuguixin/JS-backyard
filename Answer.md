Answers
===========

###A1:

```javascript
{} + [] === {} + [];
[] + {} === {} + [];
({} + [] === [] + {});
```

Result: false true true   
Explanation:在JavaScript中，`{}`可以是[`block`](http://es5.github.io/#x12.1)或者[`Object Initialiser`](http://es5.github.io/#x11.1.5)，`+`可以是[`Unary + Operator`](http://es5.github.io/#x11.4.6)或者[`The Addition operator`](http://es5.github.io/#x11.6.1)，`())`和`===`都是`Operator`，只能包含`Expressions`。