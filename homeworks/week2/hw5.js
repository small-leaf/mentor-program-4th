function join(arr, str){
    var newarr = [arr[0]];
    for(var i = 1; i < arr.length;i++){
        newarr += str + arr[i]
    }
    return newarr
}
console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))



function repeat(str, num){
    var newstr = '';
    for(var i = 0; i < num; i++){
        newstr += str
    }
    return newstr
}
console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))
