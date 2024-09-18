```cpp
#include <iostream>
#include <set>
#include <vector>
#include <algorithm>

using namespace std;

long maximumSum(vector<long> a, long m) {
    long maxModulo = 0;
    set<long> prefix;
    long current = 0;

    for(int i = 0; i < a.size(); i++) {
        current = (current + a[i]) % m;
        maxModulo = max(maxModulo, current);
        auto it = prefix.lower_bound(current + 1);
        if(it != prefix.end()) {
            maxModulo = max(maxModulo, (current - *it + m) % m);
        }
        prefix.insert(current);
    }
    return maxModulo;
}

int main() {
    int n;
    long m;
    cin >> n >> m;
    vector<long> a(n);
    for(int i = 0; i < n; i++) {
        cin >> a[i];
    }
    cout << maximumSum(a, m) << endl;
    return 0;
}
```