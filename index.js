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
function reverseArray(arr) {
    var tempArr = [];

    arr.map(function (item) {
        tempArr.unshift(item);
    });

    return tempArr;
}

function reverseArrayInPlace(arr) {
    var initialLength = arr.length;

    arr.map(function (item, index, ar) {
        return arr.push(ar[initialLength - index - 1]);
    });

    arr.splice(0, initialLength);
}

//A List
function arrayToList(arr) {
    var obj = {};
    obj.value = arr.shift();
    obj.rest = arr.length > 0 ? arrayToList(arr) : null;
    return obj;
}

function listToArray(obj) {
    var arr = [];
    while (obj.rest) {
        arr.push(obj.value);
        obj = obj.rest;
    }
    arr.push(obj.value);
    return arr;
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

function nth(list, number) {
    return number === 0 ? list.value : nth(list.rest, number - 1);
}

//Deep Comparison
function deepEqual(object1, object2) {

    for (var propName in object1) {
        if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            return false;
        }
        else if (typeof object1[propName] != typeof object2[propName]) {
            return false;
        }
    }
    for (var propName in object2) {
        if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            return false;
        }
        else if (typeof object1[propName] != typeof object2[propName]) {
            return false;
        }

        if (!object1.hasOwnProperty(propName))
            continue;

        if (object1[propName] instanceof Array && object2[propName] instanceof Array) {
            if (!object1[propName].equals(object2[propName]))
                return false;
        }
        else if (object1[propName] instanceof Object && object2[propName] instanceof Object) {
            if (!deepEqual(object1[propName], (object2[propName])))
                return false;
        }
        else if (object1[propName] != object2[propName]) {
            return false;
        }
    }
    return true;
}

//HIGHER ORDER FUNCTIONS
//Flattening
function flatten(arr){
    return arr.reduce(function(prev, cur){
        return prev.concat(cur);
    });
}