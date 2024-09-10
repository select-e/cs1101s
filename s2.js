function every_second(list) {
    
    function helper(xs, e) {
        return e > length(xs) - 1
          ? null
          : pair(list_ref(xs, e), helper(xs, e + 2));
    }
    
    return helper(list, 1);
}

every_second(list("a", "x", "b", "y", "c", "z", "d"));

const p = pair(1, list(2, 3, pair(4, null)));