function sums(lst) {
    
    function add(x) {
        return is_null(tail(x)) || is_null(tail(tail(x)))
               ? head(x)
               : head(x) + add(tail(tail(x)));
    }
    
    return list(add(lst), add(tail(lst)));
}

sums(list(1, 2, 3, 4, 5));