import {stack, stack_frac, beside, circle, square, heart, show, blank, ribbon} from 'rune';

function moony_1(bottom_right, y_frac) {
    return stack_frac(y_frac, beside(circle, blank), beside(square, bottom_right));
}

function moony_2(n, count, rune) {
    return n === 1
           ? rune
           : moony_2(n - 1, count , moony_1(rune, 1 / (count - n) ));
}

function moony(n) {
    return moony_2(n, n, circle);
}

show(moony(4));