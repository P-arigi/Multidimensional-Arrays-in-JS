function rotate(array,num){
    var amount=num%array.length;
    for(var i=0;i<amount;i++){
        array.unshift(array.pop());
    }
    return array;
}
console.log(rotate([1,2,3],5));