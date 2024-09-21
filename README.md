# Question: How do you solve the maximum subarray sum modulo a number? JavaScript Summary

The JavaScript function `maxSubArraySumModulo` solves the problem of finding the maximum subarray sum modulo a number. It takes three arguments: an array of integers (`arr`), the length of the array (`n`), and a modulo number (`m`). The function uses Kadane's algorithm, which is a dynamic programming algorithm used to find the maximum subarray sum in an array. It initializes two variables, `prefix` and `maxModulo`, to keep track of the current prefix sum and the maximum subarray sum modulo `m` found so far, respectively. It also creates a set, `sortedPrefix`, to store the prefix sums. The function then iterates over the array, updating the `prefix` and `maxModulo` variables and adding the current prefix sum to the `sortedPrefix` set. During each iteration, it also checks if there is a prefix sum in the `sortedPrefix` set that, when subtracted from the current prefix sum and added to `m`, results in a larger modulo `m` value. If such a value is found, it updates `maxModulo`. The function finally returns `maxModulo`, which is the maximum subarray sum modulo `m`.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of the logic used to solve the problem. Both versions use Kadane's algorithm to find the maximum subarray sum modulo a given number. However, there are a few differences in the language features and methods used in the two versions.

1. Type Annotations: TypeScript is a statically typed superset of JavaScript. In the TypeScript version, type annotations are used to specify the types of the function parameters and the return type of the function. For example, in the `maxSubArraySumModulo` function, `arr: number[]`, `n: number`, `m: number` are the function parameters and `: number` is the return type of the function. This helps in catching errors during compile time.

2. Helper Function: The TypeScript version uses a helper function `lowerBound` to find the first element in the sorted array that is not less than the target. This function uses a binary search algorithm, which is more efficient than the while loop used in the JavaScript version to iterate over the set of prefix sums.

3. Array instead of Set: In the JavaScript version, a Set is used to store the prefix sums, while in the TypeScript version, an Array is used. The `splice` method is used in the TypeScript version to insert the prefix sum at the correct position in the sorted array. This is different from the JavaScript version where the prefix sum is simply added to the Set.

4. No Iterator: In the JavaScript version, an iterator is used to iterate over the Set of prefix sums. In the TypeScript version, this is not needed as the `lowerBound` function is used to find the correct position in the sorted array.

Overall, the TypeScript version is more efficient due to the use of binary search and it provides better type safety due to the use of type annotations.

---

# C++ Differences

The C++ version of the solution is quite similar to the JavaScript version in terms of the algorithm used. Both versions use Kadane's algorithm to find the maximum subarray sum modulo a given number. They both also use a set to keep track of the prefix sums and update the maximum subarray sum modulo the given number whenever a larger value is found.

However, there are some differences in the language features and methods used in the two versions:

1. Data Types: In JavaScript, there is no explicit type declaration, while in C++, we have to declare the type of each variable. For example, the array in JavaScript can hold any type of data, while in C++, we declare it as a vector of long integers.

2. Input/Output: In the JavaScript version, the function takes the array, its length, and the modulo number as arguments. In the C++ version, these values are read from the standard input using the cin object, and the result is printed to the standard output using cout.

3. Iterators: In JavaScript, an iterator is created using the values() method and the next() method is used to move to the next element. In C++, an iterator is created using the lower_bound() method, which returns an iterator pointing to the first element that is not less than the current prefix sum plus one. The dereference operator (*) is used to access the value pointed to by the iterator.

4. Set Operations: In JavaScript, the add() method is used to insert a value into the set. In C++, the insert() method is used for the same purpose.

5. Function Definitions: In JavaScript, functions are defined using the function keyword, while in C++, functions are defined using the type of the value they return. For example, the main function in C++ returns an integer, so it is defined as int main().

6. Array Size: In JavaScript, the length of the array is passed as an argument to the function. In C++, the size of the vector is obtained using the size() method.

---
