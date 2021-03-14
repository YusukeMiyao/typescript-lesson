"use strict";
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'Quill', age: 38 }, 'name'));
class LinghtDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LinghtDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Grapre');
console.log(stringLightDatabase.get());
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Broccoli'];
let Genericstmp2;
let Genericstmp3;
let Genericstmp4;
