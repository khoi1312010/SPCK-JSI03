const arr = [4, 3, 1, 5, 6, 2];
const arr2 = arr.sort((a, b) => {
    return b - a;
});
console.log(arr2[1]);