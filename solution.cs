Here is a JavaScript solution using Kadane's algorithm:

```javascript
function maxSubArraySumModulo(arr, n, m) {
    let prefix = 0;
    let maxModulo = 0;
    let sortedPrefix = new Set();

    for (let i = 0; i < n; i++) {
        prefix = (prefix + arr[i]) % m;
        maxModulo = Math.max(maxModulo, prefix);
        let it = sortedPrefix.values();
        let iterator = it.next();
        while (!iterator.done) {
            if (iterator.value <= prefix) {
                iterator = it.next();
            } else {
                maxModulo = Math.max(maxModulo, (prefix - iterator.value + m) % m);
                break;
            }
        }
        sortedPrefix.add(prefix);
    }

    return maxModulo;
}

console.log(maxSubArraySumModulo([3, 3, 9, 9, 5], 5, 7));
```

This console application takes an array of integers, the length of the array, and a modulo number as input, and returns the maximum subarray sum modulo the given number. It uses Kadane's algorithm to find the maximum subarray sum, and a set to keep track of the prefix sums. The maximum subarray sum modulo the given number is updated whenever a larger value is found.