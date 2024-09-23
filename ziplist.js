"use strict";
function zipList(strList, numList) {
    const altList = [];
    for (let i = 0; i < strList.length; i++) {
        altList.push(strList[i], numList[i]);
    }
    return altList;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
// ['a', 1, 'b', 2, 'c', 3]
function zipListTheFunctionalWay(strList, numList) {
    const retList = [];
    const altList = strList.reduce((val, str, index) => val.concat([str, numList[index]]), retList);
    return altList;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
// ['a', 1, 'b', 2, 'c', 3]
