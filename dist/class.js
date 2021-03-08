"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    gereeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const quill = new Person('Qill');
quill.gereeting();
const anotherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.gereeting
};
anotherQuill.anotherGreeting();
