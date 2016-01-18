/**
 * Created by James on 1/18/2016.
 */
var Rx = require('rx');

Rx.Observable.just('Hello World!').subscribe(function(value) {
    "use strict";
    console.log(value);
});
