function digitPerkalianMinimum(angka) {
  var hasil = [];
  for(var i = 1 ; i <= angka ; i ++){
      for(var j = 1 ; j <= angka ; j ++){
        var temp = i*j;  
        if(temp === angka){
              hasil.push(i.toString() + j.toString());
          }
      }
  }
  
  for(var i = 0 ; i < hasil.length ; i ++){
      for(var j = 0 ; j < hasil.length ; j ++){
          if(hasil[j]/1 > hasil[j+1]/1){
              var temp = hasil[j];
              hasil[j] = hasil[j+1];
              hasil[j+1] = temp;
          }
      }
  }
  
  return hasil[0].length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2