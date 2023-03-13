let word = "BIODEGRADABLE";
function countChar(a,b){
    let counter = 0;
    for(let i = 0; i<a.length; i++){
        if(a[i]== b){
            counter++;
        }
    }
    return counter;
}
function countBs(a){
    return countChar(a,"B");
}
console.log(countBs(word));