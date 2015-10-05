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

//Reversing an array
function reverseArray(arr){
    var tempArr = [];

    arr.map(function(item){
        tempArr.unshift(item);
    });

    return tempArr;
}

function reverseArrayInPlace(arr){
    var initialLength = arr.length;

    arr.map(function(item, index, ar){
        return arr.push(ar[initialLength - index - 1]);
    });

    arr.splice(0, initialLength);
}