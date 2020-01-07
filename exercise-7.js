function urutkanAbjad(str) {
    var hasil = [];
    for(var i = 0 ; i < str.length ; i ++){
        hasil.push(str[i]);
    }

    for(var i = 0 ; i < hasil.length ; i ++){
      for(var j = 0 ; j < hasil.length ; j ++){
          if(hasil[j] > hasil[j+1]){
              var temp = hasil[j];
              hasil[j] = hasil[j+1];
              hasil[j+1] = temp;
          }
      }
  }
  var result = '';
  for(var i = 0 ; i < hasil.length ; i ++){
      result += hasil[i];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'