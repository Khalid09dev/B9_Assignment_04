function deleteInvalids(input) {
    let array = input;
    const newArr = [];
    for(const arrMent of array) {
        if(typeof(arrMent) === 'number') {
            newArr.push(arrMent);
        }
    }
    return newArr;
}
const inputData = [NaN, 1, 12, 0, -1, null, undefined, true, 'string'];
const invalids = deleteInvalids(inputData);
console.log(invalids);
