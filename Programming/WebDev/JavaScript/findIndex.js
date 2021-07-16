var arr = [1,2,44,6,7,8];
findIndex (arr, function(num, index, array){
    // return num ===44;
    return num%2 === 0;
    // return num === 9;  result: -1
});

// returns the index of the first element for which callback
// returns a truthy value . otherwise return -1

function findIndex (arr, callback){
	for(let i =0;i<arr.length;i++){
    	if(callback(arr[i],i,arr)) {
            return i;
        }
    return -1;        
	}    
}