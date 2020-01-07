function checkAB(num) {
    str = num;
    var jarak = 3;
    for(var i = 0 ; i < str.length - jarak ; i ++){
        if(str[i] === 'a' && str[i+jarak+1] === 'b'){
            return true;
        }
        else if(str[i] === 'b' && str[i+jarak+1] === 'a'){
            return true;
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false