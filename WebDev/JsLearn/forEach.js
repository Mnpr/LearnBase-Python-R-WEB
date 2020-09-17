var arr = [1,2,3,4,5,6];
function double (list){
    for(let i=0; i < list.length; i++){
    list[i] *= 2;
    }
    return list;
}
double(arr);

// with foreach
forEach(arr, function(number) {
    console.log(number * 2);
}); 