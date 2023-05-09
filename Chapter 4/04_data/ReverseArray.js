function reverseArray(array){
    let reversed = []
    for(i = array.length -1 ; i >= 0 ; i--){
        reversed.push(array[i]);
    }
    return reversed;
}

function reverseArrayInPlace(array){
    for (let i = 0; i < Math.floor(array.length / 2); i++){
        let old  = array [i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
let array = [1,2,3,4,5];
console.log(reverseArrayInPlace(array));

