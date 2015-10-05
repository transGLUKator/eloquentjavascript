'use strict';

//Chapter 4: Data Structures: Objects and Arrays

//The sum of a range

function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    return arr.reduce(function (prev, cur) {
        return prev + cur;
    });
}