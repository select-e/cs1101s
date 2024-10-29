function stream_pairs(s) {
    return is_null(s)
        ? null
        : stream_append(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            stream_pairs(stream_tail(s)));
}

// const ints = enum_stream(1, 5);
// eval_stream(stream_pairs(ints), 10);

const integers = () => {
    function iter(x) {
        return pair(x, () => iter(x+1));
    }
    return iter(1);
};

function stream_append_pickle(xs, ys) {
    return is_null(xs)
        ? ys()
        : pair(head(xs),
        () => stream_append_pickle(stream_tail(xs),
        
        ys));
}
// function stream_pairs2(s) {
//     return is_null(s)
//         ? null
//         : stream_append_pickle(
//             stream_map(
//             sn => pair(head(s), sn),
//             stream_tail(s)),
//             () => stream_pairs2(stream_tail(s)));
// }
// const s2 = stream_pairs2(integers());

// const s2 = stream_pairs(integers());
// eval_stream(s2, 10);

// (e) What are the first few elements of stream_pairs2(integers)?
// Can you suggest a modification of stream_pairs2 that would be
// more appropriate in dealing with infinite streams?

function stream_pairs2(s) {
    return is_null(s)
        ? null
        : stream_append_pickle(
            stream_map(
            sn => pair(head(s), sn),
            stream_reverse(s)),
            () => stream_pairs2(stream_tail(s)));
}

// const s2 = stream_pairs2(integers());
// eval_stream(s2, 10);

const ints = enum_stream(1, 5);
eval_stream(stream_pairs2(ints), 10);