function factorialI(n){
let result = 1;
for (let i = 1; i <= n; i++){
    result *= i;
}
return result;
}

function factorialR(n){
    if (n === 0) return 1;
    return (n * factorialR (n-1));
    }

function fiboI(n){
    if (n === 0) return 0;
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++){
        let tmp = b;
        b = b + a;
        a = tmp;
    }
    return b;
}

function fiboR(n){
    if (n === 0) return 0;
    if (n === 1) return 1;
    return (fiboR(n-2)+fiboR(n-1));
}

function fiboTailR(n, a = 0, b = 1){
    if (n === 0) return a;
    if (n === 1) return b;
    return (fiboTailR(n-1, b, a+b));
}

console.log(factorialI(3));
console.log(factorialR(3));
console.log(fiboI(3));
console.log(fiboR(3));
console.log(fiboTailR(3));