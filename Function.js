//Q.1
Object.prototype.person = {
    name: 'cgx',
    age: 24
};
function Person() {
    return this.person
}
new Person === Person(); //What is the result?


//A.1
//result: true
//explanation: 1.new Person不传参数的情况下可以不加括号(http://es5.github.io/#x11.2.2)，而this.person通过原型链获取到Object.prototype.person，同时new Person的return值是Object则不以this而以返回值为结果(http://es5.github.io/#x13.2.2的第9步)，所以new Person的结果为Object.prototype.person引用的Object。2.非严格模式下(http://es5.github.io/#C)执行函数时GetBase(http://es5.github.io/#x11.2.3)的结果是undefined，所以this.person指向window.person，而window instanceof Object为true，所以返回值同样是Object.prototype.person引用的Object。
