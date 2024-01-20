function removeBlanks(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// Test cases
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); 
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); 

function getDigits(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            result += str[i];
        }
    }
    return Number(result);
}

// Test cases
console.log(getDigits("abc8c0d1ngd0j0!8")); 
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); 


function acronym(str) {
    let words = str.split(' ');
    let acronym = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            acronym += words[i][0].toUpperCase();
        }
    }
    return acronym;
}

// Test cases
console.log(acronym(" there's no free lunch - gotta pay yer way. ")); 
console.log(acronym("Live from New York, it's Saturday Night!")); 

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(countNonSpaces("Honey pie, you are driving me crazy")); 
console.log(countNonSpaces("Hello world !")); 

function removeShorterStrings(arr, len) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= len) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Test cases
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); 
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
