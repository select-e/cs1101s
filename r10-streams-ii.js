// Q2

function zip_list_of_streams(ss) {
    return pair(head(head(s))),
    () => zip_list_of_streams(append(tail(ss), list(steam_tail(head(ss)))));
}

// Q3

function partial_sums(s) {
    return pair(head(s),
        () => add_streams(stream_tail(s), partial_sums(s)));
}

// The function works for infinite and finite streams, but not empty streams