function count_pairs(x) {
    let counted = list();
    function helper(x) {
        if (!is_pair(x) || !is_null(member(x, counted))) {
            return 0;
        } else {
            counted = append(counted, list(x));
            return 1 + helper(head(x)) + helper(tail(x));
        }
    }
    return helper(x);
}

const p = pair(null, null);
const q = pair(null, p);
const r = pair(null, q);
set_tail(p, r);
count_pairs(p);