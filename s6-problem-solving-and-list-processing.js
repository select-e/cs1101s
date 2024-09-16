// 1. Write the function map using accumulate.

function my_map(f, xs) {
    return accumulate((x, next) => pair(f(x), next), null, xs);
}

// my_map(x => x + 1, list(1, 2, 3));

// 2. Write a function that takes in a list as its only argument and
// returns a list with duplicate elements removed.
// The order of the elements in the returned
// list does not matter. Use filter in your function.

function remove_duplicates(lst) {
    return is_null(lst)
           ? null
           : pair(head(lst),
                  remove_duplicates(filter(x => x !== head(lst),
                                    tail(lst))));
}

remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));

// 3. Writing a function which takes as parameters the
// amount x and a list of all the coins Louis has in his pocket,
// and returns a list of lists, such

function makeup_amount(x, coins) {
    if (x === 0) {
        return coins;
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // display(coins);
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        
        // Combinations that do not use the head coin
        // for the remaining amount.
        // const combi_B = ...
        
        // Combinations that use the head coin.
        const combi_C = pair(head(coins), makeup_amount(x - head(coins), tail(coins)));
        return append(combi_A, combi_C);
    }
}

makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// list(null);


