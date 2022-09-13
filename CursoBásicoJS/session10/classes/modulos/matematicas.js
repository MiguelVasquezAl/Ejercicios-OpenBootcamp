function suma(a,b) {
    return a+b
}

function multiplica(a,b) {
    return a*b
}

function eleva(a,b) {
    return a ** b
}

function  factorial(a) {
    let e = 1
    for (let i = 2; i <= a; i++) {
        e *=i
    }
    return e
}

module.exports ={
    suma,
    multiplica,
    eleva,
    factorial
}
