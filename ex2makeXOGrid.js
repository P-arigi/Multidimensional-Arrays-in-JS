function makeXOGrid(rows,columns){
    var finalArr=[];
    var startWithX=false;
    for(var i=0;i<rows;i++){
        var newRow=[]
        for(var j=0;j<columns;j++){
            if(startWithX){
                newRow.push("X")
            }
            else{
                newRow.push("O")
            }
            startWithX=!startWithX
        }
        finalArr.push(newRow)
    }
    return finalArr;
}
console.log(makeXOGrid(3,2))