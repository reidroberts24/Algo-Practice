
// Push Front
function pushFront(arr, num) {
    console.log("Before push:", arr)
    let newArr = [num, ...arr]
    console.log("After push:", newArr)
    return newArr;
}
pushFront([5,7,2,3], 8)
pushFront([99], 7)

// Pop Front
function popFront(arr) {
    console.log("Before pop:", arr)
    let poppedVal = arr[0]
    arr = arr.slice(1);
    console.log("After pop:", arr)
    return poppedVal;
}
popFront([0,5,10,15])
popFront([4,5,7,9])

// Insert At
function insertAt(arr, index, num) {
    let firstSlice = arr.slice(0,index)
    let secondSlice = [num, ...arr.slice(index)]
    let result = [...firstSlice, ...secondSlice]
    console.log("Result array:", result)
    return result
}
insertAt([100,200,5], 2, 311) 
insertAt([9,33,7], 1, 42) 

// Remove at
function removeAt(arr, index) {
    if (index < 0 || index >= arr.length) {
        console.error('Index out of bounds');
        return undefined;
    }
    let removed = arr.splice(index, 1)[0];
    console.log(arr);
    return removed;
}

removeAt([1000,3,204,77], 1)
removeAt([8,20,55,44,98], 3)