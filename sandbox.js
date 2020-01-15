function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
    // you can only write your code here!
    var hasil = {};
    for(var i = 0 ; i < listBarang.length ; i ++){
        var temp = {};
        var nama = [];
        var profit = 0;
        for(var j = 0 ; j < shoppers.length ; j ++){
            if(listBarang[i][0] === shoppers[j].product && listBarang[i][2] >= shoppers[j].amount){
                nama.push(shoppers[j].name);
                listBarang[i][2] -= shoppers[j].amount;
                profit += shoppers[j].amount * listBarang[i][1];
            }
        }
        temp.shoppers = nama;
        temp.leftOver = listBarang[i][2];
        temp.totalProfit = profit;
        hasil[listBarang[i][0]] = temp;
    }
    return hasil;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
// { 
//     'Sepatu Stacattu':  { 
//         shoppers: [ 'Windi', 'Vanessa' ],
//         leftOver: 5,
//         totalProfit: 7500000
//     },
//     'Baju Zoro' : { 
//         shoppers: [],
//         leftOver: 2,
//         totalProfit: 0 
//     },
//     'Sweater Uniklooh' :{
//         shoppers: [],
//         leftOver: 1,
//         totalProfit: 0 
//     }
// }