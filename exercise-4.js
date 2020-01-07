function cariModus(arr) {
    var tampung = [];
    var modus = [];
    var tambah = 0;
    for(var i = 0 ; i < arr.length ; i ++){
      var check = true;
      for(var j = 0 ; j < tampung.length ; j ++){
        if(arr[i] === tampung[j]){
          check = false;
        }
      }
      if(check){
        tampung.push(arr[i]);
        for(var k = 0 ; k < arr.length ; k ++){
          if(arr[k] === tampung[tampung.length-1]){
            tambah ++;
          }
        }
        modus.push(tambah);
        tambah = 0;
      }
  
    }
    if(tampung.length === 1 || arr.length === tampung.length){
      return -1;
    }
    var temp = 0;
    var result;
    for(var i = modus.length - 1 ; i >= 0 ; i--){
      if(modus[i] >= temp){
        temp = modus[i];
        result = (tampung[i]);
      }
    }
    
    return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1