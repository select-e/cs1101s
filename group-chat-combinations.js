const names = list("Celeste", "Kyra", "Nat", "Ruby", "Sam", "T-Yan");

function combinations(L, r) {
    function helper(L, r) {
        return r === 0 || L === null
               ? list(null)
               : append(map(x => pair(head(L), x), helper(tail(L), r - 1)),
                        helper(tail(L), r));
    }
    return filter(x => length(x) === r, helper(L, r));
}

let i = 1;

function all_combis(L) {
    function helper(r) {
        return r <= 2
               ? null
               : append(combinations(L, r), helper(r - 1));
    }
    return helper(length(L));
}

function dp(L) {
    if (!is_null(L)) {
        display(i);
        display_list(head(L));
        i = i + 1;
        dp(tail(L));
    }
}

dp(all_combis(names));