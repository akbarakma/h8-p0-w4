function cariMedian(arr) {
    for(var i = 0 ; i < arr.length; i ++){
        for(var j = 0 ; j < arr.length ; j ++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    var hasil;
    if(arr.length % 2 === 1){
        hasil = arr[Math.floor(arr.length/2)]
    }
    else{
        var temp = arr.length / 2;
        hasil = (arr[temp-1]+arr[temp])/2
    }
    return hasil;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5