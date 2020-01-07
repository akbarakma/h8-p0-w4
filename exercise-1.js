function angkaPrima(angka) {
  if(angka === 2){
    return true;
  }
  else if(angka < 2){
    return false;
  }
  else if(angka % 2 === 0 ){
    return false;
  }else{
    for(var i = 3 ; i < Math.sqrt(angka) ; i ++){
      if(angka % i === 0){
        return false;
      }
    }
    return true;
  }
  
    
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false