// 1. Write a function flatten_list, using the function accumulate,
// that “flattens” the given list of lists of numbers.
function accumulate(f, initial, xs) {
    return is_null(xs)
           ? initial
           : f(head(xs), accumulate(f, initial, tail(xs)));
}

function append(xs, ys) {
    return is_null(xs)
           ? ys
           : pair(head(xs), append(tail(xs), ys));
}

function flatten_list(lst) {
    return accumulate(append, null, lst);
}

const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
flatten_list(LoL);

// 2. Write a function tree_sum that takes a tree of numbers
// as argument and returns the sum of all the numbers in the tree.
function tree_sum(tree) {
    return is_null(tree)
		? 0
		: (is_list(head(tree))
		   ? tree_sum(head(tree))
		   : head(tree))
		  + tree_sum(tail(tree));
}

// const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
// tree_sum(my_tree);

// 3. The function accumulate_tree takes four arguments:
// a unary function f, a binary function op, an initial value, and a tree.
// The function f takes one argument and is used to map
// each data item in the tree to a value.
// The function op takes two arguments and is used to
// combine the results of two sub-trees.

function accumulate_tree(f, op, initial, tree) {
    return accumulate((xs, ys) => !is_list(xs)
                                  ? op(f(x), ys)
                                  : op(accumulate_tree(f, op, initial, x),
                                       ys)
                      , initial, tree);
}

// Q: What properties do the function op and the initial value
// need to have such that the result does not depend on
// the shape of the tree, and only on the elements?

// A: op(x, ys) needs to be commutative and associative
// initial needs to be a neutral element w.r.t. op