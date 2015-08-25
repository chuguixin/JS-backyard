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