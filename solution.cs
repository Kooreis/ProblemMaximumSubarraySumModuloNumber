for (let i = 0; i < n; i++) {
        prefix = (prefix + arr[i]) % m;
        maxModulo = Math.max(maxModulo, prefix);
}