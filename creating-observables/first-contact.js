var Rx = require('rx');

var observer = Rx.Observer.create(
    function onNext(x) { console.log(`Next ${x}`); },
    function onError(err) { console.log(`Error ${err}`); },
    function onCompleted() { console.log(`Completed`); }
);