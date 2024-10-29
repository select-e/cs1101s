function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
        () => add_streams(stream_tail(s1),
    stream_tail(s2)));
}

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const add_series = add_streams;
const scale_series = scale_stream;

function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

function coeffs_to_series(list_of_coeffs) {
    const zeros = pair(0, () => zeros);
    function iter(list) {
        return is_null(list)
            ? zeros
            : pair(head(list),
            () => iter(tail(list)));
    }
    return iter(list_of_coeffs);
}

eval_stream(coeffs_to_series(list(1,3,4)), 5);

// Write definitions for each of the following:

// • alt_ones: the stream 1, −1, 1, −1, . . . in as many ways as
// you can think of.

// • zeros: the infinite stream of 0’s. Do this using alt_ones
// in as many ways as you can think of.

function alt_ones() {
    return pair(1, () => pair(-1, alt_ones));
}

function alt_ones_B() {
    function iter(x) {
        return pair(x, () => iter(-x));
    }
    return iter(1);
}

function alt_ones_C() {
    let x = -1;
    function iter() {
        x = -x;
        return pair(x, iter);
    }
    return iter();
}

const alt_ones_stream = alt_ones();
// eval_stream(alt_ones_stream, 10);

function zeros() {
    return scale_stream(0, alt_ones());
}

function zeros_B() {
    return coeffs_to_series(list());
}

function zeros_C() {
    return subtract_series(alt_ones(), alt_ones());
}

const zero_stream = zeros_B();
eval_stream(zero_stream, 10);

// Now, show how to define the series:
    // S1 = 1 + x + x^2 + x^3 + ⋯
    // S2 = 1 + 2^x + 3x^2 + 4x^3 + ⋯
    
function S1() {
    return pair(1, S1);
}

// function S2() {
//     function iter(x) {
//         return pair(x, () => iter(x + 1));
//     }
//     return iter(1);
// }

function S2() {
    return pair(1, () => pair());
}

eval_stream(S1(), 10);