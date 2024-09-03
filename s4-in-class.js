function compose(f, g) {
    return x => f(g(x));
}

function repeated(f, n) {
    return n === 0
    ? x => x
    : compose(f, repeated(f, n - 1));
}

function thrice(f) {
    return repeated(f, 3);
}

((thrice(thrice))(x => x * x))(2);