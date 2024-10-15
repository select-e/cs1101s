let counted = list();

function count_pairs(x) {
    if (!is_pair(x) || !is_null(member(x, counted))) {
        return 0;
    } else {
        counted = append(counted, list(x));
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
    }
}

const p = pair(null, null);
const q = pair(null, p);
const r = pair(null, q);
set_tail(p, r);
count_pairs(p);