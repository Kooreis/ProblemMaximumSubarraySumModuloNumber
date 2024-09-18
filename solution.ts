Here is a TypeScript solution for the problem:

```typescript
function maxSubArraySumModulo(arr: number[], n: number, m: number): number {
    let prefix = 0;
    let maxModulo = 0;
    let sortedPrefix: number[] = [];
    for (let i = 0; i < n; i++) {
        prefix = (prefix + arr[i]) % m;
        maxModulo = Math.max(maxModulo, prefix);
        let it = lowerBound(sortedPrefix, prefix + 1);
        if (it != sortedPrefix.length) {
            maxModulo = Math.max(maxModulo, prefix - sortedPrefix[it] + m);
        }
        sortedPrefix.splice(it, 0, prefix);
    }
    return maxModulo;
}

function lowerBound(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

let arr = [3, 3, 9, 9, 5];
let n = arr.length;
let m = 7;
console.log(maxSubArraySumModulo(arr, n, m));
```

This console application will output the maximum subarray sum modulo a number. The `maxSubArraySumModulo` function calculates the maximum subarray sum modulo a number. The `lowerBound` function is a helper function that finds the first element in the sorted array that is not less than the target.