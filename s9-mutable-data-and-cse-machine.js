/*
Q2. Write the function d_filter that takes as arguments a one-argument
predicate function pred and a list xs, and returns a list that contains
only those elements for which pred returns true.

Your function must not create any new pair, and the result list must
only be made of existing pairs in xs. Your function must not modify the
head of any of the existing pairs.
*/

function d_filter(pred, xs) {
    let current = xs;
    // Set xs as the first value that returns true
    while (!is_null(xs) && !pred(head(xs))) {
        xs = tail(current);
        current = xs;
    }
    if (!is_null(xs)) {
        while (!is_null(tail(current))) {
            if (pred(head(tail(current)))) {
                // Evaluate the next element
                current = tail(current);
            } else {
                // Link head and the tail of tail
                set_tail(current, tail(tail(current)));
            }
        }
    }
    return xs;
}

const L = list(1, 3, 4, 5, 0, 0);
d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
//L; // What is L now?