import {stack, stack_frac, beside_frac, beside, circle, square, show, blank, ribbon} from 'rune';

function moony_1(bottom_right, x_frac, y_frac) {
    return stack_frac(y_frac,
                      beside_frac(x_frac, circle, blank),
                      beside_frac(x_frac, square, bottom_right));
}

function moony_2(n, count, rune) {
    return count === n
           ? rune
           : moony_2(n,
                     count + 1,
                     moony_1(rune, 1 / (count + 1), 1 / (count + 1)));
}

function moony(n) {
    return moony_2(n, 1, circle);
}

show(moony(5));

/*
4. iterative. 
time: O(n), theta(n), omega(n)
space: O(1), theta(1), omega(1)
All primitive runes and primitive operations on runes 
consume the same amount of resources.
*/