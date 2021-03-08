class Person {
    name: string;
    constructor(initName: string) {
        this.name = initName;
    }
}
const quill = new Person('Qill');
console.log(quill)