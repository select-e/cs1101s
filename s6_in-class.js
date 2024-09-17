function remove_duplicates(lst) {
    function op(x, y) {
        return is_null(member(x, y))
               ? pair(x, y)
               : y;
    }
    return accumulate(op, null, lst);
}

// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));

function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    }
    else {
        const subset_A = subsets(tail(xs)); // No head ?
        const subset_B = map(y => pair(head(xs), y), subsets(tail(xs))); // With head
        return append(subset_A, subset_B);
    }
}

// display_list(subsets(list(1, 2, 3)));

function permutations(s) {
    function swap(xs) {
        return is_null(xs)
               ? null
               : pair(head(xs), replace_head(tail(xs), head(xs)));
    }
    function replace_head(xs, x) {
        return is_null(xs)
               ? null
               : pair(x, tail(xs));
    }
    if (is_null(s)) {
        return list(null);
    }
    else {
        const permutations_A = map(y => pair(head(s), y),
                                   permutations(tail(s)));
        const permutations_B = permutations(swap(s));
        return append(permutations_A, permutations_B);
    }
}

permutations(list(1, 2, 3));