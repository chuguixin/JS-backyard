Questions
===========

###Q1:

```javascript
{} + [] === {} + [];
[] + {} === {} + [];
({} + [] === [] + {});
```

###Q2:
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

###Q3:
```javascript
Function instanceof Function
Function instanceof Object
Object instanceof Function
Object instanceof Object //What is the result?
```