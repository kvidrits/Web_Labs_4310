let sum = (a) => (b) =>{
    return a + b;
}
function filter(arr, func){
    let length = arr.length;
    let newArr = [];
    for(let i = 0; i < length; i++){
        if(func(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
} 