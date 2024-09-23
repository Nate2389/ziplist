function zipList(strList: string[], numList: number[]): unknown[] {
  const altList: unknown[] = [];
  for (let i = 0; i < strList.length; i++) {
    altList.push(strList[i], numList[i]);
  }
  return altList;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
// ['a', 1, 'b', 2, 'c', 3]

function zipListTheFunctionalWay(strList: string[], numList: number[]): unknown[] {
  const retList: unknown[] = [];
  const altList = strList.reduce((val, str, index) => val.concat([str, numList[index]]), retList);
  return altList;
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
// ['a', 1, 'b', 2, 'c', 3]
