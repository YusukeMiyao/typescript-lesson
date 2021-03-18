// import axios from 'axios';
// axios.get(' https//foo')
// import _ from 'lodash';
// console.log(_.shuffle([1, 2, 3, 4]))
var myApp;
(function (myApp) {
    var hello = 'hell in namespace';
    myApp.name = 'Quill';
})(myApp || (myApp = {}));
var hello = myApp.name;
