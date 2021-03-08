class Person {
    name: string;
    constructor(initName: string) {
        this.name = initName;
    }

    gereeting(this:{name: string}) {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const quill = new Person('Qill');
quill.gereeting()
const anotherQuill = {
    name:'anotherQuill',
    anotherGreeting: quill.gereeting
}
anotherQuill.anotherGreeting()