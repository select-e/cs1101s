// Q1

// function linear_search(A, v) {
//     const len = array_length(A);
//     let i = 0;
//     while (i < len && A[i] !== v) {
//         i = i + 1;
//     }
//     return (i < len);
// }

// function make_search(A) {
//     return x => linear_search(A, x);
// }

function binary_search(A,v) {
    function search(low, high) {
        if (low > high) {
            return false;
        } else {
            const mid = math_floor((low + high) / 2);
            return (v === A[mid]) ||
                   (v < A[mid]
                    ? search(low, mid - 1)
                    : search(mid + 1, high));
        }
    }
    return search(0, array_length(A) - 1);
}

function make_optimized_search(A) {
    const A_sorted = [];
    
    function insert(x) {
        let index = 0;
        let identical = -1;
        for (let i = 0; i < array_length(A); i = i + 1) {
            if (A[i] === x) {
                identical = identical + 1;
            } else if (A[i] < x) {
                index = index + 1;
            }
        }
        for (let i = index; i <= index + identical; i = i + 1) {
            A_sorted[i] = x;
        }
    }
    
    for (let i = 0; i < array_length(A); i = i + 1) {
        insert(A[i]);
    }
    
    display(A_sorted);
    return x => binary_search(A_sorted, x);
}

// O(n) solution *(if max(arr) < n && min(arr) >= 0)

function make_optimised_search(A) {
    const B = [];
    for (let i = 0; i < array_length(A); i = i + 1) {
        B[A[i]] = 1;
    }
    const search = (arr,x) => {
        return arr[x] !== undefined;
    };
    
    return x => search(B,x);
}

// Θ(nlogn) solution

// function make_optimised_search(A) {
//     const len = array_length(A);
// }

// const tree = make_tree(2, 1, make_tree(3, make_empty_tree(), 4));
// set_head(tree, make_tree(0, 2, make_empty_tree()));
// const treeB = list(list(1, 2), list(3, 4));
// draw_data(treeB);
// draw_data(tree);

// const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
// const my_search = make_optimized_search(my_array);

// my_search(14); // returns true
// // many more calls to my_search
// // ...
// my_search(30); // returns false

// 1(i) O(n^2) // O(n) search, Θ(n) list
// 1(i) O(logn)


// 2(a) O(n^2)

// 2(b)

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let pointer = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(pointer) > head(tail(pointer))) {
                const temp = head(pointer);
                set_head(pointer, head(tail(pointer)));
                set_head(tail(pointer), temp);
            }
            pointer = tail(pointer);
        }   
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]

// Time: O(nk)
// Θ((n-k)k) = Θ(nk - k^2)

// Space: O(nk)
// Θ((n-k)k) = Θ(nk - k^2))