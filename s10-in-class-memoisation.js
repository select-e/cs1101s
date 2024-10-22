// (a) Is function cc a good candidate for memoization?
//     Support your answer with an example.

// Yes. When cc(20, 3) is called, cc(10, 1) is called twice.
// In this case, memoisation will reduce the number of recursive calls

const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (n >= 0 && read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = n === 0
                       ? 1
                       : n < 0 || k === 0
                       ? 0
                       : mcc(n, k - 1)
                         +
                         mcc(n - first_denomination(k),
                            k);
        if (n >= 0) {
            write(n, k, result);
        }
        return result;
    }
}

mcc(365, 5);  // Expected result: 1730

// (c) What are the orders of growth in time and space
//     of the memoized version?

// Time: O(nk)
//       